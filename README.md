# Premium Shop - E-commerce Web Application

A modern, responsive e-commerce web shop built with Foundation framework, SCSS, and JavaScript following enterprise-level best practices.

## 🚀 Project Overview

This project is a pixel-perfect implementation of a modern e-commerce homepage featuring:
- Responsive design across all devices (mobile, tablet, desktop)
- Foundation framework for robust grid system
- Modular SCSS architecture for maintainability
- Flickity carousel for product showcases
- Interactive UI components with smooth animations

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
- **Modern UI Components**:
  - Sticky navigation header with cart functionality
  - Hero section with call-to-action buttons
  - Product cards with hover effects
  - Category grid with image overlays
  - Product carousel using Flickity
  - Footer with newsletter subscription
- **Interactive Elements**:
  - Add to cart functionality with notifications
  - Smooth scroll navigation
  - Dynamic cart counter
  - Hover animations and transitions
- **Performance Optimized**:
  - Lazy loading support
  - Compressed CSS output
  - Debounced scroll events

## 🛠 Technologies Used

### Core Technologies
- **HTML5**: Semantic markup
- **SCSS/Sass**: Modular CSS with variables, mixins, and nesting
- **JavaScript (ES6+)**: Modern JavaScript with jQuery
- **Foundation 6.8.1**: Responsive framework
- **Flickity 2.3.0**: Carousel library

### Additional Libraries
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts**: Typography (Roboto, Montserrat, Open Sans)
- **jQuery 3.7.0**: DOM manipulation and Foundation compatibility

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
│   │   ├── _header.scss         # Header/navigation component
│   │   ├── _footer.scss         # Footer component
│   │   ├── _button.scss         # Button styles
│   │   ├── _hero.scss           # Hero section
│   │   ├── _product-card.scss   # Product card component
│   │   ├── _carousel.scss       # Carousel component
│   │   └── _category.scss       # Category card component
│   ├── layout/
│   │   └── _main.scss           # Main layout and grid utilities
│   ├── utils/
│   │   ├── _variables.scss      # SCSS variables (colors, spacing, etc.)
│   │   └── _mixins.scss         # Reusable SCSS mixins
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
   - Navigation links (smooth scroll to sections)
   - Add to cart functionality
   - Product carousel navigation
   - Category browsing
   - Newsletter subscription form

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

Foundation's grid system is integrated for responsive layouts.

### SCSS Architecture

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
- `flickity`: ^2.3.0

### Development Dependencies
- `sass`: ^1.69.5

## 🔍 Key Features Explained

### Responsive Product Carousel
- Uses Flickity for smooth scrolling
- Adjusts cell width based on viewport
- Touch-enabled for mobile devices
- Pagination dots and prev/next buttons

### Product Cards
- Hover effects with image zoom
- Badge system for "New", "Sale", "Hot" items
- Add to cart with visual feedback
- Responsive pricing display

### Category Grid
- CSS Grid with responsive columns
- Image overlay with gradient
- Hover effects with image scale
- Click handlers for navigation

### Header Component
- Sticky positioning
- Dynamic cart counter
- Responsive navigation (desktop/mobile)
- Smooth scroll to sections

## 🚧 Future Enhancements

Potential improvements for scaling to a full enterprise application:
- Product filtering and sorting
- Search functionality with autocomplete
- User authentication system
- Shopping cart page with checkout
- Product detail pages
- Customer reviews and ratings
- Multi-language support (i18n)
- Analytics integration
- SEO optimization
- State management (Redux/Context)
- Backend API integration

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

This project is created for a code challenge demonstration.

## 👤 Contact

For questions or feedback regarding this implementation, please refer to the video walkthrough included with the submission.

---

**Built with ❤️ using Foundation, SCSS, and modern web development best practices**
