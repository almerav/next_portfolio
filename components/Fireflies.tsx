'use client'

import { useEffect, useState } from 'react'

type Firefly = {
  id: number
  top: string  // Changed from number to string
  left: string // Changed from number to string
  x: string    // Changed from number to string
  y: string    // Changed from number to string
  floatDuration: string
  twinkleDuration: string
  twinkleDelay: string
}

export default function Fireflies({ count = 90 }: { count?: number }) {
  const [fireflies, setFireflies] = useState<Firefly[]>([])

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      x: `${(Math.random() - 0.5) * 50}vw`,
      y: `${(Math.random() - 0.5) * 30}vh`,
      floatDuration: `${10 + Math.random() * 10}s`,
      twinkleDuration: `${3 + Math.random() * 2}s`,
      twinkleDelay: `${Math.random() * 5}s`,
    }))
    setFireflies(generated)
  }, [count])

  // Fireflies.tsx
return (
  <>
    {fireflies.map(firefly => (
      <div
        key={firefly.id}
        className="hero-firefly"
        style={{
          top: firefly.top,
          left: firefly.left,
          animationDuration: `${firefly.floatDuration}, ${firefly.twinkleDuration}`,
          animationDelay: `0s, ${firefly.twinkleDelay}`,
          // Use CSS custom props with proper typing
          ...({
            '--x': firefly.x,
            '--y': firefly.y,
          } as React.CSSProperties)
        }}
      />
    ))}
  </>
)
}