import { Outfit } from "next/font/google";
import "./globals.css";


import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "all utme cutoff mark of all nigeria university",
  description: "check your university choice cutoff mark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div>
          {children}
          <Toaster />
        </div>
        </body>
    </html>
  );
}
