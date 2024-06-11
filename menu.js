const burger = document.querySelector(".burger"); // Hent burger-ikonet fra HTML

const nav = document.querySelector("nav"); // Hent navigationselementet (menuen) fra HTML

const links = document.querySelectorAll(".menu li a"); // Hent alle links inde i menuen

// Når brugeren klikker på burger-ikonet
burger.addEventListener("click", () => {
  // Skift 'active' klassen på burger-ikonet
  burger.classList.toggle("active");
  // Skift 'active' klassen på navigationselementet (menuen)
  nav.classList.toggle("active");
});

// For hvert link i menuen
links.forEach((link) => {
  // Når brugeren klikker på et link
  link.addEventListener("click", () => {
    // Fjern 'active' klassen fra burger-ikonet
    burger.classList.remove("active");
    // Fjern 'active' klassen fra navigationselementet (menuen)
    nav.classList.remove("active");
  });
});
