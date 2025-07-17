'use client'

import { useEffect, useState } from 'react'

type Firefly = {
  id: number
  top: number
  left: number
  x: string
  y: string
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
      x: `${(Math.random() - 0.5) * 50}vw`, // more float variance
      y: `${(Math.random() - 0.5) * 30}vh`,
      floatDuration: `${10 + Math.random() * 10}s`,
      twinkleDuration: `${3 + Math.random() * 2}s`,
      twinkleDelay: `${Math.random() * 5}s`,
    }))
    setFireflies(generated)
  }, [count])

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
            // Use CSS custom props for per-firefly motion
            ['--x' as any]: firefly.x,
            ['--y' as any]: firefly.y,
          }}
        />
      ))}
    </>
  )
}
