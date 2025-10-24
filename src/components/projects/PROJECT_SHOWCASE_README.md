# Project Showcase Component

A React/TypeScript component inspired by Miguel Plaza's portfolio design that displays project cards in a clean, modern layout with responsive grid system and smooth animations.

## Features

- ✅ **Clean, modern design** inspired by Miguel Plaza's portfolio
- ✅ **Responsive grid layout** (1 col mobile, 2-3 cols desktop)
- ✅ **Multiple image support** with intelligent layout
- ✅ **Smooth hover animations** using Framer Motion
- ✅ **TypeScript** with full type safety
- ✅ **Accessibility** with proper alt text and keyboard navigation
- ✅ **Customizable** categories, descriptions, and tags
- ✅ **Performance optimized** with lazy loading

## Components

### ProjectShowcase (Main Container)

The main container component that renders a responsive grid of project cards.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `projects` | `ProjectCard[]` | ✅ | - | Array of project data |
| `className` | `string` | ❌ | - | Additional CSS classes |
| `columns` | `object` | ❌ | `{mobile: 1, tablet: 2, desktop: 3}` | Grid column configuration |
| `showCategory` | `boolean` | ❌ | `true` | Show/hide category tags |
| `showDescription` | ❌ | `true` | Show/hide project descriptions |
| `showTags` | `boolean` | ❌ | `true` | Show/hide project tags |

#### columns Configuration

```typescript
{
  mobile?: number    // Columns on mobile (< 768px)
  tablet?: number    // Columns on tablet (768px - 1024px)
  desktop?: number   // Columns on desktop (> 1024px)
}
```

### ProjectCard Interface

```typescript
interface ProjectCard {
  id: string           // Unique identifier
  category: string     // Category tag (e.g., "UX/UI DESIGN")
  title: string        // Project title
  description?: string // Optional project description
  images: string[]     // Array of image URLs
  link?: string        // Optional project link
  tags?: string[]      // Optional project tags
}
```

## Usage Examples

### Basic Usage

```tsx
import { ProjectShowcase } from "@/components/projects/ProjectShowcase"

const projects = [
  {
    id: '1',
    category: 'UX/UI DESIGN',
    title: 'Search and filtering: finding the perfect game feel effortless',
    description: 'A comprehensive search and filtering system...',
    images: ['/image1.jpg', '/image2.jpg'],
    link: '/projects/game-search',
    tags: ['Search', 'Filtering', 'Gaming']
  },
  // ... more projects
]

function MyComponent() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ProjectShowcase projects={projects} />
      </div>
    </div>
  )
}
```

### Custom Configuration

```tsx
<ProjectShowcase 
  projects={projects}
  columns={{ mobile: 1, tablet: 2, desktop: 2 }}
  showDescription={false}
  showTags={true}
  className="my-custom-class"
/>
```

### Single Column Layout

```tsx
<ProjectShowcase 
  projects={projects}
  columns={{ mobile: 1, tablet: 1, desktop: 1 }}
  showDescription={true}
  showTags={true}
/>
```

## Image Layout Logic

The component intelligently arranges images based on the number provided:

### 1 Image
- Full width, aspect-video ratio
- Centered in card

### 2 Images
- Side-by-side grid (2 columns)
- Aspect-square ratio for both

### 3+ Images
- First image: Full width, aspect-video ratio
- Remaining images: 2-column grid, aspect-square ratio

## Styling & Customization

### Color Scheme
The component uses your existing brand colors:
- **Primary**: `#DDC7FF` (purple accent)
- **Background**: `bg-gray-800` (card background)
- **Text**: `text-white` (primary text)
- **Secondary Text**: `text-gray-300` (descriptions)
- **Borders**: `border-gray-700` (card borders)

### Hover Effects
- **Card**: Slight upward movement (`y: -4`)
- **Images**: Scale up (`scale-105`)
- **Title**: Color change to accent color
- **Borders**: Subtle color transition

### Responsive Behavior

#### Mobile (< 768px)
- Single column layout
- Full width cards
- Optimized touch targets

#### Tablet (768px - 1024px)
- 2 column grid (configurable)
- Maintained aspect ratios
- Touch-friendly interactions

