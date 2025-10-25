import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles } from "lucide-react";
import type { Temple } from "@/data/temples";
import templeImage1 from "@/assets/temple-card-1.jpg";
import templeImage2 from "@/assets/temple-card-2.jpg";

interface TempleCardProps {
  temple: Temple;
  index: number;
}

const TempleCard = ({ temple, index }: TempleCardProps) => {
  // Alternate between two temple images for variety
  const displayImage = index % 2 === 0 ? templeImage1 : templeImage2;

  return (
    <Card className="group overflow-hidden border-border hover-lift temple-shadow hover-glow bg-card">
      <div className="relative h-56 overflow-hidden">
        <img
          src={displayImage}
          alt={temple.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Region Badge */}
        <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-0">
          {temple.region}
        </Badge>

        {/* Deity Tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="h-3 w-3 text-accent" />
          <span className="text-white text-xs font-medium">{temple.deity}</span>
        </div>
      </div>

      <CardContent className="p-5 space-y-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {temple.name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span>{temple.location}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {temple.shortDescription}
        </p>

        <Link to={`/temple/${temple.id}`}>
          <Button 
            variant="ghost" 
            className="w-full mt-2 text-primary hover:text-primary hover:bg-primary/10 font-medium"
          >
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TempleCard;
