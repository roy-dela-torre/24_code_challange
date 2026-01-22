# Video Recording Guide

## Recording Requirements

Create a video demonstration that includes two parts:

### Part 1: Website Showcase (5-10 minutes)
Walk through the completed website and demonstrate all features.

### Part 2: Code Walkthrough (10-15 minutes)
Open your code editor and explain the project structure and implementation.

---

## Part 1: Website Showcase Script

### Introduction (30 seconds)
- "Hello, this is my submission for the e-commerce web shop code challenge."
- "I've built a responsive, pixel-perfect homepage using Foundation framework and SCSS."

### Opening the Website (30 seconds)
- Open the project in your browser
- Show the URL or file path
- "Let me start by opening index.html in the browser."

### Desktop View Demonstration (3 minutes)

**Header/Navigation**
- Point out the sticky header
- Show navigation links
- Click on navigation items to demonstrate smooth scrolling
- Show the cart icon with counter
- "The header includes navigation, search, user account, and shopping cart with a dynamic counter."

**Hero Section**
- Scroll to hero section
- Point out the background image, title, description
- Click the CTA buttons
- "This is the hero section with call-to-action buttons that navigate to product sections."

**Featured Products Carousel**
- Show the Flickity carousel
- Click next/previous buttons
- Show product cards with hover effects
- Click "Add to Cart" buttons
- Show notification system
- "The featured products section uses Flickity carousel with responsive product cards."

**Category Grid**
- Scroll to categories
- Hover over category cards to show effects
- Click on categories
- "Categories are displayed in a responsive grid with hover effects."

**Best Sellers Grid**
- Show the product grid
- Demonstrate hover effects
- Try adding products to cart
- "This section showcases best sellers in a responsive grid layout."

**Footer**
- Scroll to footer
- Show footer sections
- Try the newsletter subscription
- Click social media icons
- "The footer includes company info, links, and newsletter subscription."

### Responsive Design Demo (2-3 minutes)

**Tablet View**
- Resize browser to tablet size (768px)
- Show how layout adapts
- Scroll through all sections
- "Let me show you the tablet view - notice how the grid adjusts to 2 columns."

**Mobile View**
- Resize to mobile (375px)
- Show mobile navigation
- Demonstrate carousel on mobile
- Scroll through all sections
- Show touch interactions
- "On mobile, everything stacks vertically with optimized spacing and touch targets."

**Back to Desktop**
- Resize back to full screen
- "The layout seamlessly adapts across all viewport sizes."

### Interactive Features (1 minute)
- Demonstrate smooth scroll
- Show cart counter incrementing
- Show notification system
- Demonstrate all hover states
- "All interactive elements provide visual feedback and smooth animations."

### Conclusion (30 seconds)
- "This completes the website demonstration showing a fully responsive, interactive e-commerce homepage."
- "Now let me show you how the code is structured."

---

## Part 2: Code Walkthrough Script

### Project Structure Overview (2 minutes)

**Open VS Code/Editor**
- Show the file tree
- "Let me walk you through the project structure."

**Explain Folder Structure**
```
├── assets/img/          - All images from Sketch mockup
├── scss/                - Modular SCSS architecture
│   ├── base/           - Reset and typography
│   ├── components/     - UI components
│   ├── layout/         - Layout structure
│   └── utils/          - Variables and mixins
├── css/                - Compiled CSS
├── js/                 - JavaScript
├── index.html          - Main HTML file
├── package.json        - Dependencies
└── README.md           - Documentation
```

### SCSS Architecture (4-5 minutes)

**Variables (_variables.scss)**
- Open `scss/utils/_variables.scss`
- "I've defined all design tokens here - colors, typography, spacing, breakpoints."
- Point out color palette
- Show spacing scale
- Show breakpoint definitions
- "This ensures consistency throughout the project."

**Mixins (_mixins.scss)**
- Open `scss/utils/_mixins.scss`
- "These are reusable code patterns."
- Show breakpoint mixin: "This makes responsive design simple"
- Show flex utilities
- Show image-cover mixin
- "These mixins reduce code duplication and improve maintainability."

**Base Styles**
- Open `scss/base/_reset.scss`
- "The reset provides a consistent starting point across browsers."
- Open `scss/base/_typography.scss`
- "Typography classes for consistent text styling."

**Component Architecture**
- Open `scss/components/_header.scss`
- "Each component is self-contained using BEM naming convention."
- Explain BEM: Block__Element--Modifier
- Show example: `.header__nav-link--active`
- "This makes the code predictable and prevents style conflicts."

- Open `scss/components/_product-card.scss`
- "The product card is highly reusable."
- Show nested structure
- Point out hover effects
- Show responsive considerations

- Open `scss/components/_hero.scss`
- Show background image technique
- Point out flexbox centering
- Show responsive font sizing

**Main SCSS File**
- Open `scss/main.scss`
- "This is the entry point that imports all partials in the correct order."
- Explain import order: utilities → base → layout → components
- Show utility classes at bottom

### HTML Structure (2-3 minutes)

