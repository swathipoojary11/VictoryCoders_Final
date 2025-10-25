import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";

const Hero = () => {
  const scrollToTemples = () => {
    const templesSection = document.getElementById("temples");
    templesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mangalore Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4 text-accent animate-glow" />
            <span className="text-white/90 text-sm font-medium">
              Sacred Heritage of Tulunadu
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Experience the{" "}
            <span className="text-accent">Sacred Shores</span>
          </h1>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90">
            Temples of Mangalore & Udupi
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore stories, rituals, and architectural wonders of the Tulunadu
            region's divine temples
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={scrollToTemples}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover-glow group"
            >
              <Sparkles className="mr-2 h-5 w-5 animate-glow" />
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-serif">
                25+
              </div>
              <div className="text-sm text-white/70 mt-1">Sacred Temples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-serif">
                1000+
              </div>
              <div className="text-sm text-white/70 mt-1">Years of History</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-serif">
                ∞
              </div>
              <div className="text-sm text-white/70 mt-1">Divine Blessings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
