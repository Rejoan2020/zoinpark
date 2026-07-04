import { Inter } from "next/font/google"; 
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Zoin Park",
  description: "Cryptocurrency and NFT marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="min-h-full flex flex-col gradientbg2">
        {children}
      </body>
    </html>
  );
}
