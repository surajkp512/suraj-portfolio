import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suraj Kumar Parida | Backend Engineer",
  description: "Backend Engineer specializing in Python, Django, and scalable systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mono.className} bg-black text-green-400`}>
        {children}
      </body>
    </html>
  );
}
