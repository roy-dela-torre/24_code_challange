# Git Setup Instructions

## Initial Repository Setup

Follow these steps to create a GitHub repository for this project:

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ecommerce-web-shop` (or your preferred name)
3. Description: "Modern responsive e-commerce web shop built with Foundation and SCSS"
4. Choose: Public
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Initialize Local Git Repository

Open terminal in the project directory and run:

```bash
# Navigate to project directory
cd "c:\Users\boyde\OneDrive\Documents\exam\24Hour Code Challenge"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete e-commerce homepage implementation

- Responsive design with Foundation framework
- Modular SCSS architecture (BEM methodology)
- Interactive UI with Flickity carousel
- Product cards and category grid
- Full documentation and setup guides"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-web-shop.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Upload

1. Go to your GitHub repository URL
2. Verify all files are uploaded
3. Check that README.md displays correctly

---

## Git Workflow Best Practices

### Making Changes

```bash
# Create a feature branch
git checkout -b feature/component-name

# Make your changes, then:
git add .
git commit -m "feat: Add new component or feature"

# Push to GitHub
git push origin feature/component-name

# Merge back to main when ready
git checkout main
git merge feature/component-name
git push origin main
```

### Commit Message Convention

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Build process or auxiliary tool changes

Examples:
```bash
git commit -m "feat: Add product filtering functionality"
git commit -m "fix: Resolve mobile menu toggle issue"
git commit -m "docs: Update README with new setup instructions"
git commit -m "style: Format SCSS files with consistent indentation"
```

---

## What's Included in Repository

The repository includes:

✅ **Source Code**
- HTML, SCSS, JavaScript
- All component files
- Compiled CSS

✅ **Assets**
- Product images
- Category images
- Logo and icons

✅ **Documentation**
- README.md - Comprehensive project documentation
- SETUP.md - Quick setup guide
- VIDEO_GUIDE.md - Video recording instructions
- GIT_SETUP.md - This file

✅ **Configuration**
- package.json - Dependencies and scripts
- .gitignore - Files to exclude from git

❌ **Excluded** (via .gitignore)
- node_modules/ - NPM packages (downloaded via npm install)
- .vscode/ - Editor settings
- *.log - Log files
- .DS_Store - Mac system files

---

## Repository Sharing

### For Code Challenge Submission

When sharing with reviewers:

1. **Share Repository URL**: 
   - Example: `https://github.com/YOUR_USERNAME/ecommerce-web-shop`

2. **Ensure Repository is Public**:
   - Go to Settings → Danger Zone → Change visibility → Make public

3. **Pin Repository** (optional):
   - Go to your GitHub profile
   - Click "Customize your pins"
   - Select this repository

4. **Add Topics** (optional):
   - Go to repository page
   - Click the gear icon next to "About"
   - Add topics: `ecommerce`, `foundation`, `scss`, `responsive-design`, `javascript`, `flickity`

### README Preview

Make sure your README looks good:
- GitHub automatically displays README.md
- Check that images (if any) load correctly
- Verify all markdown formatting is correct
- Links should work properly

---

## Troubleshooting

**Problem**: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-web-shop.git
```

**Problem**: Large files rejected
- Check .gitignore includes node_modules/
- Don't commit compiled files if too large
- Use Git LFS for large assets if needed

**Problem**: Authentication failed
- Use personal access token instead of password
- Generate token at: https://github.com/settings/tokens
- Or use SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

## After Pushing to GitHub

### Verify Everything

1. ✅ All source files are present
2. ✅ README displays correctly
3. ✅ .gitignore is working (node_modules not uploaded)
4. ✅ Repository is public
5. ✅ Description and topics are set

### Share with Reviewers

Provide:
1. 📦 GitHub repository URL
2. 🎥 Video demonstration link (YouTube, Loom, etc.)
3. 📧 Any additional notes or context

---

## Quick Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# See what changed
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Update from remote
git pull origin main

# View remote URL
git remote -v
```

---

**Ready to submit!** 🚀
