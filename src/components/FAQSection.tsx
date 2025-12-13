import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the elephant sanctuary really ethical?",
    answer: "Yes, 100%. We only partner with sanctuaries that practice true ethical treatment — no riding, no chains, no performances. Elephants roam freely and you can feed and walk alongside them in their natural habitat.",
  },
  {
    question: "Can you pick us up from the airport?",
    answer: "Absolutely! We offer airport pickup and dropoff services. Just let us know your flight details and we'll be there waiting for you with a name sign and cold water ready.",
  },
  {
    question: "How many people can fit in one van?",
    answer: "Our vans comfortably seat up to 10 passengers with luggage space. For larger groups, we can arrange multiple vans traveling together.",
  },
  {
    question: "Do you offer child seats?",
    answer: "Yes, we have infant car seats and booster seats available upon request. Just mention the ages of your children when booking and we'll have the appropriate seats ready.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 48 hours before your tour. Cancellations within 48 hours will receive a 50% refund. No-shows are non-refundable. We understand plans change — just let us know as soon as possible!",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
