import elephantTour from "@/assets/tour-elephant.jpg";
import raftingTour from "@/assets/tour-rafting.jpg";
import atvTour from "@/assets/tour-atv.jpg";
import customTour from "@/assets/tour-custom.jpg";

export interface Tour {
  id: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  includes: string[];
  price: string;
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
  }[];
  isCustom?: boolean;
}

export const tours: Tour[] = [
  {
    id: "elephant-sanctuary-doi-suthep",
    image: elephantTour,
    title: "Ethical Elephant Sanctuary",
    description: "Visit an ethical elephant sanctuary where you only feed and walk beside them. Then watch sunset at Doi Suthep with a view over Chiang Mai.",
    longDescription: "Experience the magic of ethical elephant encounters followed by one of Thailand's most sacred temples. This full-day tour combines wildlife, spirituality, and breathtaking views in one unforgettable journey.",
    duration: "8 hours",
    includes: [
      "Private van with AC",
      "English-speaking guide",
      "Elephant sanctuary entrance fee",
      "Doi Suthep temple entrance fee",
      "Lunch at local restaurant",
      "Cold water and snacks",
      "Hotel pickup and drop-off"
    ],
    price: "฿4,500 per group",
    highlights: [
      "Feed and walk with rescued elephants",
      "Learn about elephant conservation",
      "Visit the sacred Doi Suthep temple",
      "Watch sunset over Chiang Mai",
      "Climb the famous 309 steps (or take the cable car)"
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Hotel pickup" },
      { time: "9:30 AM", activity: "Arrive at elephant sanctuary" },
      { time: "9:45 AM", activity: "Introduction and safety briefing" },
      { time: "10:00 AM", activity: "Feed elephants and learn their stories" },
      { time: "11:30 AM", activity: "Walk with elephants through the forest" },
      { time: "12:30 PM", activity: "Lunch at local restaurant" },
      { time: "2:00 PM", activity: "Drive to Doi Suthep" },
      { time: "3:00 PM", activity: "Explore Doi Suthep temple" },
      { time: "5:00 PM", activity: "Watch sunset from the viewpoint" },
      { time: "6:00 PM", activity: "Return to hotel" }
    ]
  },
  {
    id: "white-water-rafting",
    image: raftingTour,
    title: "White Water Rafting & Jungle Village",
    description: "Ride the river with certified guides, then relax in a mountain village cafe before heading back to town.",
    longDescription: "Get your adrenaline pumping on the Mae Taeng River with class 3-4 rapids, then unwind in a peaceful mountain village. Perfect for adventure seekers who also appreciate authentic Thai culture.",
    duration: "7 hours",
    includes: [
      "Private van with AC",
      "Professional rafting guides",
      "All safety equipment",
      "Rafting session (10km)",
      "Light lunch and refreshments",
      "Village cafe stop",
      "Hotel pickup and drop-off"
    ],
    price: "฿3,800 per group",
    highlights: [
      "10km of exciting rapids",
      "Professional certified guides",
      "Beautiful jungle scenery",
      "Visit authentic mountain village",
      "Relax at a riverside cafe"
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Hotel pickup" },
      { time: "9:30 AM", activity: "Arrive at rafting base camp" },
      { time: "10:00 AM", activity: "Safety briefing and gear up" },
      { time: "10:30 AM", activity: "Start rafting adventure" },
      { time: "12:30 PM", activity: "Finish rafting, shower and change" },
      { time: "1:00 PM", activity: "Lunch at riverside restaurant" },
      { time: "2:30 PM", activity: "Visit mountain village" },
      { time: "3:30 PM", activity: "Coffee at village cafe" },
      { time: "5:00 PM", activity: "Return to hotel" }
    ]
  },
  {
    id: "atv-hidden-temple",
    image: atvTour,
    title: "ATV Adventure & Hidden Temple",
    description: "Explore mountain viewpoints, rice fields, and discover a temple not in the usual guide book.",
    longDescription: "Rev up for an off-road adventure through Chiang Mai's stunning countryside. Discover hidden temples, traverse rice paddies, and enjoy panoramic mountain views that most tourists never see.",
    duration: "6 hours",
    includes: [
      "Private van with AC",
      "ATV rental and fuel",
      "Helmet and safety gear",
      "English-speaking guide",
      "Snacks and water",
      "Temple visit",
      "Hotel pickup and drop-off"
    ],
    price: "฿4,200 per group",
    highlights: [
      "Ride through rice fields and jungle trails",
      "Visit a secret local temple",
      "Stunning mountain viewpoints",
      "Great photo opportunities",
      "Suitable for beginners"
    ],
    itinerary: [
      { time: "9:00 AM", activity: "Hotel pickup" },
      { time: "10:00 AM", activity: "Arrive at ATV base, safety briefing" },
      { time: "10:30 AM", activity: "Start ATV adventure" },
      { time: "11:30 AM", activity: "Stop at mountain viewpoint" },
      { time: "12:00 PM", activity: "Continue through rice fields" },
      { time: "1:00 PM", activity: "Light lunch break" },
      { time: "2:00 PM", activity: "Visit hidden temple" },
      { time: "3:00 PM", activity: "Return to base" },
      { time: "4:00 PM", activity: "Return to hotel" }
    ]
  },
  {
    id: "custom-tour",
    image: customTour,
    title: "Build Your Perfect Chiang Mai Day",
    description: "Tell us what you like and we design your route. Food, temples, coffee farms, hot springs — you choose.",
    longDescription: "Your perfect day, your way. Tell us your interests and we'll create a custom itinerary just for you. Whether you want to explore hidden waterfalls, visit local markets, or discover the best coffee farms, we'll make it happen.",
    duration: "Flexible",
    includes: [
      "Private van with AC",
      "English-speaking guide",
      "Custom itinerary planning",
      "Cold water and snacks",
      "Hotel pickup and drop-off",
      "Entrance fees (varies by activities)"
    ],
    price: "Custom quote",
    highlights: [
      "Fully personalized itinerary",
      "Choose your own activities",
      "Flexible timing",
      "Local insider recommendations",
      "Perfect for special occasions"
    ],
    itinerary: [
      { time: "Your choice", activity: "We work with your schedule" },
      { time: "Customized", activity: "Activities based on your interests" },
      { time: "Flexible", activity: "As many or few stops as you like" }
    ],
    isCustom: true
  }
];

export function getTourById(id: string): Tour | undefined {
  return tours.find(tour => tour.id === id);
}
