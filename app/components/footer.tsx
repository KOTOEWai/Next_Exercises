// app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-300">Careers</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-blue-300">Blog</a></li>
              <li><a href="/docs" className="hover:text-blue-300">Documentation</a></li>
              <li><a href="/support" className="hover:text-blue-300">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">GitHub</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2023 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}