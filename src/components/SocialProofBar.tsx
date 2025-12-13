import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function SocialProofBar() {
  return (
    <section className="py-8 bg-secondary/50 border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Trust Statement */}
          <p className="text-muted-foreground font-medium text-center lg:text-left">
            Trusted by travelers from <span className="text-foreground font-semibold">20+ countries</span>
          </p>

          {/* Platform Logos */}
          <div className="flex items-center gap-8 opacity-60">
            <a href="https://www.instagram.com/orathai_265/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@orathai_265" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="text-sm font-medium">TikTok</span>
            </a>
          </div>

          {/* Quote */}
          <div className="flex items-center gap-3 max-w-md">
            <Quote className="h-8 w-8 text-primary/40 flex-shrink-0" />
            <p className="text-sm italic text-muted-foreground">
              "Best day we had in Chiang Mai, felt like traveling with a friend."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
