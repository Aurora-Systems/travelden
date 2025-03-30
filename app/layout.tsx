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
  title: "Travel Den",
  description: "Your trusted Travel Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} `}>

      <div className='wrapper'>
      <Bar/>



        {children}
    
        <Footer/>
        <br/>
    <br/><br/>
    <div style={{height:"10vh"}}>

    </div>
        </div>

      </body>
    </html>
  );
}
