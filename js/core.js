// Global registry — every data file calls GEO.add({...})
window.GEO = {
  pages: [], byId: {},
  add: function (p) {
    if (!p || !p.id || this.byId[p.id]) return;
    p.pts = p.pts || []; p.lines = p.lines || [];
    this.pages.push(p); this.byId[p.id] = p;
  }
};
