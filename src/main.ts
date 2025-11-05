// Reveal-on-scroll using IntersectionObserver + auto-stagger
(() => {
  // ensure common elements reveal
  document
    .querySelectorAll<HTMLElement>(
      ".section__title, .card, .badge, .contact__inner > *"
    )
    .forEach((el) => el.classList.add("reveal-up"));

  const elements: NodeListOf<HTMLElement> =
    document.querySelectorAll(".reveal-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((el) => observer.observe(el));

  // Stagger children inside groups
  const groups = [
    ...document.querySelectorAll<HTMLElement>(".projects .grid"),
    ...document.querySelectorAll<HTMLElement>(".badges__wrap"),
  ];
  groups.forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    children.forEach((child, idx) =>
      child.style.setProperty("--delay", `${idx * 0.06}s`)
    );
  });
})();

// Update year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Clickable project cards -> GitHub repos
(() => {
  const GITHUB_USER = "iamsparkedev"; // change to your username if needed
  const cards = document.querySelectorAll<HTMLElement>(
    ".projects .card[data-repo]"
  );
  const openRepo = (repo: string) => {
    const url = `https://github.com/${GITHUB_USER}/${repo}`;
    window.open(url, "_blank", "noopener");
  };
  cards.forEach((card) => {
    const repo = card.getAttribute("data-repo");
    if (!repo) return;
    card.addEventListener("click", () => openRepo(repo));
    card.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openRepo(repo);
      }
    });
  });
})();

// Subtle parallax for hero headline
(() => {
  const hero = document.querySelector<HTMLElement>(".hero");
  const inner = document.querySelector<HTMLElement>(".hero__inner");
  if (!hero || !inner) return;
  let rafId = 0 as number | 0;
  window.addEventListener(
    "scroll",
    () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (0 - rect.top) / window.innerHeight)
        );
        inner.style.transform = `translateY(${progress * -16}px)`;
        inner.style.opacity = `${1 - progress * 0.2}`;
      });
    },
    { passive: true }
  );
})();

// Card tilt interaction (desktop/hover devices only)fdf
// fdfdf
(() => {
  const supportsHover = matchMedia("(hover: hover)").matches;
  if (!supportsHover) return; // disable on touch devices to prevent jank
  const cards = document.querySelectorAll<HTMLElement>(".projects .card");
  const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));
  cards.forEach((card) => {
    card.classList.add("tilt");
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      const rx = clamp((0.5 - y) * 8, -6, 6);
      const ry = clamp((x - 0.5) * 12, -10, 10);
      card.style.setProperty("--rx", `${rx}deg`);
      card.style.setProperty("--ry", `${ry}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
})();

// Scroll progress indicator
(() => {
  const el = document.createElement("div");
  el.id = "scroll-progress";
  document.body.appendChild(el);
  const onScroll = () => {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    el.style.setProperty("--progress", `${pct}%`);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
