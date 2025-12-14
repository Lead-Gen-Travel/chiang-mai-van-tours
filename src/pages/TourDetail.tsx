import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Check, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { getTourById } from "@/lib/tours-data";

export default function TourDetail() {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = getTourById(tourId || "");

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Tour not found</h1>
          <Link to="/#tours">
            <Button>View all tours</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <Link 
              to="/#tours" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all tours
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {tour.title}
            </motion.h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {tour.duration}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Chiang Mai, Thailand
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Tour</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {tour.longDescription}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
              <ul className="space-y-3">
                {tour.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Itinerary</h2>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20" />
                <div className="space-y-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-6 relative">
                      <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 z-10" />
                      <div className="pb-2">
                        <p className="font-semibold text-primary">{item.time}</p>
                        <p className="text-muted-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl shadow-card p-6 sticky top-24"
            >
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">From</span>
                <p className="text-3xl font-bold text-foreground">{tour.price}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a 
                    href="https://buy.stripe.com/fZu7sM7YtfAlcVS5sbbEA01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Reserve this tour
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Deposit is 2,500 baht. Remaining balance is paid on the day of the tour.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <MobileBookingBar />
    </div>
  );
}
