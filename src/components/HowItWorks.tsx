import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Send us your dates and group size",
    description: "Message us on WhatsApp or fill out our quick form",
  },
  {
    icon: CalendarCheck,
    step: "2",
    title: "Choose a tour or build your own day",
    description: "Pick from popular tours or customize your adventure",
  },
  {
    icon: CreditCard,
    step: "3",
    title: "Confirm and pay a small deposit",
    description: "Lock in your van and you're all set!",
  },
];

export function HowItWorks() {
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
            How Booking Works
          </h2>
          <p className="text-muted-foreground">
            Three simple steps to your perfect Chiang Mai day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="h-20 w-20 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-6 relative z-10 shadow-warm">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <span className="inline-block bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">
                Step {step.step}
              </span>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
