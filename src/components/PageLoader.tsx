export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-charcoal-light overflow-hidden">
        <div className="h-full bg-gold animate-loader-bar" />
      </div>

      <div className="text-center">
        <div className="font-playfair text-gold text-2xl mb-4">myCHEF</div>
        <div className="gold-line mx-auto animate-pulse" />
      </div>
    </div>
  )
}
