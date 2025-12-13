import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tours } from "@/lib/tours-data";

interface TourCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  duration: string;
  includes: string[];
  price: string;
  isCustom?: boolean;
  delay?: number;
}

function TourCard({ id, image, title, description, duration, includes, price, isCustom, delay = 0 }: TourCardProps) {
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
            <span>{includes[0]}</span>
          </div>
        </div>

        <div>
          <span className="text-xs text-muted-foreground">Starting at</span>
          <p className="text-lg font-semibold text-foreground">{price}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ToursSection() {
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
            <TourCard 
              key={tour.id} 
              id={tour.id}
              image={tour.image}
              title={tour.title}
              description={tour.description}
              duration={tour.duration}
              includes={tour.includes}
              price={tour.price}
              isCustom={tour.isCustom}
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
