# Vacation Quest: The Legend of Actually Logging Off

A deployable, static, single-page choose-your-own-adventure web app about taking a real vacation and not working while away.

## Files

- `index.html` - app shell and semantic structure
- `styles.css` - hand-drawn comic-inspired visual system, responsive layout, accessibility states
- `app.js` - story engine, choices, scoring, SVG scene graphics, achievements
- `assets/favicon.svg` - tiny vacation face icon

## Deploy

Upload the unzipped folder to any static web hosting location, LMS file area, SharePoint static hosting location, GitHub Pages, or a simple web server. Open `index.html`.

No build step, external libraries, tracking, or network calls are required.

## Accessibility Notes

- Keyboard-operable choice buttons
- Visible focus states
- `aria-live` updates for passport stamps and achievement toast messages
- Skip link
- Responsive layout
- Honors `prefers-reduced-motion`
- High-contrast ink-on-paper palette

## Customizing

Edit `app.js` to add scenes or choices. Each scene includes:

- `chapter`
- `title`
- `graphic`
- `note`
- `text`
- `choices`

The visual style is intentionally original: loose hand-drawn line art, comic-strip energy, absurd office monsters, and warm paper textures.
