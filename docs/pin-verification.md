# Pin verification report — 25 Nov 2026

Every point pin was checked in two independent ways. The row-by-row results are in [`pin-check.csv`](pin-check.csv), so anyone (or another AI) can re-check them.

## Method
1. **Wikipedia coordinates.** Each pin name is matched to an English Wikipedia article by exact title (redirects followed, disambiguation pages skipped). The article's primary coordinate is then compared with our pin.
   - Tolerance for a site (temple, fort, city, dam): 4 km in India, 15 km abroad.
   - Tolerance for a large feature (national park, lake, sea, plateau): 25 km in India, 150 km abroad. For these, any point inside the feature is equally valid.
2. **State boundary test.** Every India pin is tested against the official state/UT polygons (Survey of India–based) to see whether it falls in the state written on the pin.

Regional pages are skipped because a pin there stands for a whole region: vegetation, soil, climate, crops, tribes, dances, crafts, languages, festivals and similar.

## Results

| Check | Pins | Result |
|---|---|---|
| Pins checked | 4,523 | |
| Exact Wikipedia article found | 2,199 | 1,946 within tolerance |
| Differ from Wikipedia | 253 | All reviewed by hand (see below) |
| No exact Wikipedia article yet | 2,324 | Search-based check still running |
| India pins with a state, state test | 2,635 | 0 real errors (see below) |

### The 253 that differ from Wikipedia
- **Corrected (4):** these now use Wikipedia's coordinates.
  - Tin Bigha Corridor
  - Ziro
  - Bagh Caves
  - Sumdorong Chu
- **Our pin is more specific than the article (≈180).** The article describes the city, while our pin marks the actual site. Examples:
  - IGI Airport vs "Delhi"
  - Red Fort vs "Delhi"
  - ICRISAT vs "Hyderabad"
  - Yangshan port vs "Shanghai"
- **Same name, different place (≈30).** Our pin is correct. Examples:
  - Bagasra (Gola Dhoro, Kutch) vs Bagasara town
  - Chandoli (Neolithic site, Pune) vs Chandoli National Park
  - Sohagpur coalfield vs Sohagpur town
  - Ahar (Udaipur) vs Ahar in Iran
  - Porto Novo (Tamil Nadu) vs Porto-Novo in Benin
  - William James (Harvard, Cambridge MA) vs Cambridge, UK
- **Large features (39):** seas, plateaus, deserts and grasslands, where Wikipedia simply uses a different representative point. No change needed.

### State boundary test: 117 flags, none an error
- **Offshore by nature:** islands, ports, gulfs, marine parks, sea forts, beaches and bridges. They lie on or beyond the coastline of a generalised polygon.
- **On a boundary line:** border passes and crossings such as Attari–Wagah, plus dams on interstate rivers (Ranjit Sagar, Matatila, Medigadda).
- **Pakistan or Tibet sites:** "Punjab" in the label is the Pakistani province (Harappa, Taxila).
- **Papikonda NP:** our pin equals Wikipedia's coordinate. The boundary file still shows that land as Telangana; it was transferred to Andhra Pradesh in 2014.

## Still to do
- Search-based matching for the 2,324 pins that have no exact Wikipedia title. This is slow because of Wikipedia rate limits.
- Book-author pins (`bk-*` pages): these are checked by the place named on the row.

## Second pass — the 2,324 pins without an exact Wikipedia article (Nov 2026)

Checked against Wikidata (coordinates + type + state/country), doubtful cases read on Wikipedia. Full table: `pin-check-wikidata.csv`.

| Result | Pins |
|---|---|
| OK (same entity within 10 km, or 25 km for large features / inside the named feature) | 1,882 |
| Moved (confident, evidence below) | 4 |
| No confident Wikidata match (no item, or only a different place/kind with the same name) | 438 |

Moves: Amri (Sindh) 31 km → 25.910, 67.924 (Wikipedia: ~160 km south of Mohenjo-daro); Vantawng Falls 21 km → 23.257, 92.762 (5 km south of Thenzawl); Bhaskara II / Patnadevi 16 km → 20.330, 74.967 (18 km SW of Chalisgaon); Premchand / Lamhi 12 km → 25.378, 82.994 (just north of Varanasi).
Several large Wikidata differences turned out to be Wikidata errors (e.g. Vikramshila Setu, Barpeta Satra, Chikhaldara); those pins were kept.
