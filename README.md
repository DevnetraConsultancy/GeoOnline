<p align="center">
  <img src="assets/logo.svg" width="96" alt="GeoOnline logo">
</p>

<h1 align="center">GeoOnline — UPSC Map Atlas</h1>

<p align="center">
  <b>ম্যাপে পড়ো, ম্যাপেই মনে রাখো।</b><br>
  An interactive, offline-capable map atlas and quiz for UPSC CSE (IAS · IFS · IPS), Indian Forest Service, State PSC and SSC aspirants.<br>
  <a href="https://geoonline.vercel.app"><b>geoonline.vercel.app</b></a>
</p>

---

## What's inside

| Subject | Pages |
|---|---|
| 🌏 **Geography** | India physical (ranges, peaks, passes, lakes, falls, glaciers, coast), environment (National Parks, Tiger & Biosphere Reserves, all Ramsar sites, WHS, sanctuaries), economic geography (dams, minerals, energy, industry, ports, crops), transport & institutions, Census 2011 maps, states with area / coastline / border lengths; world physical, oceans, straits & gulfs, economic & human geography |
| 🌐 **World Atlas & IR** | Countries, capitals & river cities, organisations, strategic regions, places in news |
| 🏛 **History** | 20 empire maps (2000 BCE → 1945) plus prehistoric, ancient, medieval, modern India and Asian/world history |
| 🎨 **Art & Culture** | Temples, Buddhist/Jain sites, caves, forts, Islamic & colonial architecture, pilgrimage, dance, painting, crafts, festivals, languages |
| 📚 **Books, Authors & Philosophy** | Six darśanas & nāstika schools, ancient/medieval Indian texts, foreign travellers, modern Indian thinkers & literature, Western philosophy, political & economic thought, Asian & Islamic thinkers, science & geographical thought — click an author → books → summary |

**Study mode** — click any pin for notes, facts, old names and book summaries; toggle country/state names, cities, and style the international & state boundaries (colour, width, opacity, dash).

**Quiz modes** — find it on the map · name the highlighted place · drop a pin on a blank map (distance scored) · arrange North→South / West→East · "who wrote this book?" · weak-area review that remembers your mistakes.

## Run locally

No build step — it is a plain static site.

```bash
python -m http.server 8765
# open http://localhost:8765
```

Opening `index.html` directly also works: all geometry is bundled in `data/geo/` so the atlas runs without internet (choose the *Offline* basemap).

## Project layout

```
index.html        app shell
js/app.js         map engine, study panel, quizzes
js/core.js        page registry (GEO.add)
css/style.css     design
data/*.js         one file per topic — rows: [name, lat, lng, state, note, type, details]
data/geo/*.js     bundled boundaries, rivers, cities, historical maps
vendor/           Leaflet 1.9.4 + fonts (local copies)
```

## Licence

Code © 2026 **Devnetra Consultancy**, released under the [MIT License](LICENSE). Bundled third-party data keeps its own licence (see below and LICENSE).

## Data & credits

- Basemap tiles: © Esri and its data providers (online only).
- Rivers, country boundaries (India point-of-view edition), populated places: [Natural Earth](https://www.naturalearthdata.com/) — public domain.
- Indian state boundaries: india-in-data (based on Survey of India maps).
- Historical empire boundaries: [historical-basemaps](https://github.com/aourednik/historical-basemaps) by A. Ourednik — GPL-3.0; approximate.
- Pin coordinates cross-checked against Wikipedia / Wikidata.
- Map library: [Leaflet](https://leafletjs.com/) (BSD-2-Clause). Fonts: Fraunces & Hind Siliguri (SIL Open Font License 1.1).

> Boundaries are for study only and are not an official document. Verify with NCERT / Survey of India maps before the exam.
