import { useEffect, useRef, useState } from "react";
import { Temple } from "@/data/temples";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  X,
  Volume2,
  Navigation,
  Bookmark,
  Share2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import templeImage1 from "@/assets/temple-card-1.jpg";
import templeImage2 from "@/assets/temple-card-2.jpg";

interface TempleDetailPanelProps {
  temple: Temple | null;
  onClose: () => void;
  nearbyTemples?: Temple[];
}

const TempleDetailPanel = ({ temple, onClose, nearbyTemples = [] }: TempleDetailPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    setSpeechSupported('speechSynthesis' in window);
  }, []);

  useEffect(() => {
    if (temple && panelRef.current) {
      // Focus trap
      const focusableElements = panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      if (isSpeaking) {
        window.speechSynthesis?.cancel();
      }
    };
  }, [temple, onClose, isSpeaking]);

  if (!temple) return null;

  const images = [templeImage1, templeImage2];
  const currentImage = images[currentImageIndex];

  const handleTTS = () => {
    if (!speechSupported) {
      toast.error("Text-to-speech is not supported in your browser");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      `${temple.name}. ${temple.description}. This temple is located in ${temple.location}.`
    );
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    toast.success("Playing temple story");
  };

  const handleDirections = () => {
    toast.info("Opening directions in Google Maps...");
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(temple.name + " " + temple.location)}`,
      "_blank"
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: temple.name,
        text: temple.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleSave = () => {
    toast.success("Temple saved to your collection");
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />
      
      <aside
        ref={panelRef}
        id={`detail-${temple.id}`}
        className="detail-panel fixed top-0 right-0 h-full w-full md:w-[44%] md:min-w-[420px] bg-background z-50 overflow-y-auto shadow-2xl animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`title-${temple.id}`}
      >
        <header className="dp-header sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-4 z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h2 id={`title-${temple.id}`} className="text-2xl font-serif font-bold text-foreground">
                {temple.name}
              </h2>
              <div className="dp-sub flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{temple.location} • {temple.region}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-primary text-primary-foreground">
                  {temple.deity}
                </Badge>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="dp-close"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="dp-hero">
          <div className="dp-gallery relative">
            <img
              src={currentImage}
              alt={temple.name}
              className="dp-main w-full h-64 md:h-80 object-cover"
            />
            
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/20 hover:bg-black/40 text-white"
                onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/20 hover:bg-black/40 text-white"
                onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="dp-thumbs absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="dp-actions flex flex-wrap gap-2 p-4 border-b border-border">
            <Button
              id={`tts-${temple.id}`}
              className="btn-tts flex-1"
              variant={isSpeaking ? "default" : "outline"}
              onClick={handleTTS}
              aria-pressed={isSpeaking}
            >
              <Volume2 className="mr-2 h-4 w-4" />
              {isSpeaking ? "Stop Story" : "Play 60s Story"}
            </Button>
            
            <Button
              className="btn-directions"
              variant="outline"
              onClick={handleDirections}
            >
              <Navigation className="mr-2 h-4 w-4" />
              Directions
            </Button>
            
            <Button
              className="btn-save"
              variant="outline"
              size="icon"
              onClick={handleSave}
            >
              <Bookmark className="h-4 w-4" />
            </Button>
            
            <Button
              className="btn-share"
              variant="outline"
              size="icon"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <section className="dp-content p-6 space-y-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Quick Facts
            </h3>
            <ul className="dp-facts space-y-2">
              <li className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong className="text-sm font-medium">Primary Deity:</strong>
                  <span className="text-sm text-muted-foreground ml-2">{temple.deity}</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong className="text-sm font-medium">Location:</strong>
                  <span className="text-sm text-muted-foreground ml-2">{temple.location}, {temple.region}</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Story
            </h3>
            <div className="dp-story text-foreground/90 leading-relaxed">
              <p>{temple.description}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Festivals & Rituals
            </h3>
            <p className="text-sm text-muted-foreground">
              Festival information and special poojas for {temple.name} will be updated soon.
              Visit the temple or contact local authorities for current schedules.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Visitor Info
            </h3>
            <div className="space-y-2">
              <p className="text-sm">
                <Clock className="inline h-4 w-4 mr-2 text-primary" />
                <strong>Timings:</strong> <span className="text-muted-foreground">6:00 AM – 8:00 PM (typical)</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Please verify timings before visiting as they may vary on festival days.
              </p>
            </div>
          </div>

          {nearbyTemples.length > 0 && (
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Nearby Temples
              </h3>
              <div className="space-y-2">
                {nearbyTemples.slice(0, 3).map((nearby) => (
                  <button
                    key={nearby.id}
                    className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    onClick={() => window.location.href = `/temple/${nearby.id}`}
                  >
                    <p className="font-medium text-sm text-foreground">{nearby.name}</p>
                    <p className="text-xs text-muted-foreground">{nearby.location}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="text-xs text-muted-foreground pt-4 border-t border-border">
            <p>
              Source: Community contributions • Last updated: 2025-10-25
            </p>
          </div>
        </section>
      </aside>
    </>
  );
};

export default TempleDetailPanel;
