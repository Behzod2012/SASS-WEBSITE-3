const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Scroll paytida elementlarni ko'rsatish
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(
    ".main-story, .news-card, .card, .story-card, .section__left .left, .section__left .right"
  );

  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  // Hamburger menyu animatsiyasi
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".carders, .carderss");
  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(
    "article, .quote, .comment, .comment-form, .more"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".card, .table .row, .item");
  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-reveal");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // FAQ akkordeon
  const questions = document.querySelectorAll(".question");
  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const answer = item.querySelector(".answerss");
      const icon = btn.querySelector("span:last-child");
      const isOpen = item.classList.contains("active");

      // Boshqa hammasini yopish
      document.querySelectorAll(".item").forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".answerss").classList.remove("show");
        otherItem.querySelector(".question span:last-child").textContent = "+";
      });

      // Bosilganini ochish (agar yopiq bo'lsa)
      if (!isOpen) {
        item.classList.add("active");
        answer.classList.add("show");
        icon.textContent = "-";
      }
    });
  });

  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }
});