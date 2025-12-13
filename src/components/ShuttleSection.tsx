import { motion } from "framer-motion";
import { Plane, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  { from: "Chiang Mai", to: "Pai", time: "~3 hours" },
  { from: "Chiang Mai", to: "Chiang Rai", time: "~3 hours" },
  { from: "Chiang Mai", to: "Doi Inthanon", time: "~2 hours" },
];

export function ShuttleSection() {
  return (
    <section id="shuttle" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Private shuttle service up to three hours from Chiang Mai
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Need a ride to Pai, Chiang Rai, or a mountain resort? Our vans pick you up at hotel 
              or airport and take you anywhere within three hours of Chiang Mai. No bus crowds, no shared vans.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Airport pickup & dropoff</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Hotel to hotel transfers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Long day trips to Pai, Chiang Rai</span>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Get Shuttle Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Right - Route Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {routes.map((route, index) => (
              <motion.div
                key={route.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card flex items-center justify-between group hover:shadow-hover transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{route.from} → {route.to}</p>
                    <p className="text-sm text-muted-foreground">Private transfer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground">{route.time}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-gradient-warm rounded-xl p-6 text-primary-foreground">
              <p className="font-semibold mb-2">Custom Routes Available</p>
              <p className="text-sm opacity-90">
                Going somewhere not listed? We can take you anywhere within 3 hours of Chiang Mai.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
