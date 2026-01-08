import "./globals.css";
import Providers from "@/components/Providers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloater from "@/components/WhatsAppFloater";

/* ✅ Proper viewport control */
export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 0.95, // visual zoom-out
    maximumScale: 1,
    userScalable: false,
  },
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
