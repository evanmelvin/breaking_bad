# Breaking Bad Cinematic Fan Website

A comprehensive, interactive Breaking Bad fan website with cinematic design, gamification, and curated content.

## Features

- **Multi-page React Application** with smooth routing transitions
- **Cinematic Hero Section** with dramatic Breaking Bad theming
- **Interactive Quiz System** with character matching
- **Fan Ranking/Gamification System** (Cook → Heisenberg levels)
- **Chemistry-inspired Navigation** with periodic table elements
- **Curated Content Sections** for bios, trivia, memes, and GIFs
- **Responsive Design** with hover effects and animations

## Customizing Media Assets

All images and GIFs used throughout the site can be easily customized by editing the `src/assets/mediaAssets.ts` file.

### How to Update Assets:

1. **Character Images**: Update the `characters` object with new image URLs
2. **Character GIFs**: Update the `gifs` object with new GIF URLs
3. **Background Images**: Update the `backgrounds` object
4. **Meme Images**: Update the `memes` object

Example:
```typescript
export const mediaAssets = {
  characters: {
    walter: "YOUR_NEW_WALTER_IMAGE_URL",
    jesse: "YOUR_NEW_JESSE_IMAGE_URL",
    // ... etc
  },
  gifs: {
    walter: {
      danger: "YOUR_NEW_WALTER_GIF_URL",
      sayMyName: "YOUR_NEW_SAY_MY_NAME_GIF_URL"
    },
    // ... etc
  }
};
```

## Design Elements

- **Color Palette**: Chemistry green (#00ff41), desert yellow (#ffd700), orange (#ff8c00)
- **Typography**: Orbitron for chemistry elements, Rajdhani for body text
- **Effects**: Neon-green chemical glow effects, periodic table styling
- **Animations**: Smooth page transitions, hover effects, chemical bubbles

## Gamification System

Users earn XP points by:
- Viewing character bios (+10 XP)
- Completing trivia questions (+15-25 XP based on difficulty)
- Taking quizzes (+30-60 XP based on result)
- Viewing memes (+5 XP)
- Watching GIFs (+8 XP)

### Ranking System:
1. High School Chemistry Student (0 XP)
2. Los Pollos Hermanos Cook (100 XP)
3. RV Cook (250 XP)
4. Lab Assistant (500 XP)
5. Methylamine Specialist (750 XP)
6. Empire Builder (1000 XP)
7. Heisenberg (1500 XP)

## Development

```bash
npm install
npm run dev
```

## Performance Optimizations

- Optimized chemical bubble animations to prevent flickering
- Smooth scrolling behavior
- Efficient asset loading
- Proper cleanup of animations and intervals
- Will-change properties for better performance

## Browser Support

Modern browsers with ES6+ support, CSS Grid, and Flexbox capabilities.