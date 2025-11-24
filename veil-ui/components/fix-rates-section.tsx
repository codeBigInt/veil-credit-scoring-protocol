"use client"

export default function FixRatesSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-18 bg-background/50 relative">
      <div className="container  px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">
              Proof of
              <br />
              <span className="text-primary">Trustworthiness</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Users can mint Proof-of-Trustworthiness (PoT) NFTs directly from their credit scores, demonstrating
              financial credibility to other protocols without disclosing identity.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/50">
              Mint PoT NFT
            </button>
          </div>

          {/* Right: NFT Mint Card */}
          <div className="flex justify-center relative">
            <div className="relative w-100 h-120">
              {/* NFT Card Container */}
              <div className="absolute inset-0 bg-linear-to-br from-card to-card/50 rounded-2xl border border-border/50 p-6 shadow-2xl flex flex-col items-center justify-center space-y-6">
                {/* NFT Preview */}
                <div className="w-48 h-48 rounded-xl bg-linear-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-5xl mb-2">🎖️</p>
                    <p className="text-sm font-semibold text-muted-foreground">PoT NFT</p>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Credit Score: <span className="text-primary font-bold">750</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Expires: 2026-11-24</p>
                </div>

                {/* Mint Button */}
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
