import "./globals.css";
import localFont from "next/font/local";
// components
import NavigationBar from "@/shared/navigationBar/navBar";
import Footer from "@/shared/footer";
import NavigationBarData from "@/shared/navigationBar";

const krub = localFont({
  variable: "--font-krub",
  src: [
    {
      path: "./fonts/Krub-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Krub-Normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Krub-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Krub-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Krub-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Mobile Shop by Declives",
  description:
    "A comprehensive mobile shopping platform developed by Declives Corporation Ltd. , offering the latest mobile devices and accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${krub.variable}`}>
        <NavigationBarData />
        {children}
        <Footer />
      </body>
    </html>
  );
}
