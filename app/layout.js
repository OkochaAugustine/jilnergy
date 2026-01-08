import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloater from "@/components/WhatsAppFloater";

/* ✅ Correct viewport export */
export const viewport = {
  width: "device-width",
  initialScale: 0.95,
  maximumScale: 1,
  userScalable: false,
};

/* Optional metadata (SEO only) */
export const metadata = {
  title: "Jilnergy Solar",
  description: "Clean energy solutions for homes and businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloater />
        </Providers>
      </body>
    </html>
  );
}
