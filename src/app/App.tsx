import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

export default function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <Locations />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}