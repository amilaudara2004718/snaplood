import Footer from "./_componets/ui/Footer";
import NavBar from "./_componets/ui/NavBar";
import "./globals.css";
import { Roboto, Lato } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"], // Adjust as needed
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"], // Adjust as needed
});

export const metadata = {
  title: "SnapLood-Video Downloader",
  description: "Download Videos From Multiple Platforms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={`${roboto.variable} ${lato.variable} antialiased bg-[#161616]`}>
        <NavBar />
        <div className="relative mx-4 my-4">
          <div className="absolute inset-0 bg-[#161616] z-10" />
          <div className="border-b border-gray-500 opacity-70 z-20 relative" />
        </div>
        {children}
        {/* Move the Footer outside to ensure it appears below all content */}
        <Footer />
      </body>
    </html>
  );
}
