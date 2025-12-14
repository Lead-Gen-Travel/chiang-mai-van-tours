export function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
      <a
        href="https://buy.stripe.com/dRm00k92x73P1da3k3bEA02"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full h-14 bg-gradient-warm text-primary-foreground rounded-xl font-semibold shadow-warm hover:shadow-hover transition-all"
      >
        Reserve your tour
      </a>
    </div>
  );
}
