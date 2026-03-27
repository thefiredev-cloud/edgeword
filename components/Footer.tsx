export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            Built by{' '}
            <a 
              href="https://thefiredev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-emerald-400 transition-colors"
            >
              The Fire Dev LLC
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/thefiredev-cloud/edgeword"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://thefiredev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EdgeWord. Intelligence That Never Sleeps.
        </div>
      </div>
    </footer>
  )
}
