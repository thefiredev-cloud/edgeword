export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-accent">EdgeWord</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-accent transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-accent text-background font-semibold hover:bg-emerald-400 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
