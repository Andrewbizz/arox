// /pages/Home.tsx

import AboutSection from "../sections/About";
import ContactPage from "../sections/Contact";
import Footer from "../sections/Footer";
import HeroSection from "../sections/Hero";
import Services from "../sections/Services";
import TestimonialSection from "../sections/Testimonials";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <AboutSection />

      <TestimonialSection />
      <ContactPage />
      <Footer />
    </main>
  );
};

export default Home;
