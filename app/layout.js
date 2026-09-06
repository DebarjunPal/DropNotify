import { Toaster } from "@/components/ui/sonner";  import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "DropNotify",
  description: "Made with ❤️ by Debarjun Pal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}
