const cards = document.querySelectorAll(".card, .step, .price-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(24,216,255,.14), rgba(255,255,255,.055) 42%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});