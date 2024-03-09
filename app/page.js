import Header from "./components/header/Header";
import ServicesSection from "./components/services/ServicesSection";
import Testimonials from "./components/testimonials/Testimonials";
import Faqs from "./components/faqs/Faqs";


export default function Home() {
  return (
    <>
      <Header />
      <ServicesSection />
      <Testimonials />
      <Faqs />
    </>
  );
}
