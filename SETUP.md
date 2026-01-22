# Quick Setup Guide

## For Reviewers

This guide will help you quickly set up and run the project.

### Step 1: Prerequisites
Make sure you have Node.js installed on your system.
- Download from: https://nodejs.org/
- Verify installation: `node --version` and `npm --version`

### Step 2: Installation

```bash
# Navigate to the project directory
cd "path/to/24Hour Code Challenge"

# Install dependencies
npm install

# Compile SCSS to CSS
npm run build
```

### Step 3: View the Website

**Option A: Direct Browser**
- Simply open `index.html` in your web browser

**Option B: Live Server (Recommended)**
- If using VS Code, install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

**Option C: Simple HTTP Server**
```bash
# Using Python (if installed)
python -m http.server 8000

# Or using Node.js http-server (install globally first)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Development

### To work on SCSS:
```bash
npm run sass:watch
```

This will automatically recompile CSS when you save SCSS files.

## Project Highlights

1. **Responsive Design**: Resize your browser to see mobile/tablet/desktop layouts
2. **Interactive Features**: Try clicking "Add to Cart" buttons and exploring the carousel
3. **Smooth Animations**: Notice hover effects on products and categories
4. **Modern Code**: Check the organized SCSS structure in the `scss/` folder

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation links scroll smoothly to sections
- [ ] Product carousel works (click arrows, drag on mobile)
- [ ] Add to cart shows notification
- [ ] Responsive layout on mobile/tablet/desktop
- [ ] All images load properly
- [ ] Hover effects work on product cards
- [ ] Footer newsletter form works

## Troubleshooting

**Problem**: Styles not loading
- **Solution**: Make sure you ran `npm run build` to compile SCSS

**Problem**: npm install fails
- **Solution**: Delete `node_modules` folder and `package-lock.json`, then try again

**Problem**: Images not showing
- **Solution**: Check that assets are in the `assets/img/` folder

## Video Walkthrough

The video submission includes:
1. **Part 1**: Live demonstration of the website functionality
2. **Part 2**: Code walkthrough explaining the structure and best practices

---

For detailed documentation, see [README.md](README.md)
