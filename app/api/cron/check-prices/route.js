import { NextResponse } from "next/server";
import { createClient } from "supabase/supabase-js";
import { scrapeProduct } from "@/lib/firecrawl";

export async function GET() {
    return NextResponse.json({
        message: "Price check endpoint is working. Use POST to trigger price checks.",
    });
}

export async function POST() {
    try {
        const authHeader = request.headers.get("authorization");
        const cronsecret = process.env.CRON_SECRET;

        if (!cronsecret || authHeader !== `Bearer ${cronsecret}`) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY
        );

        const { data: products, error: productsError } = await supabase
            .from("products")
            .select("*");

        if (productsError) throw productsError;

        console.log('Found $(products.length) products to check.');

        const results = {
            total: products.length,
            updated: 0,
            failed: 0,
            priceChanges: 0,
            alertsSent: 0,
        };

        for (const product of products) {
            try{
                const productData = await scrapeProduct(product.url);

                if (!productData.currentPrice) {
                    results.failed++;
                    continue;
                }

                const newPrice = parseFloat(productData.currentPrice);
                const oldPrice = parseFloat(product.current_price);

                await supabase.from("products").update({
                    current_price: newPrice,
                    currency: productData.currencyCode || product.currency,
                    name: productData.productName || product.name,
                    image_url: productData.productImageUrl || product.image_url,
                    updated_at: new Date().toISOString(),
                })
                .eq("id", product.id);

               if (newPrice !== oldPrice) {
                    await supabase.from("price_history").insert({
                        product_id: product.id,
                        price: newPrice,
                        currency: productData.currencyCode || product.currency,
                    });

                    results.priceChanges++;

                    if (newPrice < oldPrice) {
                        //Notification
                        const {
                            data: { user },
                        } = await supabase.auth.admin.getUserById(product.user_id);

                        if (user?.email) {
                            // Send email notification
                        }
                    }
               }

               results.updated++;
            } catch (error) {
                console.error('Error checking product $(product.id):', error);
                results.failed++;
            }
        }

        return NextResponse.json({
            success: true,
            message: "Price check completed.",
            results,
        })
    } catch (error) {
        console.error('Cron job error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}