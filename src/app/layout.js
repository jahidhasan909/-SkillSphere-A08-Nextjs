import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import Footer from "@/Components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

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
        <main className=" grow">
          {children}
        </main>
        <ToastContainer position="top-center" />
        <Footer></Footer>
      </body>
    </html>
  );
}
