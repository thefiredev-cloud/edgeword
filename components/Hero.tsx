'use client'

import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Intelligence That <span className="text-accent">Never Sleeps</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Real-time competitive monitoring across every signal — hiring, pricing, reviews, patents, social.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#contact" className="px-8 py-4 bg-accent text-background rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors">
            Start Monitoring
          </a>
          <a href="#features" className="px-8 py-4 glass rounded-lg font-semibold text-lg hover:border-accent transition-colors">
            Learn More
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto glass rounded-lg p-8">
          <div>
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-sm text-gray-400">Signals/Hour</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">12</div>
            <div className="text-sm text-gray-400">Data Sources</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">&lt;60s</div>
            <div className="text-sm text-gray-400">Alert Latency</div>
          </div>
        </div>
      </div>
    </section>
  )
}
