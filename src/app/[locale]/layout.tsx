import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/front/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { cairo,tajawal,poppins } from "@/fonts/fonts";
import MainNav from "@/components/MainNav";
import { cn } from "@/lib/utils";




export const metadata: Metadata = {
  title: "Siffa",
  description: "Siffa webSite",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: "ar"|"en"};
}>) {
  const messages = useMessages()
 
  
  
  
  return (
    <html lang="{locale}" dir={locale=='en'?"ltr":"rtl"}>
      <NextIntlClientProvider messages={messages} locale={locale}>
      
      <body className={ cn(locale ==='ar'?  cairo.className : poppins.className )  }>
        
        <Navbar locale={locale}/>
        {children}
      </body>
      </NextIntlClientProvider>
    </html>
  );
}
