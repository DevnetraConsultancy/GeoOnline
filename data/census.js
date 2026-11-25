/* Census of India 2011 — state / UT indicators for choropleth maps.
   Generated from the Primary Census Abstract (final, district level, rolled up to 2019 state/UT boundaries).
   Ratios are recomputed from counts: literacy = literates / population aged 7+; urban = urban pop / total;
   sex ratio & child sex ratio = females per 1000 males (all ages / 0–6). Growth = official Table A-2 (2001–11). */
GEO.CENSUS = {
  _meta:{
    src:'Census of India 2011 — Primary Census Abstract (final), district level, ORGI; decadal growth from Table A-2 "Decadal variation in population 1901–2011" (ORGI).',
    note:'Andhra Pradesh & Telangana values are for the post-2014 split, from Telangana Directorate of Economics & Statistics ("Telangana at a Glance", Census 2011 tables: pop 3,50,03,674, area 1,12,077 km², sex ratio 988, CSR 932, literacy 66.54%) — this includes the 7 Polavaram mandals moved from Khammam to AP in 2014; Andhra Pradesh = undivided AP (PCA) minus Telangana. Growth 2001–11 (AP 9.21%, TG 13.58%) is on the 13/10-district basis used by both state governments. Jammu & Kashmir vs Ladakh is split from the 2011 district figures (Ladakh = Leh + Kargil districts; J&K = remaining 20 districts); their 2001 bases for growth come from the J&K Table A-2. DNH and Daman & Diu are summed (ratios recomputed from pooled counts). Densities use census areas (J&K/Ladakh exclude PoK, Gilgit-Baltistan, Aksai Chin & Shaksgam). Manipur includes the Mao-Maram, Paomata & Purul sub-divisions as in the final PCA total.',
    prov:'Provisional Population Totals (March 2011) gave literacy 74.04%, sex ratio 940, child sex ratio 914 and urban 31.16% for India; the final PCA figures used here are 72.98%, 943, 918 and 31.14%.'
  },
  metrics:{
    pop:{label:'Population (2011)', unit:'', bins:[1000000, 5000000, 20000000, 50000000, 80000000]},
    density:{label:'Population density (per km²)', unit:'/km²', bins:[100, 200, 300, 500, 1000]},
    sexratio:{label:'Sex ratio (females per 1000 males)', unit:'', bins:[900, 930, 950, 975, 1000]},
    csr:{label:'Child sex ratio (0–6)', unit:'', bins:[880, 900, 930, 950, 965]},
    literacy:{label:'Literacy rate (%)', unit:'%', bins:[67, 72, 76, 80, 85]},
    urban:{label:'Urban population (%)', unit:'%', bins:[20, 25, 30, 40, 50]},
    growth:{label:'Decadal growth 2001–11 (%)', unit:'%', bins:[10, 15, 18, 21, 25]},
    st:{label:'Scheduled Tribe population (%)', unit:'%', bins:[1, 5, 10, 20, 50]},
    sc:{label:'Scheduled Caste population (%)', unit:'%', bins:[2, 8, 15, 17, 20]}
  },
  india:{pop:1210854977, density:382, sexratio:943, csr:918, literacy:72.98, urban:31.14, growth:17.7, st:8.63, sc:16.63},
  states:{
    andhrapradesh:{pop:49577103, density:304, sexratio:997, csr:944, literacy:67.35, urban:29.47, growth:9.21, st:5.53, sc:17.08},
    arunachalpradesh:{pop:1383727, density:17, sexratio:938, csr:972, literacy:65.38, urban:22.94, growth:26.03, st:68.79, sc:0},
    assam:{pop:31205576, density:398, sexratio:958, csr:962, literacy:72.19, urban:14.1, growth:17.07, st:12.45, sc:7.15},
    bihar:{pop:104099452, density:1106, sexratio:918, csr:935, literacy:61.8, urban:11.29, growth:25.42, st:1.28, sc:15.91},
    chhattisgarh:{pop:25545198, density:189, sexratio:991, csr:969, literacy:70.28, urban:23.24, growth:22.61, st:30.62, sc:12.82},
    goa:{pop:1458545, density:394, sexratio:973, csr:942, literacy:88.7, urban:62.17, growth:8.23, st:10.23, sc:1.74},
    gujarat:{pop:60439692, density:308, sexratio:919, csr:890, literacy:78.03, urban:42.6, growth:19.28, st:14.75, sc:6.74},
    haryana:{pop:25351462, density:573, sexratio:879, csr:834, literacy:75.55, urban:34.88, growth:19.9, st:0, sc:20.17},
    himachalpradesh:{pop:6864602, density:123, sexratio:972, csr:909, literacy:82.8, urban:10.03, growth:12.94, st:5.71, sc:25.19},
    jharkhand:{pop:32988134, density:414, sexratio:948, csr:948, literacy:66.41, urban:24.05, growth:22.42, st:26.21, sc:12.08},
    karnataka:{pop:61095297, density:319, sexratio:973, csr:948, literacy:75.36, urban:38.67, growth:15.6, st:6.95, sc:17.15},
    kerala:{pop:33406061, density:860, sexratio:1084, csr:964, literacy:94, urban:47.7, growth:4.91, st:1.45, sc:9.1},
    madhyapradesh:{pop:72626809, density:236, sexratio:931, csr:918, literacy:69.32, urban:27.63, growth:20.35, st:21.09, sc:15.62},
    maharashtra:{pop:112374333, density:365, sexratio:929, csr:894, literacy:82.34, urban:45.22, growth:15.99, st:9.35, sc:11.81},
    manipur:{pop:2855794, density:128, sexratio:985, csr:930, literacy:76.94, urban:29.21, growth:24.5, st:40.88, sc:3.41},
    meghalaya:{pop:2966889, density:132, sexratio:989, csr:970, literacy:74.43, urban:20.07, growth:27.95, st:86.15, sc:0.58},
    mizoram:{pop:1097206, density:52, sexratio:976, csr:970, literacy:91.33, urban:52.11, growth:23.48, st:94.43, sc:0.11},
    nagaland:{pop:1978502, density:119, sexratio:931, csr:943, literacy:79.55, urban:28.86, growth:-0.58, st:86.48, sc:0},
    odisha:{pop:41974218, density:270, sexratio:979, csr:941, literacy:72.87, urban:16.69, growth:14.05, st:22.85, sc:17.13},
    punjab:{pop:27743338, density:551, sexratio:895, csr:846, literacy:75.84, urban:37.48, growth:13.89, st:0, sc:31.94},
    rajasthan:{pop:68548437, density:200, sexratio:928, csr:888, literacy:66.11, urban:24.87, growth:21.31, st:13.48, sc:17.83},
    sikkim:{pop:610577, density:86, sexratio:890, csr:957, literacy:81.42, urban:25.15, growth:12.89, st:33.8, sc:4.63},
    tamilnadu:{pop:72147030, density:555, sexratio:996, csr:943, literacy:80.09, urban:48.4, growth:15.61, st:1.1, sc:20.01},
    telangana:{pop:35003674, density:312, sexratio:988, csr:932, literacy:66.54, urban:38.88, growth:13.58, st:9.08, sc:15.45},
    tripura:{pop:3673917, density:350, sexratio:960, csr:957, literacy:87.22, urban:26.17, growth:14.84, st:31.76, sc:17.83},
    uttarpradesh:{pop:199812341, density:829, sexratio:912, csr:902, literacy:67.68, urban:22.27, growth:20.23, st:0.57, sc:20.7},
    uttarakhand:{pop:10086292, density:189, sexratio:963, csr:890, literacy:78.82, urban:30.23, growth:18.81, st:2.89, sc:18.76},
    westbengal:{pop:91276115, density:1028, sexratio:950, csr:956, literacy:76.26, urban:31.87, growth:13.84, st:5.8, sc:23.51},
    andamanandnicobarisland:{pop:380581, density:46, sexratio:876, csr:968, literacy:86.63, urban:37.7, growth:6.86, st:7.5, sc:0},
    chandigarh:{pop:1055450, density:9258, sexratio:818, csr:880, literacy:86.05, urban:97.25, growth:17.19, st:0, sc:18.86},
    dnhdd:{pop:586956, density:975, sexratio:706, csr:918, literacy:80.85, urban:58.51, growth:54.99, st:33.04, sc:2.1},
    nctofdelhi:{pop:16787941, density:11320, sexratio:868, csr:871, literacy:86.21, urban:97.5, growth:21.21, st:0, sc:16.75},
    jammuandkashmir:{pop:12267013, density:290, sexratio:892, csr:860, literacy:67, urban:27.48, growth:23.82, st:10.39, sc:7.54},
    ladakh:{pop:274289, density:4.6, sexratio:750, csr:966, literacy:74.28, urban:22.61, growth:15.96, st:79.55, sc:0.18},
    lakshadweep:{pop:64473, density:2149, sexratio:946, csr:911, literacy:91.85, urban:78.07, growth:6.3, st:94.8, sc:0},
    puducherry:{pop:1247953, density:2547, sexratio:1037, csr:967, literacy:85.85, urban:68.33, growth:28.08, st:0, sc:15.73}
  }
};
