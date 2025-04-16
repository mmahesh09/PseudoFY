import Home from '@/components/Home';
import NavbarComponent from '@/components/NavbarComponent'; // This is the full navbar component
import  { FeaturesSectionDemo } from '@/components/Features';
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"
const Page = () => {
  return (
    <div>
      <NavbarComponent />
      <Home />
      <FeaturesSectionDemo/>
      <Faq/>
      <Footer/>
    
    </div>
  );
};

export default Page;
