import { motion } from "framer-motion";
import { Snowflake, Users, Shield, Sparkles, Check } from "lucide-react";
import vanInterior from "@/assets/van-interior.jpg";
import vanExterior from "@/assets/van-exterior.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Brand New Vehicle",
    description: "2024 model with less than 10,000 km"
  },
  {
    icon: Snowflake,
    title: "Powerful AC",
    description: "Stay cool even in Thailand's heat"
  },
  {
    icon: Users,
    title: "Spacious Seating",
    description: "Comfortable seats for up to 10 guests"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Seat belts for everyone, first aid kit"
  }
];

const amenities = [
  "Complimentary cold water",
  "Phone charging ports",
  "Tinted windows for privacy",
  "Luggage space for day bags",
  "Clean and sanitized daily",
  "Child seats available on request"
];

export function VanShowcase() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel in Comfort
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our brand new van is designed for your comfort and safety. Clean, spacious, and ready for adventure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2">
              <img
                src={vanExterior}
                alt="White Toyota van exterior at scenic mountain viewpoint"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
            <div className="col-span-2">
              <img
                src={vanInterior}
                alt="Spacious clean van interior with leather seats"
                className="w-full h-48 md:h-56 object-cover rounded-2xl shadow-card"
              />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-5 rounded-xl shadow-card"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card">
              <h4 className="font-semibold text-foreground mb-4">Every trip includes:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
