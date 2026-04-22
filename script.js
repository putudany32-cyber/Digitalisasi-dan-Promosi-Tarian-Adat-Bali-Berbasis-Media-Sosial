document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".card, .dance, .mini-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  items.forEach((item) => {
    item.classList.add("hidden");
    observer.observe(item);
  });

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function () {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      }
    });
  });
});
