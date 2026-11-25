// International groupings — member maps (membership as of Nov 2026, verified on Wikipedia / official sites).
// Each grouping: GEO.GROUPINGS[key] = { members, partners, observers, applicants, dots, notes } + one page (remote src 'grouping').
// Country names = Natural Earth NAME values (see country-names list). Tiny / non-polygon members go in `dots` as [lat, lng].
window.GEO.GROUPINGS = window.GEO.GROUPINGS || {};

(function () {
  var DEF_TYPES = { members: ['Member', '#c0392b'], partners: ['Partner country', '#e67e22'], observers: ['Observer', '#2980b9'], applicants: ['Applicant / invited', '#95a5a6'] };
  function grp(key, def, page) {
    def.members = def.members || []; def.partners = def.partners || []; def.observers = def.observers || [];
    def.applicants = def.applicants || []; def.dots = def.dots || {}; def.notes = def.notes || {};
    GEO.GROUPINGS[key] = def;
    var types = {}; Object.keys(DEF_TYPES).forEach(function (k) { if (def[k].length) types[k] = (page.types && page.types[k]) || DEF_TYPES[k]; });
    if (page.types) Object.keys(page.types).forEach(function (k) { if (!types[k]) types[k] = page.types[k]; });
    GEO.add({ id: 'grp-' + key, group: 'ir-groups', title: page.title, bn: page.bn, icon: page.icon || '🤝', world: true,
      intro: page.intro, types: types, remote: { src: 'grouping', key: 'countries', g: key }, pts: page.pts || [] });
  }

  /* ======================= UN SECURITY COUNCIL ======================= */
  grp('unsc', {
    members: ['United States of America', 'United Kingdom', 'France', 'Russia', 'China'],
    partners: ['Denmark', 'Greece', 'Pakistan', 'Panama', 'Somalia', 'Bahrain', 'Colombia', 'Dem. Rep. Congo', 'Latvia', 'Liberia'],
    applicants: ['Zimbabwe', 'Kyrgyzstan', 'Trinidad and Tobago', 'Austria', 'Portugal'],
    notes: {
      'United States of America': 'Permanent member (P5), veto power.', 'United Kingdom': 'Permanent member (P5), veto power.', 'France': 'Permanent member (P5), veto power.',
      'Russia': 'Permanent member (P5); took the USSR seat in Dec 1991.', 'China': 'Permanent member (P5); PRC replaced ROC in 1971 (UNGA Res. 2758).',
      'Denmark': 'Elected member, term 2025–26.', 'Greece': 'Elected member, term 2025–26.', 'Pakistan': 'Elected member, term 2025–26 (its 8th term).',
      'Panama': 'Elected member, term 2025–26.', 'Somalia': 'Elected member, term 2025–26.',
      'Bahrain': 'Elected member, term 2026–27 (first time).', 'Colombia': 'Elected member, term 2026–27.', 'Dem. Rep. Congo': 'Elected member, term 2026–27.',
      'Latvia': 'Elected member, term 2026–27 (first time).', 'Liberia': 'Elected member, term 2026–27.',
      'Zimbabwe': 'Elected June 2026 for 2027–28 (African Group).', 'Kyrgyzstan': 'Elected June 2026 for 2027–28 (Asia-Pacific).',
      'Trinidad and Tobago': 'Elected June 2026 for 2027–28 (GRULAC).', 'Austria': 'Elected June 2026 for 2027–28 (WEOG).', 'Portugal': 'Elected June 2026 for 2027–28 (WEOG).'
    }
  }, {
    title: 'UN Security Council (2026)', bn: 'জাতিসংঘ নিরাপত্তা পরিষদ (২০২৬)', icon: '🇺🇳',
    types: { members: ['Permanent member (P5)', '#c0392b'], partners: ['Elected member 2026', '#e67e22'], applicants: ['Elected for 2027–28', '#95a5a6'] },
    intro: '২০২৬ সালে নিরাপত্তা পরিষদের ১৫ সদস্য: ৫ স্থায়ী (P5, ভেটো ক্ষমতা) + ১০ নির্বাচিত (২ বছরের মেয়াদ, প্রতি বছর ৫টি করে বদলায়)। ভারত ৮ বার অস্থায়ী সদস্য ছিল (শেষবার ২০২১–২২) এবং ২০২৮–২৯ মেয়াদের প্রার্থী; G4 (ভারত, ব্রাজিল, জার্মানি, জাপান) স্থায়ী আসনের দাবিদার। পরীক্ষার টিপ: অস্থায়ী আসন ১৯৬৫ সালে ৬ থেকে বেড়ে ১০ হয়।'
  });

  /* ======================= G7 ======================= */
  grp('g7', {
    members: ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States of America'],
    notes: { 'France': 'G7 presidency 2026 — leaders\' summit at Évian-les-Bains, 15–17 June 2026 (India, Brazil, South Korea, Egypt, Kenya invited as partners).', 'Canada': '2025 presidency (Kananaskis summit).', 'Italy': '2024 presidency (Apulia summit; India attended as outreach).' }
  }, {
    title: 'G7', bn: 'জি-৭ (গ্রুপ অফ সেভেন)', icon: '💼',
    intro: '১৯৭৫ সালে ফ্রান্সের র‌্যাম্বুইয়েতে G6 হিসেবে শুরু, ১৯৭৬-এ কানাডা যোগ দিয়ে G7; রাশিয়া ১৯৯৭–২০১৪ G8-এ ছিল (ক্রিমিয়ার পর বহিষ্কৃত)। EU "অগণিত সদস্য" হিসেবে অংশ নেয়; কোনো সচিবালয় নেই, সভাপতিত্ব ঘোরে। ভারত নিয়মিত আউটরিচ অতিথি; ২০২৬-এ সভাপতি ফ্রান্স (এভিয়াঁ শীর্ষ সম্মেলন)।'
  });

  /* ======================= G20 ======================= */
  grp('g20', {
    members: ['Argentina', 'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India', 'Indonesia', 'Italy', 'Japan', 'Mexico', 'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Turkey', 'United Kingdom', 'United States of America'],
    applicants: ['Poland'],
    notes: {
      'United States of America': 'G20 presidency 2026 — leaders\' summit at Trump National Doral, near Miami (14–15 Dec 2026).',
      'South Africa': 'Member; hosted 2025 Johannesburg summit (first in Africa). The US did not invite it to any 2026 G20 meeting — first exclusion of a member.',
      'India': 'Hosted 2023 New Delhi summit; African Union admitted as permanent member under India\'s presidency.',
      'Poland': 'Not a member — invited by the US as a guest for the 2026 presidency.',
      'United Kingdom': 'Will host the 2027 G20 (Manchester).'
    }
  }, {
    title: 'G20', bn: 'জি-২০', icon: '🌐',
    intro: '১৯৯৯ সালে (এশীয় আর্থিক সংকটের পর) অর্থমন্ত্রীদের ফোরাম, ২০০৮ থেকে রাষ্ট্রপ্রধান স্তরের শীর্ষ সম্মেলন; ১৯ দেশ + EU + আফ্রিকান ইউনিয়ন (২০২৩ নয়াদিল্লিতে যুক্ত)। স্থায়ী সচিবালয় নেই — ট্রয়কা ব্যবস্থা। ২০২৬-এ সভাপতি আমেরিকা (মায়ামি), যা দক্ষিণ আফ্রিকাকে আমন্ত্রণ জানায়নি; ২০২৭-এ ব্রিটেন।'
  });

  /* ======================= BRICS ======================= */
  grp('brics', {
    members: ['Brazil', 'Russia', 'India', 'China', 'South Africa', 'Egypt', 'Ethiopia', 'Iran', 'United Arab Emirates', 'Indonesia'],
    partners: ['Algeria', 'Belarus', 'Bolivia', 'Cuba', 'Kazakhstan', 'Malaysia', 'Nigeria', 'Thailand', 'Turkey', 'Uganda', 'Uzbekistan', 'Vietnam'],
    applicants: ['Saudi Arabia'],
    notes: {
      'India': 'BRICS chair 2026 — 18th summit, New Delhi (Sept 2026).', 'South Africa': 'Joined 2010/11 (BRIC → BRICS).',
      'Egypt': 'Joined 1 Jan 2024.', 'Ethiopia': 'Joined 1 Jan 2024.', 'Iran': 'Joined 1 Jan 2024.', 'United Arab Emirates': 'Joined 1 Jan 2024.',
      'Indonesia': 'Joined as full member 6 Jan 2025.', 'Saudi Arabia': 'Invited 2023 (from 1 Jan 2024); has not clearly confirmed — status ambiguous.',
      'Nigeria': 'Partner since Jan 2025.', 'Vietnam': 'Partner since June 2025.', 'Turkey': 'Listed as partner (Kazan 2024 list); acceptance unclear.', 'Algeria': 'Listed as partner (Kazan 2024 list).'
    }
  }, {
    title: 'BRICS', bn: 'ব্রিকস', icon: '🤝',
    pts: [['New Development Bank HQ — Shanghai', 31.2286, 121.4747, 'China', 'NDB set up at Fortaleza summit 2014; HQ Shanghai, regional centre in Gujarat (GIFT City).', 'hq', { more: 'New Development Bank ("BRICS Bank") agreed at the 6th summit, Fortaleza (2014); began 2015. First president was India\'s K.V. Kamath. Members include Bangladesh, UAE, Egypt, Algeria beyond BRICS. Pin: Shanghai city centre (Wikipedia).' }]],
    types: { hq: ['Headquarters', '#2c3e50'] },
    intro: '২০০৬ সালে BRIC (নিউ ইয়র্কে বিদেশমন্ত্রী বৈঠক), প্রথম শীর্ষ সম্মেলন ইয়েকাতেরিনবার্গ ২০০৯; ২০১০/১১-এ দক্ষিণ আফ্রিকা যুক্ত। ২০২৪-এ মিশর, ইথিওপিয়া, ইরান, UAE ও ২০২৫-এ ইন্দোনেশিয়া যোগ দেয় — এখন ১০ সদস্য + ১২ "পার্টনার কান্ট্রি"। ২০২৬-এ ভারত সভাপতি (নয়াদিল্লি শীর্ষ সম্মেলন)। টিপ: NDB-এর সদর দপ্তর সাংহাই।'
  });

  /* ======================= SCO ======================= */
  grp('sco', {
    members: ['China', 'Russia', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Uzbekistan', 'India', 'Pakistan', 'Iran', 'Belarus'],
    observers: ['Afghanistan', 'Mongolia'],
    partners: ['Armenia', 'Azerbaijan', 'Bahrain', 'Cambodia', 'Egypt', 'Kuwait', 'Laos', 'Maldives', 'Myanmar', 'Nepal', 'Qatar', 'Saudi Arabia', 'Sri Lanka', 'Turkey', 'United Arab Emirates'],
    notes: {
      'India': 'Full member since 2017 (Astana summit); hosted 2023 virtual summit; refused to sign 2025 defence ministers\' statement that omitted Pahalgam.',
      'Pakistan': 'Full member since 2017.', 'Iran': 'Full member since July 2023.', 'Belarus': 'Full member since July 2024 (10th).',
      'Uzbekistan': 'Joined 2001 (Shanghai Five → SCO). RATS (counter-terror body) is in Tashkent.',
      'Kyrgyzstan': 'Chair 2025–26 — summit held in Bishkek (2026).', 'China': 'Secretariat in Beijing; 2025 summit in Tianjin.',
      'Afghanistan': 'Observer — inactive since 2021.', 'Laos': 'Dialogue partner since 2025 (Tianjin).'
    }
  }, {
    title: 'Shanghai Cooperation Organisation (SCO)', bn: 'সাংহাই সহযোগিতা সংস্থা (এসসিও)', icon: '🏯',
    intro: '১৯৯৬-এর "সাংহাই ফাইভ" থেকে ২০০১-এ SCO (উজবেকিস্তান যুক্ত); সচিবালয় বেইজিং, আঞ্চলিক সন্ত্রাসবিরোধী কাঠামো (RATS) তাশকন্দে। ভারত ও পাকিস্তান ২০১৭-এ, ইরান ২০২৩-এ, বেলারুশ ২০২৪-এ পূর্ণ সদস্য — এখন ১০ সদস্য, ২ পর্যবেক্ষক, ১৫ ডায়লগ পার্টনার। ২০২৬-এর শীর্ষ সম্মেলন বিশকেকে; ২০২৫-এ পর্যবেক্ষক ও ডায়লগ পার্টনারকে এক "SCO Partner" মর্যাদায় মেলানোর প্রক্রিয়া শুরু হয়েছে।'
  });

  /* ======================= ASEAN ======================= */
  grp('asean', {
    members: ['Indonesia', 'Malaysia', 'Philippines', 'Singapore', 'Thailand', 'Brunei', 'Vietnam', 'Laos', 'Myanmar', 'Cambodia', 'Timor-Leste'],
    observers: ['Papua New Guinea'],
    notes: {
      'Indonesia': 'Founder (Bangkok Declaration, 8 Aug 1967); ASEAN Secretariat in Jakarta.', 'Malaysia': 'Founder 1967; chair 2025.', 'Philippines': 'Founder 1967; ASEAN chair 2026.',
      'Singapore': 'Founder 1967.', 'Thailand': 'Founder 1967 (Bangkok Declaration).', 'Brunei': 'Joined 1984.', 'Vietnam': 'Joined 1995.', 'Laos': 'Joined 1997.',
      'Myanmar': 'Joined 1997; junta leaders barred from summits since the 2021 coup (Five-Point Consensus).', 'Cambodia': 'Joined 1999.',
      'Timor-Leste': '11th member — admitted 26 Oct 2025 (Kuala Lumpur summit).', 'Papua New Guinea': 'Observer since 1976.'
    }
  }, {
    title: 'ASEAN', bn: 'আসিয়ান', icon: '🌾',
    intro: '১৯৬৭ সালের ৮ আগস্ট ব্যাংকক ঘোষণায় ৫ প্রতিষ্ঠাতা দেশ নিয়ে গঠিত; সচিবালয় জাকার্তা। ২০২৫-এর অক্টোবরে তিমুর-লেস্তে ১১তম সদস্য হয়; ২০২৬-এ সভাপতি ফিলিপাইন। ভারত ১৯৯২-এ সেক্টরাল, ১৯৯৬-এ পূর্ণ ডায়লগ পার্টনার, ২০২২-এ Comprehensive Strategic Partner — "Act East" নীতির কেন্দ্র।'
  });

  /* ======================= EAST ASIA SUMMIT ======================= */
  grp('eas', {
    members: ['Brunei', 'Cambodia', 'Indonesia', 'Laos', 'Malaysia', 'Myanmar', 'Philippines', 'Singapore', 'Thailand', 'Vietnam', 'Timor-Leste', 'Australia', 'China', 'India', 'Japan', 'New Zealand', 'South Korea', 'Russia', 'United States of America'],
    notes: { 'Russia': 'Joined 2011.', 'United States of America': 'Joined 2011.', 'India': 'Founding participant (Kuala Lumpur, 2005).', 'Timor-Leste': 'Participates as ASEAN member since 2025.', 'Malaysia': 'Hosted the first EAS, Kuala Lumpur, Dec 2005.' }
  }, {
    title: 'East Asia Summit (EAS)', bn: 'পূর্ব এশিয়া শীর্ষ সম্মেলন', icon: '🌏',
    intro: '২০০৫ সালে কুয়ালালামপুরে ১৬ দেশ নিয়ে শুরু (ASEAN + ৬: অস্ট্রেলিয়া, চীন, ভারত, জাপান, নিউজিল্যান্ড, দক্ষিণ কোরিয়া); ২০১১-এ রাশিয়া ও আমেরিকা যুক্ত — তিমুর-লেস্তে সহ এখন ১৯ অংশগ্রহণকারী। ASEAN নেতৃত্বাধীন ("ASEAN centrality") নেতাদের কৌশলগত ফোরাম; ভারত প্রতিষ্ঠাতা সদস্য এবং Indo-Pacific Oceans Initiative (IPOI, ২০১৯) এখানেই ঘোষণা করে।'
  });

  /* ======================= IORA ======================= */
  grp('iora', {
    members: ['Australia', 'Bangladesh', 'Comoros', 'France', 'India', 'Indonesia', 'Iran', 'Kenya', 'Madagascar', 'Malaysia', 'Maldives', 'Mauritius', 'Mozambique', 'Oman', 'Seychelles', 'Singapore', 'Somalia', 'South Africa', 'Sri Lanka', 'Tanzania', 'Thailand', 'United Arab Emirates', 'Yemen'],
    partners: ['China', 'Egypt', 'Germany', 'Italy', 'Japan', 'Russia', 'Saudi Arabia', 'South Korea', 'Turkey', 'United Kingdom', 'United States of America', 'Kuwait'],
    notes: { 'India': 'Founder member; IORA Chair 2025–27.', 'Mauritius': 'Secretariat at Ebene, Mauritius.', 'France': 'Member via Réunion (joined 2020).' }
  }, {
    title: 'Indian Ocean Rim Association (IORA)', bn: 'ভারত মহাসাগর রিম অ্যাসোসিয়েশন', icon: '🌊',
    types: { partners: ['Dialogue partner', '#e67e22'] },
    intro: '১৯৯৭ সালে মরিশাসে প্রতিষ্ঠিত (১৯৯৫ মরিশাস উদ্যোগ); সচিবালয় এবেনে, মরিশাস। ২৩ সদস্য ও ১০+ ডায়লগ পার্টনার (EU সহ)। ভারত ২০২৫–২৭ মেয়াদে সভাপতি। টিপ: পাকিস্তান সদস্য নয়; ফ্রান্স (রিইউনিয়নের সূত্রে) ২০২০-এ যুক্ত।'
  });

  /* ======================= IPEF ======================= */
  grp('ipef', {
    members: ['Australia', 'Brunei', 'Fiji', 'India', 'Indonesia', 'Japan', 'Malaysia', 'New Zealand', 'Philippines', 'Singapore', 'South Korea', 'Thailand', 'United States of America', 'Vietnam'],
    notes: { 'India': 'Joined pillars II–IV (supply chain, clean & fair economy); opted out of Pillar I (trade).', 'Fiji': 'Only Pacific island member.', 'Japan': 'Launched in Tokyo, 23 May 2022.' }
  }, {
    title: 'Indo-Pacific Economic Framework (IPEF)', bn: 'ইন্দো-প্যাসিফিক অর্থনৈতিক কাঠামো', icon: '📦',
    intro: '২৩ মে ২০২২ টোকিওতে আমেরিকার নেতৃত্বে চালু, ১৪ সদস্য — বিশ্ব জিডিপির প্রায় ৪০%। চার স্তম্ভ: বাণিজ্য, সাপ্লাই চেইন, ক্লিন ইকোনমি, ফেয়ার ইকোনমি; এটা মুক্ত বাণিজ্য চুক্তি নয় (শুল্ক ছাড় নেই)। ভারত বাণিজ্য স্তম্ভে যোগ দেয়নি; সাপ্লাই চেইন চুক্তি ২০২৪-এ কার্যকর।'
  });

  /* ======================= COMMONWEALTH ======================= */
  grp('commonwealth', {
    members: ['Antigua and Barb.', 'Australia', 'Bahamas', 'Bangladesh', 'Barbados', 'Belize', 'Botswana', 'Brunei', 'Cameroon', 'Canada', 'Cyprus', 'Dominica', 'eSwatini', 'Fiji', 'Gabon', 'Gambia', 'Ghana', 'Grenada', 'Guyana', 'India', 'Jamaica', 'Kenya', 'Kiribati', 'Lesotho', 'Malawi', 'Malaysia', 'Maldives', 'Malta', 'Mauritius', 'Mozambique', 'Namibia', 'Nauru', 'New Zealand', 'Nigeria', 'Pakistan', 'Papua New Guinea', 'Rwanda', 'St. Kitts and Nevis', 'Saint Lucia', 'St. Vin. and Gren.', 'Samoa', 'Seychelles', 'Sierra Leone', 'Singapore', 'Solomon Is.', 'South Africa', 'Sri Lanka', 'Tanzania', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tuvalu', 'Uganda', 'United Kingdom', 'Vanuatu', 'Zambia'],
    notes: {
      'United Kingdom': 'Secretariat at Marlborough House, London. Head: King Charles III.', 'Gabon': 'Joined June 2022; partial suspension (Sept 2023 coup) lifted July 2025.',
      'Togo': 'Joined June 2022 — no British colonial link.', 'Rwanda': 'Joined 2009 — no British colonial link; hosted CHOGM 2022.', 'Mozambique': 'Joined 1995 — first member with no British colonial link.',
      'India': 'Republic in Commonwealth since London Declaration 1949; largest member by population.', 'Maldives': 'Left 2016, rejoined 2020.', 'Gambia': 'Left 2013, rejoined 2018.',
      'South Africa': 'Left 1961 (apartheid), rejoined 1994.', 'Pakistan': 'Left 1972, rejoined 1989.', 'Samoa': 'Hosted CHOGM 2024 (Apia) — first Pacific island host.', 'Antigua and Barb.': 'Hosted CHOGM 2026, St John\'s (Nov 2026).'
    }
  }, {
    title: 'Commonwealth of Nations', bn: 'কমনওয়েলথ', icon: '👑',
    intro: '১৯৪৯ সালের লন্ডন ঘোষণায় আধুনিক কমনওয়েলথ — ভারত প্রজাতন্ত্র হয়েও সদস্য থাকতে পারল; এখন ৫৬ সদস্য, সচিবালয় লন্ডনের মার্লবরো হাউস। সাম্প্রতিকতম সদস্য গ্যাবন ও টোগো (২০২২), যাদের ব্রিটিশ উপনিবেশ-সংযোগ নেই। CHOGM ২০২৬ নভেম্বরে অ্যান্টিগুয়া ও বারবুডার সেন্ট জনসে হয়েছে।'
  });

  /* ======================= PACIFIC ISLANDS FORUM ======================= */
  grp('pif', {
    members: ['Australia', 'Cook Is.', 'Fiji', 'Fr. Polynesia', 'Kiribati', 'Marshall Is.', 'Micronesia', 'Nauru', 'New Caledonia', 'New Zealand', 'Niue', 'Palau', 'Papua New Guinea', 'Samoa', 'Solomon Is.', 'Tonga', 'Tuvalu', 'Vanuatu'],
    partners: ['American Samoa', 'Guam', 'Wallis and Futuna Is.'],
    observers: ['N. Mariana Is.', 'Timor-Leste'],
    notes: { 'Fiji': 'Secretariat in Suva.', 'Kiribati': 'Withdrew July 2022, rejoined Feb 2023.', 'Fr. Polynesia': 'French territory — full member since 2016.', 'New Caledonia': 'French territory — full member since 2016.', 'American Samoa': 'Associate member (Aug 2024).', 'Guam': 'Associate member (Aug 2024).', 'Wallis and Futuna Is.': 'Associate member (French territory).' }
  }, {
    title: 'Pacific Islands Forum (PIF)', bn: 'প্রশান্ত মহাসাগরীয় দ্বীপ ফোরাম', icon: '🏝',
    types: { partners: ['Associate member', '#e67e22'] },
    intro: '১৯৭১ সালে ওয়েলিংটনে "South Pacific Forum" নামে প্রতিষ্ঠিত, ২০০০-এ নাম বদল; সচিবালয় সুভা (ফিজি)। ১৮ পূর্ণ সদস্য — বেশিরভাগ ক্ষুদ্র দ্বীপরাষ্ট্র, তাই মানচিত্রে ছোট আকার। ভারত ডায়লগ পার্টনার এবং আলাদা FIPIC (Forum for India–Pacific Islands Cooperation, ২০১৪) চালায়। টিপ: ২০২২-এ কিরিবাতি বেরিয়ে ২০২৩-এ ফিরে আসে।'
  });

  /* ======================= CICA ======================= */
  grp('cica', {
    members: ['Afghanistan', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Cambodia', 'China', 'Egypt', 'India', 'Iran', 'Iraq', 'Israel', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Mongolia', 'Pakistan', 'Palestine', 'Qatar', 'Russia', 'South Korea', 'Sri Lanka', 'Tajikistan', 'Thailand', 'Turkey', 'United Arab Emirates', 'Uzbekistan', 'Vietnam'],
    observers: ['Belarus', 'Indonesia', 'Japan', 'Malaysia', 'Philippines', 'Saudi Arabia', 'Turkmenistan', 'Ukraine', 'United States of America'],
    notes: { 'Kazakhstan': 'Proposed by Nazarbayev at UNGA, Oct 1992; Secretariat in Astana.', 'India': 'Founding member (1999).' }
  }, {
    title: 'CICA (Conference on Interaction & CBMs in Asia)', bn: 'এশিয়ায় পারস্পরিক আস্থা সম্মেলন (সিকা)', icon: '🕊',
    intro: '১৯৯২ সালে জাতিসংঘে কাজাখস্তানের নুরসুলতান নজরবায়েভের প্রস্তাব, ১৯৯৯-এ প্রথম মন্ত্রী বৈঠক; সচিবালয় আস্তানা। এশিয়ার নিরাপত্তায় আস্থা-বৃদ্ধিমূলক ব্যবস্থার আন্তঃসরকারি ফোরাম, ২৯ সদস্য। ভারত প্রতিষ্ঠাতা সদস্য; ভারত-পাকিস্তান, ইসরায়েল-প্যালেস্টাইন একসঙ্গে সদস্য — পরীক্ষায় এটাই চমক।'
  });

  /* ======================= COLOMBO SECURITY CONCLAVE ======================= */
  grp('csc', {
    members: ['India', 'Sri Lanka', 'Maldives', 'Mauritius', 'Bangladesh', 'Seychelles'],
    notes: {
      'India': 'Founder (2011 trilateral maritime security dialogue); hosted 7th NSA-level meeting, New Delhi, 20 Nov 2025.',
      'Sri Lanka': 'Founder; Secretariat in Colombo (est. 2021).', 'Maldives': 'Founder (2011 trilateral).', 'Mauritius': 'Joined as full member 2022.',
      'Bangladesh': 'Former observer; full member from 2024.', 'Seychelles': 'Former observer; joined as full member Nov 2025 (New Delhi meeting).'
    }
  }, {
    title: 'Colombo Security Conclave (CSC)', bn: 'কলম্বো নিরাপত্তা সম্মেলন', icon: '⚓',
    intro: '২০১১ সালে ভারত–শ্রীলঙ্কা–মালদ্বীপ ত্রিপাক্ষিক সামুদ্রিক নিরাপত্তা সংলাপ হিসেবে শুরু, ২০২০-এ নতুন নাম; সচিবালয় কলম্বো। জাতীয় নিরাপত্তা উপদেষ্টা (NSA) স্তরের ফোরাম — পাঁচ স্তম্ভ: সামুদ্রিক নিরাপত্তা, সন্ত্রাস দমন, পাচার, সাইবার, দুর্যোগ ত্রাণ। ২০২৬-এ সদস্য ৬: ভারত, শ্রীলঙ্কা, মালদ্বীপ, মরিশাস, বাংলাদেশ ও সেশেলস (নভেম্বর ২০২৫)।'
  });

  /* ======================= ARCTIC COUNCIL ======================= */
  grp('arctic', {
    members: ['Canada', 'Denmark', 'Greenland', 'Faeroe Is.', 'Finland', 'Iceland', 'Norway', 'Russia', 'Sweden', 'United States of America'],
    observers: ['Germany', 'Netherlands', 'Poland', 'United Kingdom', 'France', 'Spain', 'China', 'India', 'Italy', 'Japan', 'South Korea', 'Singapore', 'Switzerland'],
    notes: {
      'Denmark': 'Member (incl. Greenland & Faroe Is.); Arctic Council chair 2025–27.', 'Greenland': 'Represented through the Kingdom of Denmark.', 'Faeroe Is.': 'Represented through the Kingdom of Denmark.',
      'Norway': 'Permanent Secretariat in Tromsø; chair 2023–25.', 'Russia': 'Chair 2021–23; Western members paused cooperation in 2022.', 'Canada': 'Ottawa Declaration 1996.',
      'India': 'Observer since 2013 (Kiruna). Arctic station Himadri (Ny-Ålesund, Svalbard, 2008); Arctic Policy 2022.', 'China': 'Observer since 2013; calls itself a "near-Arctic state".', 'Switzerland': 'Observer since 2017 (latest).'
    }
  }, {
    title: 'Arctic Council', bn: 'আর্কটিক কাউন্সিল', icon: '🧊',
    intro: '১৯৯৬ সালের অটোয়া ঘোষণায় ৮ আর্কটিক দেশ নিয়ে গঠিত; স্থায়ী সচিবালয় ট্রমসো (নরওয়ে), ২০২৫–২৭ সভাপতি ডেনমার্ক। ভারত ২০১৩ (কিরুনা) থেকে পর্যবেক্ষক — ১৩ পর্যবেক্ষক দেশের একটি; স্বালবার্ডে "হিমাদ্রি" গবেষণাকেন্দ্র (২০০৮)। টিপ: ৬টি আদিবাসী সংগঠন "Permanent Participants"; সামরিক নিরাপত্তা এর আলোচ্য নয়।'
  });

  /* ======================= NUCLEAR SUPPLIERS GROUP ======================= */
  grp('nsg', {
    members: ['Argentina', 'Australia', 'Austria', 'Belarus', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'China', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Japan', 'Kazakhstan', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'Serbia', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'United States of America'],
    applicants: ['India', 'Pakistan'],
    notes: {
      'India': 'NOT a member — applied 2016 (Seoul plenary); blocked mainly by China over non-NPT status. Got NSG "clean waiver" Sept 2008 after India–US nuclear deal.',
      'Pakistan': 'NOT a member — applied 2016 after India.', 'China': 'Joined 2004; opposes India\'s entry without a non-NPT "criteria-based" approach.'
    }
  }, {
    title: 'Nuclear Suppliers Group (NSG)', bn: 'পারমাণবিক সরবরাহকারী গোষ্ঠী', icon: '☢',
    types: { applicants: ['Applicant (not a member)', '#7f8c8d'] },
    intro: '১৯৭৪ সালের মে-তে ভারতের প্রথম পারমাণবিক পরীক্ষার (পোখরান-১) প্রতিক্রিয়ায় গঠিত, প্রথম বৈঠক ১৯৭৫ লন্ডনে ("London Club"); ৪৮ অংশগ্রহণকারী সরকার, ঐকমত্যে সিদ্ধান্ত। ভারত সদস্য নয় — ২০০৮-এ বিশেষ ছাড় (waiver) পেলেও ২০১৬-এর আবেদন চীন আটকে রেখেছে। টিপ: চার রপ্তানি-নিয়ন্ত্রণ গোষ্ঠীর মধ্যে ভারত শুধু NSG-তে নেই।'
  });

  /* ======================= MTCR ======================= */
  grp('mtcr', {
    members: ['Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'Czechia', 'Denmark', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Luxembourg', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Russia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'United States of America'],
    observers: ['China', 'Israel', 'Pakistan', 'Romania', 'Slovakia'],
    notes: { 'India': 'Joined 27 June 2016 as 35th member — first regime India entered; eased BrahMos exports.', 'China': 'Not a member — pledged unilaterally to follow guidelines; application pending since 2004.' }
  }, {
    title: 'Missile Technology Control Regime (MTCR)', bn: 'ক্ষেপণাস্ত্র প্রযুক্তি নিয়ন্ত্রণ ব্যবস্থা', icon: '🚀',
    types: { observers: ['Unilateral adherent (non-member)', '#2980b9'] },
    intro: 'এপ্রিল ১৯৮৭ সালে G7 দেশগুলো গঠন করে; ৫০০ কেজি পেলোড ও ৩০০ কিমি পাল্লার বেশি ক্ষেপণাস্ত্র/ড্রোন প্রযুক্তির রপ্তানি নিয়ন্ত্রণ করে। ৩৫ সদস্য; স্থায়ী সচিবালয় নেই (ফ্রান্সের বিদেশ মন্ত্রক "Point of Contact")। ভারত ২৭ জুন ২০১৬-এ ৩৫তম সদস্য — চীন সদস্য নয়, এটাই প্রশ্নে আসে।'
  });

  /* ======================= WASSENAAR ARRANGEMENT ======================= */
  grp('wassenaar', {
    members: ['Argentina', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'Croatia', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'India', 'Ireland', 'Italy', 'Japan', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'United States of America'],
    notes: { 'India': 'Joined 7 Dec 2017 as 42nd participating state.', 'Austria': 'Secretariat in Vienna.', 'Netherlands': 'Founded at Wassenaar (near The Hague), 12 July 1996.' }
  }, {
    title: 'Wassenaar Arrangement', bn: 'ওয়াসেনার ব্যবস্থা', icon: '🛡',
    intro: '১২ জুলাই ১৯৯৬ সালে নেদারল্যান্ডসের ওয়াসেনারে স্নায়ুযুদ্ধকালীন CoCom-এর উত্তরসূরি হিসেবে গঠিত; সচিবালয় ভিয়েনা। প্রচলিত অস্ত্র ও দ্বৈত-ব্যবহার (dual-use) পণ্য-প্রযুক্তির রপ্তানি স্বচ্ছতা নিশ্চিত করে, ৪২ অংশগ্রহণকারী রাষ্ট্র। ভারত ডিসেম্বর ২০১৭-এ ৪২তম সদস্য; চীন সদস্য নয়।'
  });

  /* ======================= AUSTRALIA GROUP ======================= */
  grp('australiagroup', {
    members: ['Argentina', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'South Korea', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'United States of America'],
    notes: { 'India': 'Joined 19 Jan 2018 (43rd participant counting the EU).', 'Australia': 'Initiated 1985 after Iraq\'s chemical weapons use in Iran–Iraq war; Australian embassy in Paris chairs/coordinates.' }
  }, {
    title: 'Australia Group', bn: 'অস্ট্রেলিয়া গ্রুপ', icon: '🧪',
    intro: '১৯৮৫ সালে ইরান-ইরাক যুদ্ধে রাসায়নিক অস্ত্র ব্যবহারের পর অস্ট্রেলিয়ার উদ্যোগে গঠিত; রাসায়নিক ও জৈব অস্ত্রে ব্যবহারযোগ্য পণ্যের রপ্তানি নিয়ন্ত্রণ করে। ৪২ দেশ + EU = ৪৩ অংশগ্রহণকারী; বৈঠক প্যারিসে। ভারত ১৯ জানুয়ারি ২০১৮-এ যোগ দেয় — MTCR (২০১৬) ও ওয়াসেনার (২০১৭)-এর পর।'
  });

  /* ======================= NATO ======================= */
  grp('nato', {
    members: ['Belgium', 'Canada', 'Denmark', 'France', 'Iceland', 'Italy', 'Luxembourg', 'Netherlands', 'Norway', 'Portugal', 'United Kingdom', 'United States of America', 'Greece', 'Turkey', 'Germany', 'Spain', 'Czechia', 'Hungary', 'Poland', 'Bulgaria', 'Estonia', 'Latvia', 'Lithuania', 'Romania', 'Slovakia', 'Slovenia', 'Albania', 'Croatia', 'Montenegro', 'North Macedonia', 'Finland', 'Sweden', 'Greenland'],
    applicants: ['Bosnia and Herz.', 'Georgia', 'Ukraine'],
    notes: {
      'Belgium': 'Founder 1949; NATO HQ in Brussels.', 'United States of America': 'Founder; Washington Treaty signed 4 April 1949.', 'Greece': 'Joined 1952.', 'Turkey': 'Joined 1952.',
      'Germany': 'West Germany joined 1955.', 'Spain': 'Joined 1982.', 'Czechia': 'Joined 1999.', 'Hungary': 'Joined 1999.', 'Poland': 'Joined 1999.',
      'Bulgaria': 'Joined 2004.', 'Estonia': 'Joined 2004.', 'Latvia': 'Joined 2004.', 'Lithuania': 'Joined 2004.', 'Romania': 'Joined 2004.', 'Slovakia': 'Joined 2004.', 'Slovenia': 'Joined 2004.',
      'Albania': 'Joined 2009.', 'Croatia': 'Joined 2009.', 'Montenegro': 'Joined 2017.', 'North Macedonia': 'Joined 2020.', 'Finland': 'Joined 4 Apr 2023 (31st).', 'Sweden': 'Joined 7 Mar 2024 (32nd).',
      'Greenland': 'Covered as part of the Kingdom of Denmark (Pituffik Space Base).', 'Ukraine': 'Aspirant — not a member.', 'Georgia': 'Aspirant — not a member.', 'Bosnia and Herz.': 'Aspirant (Membership Action Plan) — not a member.'
    }
  }, {
    title: 'NATO', bn: 'ন্যাটো (উত্তর আটলান্টিক চুক্তি সংস্থা)', icon: '🎖',
    types: { applicants: ['Aspirant country', '#95a5a6'] },
    intro: '৪ এপ্রিল ১৯৪৯ ওয়াশিংটন চুক্তিতে ১২ দেশ নিয়ে গঠিত; সদর দপ্তর ব্রাসেলস, অনুচ্ছেদ ৫ = যৌথ প্রতিরক্ষা (একমাত্র প্রয়োগ ৯/১১-এর পর)। ফিনল্যান্ড (২০২৩) ও সুইডেন (২০২৪) যোগ দিয়ে ২০২৬-এ ৩২ সদস্য। ইউক্রেন, জর্জিয়া, বসনিয়া আকাঙ্ক্ষী; ভারত NATO-র সঙ্গে কোনো আনুষ্ঠানিক অংশীদারিত্বে নেই।'
  });

  /* ======================= EUROPEAN UNION ======================= */
  grp('eu', {
    members: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'],
    applicants: ['Albania', 'Bosnia and Herz.', 'Georgia', 'Moldova', 'Montenegro', 'North Macedonia', 'Serbia', 'Turkey', 'Ukraine'],
    notes: {
      'Belgium': 'Founder (Treaty of Rome 1957); Brussels hosts Commission & Council.', 'France': 'Founder; Strasbourg seat of European Parliament.', 'Germany': 'Founder; ECB in Frankfurt.',
      'Italy': 'Founder (Treaty of Rome signed in Rome, 1957).', 'Luxembourg': 'Founder; Court of Justice seat.', 'Netherlands': 'Founder; Maastricht Treaty (1992) created the EU.',
      'Croatia': 'Newest member — joined 1 July 2013.', 'Bulgaria': 'Joined 2007; adopted the euro 1 Jan 2026 (21st euro member).', 'Romania': 'Joined 2007; full Schengen from Jan 2025.',
      'Ukraine': 'Candidate (2022).', 'Moldova': 'Candidate (2022).', 'Georgia': 'Candidate (Dec 2023) — process frozen in practice since 2024.', 'Turkey': 'Candidate since 1999 — talks stalled.'
    }
  }, {
    title: 'European Union (EU)', bn: 'ইউরোপীয় ইউনিয়ন', icon: '🇪🇺',
    types: { applicants: ['Candidate country', '#95a5a6'] },
    intro: '১৯৫৭ রোম চুক্তির EEC থেকে ১৯৯২ মাস্ট্রিখট চুক্তিতে EU; ব্রিটেন ৩১ জানুয়ারি ২০২০ বেরিয়ে যাওয়ার পর ২৭ সদস্য, সর্বশেষ যোগদানকারী ক্রোয়েশিয়া (২০১৩)। ২৭ জানুয়ারি ২০২৬ নয়াদিল্লিতে ১৬তম ভারত-EU শীর্ষ সম্মেলনে মুক্ত বাণিজ্য চুক্তির (FTA) আলোচনা সম্পন্ন হয়। টিপ: বুলগেরিয়া ২০২৬-এ ইউরো গ্রহণ করেছে।'
  });

  /* ======================= QUAD ======================= */
  grp('quad', {
    members: ['Australia', 'India', 'Japan', 'United States of America'],
    notes: { 'Japan': 'Shinzo Abe proposed the Quad in 2007.', 'India': 'Designated host of the next leaders\' summit (New Delhi).', 'Australia': 'Left the first Quad in 2008; rejoined revival in 2017.', 'United States of America': 'Hosted first (virtual) leaders\' summit, March 2021.' }
  }, {
    title: 'Quad (Quadrilateral Security Dialogue)', bn: 'কোয়াড', icon: '◆',
    intro: '২০০৪ সুনামি ত্রাণের "Tsunami Core Group" থেকে ধারণা; ২০০৭ সালে জাপানের শিনজো আবের উদ্যোগে শুরু, ২০০৮-এ ভেঙে যায়, ২০১৭ ম্যানিলায় পুনরুজ্জীবিত; প্রথম নেতা-স্তরের (ভার্চুয়াল) শীর্ষ সম্মেলন মার্চ ২০২১। সচিবালয় বা সামরিক চুক্তি নেই — উদ্যোগ: ভ্যাকসিন, IPMDA (সামুদ্রিক নজরদারি), ক্রিটিক্যাল টেকনোলজি, ক্যান্সার মুনশট। ভারত পরবর্তী শীর্ষ সম্মেলনের মনোনীত আয়োজক।'
  });

  /* ======================= SAARC ======================= */
  grp('saarc', {
    members: ['Afghanistan', 'Bangladesh', 'Bhutan', 'India', 'Maldives', 'Nepal', 'Pakistan', 'Sri Lanka'],
    observers: ['Australia', 'China', 'Iran', 'Japan', 'Mauritius', 'Myanmar', 'South Korea', 'United States of America'],
    notes: {
      'Bangladesh': 'Founder; Dhaka hosted the 1st summit (Dec 1985). Current chair; interim government (2024–26) pushed for revival.',
      'Nepal': 'Founder; Secretariat in Kathmandu (1987); hosted the last (18th) summit, Kathmandu 2014.', 'Afghanistan': '8th member, joined April 2007.',
      'Pakistan': 'Was to host 19th summit (Islamabad, Nov 2016) — postponed indefinitely after the Uri attack.', 'India': 'Founder; South Asian University (New Delhi) and SAARC Disaster Management Centre (Gandhinagar) are SAARC bodies.'
    }
  }, {
    title: 'SAARC', bn: 'সার্ক (দক্ষিণ এশীয় আঞ্চলিক সহযোগিতা সংস্থা)', icon: '🕌',
    intro: '৮ ডিসেম্বর ১৯৮৫ ঢাকায় ৭ দেশ নিয়ে প্রতিষ্ঠিত (বাংলাদেশের জিয়াউর রহমানের ধারণা), ২০০৭-এ আফগানিস্তান অষ্টম সদস্য; সচিবালয় কাঠমান্ডু। ২০১৪-এর কাঠমান্ডু (১৮তম) সম্মেলনের পর আর কোনো শীর্ষ সম্মেলন হয়নি — উরি হামলার পর ভারত ইসলামাবাদ সম্মেলন বয়কট করে। ৯ পর্যবেক্ষক (EU সহ); ভারত এখন BIMSTEC-এ বেশি জোর দেয়।'
  });

  /* ======================= BIMSTEC ======================= */
  grp('bimstec', {
    members: ['Bangladesh', 'India', 'Sri Lanka', 'Thailand', 'Myanmar', 'Nepal', 'Bhutan'],
    notes: {
      'Thailand': 'Founded in Bangkok, 6 June 1997 (as BIST-EC); hosted 6th summit, 2–4 Apr 2025.', 'Bangladesh': 'Founder; Permanent Secretariat in Dhaka (2014); BIMSTEC chair since the 2025 summit.',
      'India': 'Founder; leads the security pillar; Secretary General since 2024 is an Indian diplomat.', 'Myanmar': 'Joined Dec 1997 (BIMST-EC).', 'Nepal': 'Observer 1998, full member 2004.', 'Bhutan': 'Full member 2004.', 'Sri Lanka': 'Founder; hosted 5th (virtual) summit 2022 that adopted the Charter.'
    }
  }, {
    title: 'BIMSTEC', bn: 'বিমসটেক (বঙ্গোপসাগর উদ্যোগ)', icon: '🌅',
    intro: '৬ জুন ১৯৯৭ ব্যাংককে BIST-EC নামে শুরু; মিয়ানমার (১৯৯৭), নেপাল ও ভুটান (২০০৪) যোগ দিয়ে ৭ সদস্য — দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার সেতু। স্থায়ী সচিবালয় ঢাকা (২০১৪); ২০২২-এর কলম্বো সম্মেলনে চার্টার গৃহীত, ২০২৪-এ কার্যকর। ২০২৫-এর ব্যাংকক (৬ষ্ঠ) সম্মেলনের পর সভাপতি বাংলাদেশ। ভারতের "Neighbourhood First" ও "Act East" দুই নীতিরই মিলনক্ষেত্র।'
  });

  /* ======================= APEC ======================= */
  grp('apec', {
    members: ['Australia', 'Brunei', 'Canada', 'Chile', 'China', 'Hong Kong', 'Indonesia', 'Japan', 'Malaysia', 'Mexico', 'New Zealand', 'Papua New Guinea', 'Peru', 'Philippines', 'Russia', 'Singapore', 'South Korea', 'Taiwan', 'Thailand', 'United States of America', 'Vietnam'],
    applicants: ['India'],
    notes: {
      'Australia': 'Founded at Canberra, Nov 1989 (Bob Hawke\'s initiative).', 'Singapore': 'APEC Secretariat in Singapore.', 'China': 'Host 2026 — leaders\' meeting in Shenzhen (Nov 2026).',
      'Hong Kong': 'Member economy as "Hong Kong, China".', 'Taiwan': 'Member economy as "Chinese Taipei".', 'South Korea': 'Host 2025 (Gyeongju).',
      'India': 'Not a member — has sought membership since 1991; new admissions frozen by a 1997–2010 moratorium and no consensus since.'
    }
  }, {
    title: 'APEC', bn: 'এপেক (এশিয়া-প্যাসিফিক অর্থনৈতিক সহযোগিতা)', icon: '🌉',
    types: { members: ['Member economy', '#c0392b'], applicants: ['Aspirant (not a member)', '#95a5a6'] },
    intro: '১৯৮৯ সালে ক্যানবেরায় ১২ সদস্য নিয়ে শুরু; সদস্যদের "economies" বলা হয় — তাই হংকং ও চাইনিজ তাইপেই সদস্য। সচিবালয় সিঙ্গাপুর, ২১ সদস্য; ২০২৬-এ আয়োজক চীন (শেনজেন)। ভারত সদস্য নয় — ১৯৯৭–২০১০ নতুন সদস্যপদে স্থগিতাদেশ ছিল, এখনো ঐকমত্য হয়নি।'
  });

  /* ======================= MEKONG–GANGA COOPERATION ======================= */
  grp('mgc', {
    members: ['India', 'Cambodia', 'Laos', 'Myanmar', 'Thailand', 'Vietnam'],
    notes: { 'Laos': 'Launched at Vientiane, 10 Nov 2000.', 'Cambodia': 'MGC Asian Traditional Textiles Museum at Siem Reap.', 'India': 'Funds Quick Impact Projects (QIPs) in CLMV countries.' }
  }, {
    title: 'Mekong–Ganga Cooperation (MGC)', bn: 'মেকং-গঙ্গা সহযোগিতা', icon: '🛶',
    intro: '১০ নভেম্বর ২০০০ ভিয়েনতিয়েনে ভারত ও ৫ মেকং-অববাহিকা দেশ (কম্বোডিয়া, লাওস, মিয়ানমার, থাইল্যান্ড, ভিয়েতনাম) নিয়ে চালু — ৬ সদস্য। ক্ষেত্র: পর্যটন, সংস্কৃতি, শিক্ষা, পরিবহন; এখন স্বাস্থ্য, কৃষি, জলসম্পদও। টিপ: সিয়েম রিপে MGC বস্ত্র জাদুঘর; চীন সদস্য নয় (চীনের আলাদা Lancang-Mekong Cooperation)।'
  });

  /* ======================= BBIN ======================= */
  grp('bbin', {
    members: ['Bangladesh', 'India', 'Nepal'],
    observers: ['Bhutan'],
    notes: { 'Bhutan': 'Signed the BBIN Motor Vehicles Agreement (Thimphu, June 2015) but its parliament did not ratify; stays out for now (shown as partial).', 'India': 'MVA implemented by Bangladesh, India and Nepal through an MoU (2022).' }
  }, {
    title: 'BBIN (Bangladesh–Bhutan–India–Nepal)', bn: 'বিবিআইএন', icon: '🚚',
    types: { members: ['Participating in BBIN MVA', '#c0392b'], observers: ['Signed, not ratified (Bhutan)', '#2980b9'] },
    intro: 'দক্ষিণ এশিয়ার উপ-আঞ্চলিক উদ্যোগ; জুন ২০১৫ থিম্পুতে BBIN Motor Vehicles Agreement (MVA) স্বাক্ষর — যাত্রী ও পণ্যবাহী যানবাহনের অবাধ চলাচল। ভুটানের সংসদ অনুমোদন না করায় বাকি তিন দেশ এগোচ্ছে। এটি SAARC MVA (২০১৪, পাকিস্তানের আপত্তিতে আটকে) এর বিকল্প।'
  });

  /* ======================= GCC ======================= */
  grp('gcc', {
    members: ['Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Saudi Arabia', 'United Arab Emirates'],
    notes: { 'Saudi Arabia': 'Secretariat in Riyadh.', 'United Arab Emirates': 'Founded in Abu Dhabi, 25 May 1981.', 'Qatar': 'Blockaded by Saudi, UAE, Bahrain (+ Egypt) 2017–21; ended by Al-Ula Declaration, Jan 2021.' }
  }, {
    title: 'Gulf Cooperation Council (GCC)', bn: 'উপসাগরীয় সহযোগিতা পরিষদ', icon: '🏜',
    intro: '২৫ মে ১৯৮১ আবুধাবিতে ৬ রাজতান্ত্রিক উপসাগরীয় দেশ নিয়ে গঠিত; সচিবালয় রিয়াদ। ভারতের সবচেয়ে বড় আঞ্চলিক বাণিজ্য অংশীদারদের একটি এবং প্রায় ৯০ লক্ষ প্রবাসী ভারতীয়ের আবাস; ভারত-GCC মুক্ত বাণিজ্য চুক্তির আলোচনা পুনরায় চালু হয়েছে। টিপ: ইরাক, ইয়েমেন সদস্য নয়।'
  });

  /* ======================= I2U2 ======================= */
  grp('i2u2', {
    members: ['India', 'Israel', 'United Arab Emirates', 'United States of America'],
    notes: { 'Israel': 'Foreign ministers first met in Oct 2021 (in Israel/virtual).', 'United Arab Emirates': 'Pledged $2 bn for food parks in India (2022).', 'India': 'Hybrid renewable project (300 MW wind + solar) planned in Gujarat.' }
  }, {
    title: 'I2U2 (India–Israel–UAE–USA)', bn: 'আই-টু-ইউ-টু', icon: '🔷',
    intro: 'অক্টোবর ২০২১ বিদেশমন্ত্রী বৈঠক থেকে শুরু ("পশ্চিম এশিয়ার কোয়াড"), প্রথম নেতা-স্তরের (ভার্চুয়াল) শীর্ষ সম্মেলন জুলাই ২০২২। জল, শক্তি, পরিবহন, মহাকাশ, স্বাস্থ্য ও খাদ্য নিরাপত্তায় যৌথ বিনিয়োগ — যেমন ভারতে UAE-অর্থায়িত ফুড পার্ক। টিপ: আব্রাহাম চুক্তি (২০২০) এই গোষ্ঠীর ভিত্তি।'
  });

  /* ======================= FIVE EYES ======================= */
  grp('fiveeyes', {
    members: ['United States of America', 'United Kingdom', 'Canada', 'Australia', 'New Zealand'],
    notes: { 'United States of America': 'UKUSA Agreement 1946 (NSA).', 'United Kingdom': 'UKUSA Agreement 1946 (GCHQ).', 'Canada': 'Joined 1948.', 'Australia': 'Joined 1956.', 'New Zealand': 'Joined 1956.' }
  }, {
    title: 'Five Eyes (FVEY)', bn: 'ফাইভ আইজ', icon: '👁',
    intro: '১৯৪৬ সালের UKUSA চুক্তিতে আমেরিকা-ব্রিটেনের সিগন্যাল গোয়েন্দা জোট; কানাডা (১৯৪৮), অস্ট্রেলিয়া ও নিউজিল্যান্ড (১৯৫৬) যুক্ত — ৫টি ইংরেজিভাষী দেশ। কোনো সচিবালয় নেই। টিপ: জাপান, দক্ষিণ কোরিয়া, ভারতের সঙ্গে "Five Eyes Plus" আলোচনার প্রসঙ্গ আসে; ২০২৩-এর নিজ্জর মামলায় কানাডা Five Eyes গোয়েন্দা তথ্যের কথা বলেছিল।'
  });

  /* ======================= AUKUS ======================= */
  grp('aukus', {
    members: ['Australia', 'United Kingdom', 'United States of America'],
    notes: { 'Australia': 'Gets nuclear-powered (conventionally armed) submarines — Pillar I; scrapped French Attack-class deal.', 'United Kingdom': 'SSN-AUKUS submarine design with Australia.', 'United States of America': 'Will sell Virginia-class submarines to Australia from the 2030s.' }
  }, {
    title: 'AUKUS', bn: 'অকাস', icon: '⚓',
    intro: '১৫ সেপ্টেম্বর ২০২১ ঘোষিত অস্ট্রেলিয়া–ব্রিটেন–আমেরিকার ত্রিপাক্ষিক নিরাপত্তা চুক্তি। স্তম্ভ I: অস্ট্রেলিয়াকে পারমাণবিক-চালিত (পারমাণবিক অস্ত্রবিহীন) সাবমেরিন; স্তম্ভ II: AI, কোয়ান্টাম, হাইপারসনিক প্রযুক্তি। ভারত সদস্য নয় এবং এটি Quad থেকে আলাদা — পরীক্ষায় এই পার্থক্য আসে।'
  });

  /* ======================= INDIAN OCEAN COMMISSION ======================= */
  grp('ioc', {
    members: ['Comoros', 'Madagascar', 'Mauritius', 'Seychelles', 'Réunion'],
    observers: ['China', 'India', 'Japan', 'South Korea'],
    dots: { 'Réunion': [-20.8789, 55.4481] },
    notes: {
      'Mauritius': 'Founder (Port Louis, 1982); General Secretariat at Ebene.', 'Madagascar': 'Founder 1982.', 'Seychelles': 'Founder 1982; Victoria Agreement 1984 institutionalised the IOC.',
      'Comoros': 'Joined 1986.', 'Réunion': 'France is a member on behalf of Réunion (1986). Dot = Saint-Denis.',
      'India': 'Observer since March 2020.', 'China': 'Observer since 2016.', 'Japan': 'Observer since 2020.', 'South Korea': 'Observer since 2025.'
    }
  }, {
    title: 'Indian Ocean Commission (IOC)', bn: 'ভারত মহাসাগর কমিশন', icon: '🐚',
    intro: '১৯৮২ সালে পোর্ট লুইতে মরিশাস, মাদাগাস্কার ও সেশেলস মিলে গঠন, ১৯৮৪ ভিক্টোরিয়া চুক্তিতে প্রাতিষ্ঠানিক; ১৯৮৬-তে কোমোরোস ও ফ্রান্স (রিইউনিয়ন) যুক্ত — ৫ সদস্য, সচিবালয় এবেনে (মরিশাস)। ভারত মার্চ ২০২০ থেকে পর্যবেক্ষক (চীন ২০১৬ থেকে)। পশ্চিম ভারত মহাসাগরে ভারতের SAGAR/MAHASAGAR নীতির জন্য গুরুত্বপূর্ণ।'
  });

  /* ======================= INTERNATIONAL SOLAR ALLIANCE ======================= */
  grp('isa', {
    members: ['Afghanistan', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Chad', 'Chile', 'Comoros', 'Congo', 'Costa Rica', 'Cuba', 'Dem. Rep. Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Rep.', 'Egypt', 'El Salvador', 'Eq. Guinea', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'India', 'Ireland', 'Israel', 'Côte d\'Ivoire', 'Italy', 'Jamaica', 'Japan', 'Kiribati', 'Liberia', 'Luxembourg', 'Malta', 'Madagascar', 'Malawi', 'Maldives', 'Marshall Is.', 'Mali', 'Mauritius', 'Morocco', 'Moldova', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'Niger', 'Oman', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Romania', 'Rwanda', 'Saint Lucia', 'St. Vin. and Gren.', 'Samoa', 'São Tomé and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Somalia', 'S. Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Syria', 'Tanzania', 'Thailand', 'Tonga', 'Togo', 'Trinidad and Tobago', 'Tuvalu', 'Uganda', 'United Arab Emirates', 'United Kingdom', 'Vanuatu', 'Venezuela', 'Yemen', 'Zambia'],
    applicants: ['United States of America'],
    notes: {
      'India': 'Co-founder (with France); ISA HQ at National Institute of Solar Energy, Gwal Pahari, Gurugram — first intergovernmental treaty-based body headquartered in India.',
      'France': 'Co-founder — launched at COP21 Paris, 30 Nov 2015.', 'Morocco': 'Framework Agreement opened for signature at Marrakesh (COP22), Nov 2016.',
      'Afghanistan': 'Position unclear after the 2021 Taliban takeover.', 'United States of America': 'Joined 2021; announced withdrawal 7 Jan 2026.'
    }
  }, {
    title: 'International Solar Alliance (ISA)', bn: 'আন্তর্জাতিক সৌর জোট', icon: '☀',
    types: { members: ['Signed / ratified Framework Agreement', '#e6a100'], applicants: ['Withdrew (USA, 2026)', '#95a5a6'] },
    intro: '৩০ নভেম্বর ২০১৫ প্যারিসে (COP21) ভারত ও ফ্রান্সের যৌথ উদ্যোগে চালু; সদর দপ্তর গুরুগ্রামের গোয়াল পাহাড়ি — ভারতে সদর দপ্তরযুক্ত প্রথম চুক্তিভিত্তিক আন্তঃসরকারি সংস্থা। ২০২০-এর সংশোধনে জাতিসংঘের সব সদস্যের জন্য উন্মুক্ত; ১১০+ সদস্য/স্বাক্ষরকারী। আমেরিকা জানুয়ারি ২০২৬-এ প্রত্যাহারের ঘোষণা দেয়। উদ্যোগ: "One Sun One World One Grid" (OSOWOG)।'
  });

  /* ======================= CDRI ======================= */
  grp('cdri', {
    members: ['Afghanistan', 'Antigua and Barb.', 'Argentina', 'Australia', 'Bangladesh', 'Bhutan', 'Brazil', 'Canada', 'Chad', 'Chile', 'Colombia', 'Cuba', 'Dominican Rep.', 'Ecuador', 'Fiji', 'France', 'Germany', 'Ghana', 'Grenada', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Italy', 'Jamaica', 'Japan', 'Kenya', 'Madagascar', 'Maldives', 'Mauritania', 'Mauritius', 'Mongolia', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Peru', 'Philippines', 'Samoa', 'S. Sudan', 'Sri Lanka', 'Tajikistan', 'Tonga', 'Trinidad and Tobago', 'Turkey', 'United Kingdom', 'United States of America', 'Vietnam'],
    notes: { 'India': 'Founder — launched by PM Modi at UN Climate Action Summit, New York, 23 Sept 2019; Secretariat in New Delhi.' }
  }, {
    title: 'Coalition for Disaster Resilient Infrastructure (CDRI)', bn: 'দুর্যোগ-সহনশীল পরিকাঠামো জোট', icon: '🏗',
    intro: '২৩ সেপ্টেম্বর ২০১৯ নিউ ইয়র্কে জাতিসংঘ জলবায়ু সম্মেলনে ভারতের উদ্যোগে চালু; সচিবালয় নয়াদিল্লি। ২০২৬-এ ৫০+ সদস্য দেশ ও ১০টি সংস্থা (AU, EU, বিশ্বব্যাংক, ADB, UNDRR প্রভৃতি) — মোট ৬০-এর বেশি সদস্য। ছোট দ্বীপরাষ্ট্রগুলোর জন্য IRIS (Infrastructure for Resilient Island States, COP26) উদ্যোগ। টিপ: ISA ও CDRI দুটোই ভারতের নেতৃত্বাধীন বৈশ্বিক জোট।'
  });

  /* ======================= GLOBAL BIOFUELS ALLIANCE ======================= */
  grp('gba', {
    members: ['Argentina', 'Brazil', 'Canada', 'India', 'Italy', 'Japan', 'South Africa', 'United States of America', 'Bangladesh', 'Singapore', 'Mauritius', 'United Arab Emirates', 'Iceland', 'Kenya', 'Guyana', 'Paraguay', 'Seychelles', 'Sri Lanka', 'Uganda', 'Finland', 'Tanzania', 'Philippines', 'Trinidad and Tobago'],
    applicants: ['Indonesia'],
    notes: {
      'India': 'Initiator — launched 9 Sept 2023 at G20 New Delhi summit; secretariat in India.', 'Brazil': 'Founding member — with India & US the world\'s top biofuel producers.',
      'United States of America': 'Founding member.', 'Trinidad and Tobago': 'Announced joining July 2025.', 'Indonesia': 'Invited to join by India.', 'Canada': 'Initially observer; signed foundational documents for full membership.'
    }
  }, {
    title: 'Global Biofuels Alliance (GBA)', bn: 'বৈশ্বিক জৈব জ্বালানি জোট', icon: '🌱',
    intro: '৯ সেপ্টেম্বর ২০২৩ ভারতের G20 সভাপতিত্বে নয়াদিল্লি শীর্ষ সম্মেলনে চালু — ভারত, ব্রাজিল ও আমেরিকা (বিশ্বের বৃহত্তম তিন জৈব জ্বালানি উৎপাদক) এর মূল চালিকা। সচিবালয় ভারতে; ২০+ দেশ ও ১২টি আন্তর্জাতিক সংস্থা। টিপ: ভারতের E20 ইথানল মিশ্রণ লক্ষ্য (২০২৫) এই প্রসঙ্গে আসে।'
  });

  /* ======================= MINERALS SECURITY PARTNERSHIP → FORGE ======================= */
  grp('msp', {
    members: ['Australia', 'Canada', 'Estonia', 'Finland', 'France', 'Germany', 'India', 'Italy', 'Japan', 'Norway', 'South Korea', 'Sweden', 'United Kingdom', 'United States of America'],
    notes: {
      'United States of America': 'Launched MSP June 2022 (PDAC, Toronto); announced successor FORGE on 4 Feb 2026 at the Critical Minerals Ministerial, Washington.',
      'India': 'Joined MSP June 2023; EAM backed FORGE as successor (Feb 2026).', 'Estonia': 'Latest MSP member (March 2024).'
    }
  }, {
    title: 'Minerals Security Partnership (MSP) / FORGE', bn: 'খনিজ নিরাপত্তা অংশীদারিত্ব', icon: '⛏',
    intro: 'জুন ২০২২-এ আমেরিকার নেতৃত্বে ক্রিটিক্যাল মিনারেল (লিথিয়াম, কোবাল্ট, বিরল মৃত্তিকা) সাপ্লাই চেইনে চীন-নির্ভরতা কমাতে চালু; ১৪ দেশ + EU, ভারত জুন ২০২৩-এ যুক্ত। ৪ ফেব্রুয়ারি ২০২৬ ওয়াশিংটনে এর উত্তরসূরি FORGE (Forum on Resource Geostrategic Engagement) ঘোষিত, ভারত সমর্থন জানিয়েছে। মানচিত্রে MSP-র শেষ সদস্য-তালিকা দেখানো হয়েছে।'
  });

  /* ======================= NON-ALIGNED MOVEMENT ======================= */
  grp('nam', {
    members: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cabo Verde', 'Central African Rep.', 'Chad', 'Comoros', 'Dem. Rep. Congo', 'Djibouti', 'Egypt', 'Eq. Guinea', 'Eritrea', 'eSwatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Côte d\'Ivoire', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Congo', 'Rwanda', 'São Tomé and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'S. Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe',
      'Afghanistan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Jordan', 'Kuwait', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Sri Lanka', 'Syria', 'Thailand', 'Timor-Leste', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen', 'Azerbaijan', 'Belarus',
      'Antigua and Barb.', 'Bahamas', 'Barbados', 'Belize', 'Bolivia', 'Colombia', 'Cuba', 'Dominica', 'Dominican Rep.', 'Ecuador', 'Grenada', 'Guatemala', 'Guyana', 'Haiti', 'Honduras', 'Jamaica', 'Nicaragua', 'Panama', 'Peru', 'St. Kitts and Nevis', 'Saint Lucia', 'St. Vin. and Gren.', 'Suriname', 'Trinidad and Tobago', 'Venezuela', 'Fiji', 'Papua New Guinea', 'Vanuatu'],
    observers: ['Argentina', 'Armenia', 'Bosnia and Herz.', 'Brazil', 'China', 'Costa Rica', 'Croatia', 'El Salvador', 'Kazakhstan', 'Kyrgyzstan', 'Mexico', 'Montenegro', 'Paraguay', 'Russia', 'Serbia', 'Tajikistan', 'Ukraine', 'Uruguay'],
    notes: {
      'India': 'Founder — Jawaharlal Nehru; India hosted 7th summit, New Delhi 1983.', 'Egypt': 'Founder — Gamal Abdel Nasser.', 'Ghana': 'Founder — Kwame Nkrumah.', 'Indonesia': 'Founder — Sukarno; Bandung Conference 1955 was the forerunner.',
      'Serbia': 'Observer. Yugoslavia (Tito) was a founder; Belgrade hosted the 1st summit, Sept 1961.', 'Uganda': 'NAM chair since 19th summit, Kampala, Jan 2024.', 'Uzbekistan': 'Expected host of 20th summit (2027).', 'Azerbaijan': 'Chair 2019–23 (Baku summit 2019).'
    }
  }, {
    title: 'Non-Aligned Movement (NAM)', bn: 'জোট-নিরপেক্ষ আন্দোলন', icon: '☮',
    intro: '১৯৫৫ বান্দুং সম্মেলনের ধারাবাহিকতায় ১৯৬১ সালে বেলগ্রেডে প্রথম শীর্ষ সম্মেলন — প্রতিষ্ঠাতা নেহরু (ভারত), টিটো (যুগোস্লাভিয়া), নাসের (মিশর), নক্রুমা (ঘানা), সুকর্ণ (ইন্দোনেশিয়া)। ১২০ সদস্য ও ১৮ পর্যবেক্ষক দেশ — জাতিসংঘের পর বৃহত্তম রাষ্ট্রজোট; স্থায়ী সচিবালয় নেই। ১৯তম সম্মেলন কাম্পালা (জানুয়ারি ২০২৪), সভাপতি উগান্ডা; ২০তম ২০২৭-এ উজবেকিস্তানে প্রত্যাশিত।'
  });

  /* ======================= AFRICAN UNION ======================= */
  grp('au', {
    members: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Rep.', 'Chad', 'Comoros', 'Congo', 'Dem. Rep. Congo', 'Djibouti', 'Egypt', 'Eq. Guinea', 'Eritrea', 'eSwatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Côte d\'Ivoire', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'W. Sahara', 'São Tomé and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'Somaliland', 'South Africa', 'S. Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'],
    notes: {
      'Ethiopia': 'AU Commission HQ, Addis Ababa.', 'South Africa': 'Pan-African Parliament at Midrand.', 'Morocco': 'Left OAU 1984 over W. Sahara; rejoined AU Jan 2017.',
      'W. Sahara': 'Member as the Sahrawi Arab Democratic Republic (SADR) — admitted to OAU 1982.', 'Somaliland': 'Self-declared state; internationally counted as part of Somalia.',
      'Mali': 'SUSPENDED (coups 2020/21).', 'Burkina Faso': 'SUSPENDED (2022 coups).', 'Niger': 'SUSPENDED (July 2023 coup).', 'Sudan': 'SUSPENDED (Oct 2021 coup).',
      'Madagascar': 'SUSPENDED (Oct 2025 military takeover).', 'Guinea-Bissau': 'SUSPENDED (Nov 2025 coup).',
      'Gabon': 'Suspension (Aug 2023 coup) lifted 30 Apr 2025 after elections.', 'Guinea': 'Suspended after 2021 coup; no longer listed as suspended — AU Commission urged lifting in Jan 2026 after the transition.'
    }
  }, {
    title: 'African Union (AU)', bn: 'আফ্রিকান ইউনিয়ন', icon: '🌍',
    intro: 'OAU (১৯৬৩, আদ্দিস আবাবা) থেকে ২০০২-এ ডারবানে আফ্রিকান ইউনিয়ন; সদর আদ্দিস আবাবা, ৫৫ সদস্য। ২০২৬-এ ৬টি দেশ (মালি, বুরকিনা ফাসো, নাইজার, সুদান, মাদাগাস্কার, গিনি-বিসাউ) অসাংবিধানিক সরকার পরিবর্তনের জন্য সাসপেন্ড — নোটে দেখুন। ভারতের G20 সভাপতিত্বে (২০২৩) AU G20-এর স্থায়ী সদস্য হয়।'
  });

  /* ======================= OPEC & OPEC+ ======================= */
  grp('opec', {
    members: ['Algeria', 'Congo', 'Eq. Guinea', 'Gabon', 'Iran', 'Iraq', 'Kuwait', 'Libya', 'Nigeria', 'Saudi Arabia', 'Venezuela'],
    partners: ['Azerbaijan', 'Bahrain', 'Brazil', 'Brunei', 'Kazakhstan', 'Malaysia', 'Mexico', 'Oman', 'Russia', 'S. Sudan', 'Sudan'],
    applicants: ['United Arab Emirates', 'Angola', 'Qatar', 'Ecuador', 'Indonesia'],
    notes: {
      'Iran': 'Founder (Baghdad, Sept 1960).', 'Iraq': 'Founder (Baghdad Conference 1960).', 'Kuwait': 'Founder 1960.', 'Saudi Arabia': 'Founder 1960; de facto leader.', 'Venezuela': 'Founder 1960; largest proven oil reserves.',
      'United Arab Emirates': 'LEFT OPEC and OPEC+ with effect from 1 May 2026 (announced 28 Apr 2026).', 'Angola': 'Left OPEC Jan 2024.', 'Qatar': 'Left OPEC Jan 2019.', 'Ecuador': 'Left OPEC Jan 2020.', 'Indonesia': 'Suspended membership 2016.',
      'Brazil': 'Joined OPEC+ Charter of Cooperation (2025), not OPEC.', 'Russia': 'Leading non-OPEC member of OPEC+ (Declaration of Cooperation, Dec 2016).'
    }
  }, {
    title: 'OPEC & OPEC+', bn: 'ওপেক ও ওপেক+', icon: '🛢',
    types: { members: ['OPEC member', '#c0392b'], partners: ['OPEC+ (non-OPEC) participant', '#e67e22'], applicants: ['Former member (left)', '#95a5a6'] },
    intro: '১৯৬০ সালের সেপ্টেম্বরে বাগদাদে ইরান, ইরাক, কুয়েত, সৌদি আরব ও ভেনেজুয়েলা মিলে OPEC গঠন করে; সদর দপ্তর ভিয়েনা। ২০২৬-এর ১ মে থেকে UAE ওপেক ও ওপেক+ ছেড়ে দেওয়ায় এখন সদস্য ১১। OPEC+ (২০১৬) রাশিয়া সহ অ-ওপেক উৎপাদকদের যুক্ত করে। ভারত বড় আমদানিকারক — "এশিয়ান প্রিমিয়াম" প্রশ্ন আসে।'
  });
})();
