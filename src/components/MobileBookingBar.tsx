import { MessageCircle } from "lucide-react";

export function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
      <a
        href="https://wa.me/66123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full h-14 bg-[hsl(145,70%,40%)] text-primary-foreground rounded-xl font-semibold shadow-warm hover:bg-[hsl(145,70%,35%)] transition-all"
      >
        <MessageCircle className="h-6 w-6" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
