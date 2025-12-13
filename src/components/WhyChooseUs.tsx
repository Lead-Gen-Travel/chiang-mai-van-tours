import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, Heart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Comfort & Safety",
    description: "Newer vans, seat belts for everyone, cold water on board",
  },
  {
    icon: MessageCircle,
    title: "Easy Communication",
    description: "Chat in English on WhatsApp or Line before you book",
  },
  {
    icon: Heart,
    title: "Real Ethical Experiences",
    description: "Only verified ethical elephant sanctuaries and local partners",
  },
];

export function WhyChooseUs() {
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
            Why Travelers Choose Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
