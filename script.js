const hiddenCards = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries, observer) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.15
});

hiddenCards.forEach((card) => {
  observer.observe(card);
});