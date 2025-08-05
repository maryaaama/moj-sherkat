import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contact";
import Portfo from "@/components/portfo";
import HeroWithClients from "@/components/HeroWithClients";
import Services from "@/components/servises";


export default function Home() {
  return (
    <>
     
      <Navbar/>
        <HeroWithClients/>
        <Portfo/>
        <Services/>
        <AboutUs/>
        <ContactUs/>
      <Footer/>
      
    </>
  );
}
