const cards = document.querySelectorAll(
  ".card, .feature-card, .system-card, .path-card, .price-card, .compare-card"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(23, 215, 255, 0.14), rgba(255,255,255,0.055) 38%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});