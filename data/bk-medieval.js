// Books & philosophy — medieval Indian authors (1000–1750) and foreign travellers' accounts of India.
// Sources: Wikipedia, Britannica, NCERT (Themes in Indian History II; Our Pasts II), IGNOU MHI/BHIC, Sahitya Akademi.
GEO.add({
  id: 'bk-medieval', group: 'bk-in', title: 'Medieval Indian Authors (1000–1750)', bn: 'মধ্যযুগীয় ভারতের লেখক ও গ্রন্থ', icon: '📜', world: false,
  intro: 'সুলতানি ও মুঘল দরবারের ইতিহাসগ্রন্থ, সুফি সাধক, ভক্তি ও সন্ত কবি এবং আঞ্চলিক ভাষার মধ্যযুগীয় সাহিত্য। মানচিত্রে লেখকের পিনে ক্লিক করুন → জীবন ও মূল ভাবনা → গ্রন্থ তালিকা → গ্রন্থে ক্লিক করে সারসংক্ষেপ দেখুন।',
  types: {
    sultanate: ['Sultanate & Deccani court writing', '#b71c1c'],
    mughal: ['Mughal chronicles & memoirs', '#e65100'],
    sufi: ['Sufi saints & Islamic thought', '#2e7d32'],
    sant: ['Nirguna Sants & Sikh Gurus', '#6a1b9a'],
    saguna: ['Saguna Bhakti & Hindi court poets', '#c2185b'],
    westbh: ['Marathi & Gujarati Bhakti', '#f9a825'],
    east: ['Bengal, Assam, Odisha & Mithila', '#00838f'],
    south: ['Vijayanagara & South India', '#1565c0']
  },
  pts: [
    // ---------- Delhi Sultanate & Deccani court writing ----------
    ['Hasan Nizami', 28.5445, 77.1855, 'Delhi (Qutb complex, Aibak\'s capital; pin offset)', 'Taj-ul-Maasir — first official history of the Delhi Sultanate', 'sultanate',
      { era: 'fl. c. 1190–1220',
        place: 'Wrote at Delhi under Qutbuddin Aibak and Iltutmish (pin near Qutb Minar, offset)',
        more: 'Persian poet-historian from Nishapur who migrated to India. His ornate Taj-ul-Maasir is regarded as the earliest official chronicle of the Delhi Sultanate, covering Muhammad Ghori\'s campaigns, Aibak and the early years of Iltutmish. Asked in prelims lists of Sultanate sources.',
        books: [
          { t: 'Taj-ul-Maasir', y: 'begun c. 1205', lang: 'Persian', sum: 'Rhetorical prose-and-verse chronicle of the Ghurid conquest of north India (Tarain, Ajmer, Delhi, Kanauj) and the reign of Qutbuddin Aibak, continued into Iltutmish\'s reign. Valuable for early Sultanate political history despite heavy ornamentation.', key: 'Aibak; Ghurid conquest; earliest Sultanate chronicle' }
        ] } ],
    ['Fakhr-i-Mudabbir', 28.5245, 77.1655, 'Delhi (court of Iltutmish; pin offset)', 'Adab-ul-Harb wa-al-Shujaa — manual on war and statecraft', 'sultanate',
      { era: 'fl. late 12th – early 13th c.',
        place: 'Associated with the early Delhi Sultanate court (pin offset from Qutb complex)',
        more: 'Fakhr-i-Mudabbir (Fakhruddin Mubarak Shah) served the Ghurids and the early Delhi Sultans. His treatise is a key source for military organisation, horses, weapons and the ideal of kingship in the 13th century.',
        books: [
          { t: 'Adab-ul-Harb wa-al-Shujaa', y: 'early 13th c. (dedicated to Iltutmish)', lang: 'Persian', sum: 'A "mirror for princes" on the art of war: duties of the king, army organisation, horses, arms, siege and battle tactics, and the conduct of officials. Used by historians to reconstruct early Sultanate military practice.', key: 'Art of war; kingship; army organisation' },
          { t: 'Shajara-i-Ansab', y: 'c. 1206', lang: 'Persian', sum: 'Genealogies of the Prophet, his companions and Muslim rulers, prefaced by a historical introduction dealing with the Ghurids and Qutbuddin Aibak.', key: 'Genealogies; Aibak' }
        ] } ],
    ['Minhaj-i-Siraj Juzjani', 28.5245, 77.1855, 'Delhi (Qutb complex; chief qazi under Nasiruddin Mahmud)', 'Tabaqat-i-Nasiri — history up to 1260; eyewitness of the Mongol threat', 'sultanate',
      { era: '1193 – after 1260',
        place: 'Chief qazi and historian at Delhi (pin: Qutb complex)',
        more: 'Born at Juzjan/Ghur (Afghanistan), he fled the Mongols to India (1227), served Iltutmish, Raziya and Nasiruddin Mahmud, and rose to chief qazi of Delhi. His work, dedicated to Sultan Nasiruddin Mahmud, is the principal source for the Slave (Mamluk) dynasty and for Balban\'s early career.',
        books: [
          { t: 'Tabaqat-i-Nasiri', y: '1259–60', lang: 'Persian', sum: 'A general history arranged in 23 "tabaqat" (sections) from the Prophets and early Islamic dynasties to the Ghaznavids, Ghurids and the Delhi Sultans up to 1260. Detailed for Iltutmish, Raziya and Nasiruddin Mahmud, and for the Mongol invasions which Minhaj witnessed.', key: 'Slave dynasty; Raziya; Balban; Mongols' }
        ] } ],
    ['Amir Khusrau', 28.5915, 77.2420, 'Delhi (Nizamuddin Dargah, where he is buried beside his pir)', '"Tuti-e-Hind"; Persian & Hindavi poet; Khazain-ul-Futuh', 'sultanate',
      { era: '1253–1325',
        place: 'Born at Patiali (UP); court poet at Delhi; buried at Nizamuddin Dargah',
        idea: 'A Chishti disciple of Nizamuddin Auliya who fused Persian and Indian traditions — celebrating Hindustan, its language and music as equal to any land.',
        more: 'Served seven Delhi rulers from Balban to Ghiyasuddin Tughlaq. Called "Tuti-e-Hind" (Parrot of India); credited with shaping qawwali and with Hindavi riddles and verses (the invention of sitar/tabla is a later legend). His masnavis record events of the Khalji period. UPSC asks on his works and composite culture.',
        books: [
          { t: 'Khazain-ul-Futuh (Tarikh-i-Alai)', y: '1311–12', lang: 'Persian', sum: 'Prose account of Alauddin Khalji\'s conquests and reforms: campaigns in Gujarat, Ranthambhor, Chittor, Malwa and Malik Kafur\'s Deccan expeditions (Devagiri, Warangal, Dwarasamudra, Madurai), plus his market and building works.', key: 'Alauddin Khalji; Malik Kafur; Deccan campaigns' },
          { t: 'Nuh Sipihr (Nine Skies)', y: '1318', lang: 'Persian', sum: 'Masnavi for Qutbuddin Mubarak Shah Khalji, famous for its praise of India — its climate, flora, learning, languages and people — arguing Hindustan surpasses other lands.', key: 'Praise of Hindustan; Indian languages' },
          { t: 'Qiran-us-Sadain', y: '1289', lang: 'Persian', sum: 'Masnavi on the meeting of Sultan Kaiqubad and his father Bughra Khan on the river Ghaghra; gives a picture of Delhi and court life.', key: 'Meeting of two auspicious stars; Kaiqubad' },
          { t: 'Ashiqa (Duval Rani Khizr Khan)', y: '1316', lang: 'Persian', sum: 'Romantic masnavi on the love of prince Khizr Khan, son of Alauddin, and the Gujarat princess Deval Rani.', key: 'Khizr Khan; Deval Rani' },
          { t: 'Tughlaq Nama', y: 'c. 1320', lang: 'Persian', sum: 'Masnavi on Ghiyasuddin Tughlaq\'s rise to power and the overthrow of Khusrau Khan.', key: 'Rise of the Tughlaqs' }
        ] } ],
    ['Amir Hasan Sijzi', 28.6115, 77.2420, 'Delhi (circle of Nizamuddin Auliya; pin offset)', 'Fawaid-ul-Fuad — conversations of Nizamuddin Auliya', 'sufi',
      { era: 'c. 1253–1336',
        place: 'Recorded his master\'s talks at Delhi (pin offset from Nizamuddin Dargah); died at Daulatabad',
        more: 'Persian poet ("Sadi of Hindustan") and friend of Amir Khusrau. His record of Nizamuddin Auliya\'s assemblies began the Indian malfuzat genre (recorded sayings of Sufi masters) — key for NCERT Class 12 theme on Bhakti-Sufi traditions.',
        books: [
          { t: 'Fawaid-ul-Fuad', y: '1307–1322', lang: 'Persian', sum: 'Diary of 188 sessions with Shaikh Nizamuddin Auliya, recording his teachings on love of God, renunciation, service to humanity, sama (music), and anecdotes of Chishti saints. The model for later Sufi malfuzat literature.', key: 'Malfuzat; Chishti teachings; sama' }
        ] } ],
    ['Ziauddin Barani', 28.5126, 77.2609, 'Delhi (Tughlaqabad; nadim of Muhammad bin Tughlaq)', 'Tarikh-i-Firoz Shahi; Fatawa-i-Jahandari — political theory', 'sultanate',
      { era: 'c. 1285–1357',
        place: 'Born at Baran (Bulandshahr); courtier of Muhammad bin Tughlaq at Delhi (pin: Tughlaqabad)',
        idea: 'Kingship must rest on zawabit (state-made laws) alongside the sharia; the sultan should uphold Islam and the privileges of the well-born.',
        more: 'Companion of Muhammad bin Tughlaq for 17 years, he fell from favour under Firuz Shah and wrote in poverty. His history is the main source for Balban, Alauddin\'s market control and agrarian measures, and Muhammad bin Tughlaq\'s projects (token currency, transfer of capital, Doab taxation).',
        books: [
          { t: 'Tarikh-i-Firoz Shahi', y: '1357', lang: 'Persian', sum: 'History of the Delhi Sultans from Balban to the early years of Firuz Shah Tughlaq, continuing Minhaj. Analyses Alauddin Khalji\'s price control and land revenue, and Muhammad bin Tughlaq\'s experiments, with moral judgements on rulers.', key: 'Market control; token currency; Daulatabad' },
          { t: 'Fatawa-i-Jahandari', y: 'c. 1350s', lang: 'Persian', sum: 'Treatise on statecraft in the form of advice from Mahmud of Ghazni: the ideal sultan, the role of zawabit (secular regulations), justice, and preserving the dominance of the nobility and orthodox ulama.', key: 'Zawabit; kingship; political theory' }
        ] } ],
    ['Shams Siraj Afif', 28.6357, 77.2433, 'Delhi (Firozabad / Firoz Shah Kotla)', 'Tarikh-i-Firoz Shahi — reign of Firuz Shah Tughlaq', 'sultanate',
      { era: 'fl. late 14th c.',
        place: 'Wrote about Firuz Shah\'s court at Firozabad, Delhi (pin: Firoz Shah Kotla)',
        more: 'A courtier whose family served the Tughlaqs. His admiring account (also titled Tarikh-i-Firoz Shahi, not to be confused with Barani\'s) describes Firuz\'s canals, new towns, jizya on Brahmins, slave department and the transport of the Ashokan pillars to Delhi.',
        books: [
          { t: 'Tarikh-i-Firoz Shahi', y: 'c. 1398–1400', lang: 'Persian', sum: 'Detailed account of Firuz Shah Tughlaq\'s reign (1351–88): campaigns to Bengal and Thatta, irrigation canals, towns like Hisar and Jaunpur, the Diwan-i-Bandagan for slaves, revenue policy, and moving the Ashokan pillars from Topra and Meerut.', key: 'Firuz Tughlaq; canals; Ashokan pillars' }
        ] } ],
    ['Isami', 19.9427, 75.2132, 'Daulatabad (Bahmani court, Deccan)', 'Futuh-us-Salatin — "Shahnama of Hindustan"', 'sultanate',
      { era: 'b. c. 1311 – fl. 1350',
        place: 'Migrated with Muhammad bin Tughlaq\'s transfer of capital; wrote at Daulatabad (pin)',
        more: 'Abdul Malik Isami was forced to move from Delhi to Daulatabad in 1327. His verse chronicle, dedicated to Alauddin Hasan Bahman Shah, founder of the Bahmani kingdom, is hostile to Muhammad bin Tughlaq and is a counterpoint to Barani.',
        books: [
          { t: 'Futuh-us-Salatin', y: '1349–50', lang: 'Persian', sum: 'Epic in the style of Firdausi\'s Shahnama narrating Muslim rule in India from Mahmud of Ghazni to Muhammad bin Tughlaq and the Bahmani revolt. Gives an eyewitness picture of the transfer of capital to Daulatabad.', key: 'Verse history; Bahman Shah; transfer of capital' }
        ] } ],
    ['Yahya bin Ahmad Sirhindi', 28.5740, 77.2240, 'Delhi (Kotla Mubarakpur, Sayyid sultans)', 'Tarikh-i-Mubarak Shahi — main source for the Sayyids', 'sultanate',
      { era: 'fl. c. 1430s',
        place: 'Wrote at Delhi for Sayyid sultan Mubarak Shah (pin: Kotla Mubarakpur, his tomb area)',
        more: 'The only contemporary historian of the Sayyid dynasty (1414–51). His chronicle is the base for later accounts by Nizamuddin Ahmad, Badauni and Ferishta for the period after Timur\'s invasion.',
        books: [
          { t: 'Tarikh-i-Mubarak Shahi', y: 'c. 1434', lang: 'Persian', sum: 'History of the Delhi Sultanate from Muhammad Ghori to the Sayyid sultan Muhammad Shah, most valuable for the late Tughlaqs, Timur\'s invasion (1398) and the reigns of Khizr Khan and Mubarak Shah.', key: 'Sayyid dynasty; Timur\'s invasion' }
        ] } ],
    ['Muhammad Qasim Ferishta', 16.8302, 75.7360, 'Bijapur (Adil Shahi court; pin: Gol Gumbaz)', 'Tarikh-i-Firishta — history of India & the Deccan sultanates', 'sultanate',
      { era: 'c. 1560 – c. 1620',
        place: 'Wrote at Bijapur for Ibrahim Adil Shah II (pin: Gol Gumbaz)',
        more: 'Persian-born historian who served at Ahmadnagar and then Bijapur. His general history (also called Gulshan-i-Ibrahimi) is the major source for the Bahmani and five Deccan sultanates and was translated into English by Alexander Dow (1768) and John Briggs (1829).',
        books: [
          { t: 'Tarikh-i-Firishta (Gulshan-i-Ibrahimi)', y: 'c. 1606–1611', lang: 'Persian', sum: 'Comprehensive history of Muslim rule in India: Ghaznavids, Delhi Sultans, Bahmanis, the Deccan sultanates (Bijapur, Ahmadnagar, Golconda, Bidar, Berar), and the regional kingdoms of Gujarat, Malwa, Khandesh, Bengal, Multan, Sindh, Kashmir and Malabar.', key: 'Deccan sultanates; Bahmanis; regional kingdoms' }
        ] } ],
    ['Ibrahim Adil Shah II', 16.8290, 75.7080, 'Bijapur (Ibrahim Rauza, his tomb)', 'Kitab-i-Nauras — Dakhani songs; "Jagadguru"', 'sultanate',
      { era: '1571–1627 (r. 1580–1627)',
        place: 'Sultan of Bijapur (pin: Ibrahim Rauza)',
        more: 'Adil Shahi ruler known for religious tolerance and patronage of music, painting and learning; called "Jagadguru" and "Abla Baba". He founded the city of Nauraspur and patronised Ferishta.',
        books: [
          { t: 'Kitab-i-Nauras', y: 'c. 1600', lang: 'Dakhani (early Urdu)', sum: 'Collection of 59 songs set to ragas, invoking Saraswati and Ganesha alongside Islamic saints, celebrating the nine rasas (nau-ras) of Indian aesthetics. A landmark of Deccani composite culture and early Dakhani literature.', key: 'Nine rasas; ragas; Saraswati invocation' }
        ] } ],
    ['Muhammad Quli Qutb Shah', 17.3616, 78.4747, 'Hyderabad (Charminar; he founded the city 1591)', 'First Urdu poet with a complete Diwan', 'sultanate',
      { era: '1565–1611 (r. 1580–1611)',
        place: 'Golconda sultan who founded Hyderabad and built the Charminar (pin)',
        more: 'Fifth Qutb Shahi ruler of Golconda. Wrote in Dakhani, Persian and Telugu; regarded as the first "Sahib-e-Diwan" poet of Urdu. His poems describe festivals (Basant, Diwali, Eid), the seasons and his love Bhagmati.',
        books: [
          { t: 'Kulliyat-i-Muhammad Quli Qutb Shah', y: 'compiled 1616 (posthumous)', lang: 'Dakhani Urdu & Persian', sum: 'Collected poems — ghazals, masnavis, qasidas — on love, nature, Hyderabad, Indian festivals and court life. Edited by his successor Sultan Muhammad Qutb Shah; the earliest complete Diwan in Urdu.', key: 'First Urdu Diwan; Dakhani; Hyderabad' }
        ] } ],
    ['Jonaraja', 34.0950, 74.8100, 'Srinagar, Kashmir (court of Zain-ul-Abidin)', 'Dvitiya Rajatarangini — continued Kalhana', 'sultanate',
      { era: 'd. 1459',
        place: 'Sanskrit court poet of Sultan Zain-ul-Abidin at Srinagar (pin: city near Hari Parbat)',
        more: 'Continued Kalhana\'s Rajatarangini (1148) to his own times, covering the end of Hindu rule and the Shah Mir sultans of Kashmir. His work and that of his pupil Srivara (Tritiya Rajatarangini) are prime sources for Zain-ul-Abidin "Budshah", noted for tolerance and Sanskrit-Persian translations.',
        books: [
          { t: 'Dvitiya Rajatarangini', y: 'c. 1450s', lang: 'Sanskrit', sum: 'Verse chronicle of Kashmir from Jayasimha (12th c.) to Sultan Zain-ul-Abidin: the Mongol raid of Dulucha, Rinchana\'s conversion, the Shah Mir dynasty, Sikandar\'s persecutions and Zain-ul-Abidin\'s restoration of temples and patronage of learning.', key: 'Kashmir sultans; Zain-ul-Abidin; sequel to Kalhana' }
        ] } ],

    // ---------- Mughal chronicles & memoirs ----------
    ['Babur', 27.1990, 78.0310, 'Agra (Aram Bagh / Ram Bagh, his garden)', 'Baburnama — autobiography in Chagatai Turkic', 'mughal',
      { era: '1483–1530',
        place: 'Founder of the Mughal empire; laid out Aram Bagh at Agra (pin), where he was first buried',
        more: 'Zahiruddin Muhammad Babur, Timurid prince of Ferghana, won the First Battle of Panipat (1526), Khanwa (1527) and Ghaghra (1529). His candid memoir is one of the great autobiographies of world literature; Abdur Rahim Khan-i-Khanan translated it into Persian in 1589 for Akbar.',
        books: [
          { t: 'Baburnama (Tuzuk-i-Baburi)', y: 'c. 1494–1529', lang: 'Chagatai Turkic', sum: 'Diary-memoir of Babur\'s life: Ferghana, Samarkand and Kabul, the Indian campaigns, and detailed observations on Hindustan\'s geography, fauna, flora, people, gardens and economy — including his famous complaint that India lacked good fruits, ice and cold water.', key: 'Panipat 1526; Khanwa; description of Hindustan' }
        ] } ],
    ['Gulbadan Begum', 27.1795, 78.0211, 'Agra (Mughal court; pin: Agra Fort)', 'Humayun-nama — the only surviving prose by a Mughal woman of the 16th c.', 'mughal',
      { era: 'c. 1523–1603',
        place: 'Daughter of Babur, lived at the Mughal court at Agra and Fatehpur Sikri (pin: Agra Fort)',
        more: 'Half-sister of Humayun and aunt of Akbar, who asked her to write down her memories for Abul Fazl\'s Akbarnama. She also led a seven-year pilgrimage of royal women to Mecca (1576–82). Her work offers rare insight into the Mughal household (haram).',
        books: [
          { t: 'Humayun-nama (Ahwal-i-Humayun Badshah)', y: 'c. 1587', lang: 'Persian', sum: 'Simple, personal account of Babur\'s last years and Humayun\'s reign: family conflicts with Kamran and Hindal, defeat by Sher Shah, exile to Persia, and the life of women in the royal household. Only one incomplete manuscript survives (British Library).', key: 'Mughal women; Humayun; Babur\'s death' }
        ] } ],
    ['Abbas Khan Sarwani', 24.9460, 84.0170, 'Sasaram, Bihar (pin: Sher Shah Suri\'s tomb)', 'Tuhfa-i-Akbar Shahi — life of Sher Shah', 'mughal',
      { era: 'fl. 1570s–1580s',
        place: 'Subject\'s home town Sasaram (pin: Sher Shah\'s tomb); author wrote for Akbar',
        more: 'An Afghan of the Sarwani clan who served Akbar. Commissioned to collect Afghan history, he produced the chief biography of Sher Shah Suri, the main source for his administrative reforms (rupiya, Grand Trunk Road sarais, land measurement).',
        books: [
          { t: 'Tuhfa-i-Akbar Shahi (Tarikh-i-Sher Shahi)', y: 'c. 1579–1586', lang: 'Persian', sum: 'Biography of Sher Shah: his early career at Sasaram, defeat of Humayun at Chausa (1539) and Kannauj (1540), and reforms — measurement-based revenue, patta and qabuliyat, roads and sarais, silver rupiya and policing.', key: 'Sher Shah; Chausa; patta-qabuliyat; sarais' }
        ] } ],
    ['Abul Fazl', 27.0945, 77.6679, 'Fatehpur Sikri (Akbar\'s capital and Ibadat Khana)', 'Akbarnama & Ain-i-Akbari; ideology of sulh-i-kul', 'mughal',
      { era: '1551–1602',
        place: 'Akbar\'s friend, minister and historian at Fatehpur Sikri (pin); killed near Narwar by Bir Singh Bundela at Jahangir\'s instigation',
        idea: 'Padshahi as divine light (farr-i-izadi) passed to the ruler; the ideal king practises sulh-i-kul — absolute peace with all faiths.',
        more: 'Son of Shaikh Mubarak and brother of Faizi; one of Akbar\'s "navratnas". His works articulate Mughal imperial ideology and provide unrivalled statistics on administration, revenue (zabt, dahsala), mansabdari and provinces. Core NCERT Class 12 source ("Kings and Chronicles").',
        books: [
          { t: 'Akbarnama', y: 'c. 1590–1602', lang: 'Persian', sum: 'Official history of Akbar in three volumes: Akbar\'s ancestors to Humayun; Akbar\'s reign year by year to the 46th regnal year (1601-2). Presents Akbar as an ideal, divinely illuminated ruler. The third volume is the Ain-i-Akbari.', key: 'Official history; farr-i-izadi; regnal years' },
          { t: 'Ain-i-Akbari', y: 'completed 1598', lang: 'Persian', sum: 'Gazetteer of Akbar\'s empire in five books: imperial household, army and mansabdari, revenue system (zabt, dahsala, crop rates), descriptions of the subas, and Indian religions, sciences, customs and philosophy. A statistical treasure for economic history.', key: 'Mansabdari; dahsala; suba statistics' },
          { t: 'Ayar-i-Danish', y: '1588', lang: 'Persian', sum: 'Simplified Persian rendering of the fables of Kalila wa Dimna (Anvar-i-Suhayli), ultimately derived from the Panchatantra, made for Akbar.', key: 'Panchatantra fables in Persian' }
        ] } ],
    ['Faizi', 27.1145, 77.6679, 'Fatehpur Sikri (Akbar\'s poet laureate; pin offset)', 'Malik-ush-Shuara; Persian Lilavati and Nal-Daman', 'mughal',
      { era: '1547–1595',
        place: 'Poet laureate at Akbar\'s court, Fatehpur Sikri (pin offset)',
        more: 'Shaikh Abul Faiz "Faizi", elder brother of Abul Fazl, was made Malik-ush-Shuara (king of poets) in 1588 and tutored Akbar\'s sons. Worked in the imperial translation bureau and went as envoy to the Deccan (Khandesh, Ahmadnagar).',
        books: [
          { t: 'Nal-Daman', y: '1594', lang: 'Persian', sum: 'Persian masnavi retelling the Mahabharata love story of Nala and Damayanti, written at Akbar\'s request as part of his Khamsa project.', key: 'Nala-Damayanti; Persian masnavi' },
          { t: 'Lilavati (Persian translation)', y: '1587', lang: 'Persian', sum: 'Translation of Bhaskara II\'s Sanskrit arithmetic treatise Lilavati, part of Akbar\'s programme to make Indian sciences available in Persian.', key: 'Bhaskara II; mathematics; translation bureau' }
        ] } ],
    ['Abdul Qadir Badauni', 27.0945, 77.6879, 'Fatehpur Sikri (Akbar\'s translation bureau; pin offset)', 'Muntakhab-ut-Tawarikh — critical history of Akbar', 'mughal',
      { era: '1540 – c. 1615',
        place: 'Imam and translator at Akbar\'s court, Fatehpur Sikri (pin offset)',
        more: 'An orthodox Sunni scholar, Badauni was employed to translate Sanskrit texts but disapproved of Akbar\'s religious experiments. His secret, critical history gives the "unofficial" view of the Ibadat Khana debates and Din-i-Ilahi, balancing Abul Fazl.',
        books: [
          { t: 'Muntakhab-ut-Tawarikh', y: 'completed c. 1595–96', lang: 'Persian', sum: 'Three-volume history: Ghaznavids to Humayun; Akbar\'s reign to 1595, sharply critical of his heterodoxy, the Mahzar (1579) and Din-i-Ilahi; and biographies of contemporary scholars, saints and poets. Kept hidden; released under Jahangir.', key: 'Critic of Akbar; Ibadat Khana; Din-i-Ilahi' },
          { t: 'Persian Ramayana and part of Razmnama', y: '1580s–1590s', lang: 'Persian', sum: 'Translated the Ramayana into Persian (c. 1589) and worked on the Razmnama (Persian Mahabharata) for Akbar; also translated Simhasana Dvatrimshika as Khirad Afza.', key: 'Translation of Sanskrit epics' }
        ] } ],
    ['Nizamuddin Ahmad', 31.6000, 74.3157, 'Lahore (Mughal Lahore; pin offset north of Lahore Fort)', 'Tabaqat-i-Akbari — first Indo-Muslim general history', 'mughal',
      { era: '1551–1594',
        place: 'Mughal bakhshi of Gujarat; died at Lahore (pin: Lahore Fort)',
        more: 'Khwaja Nizamuddin Ahmad Bakhshi served Akbar as a military and revenue officer. His history is the first to treat India as a unit, with sections on regional kingdoms, and was used by Badauni and Ferishta.',
        books: [
          { t: 'Tabaqat-i-Akbari', y: 'c. 1593', lang: 'Persian', sum: 'History of India from the Ghaznavids to the 38th year of Akbar (1593), followed by sections on the provincial dynasties — Deccan, Gujarat, Malwa, Bengal, Jaunpur, Kashmir, Sindh, Multan. Sober and factual in style.', key: 'Regional kingdoms; Akbar to 1593' }
        ] } ],
    ['Jahangir', 31.6222, 74.3031, 'Lahore (Shahdara; his tomb)', 'Tuzuk-i-Jahangiri — imperial memoir', 'mughal',
      { era: '1569–1627 (r. 1605–1627)',
        place: 'Mughal emperor; buried at Shahdara Bagh, Lahore (pin)',
        more: 'Nuruddin Muhammad Salim, son of Akbar. Continued the Mughal tradition of memoir writing begun by Babur. A keen naturalist and patron of painting (Mansur, Abul Hasan); known for his "chain of justice" and for receiving Thomas Roe.',
        books: [
          { t: 'Tuzuk-i-Jahangiri (Jahangirnama)', y: '1605–1624 (later parts by Mutamad Khan)', lang: 'Persian', sum: 'Jahangir\'s own record of his reign: the chain of justice, Khusrau\'s rebellion and execution of Guru Arjan, the Mewar settlement, his love of Kashmir, detailed notes on birds, animals and plants, art patronage and wine. Continued after 1622 by Mutamad Khan.', key: 'Chain of justice; naturalist; Kashmir' }
        ] } ],
    ['Abdul Hamid Lahori', 27.1751, 78.0421, 'Agra (Shah Jahan\'s court; pin: Taj Mahal)', 'Padshahnama — official history of Shah Jahan', 'mughal',
      { era: 'd. 1654',
        place: 'Official historian of Shah Jahan (pin: Taj Mahal, whose construction he records)',
        more: 'A pupil of Abul Fazl\'s style, chosen by Shah Jahan to write the official history of the first two decades of his reign. The illustrated Windsor Castle Padshahnama manuscript is a masterpiece of Mughal painting (NCERT "Kings and Chronicles").',
        books: [
          { t: 'Padshahnama', y: 'c. 1636–1654', lang: 'Persian', sum: 'Official chronicle of the first twenty years of Shah Jahan\'s reign in two daftars of ten years each (to 1647): court ceremonial, mansabdari, campaigns in the Deccan and Central Asia, and buildings like the Taj Mahal. Continued by Muhammad Waris.', key: 'Shah Jahan; court ceremony; Taj Mahal' }
        ] } ],
    ['Dara Shikoh', 28.6562, 77.2410, 'Delhi (Shahjahanabad; pin: Red Fort)', 'Majma-ul-Bahrain; Persian Upanishads (Sirr-i-Akbar)', 'mughal',
      { era: '1615–1659',
        place: 'Eldest son of Shah Jahan at Shahjahanabad (pin: Red Fort); buried at Humayun\'s Tomb',
        idea: 'Islam\'s Sufism and Hindu Vedanta express the same truth — two oceans meeting; the Upanishads are the "hidden book" alluded to in the Quran.',
        more: 'Qadiri Sufi disciple of Mian Mir and Mulla Shah; defeated by Aurangzeb at Samugarh (1658) and executed for heresy (1659). His Persian Upanishads, rendered into Latin by Anquetil-Duperron (Oupnek\'hat, 1801-02), influenced Schopenhauer.',
        books: [
          { t: 'Majma-ul-Bahrain (Mingling of Two Oceans)', y: '1655', lang: 'Persian', sum: 'Comparative study of Sufi and Vedantic terminology — God, soul, elements, senses, cosmology, liberation — showing correspondences between Islamic mysticism and Hindu thought. A key text of Mughal syncretism.', key: 'Sufism and Vedanta; composite culture' },
          { t: 'Sirr-i-Akbar (The Great Secret)', y: '1657', lang: 'Persian', sum: 'Translation of about 50 Upanishads made at Benares with the help of pandits. Through its Latin version it introduced the Upanishads to European philosophy.', key: '50 Upanishads; Oupnek\'hat; Schopenhauer' },
          { t: 'Safinat-ul-Auliya', y: '1640', lang: 'Persian', sum: 'Biographical dictionary of Sufi saints of various orders, especially the Qadiris.', key: 'Sufi hagiography; Qadiri order' }
        ] } ],
    ['Saqi Mustaid Khan', 28.6762, 77.2410, 'Delhi (Aurangzeb\'s court; pin offset)', 'Maasir-i-Alamgiri — history of Aurangzeb\'s reign', 'mughal',
      { era: 'd. 1724',
        place: 'Mughal court historian at Delhi (pin offset)',
        more: 'Muhammad Saqi Mustaid Khan was a secretary of Aurangzeb\'s minister Inayatullah Khan. Since Aurangzeb discontinued official history after his 10th year, this work, completed after his death, is the main narrative for the full reign.',
        books: [
          { t: 'Maasir-i-Alamgiri', y: '1710', lang: 'Persian', sum: 'History of Aurangzeb\'s 50-year reign, summarising the Alamgirnama for the first decade and drawing on state records for the rest: the Deccan wars, the Marathas, the Rajput rebellions, the jizya (1679) and religious policy.', key: 'Aurangzeb; Deccan wars; jizya 1679' }
        ] } ],
    ['Khafi Khan', 19.8962, 75.3433, 'Aurangabad, Deccan (served Mughals there; pin offset)', 'Muntakhab-ul-Lubab — later Mughal history', 'mughal',
      { era: 'c. 1664 – c. 1732',
        place: 'Mughal officer in Gujarat and the Deccan (pin: Aurangabad, offset)',
        more: 'Muhammad Hashim "Khafi Khan" wrote secretly because Aurangzeb had banned history writing. Valuable for the Marathas, Shivaji, the jagirdari crisis and the decline of the empire up to Muhammad Shah\'s reign.',
        books: [
          { t: 'Muntakhab-ul-Lubab', y: 'completed c. 1731', lang: 'Persian', sum: 'History of the Mughals from Babur to the 14th year of Muhammad Shah, detailed for Aurangzeb and his successors: the Maratha wars, Shivaji, the Sayyid brothers and the decline of central authority.', key: 'Later Mughals; Marathas; Sayyid brothers' }
        ] } ],
    ['Jagannatha Panditaraja', 25.3060, 83.0105, 'Varanasi (Dashashwamedh Ghat, Ganga Lahari)', 'Rasagangadhara — last great Sanskrit poetics; Ganga Lahari', 'mughal',
      { era: 'c. 1590 – c. 1670',
        place: 'Sanskrit poet at Shah Jahan\'s court (title "Panditaraja"); traditionally associated with Varanasi (pin)',
        more: 'Telugu Brahmin scholar honoured by Shah Jahan and patronised by Dara Shikoh. Regarded as the last major theorist of Sanskrit alamkara-shastra; also wrote a panegyric of Asaf Khan. Legend links his Ganga Lahari to his death in the Ganga at Varanasi.',
        books: [
          { t: 'Rasagangadhara', y: 'mid-17th c.', lang: 'Sanskrit', sum: 'Advanced treatise on Sanskrit poetics defining poetry as "words expressing a charming meaning", analysing rasa, dhvani and figures of speech, with critical engagement with earlier theorists like Appaya Dikshita. Left incomplete.', key: 'Sanskrit poetics; rasa; alamkara' },
          { t: 'Ganga Lahari (Piyusha Lahari)', y: 'mid-17th c.', lang: 'Sanskrit', sum: 'Fifty-two verses in praise of the river Ganga, among the best-known devotional lyrics of late Sanskrit.', key: 'Hymn to the Ganga' }
        ] } ],

    // ---------- Sufi saints & Islamic thought ----------
    ['Al-Hujwiri (Data Ganj Bakhsh)', 31.5790, 74.3040, 'Lahore (Data Darbar, his shrine)', 'Kashf-ul-Mahjub — earliest Persian treatise on Sufism', 'sufi',
      { era: 'c. 1009 – c. 1072',
        place: 'Settled at Lahore under the Ghaznavids; shrine Data Darbar (pin)',
        idea: 'True Sufism is inner purification within the sharia; the seeker must lift the "veils" between the self and God.',
        more: 'Ali bin Usman al-Hujwiri from Ghazni, revered as Data Ganj Bakhsh. His book, the oldest Persian work on Sufism, explains Sufi doctrine and orders and was revered by later Chishtis (Muinuddin Chishti is said to have meditated at his tomb).',
        books: [
          { t: 'Kashf-ul-Mahjub (Unveiling of the Veiled)', y: 'c. 1070', lang: 'Persian', sum: 'Systematic exposition of Sufism: definitions of faqr and tasawwuf, biographies of early Sufis, twelve Sufi schools, and the "unveiling" of eleven veils such as gnosis, unity, faith, prayer, fasting, pilgrimage and sama. NCERT cites it as an early Sufi manual.', key: 'Veils; tasawwuf; early Sufi manual' }
        ] } ],
    ['Baba Farid', 30.3442, 73.3839, 'Pakpattan, Punjab (his dargah)', 'Chishti saint; first major Punjabi poet; verses in Guru Granth Sahib', 'sufi',
      { era: '1173 – 1266 (traditional; alt. 1188–1280)',
        place: 'Lived and taught at Ajodhan, now Pakpattan (pin: his shrine)',
        idea: 'Humility, patience and remembrance of God; the body is transient, so cultivate inner devotion and service.',
        more: 'Fariduddin Masud Ganj-i-Shakar, disciple of Qutbuddin Bakhtiyar Kaki and teacher of Nizamuddin Auliya — a pillar of the Chishti silsila. Regarded as the father of Punjabi literature.',
        books: [
          { t: 'Farid Bani (Saloks and hymns in the Guru Granth Sahib)', y: '13th c. (compiled 1604)', lang: 'Punjabi (Multani)', sum: '112 saloks and four shabads attributed to Shaikh Farid were included by Guru Arjan in the Adi Granth. They speak of death, humility, renunciation and longing for the Beloved in simple Punjabi imagery.', key: 'Saloks; Chishti; Adi Granth' }
        ] } ],
    ['Shaikh Ahmad Sirhindi', 30.6440, 76.3850, 'Sirhind, Punjab (Rauza Sharif, his tomb)', 'Mujaddid Alf Sani; Maktubat; wahdat-ul-shuhud', 'sufi',
      { era: '1564–1624',
        place: 'Naqshbandi centre at Sirhind (pin: Rauza Sharif)',
        idea: 'Wahdat-ul-shuhud (unity of witness): the mystic\'s sense of oneness is subjective — God and creation are not identical, opposing Ibn Arabi\'s wahdat-ul-wujud.',
        more: 'Naqshbandi Sufi called "Mujaddid Alf Sani" (Renewer of the second millennium). He opposed Akbar\'s Din-i-Ilahi and syncretism and urged nobles to restore sharia; Jahangir briefly imprisoned him in Gwalior fort. Asked in UPSC on Naqshbandi reaction to Akbar.',
        books: [
          { t: 'Maktubat-i-Imam Rabbani', y: 'c. 1600–1624', lang: 'Persian', sum: 'Over 530 letters to disciples and Mughal nobles setting out Naqshbandi doctrine, wahdat-ul-shuhud, the primacy of sharia over mystical experience, and criticism of innovations and of Akbar\'s religious policy.', key: 'Letters; wahdat-ul-shuhud; orthodoxy' }
        ] } ],
    ['Shah Waliullah', 28.6380, 77.2180, 'Delhi (Madrasa Rahimiya, Old Delhi; pin approximate)', 'Hujjat Allah al-Baligha; Persian translation of the Quran', 'sufi',
      { era: '1703–1762',
        place: 'Taught at his father\'s Madrasa Rahimiya, Delhi (pin approximate)',
        idea: 'Revive Islam by returning to the Quran and Hadith, reconciling law schools and Sufism, and grounding religion in rational social ethics.',
        more: 'Leading Islamic reformer of 18th-century India; his family inspired later movements (Syed Ahmad Barelvi, Deoband). He wrote to Ahmad Shah Abdali to check the Marathas, which led to the Third Battle of Panipat (1761) in popular histories.',
        books: [
          { t: 'Hujjat Allah al-Baligha', y: 'mid-18th c.', lang: 'Arabic', sum: 'His masterwork explaining the rational purposes behind Islamic law and rituals, the stages of social development (irtifaqat), and the ethical foundations of state and society.', key: 'Irtifaqat; rationale of sharia' },
          { t: 'Fath-ur-Rahman', y: '1737–38', lang: 'Persian', sum: 'Translation of the Quran into Persian, the literary language of Indian Muslims, so that ordinary readers could understand it directly — controversial in its time.', key: 'Quran in Persian' }
        ] } ],
    ['Bulleh Shah', 31.1167, 74.4500, 'Kasur, Punjab (his shrine)', 'Punjabi Sufi kafis — "Bulleya ki jaana main kaun"', 'sufi',
      { era: '1680–1757',
        place: 'Lived and is buried at Kasur (pin)',
        idea: 'Love of God transcends religious labels, rituals and caste; seek the Beloved within.',
        more: 'Syed Abdullah Shah Qadiri, disciple of Shah Inayat Qadiri of Lahore. A rebel against orthodoxy; his kafis are sung by qawwals and folk singers in both Punjabs.',
        books: [
          { t: 'Kafis of Bulleh Shah', y: 'early–mid 18th c.', lang: 'Punjabi', sum: 'Lyric poems (kafis), siharfis and dohras attacking hypocrisy of mullahs and pandits, celebrating ecstatic love of the murshid, and questioning identity — e.g. the famous "Bulleya ki jaana main kaun".', key: 'Kafi; Qadiri; anti-orthodoxy' }
        ] } ],
    ['Nund Rishi (Sheikh Noor-ud-din)', 33.8664, 74.7667, 'Charar-e-Sharief, Kashmir (his shrine)', 'Founder of the Rishi order; Kashmiri shruks', 'sufi',
      { era: '1377–1438',
        place: 'Shrine at Charar-e-Sharief (pin)',
        idea: 'Simple living, vegetarianism, non-violence and service — the Rishi path blending Sufi and Shaiva-Buddhist ascetic ideals of Kashmir.',
        more: 'Called "Alamdar-e-Kashmir" and "Sheikh-ul-Alam", revered by Kashmiri Muslims and Hindus (as Nund Rishi). Said to have been nursed by Lal Ded. A key figure of Kashmiriyat.',
        books: [
          { t: 'Shruks (Kalam-i-Shaikh / Nurnama)', y: '15th c. (compiled later in Nurnama)', lang: 'Kashmiri', sum: 'Short mystical verses on God\'s unity, humility, ethics and nature conservation (e.g. "food will last as long as forests last"), preserved orally and later collected in the Nurnama.', key: 'Rishi order; Kashmiriyat; shruk' }
        ] } ],

    // ---------- Nirguna Sants & Sikh Gurus ----------
    ['Lal Ded (Lalleshwari)', 34.0640, 74.8700, 'Pandrethan, near Srinagar (traditional home)', 'Kashmiri Shaiva mystic; vakhs', 'sant',
      { era: 'c. 1320 – c. 1392',
        place: 'Traditionally born at Pandrethan near Srinagar (pin)',
        idea: 'Shiva is within; ritual, idol worship and caste are futile — liberation comes through inner discipline and self-knowledge (Kashmir Shaiva yoga).',
        more: 'Also called Lalla Arifa, Lalla Yogeshwari. Earliest known poet of the Kashmiri language; respected by both Hindus and Muslims, she influenced Nund Rishi. Her vakhs are central to Kashmiri identity.',
        books: [
          { t: 'Lal Vakh (Vakhs of Lalla)', y: '14th c. (oral; written down later)', lang: 'Kashmiri', sum: 'Around 250 four-line mystical sayings on the search for Shiva within, rejection of outward ritual, yogic practice and the equality of all. Passed down orally; first collected in the 18th–20th centuries (Grierson & Barnett 1920).', key: 'Vakh; Shaiva yoga; Kashmiri' }
        ] } ],
    ['Kabir', 25.3170, 82.9990, 'Varanasi (Kabir Chaura Math; died at Maghar)', 'Nirguna sant; Bijak; dohas against ritual', 'sant',
      { era: 'c. 1440 – c. 1518 (traditional 1398–1518)',
        place: 'Lived as a weaver at Benares (pin: Kabir Chaura); died at Maghar',
        idea: 'God (Ram, Rahim, Hari) is one and formless (nirguna), found within through love and the guru\'s word; idol worship, pilgrimage, caste and both Hindu and Muslim ritual are rejected.',
        more: 'Raised in a Muslim julaha (weaver) family; tradition makes him a disciple of Ramananda. Used sadhukkadi/sant bhasha with ulatbansi (upside-down) imagery. His verses appear in the Bijak, Kabir Granthavali and the Guru Granth Sahib; the Kabir Panth follows him. Key NCERT Class 12 figure.',
        books: [
          { t: 'Bijak', y: '15th–16th c. (compiled by Kabir Panth)', lang: 'Hindavi (sadhukkadi)', sum: 'Scripture of the Kabir Panth (Varanasi tradition) with ramainis, shabads and sakhis that mock ritual, caste and religious hypocrisy and teach devotion to the formless Ram through the satguru.', key: 'Ramaini, shabad, sakhi; nirguna' },
          { t: 'Kabir Granthavali', y: 'compiled 16th–17th c. (Rajasthan)', lang: 'Hindavi', sum: 'Collection of Kabir\'s verses preserved in the Dadupanthi tradition of Rajasthan, including the famous dohas.', key: 'Dohas; Dadupanthi manuscripts' }
        ] } ],
    ['Guru Ravidas', 25.2650, 82.9900, 'Varanasi (Seer Goverdhanpur, birthplace temple)', 'Sant poet; 40 hymns in Guru Granth Sahib; Begampura', 'sant',
      { era: 'c. 15th – early 16th c.',
        place: 'Born at Seer Goverdhanpur, Varanasi (pin)',
        idea: 'Devotion to a formless God dissolves caste; he imagined "Begampura" — a city without sorrow, taxes or caste hierarchy.',
        more: 'Also Raidas; a cobbler (chamar) by caste, traditionally a disciple of Ramananda and contemporary of Kabir; Mirabai is said to have regarded him as guru. Founder figure for the Ravidassia community.',
        books: [
          { t: 'Hymns in the Guru Granth Sahib', y: '15th–16th c. (compiled 1604)', lang: 'Hindavi / Braj', sum: 'Forty hymns and one salok in the Adi Granth expressing humble devotion, the equality of all before God, and the vision of Begampura, a casteless ideal city.', key: 'Begampura; anti-caste; bhakti' }
        ] } ],
    ['Guru Nanak', 32.0869, 75.0167, 'Kartarpur, Punjab (Pakistan) — community he founded', 'Founder of Sikhism; Japji Sahib', 'sant',
      { era: '1469–1539',
        place: 'Born at Talwandi (Nankana Sahib); spent last ~18 years at Kartarpur on the Ravi (pin)',
        idea: 'One God (Ik Onkar), formless and true; liberation through nam simran, honest work (kirat karni) and sharing (vand chakna); rejects caste, ritual and asceticism.',
        more: 'First Sikh Guru; made long journeys (udasis). Established sangat and langar at Kartarpur and appointed Angad as successor. 974 of his hymns are in the Guru Granth Sahib. The Kartarpur Corridor (2019) links Dera Baba Nanak to this site.',
        books: [
          { t: 'Japji Sahib', y: 'early 16th c.', lang: 'Punjabi (Gurmukhi script)', sum: 'Opening composition of the Guru Granth Sahib: the Mool Mantar followed by 38 pauris and a salok describing God\'s nature, the hukam (divine order), and the spiritual realms (khands) through which the seeker rises.', key: 'Mool Mantar; Ik Onkar; hukam' },
          { t: 'Asa di Var and other hymns', y: 'early 16th c.', lang: 'Punjabi', sum: 'Ballads and hymns criticising ritualism and caste and praising the true name; sung each morning in gurdwaras.', key: 'Var; kirtan' }
        ] } ],
    ['Guru Arjan', 31.6200, 74.8765, 'Amritsar (Harmandir Sahib, which he built)', 'Compiled the Adi Granth (1604); Sukhmani Sahib', 'sant',
      { era: '1563–1606',
        place: 'Fifth Guru; completed Harmandir Sahib at Amritsar (pin)',
        more: 'Compiled the Adi Granth in 1604 with the scribe Bhai Gurdas, including hymns of the first five Gurus and of Kabir, Namdev, Ravidas, Farid and others. Executed at Lahore in 1606 on Jahangir\'s order after Khusrau\'s rebellion — the first Sikh martyr.',
        books: [
          { t: 'Adi Granth (compiled)', y: '1604', lang: 'Gurmukhi (Punjabi, Braj, Sant bhasha)', sum: 'The scripture arranged by raga, combining Sikh Gurus\' hymns with those of Hindu and Muslim saints of different castes. Expanded by Guru Gobind Singh and declared the eternal Guru (Guru Granth Sahib) in 1708.', key: 'Ragas; bhagat bani; Harmandir 1604' },
          { t: 'Sukhmani Sahib', y: 'c. 1602', lang: 'Punjabi', sum: 'The "Psalm of Peace": 24 ashtapadis on meditation on God\'s name as the source of peace of mind.', key: 'Psalm of Peace; nam simran' }
        ] } ],
    ['Guru Gobind Singh', 31.2350, 76.4988, 'Anandpur Sahib, Punjab (founded the Khalsa, 1699)', 'Founder of the Khalsa; Zafarnama; Dasam Granth', 'sant',
      { era: '1666–1708',
        place: 'Created the Khalsa at Anandpur Sahib (pin) on Baisakhi 1699; died at Nanded',
        more: 'Tenth Sikh Guru, born at Patna. Instituted the five Ks and ended the line of human Gurus, vesting authority in the Guru Granth Sahib and the Khalsa Panth (1708). Patron of poets at Paonta and Anandpur.',
        books: [
          { t: 'Zafarnama', y: 'c. 1705', lang: 'Persian', sum: 'Letter of victory in verse to Aurangzeb after the battle of Chamkaur, reproaching him for broken oaths and declaring "when all means fail, it is lawful to draw the sword".', key: 'Letter to Aurangzeb; righteous war' },
          { t: 'Dasam Granth (attributed)', y: 'compiled 18th c.', lang: 'Braj, Punjabi, Persian', sum: 'Collection of compositions attributed to the Guru (authorship of parts debated), including Jaap Sahib, Akal Ustat, Bachittar Natak (autobiographical), Chandi di Var and Zafarnama.', key: 'Jaap Sahib; Bachittar Natak' }
        ] } ],
    ['Dadu Dayal', 26.7900, 75.2100, 'Naraina, near Jaipur (Dadu Panth centre; pin approximate)', 'Nirguna sant of Rajasthan; Dadu Panth', 'sant',
      { era: '1544–1603',
        place: 'Settled at Naraina near Jaipur in his last years (pin approximate)',
        idea: 'Formless God within; rejection of caste, idols and sectarian divisions between Hindus and Muslims; devotion through the name.',
        more: 'Cotton-carder (dhuniya) by origin, "Kabir of Rajasthan". Lived at Sambhar and Amber; tradition says he met Akbar at Fatehpur Sikri. His Dadu Panth disciples (Rajjab, Sundardas) preserved sant literature.',
        books: [
          { t: 'Dadu Anubhav Vani (Dadu Bani)', y: 'late 16th c. (compiled by Rajjab)', lang: 'Braj / Rajasthani', sum: 'About 5,000 verses — sakhis and padas — on the guru, the name, love of God and the futility of sectarian ritual.', key: 'Sakhi; pada; Dadu Panth' }
        ] } ],

    // ---------- Saguna Bhakti & Hindi court poets ----------
    ['Chand Bardai', 26.4499, 74.6399, 'Ajmer (capital of Prithviraj Chauhan; traditional)', 'Prithviraj Raso (traditionally attributed)', 'saguna',
      { era: 'fl. late 12th c. (traditional)',
        place: 'Traditionally court poet of Prithviraj III Chauhan at Ajmer–Delhi (pin: Ajmer)',
        more: 'Regarded as the "adi kavi" of Hindi. Historians consider the surviving Prithviraj Raso largely a 16th–17th-century composition with many interpolations, so historical details (e.g. Samyogita, the Ghori killing) are unreliable.',
        books: [
          { t: 'Prithviraj Raso', y: 'traditionally 12th c.; extant text c. 16th c.', lang: 'Pingal (Braj-Rajasthani)', sum: 'Heroic epic of Prithviraj Chauhan: his elopement with Samyogita of Kanauj, wars with Jaichand and Muhammad Ghori at Tarain, and the legendary blinded Prithviraj killing Ghori. A foundational work of Rajput bardic (raso) literature.', key: 'Raso genre; Tarain; Samyogita' }
        ] } ],
    ['Malik Muhammad Jayasi', 26.2500, 81.5300, 'Jais, Amethi (UP)', 'Padmavat (1540) — Sufi premakhyan in Awadhi', 'saguna',
      { era: 'c. 1477–1542',
        place: 'Lived at Jais, from which he takes his name (pin)',
        idea: 'Sufi allegory: the soul (Ratansen) seeks divine beauty (Padmavati) through love and suffering, guided by the guru (parrot Hiraman).',
        more: 'Chishti Sufi poet of the premakhyan (love-story) tradition of Awadhi literature, written in Persian script. Padmavat is the source of the Rani Padmini legend; historians see no contemporary evidence of Padmini in Alauddin\'s 1303 siege of Chittor.',
        books: [
          { t: 'Padmavat', y: '1540', lang: 'Awadhi', sum: 'Epic of Ratansen, king of Chittor, who wins Padmavati of Singhaladvipa; Alauddin Khalji\'s desire for her leads to the siege of Chittor and her jauhar. Ends with an allegorical key: Chittor is the body, Ratansen the mind, Padmavati wisdom.', key: 'Rani Padmini; Sufi allegory; Chittor' },
          { t: 'Akhrawat', y: 'c. 16th c.', lang: 'Awadhi', sum: 'Acrostic poem on Sufi cosmology and doctrine.', key: 'Sufi doctrine' },
          { t: 'Akhiri Kalam', y: 'c. 1529', lang: 'Awadhi', sum: 'Poem on the Day of Judgement, mentioning Babur as the ruler of the time.', key: 'Doomsday; mention of Babur' }
        ] } ],
    ['Surdas', 27.4960, 77.4630, 'Govardhan / Parasoli, Braj (traditional)', 'Sur Sagar — Krishna\'s childhood; Ashtachhap poet', 'saguna',
      { era: 'c. 1478 – c. 1583 (traditional)',
        place: 'Sang at Shrinathji temple, Govardhan; traditionally died at Parasoli (pin: Govardhan)',
        idea: 'Pushti marg: loving grace-filled devotion to child Krishna and his lilas with Yashoda and the gopis (vatsalya and madhurya bhava).',
        more: 'Traditionally blind; disciple of Vallabhacharya and foremost of the Ashtachhap poets. Akbar is said to have met him. His Braj Bhasha lyrics shaped Hindi bhakti and Hindustani music; much of the corpus attributed to him grew after his time.',
        books: [
          { t: 'Sur Sagar', y: '16th c. (earliest manuscript 1582)', lang: 'Braj Bhasha', sum: 'Vast collection of padas on Krishna\'s childhood pranks (makhan chori), youthful love with Radha and the gopis, and the viraha of the gopis after he leaves for Mathura (Bhramar Geet, mocking Uddhava\'s dry jnana).', key: 'Vatsalya; Bhramar Geet; Pushti marg' },
          { t: 'Sur Saravali; Sahitya Lahari (attributed)', y: '16th c. (authorship debated)', lang: 'Braj Bhasha', sum: 'Works traditionally attributed to Surdas on Krishna\'s lila and on poetic rasa; scholars doubt their authenticity.', key: 'Attributed works' }
        ] } ],
    ['Mirabai', 24.8870, 74.6470, 'Chittorgarh Fort (Meera temple; married into Mewar)', 'Rajput princess-saint; padas to Giridhar Gopal', 'saguna',
      { era: 'c. 1498 – c. 1547',
        place: 'Born at Kudki/Merta; married into the Sisodia house of Mewar at Chittor (pin); later at Vrindavan and Dwarka',
        idea: 'Total surrender to Krishna (Giridhar Gopal) as divine husband, defying caste, family and royal convention.',
        more: 'Married to Bhoj Raj, son of Rana Sanga. Persecuted by in-laws, she left the palace; tradition links her to Ravidas as guru. Her songs in Rajasthani-Braj-Gujarati are sung across India; NCERT uses her as an example of women in bhakti.',
        books: [
          { t: 'Padavali (songs of Mira)', y: '16th c. (oral; collected later)', lang: 'Rajasthani / Braj', sum: 'Devotional padas expressing longing for and union with Krishna, defiance of social restrictions ("Mere to Giridhar Gopal, dusro na koi"), and endurance of persecution. Authenticity of many songs is uncertain.', key: 'Giridhar Gopal; madhurya bhava' }
        ] } ],
    ['Tulsidas', 25.2900, 83.0060, 'Varanasi (Tulsi Ghat, Assi)', 'Ramcharitmanas — Awadhi Ramayana', 'saguna',
      { era: 'c. 1532–1623 (alt. birth 1497)',
        place: 'Began the Manas at Ayodhya (1574) and lived at Assi/Tulsi Ghat, Varanasi (pin)',
        idea: 'Rama-bhakti for all: Rama is both the formless absolute and the compassionate incarnate lord; devotion supported by dharma and maryada.',
        more: 'Saguna Rama bhakta, contemporary of Akbar; friend of Rahim per tradition. Started the Ramlila tradition of Varanasi. The Manas, in popular Awadhi, became the "Bible of north India". The Hanuman Chalisa is traditionally attributed to him.',
        books: [
          { t: 'Ramcharitmanas', y: 'begun 1574 (Ayodhya); completed c. 1576–77', lang: 'Awadhi', sum: 'Retelling of the Rama story in seven kandas of chaupai-doha verse, framed as dialogues (Shiva-Parvati, Kakbhushundi-Garuda). Emphasises bhakti, Rama as maryada purushottam and the ideal Ram Rajya.', key: 'Ram Rajya; maryada purushottam; seven kandas' },
          { t: 'Vinaya Patrika', y: 'c. 1600s', lang: 'Braj Bhasha', sum: '279 hymns framed as a petition to Rama, expressing humility and the poet\'s own spiritual struggles.', key: 'Petition to Rama; humility' },
          { t: 'Kavitavali', y: 'early 17th c.', lang: 'Braj Bhasha', sum: 'Poems in kavitta metre on Rama\'s life; later sections describe Kali Yuga, a plague and famine at Varanasi.', key: 'Kavitta metre' },
          { t: 'Hanuman Chalisa (traditionally attributed)', y: '16th–17th c.', lang: 'Awadhi', sum: 'Forty-verse hymn to Hanuman, among the most recited Hindu prayers.', key: 'Forty chaupais' }
        ] } ],
    ['Raskhan', 27.4300, 77.7500, 'Mahaban near Gokul, Braj (traditional samadhi)', 'Muslim Krishna-bhakta poet; Sujan Raskhan', 'saguna',
      { era: 'c. 1548 – c. 1628',
        place: 'Settled in Braj; his samadhi is traditionally at Mahaban near Gokul (pin)',
        idea: 'Love of Krishna and Braj transcends religion — he wished to be reborn as anything in Braj.',
        more: 'Sayyid Ibrahim "Raskhan", a Pathan Muslim who became a disciple of Vitthalnath (Vallabha sampradaya) per tradition. His savaiyas are classics of Braj Bhasha and symbols of composite culture.',
        books: [
          { t: 'Sujan Raskhan', y: 'late 16th – early 17th c.', lang: 'Braj Bhasha', sum: 'Savaiyas and kavittas on Krishna\'s beauty, flute and lilas with the gopis, and longing to live in Braj ("Manush hon to wahi Raskhan…").', key: 'Savaiya; Braj; composite culture' },
          { t: 'Prem Vatika', y: 'c. 1614', lang: 'Braj Bhasha', sum: 'Dohas on the nature of pure divine love (prem).', key: 'Doctrine of prem' }
        ] } ],
    ['Abdur Rahim Khan-i-Khanan', 28.5700, 77.2460, 'Delhi (near his tomb at Nizamuddin; pin offset)', 'Rahim ke Dohe; Persian Baburnama', 'saguna',
      { era: '1556–1627',
        place: 'Mughal general and poet; buried in his tomb near Nizamuddin, Delhi (pin offset)',
        more: 'Son of Bairam Khan, one of Akbar\'s "navratnas"; won Gujarat (1584) and fought in the Deccan. Wrote Braj and Awadhi dohas on ethics and devotion to Krishna, and translated Babur\'s memoir into Persian. Patron of poets including, by tradition, Tulsidas.',
        books: [
          { t: 'Rahim Satsai / Rahim ke Dohe', y: 'late 16th – early 17th c.', lang: 'Braj / Awadhi', sum: 'Couplets of practical wisdom on friendship, humility, generosity and love (e.g. "Rahiman dhaga prem ka…"), widely quoted in Hindi.', key: 'Niti dohas; ethics' },
          { t: 'Baburnama (Persian translation)', y: '1589', lang: 'Persian', sum: 'Translation of Babur\'s Chagatai Turkic memoir into Persian for Akbar; basis of the illustrated Akbar-period manuscripts.', key: 'Translation for Akbar' }
        ] } ],
    ['Keshavdas', 25.3500, 78.6400, 'Orchha (Bundela court)', 'Rasikapriya; Ramchandrika — father of Riti poetry', 'saguna',
      { era: '1555–1617',
        place: 'Court poet of the Bundela rulers of Orchha (pin)',
        more: 'Sanskrit-trained Brahmin who wrote in Braj Bhasha; considered the founder of Hindi Riti (rhetorical/ornate) poetry. Patrons included Indrajit Singh and Bir Singh Deo Bundela.',
        books: [
          { t: 'Rasikapriya', y: '1591', lang: 'Braj Bhasha', sum: 'Treatise on shringara rasa using Radha-Krishna as the ideal lovers, classifying heroes and heroines (nayaka-nayika bheda). Inspired a major series of Rajput and Pahari paintings.', key: 'Nayika bheda; shringara; Riti kal' },
          { t: 'Kavipriya', y: '1601', lang: 'Braj Bhasha', sum: 'Manual of poetics and figures of speech (alamkaras) for poets.', key: 'Alamkara manual' },
          { t: 'Ramchandrika', y: '1601', lang: 'Braj Bhasha', sum: 'Rama story told in a dazzling variety of metres, more a display of poetic skill than devotion.', key: 'Ramayana in many metres' }
        ] } ],
    ['Nabhadas', 26.9170, 75.8590, 'Galta, Jaipur (Ramanandi centre)', 'Bhaktamal — garland of devotee biographies', 'saguna',
      { era: 'fl. c. 1600',
        place: 'Ramanandi sadhu at Galta near Jaipur (pin)',
        more: 'Disciple of Agradas of the Ramanandi sect. His Bhaktamal is the basic hagiographical source for medieval saints (Kabir, Ravidas, Mira, Tulsidas, Surdas); Priyadas wrote a commentary (Bhaktirasabodhini, 1712).',
        books: [
          { t: 'Bhaktamal', y: 'c. 1600', lang: 'Braj Bhasha', sum: 'Chhappay verses praising about 200 devotees of all castes and sects — from ancient bhaktas to contemporaries like Kabir, Mira and Tulsidas — affirming that devotion outranks birth.', key: 'Hagiography; Ramanandi' }
        ] } ],
    ['Bihari Lal', 26.9855, 75.8513, 'Amber (court of Mirza Raja Jai Singh I)', 'Bihari Satsai — Riti-kal masterpiece', 'saguna',
      { era: '1595–1663',
        place: 'Court poet of Raja Jai Singh I of Amber (pin: Amber Fort)',
        more: 'Born near Gwalior; his only work, the Satsai, is the most celebrated text of the Riti period of Hindi, praised for packing great meaning into a doha ("gagar mein sagar").',
        books: [
          { t: 'Bihari Satsai', y: 'c. 1662', lang: 'Braj Bhasha', sum: 'About 700 dohas mainly on shringara — Radha-Krishna love, nayika types and seasons — plus devotion and worldly wisdom. Widely illustrated in Rajput painting.', key: 'Doha; shringara; Riti kal' }
        ] } ],

    // ---------- Marathi & Gujarati Bhakti ----------
    ['Jnaneshwar (Dnyaneshwar)', 18.6770, 73.8960, 'Alandi, near Pune (samadhi)', 'Dnyaneshwari — Marathi Gita commentary; Varkari founder figure', 'westbh',
      { era: '1275–1296',
        place: 'Composed Dnyaneshwari at Nevasa; took samadhi at Alandi (pin)',
        idea: 'Non-dual devotion: the world is the joyous play of the One (chidvilas); bhakti to Vitthal and knowledge are not opposed.',
        more: 'Nath-lineage saint (initiated by brother Nivruttinath) whose family was outcast. Brought philosophy into Marathi for common people; foundational for the Varkari sampradaya of Pandharpur. Under the Yadavas of Devagiri.',
        books: [
          { t: 'Dnyaneshwari (Bhavartha Dipika)', y: '1290', lang: 'Marathi', sum: 'About 9,000 ovi verses expounding the Bhagavad Gita in Marathi, blending Advaita, Nath yoga and bhakti, with rich imagery. Edited by Eknath in 1584.', key: 'Gita commentary; ovi metre; Nevasa' },
          { t: 'Amrutanubhav', y: 'late 13th c.', lang: 'Marathi', sum: 'Independent philosophical poem on the experience of non-duality and the world as play of consciousness (Shiva-Shakti).', key: 'Chidvilas; non-duality' },
          { t: 'Haripath', y: 'late 13th c.', lang: 'Marathi', sum: 'Twenty-eight abhangas on the power of chanting God\'s name, recited daily by Varkaris.', key: 'Name-chanting; Varkari' }
        ] } ],
    ['Namdev', 17.6778, 75.3278, 'Pandharpur (Vitthal temple)', 'Varkari sant; abhangas in Marathi & Hindi; hymns in Guru Granth Sahib', 'westbh',
      { era: 'c. 1270 – c. 1350',
        place: 'Devotee of Vitthal at Pandharpur (pin); later lived at Ghuman, Punjab',
        idea: 'Devotion to Vitthal through kirtan and the name, open to all castes; later his verses lean towards nirguna devotion.',
        more: 'A tailor (shimpi) by caste and companion of Jnaneshwar. Spread bhakti to the north; 61 hymns in the Guru Granth Sahib. Considered a bridge between Marathi Varkari and north Indian sant traditions.',
        books: [
          { t: 'Abhangas (Namdev Gatha)', y: '14th c.', lang: 'Marathi', sum: 'Devotional songs to Vitthal of Pandharpur, including autobiographical verses and accounts of Jnaneshwar\'s life.', key: 'Abhanga; Vitthal; kirtan' },
          { t: 'Hymns in the Guru Granth Sahib', y: '14th c. (compiled 1604)', lang: 'Old Hindi / Marathi', sum: 'Sixty-one hymns preserved in the Adi Granth on the formless God, the name and the futility of caste and ritual.', key: 'Bhagat bani' }
        ] } ],
    ['Eknath', 19.4800, 75.3850, 'Paithan, Maharashtra (on the Godavari)', 'Eknathi Bhagavat; Bharud; edited Dnyaneshwari', 'westbh',
      { era: '1533–1599',
        place: 'Lived at Paithan (pin)',
        idea: 'Bhakti combined with social compassion — he shared food with Dalits and taught that service to all beings is devotion.',
        more: 'Varkari saint who prepared the first critical edition of the Dnyaneshwari (1584). Popularised the bharud, a dramatic folk song form carrying spiritual messages.',
        books: [
          { t: 'Eknathi Bhagavat', y: '1573', lang: 'Marathi', sum: 'Marathi commentary on the 11th book of the Bhagavata Purana (Uddhava Gita) teaching bhakti and the oneness of all.', key: 'Bhagavata XI; bhakti' },
          { t: 'Bhavartha Ramayana', y: 'late 16th c. (completed by disciple)', lang: 'Marathi', sum: 'Marathi Ramayana interpreting the story spiritually.', key: 'Marathi Ramayana' },
          { t: 'Bharuds', y: '16th c.', lang: 'Marathi', sum: 'About 300 dramatic, humorous folk songs using everyday characters to teach spiritual truths.', key: 'Folk drama songs' }
        ] } ],
    ['Tukaram', 18.7200, 73.7700, 'Dehu, near Pune', 'Varkari sant; Tukaram Gatha (abhangas)', 'westbh',
      { era: 'c. 1608–1649 (alt. 1598–1650)',
        place: 'Grocer\'s son from Dehu on the Indrayani (pin)',
        idea: 'Bhakti to Vitthal through the name and kirtan; rejects ritualism and Brahminical hypocrisy; God is for the humble.',
        more: 'Shudra by caste; tradition says Brahmins made him sink his manuscripts in the Indrayani, which resurfaced. A contemporary of Shivaji. His abhangas are sung on the annual Pandharpur wari.',
        books: [
          { t: 'Tukaram Gatha', y: '17th c.', lang: 'Marathi', sum: 'About 4,500 abhangas on devotion, the pain of worldly life, social criticism and joy of the name of Vitthal — the most popular Marathi devotional poetry.', key: 'Abhanga; Indrayani; wari' }
        ] } ],
    ['Samarth Ramdas', 17.6497, 73.9119, 'Sajjangad, near Satara (samadhi)', 'Dasbodh; Manache Shlok; Ramdasi movement', 'westbh',
      { era: '1608–1681',
        place: 'Last years and samadhi at Sajjangad (pin)',
        idea: 'Activist devotion: worship of Rama and Hanuman combined with physical strength, organisation and duty to society.',
        more: 'Narayan Thosar, founder of the Ramdasi sampradaya and many Hanuman temples (maths). Tradition links him to Shivaji as spiritual guide. His practical teachings shaped Marathi religious nationalism.',
        books: [
          { t: 'Dasbodh', y: '17th c.', lang: 'Marathi', sum: 'Dialogue-form guide in 20 chapters on spiritual life and worldly conduct: knowledge, devotion, leadership, organisation, politics and the duties of a householder.', key: 'Practical spirituality; organisation' },
          { t: 'Manache Shlok', y: '17th c.', lang: 'Marathi', sum: '205 verses addressed to the mind, advising virtue and devotion to Rama.', key: 'Verses to the mind' }
        ] } ],
    ['Narsinh Mehta', 21.5222, 70.4579, 'Junagadh, Saurashtra', 'Adi Kavi of Gujarati; "Vaishnava Jana To"', 'westbh',
      { era: 'c. 1414 – c. 1481 (traditional)',
        place: 'Lived at Junagadh (pin)',
        idea: 'A true Vaishnava feels others\' pain, is humble, truthful and free of greed — devotion shown in ethics.',
        more: 'Nagar Brahmin poet-saint who mixed with Dalits, scandalising his caste. Gandhi made his "Vaishnava Jana To" his favourite bhajan. Dates are traditional.',
        books: [
          { t: 'Padas and prabhatiyas', y: '15th c.', lang: 'Gujarati', sum: 'Devotional songs to Krishna (morning prabhatiyas), autobiographical poems (Shamaldas no Vivah, Hundi) and the ethical hymn "Vaishnava Jana To" defining the ideal devotee.', key: 'Vaishnava Jana To; prabhatiya' }
        ] } ],

    // ---------- Bengal, Assam, Odisha & Mithila ----------
    ['Vidyapati', 26.3242, 85.8828, 'Bisfi, Madhubani (Mithila)', 'Maithili poet; Padavali; Kirtilata', 'east',
      { era: 'c. 1352 – c. 1448',
        place: 'Born at Bisfi, Mithila (pin); court of the Oiniwar kings (Shivasimha)',
        more: '"Maithil Kavi Kokil". His Radha-Krishna love songs (in Maithili) deeply influenced Bengali Vaishnava and Brajabuli poetry and Chaitanya\'s movement. Also wrote Sanskrit works on law and conduct and Avahatta histories.',
        books: [
          { t: 'Padavali', y: '14th–15th c.', lang: 'Maithili', sum: 'Lyric songs on Radha and Krishna — love, separation, union — and on Shiva (Nachari songs), still sung across Mithila, Bengal and Nepal.', key: 'Radha-Krishna; Maithili lyrics' },
          { t: 'Kirtilata', y: 'c. 1400', lang: 'Avahatta', sum: 'Prose-verse eulogy of King Kirtisimha describing his struggle to regain his kingdom with help from the Sharqi sultan of Jaunpur; valuable for social life of the time.', key: 'Kirtisimha; Jaunpur' },
          { t: 'Purusha Pariksha', y: '15th c.', lang: 'Sanskrit', sum: 'Collection of moral tales testing the qualities of an ideal man.', key: 'Moral tales' }
        ] } ],
    ['Chandidas', 23.7000, 87.8600, 'Nanoor, Birbhum (traditional; Chhatna claims too)', 'Srikrishna Kirtana — early Bengali Vaishnava poetry', 'east',
      { era: 'c. 14th–15th c.',
        place: 'Traditionally lived at Nanoor (pin), with Chhatna (Bankura) as rival claimant',
        more: 'Several poets used the name Chandidas (Baru Chandidas, Dvija Chandidas, Dina Chandidas). Baru Chandidas\'s Srikrishna Kirtana, discovered in 1909, is the oldest major Middle Bengali text; Chaitanya loved Chandidas\'s songs.',
        books: [
          { t: 'Srikrishna Kirtana', y: 'c. 14th–15th c. (MS found 1909)', lang: 'Middle Bengali', sum: 'Narrative song-cycle of Radha and Krishna\'s love in 13 sections, earthy in tone, by Baru Chandidas.', key: 'Oldest Middle Bengali work; Radha-Krishna' }
        ] } ],
    ['Krittibas Ojha', 23.2344, 88.5062, 'Phulia, Nadia (birthplace)', 'Krittivasi Ramayan — Bengali Ramayana', 'east',
      { era: 'c. 1381 – c. 1461 (15th c.)',
        place: 'Born at Phulia (pin)',
        more: 'His free, devotional Bengali adaptation of Valmiki, written in payar metre, is the most popular Ramayana of Bengal, with distinctive episodes (e.g. Ravana\'s devotion, Taranisen).',
        books: [
          { t: 'Krittivasi Ramayan (Sri Ram Panchali)', y: '15th c. (printed Serampore 1802–03)', lang: 'Bengali', sum: 'Bengali retelling of the Rama story in panchali/payar verse, infused with bhakti and Bengali domestic life; first printed by the Serampore Mission.', key: 'Payar metre; Bengali Ramayana' }
        ] } ],
    ['Chaitanya Mahaprabhu', 23.4070, 88.3670, 'Nabadwip, Nadia (birthplace; last years at Puri)', 'Gaudiya Vaishnavism; sankirtan; Shikshashtakam', 'east',
      { era: '1486–1534',
        place: 'Born and taught at Nabadwip (pin); spent his last 24 years at Puri',
        idea: 'Krishna is the supreme God; love (prema) through congregational chanting of the name (Hare Krishna) is the means; Achintya-bhedabheda — inconceivable oneness and difference of God and soul (systematised by Jiva Goswami).',
        more: 'Vishvambhar Mishra, "Gauranga". Led public sankirtan processions; sent the Goswamis to Vrindavan. His movement spread in Bengal, Odisha and Manipur and, via ISKCON (1966), worldwide. He wrote almost nothing himself.',
        books: [
          { t: 'Shikshashtakam', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Eight verses, the only writing attributed to Chaitanya, teaching humility ("lower than a blade of grass"), chanting the name and selfless love of Krishna.', key: 'Eight verses; nama-sankirtan' }
        ] } ],
    ['Rupa Goswami', 27.5810, 77.7000, 'Vrindavan (Radha-Damodar temple)', 'Bhakti-rasamrita-sindhu — theology of devotional rasa', 'east',
      { era: '1489–1564',
        place: 'Sent by Chaitanya to Vrindavan (pin: Radha-Damodar temple, his samadhi)',
        idea: 'Bhakti itself is the highest rasa: devotional love progresses through stages to prema, experienced in relations of servant, friend, parent or lover to Krishna.',
        more: 'Formerly a minister of Sultan Alauddin Husain Shah of Bengal; with his brother Sanatana and nephew Jiva, one of the Six Goswamis of Vrindavan who systematised Gaudiya theology and rediscovered Braj holy sites.',
        books: [
          { t: 'Bhakti-rasamrita-sindhu', y: '1541', lang: 'Sanskrit', sum: 'Classifies devotion into sadhana, bhava and prema bhakti and applies Sanskrit rasa theory to devotional emotion with five primary rasas.', key: 'Bhakti rasa; sadhana-bhava-prema' },
          { t: 'Ujjvala-nilamani', y: 'mid-16th c.', lang: 'Sanskrit', sum: 'Treatise on madhurya rasa — the erotic-devotional love of Radha and the gopis for Krishna.', key: 'Madhurya rasa; Radha' },
          { t: 'Vidagdha-madhava; Lalita-madhava', y: '1533; 1537', lang: 'Sanskrit', sum: 'Plays on Krishna\'s pastimes in Vrindavan and Dwarka.', key: 'Sanskrit drama' }
        ] } ],
    ['Krishnadasa Kaviraja', 27.5250, 77.4900, 'Radha Kund, Braj (where he lived)', 'Chaitanya Charitamrita — biography of Chaitanya', 'east',
      { era: 'fl. late 16th c. (dates disputed)',
        place: 'Lived at Radha Kund near Govardhan (pin)',
        more: 'Bengali Vaishnava who studied under the Goswamis of Vrindavan. His biography is the most authoritative Gaudiya text on Chaitanya\'s life and theology; completion is dated variously 1581 or 1615.',
        books: [
          { t: 'Chaitanya Charitamrita', y: 'completed c. 1581–1615', lang: 'Bengali (with Sanskrit verses)', sum: 'Three-part biography of Chaitanya (Adi, Madhya, Antya lila) combining narrative with Gaudiya theology: Krishna as Chaitanya, the holy name, and the doctrines of the Goswamis.', key: 'Hagiography; Gaudiya theology' }
        ] } ],
    ['Kashiram Das', 23.6500, 88.1300, 'Singi, near Katwa, Purba Bardhaman (birthplace; pin: Katwa area)', 'Kashidasi Mahabharat — Bengali Mahabharata', 'east',
      { era: 'fl. late 16th – early 17th c.',
        place: 'Traditionally born at Singi near Katwa (pin approximate)',
        more: 'Wrote the first four parvas of the Bengali Mahabharata (Virata parva dated 1604); relatives completed the rest. Together with Krittibas, a cornerstone of Bengali household religious literature.',
        books: [
          { t: 'Kashidasi Mahabharat (Bharat Panchali)', y: 'c. 1604–1610', lang: 'Bengali', sum: 'Popular verse retelling of the Mahabharata in payar metre with devotional emphasis on Krishna, recited in Bengali homes ("Mahabharater katha amrita saman").', key: 'Bengali Mahabharata; payar' }
        ] } ],
    ['Alaol', 20.5900, 93.1925, 'Mrauk U, Arakan (Myanmar) — royal court', 'Padmavati — Bengali adaptation of Jayasi', 'east',
      { era: 'c. 1607 – c. 1680',
        place: 'Poet at the Arakanese court of Mrauk U (pin), patronised by minister Magan Thakur',
        more: 'Syed Alaol, a Bengali Muslim poet captured by Portuguese pirates and taken to Arakan. Represents the rich Bengali literature of the Arakan court and medieval Bengali Muslim poetry.',
        books: [
          { t: 'Padmavati', y: 'c. 1651', lang: 'Bengali', sum: 'Free Bengali adaptation of Jayasi\'s Awadhi Padmavat, retelling the Ratansen–Padmavati story with additions on music, poetics and astrology.', key: 'Jayasi adaptation; Arakan court' },
          { t: 'Saiful Muluk Badiujjamal; Sikandarnama; Tohfa', y: '17th c.', lang: 'Bengali', sum: 'Adaptations of Persian romances and ethical works (Nizami\'s Sikandarnama) into Bengali verse.', key: 'Persian romances in Bengali' }
        ] } ],
    ['Srimanta Sankardev', 26.4600, 92.6100, 'Batadrava (Bordowa), Nagaon, Assam — birthplace & first than (pin approximate)', 'Ekasarana Dharma; Kirtan Ghosha; Ankia Naat; Bargeet', 'east',
      { era: '1449–1568',
        place: 'Born at Alipukhuri, Bordowa; founded the first than (prayer house) at Batadrava (pin approximate)',
        idea: 'Ekasarana Nama Dharma: surrender to one God, Krishna, through hearing and chanting his name; no idol worship or caste barriers; congregational prayer in namghars.',
        more: 'Saint-scholar who founded the satra and namghar institutions and created Assamese drama (Ankia Naat, Bhaona), Sattriya dance and Bargeet songs. Faced persecution under the Ahoms and moved to Koch Bihar. A unifier of Assamese culture.',
        books: [
          { t: 'Kirtan Ghosha', y: '16th c.', lang: 'Assamese', sum: 'Collection of devotional poems for congregational singing, drawn from the Bhagavata Purana — the central scripture of Assamese Vaishnavism, read in every namghar.', key: 'Namghar; congregational singing' },
          { t: 'Ankia Naat (e.g. Chihna Yatra, Patni Prasad, Ram Vijay)', y: '16th c.', lang: 'Brajavali / Assamese', sum: 'One-act devotional plays with music and dance, staged as Bhaona; Chihna Yatra is considered the first.', key: 'Bhaona; Sutradhar; Sattriya' },
          { t: 'Bargeet', y: '16th c.', lang: 'Brajavali', sum: 'Lyrical devotional songs set to ragas, sung in satras.', key: 'Raga-based songs' }
        ] } ],
    ['Madhavdev', 26.3230, 91.0050, 'Barpeta Satra, Assam (founded by him)', 'Namghosha; chief disciple of Sankardev', 'east',
      { era: '1489–1596',
        place: 'Established the Barpeta Satra (pin)',
        more: 'Converted from Shakta worship by Sankardev and became his successor. Wrote Bargeets and plays (jhumuras) and organised the satra system.',
        books: [
          { t: 'Namghosha (Hajari Ghosha)', y: 'late 16th c.', lang: 'Assamese', sum: 'A thousand couplets on the glory of the name and devotion, second only to Kirtan Ghosha in Assamese Vaishnavism.', key: 'Thousand verses; nama' },
          { t: 'Bhakti Ratnavali (translation)', y: '16th c.', lang: 'Assamese', sum: 'Assamese verse rendering of Vishnupuri\'s Sanskrit anthology on bhakti.', key: 'Bhakti anthology' }
        ] } ],
    ['Sarala Das', 20.2600, 86.1700, 'Jagatsinghpur district, Odisha (Kanakapura; pin approximate)', 'Adi Kavi of Odia; Sarala Mahabharata', 'east',
      { era: 'fl. 15th c. (reign of Kapilendra Deva, 1435–67)',
        place: 'Born at Kanakavati Patana (Kanakapura), Jagatsinghpur; devotee of goddess Sarala (pin approximate)',
        more: 'First great poet of Odia literature, a farmer-poet of the Gajapati age. His Mahabharata freely reshapes the epic with Odia geography and folk episodes.',
        books: [
          { t: 'Sarala Mahabharata', y: '15th c.', lang: 'Odia', sum: 'Odia retelling of the Mahabharata with local legends, characters and places of Odisha; established Odia as a literary language.', key: 'First Odia epic' },
          { t: 'Bilanka Ramayana; Chandi Purana', y: '15th c.', lang: 'Odia', sum: 'Bilanka Ramayana tells Sita slaying the thousand-headed Ravana of Bilanka; Chandi Purana praises the goddess Durga.', key: 'Shakta themes; Sita as Shakti' }
        ] } ],
    ['Jagannath Das', 19.8048, 85.8181, 'Puri (Jagannath temple)', 'Odia Bhagavata; one of the Panchasakha', 'east',
      { era: 'c. 1491 – c. 1550',
        place: 'Lived at Puri (pin), contemporary of Chaitanya',
        more: 'One of the Panchasakha ("five friends") of Odia bhakti literature — with Balarama Das, Achyutananda, Yasovanta and Ananta. Chaitanya is said to have called him "Atibadi" (very great).',
        books: [
          { t: 'Odia Bhagavata', y: 'early 16th c.', lang: 'Odia', sum: 'Translation of the Bhagavata Purana in simple nabakshari verse, read in village Bhagavata ghars across Odisha; foundational for Odia language and culture.', key: 'Bhagavata ghar; Panchasakha' }
        ] } ],

    // ---------- Vijayanagara & South India ----------
    ['Sayana', 15.3550, 76.4800, 'Hampi (Vijayanagara; minister of Bukka I and Harihara II; pin offset)', 'Vedartha Prakasha — classic commentary on the Vedas', 'south',
      { era: 'd. 1387',
        place: 'Scholar-minister at Vijayanagara (pin offset in Hampi)',
        more: 'Sayanacharya, brother (by tradition) of Madhava-Vidyaranya. His commentaries on all four Vedas were used by Max Müller for his edition of the Rigveda (1849–74) and remain standard references.',
        books: [
          { t: 'Vedartha Prakasha', y: '14th c.', lang: 'Sanskrit', sum: 'Comprehensive commentaries on the Samhitas and Brahmanas of the Rig, Yajur, Sama and Atharva Vedas, explaining them in ritual (Mimamsa) terms.', key: 'Vedic commentary; Max Müller' }
        ] } ],
    ['Gangadevi', 15.3150, 76.4800, 'Hampi (Vijayanagara court; pin offset)', 'Madhura Vijayam — conquest of Madurai', 'south',
      { era: 'fl. 14th c.',
        place: 'Princess-poet of the early Vijayanagara court (pin offset in Hampi)',
        more: 'Wife of Kumara Kampana, son of Bukka I. Her poem is an important historical source for the fall of the Madurai Sultanate (1370s) and the Vijayanagara expansion south.',
        books: [
          { t: 'Madhura Vijayam (Vira Kamparaya Charitam)', y: 'late 14th c.', lang: 'Sanskrit', sum: 'Mahakavya on Kumara Kampana\'s campaign against the Sambuvarayas and the Madurai Sultanate, describing the desecrated temples of Madurai and their restoration.', key: 'Madurai Sultanate; Kumara Kampana' }
        ] } ],
    ['Krishnadevaraya', 15.3350, 76.4600, 'Hampi (Vijayanagara capital; pin: Virupaksha area)', 'Amuktamalyada; "Andhra Bhoja"; Ashtadiggajas', 'south',
      { era: '1471–1529 (r. 1509–1529)',
        place: 'Greatest Tuluva ruler of Vijayanagara (pin: Hampi)',
        more: 'Defeated the Bahmani successors and Gajapatis, took Raichur (1520). A great patron of Telugu, Kannada, Tamil and Sanskrit; his court had the eight poets "Ashtadiggajas". Described by Domingo Paes. UPSC asks Amuktamalyada and its statecraft.',
        books: [
          { t: 'Amuktamalyada (Vishnuchittiyamu)', y: 'c. 1520', lang: 'Telugu', sum: 'Prabandha on the marriage of Andal (Godadevi) with Lord Ranganatha and the Alvar Periyalvar; also contains a section on rajaniti — the king should develop ports, irrigation and trade, and protect subjects.', key: 'Andal; rajaniti; ports & irrigation' },
          { t: 'Jambavati Kalyanam', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Sanskrit drama on Krishna\'s marriage with Jambavati, performed at the Virupaksha festival.', key: 'Sanskrit drama' }
        ] } ],
    ['Allasani Peddana', 15.3150, 76.4600, 'Hampi (Ashtadiggaja at Krishnadevaraya\'s court; pin offset)', '"Andhra Kavita Pitamaha"; Manucharitramu', 'south',
      { era: 'fl. early 16th c.',
        place: 'Poet laureate of Krishnadevaraya at Vijayanagara (pin offset)',
        more: 'Chief of the Ashtadiggajas, honoured by the emperor with the title "Andhra Kavita Pitamaha" (grandfather of Telugu poetry). Pioneered the prabandha style.',
        books: [
          { t: 'Manucharitramu (Svarochisha Manusambhavamu)', y: 'early 16th c.', lang: 'Telugu', sum: 'Prabandha developing a Markandeya Purana tale: the Brahmin Pravarakhya resists the apsara Varudhini; the story leads to the birth of Svarochisha Manu. A model of Telugu prabandha.', key: 'Prabandha; Varudhini' }
        ] } ],
    ['Tenali Ramakrishna', 15.3350, 76.4800, 'Hampi (Ashtadiggaja; pin offset)', 'Panduranga Mahatmyamu; legendary wit', 'south',
      { era: 'fl. early 16th c.',
        place: 'Court poet of Vijayanagara (pin offset); from Tenali, Andhra',
        more: 'One of the Ashtadiggajas, famed in folk tales for wit. Served Krishnadevaraya and, by some accounts, Achyuta/Sadasiva Raya. His serious poetry is less known than his legends.',
        books: [
          { t: 'Panduranga Mahatmyamu', y: '16th c.', lang: 'Telugu', sum: 'Prabandha on the glory of Vitthala (Panduranga) of Pandharpur, considered one of the five great Telugu kavyas (Pancha Kavyas).', key: 'Pancha Kavya; Panduranga' }
        ] } ],
    ['Purandara Dasa', 15.3550, 76.4600, 'Hampi (Purandara Mantapa by the Tungabhadra; pin offset)', '"Pitamaha of Carnatic music"; Dasa Sahitya', 'south',
      { era: 'c. 1484–1564',
        place: 'Lived at Vijayanagara; Purandara Mantapa at Hampi is linked to him (pin offset)',
        idea: 'Haridasa bhakti in Madhva Dvaita tradition: devotion to Vitthala in simple Kannada songs open to all.',
        more: 'A rich merchant (Srinivasa Nayaka) who renounced wealth; disciple of Vyasatirtha. Systematised Carnatic music teaching — Mayamalavagowla as the base raga, sarale and janti varisai, alankaras, pillari geethas.',
        books: [
          { t: 'Devaranamas (Dasa padas / Purandara Sahitya)', y: '16th c.', lang: 'Kannada', sum: 'Thousands of songs (traditionally 475,000; about a thousand survive) on devotion to Vitthala, ethics and social criticism, plus graded exercises that remain the foundation of Carnatic music training.', key: 'Mayamalavagowla; pillari geethe; Haridasa' }
        ] } ],
    ['Kanakadasa', 13.3409, 74.7421, 'Udupi (Sri Krishna Matha — "Kanakana Kindi")', 'Haridasa poet; Ramadhanya Charite; Mohanatarangini', 'south',
      { era: 'c. 1509–1609',
        place: 'Legend says Krishna\'s idol at Udupi turned to face him through a window, the "Kanakana Kindi" (pin)',
        idea: 'Devotion outweighs caste; he attacked caste pride and taught equality before God.',
        more: 'A Kuruba (shepherd-caste) chieftain from Bada (Haveri) who became a disciple of Vyasatirtha. Karnataka observes Kanaka Jayanti. NCERT cites the Udupi window legend.',
        books: [
          { t: 'Ramadhanya Charite', y: '16th c.', lang: 'Kannada', sum: 'Allegorical poem of a debate between ragi (millet, food of the poor) and rice before Rama, in which ragi wins — a critique of class and caste hierarchy.', key: 'Ragi vs rice; caste critique' },
          { t: 'Mohanatarangini', y: '16th c.', lang: 'Kannada', sum: 'Poem in sangatya metre on Krishna, with descriptions of Dwaraka modelled on contemporary Vijayanagara.', key: 'Sangatya; Krishna' },
          { t: 'Nalacharitre; Haribhaktisara', y: '16th c.', lang: 'Kannada', sum: 'Retelling of Nala-Damayanti, and a devotional work of moral verses.', key: 'Nala story; devotion' }
        ] } ],
    ['Annamacharya', 13.6833, 79.3474, 'Tirumala (Venkateswara temple)', 'Telugu sankirtanas to Venkateswara; "Pada-kavita Pitamaha"', 'south',
      { era: '1408–1503',
        place: 'Born at Tallapaka; temple composer at Tirumala (pin)',
        more: 'Tallapaka Annamacharya is said to have composed 32,000 sankirtanas, about 13,000 of which survive on copper plates at Tirumala. Regarded as the earliest known composer in the Telugu kirtana form (pallavi–charanam), preceding Tyagaraja.',
        books: [
          { t: 'Sankirtanas', y: '15th c. (copper plates)', lang: 'Telugu', sum: 'Devotional and erotic-devotional (shringara) songs to Lord Venkateswara and social songs criticising caste distinction ("Brahmam okkate").', key: 'Pallavi-charanam; Brahmam okkate' },
          { t: 'Sringara Manjari', y: '15th c.', lang: 'Telugu', sum: 'Poem on the love of a woman devotee for Venkateswara.', key: 'Shringara bhakti' }
        ] } ],
    ['Bammera Pothana', 17.9570, 79.6140, 'Warangal region (traditional: Bammera; pin: Warangal Fort)', 'Andhra Maha Bhagavatamu', 'south',
      { era: 'c. 1450 – c. 1510',
        place: 'Traditionally from Bammera near Warangal (pin: Warangal Fort, approximate association)',
        more: 'A farmer-poet who is said to have refused to dedicate his work to a king, offering it to Rama. His Telugu Bhagavatam is among the best-loved Telugu works.',
        books: [
          { t: 'Andhra Maha Bhagavatamu', y: '15th c.', lang: 'Telugu', sum: 'Telugu rendering of the Bhagavata Purana, famous for episodes like Gajendra Moksham and Prahlada Charitra, rich in bhakti and lyricism.', key: 'Gajendra Moksham; Prahlada' }
        ] } ],
    ['Kumara Vyasa', 15.4300, 75.6300, 'Gadag (Veeranarayana temple, where he is said to have composed)', 'Karnata Bharata Kathamanjari (Gadugina Bharata)', 'south',
      { era: 'fl. early 15th c.',
        place: 'Naranappa of Koliwad; composed in the Veeranarayana temple at Gadag (pin)',
        more: 'Wrote under the Vijayanagara king Devaraya II per tradition. Famed for vivid imagery (rupaka) — "Rupaka samrajya chakravarti".',
        books: [
          { t: 'Karnata Bharata Kathamanjari', y: '15th c.', lang: 'Kannada', sum: 'Kannada retelling of the first ten parvas of the Mahabharata in bhamini shatpadi metre, with Krishna as the central devotional figure.', key: 'Bhamini shatpadi; Gadugina Bharata' }
        ] } ],
    ['Thunchaththu Ezhuthachan', 10.9150, 75.9200, 'Tirur, Malappuram (Thunchan Parambu, birthplace)', 'Father of modern Malayalam; Adhyatma Ramayanam Kilippattu', 'south',
      { era: 'fl. 16th c.',
        place: 'Born at Thunchan Parambu, Tirur (pin)',
        more: 'Thunchaththu Ramanujan Ezhuthachan popularised the Malayalam alphabet and the kilippattu (parrot song) form, giving Malayalam its literary standard. Vidyarambham is held at Thunchan Parambu.',
        books: [
          { t: 'Adhyatma Ramayanam Kilippattu', y: '16th c.', lang: 'Malayalam', sum: 'Malayalam rendering of the Sanskrit Adhyatma Ramayana, narrated by a parrot; read in Kerala homes during the month of Karkidakam (Ramayana masam).', key: 'Kilippattu; Karkidakam' },
          { t: 'Mahabharatam Kilippattu', y: '16th c.', lang: 'Malayalam', sum: 'Condensed Mahabharata in kilippattu form.', key: 'Parrot-song Mahabharata' }
        ] } ],
    ['Wali Dakhni', 19.8762, 75.3433, 'Aurangabad, Deccan', '"Baba-e-Rekhta"; brought Urdu ghazal to Delhi', 'south',
      { era: '1667–1707',
        place: 'Associated with Aurangabad (pin); visited Delhi in 1700',
        more: 'Wali Muhammad Wali, often called the father of Urdu poetry. His Diwan, carried to Delhi in 1700, convinced Delhi poets to compose in Rekhta (Urdu) instead of Persian, beginning the classical Urdu tradition of Mir and Sauda.',
        books: [
          { t: 'Kulliyat-e-Wali (Diwan)', y: 'c. 1700', lang: 'Dakhani / Rekhta Urdu', sum: 'Ghazals and other forms using Persian conventions in an Indian vernacular, on love, beauty and Sufi themes. A turning point in Urdu literary history.', key: 'Rekhta; Urdu ghazal' }
        ] } ]
  ]
});

GEO.add({
  id: 'bk-travellers', group: 'bk-in', title: 'Foreign Travellers to India', bn: 'ভারতে বিদেশি পর্যটক ও তাঁদের বিবরণ', icon: '🧭', world: false,
  intro: 'মেগাস্থিনিস থেকে বার্নিয়ের — বিদেশি পর্যটকরা ভারতের যে স্থানগুলির বর্ণনা দিয়েছেন সেখানে পিন রাখা হয়েছে। পর্যটকের পিনে ক্লিক করুন → কোন রাজত্বকালে এসেছিলেন → গ্রন্থ ও তার মূল তথ্য দেখুন।',
  types: {
    greek: ['Greek (ancient)', '#6d4c41'],
    chinese: ['Chinese pilgrims & envoys', '#c62828'],
    islamic: ['Arab, Persian & Turkish', '#2e7d32'],
    medeuro: ['Medieval Europe & Russia', '#5e35b1'],
    portuguese: ['Portuguese & Jesuit', '#00897b'],
    english: ['English & Dutch', '#1565c0'],
    french: ['French & Italian (17th c.)', '#ef6c00']
  },
  pts: [
    ['Megasthenes', 25.5950, 85.1830, 'Pataliputra (Kumhrar, Patna) — Mauryan capital he described', 'Indica — Mauryan India under Chandragupta', 'greek',
      { era: 'c. 350 – c. 290 BCE',
        place: 'Seleucid ambassador at Chandragupta Maurya\'s court at Pataliputra (pin: Kumhrar)',
        more: 'Sent by Seleucus I Nicator after the treaty of c. 303 BCE. The Indica is lost; fragments survive in Strabo, Arrian, Diodorus and Pliny. He famously described seven "castes" of Indian society and the wooden city of Palibothra.',
        books: [
          { t: 'Indica', y: 'c. 300 BCE (lost; fragments)', lang: 'Greek', sum: 'Description of India\'s geography, rivers, animals and society: Pataliputra with its timber walls and 570 towers, municipal boards of five members, the seven classes (philosophers, farmers, herdsmen, artisans, soldiers, overseers, councillors), and claims that Indians did not know slavery or famine.', key: 'Seven castes; Palibothra; city administration' }
        ] } ],
    ['Faxian (Fa-Hien)', 25.6150, 85.1830, 'Pataliputra (pin offset) — Gupta India under Chandragupta II', 'Foguoji — Record of Buddhist Kingdoms', 'chinese',
      { era: 'c. 337 – c. 422',
        place: 'Stayed three years at Pataliputra studying Sanskrit and copying texts (pin offset)',
        more: 'First known Chinese monk to reach India overland and return by sea (via Sri Lanka). Travelled 399–412, in India c. 405–411 during Chandragupta II Vikramaditya\'s reign, though he never names the king.',
        books: [
          { t: 'Foguoji (A Record of Buddhist Kingdoms)', y: 'c. 416', lang: 'Chinese', sum: 'Account of his journey through Central Asia, Gandhara, Mathura, the Gangetic plain (Kapilavastu, Sravasti, Bodh Gaya, Pataliputra) and Sri Lanka. Describes a prosperous, mild-governed Madhyadesha, free hospitals at Pataliputra, few capital punishments, and Chandalas living outside towns.', key: 'Gupta prosperity; Chandalas; hospitals' }
        ] } ],
    ['Xuanzang (Hiuen Tsang)', 25.1357, 85.4433, 'Nalanda Mahavihara, Bihar', 'Si-Yu-Ki (Da Tang Xiyu Ji) — "Prince of Pilgrims"', 'chinese',
      { era: '602–664',
        place: 'Studied at Nalanda under Shilabhadra for about five years (pin)',
        more: 'Travelled 629–645 to collect Buddhist texts; honoured by Harshavardhana at the Kanauj assembly and Prayag quinquennial assembly (643). Also met Pulakeshin II\'s Chalukya realm. Brought back 657 texts and translated many (Yogacara). Model for the novel "Journey to the West".',
        books: [
          { t: 'Da Tang Xiyu Ji (Great Tang Records on the Western Regions)', y: '646', lang: 'Chinese', sum: 'Region-by-region account of 138 countries: Harsha\'s empire, Kanauj and Prayag assemblies, Pulakeshin II\'s Maharashtra, Nalanda\'s scholarship, decline of Buddhism in places, caste, revenue (one-sixth), and law and order.', key: 'Harsha; Nalanda; Kanauj assembly' },
          { t: 'Life of Xuanzang (by Huili and Yancong)', y: '688', lang: 'Chinese', sum: 'Biography by his disciples supplementing the travel record with details of his years at Nalanda and his debates.', key: 'Biography; Nalanda' }
        ] } ],
    ['Yijing (I-Tsing)', 25.1557, 85.4433, 'Nalanda (pin offset); landed at Tamralipti', 'Record of Buddhist practices from the Southern Seas', 'chinese',
      { era: '635–713',
        place: 'Studied at Nalanda for about ten years (pin offset); reached India by sea via Srivijaya',
        more: 'Travelled by sea via Srivijaya (Sumatra) and was in India c. 673–685. His works describe monastic discipline at Nalanda and the importance of Srivijaya as a Buddhist centre.',
        books: [
          { t: 'Nanhai Jigui Neifa Zhuan (Record of the Buddhist Religion as practised in India and the Malay Archipelago)', y: '691', lang: 'Chinese', sum: 'Detailed account of monastic rules (vinaya), daily life, medicine, education and the curriculum of Nalanda, contrasting Indian with Chinese practice.', key: 'Vinaya; Nalanda curriculum; Srivijaya' },
          { t: 'Memoirs of Eminent Monks who visited the Western Regions', y: '691', lang: 'Chinese', sum: 'Biographies of about 60 Chinese and Korean monks who travelled to India in the 7th century.', key: 'Pilgrim biographies' }
        ] } ],
    ['Ma Huan', 11.2588, 75.7804, 'Calicut (Kozhikode) — Zamorin\'s port he described', 'Yingya Shenglan — Zheng He\'s voyages', 'chinese',
      { era: 'c. 1380 – c. 1460',
        place: 'Visited Calicut and Cochin with Zheng He\'s Ming fleets (pin: Calicut)',
        more: 'Muslim interpreter who sailed on three of Admiral Zheng He\'s treasure-fleet voyages (1413, 1421, 1431). His work describes Bengal, Cochin and Calicut — trade, Chettis, weights, customs of the Zamorin.',
        books: [
          { t: 'Yingya Shenglan (Overall Survey of the Ocean\'s Shores)', y: 'preface 1416; final c. 1451', lang: 'Chinese', sum: 'Account of about 20 countries visited by the Ming fleets, including Calicut ("the great country of the Western Ocean"), its Zamorin, trade by brokers, pepper, and Bengal\'s textiles and cowrie currency.', key: 'Zheng He; Calicut; Bengal' }
        ] } ],
    ['Sulaiman the Merchant', 17.1950, 77.1600, 'Manyakheta (Malkhed) — Rashtrakuta capital of the "Balhara"', 'Akhbar al-Sin wa al-Hind (851)', 'islamic',
      { era: 'fl. mid-9th c.',
        place: 'Arab merchant; pin at the Rashtrakuta capital Manyakheta, whose king he called "Balhara"',
        more: 'His account ranks the Balhara (Rashtrakuta king) among the four greatest kings of the world, describes the Juzr (Gurjara-Pratiharas) as hostile to Arabs, and mentions the Pala kingdom (Ruhmi). Key source for the tripartite struggle.',
        books: [
          { t: 'Akhbar al-Sin wa al-Hind (Accounts of China and India)', y: '851', lang: 'Arabic', sum: 'Notes on sea routes and on the kings of India and China: Balhara as a friend of Arabs, the strong cavalry of Juzr, the army of the Pala king, Indian customs and Chinese trade at Canton.', key: 'Balhara; Gurjara; Pala; tripartite struggle' }
        ] } ],
    ['Al-Masudi', 22.3000, 72.6200, 'Khambhat (Cambay), Gujarat — visited c. 916', '"Herodotus of the Arabs"; Muruj al-Dhahab', 'islamic',
      { era: 'c. 896–956',
        place: 'Visited Cambay, Saymur (Chaul) and Sindh-Multan c. 915–16 (pin: Khambhat)',
        more: 'Baghdad-born historian-geographer. Described the Rashtrakuta Balhara, Pratiharas and Arab Multan; praised the prosperity of Cambay.',
        books: [
          { t: 'Muruj al-Dhahab (Meadows of Gold)', y: '947 (revised 956)', lang: 'Arabic', sum: 'Universal history and geography combining travel observations, covering India\'s kings, religions, the Indian Ocean, monsoons and trade.', key: 'Universal history; monsoons; Balhara' }
        ] } ],
    ['Al-Biruni', 32.7280, 73.2359, 'Nandana Fort, Punjab (Pakistan) — where he measured the Earth', 'Kitab al-Hind — first scientific study of Indian society', 'islamic',
      { era: '973 – c. 1050',
        place: 'Came with Mahmud of Ghazni\'s campaigns; measured Earth\'s radius at Nandana (pin)',
        idea: 'Understand a culture on its own terms through its texts and language; he identified barriers (language, religion, Indian self-absorption) to mutual understanding.',
        more: 'Abu Rayhan al-Biruni from Khwarazm, polymath taken to Ghazni. Learnt Sanskrit, translated Patanjali\'s Yoga Sutra and Samkhya works into Arabic and Euclid into Sanskrit. NCERT Class 12 ("Through the Eyes of Travellers") contrasts his account of caste with Ibn Battuta and Bernier.',
        books: [
          { t: 'Kitab al-Hind (Tahqiq ma li-l-Hind)', y: 'c. 1030', lang: 'Arabic', sum: 'Eighty chapters on Indian religion, philosophy, caste, festivals, astronomy, calendars, weights, geography, laws and customs, based on Sanskrit texts. Critiques the caste system and notes the concept of pollution, comparing it with Persian social orders.', key: 'Caste; Sanskrit sources; impurity' },
          { t: 'Al-Qanun al-Masudi', y: 'c. 1031', lang: 'Arabic', sum: 'Encyclopaedia of astronomy, geography and mathematics dedicated to Sultan Masud of Ghazni.', key: 'Astronomy; Earth\'s radius' }
        ] } ],
    ['Ibn Battuta', 28.5420, 77.2050, 'Delhi (Jahanpanah, Muhammad bin Tughlaq\'s capital)', 'Rihla — qazi of Delhi under Muhammad bin Tughlaq', 'islamic',
      { era: '1304 – 1368/69',
        place: 'Qazi of Delhi 1334–1342 at Muhammad bin Tughlaq\'s court (pin: Jahanpanah area)',
        more: 'Moroccan traveller who covered about 120,000 km. Reached Sindh in 1333; served at Delhi; sent as envoy to China (1342) and became qazi in the Maldives. Described postal systems (uluq and dawa), slaves, betel, coconut, the paan and Indian cities — NCERT Class 12 source.',
        books: [
          { t: 'Rihla (Tuhfat al-Nuzzar fi Gharaib al-Amsar)', y: '1355 (dictated to Ibn Juzayy)', lang: 'Arabic', sum: 'Travel narrative including detailed chapters on India: Delhi\'s size, Daulatabad, Muhammad bin Tughlaq\'s generosity and cruelty, the horse and foot post, the slave market, sati, coconut and paan, and Malabar ports.', key: 'Dawa & uluq post; Muhammad bin Tughlaq; Delhi' }
        ] } ],
    ['Seydi Ali Reis', 28.6096, 77.2437, 'Delhi (Purana Qila — Humayun\'s court)', 'Mirat-ul-Memalik — Ottoman admiral at Humayun\'s court', 'islamic',
      { era: '1498–1563',
        place: 'Met Humayun at Delhi in 1555–56, just before the emperor\'s death (pin: Purana Qila)',
        more: 'Ottoman admiral whose fleet was wrecked off Gujarat (1554); he travelled overland home through India, Afghanistan, Central Asia and Persia.',
        books: [
          { t: 'Mirat-ul-Memalik (Mirror of Countries)', y: '1557', lang: 'Ottoman Turkish', sum: 'Narrative of his journey with an eyewitness account of Humayun\'s court, his death (1556) and the accession of Akbar, plus descriptions of Gujarat, Sindh and Lahore.', key: 'Humayun\'s death; Akbar\'s accession' }
        ] } ],
    ['Abdur Razzaq Samarqandi', 15.3350, 76.4600, 'Vijayanagara (Hampi) — Devaraya II\'s capital', 'Matla-us-Sadain — embassy to Calicut & Vijayanagara', 'islamic',
      { era: '1413–1482',
        place: 'Timurid envoy of Shah Rukh to Calicut and Vijayanagara, 1442–43 (pin: Hampi)',
        more: 'Described Vijayanagara as a city "such that the pupil of the eye has never seen a place like it", with seven concentric fortifications, bazaars and the Mahanavami festival. NCERT Class 12 source.',
        books: [
          { t: 'Matla-us-Sadain wa Majma-ul-Bahrain', y: 'c. 1470s', lang: 'Persian', sum: 'History of the Timurids that includes his embassy: the port of Calicut and the Zamorin, then Vijayanagara under Devaraya II — its seven fortifications, markets, jewels, elephants and the Mahanavami celebrations.', key: 'Seven fortifications; Devaraya II; Calicut' }
        ] } ],
    ['Marco Polo', 8.5700, 78.1200, 'Kayal (Kayalpatnam) — Pandya port of Ma\'bar', 'The Travels (Il Milione) — Ma\'bar, Motupalli, Malabar', 'medeuro',
      { era: '1254–1324',
        place: 'Visited the Coromandel coast c. 1292–93 on his return from China (pin: Kayal, Pandya kingdom)',
        more: 'Venetian merchant who served Kublai Khan. On his return voyage he described the Pandya kingdom (Ma\'bar), pearl fishing, the Kakatiya kingdom of Motupalli ruled by a wise queen (Rudramadevi), and Malabar\'s pepper.',
        books: [
          { t: 'The Travels of Marco Polo (Il Milione)', y: 'c. 1298–1300', lang: 'Franco-Italian (dictated to Rustichello of Pisa)', sum: 'Account of Asia dictated in a Genoese prison. Indian sections cover the wealth of Pandya kings, horse imports from Arabia, pearl diving, the diamond mines and queen of Motupalli, the shrine of St Thomas at Mylapore, and Malabar trade.', key: 'Ma\'bar; Rudramadevi; horse trade; pearls' }
        ] } ],
    ['Niccolò de\' Conti', 15.3150, 76.4600, 'Vijayanagara (Hampi; pin offset) — Devaraya I', 'Account via Poggio Bracciolini — Vijayanagara c. 1420', 'medeuro',
      { era: 'c. 1395–1469',
        place: 'Visited Vijayanagara c. 1420 under Devaraya I (pin offset)',
        more: 'Venetian merchant who spent 25 years in Asia, converting to Islam under duress. On return he dictated his story to the humanist Poggio Bracciolini as penance. Described the city\'s 60-mile circumference and its festivals, and the practice of sati.',
        books: [
          { t: 'De varietate fortunae (Book IV)', y: '1448', lang: 'Latin', sum: 'Poggio\'s record of Conti\'s travels: Vijayanagara\'s size, its king\'s many wives, festivals (Deepavali, Mahanavami), sati, and trade at Calicut and Cambay.', key: 'Vijayanagara; sati; festivals' }
        ] } ],
    ['Afanasy Nikitin', 17.9104, 77.5199, 'Bidar, Karnataka — Bahmani capital', 'Journey Beyond Three Seas — Bahmani kingdom', 'medeuro',
      { era: 'd. 1472',
        place: 'Lived in the Bahmani kingdom 1469–1472, mainly at Bidar (pin)',
        more: 'Russian merchant from Tver; the first known Russian traveller to India. Described the Bahmani kingdom under Muhammad Shah III and minister Mahmud Gawan — wealth of nobles contrasted with peasant poverty.',
        books: [
          { t: 'Khozheniye za tri morya (Journey Beyond Three Seas)', y: 'c. 1472', lang: 'Old Russian', sum: 'Diary of his journey across the Caspian, Persian Gulf and Arabian Sea to India: Chaul, Junnar, Bidar, the Bahmani army and nobility, religious life at Parvat (Srisailam), and the great poverty of the countryside.', key: 'Bahmani; Mahmud Gawan; Bidar' }
        ] } ],
    ['Ludovico di Varthema', 11.2788, 75.7804, 'Calicut (pin offset) — Zamorin\'s kingdom', 'Itinerario — Calicut and Vijayanagara, c. 1504–05', 'medeuro',
      { era: 'c. 1470–1517',
        place: 'Visited Calicut, Vijayanagara and the Deccan c. 1504–05 (pin: Calicut, offset)',
        more: 'Italian adventurer who also entered Mecca in disguise. His popular account describes the Zamorin\'s Calicut, Vijayanagara, and Portuguese warfare on the Malabar coast.',
        books: [
          { t: 'Itinerario de Ludovico de Varthema', y: '1510', lang: 'Italian', sum: 'Travel narrative across Arabia, Persia, India and Southeast Asia; Indian chapters cover Calicut society (Nairs, Brahmins, matrilineal succession), pepper trade and Vijayanagara\'s wealth.', key: 'Calicut; Nairs; matriliny' }
        ] } ],
    ['Duarte Barbosa', 11.8745, 75.3704, 'Kannur (Cannanore), Malabar — Portuguese factory', 'Book of Duarte Barbosa — Indian Ocean coasts c. 1516', 'portuguese',
      { era: 'c. 1480–1521',
        place: 'Portuguese clerk and interpreter at Cannanore and Cochin (pin: Kannur)',
        more: 'Learnt Malayalam; later died on Magellan\'s voyage in the Philippines (1521). His book is a vital source for Vijayanagara, Gujarat, Bengal and the coastal trade on the eve of Portuguese dominance.',
        books: [
          { t: 'Livro de Duarte Barbosa', y: 'c. 1516', lang: 'Portuguese', sum: 'Survey of the coasts from East Africa to China: Gujarat\'s merchants and Cambay, Vijayanagara under Krishnadevaraya with religious freedom for all, Malabar castes and matriliny, Bengal\'s textiles and trade.', key: 'Krishnadevaraya; Malabar; Gujarat trade' }
        ] } ],
    ['Domingo Paes', 15.3350, 76.4800, 'Vijayanagara (Hampi; pin offset) — Krishnadevaraya', 'Chronicle of Vijayanagara under Krishnadevaraya', 'portuguese',
      { era: 'fl. c. 1520–1522',
        place: 'Portuguese horse-trader who visited Vijayanagara c. 1520–22 (pin offset)',
        more: 'Gave the most vivid European description of Krishnadevaraya — "the most feared and perfect king that could possibly be" — and of the city\'s size ("as large as Rome"), markets and the Mahanavami festival. NCERT Class 7 and 12 source.',
        books: [
          { t: 'Chronicle of Bisnaga (Paes\' narrative)', y: 'c. 1520–22 (pub. Sewell, 1900)', lang: 'Portuguese', sum: 'Eyewitness account of Vijayanagara: Krishnadevaraya\'s appearance and court, the city like Rome, bazaars full of rubies and diamonds, the Mahanavami Dibba festival and army review. Published in English in Robert Sewell\'s "A Forgotten Empire".', key: 'Krishnadevaraya; Mahanavami; "as large as Rome"' }
        ] } ],
    ['Fernão Nunes (Nuniz)', 15.3550, 76.4600, 'Vijayanagara (Hampi; pin offset) — Achyuta Raya', 'Chronicle of the kings of Vijayanagara', 'portuguese',
      { era: 'fl. c. 1535–1537',
        place: 'Horse-trader at Vijayanagara under Achyuta Deva Raya, c. 1535–37 (pin offset)',
        more: 'His chronicle gives a history of the Vijayanagara dynasties and describes the nayankara system, revenues, sati and the battle of Raichur (1520). Translated by Robert Sewell in "A Forgotten Empire" (1900).',
        books: [
          { t: 'Chronica dos Reis de Bisnaga', y: 'c. 1535–37', lang: 'Portuguese', sum: 'History of Vijayanagara from its founding to Achyuta Raya, with descriptions of the nayakas who held land for military service, revenue farming, the battle of Raichur and court customs.', key: 'Nayankara; Raichur 1520; Achyuta Raya' }
        ] } ],
    ['Antonio Monserrate', 27.1145, 77.6679, 'Fatehpur Sikri (Akbar\'s court; pin offset)', 'Mongolicae Legationis Commentarius — first Jesuit mission', 'portuguese',
      { era: '1536–1600',
        place: 'Member of the first Jesuit mission to Akbar at Fatehpur Sikri, 1580–82 (pin offset)',
        more: 'Catalan Jesuit who went with Rudolf Acquaviva at Akbar\'s invitation, tutored prince Murad and accompanied Akbar\'s Kabul campaign (1581). Captured later in Arabia, he wrote his commentary in captivity.',
        books: [
          { t: 'Mongolicae Legationis Commentarius', y: '1590–91', lang: 'Latin', sum: 'Account of the Jesuit mission: Akbar\'s appearance and character, the religious debates in the Ibadat Khana, the court at Fatehpur Sikri and the 1581 campaign against Mirza Hakim at Kabul, with an early map of north India.', key: 'Jesuits; Ibadat Khana; Akbar' }
        ] } ],
    ['Ralph Fitch', 27.0945, 77.6679, 'Fatehpur Sikri (visited 1585)', 'First English merchant to describe Mughal India', 'english',
      { era: '1550–1611',
        place: 'Visited Agra and Fatehpur Sikri in 1585 (pin: Fatehpur Sikri)',
        more: 'London merchant who travelled via Hormuz and Goa (where he was briefly imprisoned) to Akbar\'s capitals, then Bengal and Burma. His reports encouraged the founding of the East India Company (1600).',
        books: [
          { t: 'Narrative of Ralph Fitch (in Hakluyt\'s Principal Navigations)', y: '1599', lang: 'English', sum: 'Describes Agra and Fatehpur Sikri as larger than London and full of people, the trade of Bengal and Pegu, Goa\'s Portuguese, and Indian customs including sati.', key: 'Agra & Fatehpur larger than London' }
        ] } ],
    ['William Hawkins', 27.1795, 78.0211, 'Agra Fort (Jahangir\'s court, 1609–11)', 'East India Company envoy; "Inglis Khan"', 'english',
      { era: 'c. 1565–1613',
        place: 'Stayed at Jahangir\'s court at Agra 1609–1611 (pin: Agra Fort)',
        more: 'Commander of the Hector, the first EIC ship at Surat (1608). Spoke Turkish; Jahangir made him a mansabdar (400) and called him "Inglis Khan", but Portuguese opposition prevented a trading farman.',
        books: [
          { t: 'Relations of William Hawkins (in Purchas His Pilgrimes)', y: 'published 1625', lang: 'English', sum: 'Account of his embassy: Jahangir\'s court routine, the revenues and treasures of the empire, the mansabdari system, and the intrigues of the Portuguese and Mughal nobles against English trade.', key: 'Surat 1608; mansab; Jahangir' }
        ] } ],
    ['Sir Thomas Roe', 26.4499, 74.6399, 'Ajmer (Jahangir\'s camp, 1616)', 'Ambassador of James I to Jahangir; Journal', 'english',
      { era: 'c. 1581–1644',
        place: 'Presented credentials to Jahangir at Ajmer in January 1616 (pin)',
        more: 'First official English ambassador to the Mughals (1615–1619). Secured privileges for the English factory at Surat through Prince Khurram (Shah Jahan). Advised the EIC to avoid territorial ambitions and seek trade by sea.',
        books: [
          { t: 'The Embassy of Sir Thomas Roe to the Court of the Great Mogul (Journal and letters)', y: '1615–1619 (ed. Foster, 1899)', lang: 'English', sum: 'Daily journal and letters describing Jahangir\'s durbar, the jharokha darshan and weighing ceremony, Nur Jahan\'s faction, Khurram, the Mughal camp, and negotiations for trading rights at Surat.', key: 'Jahangir; Nur Jahan; Surat privileges' }
        ] } ],
    ['Francisco Pelsaert', 27.1995, 78.0211, 'Agra (Dutch factory; pin offset)', 'Remonstrantie — economic life under Jahangir', 'english',
      { era: 'c. 1595–1630',
        place: 'Head of the Dutch East India Company (VOC) factory at Agra 1620–1627 (pin offset)',
        more: 'Antwerp-born VOC merchant. His report is a key source for the condition of peasants and artisans under Jahangir and for the indigo and textile trade; later famous for the Batavia shipwreck (1629).',
        books: [
          { t: 'Remonstrantie (Jahangir\'s India)', y: '1626', lang: 'Dutch', sum: 'Commercial report on Agra and north India: indigo and textile production, prices, the luxury of the nobility contrasted with the "utter subjection and poverty" of common people, and oppression by officials.', key: 'Indigo; poverty of peasants; Agra trade' }
        ] } ],
    ['Peter Mundy', 27.1751, 78.0421, 'Agra (saw the Taj Mahal being built)', 'Travels in Asia — Agra, Gujarat famine 1630–32', 'english',
      { era: 'c. 1600 – c. 1667',
        place: 'EIC factor at Agra 1631–33; described the Taj Mahal under construction (pin)',
        more: 'Cornish merchant who also visited China and Japan. He recorded the terrible Deccan-Gujarat famine of 1630–32 and early construction of the Taj Mahal.',
        books: [
          { t: 'The Travels of Peter Mundy in Europe and Asia (Itinerarium Mundii)', y: 'written 1630s–1660s (pub. Hakluyt Society 1907–36)', lang: 'English', sum: 'Illustrated journals describing the 1630–32 famine, Agra, Shah Jahan\'s court and Mumtaz Mahal\'s tomb in progress, Indian festivals and modes of travel.', key: 'Famine 1630–32; Taj under construction' }
        ] } ],
    ['Jean-Baptiste Tavernier', 17.3833, 78.4011, 'Golconda (diamond trade; Kollur mine)', 'Six Voyages — diamonds and Mughal trade', 'french',
      { era: '1605–1689',
        place: 'Made six voyages (1630–1668); visited the Golconda diamond mines and Kollur (pin: Golconda Fort)',
        more: 'French gem merchant who sold the "Tavernier Blue" (ancestor of the Hope Diamond) to Louis XIV and described the Peacock Throne and the Great Mogul diamond. Valuable for Indian trade, coinage and manufactures.',
        books: [
          { t: 'Les Six Voyages de Jean-Baptiste Tavernier', y: '1676', lang: 'French', sum: 'Account of Persia and India: diamond mines of Golconda (Kollur), routes, coinage, the Peacock Throne and jewels of Aurangzeb, Surat and Agra trade, and Indian commodities.', key: 'Golconda diamonds; Peacock Throne; Hope diamond' }
        ] } ],
    ['François Bernier', 28.6506, 77.2303, 'Delhi (Shahjahanabad — Chandni Chowk)', 'Travels in the Mughal Empire; "no private property in land"', 'french',
      { era: '1620–1688',
        place: 'Lived in Delhi c. 1658–1670 as physician to Dara Shikoh and then Danishmand Khan (pin)',
        idea: 'Mughal decline flowed from the absence of private property in land: the crown owned all land, so neither noble nor peasant invested — an idea later used by Montesquieu and Marx ("Asiatic despotism").',
        more: 'French physician and philosopher (Gassendi\'s pupil). Witnessed the war of succession (1658) and travelled with Aurangzeb to Kashmir. NCERT Class 12 contrasts his view with Indian evidence.',
        books: [
          { t: 'Travels in the Mogul Empire (Histoire de la dernière révolution des États du Grand Mogol)', y: '1670–71', lang: 'French', sum: 'Narrative of the Mughal war of succession and letters to Colbert comparing Mughal India with France: crown ownership of land, impoverished peasants, "camp towns", Delhi and Agra, Kashmir, sati and the decline he predicted.', key: 'Crown ownership of land; camp towns; Colbert letter' }
        ] } ],
    ['Jean de Thévenot', 21.1959, 72.8302, 'Surat (Mughal port, 1666)', 'Voyages — Surat, Gujarat and the Deccan', 'french',
      { era: '1633–1667',
        place: 'Arrived at Surat in 1666 and toured Gujarat, Golconda and the Deccan (pin: Surat)',
        more: 'French traveller and linguist, nephew of the scholar Melchisédech Thévenot. Described Surat shortly after Shivaji\'s first sack (1664), Ahmedabad, Aurangabad and the Ellora caves. Died in Persia on his way home.',
        books: [
          { t: 'Voyages de M. de Thévenot (Part III: Indostan)', y: '1684 (posthumous)', lang: 'French', sum: 'Descriptions of Surat\'s port and merchants, Ahmedabad, Cambay, Golconda, Aurangabad and Ellora, Mughal administration in Gujarat and Shivaji\'s raids.', key: 'Surat; Ellora; Shivaji\'s raid' }
        ] } ],
    ['Niccolao Manucci', 13.0797, 80.2875, 'Madras (Fort St George) — where he wrote', 'Storia do Mogor — Mughal court from Dara to Aurangzeb', 'french',
      { era: 'c. 1638 – c. 1720',
        place: 'Arrived in India 1656; served Dara Shikoh as gunner; later a physician; wrote at Madras/Pondicherry (pin: Fort St George)',
        more: 'Venetian adventurer who lived about 60 years in India. His gossipy but rich work covers Dara\'s defeat, Aurangzeb\'s reign, harem life and Mughal medicine and administration.',
        books: [
          { t: 'Storia do Mogor', y: 'c. 1699–1709', lang: 'Italian, Portuguese & French', sum: 'History of the Mughals with eyewitness accounts of the war of succession, Aurangzeb\'s court and campaigns, Shivaji, Mughal nobility and harem, plus Indian medicine and customs. Translated by William Irvine (1907–08).', key: 'Dara Shikoh; Aurangzeb; harem' }
        ] } ]
  ]
});
