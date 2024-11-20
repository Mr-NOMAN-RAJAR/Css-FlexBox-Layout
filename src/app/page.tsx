import Image from "next/image";
import Header from "./Components/Header/page";
import HeroSection from "./Components/Hero/page";
import Footer from "./Components/Footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}
