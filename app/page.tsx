import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Mindfulness Retreats</h1>
      <p className="text-xl text-center mb-12">Find peace and tranquility at our curated mindfulness retreats</p>
      <div className="flex justify-center space-x-4">
        <Button asChild size="lg">
          <Link href="/retreats">Find a Retreat</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/list-retreat">List Your Retreat</Link>
        </Button>
      </div>
    </div>
  )
}