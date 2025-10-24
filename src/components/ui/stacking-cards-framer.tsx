"use client"

import React, { createContext, useContext, ReactNode } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

// Types and Interfaces
interface StackingCardsContextType {
  scrollYProgress: MotionValue<number>
  totalCards: number
  scaleMultiplier: number
}

interface StackingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalCards: number
  scaleMultiplier?: number
  scrollOptions?: {
    container?: React.RefObject<HTMLElement>
    target?: React.RefObject<HTMLElement>
  }
  children: ReactNode
}

interface StackingCardItemProps {
  index: number
  topPosition?: string
  children: ReactNode
  className?: string
}

// Context
const StackingCardsContext = createContext<StackingCardsContextType | null>(null)

// Hook to use context with error handling
const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext)
  if (!context) {
    throw new Error(
      "StackingCardItem must be used within a StackingCards component"
    )
  }
  return context
}

// Main StackingCards Component
export function StackingCards({
  totalCards,
  scaleMultiplier = 0.03,
  scrollOptions,
  children,
  className,
  ...props
}: StackingCardsProps) {
  const { scrollYProgress } = useScroll(scrollOptions)

  const contextValue: StackingCardsContextType = {
    scrollYProgress,
    totalCards,
    scaleMultiplier,
  }

  // Add padding bottom to ensure last card has space to stop at 60px
  const paddingBottom = `${(totalCards - 1) * 60}px`

  return (
    <StackingCardsContext.Provider value={contextValue}>
      <div className={cn("relative", className)} style={{ paddingBottom }} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  )
}

// Individual StackingCardItem Component
export function StackingCardItem({
  index,
  topPosition,
  children,
  className,
}: StackingCardItemProps) {
  const { scrollYProgress, totalCards, scaleMultiplier } = useStackingCardsContext()

  // Calculate the animation range for this specific card
  const cardStart = index / totalCards
  const cardEnd = (index + 1) / totalCards

  // Create transform for this card's scroll range
  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [1 - index * scaleMultiplier, 1 - (index + 1) * scaleMultiplier]
  )

  // Calculate sticky top position - all cards including last one stop at 60px from each other
  const defaultTopPosition = `${60 + index * 60}px`
  const stickyTop = topPosition || defaultTopPosition

  return (
    <motion.div
      className={cn("sticky left-0 right-0 mx-auto", className)}
      style={{
        top: stickyTop,
        zIndex: index + 1, // Higher index = higher z-index (first card = 1, second = 2, etc.)
        scale,
        transformOrigin: "top",
      }}
    >
      {children}
    </motion.div>
  )
}

// Export types for external use
export type { StackingCardsProps, StackingCardItemProps, StackingCardsContextType }

// Default export for convenience
export default StackingCards
