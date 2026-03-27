export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Start Monitoring <span className="text-accent">Today</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Join the companies that never miss a competitive move.
        </p>

        <form 
          action="https://formsubmit.co/tanner@thefiredev.com" 
          method="POST"
          className="glass rounded-lg p-8 max-w-xl mx-auto"
        >
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
              className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Tell us about your competitive intelligence needs..."
              rows={4}
              className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent text-background rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors"
          >
            Get Early Access
          </button>
          <input type="hidden" name="_subject" value="EdgeWord - New Lead" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  )
}
