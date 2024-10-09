"use client"

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'

interface Retreat {
  id: number;
  name: string;
  location: string;
  duration: string;
  description: string;
  website: string;
}

export default function Retreats() {
  const [searchTerm, setSearchTerm] = useState('')
  const [retreats, setRetreats] = useState<Retreat[]>([])

  useEffect(() => {
    fetchRetreats()
  }, [])

  async function fetchRetreats() {
    try {
      const response = await fetch('/api/retreats')
      if (response.ok) {
        const data = await response.json()
        setRetreats(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch retreats. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  const filteredRetreats = retreats.filter(retreat =>
    retreat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    retreat.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Mindfulness Retreats</h1>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search retreats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRetreats.map(retreat => (
          <Card key={retreat.id}>
            <CardHeader>
              <CardTitle>{retreat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Location: {retreat.location}</p>
              <p>Duration: {retreat.duration}</p>
              <p className="mt-2">{retreat.description}</p>
              <Button className="mt-4" asChild>
                <a href={retreat.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}