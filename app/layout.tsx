import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shritik Enterprises LLP | Cashew & Dehydrated Food Exporter India",
    template: "%s | Shritik Enterprises LLP",
  },
  description:
    "Shritik Enterprises LLP is an India-based manufacturer and exporter of premium cashew kernels, dehydrated onion, garlic, and ginger for global food businesses. Certified with FSSAI, APEDA, IEC, ISO, Halal & Kosher.",
  keywords: [
    "cashew kernels exporter India",
    "dehydrated onion supplier",
    "dehydrated garlic exporter",
    "dehydrated ginger supplier",
    "Indian food ingredients exporter",
    "FSSAI certified exporter",
    "bulk food ingredients India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shritik Enterprises LLP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
