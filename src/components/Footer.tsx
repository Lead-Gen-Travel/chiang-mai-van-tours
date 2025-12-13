import { MapPin, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold">
                Chiang Mai Private Van Tours
              </span>
            </a>
            <p className="text-background/70 mb-4 max-w-md">
              Private van tours and shuttle services in Chiang Mai. 
              Experience the best of Northern Thailand with a local guide who speaks your language.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[hsl(145,70%,40%)] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tours</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#tours" className="hover:text-primary transition-colors">Elephant Sanctuary</a></li>
              <li><a href="#tours" className="hover:text-primary transition-colors">White Water Rafting</a></li>
              <li><a href="#tours" className="hover:text-primary transition-colors">ATV Adventure</a></li>
              <li><a href="#tours" className="hover:text-primary transition-colors">Custom Tours</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>WhatsApp: +66 81 764 5420</li>
              
              <li>Email: hello@chiangmaivantours.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Chiang Mai Private Van Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
