const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'color-text': '#1f0f0f',
      'color-background': '#ffffff',
      'color-primary': '#86c8cb',
      'color-secondary': '#d5ebeb',
      'color-accent': '#4e7aa6',
    },
    extend: {},
  },
  plugins: [],
};