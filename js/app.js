(function () {
'use strict';
var $ = function (s, r) { return (r || document).querySelector(s); };
var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
var store = {
  get: function (k, d) { try { var v = localStorage.getItem('geo.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set: function (k, v) { try { localStorage.setItem('geo.' + k, JSON.stringify(v)); } catch (e) {} }
};
var shuffle = function (a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };

// Subjects → groups (sidebar headings). Each group: [key, Bengali title, English subtitle, subject]
var SUBJECTS = [
  ['geo', '🌏 ভূগোল', 'Geography'],
  ['ir', '🌐 বিশ্ব অ্যাটলাস ও আন্তর্জাতিক সম্পর্ক', 'World Atlas & International Relations'],
  ['his', '🏛 ইতিহাস', 'History'],
  ['cul', '🎨 শিল্প ও সংস্কৃতি', 'Art & Culture'],
  ['bk', '📚 বই, লেখক ও দর্শন', 'Books, Authors & Philosophy'],
  ['mix', '🎲 মেগা চ্যালেঞ্জ', 'Mixed Challenge']
];
var GROUPS = [
  ['in-phy', 'ভারত · প্রাকৃতিক ভূগোল', 'India — Physical', 'geo'],
  ['in-env', 'ভারত · পরিবেশ ও জীববৈচিত্র্য', 'India — Environment & Ecology', 'geo'],
  ['in-eco', 'ভারত · অর্থনৈতিক ভূগোল', 'India — Economic Geography', 'geo'],
  ['in-trans', 'ভারত · পরিবহন, পরিকাঠামো ও প্রতিষ্ঠান', 'India — Transport & Institutions', 'geo'],
  ['in-census', 'ভারত · জনগণনা মানচিত্র (Census 2011)', 'India — Census Maps', 'geo'],
  ['in-hum', 'ভারত · রাজ্য, শহর, সীমান্ত ও মানুষ', 'India — States, Cities, Borders & People', 'geo'],
  ['w-phy', 'বিশ্ব · প্রাকৃতিক ভূগোল', 'World — Physical', 'geo'],
  ['w-oce', 'বিশ্ব · মহাসাগর, প্রণালী ও উপসাগর', 'World — Oceans, Straits & Gulfs', 'geo'],
  ['w-econ', 'বিশ্ব · অর্থনৈতিক ও মানব ভূগোল', 'World — Economic & Human Geography', 'geo'],
  ['w-pol', 'দেশ, রাজধানী ও শহর', 'Countries, Capitals & Cities', 'ir'],
  ['ir-india', 'ভারতের কূটনৈতিক মানচিত্র', 'India\'s Diplomatic Map', 'ir'],
  ['ir-groups', 'আন্তর্জাতিক গোষ্ঠী ও জোট', 'Groupings & Alliances', 'ir'],
  ['ir-world', 'সংস্থা, কৌশলগত অঞ্চল ও খবরের জায়গা', 'Organisations, Strategic Regions & Places in News', 'ir'],
  ['his-maps', 'সাম্রাজ্যের মানচিত্র (কালানুক্রমিক)', 'Empire Maps through Time', 'his'],
  ['his-pre', 'প্রাগৈতিহাসিক ও প্রাচীন ভারত', 'Prehistoric & Ancient India', 'his'],
  ['his-med', 'মধ্যযুগের ভারত', 'Medieval India', 'his'],
  ['his-mod', 'আধুনিক ভারত', 'Modern India', 'his'],
  ['his-world', 'এশিয়া ও বিশ্ব ইতিহাস', 'Asia & World History', 'his'],
  ['cul-arch', 'স্থাপত্য, ঐতিহ্য ও তীর্থ', 'Architecture, Heritage & Pilgrimage', 'cul'],
  ['cul-arts', 'নৃত্য, চিত্রকলা, কারুশিল্প ও উৎসব', 'Performing & Visual Arts, Crafts, Festivals', 'cul'],
  ['bk-dar', 'ভারতীয় দর্শন (ষড়দর্শন ও নাস্তিক মত)', 'Indian Philosophy — Darshanas', 'bk'],
  ['bk-in', 'প্রাচীন ও মধ্যযুগের ভারতীয় গ্রন্থ', 'Ancient & Medieval Indian Texts', 'bk'],
  ['bk-mod', 'আধুনিক ভারতের চিন্তাবিদ ও সাহিত্য', 'Modern Indian Thinkers & Literature', 'bk'],
  ['bk-w', 'বিশ্বের দর্শন, রাষ্ট্রচিন্তা ও বিজ্ঞান', 'World Philosophy, Political Thought & Science', 'bk'],
  ['mix', 'সব বিষয় মিশিয়ে', 'Mixed Challenge', 'mix']
];
// existing world-human pages → their subject homes
var REGROUP = { 'w-countries': 'w-pol', 'w-capitals': 'w-pol', 'w-rivercities': 'w-pol', 'w-news': 'ir-world', 'w-orgs': 'ir-world' };
GEO.pages.forEach(function (p) { if (REGROUP[p.id]) p.group = REGROUP[p.id]; else if (p.group === 'w-hum') p.group = 'w-econ'; });
var BASES = {
  physical: ['Physical (প্রাকৃতিক)', 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 8, attribution: 'Tiles © Esri, US National Park Service' }],
  relief: ['Relief (ভূমিরূপ)', 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 11, attribution: 'Tiles © Esri' }],
  sat: ['Satellite (উপগ্রহ)', 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 17, attribution: 'Tiles © Esri, Maxar, Earthstar Geographics' }],
  light: ['Light (হালকা)', 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 16, attribution: 'Tiles © Esri, HERE, Garmin' }],
  dark: ['Dark (গাঢ়)', 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 16, attribution: 'Tiles © Esri, HERE, Garmin' }],
  offline: ['Offline (ইন্টারনেট ছাড়া)', null, {}]
};
var LABELS = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
var REMOTE = GEO.REMOTE || {};
var BG = { 'in-rivercities': 'in-rivers', 'in-dams': 'in-rivers', 'in-falls': 'in-rivers', 'w-rivercities': 'w-rivers', 'w-falls': 'w-rivers' };

var map, baseL, labelL, layerG, tmpG, bgG, stG, namesEl, panel = $('#panel');
var cur = null, mode = 'study', sel = null, hidden = {}, showNames = true, Q = null, lastQ = null, qCount = 10, tick = null, autoT = null;

/* ---------------- data prep ---------------- */
function setAnchor(it) {
  if (it.k === 'pt') it.a = L.latLng(it.lat, it.lng);
  else if (it.k === 'line') { var best = it.c[0]; it.c.forEach(function (s) { if (s.length > best.length) best = s; }); var m = best[best.length >> 1]; it.a = L.latLng(m[0], m[1]); }
  else { var c = polyCenter(it.geo); it.a = L.latLng(c[0], c[1]); }
}
function polyCenter(g) {
  var best = [0, 0], ba = -1, polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  polys.forEach(function (P) {
    var r = P[0], a = 0, cx = 0, cy = 0;
    for (var i = 0, j = r.length - 1; i < r.length; j = i++) { var f = r[j][0] * r[i][1] - r[i][0] * r[j][1]; a += f; cx += (r[j][0] + r[i][0]) * f; cy += (r[j][1] + r[i][1]) * f; }
    a /= 2; if (Math.abs(a) > ba && a !== 0) { ba = Math.abs(a); best = [cy / (6 * a), cx / (6 * a)]; }
  });
  return best;
}
function norm(p) {
  if (p.items) return;
  p.items = [];
  p.pts.forEach(function (a) { if (typeof a[1] === 'number' && typeof a[2] === 'number') p.items.push({ k: 'pt', n: a[0], lat: a[1], lng: a[2], s: a[3] || '', d: a[4] || '', t: a[5] || '', dt: a[6] && typeof a[6] === 'object' ? a[6] : null }); });
  p.lines.forEach(function (a) { if (a[1] && a[1].length > 1) p.items.push({ k: 'line', n: a[0], c: [a[1]], s: a[2] || '', d: a[3] || '', t: a[4] || '' }); });
  finish(p);
}
function finish(p) { p.items.forEach(function (it, i) { it.i = i; it.p = p; setAnchor(it); }); }
function countOf(p) { return p.remote && !p.built ? ((p.remote.n || (p.remote.list ? p.remote.list.length : 0)) + p.pts.length || '') : (p.items ? p.items.length : p.pts.length + p.lines.length); }

