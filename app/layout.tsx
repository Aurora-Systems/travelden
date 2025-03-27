import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import {Bar, Footer} from './components/navbar';
import "./index.css"

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} `}>
        <Bar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
