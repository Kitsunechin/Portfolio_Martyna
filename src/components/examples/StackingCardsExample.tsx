"use client"

import React, { useRef } from "react"
import { StackingCards, StackingCardItem } from "@/components/ui/stacking-cards-framer"
import { cn } from "@/lib/utils"

// Example data
const cards = [
  {
    bgColor: "bg-[#f97316]",
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity's connection to the sea.",
    image:
      "https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    image:
      "https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    bgColor: "bg-[#ff5941]",
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
    image:
      "https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    bgColor: "bg-[#1f464d]",
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it's a timeless way to explore the vast blue expanse.",
    image:
      "https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
    image:
      "https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
  },
]

// Example 1: Basic Usage with Window Scroll
export function BasicStackingCardsExample() {
  return (
    <div className="h-[620px] bg-white overflow-auto text-white">
      <StackingCards totalCards={cards.length}>
        <div className="relative font-calendas h-[620px] w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-[#ff5941] whitespace-pre">
          Scroll down ↓
        </div>
        {cards.map(({ bgColor, description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[620px]">
              <div
                className={cn(
                  bgColor,
                  "h-[80%] sm:h-[70%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative"
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-5">{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </StackingCardItem>
          )
        })}

        <div className="w-full h-80 relative overflow-hidden">
          <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-[#ff5941] font-calendas">
            fancy
          </h2>
        </div>
      </StackingCards>
    </div>
  )
}

// Example 2: Custom Scroll Container
export function CustomContainerStackingCardsExample() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="h-[620px] bg-gray-100">
      <div
        ref={containerRef}
        className="h-full overflow-auto"
      >
        <StackingCards
          totalCards={cards.length}
          scaleMultiplier={0.05}
          scrollOptions={{
            container: containerRef,
          }}
        >
          <div className="h-[620px] w-full flex items-center justify-center text-4xl font-bold text-gray-800">
            Custom Container Scroll
          </div>
          {cards.map(({ bgColor, description, image, title }, index) => {
            return (
              <StackingCardItem key={index} index={index} className="h-[620px]">
                <div
                  className={cn(
                    bgColor,
                    "h-[80%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative"
                  )}
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-2xl mb-5 text-white">{title}</h3>
                    <p className="text-white">{description}</p>
                  </div>

                  <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </StackingCardItem>
            )
          })}
        </StackingCards>
      </div>
    </div>
  )
}

// Example 3: Custom Top Positions
export function CustomTopPositionExample() {
  return (
    <div className="h-[620px] bg-gradient-to-b from-blue-900 to-purple-900 overflow-auto text-white">
      <StackingCards totalCards={3} scaleMultiplier={0.08}>
        <div className="h-[620px] w-full flex items-center justify-center text-4xl font-bold">
          Custom Top Positions
        </div>
        {cards.slice(0, 3).map(({ bgColor, title, description }, index) => {
          const customTopPositions = ["10%", "25%", "40%"]
          return (
            <StackingCardItem
              key={index}
              index={index}
              topPosition={customTopPositions[index]}
              className="h-[620px]"
            >
              <div
                className={cn(
                  bgColor,
                  "h-[70%] flex-col px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative"
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-3xl mb-5">{title}</h3>
                  <p className="text-lg">{description}</p>
                </div>
              </div>
            </StackingCardItem>
          )
        })}
      </StackingCards>
    </div>
  )
}

// Main Example Component
export default function StackingCardsExample() {
  return (
    <div className="space-y-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Stacking Cards Examples</h1>
        <p className="text-gray-600">
          Scroll-driven animations with Framer Motion
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Basic Usage (Window Scroll)</h2>
          <BasicStackingCardsExample />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Custom Container Scroll</h2>
          <CustomContainerStackingCardsExample />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Custom Top Positions</h2>
          <CustomTopPositionExample />
        </div>
      </div>
    </div>
  )
}

