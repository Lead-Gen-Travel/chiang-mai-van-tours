import { motion } from "framer-motion";
import { Instagram, ExternalLink, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ownerPortrait from "@/assets/orathai-portrait.jpg";
const instagramReels = [{
  title: "Feeding elephants at sunrise",
  views: "2.1M views"
}, {
  title: "Best temples in Chiang Mai at night",
  views: "980K views"
}];
const tiktokVideos = [{
  title: "Day trip Chiang Mai to Pai in one minute",
  views: "1.3M views"
}, {
  title: "What I spend as a van tour guide",
  views: "650K views"
}];
export function CreatorSection() {
  return <section id="about" className="py-20 bg-background">
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Orethai — Your Chiang Mai Guide
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            <div className="relative">
              <img src={ownerPortrait} alt="Ying, tour guide at Doi Suthep temple viewpoint with happy travelers" className="w-full max-w-md rounded-2xl shadow-hover mx-auto lg:mx-0" />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-warm">
                <span className="font-semibold">5+ years guiding</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                <span className="text-2xl">🙏</span> Sawadee ka! I'm Orethai. I started this van service to show travelers
                the Chiang Mai I love. When I'm not driving guests around the mountains, I'm making travel videos on
                Instagram and TikTok for my community of more than
                <span className="font-semibold text-primary"> 220K followers</span>.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[{
                icon: "🗣️",
                text: "Speaks Thai & English"
              }, {
                icon: "📋",
                text: "Licensed tour operator"
              }, {
                icon: "⭐",
                text: "Featured by top travel pages"
              }].map((item, index) => <div key={index} className="text-center p-3 bg-secondary/50 rounded-xl">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>)}
              </div>
            </div>
          </motion.div>

          {/* Right - Social Cards */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            {/* Instagram Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">@orathai_265</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>14K followers</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.instagram.com/orathai_265/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">Viral Reels</p>
              <div className="space-y-3">
                {instagramReels.map((reel, index) => <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{reel.title}</p>
                      <p className="text-xs text-muted-foreground">{reel.views}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* TikTok Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center">
                    <svg className="h-6 w-6 text-background" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">orathai_265</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>220K followers</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.tiktok.com/@orathai_265" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">Viral Clips</p>
              <div className="space-y-3">
                {tiktokVideos.map((video, index) => <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{video.title}</p>
                      <p className="text-xs text-muted-foreground">{video.views}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}