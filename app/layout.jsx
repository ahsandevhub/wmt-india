import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "WeMsaterTrade - India's Leading Prop Firm",
  description:
    "WeMasterTrade - Elevate Your Prop Firm Success With Top Trader Copying",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased bg-quinary-yellow`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
