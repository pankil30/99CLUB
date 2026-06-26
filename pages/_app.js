import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer";
import Head from "next/head"; 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>99 Club</title>
        <link rel="icon" href="/99logo.jpg" sizes="any" />
      </Head>

      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </CartProvider>
    </>
  );
}