var cache = {};
function loadLocal(key) {   // bundled copy in data/geo/<key>.js (works offline and from file://)
  return new Promise(function (res, rej) {
    if (GEO.LOCAL && GEO.LOCAL[key]) return res(GEO.LOCAL[key]);
    var s = document.createElement('script'); s.src = 'data/geo/' + key + '.js';
    s.onload = function () { if (GEO.LOCAL && GEO.LOCAL[key]) res(GEO.LOCAL[key]); else rej(); };
    s.onerror = rej; document.head.appendChild(s);
  });
}
function loadRemote(key) {
  if (cache[key]) return cache[key];
  cache[key] = loadLocal(key).catch(function () {
    var urls = REMOTE[key] || [], i = 0;
    function next() {
      if (i >= urls.length) return Promise.reject(new Error('load ' + key));
      return fetch(urls[i++]).then(function (r) { if (!r.ok) throw 0; return r.json(); }).catch(next);
    }
    return next();
  });
  cache[key].catch(function () { delete cache[key]; });
  return cache[key];
}
var keyName = function (s) { return String(s || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z]/g, ''); };
function buildRemote(p) {
  if (p.built) return Promise.resolve();
  var R = p.remote;
  return loadRemote(R.key || R.src).then(function (data) {
    if (p.built) return;
    norm(p);
    if (R.src === 'rivers') {
      var idx = {}, idxN = {}, nk = function (s) { return String(s).toLowerCase().replace(/\s+/g, ' ').trim(); };
      data.features.forEach(function (f) {
        if (!f.geometry) return; var pr = f.properties || {};
        if (pr.name) { var k0 = nk(pr.name); (idxN[k0] = idxN[k0] || []).push(f); }
        [pr.name, pr.name_en].forEach(function (nm) { if (!nm) return; nm = nk(nm); (idx[nm] = idx[nm] || []).indexOf(f) < 0 && idx[nm].push(f); });
      });
      R.list.forEach(function (r) {
        var segs = [], seen = [], B = r[5] || R.bbox;
        r[0].toLowerCase().split('|').forEach(function (a) {
          var src = a.charAt(0) === '=' ? idxN[a.slice(1)] : idx[a];
          (src || []).forEach(function (f) {
            if (seen.indexOf(f) >= 0) return; seen.push(f);
            var g = f.geometry, ls = g.type === 'LineString' ? [g.coordinates] : g.coordinates;
            ls.forEach(function (l) {
              if (!l || l.length < 2) return;
              var c = l.map(function (x) { return [x[1], x[0]]; }), m = c[c.length >> 1];
              if (B && (m[0] < B[0] || m[0] > B[2] || m[1] < B[1] || m[1] > B[3])) return;
              segs.push(c);
            });
          });
        });
        if (segs.length) p.items.push({ k: 'line', n: r[1], c: segs, s: r[2] || '', d: r[3] || '', t: r[4] || '' });
        else console.warn('[GeoOnline] river not in dataset:', r[0]);
      });
    } else if (R.src === 'states') {
      var G = groupStates(data, R);
      var SF = GEO.STATEFACTS || {}, fmt = function (n) { return Number(n).toLocaleString('en-IN'); };
      var CE = GEO.CENSUS, M = R.metric && CE ? CE.metrics[R.metric] : null, rankOf = {};
      if (M) { Object.keys(CE.states).sort(function (a, b) { return CE.states[b][R.metric] - CE.states[a][R.metric]; }).forEach(function (k, i) { rankOf[k] = i + 1; }); }
      G.order.forEach(function (k) {
        var info = R.info[k], f = SF[k], x = null;
        if (M) {
          var v = CE.states[k] ? CE.states[k][R.metric] : null, cls = 'na';
          if (v != null) { cls = 'c0'; M.bins.forEach(function (b, i) { if (v >= b) cls = 'c' + (i + 1); }); }
          var vs = v == null ? 'n/a' : (R.metric === 'pop' ? fmt(v) : fmt(v) + (M.unit === '%' ? '%' : M.unit === '/km²' ? ' /km²' : ''));
          p.items.push({ k: 'poly', geo: { type: 'MultiPolygon', coordinates: G.grp[k].polys }, n: info ? info[0] : G.grp[k].raw, s: M.label + ': ' + vs,
            d: v == null ? '' : 'Rank ' + rankOf[k] + ' of ' + Object.keys(CE.states).length + ' · India: ' + fmt(CE.india[R.metric]) + (R.metric === 'pop' ? '' : M.unit === '%' ? '%' : M.unit === '/km²' ? ' /km²' : '') + ' (Census 2011)', t: cls });
          return;
        }
        if (f) {
          x = ['📐 Area: ' + fmt(f.area) + ' km² — rank ' + f.areaRank + ' among ' + (f.rankAmong === 'UTs' ? '8 UTs' : '28 states')];
          if (f.coastKm) x.push('🌊 Coastline: ' + fmt(f.coastKm) + ' km (2024 re-measurement)');
          if (f.intl && f.intl.length) x.push('🛂 Borders: ' + f.intl.map(function (b) { return b.country + (b.km ? ' (' + fmt(b.km) + ' km)' : ''); }).join(', '));
          if (f.neighbours && f.neighbours.length) x.push('🧭 Neighbouring states/UTs (' + f.neighbours.length + '): ' + f.neighbours.join(', '));
          var lines = []; if (f.tropic) lines.push('Tropic of Cancer passes'); if (f.meridian) lines.push('82.5°E Standard Meridian passes'); if (lines.length) x.push('📏 ' + lines.join(' · '));
          if (f.formed) x.push('🗓 Formed: ' + f.formed);
        }
        p.items.push({ k: 'poly', geo: { type: 'MultiPolygon', coordinates: G.grp[k].polys }, n: info ? info[0] : G.grp[k].raw, s: info ? 'রাজধানী: ' + info[1] : '', d: info ? info[2] : '', x: x, t: info ? info[3] : '' });
      });
    } else if (R.src === 'grouping') {   // member countries of a grouping, coloured by status
      var GR = (GEO.GROUPINGS || {})[R.g] || {}, status = {}, notes = GR.notes || {};
      ['members', 'observers', 'partners', 'applicants'].forEach(function (k) { (GR[k] || []).forEach(function (n) { status[n] = k; }); });
      var found = {};
      data.features.forEach(function (f) {
        var pr = f.properties || {}, nm = pr.NAME || pr.name; if (!f.geometry || !status[nm] || found[nm]) return; found[nm] = 1;
        p.items.push({ k: 'poly', geo: f.geometry, n: nm, s: { members: 'Member', observers: 'Observer', partners: 'Partner / dialogue partner', applicants: 'Applicant / invited' }[status[nm]], d: notes[nm] || '', t: status[nm] });
      });
      var DOTS = GR.dots || {};
      Object.keys(status).forEach(function (n) {
        if (found[n]) return;
        if (DOTS[n]) p.items.push({ k: 'pt', n: n, lat: DOTS[n][0], lng: DOTS[n][1], s: { members: 'Member', observers: 'Observer', partners: 'Partner / dialogue partner', applicants: 'Applicant / invited' }[status[n]] + ' · small state (dot)', d: notes[n] || '', t: status[n] });
        else console.warn('[GeoOnline] grouping country not on map:', R.g, n);
      });
    } else if (R.src === 'theme') {   // thematic area maps: merge polygons with the same name into one item
      var byName = {}, order = [];
      data.features.forEach(function (f) {
        if (!f.geometry) return; var pr = f.properties || {}, nm = pr.name || pr.cls;
        var polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
        if (!byName[nm]) { byName[nm] = { n: nm, t: pr.cls, d: pr.note || '', polys: [] }; order.push(nm); }
        byName[nm].polys = byName[nm].polys.concat(polys);
      });
      order.forEach(function (nm) { var b = byName[nm]; p.items.push({ k: 'poly', geo: { type: 'MultiPolygon', coordinates: b.polys }, n: b.n, s: p.types && p.types[b.t] ? p.types[b.t][0] : '', d: b.d, t: b.t }); });
    } else if (R.src === 'hist') {
      var PAL = ['#e4572e', '#2e86ab', '#7b2cbf', '#2a9d8f', '#f2a541', '#c2185b', '#5c6bc0', '#43a047', '#8d6e63', '#00838f', '#d81b60', '#6d4c41', '#1e88e5', '#fb8c00', '#3949ab', '#7cb342'];
      var generic = /\b(kingdoms|states|tribes|chiefdoms|cultures|culture|nomads|farmers|people|peoples|pastoralists|clans|principalities|societies)\b|^\?$|^minor|city-states/i;
      data.features.forEach(function (f, i) {
        var pr = f.properties, nm = pr.NAME, c = polyCenter(f.geometry), lat = c[0], lng = c[1];
        var isSA = lat >= 5 && lat <= 37 && ((lng >= 60 && lng <= 92.5 && !(lat > 31 && lng > 79)) || (lng > 92.5 && lng <= 97.5 && lat > 23.5));
        var t = generic.test(nm) ? 'minor' : isSA ? 'sa' : (lng < 60 && lat < 43) ? 'wa' : (lat >= 30 && lng < 105) ? 'ca' : 'ea';
        var note = R.notes[R.year + '|' + nm] || R.notes[nm] || '';
        var sub = pr.SUBJECTO && pr.SUBJECTO !== nm ? 'Under: ' + pr.SUBJECTO : '';
        var h = 0; for (var k = 0; k < nm.length; k++) h = (h * 31 + nm.charCodeAt(k)) >>> 0;
        p.items.push({ k: 'poly', geo: f.geometry, n: nm, s: [p.title.split(' — ')[0], sub].filter(Boolean).join(' · '), d: note, t: t, col: t === 'minor' ? '#bdbdbd' : PAL[h % PAL.length] });
      });
      // same-named polygons (e.g. "Hindu kingdoms" ×3) → keep names unique for the quiz
      var cnt = {}; p.items.forEach(function (it) { cnt[it.n] = (cnt[it.n] || 0) + 1; });
      var seenN = {}; p.items.forEach(function (it) { if (cnt[it.n] > 1) { seenN[it.n] = (seenN[it.n] || 0) + 1; it.n += ' (' + seenN[it.n] + ')'; } });
    } else if (R.src === 'countries') {
      var india = null;
      data.features.forEach(function (f) {
        if (!f.geometry) return; var pr = f.properties || {};
        var nm = pr.NAME || pr.name || pr.ADMIN || pr.admin, ct = pr.CONTINENT || pr.continent || '', ty = pr.TYPE || pr.type || 'Country';
        if (!nm || nm === 'Antarctica' || !/country/i.test(ty)) return;
        var bb = [999, 999, -999, -999];
        (function walk(c) { if (typeof c[0] === 'number') { bb[0] = Math.min(bb[0], c[0]); bb[1] = Math.min(bb[1], c[1]); bb[2] = Math.max(bb[2], c[0]); bb[3] = Math.max(bb[3], c[1]); } else c.forEach(walk); })(f.geometry.coordinates);
        if ((bb[2] - bb[0]) * (bb[3] - bb[1]) < 0.3) return;
        var pop = pr.POP_EST ? ' · Pop. ~' + (pr.POP_EST / 1e6).toFixed(pr.POP_EST < 1e7 ? 1 : 0) + ' million' : '';
        var it = { k: 'poly', geo: f.geometry, n: nm, s: pr.SUBREGION || pr.subregion || ct, d: (pr.NAME_LONG && pr.NAME_LONG !== nm ? pr.NAME_LONG : nm) + pop, t: keyName(ct) };
        if (nm === 'India') india = it; else p.items.push(it);
      });
      if (india) {
        p.items.push(india); finish(p); p.built = true;
        return loadRemote('states').then(function (s) {
          var G = groupStates(s, { alias: {} }), polys = []; G.order.forEach(function (k) { polys = polys.concat(G.grp[k].polys); });
          if (polys.length) { india.geo = { type: 'MultiPolygon', coordinates: polys }; india.d += ' · boundary as per Survey of India map'; india.a = L.latLng(22.5, 79); }
        }).catch(function () {});
      }
    }
    finish(p); p.built = true;
  });
}
function groupStates(data, R) {
  var grp = {}, order = [];
  data.features.forEach(function (f) {
    if (!f.geometry) return; var pr = f.properties || {};
    var raw = pr.st_nm || pr.ST_NM || pr.NAME_1 || pr.name || pr.NAME || pr.State_Name || pr.STATE || pr.state || '';
    var k = keyName(raw); k = (R.alias && R.alias[k]) || k;
    if (!grp[k]) { grp[k] = { raw: raw, polys: [] }; order.push(k); }
    grp[k].polys = grp[k].polys.concat(f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates);
  });
  return { grp: grp, order: order };
}

/* ---------------- map ---------------- */
function initMap() {
  map = L.map('map', { zoomControl: false, worldCopyJump: true, minZoom: 2, maxZoom: 12, zoomSnap: 0.5, zoomDelta: 0.5 });
  map.attributionControl.addAttribution('Data: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth</a>, <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a>, <a href="https://github.com/datameet/maps" target="_blank" rel="noopener">DataMeet</a> (CC BY 4.0)');
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);
  map.createPane('bg').style.zIndex = 350; map.getPane('bg').style.pointerEvents = 'none';
  map.createPane('names').style.zIndex = 640; map.getPane('names').style.pointerEvents = 'none';
  map.createPane('lbl').style.zIndex = 300; map.getPane('lbl').style.pointerEvents = 'none';
  map.createPane('bnd').style.zIndex = 355; map.getPane('bnd').style.pointerEvents = 'none';
  map.createPane('refl').style.zIndex = 390; map.getPane('refl').style.pointerEvents = 'none';
  namesEl = document.createElement('div'); namesEl.id = 'names'; map.getPane('names').appendChild(namesEl);
  refEl = document.createElement('div'); refEl.id = 'refl'; map.getPane('refl').appendChild(refEl);
  bRend = L.canvas({ pane: 'bnd', padding: 0.3 }); inG = L.layerGroup().addTo(map); extG = L.layerGroup().addTo(map);
  stG = L.layerGroup().addTo(map); bgG = L.layerGroup().addTo(map); layerG = L.featureGroup().addTo(map); tmpG = L.layerGroup().addTo(map);
  map.createPane('offbase').style.zIndex = 210; map.getPane('offbase').style.pointerEvents = 'none';
  if (navigator.onLine === false) setBase('offline', true); else setBase(store.get('base', 'physical'));
  map.on('zoomstart', function () { namesEl.style.opacity = 0; refEl.style.opacity = 0; });
  map.on('zoomend moveend', drawNames);
  map.on('click', onMapClick);
  map.setView([22.5, 82], 5);
  if (bst.esri) setLabels(true);
}
var offL = null, curBase = '';
function setBase(k, auto) {
  if (!BASES[k]) k = 'physical';
  if (baseL) { map.removeLayer(baseL); baseL = null; }
  if (offL) { map.removeLayer(offL); offL = null; }
  curBase = k;
  if (k === 'offline') {   // plain land/sea map drawn from the bundled country shapes — needs no internet
    loadRemote('countries').then(function (d) {
      if (curBase !== 'offline' || offL) return;
      offL = L.geoJSON(d, { pane: 'offbase', interactive: false, renderer: L.canvas({ pane: 'offbase' }), style: { color: '#cbbf9f', weight: 0.6, fillColor: '#f4eedc', fillOpacity: 1 } }).addTo(map);
    }).catch(function () {});
  } else {
    var ok = 0, bad = 0, lyr = L.tileLayer(BASES[k][1], Object.assign({ maxZoom: 12, crossOrigin: true }, BASES[k][2]));
    lyr.on('tileload', function () { ok++; });
    lyr.on('tileerror', function () { if (++bad >= 4 && !ok && baseL === lyr) setBase('offline', true); });   // no internet → fall back
    baseL = lyr.addTo(map); baseL.bringToBack();
  }
  document.body.classList.toggle('dark', k === 'dark' || k === 'sat');
  if (!auto) store.set('base', k);
  packSoon(k);
  $('#bsel').value = k;
}
function setLabels(on) {
  if (!!on === !!labelL) return;   // already in the wanted state: no tile reload
  if (labelL) { map.removeLayer(labelL); labelL = null; }
  if (on) labelL = L.tileLayer(LABELS, { pane: 'lbl', maxZoom: 12, maxNativeZoom: 13, crossOrigin: true }).addTo(map);
}
function fit() {
  var p = cur, b = p.view ? null : (p.world ? [[-52, -165], [72, 175]] : [[6.5, 67.5], [36.8, 97.8]]);
  if (p.view) map.setView([p.view[0], p.view[1]], p.view[2]); else map.fitBounds(b, { padding: [10, 10] });
}
var visible = function (it) { return !hidden[it.t]; };
function colorOf(it) {
  if (mode === 'quiz') return '#16324f';
  var p = it.p; if (it.col) return it.col; if (p.types && p.types[it.t]) return p.types[it.t][1];
  return p.color || '#d1495b';
}
function baseStyle(it) {
  var c = colorOf(it), q = mode === 'quiz';
  if (it.k === 'pt') return { radius: q ? 6.5 : 6, color: '#fff', weight: 1.5, fillColor: c, fillOpacity: 0.95 };
  if (it.k === 'line') return { color: c, weight: it.p.remote ? 2.6 : 4, opacity: 0.92 };
  return { color: '#fff', weight: 1, fillColor: c, fillOpacity: q ? 0.6 : 0.55 };
}
function render() {
  layerG.clearLayers(); tmpG.clearLayers(); map.closePopup();
  document.body.classList.toggle('pin', !!(Q && Q.kind === 'pin'));
  if (Q && Q.kind === 'order') { layerG.clearLayers(); }
  if (!cur || !cur.items) { drawNames(); return; }
  var noDraw = Q && (Q.kind === 'pin' || Q.kind === 'order');
  ['poly', 'line', 'pt'].forEach(function (kind) {
    cur.items.forEach(function (it) {
      if (it.k !== kind) return; it.L = it.H = null;
      if (!visible(it) || noDraw) return;
      var st = baseStyle(it);
      if (kind === 'pt') it.L = L.circleMarker(it.a, Object.assign({ bubblingMouseEvents: false }, st));
      else if (kind === 'line') {
        it.L = L.polyline(it.c, Object.assign({ interactive: false, lineCap: 'round', lineJoin: 'round' }, st));
        it.H = L.polyline(it.c, { color: '#000', weight: 18, opacity: 0, bubblingMouseEvents: false });
      } else it.L = L.geoJSON(it.geo, { style: Object.assign({ bubblingMouseEvents: false }, st) });
      var hit = it.H || it.L;
      hit.on('click', function (e) { L.DomEvent.stop(e); onItemClick(it); });
      hit.on('mouseover', function () { if (Q && (Q.lock || (Q.kind === 'name' && it === Q.cur))) return; if (it.k === 'pt') it.L.setStyle({ radius: 9 }); else if (it.k === 'line') it.L.setStyle({ weight: st.weight + 3 }); else it.L.setStyle({ fillOpacity: 0.8 }); });
      hit.on('mouseout', function () { if (Q && (Q.lock || (Q.kind === 'name' && it === Q.cur))) return; if (it === sel) return; if (it.k === 'pt') it.L.setStyle({ radius: st.radius }); else if (it.k === 'line') it.L.setStyle({ weight: st.weight }); else it.L.setStyle({ fillOpacity: st.fillOpacity }); });
      if (mode === 'study') hit.bindTooltip(esc(it.n), { sticky: true, className: 'tt', direction: 'top', offset: [0, -6] });
      it.L.addTo(layerG); if (it.H) it.H.addTo(layerG);
    });
  });
  drawNames();
}
function drawNames() {
  if (!namesEl) return; namesEl.innerHTML = ''; namesEl.style.opacity = 1;
  var placed = [];
  if (!cur || !cur.items || mode !== 'study' || !showNames) { drawRef(placed); return; }
  var admin = cur.remote && /states|countries|grouping/.test(cur.remote.src);
  var b = map.getBounds().pad(0.05), list = cur.items.filter(function (it) { return it.L && b.contains(it.a); });
  if (sel) list.sort(function (x, y) { return (y === sel) - (x === sel); });
  var frag = document.createDocumentFragment();
  list.forEach(function (it) {
    var big = admin && it.k === 'poly', pt = map.latLngToLayerPoint(it.a), w = big ? it.n.length * 7.6 + 8 : it.n.length * 6.3 + 12, h = 16;
    var x = it.k === 'pt' ? pt.x + 8 : pt.x - w / 2, y = pt.y - h / 2, box = [x, y, x + w, y + h];
    for (var i = 0; i < placed.length; i++) { var q = placed[i]; if (!(box[2] < q[0] || box[0] > q[2] || box[3] < q[1] || box[1] > q[3])) return; }
    placed.push(box);
    var d = document.createElement('div'); d.className = 'nm' + (big ? ' adm' : '') + (it === sel ? ' on' : ''); d.textContent = it.n;
    d.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)'; frag.appendChild(d);
  });
  namesEl.appendChild(frag);
  drawRef(placed);
}
function ring(it, color) {
  if (it.k === 'pt') L.circleMarker(it.a, { radius: 15, color: color, weight: 4, fill: false, interactive: false, className: 'ring' }).addTo(tmpG);
  else if (it.L) { if (it.k === 'line') it.L.setStyle({ color: color, weight: 7, opacity: 1 }); else it.L.setStyle({ fillColor: color, fillOpacity: 0.9, color: '#222', weight: 2 }); it.L.bringToFront && it.L.bringToFront(); }
}
function tag(it, text, cls) { L.tooltip({ permanent: true, direction: 'top', className: 'tt ' + (cls || ''), offset: [0, -10], interactive: false }).setLatLng(it.a).setContent(esc(text)).addTo(tmpG); }
function focusOn(it, zoomIn) {
  if (it.k !== 'pt' && it.L && it.L.getBounds) { map.flyToBounds(it.L.getBounds().pad(0.35), { duration: 0.6, maxZoom: 8 }); return; }
  var z = Math.max(map.getZoom(), zoomIn ? (cur.world ? 4 : 6.5) : 0);
  if (z > map.getZoom() || !map.getBounds().pad(-0.15).contains(it.a)) map.flyTo(it.a, z, { duration: 0.6 });
}
/* ---------------- offline cache: service worker + India/Asia tile pack ---------------- */
var swReady = null, packTimer = null, packing = {};
if ('serviceWorker' in navigator && /^https:|^http:\/\/(localhost|127\.0\.0\.1)/.test(location.href)) {
  swReady = navigator.serviceWorker.register('sw.js').then(function () { return navigator.serviceWorker.ready; }).catch(function () { return null; });
  navigator.serviceWorker.addEventListener('message', function (e) {
    var d = e.data || {}; if (d.type !== 'pack') return;
    var el = $('#pack'); if (!el) return;
    if (!d.fin) { el.className = 'on'; el.textContent = '⬇ ভারত ও এশিয়ার ম্যাপ অফলাইনে রাখা হচ্ছে… ' + Math.round(d.done / d.total * 100) + '%'; return; }
    packing[d.base] = false;
    if (d.fail < d.total * 0.05) store.set('pack2.' + d.base, Date.now());
    el.className = 'on done'; el.textContent = d.fail < d.total * 0.05 ? '✓ ভারত ও এশিয়ার ম্যাপ এই ব্রাউজারে সংরক্ষিত — এবার দ্রুত খুলবে' : 'কিছু টাইল নামানো যায়নি — পরে আবার চেষ্টা হবে';
    setTimeout(function () { el.className = ''; }, 4000);
  });
}
function packSoon(k) {   // after the page settles, quietly download the India + Asia tiles of this basemap once (~4 MB)
  if (!swReady || !BASES[k] || !BASES[k][1] || packing[k] || navigator.onLine === false) return;
  var last = store.get('pack2.' + k, 0); if (last && Date.now() - last < 30 * 864e5) return;   // refresh monthly
  if (navigator.connection && navigator.connection.saveData) return;
  clearTimeout(packTimer);
  packTimer = setTimeout(function () {
    swReady.then(function (reg) {
      if (!reg || !reg.active) return; packing[k] = true;
      reg.active.postMessage({ type: 'pack', base: k, tpl: BASES[k][1].replace('{s}', 'a'), max: Math.min(7, BASES[k][2].maxNativeZoom || 7) });
    });
  }, 4000);
}

