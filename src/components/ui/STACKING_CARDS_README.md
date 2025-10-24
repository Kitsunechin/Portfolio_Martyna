# Stacking Cards Component

A React component built with TypeScript and Framer Motion that creates scroll-driven stacking card animations.

## Features

- ✅ **Scroll-driven animations** using Framer Motion's `useScroll` and `useTransform`
- ✅ **React Context** for sharing animation state between components
- ✅ **Sticky positioning** with calculated top offsets
- ✅ **Custom scroll containers** support (not just window scroll)
- ✅ **TypeScript** with full type safety
- ✅ **Tailwind CSS** integration with `cn` utility
- ✅ **Configurable scaling** and positioning
- ✅ **Error handling** for context usage

## Components

### StackingCards (Container)

The main container component that tracks scroll progress and provides context to child components.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `totalCards` | `number` | ✅ | - | Number of cards for scale calculation |
| `scaleMultiplier` | `number` | ❌ | `0.03` | Animation intensity (higher = more scaling) |
| `scrollOptions` | `object` | ❌ | `{}` | Framer Motion useScroll options |
| `children` | `ReactNode` | ✅ | - | Child components (StackingCardItem) |
| `className` | `string` | ❌ | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | ❌ | - | Standard div props |

#### scrollOptions

```typescript
{
  container?: React.RefObject<HTMLElement>  // Custom scroll container
  target?: React.RefObject<HTMLElement>     // Target element to track
  offset?: string[]                         // Scroll offset configuration
}
```

### StackingCardItem (Individual Card)

Individual card wrapper that handles scaling animation based on scroll position.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `index` | `number` | ✅ | - | Card position for scale calculation |
| `topPosition` | `string` | ❌ | `5 + index * 3 + "%"` | Custom sticky top position |
| `children` | `ReactNode` | ✅ | - | Card content |
| `className` | `string` | ❌ | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | ❌ | - | Standard div props |

## Usage Examples

### Basic Usage (Window Scroll)

```tsx
import { StackingCards, StackingCardItem } from "@/components/ui/stacking-cards-framer"

function MyComponent() {
  const cards = [
    { title: "Card 1", content: "Content 1" },
    { title: "Card 2", content: "Content 2" },
    { title: "Card 3", content: "Content 3" },
  ]

  return (
    <div className="h-[620px] overflow-auto">
      <StackingCards totalCards={cards.length}>
        {cards.map((card, index) => (
          <StackingCardItem key={index} index={index} className="h-[620px]">
            <div className="bg-blue-500 rounded-lg p-8 text-white">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </div>
  )
}
```

### Custom Scroll Container

```tsx
import { useRef } from "react"
import { StackingCards, StackingCardItem } from "@/components/ui/stacking-cards-framer"

function CustomContainerExample() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="h-[620px]">
      <div ref={containerRef} className="h-full overflow-auto">
        <StackingCards
          totalCards={3}
          scaleMultiplier={0.05}
          scrollOptions={{ container: containerRef }}
        >
          {cards.map((card, index) => (
            <StackingCardItem key={index} index={index} className="h-[620px]">
              <div className="bg-green-500 rounded-lg p-8 text-white">
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </div>
  )
}
```

### Custom Top Positions

```tsx
function CustomPositionsExample() {
  const customPositions = ["10%", "25%", "40%"]

  return (
    <div className="h-[620px] overflow-auto">
      <StackingCards totalCards={3}>
        {cards.map((card, index) => (
          <StackingCardItem
            key={index}
            index={index}
            topPosition={customPositions[index]}
            className="h-[620px]"
          >
            <div className="bg-purple-500 rounded-lg p-8 text-white">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </div>
  )
}
```

## Animation Behavior

### Scaling Logic

- **First card (index 0)**: Scales from `1.0` to `1 - scaleMultiplier`
- **Second card (index 1)**: Scales from `1 - scaleMultiplier` to `1 - 2 * scaleMultiplier`
- **Third card (index 2)**: Scales from `1 - 2 * scaleMultiplier` to `1 - 3 * scaleMultiplier`
- And so on...

### Default Values

- **Scale Multiplier**: `0.03` (3% scaling per card)
- **Top Position**: `5 + index * 3 + "%"` (5%, 8%, 11%, 14%, etc.)
- **Transform Origin**: `"top"` (scales from the top)
- **Z-Index**: `totalCards - index` (higher index = higher z-index)

## Technical Details

### Context Usage

The component uses React Context to share scroll progress and configuration between the container and individual cards. This ensures:

- Single scroll listener for performance
- Consistent animation timing
- Proper error handling if used outside context

### Performance Considerations

- Uses Framer Motion's optimized scroll tracking
- Single scroll listener per container
- Efficient transform calculations
- Minimal re-renders with proper memoization

### Browser Support

- Modern browsers with CSS sticky support
- Framer Motion compatibility
- ES6+ features required

## Error Handling

The component includes proper error handling:

```tsx
// This will throw an error if used outside StackingCards
<StackingCardItem index={0}>
  <div>This will fail!</div>
</StackingCardItem>
```

Error message: `"StackingCardItem must be used within a StackingCards component"`

## Styling Tips

### Container Styling

```tsx
// Ensure proper height and overflow
<div className="h-[620px] overflow-auto">
  <StackingCards totalCards={3}>
    {/* cards */}
  </StackingCards>
</div>
```

### Card Styling

```tsx
// Use consistent heights for smooth animation
<StackingCardItem index={0} className="h-[620px]">
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8">
    {/* content */}
  </div>
</StackingCardItem>
```

### Responsive Design

```tsx
// Use responsive classes for different screen sizes
<StackingCardItem index={0} className="h-[400px] md:h-[620px]">
  <div className="p-4 md:p-8">
    {/* responsive content */}
  </div>
</StackingCardItem>
```

## Troubleshooting

### Cards Not Scaling

- Ensure `totalCards` prop matches the actual number of cards
- Check that `scaleMultiplier` is greater than 0
- Verify scroll container has proper height and overflow

### Cards Not Sticking

- Ensure parent container has `overflow-auto` or `overflow-scroll`
- Check that container has a defined height
- Verify sticky positioning is supported in the browser

### Performance Issues

- Use `scrollOptions.container` for custom containers
- Avoid too many cards (recommended max: 10-15)
- Consider reducing `scaleMultiplier` for smoother animations

## Dependencies

- React 18+
- Framer Motion 10+
- TypeScript 4.5+
- Tailwind CSS (for styling utilities)

