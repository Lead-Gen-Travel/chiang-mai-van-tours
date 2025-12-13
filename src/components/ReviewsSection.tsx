import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    country: "Australia",
    rating: 5,
    text: "We booked a full day elephant and temple trip. Ying picked us up at 7 in the morning, had snacks ready, and took photos for us the whole day. Felt more like traveling with a friend than a tour.",
  },
  {
    name: "Thomas K.",
    country: "Germany",
    rating: 5,
    text: "The white water rafting was incredible! Ying knew all the best spots for photos and made sure we had an amazing time. The lunch at the jungle cafe was a bonus surprise.",
  },
  {
    name: "Emily & Jake",
    country: "USA",
    rating: 5,
    text: "Best decision we made in Thailand. Ying customized our entire day based on what we wanted to see. The van was spotless and the AC was a lifesaver. Highly recommend!",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Travelers Say
          </h2>
          <p className="text-muted-foreground">
            Real reviews from happy guests
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="text-primary font-medium hover:underline inline-flex items-center gap-2"
          >
            View all reviews on Google & TripAdvisor
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
