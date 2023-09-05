const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'color-text': '#1f0f0f',
      'color-background': '#ffffff',
      'color-primary': '#86c8cb',
      'color-secondary': '#d5ebeb',
      'color-accent': '#4e7aa6',
      'color-booking': '#003b95',
      'color-white': '#ffffff',
      'color-black': '#000',
      transparent: '#ffffff00',
    },
    extend: {
      keyframes: {
        reviewsTransition: {
          '0%, 100%': { transform: 'translateX(0)' },
          '99.999%': { transform: 'translateX(calc(var(--animationWidth) * -1 - 1rem))' },
        },
      },
      animation: {
        reviews: 'reviewsTransition var(--animationSpeed) linear infinite',
      },
      boxShadow: {
        'top-bottom': 'inset 0 10px 20px -10px rgba(0, 0, 0, 0.3), inset 0 -10px 20px -10px rgba(0, 0, 0, 0.3)',
        'top-bottom-large': 'inset 0 15px 30px -15px rgba(0, 0, 0, 0.5), inset 0 -15px 30px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
