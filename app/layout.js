import { Inter } from "next/font/google";
import "./globals.css";
import { dbconnect } from "@/lib/mongo.js"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Zoin Park",
  description: "Cryptocurrency and NFT marketplace",
};

export default async function RootLayout({ children }) {
  await dbconnect();
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="min-h-screen flex flex-col gradientbg2">
        {children}
      </body>
    </html>
  );
}