/* ---------------- boundaries (user-styled) ---------------- */
var BDEF = { st: { on: true, c: '#7a5c45', w: 1, o: 0.8, d: 'dash' }, in: { on: true, c: '#8e2a4a', w: 1.6, o: 0.9, d: 'solid' } };
var bst = (function () { var s = store.get('bstyle', null) || {}; return { st: Object.assign({}, BDEF.st, s.st), in: Object.assign({}, BDEF.in, s.in), esri: !!s.esri }; })();
var bRend = null, stL = null, inL = null, inG = null, extG = null, extSel = {};
function bStyle(k) {
  var s = bst[k], w = +s.w;
  var da = s.d === 'dash' ? (w * 4).toFixed(1) + ' ' + (w * 3).toFixed(1) : s.d === 'dot' ? '0.1 ' + (w * 2.6).toFixed(1) : s.d === 'dashdot' ? (w * 6).toFixed(1) + ' ' + (w * 2.5).toFixed(1) + ' 0.1 ' + (w * 2.5).toFixed(1) : null;
  return { color: s.c, weight: w, opacity: +s.o, fill: false, dashArray: da, lineCap: s.d === 'dot' || s.d === 'dashdot' ? 'round' : 'butt', lineJoin: 'round', interactive: false };
}
function restyleBounds() { if (stL) stL.setStyle(bStyle('st')); if (inL) inL.setStyle(bStyle('in')); }
var bgTok = 0, extTok = 0;
function loadBg() {
  bgG.clearLayers(); stG.clearLayers(); inG.clearLayers();
  var p = cur, tok = ++bgTok; if (!p) return;
  var src = BG[p.id] && GEO.byId[BG[p.id]], hist = p.remote && p.remote.src === 'hist';
  if (src) buildRemote(src).then(function () { if (cur !== p || tok !== bgTok) return; src.items.forEach(function (it) { if (it.k === 'line') L.polyline(it.c, { color: '#1f78b4', weight: 1.6, opacity: 0.75, interactive: false, pane: 'bg' }).addTo(bgG); }); }).catch(function () {});
  if (bst.st.on && !p.world && !(p.remote && /states|hist/.test(p.remote.src)))
    loadRemote('states').then(function (d) { if (cur !== p || tok !== bgTok) return; if (!stL) stL = L.geoJSON(d, { pane: 'bg', interactive: false, style: function () { return bStyle('st'); } }); stG.addLayer(stL); }).catch(function () {});
  if (bst.in.on && !hist)
    loadRemote('borders').then(function (d) { if (cur !== p || tok !== bgTok) return; if (!inL) inL = L.geoJSON(d, { pane: 'bnd', renderer: bRend, interactive: false, style: function () { return bStyle('in'); } }); inG.addLayer(inL); }).catch(function () {});
}
var SWATCH = ['#8e2a4a', '#c0392b', '#e67e22', '#7a5c45', '#2c3e50', '#6c3483', '#1f618d', '#117a65', '#555555', '#000000'];
function bPopHtml() {
  var sec = function (k, title, note) {
    var s = bst[k];
    return '<div class="bsec"><label class="bh"><input type="checkbox" data-k="' + k + '" data-f="on"' + (s.on ? ' checked' : '') + '><b>' + title + '</b><small>' + note + '</small></label>' +
      '<div class="brow"><span>রং</span><div class="sw">' + SWATCH.map(function (c) { return '<button data-k="' + k + '" data-c="' + c + '" style="background:' + c + '"' + (c === s.c ? ' class="on"' : '') + ' aria-label="' + c + '"></button>'; }).join('') +
      '<input type="color" data-k="' + k + '" data-f="c" value="' + s.c + '" title="নিজের রং"></div></div>' +
      '<div class="brow"><span>বেধ</span><input type="range" min="0.4" max="5" step="0.1" data-k="' + k + '" data-f="w" value="' + s.w + '"><output>' + (+s.w).toFixed(1) + '</output></div>' +
      '<div class="brow"><span>স্পষ্টতা</span><input type="range" min="0.2" max="1" step="0.05" data-k="' + k + '" data-f="o" value="' + s.o + '"><output>' + Math.round(s.o * 100) + '%</output></div>' +
      '<div class="brow"><span>ধরন</span><div class="dsh">' + [['solid', '0'], ['dash', '7 5'], ['dot', '0.1 5'], ['dashdot', '10 4 0.1 4']].map(function (d) {
        return '<button data-k="' + k + '" data-d="' + d[0] + '"' + (s.d === d[0] ? ' class="on"' : '') + ' title="' + d[0] + '"><svg width="34" height="8"><line x1="2" y1="4" x2="32" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round"' + (d[1] !== '0' ? ' stroke-dasharray="' + d[1] + '"' : '') + '/></svg></button>'; }).join('') + '</div></div></div>';
  };
  return '<div class="bhead"><b>সীমানার স্টাইল</b><button data-x="close" aria-label="বন্ধ">✕</button></div>' +
    sec('in', 'আন্তর্জাতিক সীমানা', 'ভারতের সরকারি দৃষ্টিভঙ্গি অনুযায়ী (Natural Earth — India view)') +
    sec('st', 'রাজ্য সীমানা (ভারত)', 'Survey of India ভিত্তিক রাজ্য/UT সীমানা') +
    '<label class="bh esri"><input type="checkbox" data-k="esri"' + (bst.esri ? ' checked' : '') + '><b>বেসম্যাপের নিজস্ব লেবেল</b><small>Esri — শুধু ইন্টারনেটে, ইংরেজি</small></label>' +
    '<button class="breset" data-x="reset">↺ আগের মতো (ডিফল্ট)</button>';
}
function bSave() { store.set('bstyle', bst); }
function initBoundsUI() {
  var btn = $('#bBtn'), pop = $('#bPop');
  var open = function (on) { pop.classList.toggle('on', on); btn.classList.toggle('on', on); if (on) pop.innerHTML = bPopHtml(); };
  btn.onclick = function (e) { e.stopPropagation(); open(!pop.classList.contains('on')); };
  document.addEventListener('click', function (e) { if (!e.target.closest('#bPop') && !e.target.closest('#bBtn')) open(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') open(false); });
  pop.addEventListener('input', function (e) {
    var t = e.target, k = t.dataset.k, f = t.dataset.f; if (!k || !f || f === 'on') return;
    bst[k][f] = f === 'c' ? t.value : +t.value;
    if (t.nextElementSibling && t.nextElementSibling.tagName === 'OUTPUT') t.nextElementSibling.textContent = f === 'o' ? Math.round(t.value * 100) + '%' : (+t.value).toFixed(1);
    if (f === 'c') pop.querySelectorAll('.sw button[data-k="' + k + '"]').forEach(function (b) { b.classList.toggle('on', b.dataset.c === t.value); });
    restyleBounds(); bSave();
  });
  pop.addEventListener('change', function (e) {
    var t = e.target, k = t.dataset.k;
    if (k === 'esri') { bst.esri = t.checked; setLabels(t.checked && mode === 'study'); bSave(); return; }
    if (t.dataset.f === 'on') { bst[k].on = t.checked; bSave(); loadBg(); }
  });
  pop.addEventListener('click', function (e) {
    e.stopPropagation();   // the popover re-renders itself, so the outside-click closer must not see this click
    var b = e.target.closest('button'); if (!b) return; var k = b.dataset.k;
    if (b.dataset.x === 'close') { open(false); return; }
    if (b.dataset.x === 'reset') { bst.st = Object.assign({}, BDEF.st); bst.in = Object.assign({}, BDEF.in); bst.esri = false; setLabels(false); bSave(); restyleBounds(); loadBg(); pop.innerHTML = bPopHtml(); return; }
    if (b.dataset.c) bst[k].c = b.dataset.c; else if (b.dataset.d) bst[k].d = b.dataset.d; else return;
    restyleBounds(); bSave(); pop.innerHTML = bPopHtml();
  });
}

/* ---------------- reference labels: country/state names, seas, cities ---------------- */
var showAdmin = store.get('showAdmin', true), showCities = store.get('showCities', false), refEl = null, REF = {};
function ringDist(x, y, rings) {   // signed distance from point to polygon (deg), + inside
  var inside = false, min = Infinity;
  for (var r = 0; r < rings.length; r++) {
    var R = rings[r];
    for (var i = 0, j = R.length - 1; i < R.length; j = i++) {
      var a = R[i], b = R[j];
      if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
      var dx = b[0] - a[0], dy = b[1] - a[1], t = dx || dy ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / (dx * dx + dy * dy))) : 0;
      var ex = a[0] + t * dx - x, ey = a[1] + t * dy - y; min = Math.min(min, ex * ex + ey * ey);
    }
  }
  return (inside ? 1 : -1) * Math.sqrt(min);
}
function polylabel(rings) {   // "pole of inaccessibility": the label sits well inside the shape
  var o = rings[0], x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  o.forEach(function (p) { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); });
  var w = x1 - x0, h = y1 - y0, cs = Math.min(w, h), pr = Math.max(w, h) / 60; if (!cs) return [x0, y0];
  var cell = function (x, y, hh) { var d = ringDist(x, y, rings); return { x: x, y: y, h: hh, d: d, m: d + hh * Math.SQRT2 }; };
  var q = [], hh = cs / 2;
  for (var x = x0; x < x1; x += cs) for (var y = y0; y < y1; y += cs) q.push(cell(x + hh, y + hh, hh));
  var best = cell(x0 + w / 2, y0 + h / 2, 0);
  for (var n = 0; q.length && n < 3000; n++) {
    var bi = 0; for (var i = 1; i < q.length; i++) if (q[i].m > q[bi].m) bi = i;
    var c = q.splice(bi, 1)[0]; if (c.d > best.d) best = c;
    if (c.m - best.d <= pr) continue;
    hh = c.h / 2; q.push(cell(c.x - hh, c.y - hh, hh), cell(c.x + hh, c.y - hh, hh), cell(c.x - hh, c.y + hh, hh), cell(c.x + hh, c.y + hh, hh));
  }
  return [best.x, best.y];
}
function bigPart(geo) {
  var polys = geo.type === 'Polygon' ? [geo.coordinates] : geo.coordinates, best = null, ba = -1, tot = 0;
  polys.forEach(function (P) { var r = P[0], a = 0; for (var i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]); a = Math.abs(a / 2); tot += a; if (a > ba) { ba = a; best = P; } });
  return { rings: best, area: tot };
}
var SHORT = { 'Dadra and Nagar Haveli and Daman and Diu': 'DNH & DD', 'Dadra & Nagar Haveli and Daman & Diu': 'DNH & DD', 'Andaman and Nicobar Islands': 'Andaman & Nicobar Is.', 'Andaman & Nicobar Islands': 'Andaman & Nicobar Is.', 'NCT of Delhi': 'Delhi', 'Jammu and Kashmir': 'Jammu & Kashmir' };
// hand-placed label points where the shape centre misleads (small or oddly shaped units)  [lat, lng]
var LPOS = {'Arunachal Pradesh': [28.45,94.75], 'Assam': [26.23,92.99], 'Chandigarh': [30.73,76.78], 'Karnataka': [15.32,75.56], 'Manipur': [24.63,93.79], 'Meghalaya': [25.54,91.76], 'Mizoram': [23.54,92.87], 'Nagaland': [26.13,94.63], 'Punjab': [30.7,75.5], 'Rajasthan': [27.02,73.89], 'Sikkim': [27.55,88.45], 'Tripura': [23.75,91.7], 'Uttarakhand': [30.1,79.2], 'Telangana': [17.84,78.99], 'Bihar': [25.7,85.54], 'Kerala': [10.2,76.35], 'Madhya Pradesh': [23.52,80.1], 'Andaman & Nicobar Is.': [11.7,92.75], 'Gujarat': [23.35,71.9], 'Lakshadweep': [10.6,72.6], 'Odisha': [20.75,84.62], 'DNH & DD': [20.3,73.05], 'Jammu & Kashmir': [33.79,74.54], 'Chhattisgarh': [22.19,82.58], 'Delhi (NCT)': [28.67,77.12], 'Goa': [15.35,74.05], 'Haryana': [29.05,76.26], 'Himachal Pradesh': [31.9,77.2], 'Jharkhand': [23.5,84.97], 'Tamil Nadu': [10.97,78.35], 'Uttar Pradesh': [26.83,80.66], 'West Bengal': [23.4,87.85], 'Andhra Pradesh': [14.82,78.86], 'Puducherry': [11.93,79.8], 'Maharashtra': [19.37,75.32], 'Ladakh': [34.26,77.71]};   // label points for every state (precomputed pole of inaccessibility; hand-set for small/odd shapes)
function refPrep(key) {
  if (REF[key]) return Promise.resolve(REF[key]);
  if (key === 'cities') return loadRemote('cities').then(function (d) { return (REF.cities = d.map(function (c) { return { n: c[0], a: L.latLng(c[1], c[2]), z: c[3], cap: c[4], ind: c[5] }; })); });
  if (key === 'states') return loadRemote('states').then(function (d) {
    var st = GEO.byId['in-states'], R = st && st.remote ? st.remote : { alias: {}, info: {} }, G = groupStates(d, R), out = [];
    G.order.forEach(function (k) {
      var nm = R.info && R.info[k] ? R.info[k][0] : G.grp[k].raw; nm = SHORT[nm] || nm;
      var bp = bigPart({ type: 'MultiPolygon', coordinates: G.grp[k].polys }), c = LPOS[nm] ? [LPOS[nm][1], LPOS[nm][0]] : polylabel(bp.rings);
      out.push({ n: nm, a: L.latLng(c[1], c[0]), z: bp.area > 15 ? 4 : bp.area > 4 ? 5 : bp.area > 0.8 ? 5.5 : bp.area > 0.1 ? 6.5 : 7.5, area: bp.area });
    });
    return (REF.states = out.sort(function (a, b) { return b.area - a.area; }));
  });
  return loadRemote('clabels').then(function (d) {   // [name, total area (deg²), label lat, label lng] — label points precomputed (pole of inaccessibility)
    var out = [];
    d.forEach(function (f) {
      var nm = f[0], ar = f[1]; if (!nm || nm === 'Antarctica') return;
      out.push({ n: nm, a: L.latLng(f[2], f[3]), z: ar > 300 ? 2 : ar > 60 ? 3 : ar > 12 ? 4 : ar > 2 ? 5 : ar > 0.3 ? 6 : 7.5, area: ar });
    });
    return (REF.countries = out.sort(function (a, b) { return b.area - a.area; }));
  });
}
// water bodies: [name, lat, lng, min zoom, 1 = India pages / 0 = world pages]
var SEAS = [['Arabian Sea', 15.5, 64.5, 3.5, 1], ['Bay of Bengal', 15.5, 88.5, 3.5, 1], ['Indian Ocean', 2, 78, 3, 1], ['Laccadive Sea', 9.5, 74.8, 5, 1], ['Andaman Sea', 11, 96.2, 4.5, 1], ['Gulf of Mannar', 8.6, 78.9, 6.5, 1], ['Gulf of Khambhat', 21.4, 72.45, 7, 1], ['Gulf of Kutch', 22.65, 69.6, 7, 1], ['Palk Strait', 9.95, 79.6, 6.5, 1],
  ['Pacific Ocean', 5, -150, 2, 0], ['Atlantic Ocean', 25, -40, 2, 0], ['Indian Ocean', -20, 78, 2, 0], ['Arctic Ocean', 82, 0, 2, 0], ['Southern Ocean', -60, 60, 2, 0], ['South China Sea', 14, 114, 4, 0], ['Mediterranean Sea', 35, 18, 4, 0], ['Red Sea', 20.5, 38.5, 5, 0], ['Persian Gulf', 26.8, 51.5, 5, 0], ['Caspian Sea', 41.8, 50.8, 4.5, 0], ['Black Sea', 43.2, 34.3, 4.5, 0], ['Gulf of Mexico', 25, -90, 4, 0], ['Caribbean Sea', 15, -75, 4, 0], ['Arabian Sea', 15, 64, 3, 0], ['Bay of Bengal', 14, 88, 3, 0], ['Sea of Japan', 40, 135, 4.5, 0], ['North Sea', 56, 3, 4.5, 0], ['Gulf of Aden', 12.5, 48, 5, 0], ['Coral Sea', -17, 155, 4, 0], ['Tasman Sea', -38, 162, 4, 0], ['Bering Sea', 58, -178, 4, 0], ['Baltic Sea', 57.5, 19.5, 4.5, 0]];
