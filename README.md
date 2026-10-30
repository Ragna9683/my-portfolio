# Yaroslav, portfolio page

One-page portfolio for a freelance front-end developer who builds websites for small local businesses.
Language: Polish (target clients are local businesses).

## Structure

```
yaroslav-portfolio/
├── index.html      Markup only
├── css/
│   └── style.css   Design tokens, light/dark theme, responsive layout
└── js/
    └── main.js     Scroll reveal, footer year
```

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