**Open index.html**
- "The HTML uses semantic elements and Foundation's grid system."

**Head Section**
- Point out Google Fonts
- Show Foundation CDN
- Show Flickity CDN
- Show custom CSS link
- "All dependencies are loaded via CDN for this demo."

**Header Component**
- Show semantic `<header>` element
- Point out BEM classes matching SCSS
- Show Foundation utilities
- Show responsive visibility classes

**Product Card HTML**
- Find a product card
- Show structure matching SCSS
- Point out semantic elements
- Show data attributes for JavaScript

**Foundation Grid Usage**
- Find grid examples
- Show `.grid` with modifiers
- Show responsive column classes
- "Foundation provides the grid system, enhanced with custom SCSS."

### JavaScript (2-3 minutes)

**Open js/main.js**
- "The JavaScript is organized into functional sections."

**Initialization**
- Show Foundation initialization
- Show Flickity setup
- "We initialize frameworks first."

**Event Handlers**
- Show smooth scroll functionality
- Show add-to-cart handler
- "Event handlers provide interactivity."

**Cart Functionality**
- Show cart counter update
- Show notification system
- "This simulates adding items to cart with visual feedback."

**Responsive Carousel**
- Show adjustCarouselCells function
- "This function adapts carousel cell width based on viewport."
- Show debounce usage
- "Debouncing prevents performance issues on resize."

**Utility Functions**
- Show debounce function
- Show notification function
- "Utility functions are reusable throughout the code."

### Best Practices Highlight (1-2 minutes)

**Code Organization**
- "The project follows enterprise-level organization patterns."
- "SCSS uses the 7-1 pattern (adapted)"
- "JavaScript uses IIFE for namespacing"
- "HTML follows semantic structure"

**Naming Conventions**
- "BEM for CSS classes ensures scalability"
- "camelCase for JavaScript"
- "Descriptive, self-documenting names"

**Responsive Approach**
- "Mobile-first design with progressive enhancement"
- "Foundation breakpoints for consistency"
- "Flexible grid systems"

**Maintainability**
- "Modular components can be reused"
- "Variables make global changes easy"
- "Mixins reduce code duplication"
- "Comments explain complex logic"

**Performance**
- "Compiled and compressed CSS"
- "Debounced scroll events"
- "Lazy loading support"
- "Efficient selectors"

### Build Process (1 minute)

**Show package.json**
- "I've set up npm scripts for development."
- Point out scripts section
- "npm run sass:watch for development"
- "npm run build for production"

**Demonstrate Build**
- Run `npm run build` in terminal
- Show CSS file being generated
- "This compiles all SCSS into optimized CSS."

### Conclusion (1 minute)
- "This project demonstrates modern web development practices:"
  - "Foundation framework for responsive design"
  - "Modular SCSS architecture for maintainability"
  - "Semantic HTML for accessibility"
  - "Interactive JavaScript for user experience"
  - "Enterprise-level code organization"
- "The code is structured as if this would scale to a large e-commerce platform."
- "All design requirements have been implemented with pixel-perfect accuracy."
- "Thank you for reviewing my submission!"

---

## Recording Tips

### Technical Setup
1. **Screen Resolution**: Record at 1920x1080 or 1280x720
2. **Audio**: Use a good microphone, eliminate background noise
3. **Browser**: Use Chrome or Firefox, close unnecessary tabs
4. **Editor**: Use VS Code or similar with a clean theme
5. **Zoom Level**: Increase editor font size for visibility

### Recording Software Options
- **Zoom**: Start a meeting and record
- **OBS Studio**: Free, powerful screen recording
- **Loom**: Simple browser-based recording
- **QuickTime (Mac)**: Built-in screen recording
- **Windows Game Bar**: Built-in on Windows 10/11

### Best Practices
- **Rehearse**: Practice the walkthrough before recording
- **Speak Clearly**: Explain as you go, don't rush
- **Show, Don't Tell**: Demonstrate features actively
- **Stay On Topic**: Focus on implementation and decisions
- **Be Professional**: Maintain enthusiasm and professionalism
- **Time Management**: Aim for 15-25 minutes total

### What to Avoid
- Don't read code line by line
- Don't spend too long on any one section
- Don't apologize for small issues
- Don't go off on tangents
- Don't assume knowledge - explain technical terms

### Video Structure
- Introduction: 5% of time
- Part 1 (Demo): 40% of time
- Part 2 (Code): 50% of time
- Conclusion: 5% of time

---

## Checklist Before Recording

- [ ] Website works perfectly in browser
- [ ] All images load correctly
- [ ] SCSS compiled to CSS (`npm run build`)
- [ ] No console errors in browser
- [ ] Code is clean and well-commented
- [ ] README is complete
- [ ] Git repository is clean
- [ ] Screen recording software is set up
- [ ] Microphone is tested
- [ ] Browser zoom is at 100%
- [ ] Editor font size is readable
- [ ] Close unnecessary applications
- [ ] Silence phone and notifications

---

Good luck with your recording! 🎥
