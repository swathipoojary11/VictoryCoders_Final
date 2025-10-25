import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TempleCard from "@/components/TempleCard";
import FestivalsSection from "@/components/FestivalsSection";
import ExploreSection from "@/components/ExploreSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { temples } from "@/data/temples";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Temples Section */}
      <section id="temples" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-4 w-4 text-primary animate-glow" />
              <span className="text-primary text-sm font-semibold">Divine Heritage</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Temples
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the sacred shrines that have stood as beacons of faith for centuries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {temples.map((temple, index) => (
              <div
                key={temple.id}
                className="animate-fade-in"
                style={{ animationDelay: `${(index % 9) * 0.05}s` }}
              >
                <TempleCard temple={temple} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FestivalsSection />
      <ExploreSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
