// Randstad News 2050 – JavaScript logic
// Works with index.html + styles.css

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    page: "home", // home | article | weather | live
    activeArticle: null,
    dark: false,
  };

  const articles = [
    { id: 1, title: "Klimaatmigratie", tag: "Klimaat", summary: "Hoe mensen zich verplaatsen door klimaatverandering.", image: "https://source.unsplash.com/600x400/?migration,climate", alt: "Mensen onderweg door een droog landschap" },
    { id: 2, title: "Living‑lab", tag: "Innovatie", summary: "Steden als proeftuin voor duurzame innovaties.", image: "https://github.com/faqdegraaf-arch/Website-2050-cool-2.0/blob/22f2c4c41a892a0b49b791d70f02c8ccfd3b8afa/Firefly_Amsterdam%20has%20opened%20a%20new%20%E2%80%9Cliving%20lab%E2%80%9D%20on%20the%20IJ%20to%20test%20water%20innovations%20and%20raise%20472839.jpg", alt: "Futuristische stad met veel groen" },
    { id: 3, title: "Boer in transitie", tag: "Economie", summary: "Landbouw schakelt over naar regeneratieve modellen.", image: "https://source.unsplash.com/600x400/?farm,sustainability", alt: "Boerderij met groene akkers" },
    { id: 4, title: "Eenzaamheid", tag: "Sociaal", summary: "Nieuwe initiatieven om sociale verbondenheid te versterken.", image: "https://source.unsplash.com/600x400/?loneliness,people", alt: "Persoon op een bankje in de stad" },
  ];

  const weather = {
    location: "Amsterdam",
    tempC: 17,
    highC: 19,
    lowC: 12,
    condition: "Zonnig",
    icon: "☀️",
    updated: new Intl.DateTimeFormat("nl-NL", { hour: "2-digit", minute: "2-digit" }).format(new Date())
  };

  const live = { label: "Live: Parlement debatteert over waterbeleid", viewers: "14k" };

  const app = document.getElementById("app");

  function metaRow(tag, time) {
    return `<div class="meta"><span style="display:inline-flex;align-items:center;gap:6px"><span style="width:6px;height:6px;border-radius:999px;background:#10b981"></span>${tag}</span><span>•</span><time>${time || ""}</time></div>`;
  }

  function heroCard(s) {
    return `<article class="card">
      <img class="img-cover" src="${s.image}" alt="${s.alt || ""}" />
      <div class="card-content">
        ${metaRow(s.tag, s.time || "")}
        <h2>${s.title}</h2>
        <p class="muted">${s.summary}</p>
        <button class="btn" data-article="${s.id}">Lees meer</button>
      </div>
    </article>`;
  }

  function articleCard(s) {
    return `<button class="card" style="text-align:left;cursor:pointer" data-article="${s.id}">
      <img class="img-thumb" src="${s.image}" alt="${s.alt || ""}" />
      <div class="card-content">
        ${metaRow(s.tag, s.time || "")}
        <h3>${s.title}</h3>
        <p class="muted">${s.summary}</p>
      </div>
    </button>`;
  }

  function render() {
    document.body.classList.toggle("dark", state.dark);

    if (state.page === "article" && state.activeArticle) {
      app.innerHTML = `
        <article class="card">
          <img class="img-cover" src="${state.activeArticle.image}" alt="${state.activeArticle.alt || ""}" />
          <div class="card-content">
            ${metaRow(state.activeArticle.tag, state.activeArticle.time || "")}
            <h2>${state.activeArticle.title}</h2>
            <p class="muted">Hier komt later de volledige tekst van het artikel: <strong>${state.activeArticle.title}</strong>.</p>
            <button class="btn" id="backBtn">← Terug</button>
          </div>
        </article>`;
      document.getElementById("backBtn").onclick = () => { state.page = "home"; state.activeArticle = null; render(); };
      return;
    }

    if (state.page === "weather") {
      app.innerHTML = `
        <article class="card">
          <div class="card-content">
            <h2>Weer in ${weather.location}</h2>
            <p class="muted">${weather.condition} • geüpdatet ${weather.updated}</p>
            <div style="font-size:2rem">${weather.icon} ${weather.tempC}°C</div>
            <p class="muted">Max ${weather.highC}°C • Min ${weather.lowC}°C</p>
            <h3 style="margin-top:12px">Vooruitzicht</h3>
            <ul class="muted">
              <li>Vandaag: ${weather.condition}, max ${weather.highC}°C</li>
              <li>Morgen: Licht bewolkt, max 18°C</li>
              <li>Wo: Wisselend bewolkt, max 17°C</li>
              <li>Do: Buien kans, max 16°C</li>
              <li>Vr: Opklaringen, max 18°C</li>
            </ul>
            <button class="btn" id="backBtn">← Terug</button>
          </div>
        </article>`;
      document.getElementById("backBtn").onclick = () => { state.page = "home"; render(); };
      return;
    }

    if (state.page === "live") {
      app.innerHTML = `
        <article class="card">
          <div class="card-content">
            <h2>${live.label}</h2>
            <p class="muted">${live.viewers} kijkers</p>
            <ul>
              <li><time class="muted">12:34</time> Amendement over dijkversterking ingebracht door fractie X.</li>
              <li><time class="muted">12:05</time> Minister geeft toelichting op budget voor zoetwaterbuffers.</li>
              <li><time class="muted">11:40</time> Oppositie vraagt om meetbare doelen voor 2030.</li>
            </ul>
            <button class="btn" id="backBtn">← Terug</button>
          </div>
        </article>`;
      document.getElementById("backBtn").onclick = () => { state.page = "home"; render(); };
      return;
    }

    // Default = home
    const hero = articles.find(a => a.slug === "living-lab") || articles[1];
    const rest = articles.filter(a => a !== hero);

    app.innerHTML = `
      <section class="grid grid-3">
        <div>
          <h1 class="title" style="font-size:22px;margin:0 0 12px">Vandaag – updates</h1>
          ${heroCard(hero)}
          ${rest.length ? `<div class="list-3" style="margin-top:16px">${rest.map(articleCard).join("")}</div>` : ""}
        </div>

        <aside class="card" style="padding:16px;display:flex;flex-direction:column;gap:16px">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h3 class="title" style="font-size:14px;margin:0">Weer vandaag</h3>
            <button class="btn" id="weatherBtn">Details</button>
          </div>
          <p class="muted" style="margin:0">${weather.icon} ${weather.tempC}°C – ${weather.condition}</p>

          <div>
            <h4 class="title" style="font-size:14px;margin:0 0 6px">Live</h4>
            <div class="live-item" id="liveBtn">
              <span>${live.label}</span>
              <small class="muted">${live.viewers}</small>
            </div>
          </div>

          <div class="muted" style="margin-top:auto;font-size:12px">Nieuwsbrieven • Podcasts • Live</div>
        </aside>
      </section>`;

    // bind events
    document.querySelectorAll("[data-article]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-article"));
        state.activeArticle = articles.find(a => a.id === id) || null;
        state.page = "article";
        render();
      });
    });
    document.getElementById("weatherBtn").onclick = () => { state.page = "weather"; render(); };
    document.getElementById("liveBtn").onclick = () => { state.page = "live"; render(); };
  }

  // Header interactions
  document.getElementById("logo")?.addEventListener("click", () => { state.page = "home"; state.activeArticle = null; render(); });
  document.getElementById("logo")?.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { state.page = "home"; state.activeArticle = null; render(); } });
  document.getElementById("toggleDark")?.addEventListener("click", () => {
    state.dark = !state.dark;
    render();
    const btn = document.getElementById("toggleDark");
    if (btn) {
      btn.textContent = state.dark ? "🌙" : "☀️";
      btn.setAttribute("aria-pressed", String(state.dark));
    }
  });

  render();
});
