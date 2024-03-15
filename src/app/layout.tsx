"use client";
import type { Metadata } from "next";
import { Noto_Sans, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import Store from "../utils/redux/store";
import { AuthProvider } from "@/components/auth_context";
import "react-toastify/dist/ReactToastify.css";

const Noto_San = Noto_Sans({
  variable: "--font-Noto_Sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "400"],
});
const Poppin = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "400", "300"],
});
const Ubunt = Ubuntu({
  variable: "--font-Ubuntu",
  subsets: ["latin"],
  weight: ["300", "500", "700", "400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Poppin.variable} ${Noto_San.variable} ${Ubunt.variable} `}
      >
        <Provider store={Store}>
          <>
            <style jsx global>{`
              body {
                font-family: ${Noto_San.style.fontFamily};
              }
            `}</style>
            <div>{children}</div>
          </>
        </Provider>
      </body>
    </html>
  );
}
