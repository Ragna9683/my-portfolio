(() => {
  const root = document.getElementById("wisniewski-visual");
  if (!root) return;
  const dialog = root.querySelector('dialog[aria-labelledby="wisniewski-detail-heading"]');
  const nav = root.querySelector(".nav");
  const menu = root.querySelector(".mobile-menu");
  const player = root.querySelector("video");
  const playback = root.querySelector(".video-toggle");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const bookingUrl = "https://booksy.com/pl-pl/9509_hair-salon-wisniewski_fryzjer_3_warszawa";
  const details = {
    booking: { kicker: "Booksy", title: "Umów wizytę", copy: "Wybierz usługę i dostępny termin w profilu Hair Salon Wiśniewski.", button: "Przejdź do Booksy" },
    women: { kicker: "Oferta", title: "Kobiety", copy: "Usługi damskie w salonie na Woli.", list: ["Strzyżenie damskie", "Koloryzacja i refleksy", "Modelowanie i pielęgnacja"], button: "Zobacz usługi w Booksy" },
    men: { kicker: "Oferta", title: "Mężczyźni", copy: "Strzyżenie i modelowanie włosów oraz usługi dla brody.", list: ["Strzyżenie krótkich włosów z myciem i stylizacją", "Strzyżenie maszynką", "Strzyżenie z brodą"], button: "Zobacz usługi w Booksy" },
    prices: { kicker: "Booksy", title: "Cennik usług", copy: "Aktualne ceny i czas trwania poszczególnych usług znajdziesz na profilu salonu.", button: "Otwórz cennik w Booksy" },
    salon: { kicker: "Warszawa · Wola", title: "Nasz salon", copy: "Hair Salon Wiśniewski, Łucka 18, lokal 6, 00-845 Warszawa.", button: "Zobacz adres w Booksy", photo: ".salon img" }
  };
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.firstChild.textContent = open ? "Zamknij " : "Menu ";
  }
  function showDetail(key) {
    const detail = details[key];
    if (!detail) return;
    dialog.querySelector("[data-dialog-kicker]").textContent = detail.kicker;
    dialog.querySelector("h2").textContent = detail.title;
    dialog.querySelector("[data-dialog-copy]").textContent = detail.copy;
    dialog.querySelector("[data-dialog-cta]").textContent = detail.button;
    dialog.querySelector("[data-dialog-link]").href = bookingUrl;
    const photo = dialog.querySelector("[data-dialog-image]");
    photo.hidden = !detail.photo;
    if (detail.photo) photo.src = root.querySelector(detail.photo).src;
    const list = dialog.querySelector("[data-dialog-list]");
    list.replaceChildren(...(detail.list || []).map(value => {
      const item = document.createElement("li");
      item.textContent = value;
      return item;
    }));
    list.hidden = !detail.list;
    setMenu(false);
    if (!dialog.open) dialog.showModal();
  }
  function syncVideoButton() {
    playback.textContent = player.paused ? "Odtwórz film" : "Pauza";
  }
  root.addEventListener("click", event => {
    const control = event.target.closest("button");
    if (!control || !root.contains(control)) return;
    if (control.dataset.viewChoice) {
      root.dataset.view = control.dataset.viewChoice;
      root.querySelectorAll("[data-view-choice]").forEach(option => option.setAttribute("aria-pressed", String(option === control)));
      setMenu(false);
    } else if (control.dataset.jump) {
      setMenu(false);
      root.querySelector('[data-section="' + control.dataset.jump + '"]').scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    } else if (control.dataset.detail) {
      showDetail(control.dataset.detail);
    } else if (control === menu) {
      setMenu(menu.getAttribute("aria-expanded") !== "true");
    } else if (control === playback) {
      if (player.paused) player.play().catch(syncVideoButton); else player.pause();
    } else if (control.classList.contains("dialog-close")) {
      dialog.close();
    }
  });
  root.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menu.focus();
    }
  });
  player.addEventListener("play", syncVideoButton);
  player.addEventListener("pause", syncVideoButton);
  if (!reducedMotion.matches) player.play().catch(syncVideoButton);
})();

(() => {
  const root = document.getElementById("wisniewski-visual");
  const choices = Array.from(root.querySelectorAll(".folio-choice"));
  const zoom = root.querySelector(".folio-open");
  const mainImage = zoom.querySelector("img");
  const viewer = root.querySelector(".work-viewer");
  const enlarged = viewer.querySelector("[data-viewer-image]");
  const title = viewer.querySelector("h2");
  const counter = viewer.querySelector(".viewer-counter");
  const close = viewer.querySelector(".viewer-close");
  const firstSource = mainImage.getAttribute("src");
  let selected = 0;

  function updateViewer() {
    const choice = choices[selected];
    enlarged.src = mainImage.src;
    enlarged.alt = mainImage.alt;
    title.textContent = choice.dataset.title;
    counter.textContent = (selected + 1) + " / " + choices.length;
    counter.setAttribute("aria-label", choice.dataset.title + ", praca " + (selected + 1) + " z " + choices.length);
  }

  function selectWork(index) {
    selected = (index + choices.length) % choices.length;
    const current = choices[selected];
    choices.forEach((choice, i) => choice.setAttribute("aria-pressed", String(i === selected)));
    mainImage.src = current.dataset.full || firstSource;
    mainImage.alt = current.dataset.alt;
    mainImage.dataset.booksySource = current.dataset.booksySource;
    mainImage.style.objectPosition = current.dataset.position;
    zoom.setAttribute("aria-label", "Powiększ zdjęcie: " + current.dataset.title);
    if (viewer.open) updateViewer();
  }

  choices.forEach((choice, index) => choice.addEventListener("click", () => selectWork(index)));
  zoom.addEventListener("click", () => {
    updateViewer();
    viewer.showModal();
  });
  close.addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", event => {
    if (event.target === viewer) {
      viewer.close();
      return;
    }
    const arrow = event.target.closest("button[data-step]");
    if (arrow) selectWork(selected + Number(arrow.dataset.step));
  });
  viewer.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      selectWork(selected + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  viewer.addEventListener("close", () => zoom.focus({ preventScroll: true }));
})();
