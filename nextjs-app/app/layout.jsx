// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohamed adan",
  description: "Web Development tutorial and courses",
  keyword:
    "web development, Web Design, React, Nodejs, Angularjs, Go, React-Native, Express, MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
