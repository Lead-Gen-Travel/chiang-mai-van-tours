import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    step: "1",
    title: "Pay a small deposit and fill out your info",
    description: "Secure your booking with a 2,500 baht deposit",
  },
  {
    icon: MessageCircle,
    step: "2",
    title: "Speak with your tour guide",
    description: "Your guide will reach out to plan and customize your adventure",
  },
  {
    icon: CalendarCheck,
    step: "3",
    title: "Build out your perfect day",
    description: "Work together to create your ideal Chiang Mai experience",
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
