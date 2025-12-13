import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to plan your Chiang Mai day?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Tell us your dates and we'll reply with ideas and prices within a few hours.
          </p>

          <div className="flex justify-center mb-12">
            <Button
              variant="default"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <a href="tel:+66123456789" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-5 w-5" />
              <span>+66 123 456 789</span>
            </a>
            <a href="mailto:hello@chiangmaivantours.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span>hello@chiangmaivantours.com</span>
            </a>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span>Line: @yingvantours</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
