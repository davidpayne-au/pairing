# BangladeshFlag Component

A reusable SVG component that renders the flag of Bangladesh.

## Features

- **Accurate representation**: Uses the correct colors and proportions for the Bangladesh flag
- **Scalable**: SVG-based for crisp rendering at any size
- **Accessible**: Includes proper ARIA labels and semantic markup
- **Customizable**: Configurable size and CSS classes

## Props

| Prop        | Type     | Default | Description                                                        |
| ----------- | -------- | ------- | ------------------------------------------------------------------ |
| `size`      | `number` | `32`    | Width of the flag in pixels (height is calculated as 60% of width) |
| `className` | `string` | `''`    | Additional CSS classes to apply                                    |

## Usage

```tsx
import { BangladeshFlag } from './components/BangladeshFlag';

// Basic usage
<BangladeshFlag />

// Custom size
<BangladeshFlag size={48} />

// With custom styling
<BangladeshFlag className="shadow-lg" />
```

## Flag Details

The Bangladesh flag features:

- Green background (#006A4E) representing the lush landscape
- Red circle (#F42A41) representing the sun and the blood of martyrs
- The circle is positioned slightly to the hoist side for visual balance when flying
