// ============================================================
// Sala GOEZ — landing
// ============================================================

// ---------- Carrusel de resultados ----------
// Array modular: añadir un nuevo testimonio/resultado es solo
// añadir un objeto aquí, sin tocar el layout.
const RESULTS = [
  {
    img: "assets/optimized/resultado-01.webp",
    tag: "En vivo",
    stat: "Ventas totales: 10.618 € · 197 pedidos",
    meta: "Panel de ventas de tienda Shopify",
  },
  {
    img: "assets/optimized/resultado-02.webp",
    tag: "21–24 ago",
    stat: "Sesiones 1.905 (+14%) · Ventas 1.121 € (+67%)",
    meta: "Panel de ventas de tienda Shopify",
  },
  {
    img: "assets/optimized/resultado-03.webp",
    tag: "Hoy",
    stat: "Ventas 603,77 € · 11 pedidos",
    meta: "Panel de ventas de tienda Shopify",
  },
  {
    img: "assets/optimized/resultado-04.webp",
    tag: "Ayer",
    stat: "Ventas 704,61 € (+83%) · 10 pedidos",
    meta: "Panel de ventas de tienda Shopify",
  },
  {
    img: "assets/optimized/resultado-05.webp",
    tag: "1–30 ago",
    stat: "Sesiones 15.004 · Ventas 8.027 € (+651%)",
    meta: "Panel de ventas de tienda Shopify",
  },
  {
    img: "assets/optimized/resultado-06.webp",
    tag: "3 jun – 22 ago",
    stat: "Sesiones 27.660 · Ventas 9.709 € · 185 pedidos",
    meta: "Panel de ventas de tienda Shopify",
  },
  {
    img: "assets/optimized/resultado-07.webp",
    tag: "Chat de alumno",
    stat: "Ventas 79,90 € · 2 pedidos en directo",
    meta: "Conversación de WhatsApp con un alumno",
  },
  {
    img: "assets/optimized/resultado-08.webp",
    tag: "Chat de alumno",
    stat: "“¡Felicidades por tu primera venta!”",
    meta: "Conversación de WhatsApp con un alumno",
  },
];

function renderCarousel() {
  const track = document.getElementById("resultsCarousel");
  if (!track) return;

  track.innerHTML = RESULTS.map(
    (r) => `
    <article class="result-card">
      <div class="shot">
        <span class="result-tag">${r.tag}</span>
        <img src="${r.img}" alt="${r.meta}" loading="lazy" />
      </div>
      <div class="result-body">
        <p class="stat">${r.stat}</p>
        <p class="meta">${r.meta}</p>
      </div>
    </article>`
  ).join("");
}

function initCarouselControls() {
  const track = document.getElementById("resultsCarousel");
  const prev = document.getElementById("carouselPrev");
  const next = document.getElementById("carouselNext");
  if (!track || !prev || !next) return;

  const scrollByCard = (dir) => {
    const card = track.querySelector(".result-card");
    const gap = 16;
    const distance = card ? card.offsetWidth + gap : 300;
    track.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
}

// ---------- Formulario multi-step ----------
function initForm() {
  const form = document.getElementById("qualForm");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const totalQuestionSteps = 6;
  const stepCount = document.getElementById("stepCount");
  const progressFill = document.getElementById("progressFill");
  const backBtn = document.getElementById("backBtn");
  const progressWrap = form.querySelector(".form-progress");

  let current = 1;
  const answers = {};

  function showStep(n) {
    steps.forEach((step) => {
      step.classList.toggle("active", Number(step.dataset.step) === n);
    });

    const isQuestion = n <= totalQuestionSteps;
    progressWrap.style.display = isQuestion ? "flex" : "none";
    backBtn.hidden = n <= 1 || n > totalQuestionSteps + 1;

    if (isQuestion) {
      stepCount.textContent = `0${n} → 06`;
      progressFill.style.width = `${(n / totalQuestionSteps) * 100}%`;
    }

    current = n;
  }

  function goNext() {
    if (current < steps.length) showStep(current + 1);
  }

  function goBack() {
    if (current > 1) showStep(current - 1);
  }

  // Selección de opciones (pasos 1-6)
  form.querySelectorAll(".form-step .option-list").forEach((list) => {
    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".option");
      if (!btn) return;

      list.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
      btn.classList.add("selected");

      const stepEl = btn.closest(".form-step");
      answers[`pregunta_${stepEl.dataset.step}`] = btn.dataset.value;

      window.setTimeout(goNext, 350);
    });
  });

  backBtn.addEventListener("click", goBack);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    answers.nombre = document.getElementById("fName").value.trim();
    answers.email = document.getElementById("fEmail").value.trim();
    answers.whatsapp = document.getElementById("fPhone").value.trim();

    // PENDIENTE: sustituir este console.log por el envío real
    // (fetch a CRM / hoja de cálculo / Meta Conversions API).
    console.log("Sala GOEZ — solicitud recibida:", answers);

    showStep(8);
  });

  showStep(1);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCarousel();
  initCarouselControls();
  initForm();
});
