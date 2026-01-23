# D1 Skincare - 24 Hour Code Challenge

A modern, responsive skincare e-commerce landing page built with Foundation framework, SCSS, and JavaScript for a 24-hour coding challenge.

## 🚀 Project Overview

This project is a pixel-perfect implementation of the D1 Skincare website featuring:
- Fully responsive design across all devices (mobile, tablet, desktop)
- Foundation 6.8.1 framework integration
- Modular SCSS architecture with 7-1 pattern
- AOS (Animate On Scroll) library for smooth scroll animations
- Enhanced button hover effects with ripple and lift animations
- Men's skincare product showcase

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Code Structure](#code-structure)
- [Best Practices](#best-practices)
- [Browser Support](#browser-support)

## ✨ Features

- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop viewports
- **Modern UI Sections**:
  - Hero banner with testimonial rating
  - "A Simple Routine" introduction section
  - "Just Day 1" - 3-step skincare routine
  - "Daily Benefits" cards with flip animations
  - "Get The Set" product showcase with pricing
  - "Best-in-Class Ingredients" showcase
  - "Three Perfect Formulas" with testimonials
  - "What Our Fans Say" video card grid
  - Footer with newsletter signup
- **Interactive Elements**:
  - AOS scroll animations (24+ animated elements)
  - Enhanced button hover effects with ripple
  - Smooth transitions and transforms
  - Marquee scrolling text animation
  - Dynamic cart counter
  - Pulse animations on CTA buttons
- **Performance Optimized**:
  - Compressed CSS output
  - Debounced scroll events
  - Single-page architecture

## 🛠 Technologies Used

### Core Technologies
- **HTML5**: Semantic markup
- **SCSS/Sass**: Modular CSS with variables, mixins, and nesting
- **JavaScript (ES6+)**: Modern JavaScript with jQuery
- **Foundation 6.8.1**: Responsive framework (integrated via CDN and npm)
- **AOS 2.3.1**: Animate On Scroll library

### Foundation Framework Integration
- **Method 1**: CDN link in HTML (`<link>` tag in `<head>`)
- **Method 2**: npm package imported in SCSS (`@import` in main.scss)
- **Provides**: Grid system, responsive utilities, flexbox helpers, visibility classes

### Additional Libraries
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Google Fonts**: Typography (Inter, RobotoMono)
- **jQuery 3.7.1**: DOM manipulation and Foundation compatibility
- **Custom utility classes**: Flexbox, typography, spacing utilities

## 📁 Project Structure

```
24Hour Code Challenge/
├── assets/
│   └── img/                      # Product and category images
│       ├── D1 Code Test_*.png   # Exported Sketch assets
│       └── D1 Code Test_preview.png
├── scss/                         # SCSS source files
│   ├── base/
│   │   ├── _reset.scss          # CSS reset and base styles
│   │   └── _typography.scss     # Typography styles
│   ├── components/
│   │   ├── _header-nav.scss     # Header/navigation component
│   │   ├── _footer.scss         # Footer component
│   │   ├── _d1-buttons.scss     # D1 button styles
│   │   ├── _button-hover-effects.scss  # Enhanced hover effects
│   │   ├── _d1-sections.scss    # D1 section styles
│   │   ├── _d1-products.scss    # Product component styles
│   │   ├── _d1-footer.scss      # D1 footer styles
│   │   └── _carousel.scss       # Carousel/marquee component
│   ├── layout/
│   │   └── _main.scss           # Main layout and grid utilities
│   ├── pages/
│   │   └── index.scss           # Homepage specific styles
│   ├── utils/
│   │   ├── _variables.scss      # SCSS variables (colors, spacing, etc.)
│   │   └── _mixins.scss         # Reusable SCSS mixins (13 mixins)
│   └── main.scss                # Main SCSS entry point
├── css/
│   ├── main.css                 # Compiled CSS (generated)
│   └── main.css.map             # Source map (generated)
├── js/
│   └── main.js                  # Custom JavaScript
├── index.html                   # Main HTML file
├── package.json                 # NPM dependencies and scripts
└── README.md                    # This file
```

## 💻 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Instructions

1. **Clone or download the repository**
   ```bash
   cd "path/to/24Hour Code Challenge"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile SCSS to CSS**
   ```bash
   npm run build
   ```

4. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server (VS Code extension)

## 🎯 Usage

### Viewing the Website

1. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
2. The website is fully functional with:
   - Sticky navigation header with cart
   - Scroll-triggered AOS animations
   - Interactive button hover effects
   - Smooth transitions and transforms
   - Newsletter subscription form
   - Responsive design across all breakpoints

### Development Mode

To work on the styles with live reloading:

```bash
npm run sass:watch
```

This will watch your SCSS files and automatically recompile when changes are detected.

### Build for Production

To compile CSS with compression:

```bash
npm run sass
```

This generates a minified CSS file optimized for production.

## 🔧 Development

### NPM Scripts

- `npm run sass` - Compile SCSS to compressed CSS
- `npm run sass:watch` - Watch SCSS files and auto-compile on changes
- `npm run sass:dev` - Compile SCSS with source maps for debugging
- `npm run build` - Production build (compressed CSS)
- `npm start` - Start development mode (watch mode)

### Modifying Styles

The SCSS architecture follows the **7-1 pattern** (adapted):

1. **Utils**: Variables and mixins used throughout the project
2. **Base**: Reset, typography, and foundational styles
3. **Layout**: Main structural styles and grid utilities
4. **Components**: Individual UI component styles

To modify colors, spacing, or typography:
- Edit `scss/utils/_variables.scss`

To add new components:
1. Create a new file in `scss/components/`
2. Import it in `scss/main.scss`

### Customizing Breakpoints

Responsive breakpoints are defined in `_variables.scss`:
```scss
$breakpoint-small: 0;
$breakpoint-medium: 640px;
$breakpoint-large: 1024px;
$breakpoint-xlarge: 1200px;
$breakpoint-xxlarge: 1440px;
```

Use the mixin in your SCSS:
```scss
@include breakpoint(medium) {
  // Styles for medium screens and up
}
```

## 🏗 Code Structure

### HTML Structure

The HTML follows semantic markup principles:
- `<header>` for navigation
- `<main>` for primary content
- `<section>` for content sections
- `<footer>` for footer information

**Foundation Framework Integration**:
- Foundation CSS loaded via CDN in HTML `<head>` section
- Foundation utilities available (grid system, flexbox, visibility classes)
- Custom utility classes supplement Foundation (defined in `global.css`)
- Both approaches work together without conflicts

### SCSS Architecture

**Foundation Import**: 
- Foundation CSS imported from `node_modules` at the top of `main.scss`
- Ensures Foundation utilities are available throughout the project
- Custom styles cascade after Foundation base styles

**Variables** (`_variables.scss`):
- Color palette
- Typography settings
- Spacing scale
- Breakpoints
- Shadows and transitions

**Mixins** (`_mixins.scss`):
- Responsive breakpoint mixin
- Flexbox utilities
- Button reset
- Image cover
- Hover effects

**Components**:
Each component is self-contained with BEM naming:
```scss
.component {
  &__element {
    // Element styles
  }
  
  &--modifier {
    // Modifier styles
  }
}
```

### JavaScript Organization

The JavaScript is organized into functional sections:
1. **Initialization**: Foundation and Flickity setup
2. **Event Handlers**: Click, scroll, form submissions
3. **Utility Functions**: Debounce, notifications
4. **UI Enhancements**: Animations, lazy loading

## 🎨 Best Practices

### CSS/SCSS
- **BEM Naming Convention**: Block__Element--Modifier
- **Mobile-First Approach**: Base styles for mobile, enhanced for larger screens
- **Variables for Consistency**: Centralized color, spacing, and typography values
- **Mixins for Reusability**: Common patterns extracted into mixins
- **Component Isolation**: Each component is self-contained

### JavaScript
- **jQuery Namespacing**: All code wrapped in IIFE
- **Event Delegation**: Efficient event handling
- **Debouncing**: Performance optimization for scroll events
- **Progressive Enhancement**: Graceful degradation for older browsers

### Performance
- **CSS Compression**: Minified CSS for production
- **Lazy Loading**: Images loaded as needed
- **Debounced Events**: Reduced computation on scroll/resize
- **Modern Selectors**: Efficient DOM querying

### Accessibility
- **Semantic HTML**: Proper use of HTML5 elements
- **ARIA Labels**: Accessible button descriptions
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Color Contrast**: Sufficient contrast ratios

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Graceful Degradation
- Flexbox fallbacks for older browsers
- CSS Grid with fallback layouts
- Progressive enhancement for modern features

## 📦 Dependencies

### Production Dependencies
- `foundation-sites`: ^6.8.1
- `aos`: ^2.3.1

### Development Dependencies
- `sass`: ^1.69.5

## 🎬 Animation Features

### AOS Scroll Animations
- 24+ animated elements throughout the page
- Animation types: fade-up, fade-down, fade-left, fade-right, zoom-in, flip-left
- Staggered delays for sequential animations
- Configured for single-play (once: true)

### Button Hover Effects
- Ripple effect on all buttons
- Lift animations (translateY)
- Enhanced box shadows
- Scale transformations
- Pulse animations on primary CTAs
- Color inversions
- Rotate effects on specific buttons

## 🔍 Key Features Explained

### Scroll Animations (AOS)
- Automatic initialization on page load
- Duration: 1000ms with ease-in-out easing
- Offset: 100px before element enters viewport
- 24 animated sections including cards, headers, images

### Button Hover Effects
- Global button enhancements with cubic-bezier transitions
- "Get Started" button: Teal with scale and glow
- "Try Today" button: Yellow with pulse animation
- "Get The Set" button: Color inversion on hover
- Cart button: Icon color change and badge animation
- Video play buttons: Scale with glow effect

### Responsive Design
- Breakpoints: 1200px, 991px, 767px, 575px
- Mobile-first approach
- Flexbox-based layouts
- Progressive enhancement

### Header Component
- Announcement bar
- Navigation with hamburger menu
- Cart with counter badge
- Dynamic box-shadow on scroll

## 🚧 24-Hour Challenge Deliverables

Completed within the challenge timeframe:
- ✅ Pixel-perfect design implementation
- ✅ Foundation framework integration
- ✅ Modular SCSS architecture (7-1 pattern)
- ✅ Responsive design (4 breakpoints)
- ✅ AOS scroll animations
- ✅ Enhanced button hover effects
- ✅ Clean, semantic HTML
- ✅ Comprehensive documentation
- ✅ Git version control

## 🎓 Code Challenge Notes

This project was built as part of a 24-hour coding challenge to demonstrate:
- Frontend development proficiency
- SCSS/Sass expertise
- Responsive design implementation
- Framework integration (Foundation)
- Animation and interaction design
- Code organization and best practices
- Documentation skills

## 📝 Notes for Development

### Naming Conventions
- **SCSS Files**: Kebab-case with underscore prefix (e.g., `_product-card.scss`)
- **CSS Classes**: BEM notation (e.g., `product-card__title`)
- **JavaScript**: camelCase for variables and functions

### Code Comments
- All major sections have explanatory comments
- Complex logic includes inline documentation
- Each SCSS partial has a header comment

### Git Workflow
- Use feature branches for new components
- Commit messages follow conventional commits
- Test responsive design before committing

## 📄 License

This project is created for a 24-hour code challenge demonstration.

## 👤 Contact

For questions or feedback regarding this implementation, please refer to the project repository.

---

**Built for 24-Hour Code Challenge using Foundation, SCSS, AOS animations, and modern web development best practices**
