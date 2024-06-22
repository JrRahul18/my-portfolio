import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://smtpjs.com/v3/smtp.js" async></script>
      </head>
      <body className={inter.className}>
        <Header className="headerCont" />
        <div className="children">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
