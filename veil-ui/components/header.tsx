"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-2xl border-b border-primary/10">
      <div className="container mx-auto px-6 py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Veil</span>
              <span className="text-xs text-muted-foreground/80 font-medium">Credit Protocol</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/5">
              Protocol
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/5">
              Docs
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/5">
              Integrations
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-linear-to-r from-primary to-primary/90 text-primary-foreground px-7 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 shadow-md">
            Launch App
          </button>
        </div>
      </div>
    </header>
  )
}