var refBusy = {};
function wantRef() {   // which reference layers make sense on this page
  var p = cur, src = p && p.remote && p.remote.src || '';
  return { states: !p.world && !/states|hist/.test(src), countries: !/countries|grouping|hist/.test(src), cities: !/hist/.test(src) && !/capitals|rivercities/.test(p.id) };
}
function drawRef(placed) {
  if (!refEl) return; refEl.innerHTML = ''; refEl.style.opacity = 1;
  if (!cur || (!showAdmin && !showCities)) return;
  var W = wantRef(), z = map.getZoom(), b = map.getBounds().pad(0.02), frag = document.createDocumentFragment(), cityOn = showCities && W.cities && mode === 'study';
  var need = [showAdmin && W.states && 'states', showAdmin && W.countries && 'countries', cityOn && 'cities'].filter(Boolean);
  need.filter(function (k) { return !REF[k]; }).forEach(function (k) { if (refBusy[k]) return; refBusy[k] = 1; refPrep(k).then(function () { refBusy[k] = 0; drawNames(); }).catch(function () { refBusy[k] = 0; }); });
  var hit = function (box) { for (var i = 0; i < placed.length; i++) { var q = placed[i]; if (!(box[2] < q[0] || box[0] > q[2] || box[3] < q[1] || box[1] > q[3])) return true; } return false; };
  var put = function (cls, html, x, y, w, h, pad) {
    var box = [x - pad, y - pad, x + w + pad, y + h + pad]; if (hit(box)) return false; placed.push(box);
    var d = document.createElement('div'); d.className = cls; d.innerHTML = html; d.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)'; frag.appendChild(d); return true;
  };
  var caps = function (list, cls, fs, ls) {
    list.forEach(function (o) {
      if (o.z > z + 0.01 || !b.contains(o.a)) return;
      var nm = o.n.toUpperCase(), words = nm.split(' '), lines = [nm];
      if (nm.length > 13 && words.length > 1) { var best = 1, bd = 1e9; for (var i = 1; i < words.length; i++) { var l1 = words.slice(0, i).join(' ').length, d = Math.abs(l1 - (nm.length - l1)); if (d < bd) { bd = d; best = i; } } lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')]; }
      var cw = fs * (0.68 + ls), w = Math.max.apply(null, lines.map(function (l) { return l.length; })) * cw, h = lines.length * fs * 1.15, pt = map.latLngToLayerPoint(o.a);
      var html = lines.map(esc).join('<br>');
      if ([0, -1, 1, -2, 2].some(function (k) { return put(cls, html, pt.x - w / 2, pt.y - h / 2 + k * h * 0.9, w, h, 3); })) { frag.lastChild.style.fontSize = fs + 'px'; frag.lastChild.style.width = Math.ceil(w) + 'px'; }   // nudge up/down to find room
    });
  };
  if (showAdmin) {
    var sfs = z < 4.5 ? 9.5 : z < 5.5 ? 11 : z < 6.5 ? 12.5 : z < 7.5 ? 14 : 15.5, cfs = z < 3 ? 10 : z < 4 ? 11.5 : z < 5.5 ? 12.5 : 14;
    if (W.states && REF.states) caps(REF.states, 'rl st', sfs, 0.14);
    if (W.countries && REF.countries) caps(REF.countries.filter(function (o) { return !(W.states && o.n === 'India'); }), 'rl co', cfs, 0.2);
    SEAS.forEach(function (s) {
      if ((s[4] === 1) === !!cur.world || s[3] > z || !b.contains([s[1], s[2]])) return;
      var fs = z < 4 ? 10.5 : 12, w = s[0].length * fs * 0.55, pt = map.latLngToLayerPoint([s[1], s[2]]);
      put('rl sea', esc(s[0]), pt.x - w / 2, pt.y - fs / 2, w, fs * 1.2, 2);
    });
  }
  if (cityOn && REF.cities) {
    var n = 0, lim = Math.round(map.getSize().x * map.getSize().y / 9000);
    REF.cities.some(function (c) {
      if (c.z > z + 0.7 || !b.contains(c.a)) return false;
      if (!cur.world && !c.ind && z < 6) return false;
      var pt = map.latLngToLayerPoint(c.a), fs = c.cap ? 12 : 11, w = c.n.length * fs * 0.56 + 4;
      if (put('rl ct' + (c.cap ? ' cap' : ''), '<i></i>' + esc(c.n), pt.x - 4, pt.y - fs * 0.62, w + 10, fs * 1.25, 1)) n++;
      return n >= lim;
    });
  }
  refEl.appendChild(frag);
}

/* ---------------- empire extent (coloured territory under the pins) ---------------- */
function extList() { return cur && GEO.EXTENT ? GEO.EXTENT[cur.id] : null; }
function extIndex() { var E = extList(); if (!E) return -1; if (extSel[cur.id] != null) return extSel[cur.id]; for (var i = 0; i < E.length; i++) if (E[i].def) return i; return 0; }
function drawExtent() {
  if (!extG) return; extG.clearLayers();
  var E = extList(), i = extIndex(), p = cur, tok = ++extTok; if (!E || i < 0) return;
  var e = E[i];
  loadRemote('hist-' + e.y).then(function (d) {
    if (cur !== p || extIndex() !== i || tok !== extTok) return;
    d.features.forEach(function (f) {
      var part = e.parts.filter(function (x) { return x[0] === f.properties.NAME; })[0]; if (!part) return;
      L.geoJSON(f, { pane: 'bg', interactive: false, style: { color: part[1], weight: 1.6, opacity: 0.9, dashArray: '5 4', fillColor: part[1], fillOpacity: 0.22 } }).addTo(extG);
    });
  }).catch(function () {});
}
function extHtml() {
  var E = extList(); if (!E) return '';
  var i = extIndex();
  return '<div class="ext"><div class="exth"><small>রঙিন অংশ = সেই সময়ের আনুমানিক এলাকা</small></div>' + E.map(function (e, k) {
    return '<button data-act="ext" data-i="' + k + '"' + (k === i ? ' class="on"' : '') + '><span class="sw">' + e.parts.map(function (x) { return '<i style="background:' + x[1] + '"></i>'; }).join('') + '</span>' + esc(e.label) +
      (k === i && e.parts.length > 1 ? '<small>' + e.parts.map(function (x) { return '<em style="color:' + x[1] + '">■</em> ' + esc(x[0]); }).join(' · ') + '</small>' : '') + '</button>';
  }).join('') + '<button data-act="ext" data-i="-1"' + (i < 0 ? ' class="on"' : '') + '>✕ রঙ বন্ধ</button><p class="extsrc">সীমানা: historical-basemaps (GPL-3.0) — আনুমানিক, পরীক্ষার আগে NCERT অ্যাটলাস মিলিয়ে নিও।</p></div>';
}

