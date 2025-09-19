
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}

export default App