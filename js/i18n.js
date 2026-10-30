/**
 * Language switcher (Polish / English)
 *
 * All translatable text lives in the TRANSLATIONS object below. Elements opt in
 * with data-i18n="key". The Polish text is also written in index.html, so the
 * page still reads correctly when JavaScript is unavailable.
 *
 * To add a language: add another object to TRANSLATIONS and a button with
 * data-lang="xx" to the header.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";

  var TRANSLATIONS = {
    pl: {
      "meta.title": "Yaroslav – strony internetowe dla małych firm",
      "meta.description": "Front-end developer. Proste, szybkie strony internetowe dla małych firm: wizytówki, menu, cenniki, galerie i zapisy online.",
      "nav.contact": "Kontakt",
      "hero.tag": "Front-end developer · Radzymin i okolice",
      "hero.title": "Proste, szybkie strony internetowe dla małych firm",
      "hero.text": "Cześć, jestem Yaroslav. Robię strony wizytówki, menu, cenniki i galerie, które dobrze wyglądają na telefonie i pomagają klientom Cię znaleźć.",
      "hero.cta": "Zobacz projekty",
      "offer.title": "Co mogę dla Ciebie zrobić",
      "offer.1.title": "Strona-wizytówka",
      "offer.1.text": "Jedna czytelna strona: kim jesteś, czym się zajmujesz, gdzie Cię znaleźć.",
      "offer.2.title": "Menu, cennik, oferta",
      "offer.2.text": "Ceny widoczne od razu, bez dopytywania. Łatwe do aktualizacji.",
      "offer.3.title": "Galeria zdjęć",
      "offer.3.text": "Zdjęcia lokalu, produktów lub prac w estetycznym układzie.",
      "offer.4.title": "Kontakt i zapisy",
      "offer.4.text": "Telefon, mapa, godziny otwarcia, grafik zajęć lub formularz.",
      "projects.title": "Projekty",
      "yoga.title": "Strona dla nauczycielki jogi",
      "yoga.badge": "Zlecenie płatne",
      "yoga.1": "Sekcje: O mnie, Joga, Realizacje, Poezja, Kontakt",
      "yoga.2": "Własny slider zdjęć i karuzela z kropkami nawigacji",
      "yoga.3": "Teksty wczytywane z Arkuszy Google",
      "badge.concept": "Projekt koncepcyjny",
      "barber.1": "Ciemny motyw ze złotymi akcentami, cennik, zespół, galeria",
      "barber.2": "Menu mobilne i animacje przy przewijaniu",
      "common.theme": "Tryb jasny i ciemny",
      "pilates.title": "Studio pilatesu",
      "pilates.1": "Interaktywny grafik zajęć z zakładkami dni",
      "pilates.2": "Karnety, pytania i odpowiedzi, formularz z wyborem zajęć",
      "food.title": "Aplikacja z dostawą jedzenia",
      "badge.training": "Projekt szkoleniowy",
      "food.1": "Lista restauracji generowana dynamicznie",
      "food.2": "Koszyk w oknie modalnym",
      "food.3": "Stan ładowania danych",
      "btn.live": "Zobacz online",
      "btn.code": "Kod",
      "projects.note": "Projekty koncepcyjne to wzory dla przykładowych firm: nazwy, ceny i dane kontaktowe są fikcyjne.",
      "tech.title": "Technologie",
      "tech.react": "React (projekty własne)",
      "tech.angular": "Angular (projekty własne)",
      "tech.note": "Pracuję z narzędziami AI, które przyspieszają pracę, ale rozumiem kod, który oddaję.",
      "process.title": "Jak wygląda współpraca",
      "process.1": "Rozmawiamy: co ma być na stronie, jakie macie zdjęcia i teksty.",
      "process.2": "Ustalamy zakres i cenę z góry, bez niespodzianek.",
      "process.3": "Robię stronę i pokazuję ją do obejrzenia.",
      "process.4": "Wprowadzam poprawki i publikuję stronę online.",
      "contact.text": "Napisz, opisz krótko swoją firmę, a wrócę z propozycją.",
      "footer.text": "Strony internetowe dla małych firm"
    },
    en: {
      "meta.title": "Yaroslav – websites for small businesses",
      "meta.description": "Front-end developer. Simple, fast websites for small businesses: business pages, menus, price lists, galleries and online booking.",
      "nav.contact": "Contact",
      "hero.tag": "Front-end developer · Radzymin area, Poland",
      "hero.title": "Simple, fast websites for small businesses",
      "hero.text": "Hi, I'm Yaroslav. I build business pages, menus, price lists and galleries that look great on a phone and help customers find you.",
      "hero.cta": "See projects",
      "offer.title": "What I can do for you",
      "offer.1.title": "One-page business site",
      "offer.1.text": "One clear page: who you are, what you do and where to find you.",
      "offer.2.title": "Menu, prices, offer",
      "offer.2.text": "Prices visible right away, no need to ask. Easy to update.",
      "offer.3.title": "Photo gallery",
      "offer.3.text": "Photos of your venue, products or work in a tidy layout.",
      "offer.4.title": "Contact and booking",
      "offer.4.text": "Phone, map, opening hours, class schedule or a form.",
      "projects.title": "Projects",
      "yoga.title": "Website for a yoga teacher",
      "yoga.badge": "Paid commission",
      "yoga.1": "Sections: About, Yoga, Projects, Poetry, Contact",
      "yoga.2": "Custom photo slider and carousel with navigation dots",
      "yoga.3": "Content loaded from Google Sheets",
      "badge.concept": "Concept project",
      "barber.1": "Dark theme with gold accents, price list, team, gallery",
      "barber.2": "Mobile menu and scroll animations",
      "common.theme": "Light and dark mode",
      "pilates.title": "Pilates studio",
      "pilates.1": "Interactive class schedule with day tabs",
      "pilates.2": "Pricing plans, FAQ, booking form with class selection",
      "food.title": "Food delivery app",
      "badge.training": "Training project",
      "food.1": "Restaurant list generated dynamically",
      "food.2": "Cart in a modal window",
      "food.3": "Data loading state",
      "btn.live": "View live",
      "btn.code": "Code",
      "projects.note": "Concept projects are samples for example businesses: names, prices and contact details are fictional.",
      "tech.title": "Technologies",
      "tech.react": "React (personal projects)",
      "tech.angular": "Angular (personal projects)",
      "tech.note": "I use AI tools to speed up my work, but I understand the code I deliver.",
      "process.title": "How we work together",
      "process.1": "We talk: what the site should include and what photos and texts you have.",
      "process.2": "We agree on scope and price up front, no surprises.",
      "process.3": "I build the site and show it to you for review.",
      "process.4": "I make the changes and publish the site online.",
      "contact.text": "Write to me, briefly describe your business and I'll come back with a proposal.",
      "footer.text": "Websites for small businesses"
    }
  };

  var buttons = document.querySelectorAll("[data-lang]");
  var descriptionMeta = document.querySelector('meta[name="description"]');

  /* ---------- Remember the choice ---------- */

  function readSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null; // storage blocked (private mode, etc.)
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* storage unavailable: the choice just won't persist */
    }
  }

  // Saved choice first, otherwise follow the browser language
  function detectLang() {
    var saved = readSavedLang();
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
    var browser = (navigator.language || "").toLowerCase();
    return browser.indexOf("pl") === 0 ? "pl" : "en";
  }

  /* ---------- Apply a language ---------- */

  function translate(lang) {
    var dictionary = TRANSLATIONS[lang];

    document.documentElement.lang = lang;
    document.title = dictionary["meta.title"];
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", dictionary["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var text = dictionary[element.getAttribute("data-i18n")];
      if (text !== undefined) {
        element.textContent = text;
      }
    });

    buttons.forEach(function (button) {
      var active = button.getAttribute("data-lang") === lang;
      button.setAttribute("aria-pressed", String(active));
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang");
      translate(lang);
      saveLang(lang);
    });
  });

  translate(detectLang());
})();