/* ---------------- study ---------------- */
function oldClue(it) {   // old names only — strip eras in brackets, "→ new name" parts and any word of today's name
  var o = String(it.dt && it.dt.old || '').replace(/\([^)]*\)/g, '').split('→')[0];
  var words = it.n.toLowerCase().replace(/\(.*?\)/g, ' ').split(/[^a-z]+/).filter(function (w) { return w.length > 3; });
  o = o.split(/[;,\/]/).map(function (x) { return x.trim(); }).filter(function (x) { var l = x.toLowerCase(); return x && !words.some(function (w) { return l.indexOf(w) >= 0; }); }).join(' · ');
  return o.length > 2 ? o : '';
}
function nBooks(it) { return it.dt && it.dt.books ? it.dt.books.length : 0; }
var MEDIA = null, mediaBusy = false;
function mediaOf(it) { return MEDIA && it && it.p ? MEDIA[it.p.id + '|' + it.n] : null; }   // [wikipedia title, image file or '', credit]
function loadMedia() {
  if (MEDIA || mediaBusy) return; mediaBusy = true;
  loadRemote('media').then(function (d) { mediaBusy = false; if (d) { MEDIA = d; if (sel && $('#dcard')) showDetail(sel); } })
    .catch(function () { mediaBusy = false; });   // a failed load is retried on the next card instead of disabling images for the session
}
function detailHtml(it, open) {
  var D = it.dt || {}, M = mediaOf(it), ty = it.p.types && it.p.types[it.t] ? it.p.types[it.t][0] : '';
  var h = '<div class="dcard" id="dcard"><button class="dx" data-act="dclose" aria-label="বন্ধ">✕</button><h4>' + esc(it.n) + '</h4>' +
    '<div class="dmeta">' + [D.era, D.place || it.s, ty].filter(Boolean).map(esc).join(' · ') + '</div>';
  if (M && M[1]) h += '<figure class="dimg"><img src="assets/img/' + esc(M[1]) + '" alt="' + esc(it.n) + '" loading="lazy" onerror="this.parentNode.remove()">' + (M[2] ? '<figcaption>' + (M[3] ? '<a href="https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(M[3]) + '" target="_blank" rel="noopener">' + esc(M[2]) + '</a>' : esc(M[2])) + ' (resized)</figcaption>' : '') + '</figure>';
  if (it.d) h += '<p class="dnote">' + esc(it.d) + '</p>';
  if (D.old) h += '<p class="dold"><b>পুরনো / অন্য নাম</b>' + esc(D.old) + '</p>';
  if (D.idea) h += '<p class="didea"><b>মূল ভাবনা</b>' + esc(D.idea) + '</p>';
  if (D.more) h += '<p class="dmore">' + esc(D.more) + '</p>';
  if (it.x) h += '<p class="dfacts">' + it.x.map(esc).join('<br>') + '</p>';
  if (D.books && D.books.length) {
    h += '<h5>📚 বই ও গ্রন্থ <small>' + D.books.length + 'টি — বইয়ে ক্লিক করো</small></h5>' + D.books.map(function (b, i) {
      return '<details class="book"' + (open === i ? ' open' : '') + ' data-b="' + i + '"><summary><b>' + esc(b.t) + '</b><span>' + [b.y, b.lang].filter(Boolean).map(esc).join(' · ') + '</span></summary>' +
        (b.sum ? '<p>' + esc(b.sum) + '</p>' : '') + (b.key ? '<p class="bkey">🔑 ' + esc(b.key) + '</p>' : '') + '</details>';
    }).join('');
  }
  if (M && M[0]) h += '<a class="dwiki" href="https://en.wikipedia.org/wiki/' + encodeURIComponent(M[0].replace(/ /g, '_')) + '" target="_blank" rel="noopener">📖 Wikipedia: ' + esc(M[0]) + ' ↗</a>';
  return h + '</div>';
}
function showDetail(it, open) {
  if (mode !== 'study' || !it) return;
  loadMedia();
  var old = $('#dcard'); if (old) old.remove();
  panel.insertAdjacentHTML('afterbegin', detailHtml(it, open)); panel.scrollTop = 0;
  if (open != null) { var d = panel.querySelector('details.book[data-b="' + open + '"]'); if (d) setTimeout(function () { d.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 30); }
}
function factsHtml(it) { return it.x ? '<span class="facts">' + it.x.map(esc).join('<br>') + '</span>' : ''; }
function select(it, fly) {
  if (sel && sel.L) sel.L.setStyle(baseStyle(sel));
  tmpG.clearLayers(); sel = it;
  ring(it, '#ffc53d');
  var D = it.dt, extra = '';
  if (D && D.books && D.books.length) extra += '<div class="pbooks">' + D.books.map(function (b, i) { return '<a href="#" data-pb="' + i + '">📖 ' + esc(b.t) + (b.y ? ' <em>' + esc(b.y) + '</em>' : '') + '</a>'; }).join('') + '</div>';
  L.popup({ offset: [0, -6], autoPan: !fly, maxWidth: 280 }).setLatLng(it.a).setContent('<b>' + esc(it.n) + '</b><small>' + esc(it.s) + (D && D.era ? ' · ' + esc(D.era) : '') + '</small>' + extra + '<span class="pside">📄 বিস্তারিত পাশের প্যানেলে</span>').openOn(map);
  showDetail(it);
  if (fly) focusOn(it, true);
  drawNames();
  var rows = panel.querySelectorAll('.row'); for (var i = 0; i < rows.length; i++) rows[i].classList.toggle('on', +rows[i].dataset.i === it.i);
  panel.scrollTop = 0;
}
function fillList(q) {
  var Lst = $('#list'); if (!Lst) return; q = (q || '').toLowerCase();
  var its = cur.items.filter(visible).filter(function (it) { return !q || (it.n + ' ' + it.s + ' ' + it.d + (it.dt ? ' ' + (it.dt.old || '') + ' ' + (it.dt.books || []).map(function (b) { return b.t; }).join(' ') : '')).toLowerCase().indexOf(q) >= 0; }).sort(function (a, b) { return a.n.localeCompare(b.n); });
  Lst.innerHTML = its.map(function (it) { return '<div class="row' + (it === sel ? ' on' : '') + '" data-act="sel" tabindex="0" role="button" data-i="' + it.i + '"><i style="background:' + colorOf(it) + '"></i><div><b>' + esc(it.n) + (nBooks(it) ? ' <span class="nb">📚 ' + nBooks(it) + '</span>' : '') + '</b><small>' + esc((it.dt && it.dt.era ? it.dt.era + ' · ' : '') + it.s) + '</small><p>' + esc(it.d) + factsHtml(it) + '</p></div></div>'; }).join('') || '<div class="empty">কিছু পাওয়া যায়নি</div>';
}
function chipsHtml() {
  var p = cur; if (!p.types) return '';
  return '<div class="chips">' + Object.keys(p.types).map(function (k) { var n = p.items.filter(function (i) { return i.t === k; }).length; return n ? '<button class="chip' + (hidden[k] ? ' off' : '') + '" data-act="chip" data-t="' + k + '"><i style="background:' + p.types[k][1] + '"></i>' + esc(p.types[k][0]) + ' <b>' + n + '</b></button>' : ''; }).join('') + '</div>';
}
function fold(key, title, body, defOpen) {   // a section with a ＋/− header; state remembered per section kind
  var st = store.get('fold', {}), open = st[key] == null ? defOpen !== false : st[key];
  return '<section class="fold' + (open ? '' : ' shut') + '" data-fold="' + key + '"><button class="fh" data-act="fold" aria-expanded="' + open + '"><span>' + title + '</span><i>' + (open ? '−' : '＋') + '</i></button><div class="fbody">' + body + '</div></section>';
}
function renderPanel() {
  if (mode === 'quiz') { if (Q) quizPanel(); else quizSetup(); return; }
  var ex = extHtml(), ch = chipsHtml();
  panel.innerHTML = fold('intro', 'ℹ পরিচিতি', '<p class="intro">' + esc(cur.intro || '') + '</p>') + (ex ? fold('ext', '🗺 সাম্রাজ্যের বিস্তার', ex) : '') + (ch ? fold('chips', '🏷 ধরন অনুযায়ী দেখাও', ch) : '') +
    fold('print', '🖨 প্রিন্ট / ফাঁকা ম্যাপে অনুশীলন', '<p class="intro">ম্যাপ কাগজে প্রিন্ট বা PDF করো (প্রিন্ট ডায়ালগে "Save as PDF")। চিপ দিয়ে যে ধরনগুলো লুকোনো, সেগুলো বাদ যাবে।</p><div class="prow">' +
      '<button data-act="print" data-k="num">🔢 নম্বর দেওয়া ম্যাপ<small>পরের পাতায় উত্তরপত্র</small></button>' +
      '<button data-act="print" data-k="dot">📍 শুধু বিন্দু<small>নাম লিখে অনুশীলন</small></button>' +
      '<button data-act="print" data-k="blank">⬜ একদম ফাঁকা<small>শুধু সীমানা</small></button>' +
      '<button data-act="print" data-k="named">🏷 নামসহ ম্যাপ<small>রিভিশন শিট</small></button></div>', false) +
    '<input id="q" class="find" placeholder="এই পাতায় খোঁজো… (' + cur.items.length + 'টি)"><div id="list" class="list"></div>';
  fillList('');
  $('#q').addEventListener('input', function (e) { fillList(e.target.value); });
}

/* ---------------- print / outline-map practice ---------------- */
var printing = false;
function printMap(kind) {   // num: numbered pins + answer key · dot: unnamed dots · blank: borders only · named: revision sheet
  if (printing || !cur || !cur.items) return; printing = true;
  var vis = cur.items.filter(visible), base0 = curBase, prG = L.layerGroup(), view = [map.getCenter(), map.getZoom()];
  document.body.classList.add('printing', 'pr-' + kind);
  setLabels(false); setBase('offline', true); sel = null; tmpG.clearLayers(); map.closePopup();
  if (kind === 'blank') map.removeLayer(layerG);
  if (kind === 'num') vis.forEach(function (it, i) {
    L.marker(it.a, { interactive: false, keyboard: false, icon: L.divIcon({ className: 'pnum', html: String(i + 1), iconSize: null }) }).addTo(prG);
  });
  prG.addTo(map);
  var key = document.createElement('section'); key.id = 'printKey';
  var head = '<h2>' + esc(cur.title) + (cur.bn ? ' · ' + esc(cur.bn) : '') + '</h2>';
  if (kind === 'num') key.innerHTML = head + '<h3>উত্তরপত্র</h3><ol>' + vis.map(function (it) { return '<li><b>' + esc(it.n) + '</b>' + (it.s ? ' — ' + esc(it.s) : '') + '</li>'; }).join('') + '</ol>';
  else if (kind === 'dot' || kind === 'blank') key.innerHTML = head + '<h3>এই জায়গাগুলো ম্যাপে বসাও / চিনে লেখো</h3><ol>' + vis.map(function (it) { return '<li>' + esc(it.n) + '</li>'; }).join('') + '</ol>';
  else key.innerHTML = '';
  var ttl = document.createElement('div'); ttl.id = 'printTitle'; ttl.innerHTML = head + '<small>GeoOnline · geoonline.vercel.app</small>';
  document.body.appendChild(ttl); document.body.appendChild(key);
  map.invalidateSize();
  if (vis.length) map.fitBounds(L.latLngBounds(vis.map(function (it) { return it.a; })).pad(0.08), { maxZoom: cur.world ? 5 : 8 }); else fit();
  drawNames();
  var done = function () {
    window.removeEventListener('afterprint', done); if (!printing) return; printing = false;
    document.body.classList.remove('printing', 'pr-' + kind); key.remove(); ttl.remove(); map.removeLayer(prG);
    if (!map.hasLayer(layerG)) layerG.addTo(map);
    setBase(base0, true); setLabels(mode === 'study' && bst.esri);
    map.invalidateSize(); map.setView(view[0], view[1]); drawNames();
  };
  window.addEventListener('afterprint', done);
  setTimeout(function () { window.print(); setTimeout(done, 400); }, 700);   // give the outline base a moment to draw; some browsers never fire afterprint
}

/* ---------------- quiz ---------------- */
// per-place memory of right/wrong answers → weak places come back more often
function statsOf(pid) { var s = store.get('stat', {}); return s[pid] || {}; }
function recStat(it, ok) {
  if (!it || !it.p || it.p.group === 'mix') return;
  var s = store.get('stat', {}), m = s[it.p.id] = s[it.p.id] || {}, r = m[it.n] = m[it.n] || [0, 0];
  if (ok) r[0]++; else r[1]++; store.set('stat', s);
}
function weakItems() {
  var st = statsOf(cur.id);
  return cur.items.filter(visible).filter(function (it) { var r = st[it.n]; return r && r[1] > 0 && r[1] >= r[0] * 0.5; });
}
function prioritise(items) {   // random order, but places you got wrong float to the front
  var st = statsOf(cur.id);
  return items.map(function (it) { var r = st[it.n] || [0, 0]; return { it: it, k: Math.random() + r[1] * 0.6 - r[0] * 0.25 }; })
    .sort(function (a, b) { return b.k - a.k; }).map(function (x) { return x.it; });
}
function quizSetup() {
  var best = store.get('best', {}), pts = cur.items.filter(visible).filter(function (i) { return i.k === 'pt'; }), n = cur.items.filter(visible).length, weak = weakItems().length;
  var card = function (k, ic, t, d, dis) { var b = best[cur.id + ':' + k]; return '<button class="qmode" data-act="qstart" data-kind="' + k + '"' + (dis ? ' disabled' : '') + '><span>' + ic + '</span><div><b>' + t + '</b><small>' + d + '</small></div><em>' + (b != null ? 'সেরা ' + b + '%' : '') + '</em></button>'; };
  panel.innerHTML = '<h3>🎯 কুইজ চ্যালেঞ্জ</h3><p class="intro">' + esc(cur.title) + ' — ' + n + 'টি জায়গা। একটা খেলা বেছে নাও। যেগুলো ভুল করো সেগুলো পরে বেশি করে ফিরে আসবে।</p>' + chipsHtml() +
    '<div class="seg"><span>প্রশ্ন:</span>' + [10, 20, 0].map(function (c) { return '<button data-act="qn" data-n="' + c + '"' + (qCount === c ? ' class="on"' : '') + '>' + (c || 'সব') + '</button>'; }).join('') + '</div>' +
    card('find', '👆', 'ম্যাপে খুঁজে বের করো', 'নাম দেওয়া থাকবে — নামহীন চিহ্নগুলোর মধ্যে ঠিকটায় ক্লিক করো।') +
    card('name', '🔤', 'এটা কোন জায়গা?', 'একটা জায়গা জ্বলবে — ৪টি বিকল্প থেকে নাম বাছো (কীবোর্ড 1–4)।') +
    card('pin', '📍', 'ফাঁকা ম্যাপে পিন বসাও', 'কোনো চিহ্ন নেই — ঠিক জায়গায় ক্লিক করো, কত কিমি দূরে পড়ল দেখাবে।', !pts.length) +
    card('order', '↕', 'উত্তর→দক্ষিণ / পশ্চিম→পূর্ব সাজাও', 'UPSC প্রিলিমসের ধাঁচে — ৪টি জায়গা সঠিক ক্রমে সাজাও।', pts.length < 4) +
    (cur.items.filter(visible).filter(nBooks).length >= 4 ? card('book', '📚', 'এই বইটি কার লেখা?', 'বইয়ের নাম ও সাল দেওয়া থাকবে — ৪ জন লেখকের মধ্যে ঠিকজনকে বাছো।') : '') +
    (cur.items.filter(visible).filter(function (x) { return x.dt && x.dt.old && oldClue(x); }).length >= 4 ? card('old', '🏺', 'পুরনো নাম → আজকের জায়গা', 'ইতিহাসের নাম দেওয়া থাকবে (যেমন Akbarabad, Pataliputra) — আজকের নামটা বাছো।') : '') +
    card('weak', '🔁', 'দুর্বল জায়গা ঝালিয়ে নাও' + (weak ? ' (' + weak + ')' : ''), weak ? 'আগে যেগুলো ভুল করেছ শুধু সেগুলো।' : 'এখনও কোনো দুর্বল জায়গা নেই — আগে অন্য কুইজ খেলো।', !weak) +
    (weak ? '<button class="qacts-link" data-act="qreset">দুর্বল-তালিকা মুছে দাও</button>' : '');
}
function mkOrder(items) {
  var gap = cur.world ? 2 : 0.45;
  for (var t = 0; t < 60; t++) {
    var dir = Math.random() < 0.55 ? 'ns' : 'we', key = dir === 'ns' ? 'lat' : 'lng', pick = [];
    shuffle(items.slice()).some(function (it) {
      if (pick.every(function (o) { return Math.abs(o.a[key] - it.a[key]) >= gap && o.n !== it.n; })) pick.push(it);
      return pick.length === 4;
    });
    if (pick.length < 4) continue;
    var ans = pick.slice().sort(function (a, b) { return dir === 'ns' ? b.a.lat - a.a.lat : a.a.lng - b.a.lng; });
    return { order: true, dir: dir, items: shuffle(pick), ans: ans, p: cur,
      n: ans.map(function (x) { return x.n; }).join(' → '), s: dir === 'ns' ? 'উত্তর থেকে দক্ষিণ' : 'পশ্চিম থেকে পূর্ব',
      d: ans.map(function (x) { return x.n + ' (' + (dir === 'ns' ? Math.abs(x.a.lat).toFixed(2) + '°' + (x.a.lat >= 0 ? 'N' : 'S') : Math.abs(x.a.lng).toFixed(2) + '°' + (x.a.lng >= 0 ? 'E' : 'W')) + ')'; }).join(' · ') };
  }
  return null;
}
function quizStart(kind, pool, bks0) {
  clearTimeout(autoT);
  var label = kind, partial = !!pool;
  if (kind === 'weak') { kind = 'name'; pool = weakItems(); partial = true; }
  var bks = null;
  if ((kind === 'old' || kind === 'book') && pool && bks0 && bks0.length === pool.length) { bks = bks0; }   // replay of the missed questions only
  else if (kind === 'old') {
    var olds = shuffle(cur.items.filter(visible).filter(function (x) { return x.dt && x.dt.old && oldClue(x); })); if (olds.length < 4) return;
    if (qCount) olds = olds.slice(0, qCount);
    pool = olds; bks = olds.map(function (x) { return { t: oldClue(x), old: true }; });
  }
  else if (kind === 'book') {
    var pairs = []; cur.items.filter(visible).forEach(function (it) { (it.dt && it.dt.books || []).forEach(function (b) { pairs.push([it, b]); }); });
    if (cur.items.filter(nBooks).length < 4) return;
    pairs = shuffle(pairs); if (qCount) pairs = pairs.slice(0, qCount);
    pool = pairs.map(function (x) { return x[0]; }); bks = pairs.map(function (x) { return x[1]; });
  }
  var items = pool || cur.items.filter(visible).filter(function (it) { return (kind !== 'pin' && kind !== 'order') || it.k === 'pt'; });
  if (kind === 'order') items = items.filter(function (it) { return it.k === 'pt'; });
  if (!items.length || (kind === 'order' && items.length < 4)) return;
  var qs;
  if (kind === 'order') {
    var want = qCount || Math.min(15, Math.max(5, Math.floor(items.length / 4))); qs = [];
    for (var i = 0; i < want * 3 && qs.length < want; i++) { var o = mkOrder(items); if (o) qs.push(o); }
    if (!qs.length) return;
  } else if (kind === 'book' || kind === 'old') qs = pool;
  else { qs = pool ? shuffle(items.slice()) : prioritise(items); if (!pool && qCount) qs = qs.slice(0, qCount); }
  Q = { kind: kind, label: label, partial: partial, bks: bks, wrongBk: [], qs: qs, i: 0, ok: 0, streak: 0, bestStreak: 0, wrong: [], t0: Date.now(), lock: false, km: 0 };
  setLabels(false);
  fit(); clearInterval(tick);
  tick = setInterval(function () { var e = $('#qt'); if (e && Q) { var s = Math.floor((Date.now() - Q.t0) / 1000); e.textContent = Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); } }, 500);
  quizAsk();
}
function quizAsk() {
  clearTimeout(autoT); Q.lock = false; Q.cur = Q.qs[Q.i]; Q.bk = Q.bks ? Q.bks[Q.i] : null; Q.pick = []; sel = null;
  render(); quizPanel();
  if (Q.kind === 'name') { ring(Q.cur, '#ffc53d'); if (Q.cur.k === 'pt' && Q.cur.L) { Q.cur.L.setStyle({ fillColor: '#ffc53d', radius: 9, color: '#111' }); Q.cur.L.bringToFront(); } focusOn(Q.cur, false); }
}
function quizPanel() {
  var it = Q.cur, n = Q.qs.length, h = '<div class="qbar"><span>প্রশ্ন ' + (Q.i + 1) + '/' + n + '</span><span>✔ ' + Q.ok + '</span><span>🔥 ' + Q.streak + '</span><span id="qt">0:00</span></div><div class="prog"><i style="width:' + (Q.i / n * 100) + '%"></i></div>';
  if (Q.kind === 'order') {
    h += '<div class="ask"><small>↕ ' + (it.dir === 'ns' ? 'উত্তর থেকে দক্ষিণে সাজাও (সবচেয়ে উত্তরেরটা আগে)' : 'পশ্চিম থেকে পূর্বে সাজাও (সবচেয়ে পশ্চিমেরটা আগে)') + '</small><h2>' + (it.dir === 'ns' ? 'উত্তর ↓ দক্ষিণ' : 'পশ্চিম → পূর্ব') + '</h2><p class="hint">ক্রম অনুযায়ী ক্লিক করো (কীবোর্ড 1–4)</p></div><div class="opts">' +
      it.items.map(function (o, i) { var k = Q.pick.indexOf(o); return '<button data-act="ord" data-i="' + i + '"' + (k >= 0 ? ' class="picked"' : '') + '><kbd>' + (k >= 0 ? '#' + (k + 1) : i + 1) + '</kbd>' + esc(o.n) + ' <small>' + esc(o.s) + '</small></button>'; }).join('') + '</div>' +
      (Q.pick.length ? '<button class="btn ghost" data-act="ordreset">↺ আবার সাজাও</button>' : '');
  } else if (Q.kind === 'name' || Q.kind === 'book' || Q.kind === 'old') {
    var okx = function (x) { return x !== it && x.n !== it.n && (Q.kind !== 'book' || nBooks(x)); };
    var pool = cur.items.filter(function (x) { return okx(x) && x.t === it.t; });
    if (pool.length < 3) pool = cur.items.filter(okx);
    var seen = {}, opts = [it]; shuffle(pool).forEach(function (x) { if (opts.length < 4 && !seen[x.n]) { seen[x.n] = 1; opts.push(x); } }); shuffle(opts); Q.opts = opts;
    h += (Q.kind === 'old' ? '<div class="ask"><small>🏺 ইতিহাসে এই নামে পরিচিত ছিল — আজ কোন জায়গা?</small><h2 class="bkq">' + esc(Q.bk.t) + '</h2><p class="hint"></p></div>' : Q.kind === 'book' ? '<div class="ask"><small>📚 এই বইটি / গ্রন্থটি কার লেখা?</small><h2 class="bkq">' + esc(Q.bk.t) + '</h2><p class="hint">' + esc([Q.bk.y, Q.bk.lang].filter(Boolean).join(' · ')) + '</p></div>'
      : '<div class="ask"><small>জ্বলজ্বলে জায়গাটা কোনটা?</small><h2>?</h2><p class="hint"></p></div>') + '<div class="opts">' + opts.map(function (o, i) { return '<button data-act="opt" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd>' + esc(o.n) + '</button>'; }).join('') + '</div>';
  } else {
    h += '<div class="ask"><small>' + (Q.kind === 'pin' ? '📍 ফাঁকা ম্যাপে ঠিক জায়গায় ক্লিক করো' : '👆 ম্যাপে ঠিক চিহ্নে ক্লিক করো') + '</small><h2>' + esc(it.n) + '</h2><p class="hint" id="hint"></p></div>';
  }
  h += '<div id="fb"></div><div class="qacts">' + (Q.kind === 'order' ? '' : '<button data-act="qhint">💡 ইঙ্গিত</button>') + '<button data-act="qskip">জানি না</button><button data-act="qquit">কুইজ বন্ধ</button></div>';
  panel.innerHTML = h; panel.scrollTop = 0;
}
function orderPick(i) {
  if (!Q || Q.lock || Q.kind !== 'order') return;
  var o = Q.cur.items[i]; if (!o || Q.pick.indexOf(o) >= 0) return;
  Q.pick.push(o);
  if (Q.pick.length < 4) { quizPanel(); return; }
  orderCheck(false);
}
function orderCheck(skipped) {
  var c = Q.cur, ok = !skipped && Q.pick.every(function (o, i) { return o === c.ans[i]; });
  c.ans.forEach(function (o, i) {
    L.circleMarker(o.a, { radius: 9, color: '#fff', weight: 2, fillColor: ok ? '#1f9d7a' : '#16324f', fillOpacity: 1, interactive: false }).addTo(tmpG);
    tag(o, (i + 1) + '. ' + o.n, ok ? 'ok' : '');
    recStat(o, ok);
  });
  map.fitBounds(L.latLngBounds(c.ans.map(function (o) { return o.a; })).pad(0.35), { maxZoom: cur.world ? 5 : 7 });
  var yours = skipped ? '' : 'তোমার ক্রম: <b>' + Q.pick.map(function (o) { return esc(o.n); }).join(' → ') + '</b>';
  answer(ok, yours, true);
}
function answer(ok, extra, noStat) {
  if (!Q || Q.lock) return; Q.lock = true; var it = Q.cur;
  if (!noStat) recStat(it, ok);
  if (ok) { Q.ok++; Q.streak++; Q.bestStreak = Math.max(Q.bestStreak, Q.streak); } else { Q.streak = 0; Q.wrong.push(it); if (Q.bks) Q.wrongBk.push(Q.bk); }
  var fb = $('#fb'); if (fb) fb.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✔ একদম ঠিক!' : '✘ ভুল হল') + '</b> ' + (extra || '') + '<div class="fbn">' + esc(it.n) + ' <small>' + esc(it.s) + '</small></div><p>' + esc(it.d) + '</p></div><button class="next" data-act="qnext">' + (Q.i + 1 < Q.qs.length ? 'পরের প্রশ্ন →' : 'ফলাফল দেখো →') + '</button>';
  var bar = panel.querySelector('.qbar'); if (bar) { bar.children[1].textContent = '✔ ' + Q.ok; bar.children[2].textContent = '🔥 ' + Q.streak; }
  if (ok && Q.kind !== 'pin' && Q.kind !== 'order' && Q.kind !== 'book' && Q.kind !== 'old') autoT = setTimeout(quizNext, 1400);
}
function quizNext() { if (!Q) return; clearTimeout(autoT); Q.i++; if (Q.i >= Q.qs.length) quizEnd(); else quizAsk(); }
function quizEnd() {
  clearInterval(tick); clearTimeout(autoT); var n = Q.qs.length, pc = Math.min(100, Math.round(Q.ok / n * 100)), secs = Math.round((Date.now() - Q.t0) / 1000);
  var best = store.get('best', {}), key = cur.id + ':' + Q.kind, rec = !Q.partial && (best[key] == null || pc > best[key]); if (rec) { best[key] = pc; store.set('best', best); }   // replays of a subset never count as a best score
  var medal = pc >= 90 ? '🏆' : pc >= 70 ? '🥈' : pc >= 50 ? '🥉' : '📚', wrong = Q.wrong, kind = Q.kind, again = Q.label === 'weak' ? 'weak' : kind;
  var flat = kind === 'order' ? wrong.reduce(function (a, s) { return a.concat(s.items); }, []) : wrong;
  lastQ = { kind: kind, wrong: flat, bks: Q.bks ? Q.wrongBk : null }; Q = null; render(); buildNav();
  var row = function (it) { return it.order ? '<div class="row on"><i style="background:#d63f3f"></i><div><b>' + esc(it.n) + '</b><small>' + esc(it.s) + '</small><p>' + esc(it.d) + '</p></div></div>'
    : '<div class="row" data-act="review" tabindex="0" role="button" data-i="' + it.i + '"><i style="background:#d63f3f"></i><div><b>' + esc(it.n) + '</b><small>' + esc(it.s) + '</small><p>' + esc(it.d) + '</p></div></div>'; };
  panel.innerHTML = '<div class="score"><div class="med">' + medal + '</div><div class="big">' + pc + '%</div><p>' + (n - wrong.length) + '/' + n + ' সঠিক · সময় ' + Math.floor(secs / 60) + ':' + ('0' + secs % 60).slice(-2) + (rec ? ' · <b>নতুন সেরা স্কোর!</b>' : '') + '</p>' +
    '<button class="btn" data-act="qstart" data-kind="' + again + '">আবার খেলো</button> ' + (flat.length >= (kind === 'order' ? 4 : 1) ? '<button class="btn ghost" data-act="qwrong">শুধু ভুলগুলো (' + wrong.length + ')</button> ' : '') + '<button class="btn ghost" data-act="study">পড়ায় ফেরো</button></div>' +
    (wrong.length ? '<h3>যেগুলো ভুল হয়েছে</h3><div class="wrongs">' + wrong.map(row).join('') + '</div>' : '<p class="intro" style="text-align:center">একটাও ভুল হয়নি — দারুণ! 🎉</p>');
}
function onItemClick(it) {
  if (mode === 'study') { select(it, false); return; }
  if (!Q || Q.lock || Q.kind !== 'find') return;
  var ok = it === Q.cur || it.n === Q.cur.n;
  if (ok) { ring(Q.cur, '#1f9d7a'); if (it.k === 'pt') it.L.setStyle({ fillColor: '#1f9d7a', radius: 9 }); tag(Q.cur, Q.cur.n, 'ok'); }
  else {
    if (it.k === 'pt') it.L.setStyle({ fillColor: '#d63f3f', radius: 9 }); else if (it.k === 'line') it.L.setStyle({ color: '#d63f3f', weight: 6 }); else it.L.setStyle({ fillColor: '#d63f3f', fillOpacity: 0.85 });
    tag(it, it.n, 'no'); ring(Q.cur, '#1f9d7a'); if (Q.cur.k === 'pt' && Q.cur.L) Q.cur.L.setStyle({ fillColor: '#1f9d7a', radius: 9 }); tag(Q.cur, Q.cur.n, 'ok');
    if (!map.getBounds().pad(-0.08).contains(Q.cur.a)) map.fitBounds(L.latLngBounds([it.a, Q.cur.a]).pad(0.4), { maxZoom: map.getZoom() });
  }
  answer(ok, ok ? '' : 'তুমি ক্লিক করেছ: <b>' + esc(it.n) + '</b>');
}
function onMapClick(e) {
  if (mode !== 'quiz' || !Q || Q.lock || Q.kind !== 'pin') return;
  var it = Q.cur, km = map.distance(e.latlng, it.a) / 1000, T = cur.world ? 400 : 100, ok = km <= T; Q.km += km;
  L.circleMarker(e.latlng, { radius: 6, color: '#fff', weight: 2, fillColor: ok ? '#1f9d7a' : '#d63f3f', fillOpacity: 1, interactive: false }).addTo(tmpG);
  L.circleMarker(it.a, { radius: 8, color: '#fff', weight: 2, fillColor: '#ffc53d', fillOpacity: 1, interactive: false }).addTo(tmpG);
  L.polyline([e.latlng, it.a], { color: '#111', weight: 2, dashArray: '5 6', interactive: false }).addTo(tmpG);
  L.circle(it.a, { radius: T * 1000, color: '#1f9d7a', weight: 1, fillOpacity: 0.07, interactive: false }).addTo(tmpG);
  tag(it, it.n, 'ok');
  map.fitBounds(L.latLngBounds([e.latlng, it.a]).pad(0.6), { maxZoom: cur.world ? 5 : 7 });
  answer(ok, 'দূরত্ব: <b>' + Math.round(km).toLocaleString() + ' কিমি</b> (সীমা ' + T + ' কিমি)');
}
function reveal() {
  if (Q.kind === 'order') { orderCheck(true); return; }
  var it = Q.cur; if (Q.kind === 'pin') { render(); L.circleMarker(it.a, { radius: 8, color: '#fff', weight: 2, fillColor: '#ffc53d', fillOpacity: 1 }).addTo(tmpG); } else ring(it, '#1f9d7a'); tag(it, it.n, 'ok'); focusOn(it, false); answer(false, '(উত্তর দেখানো হল)');
}

/* ---------------- chrome ---------------- */
function setMode(m) {
  mode = m; Q = null; clearInterval(tick); clearTimeout(autoT); sel = null; setLabels(m === 'study' && bst.esri);
  $('#mStudy').classList.toggle('on', m === 'study'); $('#mQuiz').classList.toggle('on', m === 'quiz');
  if (cur && cur.items) { render(); renderPanel(); }
}
function buildNav() {
  var best = store.get('best', {}), open = store.get('open', {}), subjOpen = store.get('subjOpen', {}), h = '', lastSub = '';
  GROUPS.forEach(function (g) {
    var ps = GEO.pages.filter(function (p) { return p.group === g[0]; }); if (!ps.length) return;
    if (g[3] !== lastSub) {
      if (lastSub) h += '</div>';
      lastSub = g[3]; var S = SUBJECTS.filter(function (s) { return s[0] === g[3]; })[0], sOpen = subjOpen[g[3]] !== false || (cur && cur.group && GROUPS.some(function (x) { return x[0] === cur.group && x[3] === g[3]; }));
      h += '<div class="sgrp' + (sOpen ? '' : ' shut') + '" data-s="' + g[3] + '"><button class="subj" aria-expanded="' + sOpen + '">' + (S ? S[1] : g[3]) + '<i>' + (sOpen ? '−' : '＋') + '</i></button>';
    }
    var isOpen = open[g[0]] || (cur && cur.group === g[0]);
    h += '<div class="grp' + (isOpen ? '' : ' shut') + '" data-g="' + g[0] + '"><button>' + g[1] + '<small>' + ps.length + '</small><i>' + (isOpen ? '−' : '＋') + '</i></button><div class="links">' + ps.map(function (p) {
      var b = Math.max(best[p.id + ':find'] || 0, best[p.id + ':name'] || 0, best[p.id + ':pin'] || 0, best[p.id + ':book'] || 0, best[p.id + ':old'] || 0);
      return '<a href="#/' + p.id + '" data-id="' + p.id + '"' + (cur === p ? ' class="on"' : '') + '><span class="ic">' + (p.icon || '•') + '</span><span class="tx">' + esc(p.title) + '<small>' + esc(p.bn || '') + '</small></span>' + (b ? '<span class="st">★' + b + '</span>' : '') + '<span class="ct">' + countOf(p) + '</span></a>';
    }).join('') + '</div></div>';
  });
  if (lastSub) h += '</div>';
  $('#nav').innerHTML = h;
  syncAll();
}
function syncAll() {   // one ＋/− toggle at the top of the sidebar: − when every heading is open
  var b = $('#navAll'); if (!b) return;
  var open = !$('#nav').querySelector('.sgrp.shut, .grp.shut');
  var ic = '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true"><path d="M5.5 2.5h7a1 1 0 0 1 1 1v7"/><rect x="2.5" y="5.5" width="8" height="8" rx="1"/><path d="M4.5 9.5h4"/>' + (open ? '' : '<path d="M6.5 7.5v4"/>') + '</svg>'; b.innerHTML = ic; b.dataset.on = open ? '1' : '0';
  b.title = open ? 'সব বন্ধ করো (Collapse all)' : 'সব খোলো (Expand all)'; b.setAttribute('aria-label', b.title);
}
function renderHome() {
  var pages = GEO.pages.filter(function (p) { return p.group !== 'mix'; }), tot = pages.reduce(function (s, p) { return s + (Number(countOf(p)) || 0); }, 0);
  var h = '<div class="hero"><img class="hlogo" src="assets/logo.svg" alt="GeoOnline"><h2>ম্যাপে পড়ো, <em>ম্যাপেই মনে রাখো।</em></h2><p>UPSC সিভিল সার্ভিস (IAS · IFS · IPS), ইন্ডিয়ান ফরেস্ট সার্ভিস, SSC CGL/CHSL ও রাজ্য PSC পরীক্ষার জন্য — ভূগোল, বিশ্ব অ্যাটলাস ও আন্তর্জাতিক সম্পর্ক, ইতিহাস এবং শিল্প-সংস্কৃতি, সব আলাদা আলাদা ইন্টারেক্টিভ ম্যাপে। প্রতিটা পাতায় কুইজ: ম্যাপে খুঁজে বের করো, নাম বলো, ফাঁকা ম্যাপে পিন বসাও, উত্তর→দক্ষিণ সাজাও।</p>' +
    '<div class="stats"><div><b>' + pages.length + '</b><small>আলাদা ম্যাপ-পাতা</small></div><div><b>' + tot.toLocaleString('en-IN') + '+</b><small>চিহ্নিত জায়গা</small></div><div><b>5</b><small>রকম কুইজ</small></div></div></div>';
  var lastSub = '';
  GROUPS.forEach(function (g) {
    var ps = GEO.pages.filter(function (p) { return p.group === g[0]; }); if (!ps.length) return;
    if (g[3] !== lastSub) { lastSub = g[3]; var S = SUBJECTS.filter(function (s) { return s[0] === g[3]; })[0]; if (S) h += '<div class="hsubj"><h2>' + S[1] + '</h2><small>' + S[2] + '</small></div>'; }
    var hs = store.get('hshut', {});
    h += '<div class="hsec' + (hs[g[0]] ? ' shut' : '') + '" data-h="' + g[0] + '"><h3><button class="hx" data-hx="' + g[0] + '">' + (hs[g[0]] ? '＋' : '−') + '</button>' + g[1] + '<small>' + g[2] + '</small></h3><div class="cards">' + ps.map(function (p) { return '<a href="#/' + p.id + '"><span class="ct">' + countOf(p) + '</span><span class="ic">' + (p.icon || '•') + '</span><b>' + esc(p.title) + '</b><small>' + esc(p.bn || '') + '</small><br><span class="qz" data-quiz="' + p.id + '">🎯 কুইজ খেলো →</span></a>'; }).join('') + '</div></div>';
  });
  h += '<div class="hfoot">বেসম্যাপ ও লেবেল: Esri · নদীর রেখা ও দেশের সীমানা: Natural Earth (public domain)। ঐতিহাসিক সাম্রাজ্যের সীমানা: historical-basemaps, A. Ourednik (GPL-3.0) — আনুমানিক। বেসম্যাপে দেখানো আন্তর্জাতিক সীমানা সরবরাহকারীর নিজস্ব — ভারতের সরকারি মানচিত্রের সঙ্গে মিলিয়ে নিও। অবস্থানগুলো পড়াশোনার সুবিধার জন্য চিহ্নিত; পরীক্ষার আগে NCERT / অ্যাটলাসের সঙ্গে মিলিয়ে নেওয়া ভালো।<div class="copy">© 2026 <b>Devnetra Consultancy</b> · <a href="https://github.com/DevnetraConsultancy/GeoOnline" target="_blank" rel="noopener">MIT License</a></div></div>';
  $('#home').innerHTML = h; $('#ptitle').textContent = 'GeoOnline'; $('#psub').textContent = 'UPSC ম্যাপ অ্যাটলাস ও কুইজ';
}
function go() {
  var m = location.hash.replace(/^#\/?/, '').split('/'), id = m[0], wantQuiz = m[1] === 'quiz', want = m[1] === 'at' ? decodeURIComponent(m[2] || '') : '';
  var p = GEO.byId[id] || null; cur = p; Q = null; clearInterval(tick); clearTimeout(autoT); mode = 'study'; hidden = {}; sel = null; setLabels(bst.esri);
  if (p && p.hideTypes) p.hideTypes.forEach(function (t) { hidden[t] = true; });
  document.body.classList.toggle('home', !p); document.body.classList.remove('nav');
  $('#mStudy').classList.add('on'); $('#mQuiz').classList.remove('on');
  buildNav();
  if (!p) { layerG.clearLayers(); tmpG.clearLayers(); bgG.clearLayers(); stG.clearLayers(); inG.clearLayers(); extG.clearLayers(); refEl.innerHTML = ''; renderHome(); return; }
  $('#ptitle').textContent = (p.icon ? p.icon + ' ' : '') + p.title; $('#psub').textContent = (p.bn || '') + ' · ' + countOf(p) + 'টি';
  layerG.clearLayers(); tmpG.clearLayers(); namesEl.innerHTML = '';
  map.invalidateSize(); fit(); loadBg(); drawExtent();
  var ready = function () {
    if (cur !== p) return;
    $('#psub').textContent = (p.bn || '') + ' · ' + p.items.length + 'টি'; buildNav();
    if (wantQuiz) setMode('quiz'); else { render(); renderPanel(); }
    if (want) { var it = p.items.filter(function (x) { return x.n === want; })[0]; if (it) setTimeout(function () { if (cur === p && mode === 'study') select(it, true); }, 200); }
  };
  if (p.remote && !p.built) {
    panel.innerHTML = '<div class="loading">🌍 ম্যাপ ডেটা লোড হচ্ছে…</div>';
    buildRemote(p).then(ready).catch(function () { if (cur === p) panel.innerHTML = '<div class="err"><b>ডেটা লোড করা গেল না।</b><br>এই পাতার রেখা/সীমানা ইন্টারনেট থেকে আসে (Natural Earth)। ইন্টারনেট সংযোগ দেখে পাতাটা রিফ্রেশ করো।</div>'; });
  } else { norm(p); ready(); }
}
function buildCensus() {
  var CE = GEO.CENSUS, st = GEO.byId['in-states']; if (!CE || !st) return;
  var PAL = { sexratio: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#91003f'], csr: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#91003f'],
    literacy: ['#f7fcf0', '#ccebc5', '#a8ddb5', '#7bccc4', '#2b8cbe', '#084081'], urban: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#756bb1', '#54278f'] };
  var DEF = ['#fff5eb', '#fdd0a2', '#fdae6b', '#fd8d3c', '#e6550d', '#a63603'];
  var ICON = { pop: '👥', density: '🏙', sexratio: '⚖', csr: '👶', literacy: '📚', urban: '🏢', growth: '📈', st: '🏕', sc: '🧾' };
  var BN = { pop: 'জনসংখ্যা', density: 'জনঘনত্ব', sexratio: 'লিঙ্গ অনুপাত', csr: 'শিশু লিঙ্গ অনুপাত (০–৬)', literacy: 'সাক্ষরতার হার', urban: 'নগরায়ণ', growth: 'দশকীয় বৃদ্ধি ২০০১–১১', st: 'তফসিলি উপজাতি %', sc: 'তফসিলি জাতি %' };
  Object.keys(CE.metrics).forEach(function (m) {
    var M = CE.metrics[m], pal = PAL[m] || DEF, b = M.bins, types = {}, f = function (n) { return Number(n).toLocaleString('en-IN'); };
    for (var i = 0; i <= b.length; i++) types['c' + i] = [(i === 0 ? '< ' + f(b[0]) : i === b.length ? '≥ ' + f(b[i - 1]) : f(b[i - 1]) + ' – ' + f(b[i])), pal[i]];
    types.na = ['No data', '#cccccc'];
    GEO.add({ id: 'cen-' + m, group: 'in-census', title: M.label, bn: BN[m] || M.label, icon: ICON[m] || '📊', world: false,
      intro: 'রাজ্যভিত্তিক মানচিত্র (Census 2011) — রং যত গাঢ়, মান তত বেশি। রাজ্যে ক্লিক করলে মান ও র‍্যাঙ্ক দেখাবে। ভারত: ' + f(CE.india[m]) + (M.unit === '%' ? '%' : '') + '। উৎস: ' + (CE._meta && CE._meta.src || 'Census of India 2011') + '।',
      types: types, remote: { src: 'states', key: 'states', metric: m, info: st.remote.info, alias: st.remote.alias, n: 36 } });
  });
}
function buildMix() {
  var isCul = function (p) { return /^(cul-|his)/.test(p.group); }, isBk = function (p) { return /^bk-/.test(p.group); };
  [['mix-in', 'India Geography Mega Challenge', 'পুরো ভারতের ভূগোল — সব বিষয় মিশিয়ে', false, function (p) { return !p.world && !isCul(p) && !isBk(p); }],
   ['mix-w', 'World Geography Mega Challenge', 'পুরো বিশ্বের ভূগোল — সব বিষয় মিশিয়ে', true, function (p) { return p.world && !isCul(p) && !isBk(p); }],
   ['mix-cul', 'Art, Culture & History Mega Challenge', 'শিল্প-সংস্কৃতি ও ইতিহাস — সব মিশিয়ে', false, isCul]].forEach(function (m) {
    var pts = [], seen = {};
    GEO.pages.forEach(function (p) { if (p.group === 'mix' || !m[4](p)) return; p.pts.forEach(function (a) {
      var k = String(a[0]).toLowerCase().replace(/\(.*?\)|[^a-z]/g, '') + '|' + Math.round(a[1] * 10) + '|' + Math.round(a[2] * 10);
      if (seen[k]) return; seen[k] = 1; pts.push([a[0], a[1], a[2], a[3], (a[4] || '') + ' — [' + p.title + ']']); }); });
    if (pts.length) GEO.add({ id: m[0], group: 'mix', title: m[1], bn: m[2], icon: '🎲', world: m[3], color: '#7b2cbf', intro: 'সব পাতার জায়গা একসঙ্গে — আসল পরীক্ষার মতো এলোমেলো প্রশ্ন। কুইজ মোডে গিয়ে খেলো।', pts: pts });
  });
}
function gsearch(q) {
  var box = $('#gres'); q = q.trim().toLowerCase();
  if (q.length < 2) { box.classList.remove('on'); return; }
  var out = [];
  GEO.pages.forEach(function (p) {
    if (p.group === 'mix' || out.length > 40) return; if (!p.remote || p.built) norm(p);
    var list = p.items;
    if (!list) {   // line/polygon page not opened yet: search its names without building the geometry
      var R = p.remote || {}; list = [];
      (p.pts || []).forEach(function (a) { list.push({ n: a[0], s: a[3] || '', p: p }); });
      (p.lines || []).forEach(function (a) { list.push({ n: a[0], s: a[2] || '', p: p }); });
      (R.list || []).forEach(function (r) { list.push({ n: r[1], s: r[2] || '', p: p }); });
      if (R.info) Object.keys(R.info).forEach(function (k) { list.push({ n: R.info[k][0], s: R.info[k][1] || '', p: p }); });
    }
    list.forEach(function (it) { if (out.length <= 40 && String(it.n).toLowerCase().indexOf(q) >= 0) out.push(it); });
  });
  box.innerHTML = out.map(function (it) { return '<a href="#/' + it.p.id + '/at/' + encodeURIComponent(it.n) + '"><b>' + esc(it.n) + '</b><small>' + esc(it.p.title) + ' · ' + esc(it.s) + '</small></a>'; }).join('') || '<a>কিছু পাওয়া যায়নি</a>';
  box.classList.add('on');
}

/* ---------------- events ---------------- */
panel.addEventListener('click', function (e) {
  var t = e.target.closest('[data-act]'); if (!t) return; var a = t.dataset.act;
  if (a === 'sel') select(cur.items[+t.dataset.i], true);
  else if (a === 'chip') { hidden[t.dataset.t] = !hidden[t.dataset.t]; sel = null; render(); renderPanel(); }
  else if (a === 'ext') { extSel[cur.id] = +t.dataset.i; drawExtent(); var ex = panel.querySelector('.ext'); if (ex) ex.outerHTML = extHtml(); }
  else if (a === 'fold') { var sec = t.parentNode, shut = sec.classList.toggle('shut'), fs = store.get('fold', {}); fs[sec.dataset.fold] = !shut; store.set('fold', fs); t.querySelector('i').textContent = shut ? '＋' : '−'; t.setAttribute('aria-expanded', !shut); }
  else if (a === 'dclose') { var dc = $('#dcard'); if (dc) dc.remove(); }
  else if (a === 'qn') { qCount = +t.dataset.n; quizSetup(); }
  else if (a === 'qstart') quizStart(t.dataset.kind);
  else if (a === 'qwrong') { if (lastQ) quizStart(lastQ.kind, lastQ.wrong, lastQ.bks); }
  else if (a === 'qnext') quizNext();
  else if (a === 'ord') orderPick(+t.dataset.i);
  else if (a === 'ordreset') { if (Q && !Q.lock) { Q.pick = []; quizPanel(); } }
  else if (a === 'qreset') { var s = store.get('stat', {}); delete s[cur.id]; store.set('stat', s); quizSetup(); }
  else if (a === 'qskip') { if (Q && !Q.lock) reveal(); }
  else if (a === 'qhint') { var hEl = $('#hint') || panel.querySelector('.hint'); if (hEl && Q) { var ty = Q.cur.p.types && Q.cur.p.types[Q.cur.t] ? Q.cur.p.types[Q.cur.t][0] : ''; hEl.textContent = '💡 ' + ([Q.kind === 'name' ? '' : Q.cur.s, ty].filter(Boolean).join(' · ') || 'কোনো ইঙ্গিত নেই'); } }
  else if (a === 'qquit') { var done = Q ? Q.i + (Q.lock ? 1 : 0) : 0; if (done > 0) { Q.qs = Q.qs.slice(0, done); quizEnd(); } else setMode('quiz'); }
  else if (a === 'study') setMode('study');
  else if (a === 'print') printMap(t.dataset.k);
  else if (a === 'review') { var it = cur.items[+t.dataset.i]; setMode('study'); select(it, true); }
  else if (a === 'opt') {
    if (!Q || Q.lock) return; var o = Q.opts[+t.dataset.i], ok = o === Q.cur;
    var bs = panel.querySelectorAll('.opts button'); for (var i = 0; i < bs.length; i++) { if (Q.opts[i] === Q.cur) bs[i].classList.add('ok'); else if (i === +t.dataset.i) bs[i].classList.add('no'); }
    if (Q.kind === 'book' || Q.kind === 'old') { ring(Q.cur, '#1f9d7a'); focusOn(Q.cur, true); }
    tag(Q.cur, Q.cur.n, ok ? 'ok' : 'no'); answer(ok, (ok ? '' : 'তুমি বেছেছ: <b>' + esc(o.n) + '</b>') + (Q.bk && Q.bk.sum ? '<p class="bksum">📖 ' + esc(Q.bk.sum) + '</p>' : '') + (Q.bk && Q.bk.old && Q.cur.dt ? '<p class="bksum">🏺 ' + esc(Q.cur.dt.old) + '</p>' : ''));
  }
});
document.addEventListener('keydown', function (e) {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.getAttribute && e.target.getAttribute('role') === 'button' && e.target.tagName === 'DIV') { e.preventDefault(); e.target.click(); return; }
  if (!Q || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
  if (Q.lock && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); quizNext(); }
  else if (!Q.lock && (Q.kind === 'name' || Q.kind === 'order' || Q.kind === 'book' || Q.kind === 'old') && e.key >= '1' && e.key <= '4') { var b = panel.querySelectorAll('.opts button')[+e.key - 1]; if (b) b.click(); }
});
$('#navAll').addEventListener('click', function () {
  var on = this.dataset.on !== '1', o = {}, so = {};
  GROUPS.forEach(function (g) { o[g[0]] = on; so[g[3]] = on; }); store.set('open', o); store.set('subjOpen', so); buildNav();
});
$('#nav').addEventListener('click', function () { setTimeout(syncAll, 0); });
$('#nav').addEventListener('click', function (e) {
  var sb = e.target.closest('.sgrp>.subj');
  if (sb) { var sg = sb.parentNode, so2 = store.get('subjOpen', {}), shut = sg.classList.toggle('shut'); so2[sg.dataset.s] = !shut; store.set('subjOpen', so2); sb.querySelector('i').textContent = shut ? '＋' : '−'; sb.setAttribute('aria-expanded', !shut); return; }
  var b = e.target.closest('.grp>button'); if (!b) return; var g = b.parentNode, s = store.get('open', {}), sh = g.classList.toggle('shut'); s[g.dataset.g] = !sh; store.set('open', s); b.querySelector('i').textContent = sh ? '＋' : '−';
});
$('#home').addEventListener('click', function (e) {
  var hx = e.target.closest('[data-hx]');
  if (hx) { var sec = hx.closest('.hsec'), st = store.get('hshut', {}), shut = sec.classList.toggle('shut'); st[hx.dataset.hx] = shut; store.set('hshut', st); hx.textContent = shut ? '＋' : '−'; return; } var q = e.target.closest('[data-quiz]'); if (q) { e.preventDefault(); location.hash = '#/' + q.dataset.quiz + '/quiz'; } });
$('#mStudy').onclick = function () { if (cur) setMode('study'); };
$('#mQuiz').onclick = function () { if (cur) setMode('quiz'); };
$('#tNames').onchange = function (e) { showNames = e.target.checked; drawNames(); };
$('#tAdmin').checked = showAdmin; $('#tCities').checked = showCities;
$('#tAdmin').onchange = function (e) { showAdmin = e.target.checked; store.set('showAdmin', showAdmin); drawNames(); };
$('#tCities').onchange = function (e) { showCities = e.target.checked; store.set('showCities', showCities); drawNames(); };
initBoundsUI();
var closeNav = function () { document.body.classList.remove('nav'); };
$('#burger').onclick = function () { document.body.classList.toggle('nav'); };
$('#sideClose').onclick = closeNav;
$('#scrim').onclick = closeNav;
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('nav')) closeNav(); });
$('#nav').addEventListener('click', function (e) { if (e.target.closest('.links a')) closeNav(); });   // picking a page closes the menu
(function () {   // swipe left on the menu to close it
  var x0 = null, y0 = 0, side = $('#side');
  side.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  side.addEventListener('touchend', function (e) {
    if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0, dy = Math.abs(e.changedTouches[0].clientY - y0); x0 = null;
    if (dx < -60 && dy < 50) closeNav();
  }, { passive: true });
})();
document.getElementById('map').addEventListener('click', function (e) {
  var a = e.target.closest('[data-pb]'); if (!a || !sel) return; e.preventDefault(); e.stopPropagation();
  var i = +a.dataset.pb; showDetail(sel, i >= 0 ? i : null);
  if (window.innerWidth <= 900) map.closePopup();
});
$('#gq').addEventListener('input', function (e) { gsearch(e.target.value); });
$('#gres').addEventListener('click', function () { $('#gres').classList.remove('on'); $('#gq').value = ''; });
document.addEventListener('click', function (e) { if (!e.target.closest('.gsearch')) $('#gres').classList.remove('on'); });
if (!window.L) { document.body.classList.remove('home'); panel.innerHTML = '<div class="err"><b>ম্যাপ লাইব্রেরি লোড হয়নি।</b><br>ইন্টারনেট সংযোগ চালু করে পাতাটা রিফ্রেশ করো।</div>'; return; }
$('#bsel').innerHTML = Object.keys(BASES).map(function (k) { return '<option value="' + k + '">' + BASES[k][0] + '</option>'; }).join('');
$('#bsel').onchange = function (e) { setBase(e.target.value); };
buildCensus(); buildMix(); initMap();
window.addEventListener('hashchange', go);
window.GEOAPP = { map: function () { return map; }, load: loadRemote, cur: function () { return cur; }, Q: function () { return Q; } };
go();
})();
