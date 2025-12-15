import elephantTour from "@/assets/tour-elephant.jpg";
import raftingTour from "@/assets/tour-rafting.jpg";
import atvTour from "@/assets/tour-atv.jpg";
import customTour from "@/assets/tour-custom.jpg";
import natureTourElephant from "@/assets/nature-tour-elephant.webp";
import natureTourWaterfall from "@/assets/nature-tour-waterfall.webp";

export interface Tour {
  id: string;
  image: string;
  images: string[];
  category: string;
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
    id: "elephant-atv-rafting",
    image: elephantTour,
    images: [elephantTour, atvTour, raftingTour],
    category: "Adventure Tour",
    title: "Elephants, ATV & White Water Rafting",
    description: "The ultimate adventure day: feed elephants at an ethical sanctuary, ride ATVs through the jungle, and conquer exciting rapids.",
    longDescription: "Pack three incredible experiences into one unforgettable day. Start with a heartwarming visit to rescued elephants, get your adrenaline pumping on ATV trails, and finish with thrilling white water rafting on the Mae Taeng River.",
    duration: "10 hours",
    includes: [
      "Private van with AC",
      "English-speaking guide",
      "Elephant sanctuary entrance fee",
      "ATV rental and safety gear",
      "Rafting session with equipment",
      "Lunch and water bottles",
      "Hotel pickup and drop-off"
    ],
    price: "฿5,500 per group",
    highlights: [
      "Feed and walk with rescued elephants",
      "ATV adventure through jungle trails",
      "White water rafting on class 3-4 rapids",
      "Three adventures in one epic day",
      "Professional guides for each activity"
    ],
    itinerary: [
      { time: "7:30 AM", activity: "Hotel pickup" },
      { time: "9:00 AM", activity: "Arrive at elephant sanctuary" },
      { time: "9:15 AM", activity: "Feed and walk with elephants" },
      { time: "11:00 AM", activity: "Drive to ATV base" },
      { time: "11:30 AM", activity: "ATV adventure through jungle" },
      { time: "1:00 PM", activity: "Lunch break" },
      { time: "2:00 PM", activity: "Drive to rafting base camp" },
      { time: "2:30 PM", activity: "Safety briefing and gear up" },
      { time: "3:00 PM", activity: "White water rafting adventure" },
      { time: "5:00 PM", activity: "Shower and change" },
      { time: "6:00 PM", activity: "Return to hotel" }
    ]
  },
  {
    id: "elephant-sticky-waterfall",
    image: natureTourElephant,
    images: [natureTourElephant, natureTourWaterfall],
    category: "Nature Tour",
    title: "Elephants & Sticky Waterfall",
    description: "Meet rescued elephants in the morning, then climb the magical Sticky Waterfall where you can walk straight up the rocks.",
    longDescription: "Experience the best of Chiang Mai's natural wonders. Connect with gentle giants at an ethical elephant sanctuary, then discover the unique Sticky Waterfall where mineral deposits let you climb right up the cascading water.",
    duration: "8 hours",
    includes: [
      "Private van with AC",
      "English-speaking guide",
      "Elephant sanctuary entrance fee",
      "Sticky Waterfall entrance fee",
      "Lunch and water bottles",
      "Hotel pickup and drop-off"
    ],
    price: "฿4,200 per group",
    highlights: [
      "Feed and walk with rescued elephants",
      "Learn about elephant conservation",
      "Climb the famous Sticky Waterfall",
      "Swim in natural pools",
      "Perfect for families and all fitness levels"
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Hotel pickup" },
      { time: "9:30 AM", activity: "Arrive at elephant sanctuary" },
      { time: "9:45 AM", activity: "Introduction and safety briefing" },
      { time: "10:00 AM", activity: "Feed elephants and learn their stories" },
      { time: "11:30 AM", activity: "Walk with elephants through the forest" },
      { time: "12:30 PM", activity: "Lunch at local restaurant" },
      { time: "2:00 PM", activity: "Drive to Sticky Waterfall" },
      { time: "2:30 PM", activity: "Explore and climb the waterfall" },
      { time: "4:30 PM", activity: "Relax and swim" },
      { time: "5:30 PM", activity: "Return to hotel" }
    ]
  },
  {
    id: "elephant-temples-cafe",
    image: atvTour,
    images: [atvTour, elephantTour, customTour],
    category: "Cultural Tour",
    title: "Elephants, Temples & Ancient Cafe",
    description: "A perfect blend of wildlife, spirituality, and culture. Meet elephants, explore sacred temples, and relax at a hidden vintage cafe.",
    longDescription: "Discover the soul of Chiang Mai in one beautiful day. Start with an intimate elephant encounter, visit stunning Buddhist temples rich with history, and end at a charming ancient cafe that feels like stepping back in time.",
    duration: "9 hours",
    includes: [
      "Private van with AC",
      "English-speaking guide",
      "Elephant sanctuary entrance fee",
      "Temple entrance fees",
      "Lunch and water bottles",
      "Cafe refreshments",
      "Hotel pickup and drop-off"
    ],
    price: "฿4,500 per group",
    highlights: [
      "Feed and walk with rescued elephants",
      "Visit sacred Buddhist temples",
      "Discover hidden ancient cafe",
      "Beautiful photo opportunities",
      "Experience authentic Thai culture"
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Hotel pickup" },
      { time: "9:30 AM", activity: "Arrive at elephant sanctuary" },
      { time: "9:45 AM", activity: "Feed and walk with elephants" },
      { time: "11:30 AM", activity: "Drive to temples" },
      { time: "12:00 PM", activity: "Explore ancient temples" },
      { time: "1:30 PM", activity: "Lunch at local restaurant" },
      { time: "3:00 PM", activity: "Visit hidden ancient cafe" },
      { time: "4:30 PM", activity: "Relax and enjoy refreshments" },
      { time: "5:30 PM", activity: "Return to hotel" }
    ]
  },
  {
    id: "custom-tour",
    image: customTour,
    images: [customTour, elephantTour, atvTour],
    category: "Custom Tour",
    title: "Build Your Perfect Chiang Mai Day",
    description: "Tell us what you like and we design your route. Food, temples, coffee farms, hot springs — you choose.",
    longDescription: "Your perfect day, your way. Tell us your interests and we'll create a custom itinerary just for you. Whether you want to explore hidden waterfalls, visit local markets, or discover the best coffee farms, we'll make it happen.",
    duration: "Flexible",
    includes: [
      "Private van with AC",
      "English-speaking guide",
      "Custom itinerary planning",
      "Lunch and water bottles",
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
