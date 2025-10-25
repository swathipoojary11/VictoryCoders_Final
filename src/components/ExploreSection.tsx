import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Eye } from "lucide-react";
import { temples } from "@/data/temples";
import { Link } from "react-router-dom";

const ExploreSection = () => {
  const [revealedTemple, setRevealedTemple] = useState<typeof temples[0] | null>(null);

  const revealRandomTemple = () => {
    const randomIndex = Math.floor(Math.random() * temples.length);
    setRevealedTemple(temples[randomIndex]);
  };

  return (
    <section id="explore" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Eye className="h-4 w-4 text-primary animate-glow" />
              <span className="text-primary text-sm font-semibold">Mystery Awaits</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mystery Explore
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Click to uncover hidden temples, folk legends, and ancient rituals from the sacred shores of Tulunadu
            </p>
          </div>

          <div className="animate-scale-in">
            <Button
              onClick={revealRandomTemple}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-full hover-glow group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="h-6 w-6 animate-glow" />
                Reveal a Temple Secret
                <Sparkles className="h-6 w-6 animate-glow" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary to-accent/20 animate-float opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>

          {revealedTemple && (
            <Card className="border-border temple-shadow animate-scale-in bg-card mt-8">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <Sparkles className="h-5 w-5 text-accent animate-glow" />
                  <div className="h-px flex-1 bg-gradient-to-r from-primary via-primary to-transparent" />
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-bold text-primary">
                    {revealedTemple.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {revealedTemple.location}
                    </span>
                    <span>•</span>
                    <span>{revealedTemple.deity}</span>
                  </div>

                  <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                    {revealedTemple.description}
                  </p>

                  <Link to={`/temple/${revealedTemple.id}`}>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More About This Temple
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <Sparkles className="h-5 w-5 text-accent animate-glow" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary to-transparent" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Decorative Element */}
          <div className="pt-8 opacity-30">
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl animate-float">✨</span>
              <span className="text-4xl animate-float" style={{ animationDelay: "0.5s" }}>🕉️</span>
              <span className="text-4xl animate-float" style={{ animationDelay: "1s" }}>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
