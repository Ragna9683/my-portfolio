/**
 * Portfolio page interactions
 *
 *  1. Scroll-reveal animation for sections
 *  2. Current year in the footer
 */
(function () {
  "use strict";

  /* ---------- 1. Scroll reveal ---------- */

  var blocks = document.querySelectorAll(".rv");

  function reveal(element) {
    element.classList.add("in");
  }

  if (!("IntersectionObserver" in window)) {
    // Very old browsers: just show everything
    blocks.forEach(reveal);
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    blocks.forEach(function (block) {
      observer.observe(block);
    });
  }

  /* ---------- 2. Footer year ---------- */

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
