# Yaroslav, portfolio page

One-page portfolio for a freelance front-end developer who builds websites for small local businesses.
Languages: Polish and English (switch in the header, choice is remembered).

## Structure

```
yaroslav-portfolio/
├── index.html      Markup only (Polish text is the default, marked with data-i18n)
├── css/
│   └── style.css   Design tokens, light/dark theme, responsive layout
└── js/
    ├── i18n.js     PL/EN translations and the language switcher
    └── main.js     Scroll reveal, footer year
```

## How the language switch works

Every translatable element has a `data-i18n="key"` attribute. `js/i18n.js` holds a `TRANSLATIONS` object
with one dictionary per language and swaps the text on click. The saved choice (localStorage) wins,
otherwise the browser language is used (`pl` gives Polish, anything else gives English).
To add a language, add a dictionary and a `data-lang` button in the header.

## Run locally

No build step, no dependencies. Open `index.html`, or:

```bash
python3 -m http.server 8000
```

## Before publishing

The project cards link to GitHub Pages URLs that assume these repository names:
`joga-websait`, `black-razor-barbershop`, `studio-wdech-pilates`, `delivery-food`.
If a repository is named differently, update the two links in its card in `index.html`.

## Deploy

Static site: GitHub Pages (Settings, Pages, branch `main`, folder `/root`), Netlify or Vercel.
