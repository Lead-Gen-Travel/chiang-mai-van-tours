import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-van-tour.webp";
export function HeroSection() {
  return <section className="min-h-screen pt-24 pb-16 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Private van tours in Chiang Mai with{" "}
              <span className="text-gradient">Orethai - The Local Legend</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Custom day trips to ethical elephant sanctuaries, temples, white water rafting, and more. 
              Door to door pickup with a local guide who speaks your language.
            </p>

            {/* Key Features */}
            <ul className="space-y-3 mb-10">
              {["Full day and half day private tours", "Shuttle service up to three hours from Chiang Mai", "English speaking driver and guide", "Safe, clean vans with strong air conditioning"].map((feature, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.4 + index * 0.1
            }} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>)}
            </ul>

            {/* CTA Button */}
            <Button variant="hero" size="xl" asChild>
              <a href="https://buy.stripe.com/fZu7sM7YtfAlcVS5sbbEA01" target="_blank" rel="noopener noreferrer">
                Reserve your tour
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              $75 deposit. Remaining balance is paid on the day of the tour.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img src={heroImage} alt="Chiang Mai private van tour with friendly guide and happy travelers at scenic mountain viewpoint" className="w-full h-auto object-cover aspect-[4/3]" />
              
              {/* Rating Badge */}
              <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <span className="font-semibold text-foreground">4.9</span>
                  <span className="text-muted-foreground text-sm">from 300+ happy travelers</span>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>;
}