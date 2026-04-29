import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar/Navbar";

const OutfitStyle = Outfit({
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html
      data-theme='light'
      lang="en"
      className={`${OutfitStyle.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
