export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Link your competitors across all channels. LinkedIn, Twitter, G2, ProductHunt — we track it all.'
    },
    {
      number: '02',
      title: 'Monitor',
      description: 'AI watches every signal 24/7. Hiring, pricing, reviews, patents, social activity.'
    },
    {
      number: '03',
      title: 'Alert',
      description: 'Get notified the moment something changes. React faster than your competition.'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-gray-400">Three steps to competitive intelligence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-7xl font-bold text-accent opacity-20 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 w-12 h-0.5 bg-accent opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
