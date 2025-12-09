# HTML Template

A modern, accessibility-focused HTML starter template designed to help you build fast, robust, and adaptable websites without heavy dependencies.

This is a refreshed version of the original **HTML Template**: legacy tooling has been removed, the markup is cleaner, and the CSS is built on a small design system using CSS custom properties and modern layout primitives.

## Features

- **Modern HTML5 structure** with semantic landmarks (`header`, `nav`, `main`, `footer`).
- **Accessibility first** with skip link, focus indicators, ARIA-aware navigation, reduced-motion support.
- **Responsive layout** powered by Flexbox and CSS Grid.
- **Design tokens** built with CSS custom properties (colors, spacing, radii, shadows).
- **Light & dark mode** support using `prefers-color-scheme`.
- **Zero legacy dependencies** — no jQuery, no Modernizr, no IE shims.
- **Vanilla JS** for mobile navigation toggles and smooth scrolling.
- Optional **Sass pipeline** using Dart Sass and PostCSS.
- Includes **error templates**:
  - `404.html`
  - `500.html`
- Includes common **site infrastructure files**:
  - `.htaccess`
  - `robots.txt`
  - `sitemap.xml`
  - `humans.txt`
  - `browserconfig.xml`
  - `crossdomain.xml`

## Project structure

```bash
    html-template/
      .editorconfig
      .gitignore
      LICENSE
      package.json
      README.md

      src/
        index.html
        about.html
        404.html
        500.html

        .htaccess
        robots.txt
        humans.txt
        sitemap.xml
        browserconfig.xml
        crossdomain.xml

        css/
          main.css

        sass/
          _variables.scss
          _base.scss
          _layout.scss
          main.scss

        js/
          main.js

        img/
          placeholder.svg
```

- The `src/` directory acts as your project’s document root.
- You can serve it directly using any static file server (or open `index.html` in the browser).
- If using Sass, compiled CSS is written to `src/css/`.

## Getting started

1. **Install dependencies** (optional — only needed if using Sass/PostCSS):

       npm install

2. **Start a development server with live reload**:

       npm run watch
       # in another terminal
       npm run serve

   This watches your Sass files and serves the `src/` directory in your browser.

3. **Build CSS for production**:

       npm run css

## Customizing the template

- Update metadata in `src/index.html` (`<title>`, meta description, Open Graph tags).
- Adjust colors, spacing, typography, and shadows in `src/sass/_variables.scss`.
- Extend layout utilities and component styles in `src/sass/_layout.scss`.
- Modify or remove optional pages (`about.html`, `404.html`, `500.html`) as needed.
- Update `.htaccess`, `robots.txt`, and `sitemap.xml` to match your deployment environment or hosting provider.

## Browser support

This template targets **evergreen browsers** and uses:

- Flexbox and CSS Grid  
- CSS custom properties  
- `prefers-reduced-motion` and `prefers-color-scheme`  
- ES2015+ JavaScript  

If you require legacy browser support, you can add your own polyfills and fallbacks, but this template is intentionally optimized for modern, forward-compatible projects.
