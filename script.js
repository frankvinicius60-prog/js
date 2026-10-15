const recommendationForm = document.querySelector("#recommendationForm");
const recommendationText = document.querySelector("#recommendationText");
const recommendationList = document.querySelector("#recommendationList");
const toast = document.querySelector("#toast");
const backToTop = document.querySelector("#backToTop");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

function showPopup(message = "Recomendação enviada com sucesso!") {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3000);
}

recommendationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = recommendationText.value.trim();
  if (!message) {
    recommendationText.focus();
    return;
  }

  const card = document.createElement("blockquote");
  card.className = "recommendation-card";

  const quoteMark = document.createElement("span");
  quoteMark.className = "quote-mark";
  quoteMark.textContent = "“";

  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  const footer = document.createElement("footer");
  footer.textContent = "— Nova recomendação";

  card.append(quoteMark, paragraph, footer);
  recommendationList.appendChild(card);
  recommendationForm.reset();
  showPopup();
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});
