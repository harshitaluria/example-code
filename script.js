const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
  document.getElementById("skills").scrollIntoView({
    behavior: "smooth"
  });
});

/* Card Animation on Scroll */

const cards = document.querySelectorAll(".flashcard");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

/* Initial Hidden State */

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";
});