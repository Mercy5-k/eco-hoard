import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductDemo from "@/components/ProductDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ProductDemo />
      <Footer />
    </div>
  );
};

export default Index;
