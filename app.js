// Randstad News 2050 – JavaScript logic
// Works with index.html + styles.css

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    page: "home", // home | article | weather | live
    activeArticle: null,
    dark: false,
  };

  const articles = [
    {
      id: 1,
      title: "Klimaatmigratie",
      tag: "Klimaat",
      summary: "Hoe mensen zich verplaatsen door klimaatverandering.",
      image: "images/a1.jpg",
      alt: "Mensen onderweg door een droog landschap",
      content: `<p><strong>Randstad News, 2050 –</strong> Amsterdam is hosting a record number of climate migrants this
year, with 12,800 arrivals from Nigeria, according to new figures released by the
municipality. The migrants fled extreme drought, heatwaves, and widespread crop
failures in northern Nigeria, where temperatures this spring peaked above 50°C.</p>

<p>The city is struggling to provide sufficient housing. To respond, the municipality is
setting up 4,000 modular housing units in Haven-Stad and converting vacant office
buildings in the Zuidas district. Alderman Yasmin el Hariri described the initiative as
“a necessary, humane response to a global crisis.”</p>

<p>The influx is part of commitments under the European Climate Accord, under which the
Netherlands accepts 50,000 climate migrants each year. Amsterdam has voluntarily
agreed to accommodate one-fifth of that total.</p>

<p>Alongside housing, the city has launched the integration program <em>Welkom2050</em>,
offering language courses, employment pathways, and education. The Amsterdam
University of Applied Sciences is developing specialized training for migrants with
technical or agricultural expertise.</p>

<p>Criticism has also surfaced. Some political groups warn of pressure on the housing
market and social services. However, community-led projects have emerged to support
integration, including neighborhood initiatives pairing newcomers with local families.</p>`
    },
    { id: 2, title: "Living‑lab", tag: "Innovation", summary: "Cities as testing grounds for sustainable innovations.", image: "images/header.jpg", alt: "Futuristic city with lots of greenery", content: `<p> Randstad News, 2050 - Amsterdam officially opened its new “living lab” on the IJ today,
an initiative designed to provide space for experimental innovations with water
management. The lab will serve as both a research site and an interactive space to
engage the public with experiments addressing the growing salinization of the IJ. <p>

In recent years, saltwater has increasingly entered the IJ from the North Sea Canal,
while freshwater supplies from the Markermeer have dwindled. This process of
salinization, seen along much of the Dutch west coast, poses serious risks for
agriculture, drinking water supply, and vulnerable natural areas. As a result, water
boards, universities, and government agencies are eager to explore solutions, and the IJ
offers an unique testing ground. <p>

At today’s ribbon-cutting, the chair of the Amsterdam Metropolitan Area praised the
initiative:
“It’s a wonderful opportunity we are happy to contribute to. Amsterdam means water,
and we face many challenges. This interactive space not only helps us research
solutions but also builds awareness about how we can be more mindful with water—
especially drinking water. It sparks conversations we urgently need to have.”<p>

But while city leaders celebrated the project, not everyone was in a festive mood. Over
10,000 people gathered at the harbor in protest, organized by the union FFE (Future for
Everyone). The demonstrators demanded a redistribution of city funding, with more
investment directed toward neighborhoods officially recognized as flood-risk zones for
the past five years.<p>

A spokesperson for TVI criticized the initiative, saying:
“They keep investing in a ‘city of the future’ for the wealthy while ignoring residents in
high-risk areas. Just recently, one of these neighborhoods flooded, costing three lives.
When will the government take that seriously? We want safer housing, better social
services, and equal opportunities.”<p>

The union is calling for a meeting with the chairperson of the Amsterdam Metropolitan
Area and a revision of the city’s five-year budget. If their demands are not met, FFE says
it will return with new protests during the upcoming Sail event in two weeks.` },
    { id: 3, title: "Boer in transitie", tag: "Economie", summary: "Landbouw schakelt over naar regeneratieve modellen.", image: "images/a2.jpg", alt: "Boerderij met groene akkers", content: `

<p><strong>Randstad News, 2050 –</strong> The salinization of farmland has become one of the
Netherlands’ most pressing agricultural challenges. Driven by rising sea levels, reduced
river discharge, and prolonged droughts, salt intrusion is threatening the viability of
traditional crops across the country. According to the Netherlands Environmental
Assessment Agency, thousands of hectares of farmland are expected to face severe
salinization in the coming decades.</p>

<p>In the Haarlemmermeerpolder, just outside Amsterdam, the effects are already visible.
Farmers report that yields of traditional crops such as potatoes, onions, and sugar
beets have dropped by half. As a result, the region has become a testing ground for
saline agriculture, with projects supported by universities and research institutes.</p>

<p>One of the pioneering farmers in this transition is Peter Bosma, whose family has
cultivated the polder’s fertile soils for generations. He recalls how the signs of
salinization first emerged gradually. “At first, some crops grew less vigorously, and the
potatoes developed unusual spots,” he explains. “Over time, dry summers caused salt
levels in the ditches to rise. It became clear that this wasn’t a one-time issue—it was
structural.”</p>

<p>Faced with declining yields, Peter decided to take part in a collaborative project with
Van Hall Larenstein University of Applied Sciences. “Initially, we tried traditional
methods—flushing with freshwater, applying more fertilizer, switching to different
varieties,” he says. “But none of that solved the problem. Transitioning to salt-tolerant
crops is risky, but continuing with crops that no longer survive simply isn’t sustainable.”</p>

<p>The move has not been without challenges. While interest in saline crops is growing,
demand from consumers remains lower than for conventional produce. Still, Peter
believes the transition is both inevitable and necessary. “Farmers in vulnerable areas
like polders must adapt. But consumers also need to change their expectations.
Climate adaptation in agriculture is not only about survival—it requires farmers to
become entrepreneurs and researchers as well.”</p>

<p>The developments in Haarlemmermeer illustrate a broader shift taking place across the
Randstad. Saline farming, once considered a niche experiment, is now seen as a critical
strategy for safeguarding food production in an era of accelerating climate change.</p>` },
    { id: 4, title: "Eenzaamheid", tag: "Sociaal", summary: "Nieuwe initiatieven om sociale verbondenheid te versterken.", image: "images/a3.jpg", alt: "Persoon op een bankje in de stad", content: `

<p><strong>Randstad News, 2050 –</strong> A new study shows that loneliness in the Netherlands has risen
sharply in recent years. While in 2025 only 18 percent of the population reported feeling
lonely, the figure has since increased by 12 percentage points. Today, nearly one in three
people in the country experience some form of social isolation.</p>

<p>Researchers identify digitalization as a key driver. Technology has streamlined many
aspects of daily life, but at the cost of personal interaction. Where people once
exchanged a few words with the mail carrier, packages are now delivered by drones.
Supermarkets and municipal offices increasingly rely on self-checkouts and digital
service desks, replacing human contact with automated systems.</p>

<p>“It’s a paradox,” says sociologist Dr. Marleen Veldhuis, who led the research. “We are
constantly connected online, yet genuine, human conversation is becoming
increasingly rare. This leaves deep marks on our sense of belonging.”</p>

<p>The impact is felt across all generations. Older residents receive fewer visits and miss
the familiar faces in their neighborhoods. Younger people report a growing gap between
their online identities and their need for real-world connection. Many respondents
emphasized the loss of spontaneous encounters—such as a quick chat with a delivery
person or a smile from a shop clerk—as a significant absence.</p>

<p>The study calls on policymakers to restore balance. Digitalization does not necessarily
have to eliminate physical contact, researchers argue. Instead, technology should be
used in ways that enhance human interaction. Initiatives such as neighborhood cafés,
community spaces, and hybrid service models are highlighted as potential remedies.</p>

<p>“As a society, we need to ask ourselves which forms of contact we are not willing to
lose,” Veldhuis concludes. “Loneliness is not an individual problem but a collective
challenge. We can use technology to bring people closer together, but it requires
conscious choices.”</p>

<p>With the holiday season approaching, the researchers emphasize the importance of
looking out for one another. A visit, a short conversation, or simply making time for each
other can already make a meaningful difference.</p>` },
  ];

  

  const weather = {
    location: "Amsterdam",
    tempC: 42,
    highC: 44,
    lowC: 35,
    condition: "Sunny",
    icon: "☀️",
    updated: new Intl.DateTimeFormat("nl-NL", { hour: "2-digit", minute: "2-digit" }).format(new Date())
  };

  const live = { label: "Live: Parliament debates water policy", viewers: "14k" };

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
        <button class="btn" data-article="${s.id}">Read more</button>
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
        <p class="muted">${state.activeArticle.summary}</p>
        <p class="muted">${state.activeArticle.content}</p>
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
            <h2>Weather in ${weather.location}</h2>
            <p class="muted">${weather.condition} • Updated ${weather.updated}</p>
            <div style="font-size:2rem">${weather.icon} ${weather.tempC}°C</div>
            <p class="muted">Max ${weather.highC}°C • Min ${weather.lowC}°C</p>
            <h3 style="margin-top:12px">Today</h3>
            <ul class="muted">
              <li>Vandaag: ${weather.condition}, max ${weather.highC}°C</li>
              <li>Morgen: Light cloud cover, max 42°C</li>
              <li>Wo: Partly cloudy, max 37°C</li>
              <li>Do: Chance of rain, max 36°C</li>
              <li>Vr: Clear skies, max 38°C</li>
              <h2>Daily Weather Update: Extreme Heat Persists Across the Netherlands</h2>
  <p>Randstad News, 2050</p>

  <p>The Netherlands experienced another extremely hot day today. 
  Temperatures reached 43°C in major cities and 37°C in rural areas. 
  Rivers are running almost dry and soils are severely parched.</p>

  <p>A nationwide ban on sprinkling remains in effect. Watering gardens, 
  washing cars, and filling swimming pools are prohibited. Starting today, 
  each resident may use a maximum of 50 liters of drinking water per day. 
  Authorities warn that the limit will be strictly enforced.</p>

  <p>Looking ahead, temperatures above 35°C are expected throughout the 
  coming week, with tropical nights in cities adding to the discomfort. 
  Midweek, a tropical storm from the south may bring up to 200 millimeters 
  of rain in localized areas, potentially causing flooding despite the ongoing drought.</p>
            </ul>
            <button class="btn" id="backBtn">← Back</button>
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
              <li><time class="muted">12:34</time> Amendment on dyke reinforcement tabled by political group PVV.</li>
              <li><time class="muted">12:05</time> Minister explains budget for freshwater buffers.</li>
              <li><time class="muted">11:40</time> Opposition calls for measurable targets for 2100.</li>
            </ul>
            <button class="btn" id="backBtn">← Back</button>
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
          <h1 class="title" style="font-size:22px;margin:0 0 12px">Today – updates</h1>
          ${heroCard(hero)}
          ${rest.length ? `<div class="list-3" style="margin-top:16px">${rest.map(articleCard).join("")}</div>` : ""}
        </div>

        <aside class="card" style="padding:16px;display:flex;flex-direction:column;gap:16px">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h3 class="title" style="font-size:14px;margin:0">Weather today</h3>
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

          <div class="muted" style="margin-top:auto;font-size:12px">Newsletters • Podcasts • Live</div>
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
