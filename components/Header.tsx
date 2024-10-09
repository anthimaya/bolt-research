import Link from 'next/link'
import { Button } from './ui/button'
import { Leaf } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Mindful Retreats</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/retreats">Find Retreats</Link></li>
            <li><Link href="/list-retreat">List Your Retreat</Link></li>
            <li><Button variant="outline" asChild><Link href="/login">Login</Link></Button></li>
            <li><Button asChild><Link href="/signup">Sign Up</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}