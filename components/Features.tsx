export default function Features() {
  const features = [
    {
      title: 'Signal Detection',
      description: 'Monitor hiring, pricing changes, product launches, reviews, patents, and social mentions in real-time.'
    },
    {
      title: 'Competitor Mapping',
      description: 'Automatically track all competitors across every channel. Never miss a move.'
    },
    {
      title: 'Trend Prediction',
      description: 'AI-powered analysis identifies patterns and predicts market shifts before they happen.'
    },
    {
      title: 'Alert Engine',
      description: 'Get notified the moment something changes. Slack, email, SMS — your choice.'
    }
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for <span className="text-accent">Speed</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every signal, every competitor, every channel. One dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="glass rounded-lg p-6 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-3 text-accent">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
