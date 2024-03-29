import Navbar from "@/components/general/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "@/components/general/Footer";
import { UserLoggedInProvider } from "@/context/IsLoggedIn.context";

export const metadata: Metadata = {
  title: "Home | TYTN ",
  description: "TYTN wears home of great wears",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-full">
          <UserLoggedInProvider>
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
          </UserLoggedInProvider>
        </div>
      </body>
    </html>
  );
}
