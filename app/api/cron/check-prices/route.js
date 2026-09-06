import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Price check endpoint is working. Use POST to trigger price checks.",
    });
}