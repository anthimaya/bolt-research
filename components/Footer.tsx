import { Leaf } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Mindful Retreats</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2024 Mindful Retreats. All rights reserved.
        </div>
      </div>
    </footer>
  )
}