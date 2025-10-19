# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a basketball scoreboard web application built with vanilla HTML, CSS, and JavaScript. It's a static, client-side only application with no build process or dependencies.

## Development

### Running the Application

This is a static HTML/CSS/JavaScript project with no build step. To run:

```bash
# Open index.html directly in a browser, or use a simple HTTP server:
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

### Project Structure

- `index.html` - Main HTML structure with HOME and GUEST score displays
- `script.js` - JavaScript logic for score tracking (currently empty/in development)
- `styles.css` - All styling including custom fonts and animations
- `fonts/CursedTimerUlil-Aznm.ttf` - Custom "CursedTimer" font for LED-style score display
- `images/joshua-kantarges-basketball-court-unsplash.jpg` - Background image
- `favicon.png` - Site favicon

## Architecture

### UI Layout

The scoreboard uses a centered flexbox container with two score sections (HOME and GUEST). Each section displays:
- Team label (h3)
- Score display with LED-style digits (h1 with class "score")

### Styling Approach

- **Color scheme**: Dark green background (#2E5540), light text (#eef3e0), red LED-style scores (#ff0000)
- **Custom font**: "CursedTimer" loaded via @font-face for authentic LED display appearance
- **Score animation**: Flickering text-shadow effect using CSS keyframes to simulate vintage LED displays
- **Background**: Full-screen basketball court image with cover sizing

### Expected JavaScript Functionality

Based on the HTML structure, script.js should implement:
- Score increment buttons for HOME and GUEST teams (+1, +2, +3 points are typical)
- DOM manipulation to update the two `.score` elements
- Likely a reset/new game function

## Technical Notes

- No framework or build tools - pure vanilla JS
- No package.json or dependencies
- Browser-native ES6+ JavaScript is appropriate
- The HTML structure expects buttons to be added dynamically or is incomplete

