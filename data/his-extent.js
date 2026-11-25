// Empire extent overlays for dynasty pages. Shapes: historical-basemaps (A. Ourednik, GPL-3.0) — approximate.
// Each entry: y = dataset year slice, label = what the shading shows, parts = [[polity name in dataset, colour]], def = shown first.
// Known dataset errors are deliberately NOT used: "Chola Empire" after 1279, "Mauryan Empire" in 100 BCE, Mughal 1600 (same shape as 1530 — Bengal/Gujarat missing).
window.GEO.EXTENT = {
  'his-mahajanapadas': [
    { y: 'bc500', label: 'c. 500 BCE — মগধের উত্থান (বিম্বিসার–অজাতশত্রু)', parts: [['Magadha', '#c0392b']], def: true },
    { y: 'bc323', label: 'c. 323 BCE — নন্দ সাম্রাজ্যের অধীনে মগধ', parts: [['Magadha', '#8e44ad']] }
  ],
  'his-maurya': [
    { y: 'bc300', label: 'c. 300 BCE — চন্দ্রগুপ্ত মৌর্য', parts: [['Mauryan Empire', '#e67e22']] },
    { y: 'bc200', label: 'c. 250–200 BCE — অশোক ও তার পরবর্তী (সর্বোচ্চ বিস্তার)', parts: [['Mauryan Empire', '#d35400']], def: true }
  ],
  'his-postmaurya': [
    { y: '100', label: 'c. 100 CE — কুষাণ, শক ও সাতবাহন', parts: [['Kushan Empire', '#8e44ad'], ['Saka Kingdom', '#16a085'], ['Satavahanihara', '#c0392b']], def: true }
  ],
  'his-gupta': [
    { y: '400', label: 'c. 400 CE — চন্দ্রগুপ্ত দ্বিতীয় (বিক্রমাদিত্য)', parts: [['Gupta Empire', '#d4a017']], def: true }
  ],
  'his-earlymed': [
    { y: '600', label: 'c. 600 CE — পল্লব ও চালুক্য', parts: [['Pallavas', '#2980b9'], ['Chalukyas', '#c0392b']] },
    { y: '800', label: 'c. 800 CE — ত্রিপক্ষীয় সংগ্রাম: পাল, প্রতিহার, রাষ্ট্রকূট', parts: [['Palas', '#27ae60'], ['Gurjara Pratihara', '#e67e22'], ['Rashtrakuta state', '#8e44ad'], ['Pallava state', '#2980b9'], ['Pandya state', '#16a085']], def: true },
    { y: '1000', label: 'c. 1000 CE — চোল সাম্রাজ্য (রাজরাজ চোল)', parts: [['Chola Empire', '#c0392b'], ['Chalukya Empire', '#8e44ad'], ['Palas', '#27ae60']] }
  ],
  'his-sultanate': [
    { y: '1200', label: 'c. 1200 — দিল্লি সুলতানির শুরু (ঘুরি–আইবক)', parts: [['Sultanate of Delhi', '#16a085']] },
    { y: '1300', label: 'c. 1300 — খলজি যুগ', parts: [['Sultanate of Delhi', '#138d75']] },
    { y: '1400', label: 'তুঘলক যুগের সর্বোচ্চ বিস্তার (মুহম্মদ বিন তুঘলক, c. 1330–35) — আনুমানিক', parts: [['Sultanate of Delhi', '#117864']], def: true },
    { y: '1500', label: 'c. 1500 — লোদি যুগ; বাহমনি, বাংলা ও বিজয়নগর', parts: [['Sultanate of Delhi', '#0e6655'], ['Bahmani Kingdom', '#8e44ad'], ['Bengal', '#2980b9'], ['Vijayanagara', '#c0392b']] }
  ],
  'his-vijayanagara': [
    { y: '1500', label: 'c. 1500 — বিজয়নগর ও বাহমনি', parts: [['Vijayanagara', '#c0392b'], ['Bahmani Kingdom', '#8e44ad']], def: true },
    { y: '1530', label: 'c. 1530 — কৃষ্ণদেবরায়ের পর; দাক্ষিণাত্যের সুলতানি', parts: [['Vijayanagara', '#c0392b'], ['Bijapur', '#8e44ad'], ['Ahmadnagar', '#2980b9']] },
    { y: '1600', label: 'c. 1600 — তালিকোটার (১৫৬৫) পরে অবশিষ্ট বিজয়নগর', parts: [['Vijayanagara', '#a93226'], ['Bijapur', '#8e44ad'], ['Ahmadnagar', '#2980b9']] }
  ],
  'his-mughal': [
    { y: '1530', label: '১৫৩০ — বাবর (পানিপথ ১৫২৬-এর পরে)', parts: [['Mughal Empire', '#52be80']] },
    { y: '1650', label: '১৬৫০ — শাহজাহান', parts: [['Mughal Empire', '#229954']] },
    { y: '1700', label: '১৭০০ — ঔরঙ্গজেব (সর্বোচ্চ বিস্তার)', parts: [['Mughal Empire', '#1e8449']], def: true },
    { y: '1715', label: '১৭১৫ — পতনের শুরু; মারাঠাদের উত্থান', parts: [['Mughal Empire', '#196f3d'], ['Maratha', '#e67e22']] }
  ],
  'his-maratha': [
    { y: '1715', label: '১৭১৫ — শাহু ও পেশোয়া বালাজি বিশ্বনাথ', parts: [['Maratha', '#e67e22'], ['Mughal Empire', '#27ae60']] },
    { y: '1783', label: '১৭৮৩ — মারাঠা কনফেডারেসি (সর্বোচ্চ বিস্তারের কাছাকাছি)', parts: [['Maratha Confederacy', '#d35400'], ['Mysore', '#8e44ad']], def: true }
  ],
  'his-british': [
    { y: '1815', label: '১৮১৫ — ইস্ট ইন্ডিয়া কোম্পানির শাসন', parts: [['British East India Company', '#c0392b']] },
    { y: '1880', label: '১৮৮০ — ব্রিটিশ রাজ (১৮৫৮-র পরে ক্রাউনের শাসন)', parts: [['British Raj', '#a93226']], def: true }
  ],
  'his-mongols': [
    { y: '1200', label: 'c. 1200 — চেঙ্গিস খানের উত্থান', parts: [['Mongol Empire', '#7d3c98']] },
    { y: '1279', label: '১২৭৯ — মোঙ্গল খানাতগুলি (ইলখানাত, চাগাতাই, গোল্ডেন হোর্ড)', parts: [['Ilkhanate', '#7d3c98'], ['Chagatai Khanate', '#a569bd'], ['Khanate of the Golden Horde', '#5b2c6f']], def: true },
    { y: '1400', label: '১৪০০ — তৈমুরের সাম্রাজ্য', parts: [['Timurid Empire', '#884ea0']] }
  ],
  'his-islamic': [
    { y: '800', label: 'c. 800 — আব্বাসীয় খিলাফত (হারুন আল-রশিদ)', parts: [['Abbasid Caliphate', '#117a65']], def: true },
    { y: '1600', label: '১৬০০ — উসমানীয় ও সাফাভি', parts: [['Ottoman Empire', '#922b21'], ['Safavid Empire', '#1f618d']] }
  ]
};
