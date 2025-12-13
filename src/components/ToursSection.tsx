import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import elephantTour from "@/assets/tour-elephant.jpg";
import raftingTour from "@/assets/tour-rafting.jpg";
import atvTour from "@/assets/tour-atv.jpg";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  includes: string;
  price: string;
  isCustom?: boolean;
  delay?: number;
}

function TourCard({ image, title, description, duration, includes, price, isCustom, delay = 0 }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {isCustom && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
            <Sparkles className="h-4 w-4" />
            Build Your Own
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-accent" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-accent" />
            <span>{includes}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <p className="text-lg font-semibold text-foreground">{price}</p>
          </div>
          <Button variant="outline" size="sm" className="group/btn">
            View details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function ToursSection() {
  const tours = [
    {
      image: elephantTour,
      title: "Ethical Elephant Sanctuary & Doi Suthep Temple",
      description: "Visit an ethical elephant sanctuary where you only feed and walk beside them. Then watch sunset at Doi Suthep with a view over Chiang Mai.",
      duration: "8 hours",
      includes: "Private van, guide, lunch option",
      price: "฿4,500 per group",
    },
    {
      image: raftingTour,
      title: "White Water Rafting & Jungle Village",
      description: "Ride the river with certified guides, then relax in a mountain village cafe before heading back to town.",
      duration: "7 hours",
      includes: "Private van, safety gear, snacks",
      price: "฿3,800 per group",
    },
    {
      image: atvTour,
      title: "ATV Adventure & Hidden Temple",
      description: "Explore mountain viewpoints, rice fields, and discover a temple not in the usual guide book.",
      duration: "6 hours",
      includes: "Private van, ATV rental, helmet",
      price: "฿4,200 per group",
    },
    {
      image: elephantTour,
      title: "Build Your Perfect Chiang Mai Day",
      description: "Tell us what you like and we design your route. Food, temples, coffee farms, hot springs — you choose.",
      duration: "Flexible",
      includes: "Custom itinerary, private van",
      price: "Custom quote",
      isCustom: true,
    },
  ];

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Chiang Mai Tours
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Private adventures designed around you. Every tour includes hotel pickup and drop-off.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <TourCard key={tour.title} {...tour} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