#### Desktop (> 1024px)
- 3 column grid (configurable)
- Hover effects enabled
- Optimal spacing and typography

## Animation Details

### Entrance Animation
- **Staggered fade-in**: Each card animates in with a 0.1s delay
- **Initial state**: `opacity: 0, y: 20`
- **Final state**: `opacity: 1, y: 0`
- **Duration**: 0.5s with ease-out timing

### Hover Animation
- **Card lift**: `y: -4` on hover
- **Image scale**: `scale-105` on hover
- **Color transitions**: 300ms duration
- **Smooth transitions**: All properties use ease-out timing

## Accessibility Features

### Keyboard Navigation
- Cards are focusable with Tab key
- Enter/Space triggers click action
- Visible focus indicators

### Screen Reader Support
- Proper heading hierarchy (h3 for titles)
- Descriptive alt text for images
- Semantic HTML structure
- ARIA labels where needed

### Visual Accessibility
- High contrast text colors
- Sufficient touch target sizes (44px minimum)
- Clear visual hierarchy
- Focus indicators for keyboard users

## Performance Optimizations

### Image Loading
- **Lazy loading**: Images load only when needed
- **Optimized formats**: Support for WebP and modern formats
- **Aspect ratio preservation**: Prevents layout shift
- **Error handling**: Graceful fallbacks for broken images

### Animation Performance
- **Hardware acceleration**: Uses transform properties
- **Efficient re-renders**: Minimal DOM updates
- **Smooth 60fps**: Optimized animation timing

## Integration Examples

### With Your Existing Data

```tsx
// Convert your existing project data
const convertedProjects = projects.map(project => ({
  id: project.id,
  category: project.company === 'jobtalent' ? 'UX/UI DESIGN' : 'WEB DESIGN',
  title: project.title,
  description: project.shortDescription,
  images: [project.imageSrc], // Add more images as needed
  link: `/project/${project.slug}`,
  tags: project.tags
}))

<ProjectShowcase projects={convertedProjects} />
```

### With Filtering

```tsx
const [selectedCategory, setSelectedCategory] = useState('all')

const filteredProjects = selectedCategory === 'all' 
  ? projects 
  : projects.filter(project => project.category === selectedCategory)

<ProjectShowcase projects={filteredProjects} />
```

## Customization Tips

### Custom Styling
```tsx
// Override default styles
<ProjectShowcase 
  projects={projects}
  className="my-custom-grid"
/>

// In your CSS
.my-custom-grid .project-card {
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
```

### Custom Categories
```tsx
const projects = [
  {
    id: '1',
    category: 'MOBILE DESIGN',
    title: 'My Mobile App',
    // ... rest of project data
  }
]
```

### Custom Image Layouts
For more complex image layouts, you can extend the component or create custom card variants.

## Browser Support

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **CSS Grid**: Full support required
- **CSS Custom Properties**: Used for theming
- **ES6+**: Required for TypeScript compilation

## Dependencies

- React 18+
- Framer Motion 10+
- TypeScript 4.5+
- Tailwind CSS (for styling utilities)
- Lucide React (for icons)

## File Structure

```
src/components/projects/
├── ProjectShowcase.tsx          # Main component
├── PROJECT_SHOWCASE_README.md   # This documentation
└── examples/
    └── ProjectShowcaseExample.tsx # Usage examples
```

## Troubleshooting

### Common Issues

#### Images Not Loading
- Check image URLs are valid
- Ensure images are accessible
- Verify CORS settings for external images

#### Layout Issues
- Ensure parent container has proper width
- Check Tailwind CSS is properly configured
- Verify responsive breakpoints

#### Animation Performance
- Reduce number of animated elements
- Use `will-change` CSS property for complex animations
- Consider reducing animation complexity on mobile

### Performance Tips

1. **Optimize images**: Use WebP format and appropriate sizes
2. **Limit projects**: Consider pagination for large datasets
3. **Lazy load**: Use intersection observer for off-screen content
4. **Debounce interactions**: Prevent excessive hover state changes

## Future Enhancements

- [ ] Virtual scrolling for large datasets
- [ ] Advanced filtering and sorting
- [ ] Custom image layouts
- [ ] Video support
- [ ] Advanced animations
- [ ] Theme customization
- [ ] Print styles
- [ ] SEO optimization

