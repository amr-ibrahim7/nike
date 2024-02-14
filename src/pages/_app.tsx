import { type AppType } from "next/app";
import Navbar from "~/components/ui/Navbar";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import "~/styles/globals.css";
import Footer from "~/components/ui/Footer";
// import Navbar from "@/components/ui/Navbar";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    // <StoreProvider>
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Component {...pageProps} />
        {/* <Analytics /> */}
        {/* <ToastContainer /> */}
      </MaxWidthWrapper>
      <Footer />
    </>
    // </StoreProvider>
  );
};

export default MyApp;
