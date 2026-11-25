// Books & philosophy — Indian darśanas: āstika (orthodox) and nāstika (heterodox) schools, their sūtra-authors and commentators.
// Sources: Wikipedia, Britannica, Stanford Encyclopedia of Philosophy, Internet Encyclopedia of Philosophy, NCERT, IGNOU (BPY/MPY) material.
// Dates of ancient Indian thinkers are mostly approximate; traditional vs scholarly datings are noted in `more`.
GEO.add({
  id: 'bk-astika', group: 'bk-dar', title: 'Āstika Darśanas (Orthodox Schools)', bn: 'আস্তিক দর্শন (ষড়দর্শন ও শৈব দর্শন)', icon: '🕉️', world: false,
  intro: 'বেদের প্রামাণ্য স্বীকারকারী ছয় আস্তিক দর্শন (ন্যায়, বৈশেষিক, সাংখ্য, যোগ, মীমাংসা, বেদান্ত) এবং শৈব ও শব্দ-দর্শনের সূত্রকার-ভাষ্যকারদের মানচিত্র। কোনো দার্শনিকে ক্লিক করুন → মূল মত (idea) → গ্রন্থতালিকা → গ্রন্থে ক্লিক করলে সারাংশ ও মূল পরিভাষা (প্রমাণ, পদার্থ, কার্যকারণবাদ, মোক্ষ)।',
  types: {
    nyaya: ['Nyāya–Vaiśeṣika (incl. Navya-Nyāya)', '#1e88e5'],
    samkhya: ['Sāṃkhya–Yoga', '#2e7d32'],
    mimamsa: ['Pūrva Mīmāṃsā', '#ef6c00'],
    advaita: ['Advaita Vedānta', '#c2185b'],
    vaishnava: ['Vaiṣṇava Vedānta', '#7b2cbf'],
    shaiva: ['Śaiva darśanas', '#00897b'],
    vyakarana: ['Grammarian (Śabda) philosophy', '#795548']
  },
  pts: [
    ['Gautama (Akshapada)', 26.1742, 85.9118, 'Mithila, Bihar (traditional: Gautama Asthan near Darbhanga)', 'Founder of Nyaya: logic & epistemology; 4 pramanas; 16 padarthas; five-limbed syllogism', 'nyaya',
      { era: 'c. 2nd c. BCE – 2nd c. CE (Nyaya Sutra compiled by c. 2nd c. CE)',
        place: 'Traditionally associated with Mithila; local tradition places his ashram near Darbhanga (approximate pin)',
        idea: 'Liberation (apavarga) comes from true knowledge of 16 categories gained through valid means of knowledge (pramana); the world is real, made of parts, and God/soul are proved by inference.',
        more: 'Akshapada Gautama is the traditional author of the Nyaya Sutra, the foundational text of Indian logic (tarka/anviksiki). Nyaya is realist and pluralist and pairs with Vaisheshika (Nyaya-Vaisheshika). Vatsyayana (Pakshilasvamin, c. 5th c.) wrote the Nyaya Bhashya on it; Uddyotakara and Vachaspati Mishra followed. Theory of causation: asatkaryavada (effect is new, not pre-existent in the cause). UPSC: pramanas, syllogism, theory of error (anyathakhyati).',
        books: [
          { t: 'Nyaya Sutra', y: 'c. 2nd c. BCE – 2nd c. CE', lang: 'Sanskrit', sum: 'About 530 sutras in 5 books. Lists 16 padarthas (pramana, prameya, samshaya, prayojana, drishtanta, siddhanta, avayava, tarka, nirnaya, vada, jalpa, vitanda, hetvabhasa, chhala, jati, nigrahasthana), defines the four pramanas, the five-membered inference and fallacies, and holds that liberation follows the removal of false knowledge.', key: 'Pratyaksha, anumana, upamana, shabda; pratijna-hetu-udaharana-upanaya-nigamana; hetvabhasa' }
        ] } ],
    ['Kanada', 20.8880, 70.4012, 'Prabhas Patan (Somnath), Gujarat — traditional', 'Founder of Vaisheshika: atomism (paramanu); 6 padarthas; vishesha (particularity)', 'nyaya',
      { era: 'c. 6th–2nd c. BCE (dating uncertain)',
        place: 'Tradition links Kanada with Prabhas Kshetra (Somnath); pin is traditional, not historical',
        idea: 'All physical things are made of eternal, indivisible atoms (paramanu) of earth, water, fire and air; reality can be fully classified into six categories, knowledge of which leads to liberation.',
        more: 'Kanada ("atom-eater", also Kashyapa/Uluka, hence "Aulukya darshana") composed the Vaisheshika Sutra. Prashastapada (c. 6th c.) systematised it in the Padarthadharmasangraha; abhava (non-existence) was later added as a 7th category. Vaisheshika accepts only two pramanas (perception, inference) and asatkaryavada / arambhavada (creation by combination of atoms: dvyanuka, tryanuka). Merged with Nyaya by the 11th c.',
        books: [
          { t: 'Vaisheshika Sutra', y: 'c. 2nd c. BCE (some date earlier)', lang: 'Sanskrit', sum: 'Ten chapters on dharma defined as that which yields worldly prosperity and the highest good. Classifies reality into dravya (9 substances: earth, water, fire, air, ether, time, space, self, mind), guna, karma, samanya, vishesha and samavaya, and explains the world as combinations of atoms set in motion by adrishta.', key: 'Paramanu; 6 padarthas (+abhava); 9 dravyas; samavaya (inherence); adrishta; arambhavada' }
        ] } ],
    ['Jayanta Bhatta', 34.1037, 74.8173, 'Srinagar, Kashmir (court of Shankaravarman)', 'Kashmiri Naiyayika; Nyayamanjari defends Vedic authority and Nyaya realism; satirical play on sects', 'nyaya',
      { era: 'fl. late 9th c. CE',
        place: 'Kashmir; served King Shankaravarman (r. 883–902) of the Utpala dynasty (pin: Srinagar, offset)',
        idea: 'Defends Nyaya realism and the authority of the Vedas as composed by God, refuting Buddhist momentariness, Mimamsa eternal-Veda theory and Charvaka materialism.',
        more: 'Jayanta Bhatta was a Kashmiri Brahmin logician and minister. His Nyayamanjari is an independent commentary on select Nyaya sutras and an encyclopaedic survey of rival schools, valued for what it preserves of Buddhist and Charvaka views. His Sanskrit play Agamadambara satirises religious sects of 9th-century Kashmir. Grandson Abhinanda was a poet.',
        books: [
          { t: 'Nyayamanjari', y: 'late 9th c.', lang: 'Sanskrit', sum: 'Twelve chapters (ahnikas) on the pramanas and prameyas, arguing against Buddhist, Mimamsaka and materialist positions; proves God (Ishvara) as author of the Vedas and maker of the world, and defends the validity of the Vedas by the reliability of their author.', key: 'Pramana-vichara; Ishvara-siddhi; apaurusheya refuted; anti-kshanikavada' },
          { t: 'Agamadambara', y: 'late 9th c.', lang: 'Sanskrit', sum: 'A four-act philosophical play in which a young Mimamsaka meets Buddhists, Jains, Shaivas and others, satirising sectarian excess and dramatising debates of the period.', key: 'Philosophical drama; satire of sects' }
        ] } ],
    ['Udayana', 25.8600, 86.0500, 'Kariyan village, Samastipur, Bihar (Mithila)', 'Greatest pre-Navya Naiyayika; 9 proofs of God (Nyayakusumanjali); merged Nyaya & Vaisheshika', 'nyaya',
      { era: 'c. 975–1050 CE (Lakshanavali dated 984 CE)',
        place: 'Kariyan (Udayanacharya Dih), Shivajinagar block, Samastipur, traditionally his home (approximate pin)',
        idea: 'Ishvara exists and can be proved by inference (from the world as an effect, the combination of atoms, the Vedas, etc.); a permanent self exists against the Buddhist no-self view.',
        more: 'Udayanacharya of Mithila was the leading Nyaya-Vaisheshika philosopher before Gangesha and is regarded as the bridge to Navya-Nyaya. He fought Buddhist logicians (especially Ratnakirti) and is credited in tradition with the decline of Buddhist philosophy in India. He commented on Vachaspati Mishra and on Prashastapada (Kiranavali). UPSC: classic Indian arguments for the existence of God.',
        books: [
          { t: 'Nyayakusumanjali', y: 'late 10th c.', lang: 'Sanskrit', sum: 'The classic Indian theistic treatise: answers five objections against God and gives nine arguments (karyat, ayojanat, dhrityadeh, padat, pratyayatah, shruteh, vakyat, sankhyavisheshat, adrishtat) for Ishvara as creator and moral governor.', key: 'Nine proofs of Ishvara; karyat (world as effect); adrishta' },
          { t: 'Atmatattvaviveka', y: 'late 10th c.', lang: 'Sanskrit', sum: 'Refutes four Buddhist doctrines (momentariness, non-existence of external objects, no difference between quality and substance, no-self) to establish a permanent self.', key: 'Refutes kshanikavada & anatmavada' },
          { t: 'Lakshanavali', y: '984 CE', lang: 'Sanskrit', sum: 'Concise manual of definitions of the Vaisheshika categories; its colophon gives the firm date for Udayana.', key: 'Definitions of padarthas' },
          { t: 'Kiranavali', y: 'c. 1000 CE', lang: 'Sanskrit', sum: 'Commentary on Prashastapada\'s Padarthadharmasangraha, the basic Vaisheshika text, harmonising it with Nyaya.', key: 'Nyaya-Vaisheshika synthesis' }
        ] } ],
    ['Gangesha Upadhyaya', 26.1542, 85.8918, 'Mithila, Bihar (pin: Darbhanga)', 'Founder of Navya-Nyaya (New Logic); Tattvachintamani on the four pramanas', 'nyaya',
      { era: 'fl. 14th c. CE (c. 1300–1350; some place him in late 13th c.)',
        place: 'Mithila, the great centre of Nyaya learning (pin: Darbhanga)',
        idea: 'Epistemology must be stated with technical precision: knowledge is analysed through relations such as vyapti (invariable concomitance), avacchedaka (limitor) and pratiyogi (counter-positive), organised under the four pramanas.',
        more: 'Gangesha of Mithila created Navya-Nyaya, which shifted Nyaya from listing categories to a precise technical language for analysing cognition. His school passed from Mithila (Pakshadhara Mishra) to Navadvipa in Bengal (Vasudeva Sarvabhauma, Raghunatha Shiromani, Gadadhara). Navya-Nyaya terminology was later used across Indian law, grammar and poetics.',
        books: [
          { t: 'Tattvachintamani', y: '14th c.', lang: 'Sanskrit', sum: 'The founding text of Navya-Nyaya in four books: pratyaksha (perception), anumana (inference, incl. the famous vyapti-panchaka), upamana (comparison) and shabda (testimony). Largely drops the old 16-category structure and focuses on the analysis of valid knowledge.', key: 'Vyapti; avacchedaka; pratiyogita; paksata; hetvabhasa' }
        ] } ],
    ['Raghunatha Shiromani', 23.4036, 88.3676, 'Navadvipa (Nabadwip), Bengal', 'Navadvipa school of Navya-Nyaya; Didhiti on Tattvachintamani; revised Vaisheshika categories', 'nyaya',
      { era: 'c. 1477–1547 CE',
        place: 'Navadvipa, Nadia district, West Bengal — the 16th-c. capital of Navya-Nyaya',
        idea: 'Reformed the Vaisheshika list of categories: rejected some old padarthas (e.g. vishesha as separate, time and space as distinct from God) and added new ones such as moment (kshana), number and causal power (shakti).',
        more: 'Raghunatha, pupil of Vasudeva Sarvabhauma, made Navadvipa the leading centre of Navya-Nyaya, surpassing Mithila; tradition makes him a contemporary of Chaitanya. His Didhiti commentary became the base text for later Bengali logicians (Jagadisha, Gadadhara). Important for the history of Bengal learning.',
        books: [
          { t: 'Tattvachintamani-Didhiti', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Highly original commentary on Gangesha\'s Tattvachintamani that sharpened Navya-Nyaya definitions, especially of vyapti and inference, and generated a long tradition of sub-commentaries.', key: 'Didhiti; Navya-Nyaya refinement of vyapti' },
          { t: 'Padarthatattvanirupana', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Short critical work re-examining the Nyaya-Vaisheshika categories, eliminating some and proposing new ones; a landmark of independent ontological thinking.', key: 'Revision of padarthas; kshana, shakti' }
        ] } ],
    ['Kapila', 21.6368, 88.0753, 'Gangasagar, Sagar Island, West Bengal (Kapil Muni ashram — traditional)', 'Traditional founder of Samkhya: prakriti–purusha dualism, 25 tattvas, satkaryavada', 'samkhya',
      { era: 'Traditional / legendary; Samkhya ideas c. 1st millennium BCE',
        place: 'Tradition places Kapila Muni\'s ashram at Gangasagar, where the Ganga meets the sea (Gangasagar Mela); pin is traditional',
        idea: 'Reality is two independent eternal principles — conscious but inactive purusha and unconscious active prakriti (of three gunas); bondage is non-discrimination of the two, liberation (kaivalya) is their discriminative knowledge.',
        more: 'Kapila is named in the Mahabharata, Bhagavata Purana and Buddhist texts as the first teacher of Samkhya, the oldest systematic darshana. Classical Samkhya is dualist and does not need God (nirishvara). Theory of causation: satkaryavada as parinamavada (effect pre-exists in cause; real transformation). Three pramanas: perception, inference, testimony. The extant Samkhya Sutra ascribed to him is a late (c. 14th c.) work.',
        books: [
          { t: 'Samkhya Sutra (Samkhya-pravachana Sutra) — traditionally attributed', y: 'c. 14th c. CE (late compilation)', lang: 'Sanskrit', sum: 'Six chapters traditionally credited to Kapila but composed much later; restates Samkhya dualism, the evolution of 25 tattvas and the path to discriminative knowledge; commented on by Aniruddha and Vijnanabhikshu.', key: 'Prakriti, purusha; 25 tattvas; mahat, ahamkara, manas' },
          { t: 'Tattvasamasa — traditionally attributed', y: 'date uncertain', lang: 'Sanskrit', sum: 'A very short list of Samkhya topics (22 brief sutras) also ascribed to Kapila; date and authorship are debated.', key: 'Summary list of tattvas' }
        ] } ],
    ['Ishvarakrishna', 21.6568, 88.0953, 'Place unknown (shown with the Samkhya pin at Gangasagar, offset)', 'Author of Samkhya Karika — the earliest surviving text of classical Samkhya', 'samkhya',
      { era: 'c. 350–450 CE',
        place: 'Nothing reliable is known about his home; pinned beside Kapila\'s traditional site for the Samkhya school',
        idea: 'Classical Samkhya: from unmanifest prakriti, through disturbance of the gunas in the presence of purusha, evolve 23 principles; knowledge distinguishing purusha from prakriti ends suffering, like a dancer who stops after being seen.',
        more: 'The Samkhya Karika (72 verses) is the authoritative text of the school; it was translated into Chinese by Paramartha in the 6th c. Commentaries: Gaudapada\'s Bhashya, Mathara-vritti, Yuktidipika and Vachaspati Mishra\'s Tattvakaumudi. It gives the five arguments for satkaryavada and the arguments for prakriti and plurality of purushas — frequently asked in philosophy optional.',
        books: [
          { t: 'Samkhya Karika', y: 'c. 4th–5th c. CE', lang: 'Sanskrit', sum: 'Seventy-odd verses setting out the three pramanas, satkaryavada (five reasons: asadakaranat etc.), proofs of prakriti and of many purushas, the three gunas (sattva, rajas, tamas), the evolution of 25 tattvas, and liberation as kaivalya; uses the lame man and blind man image for purusha and prakriti.', key: 'Satkaryavada; guna-traya; 25 tattvas; purusha-bahutva; kaivalya; pangu-andha' }
        ] } ],
    ['Patanjali', 27.1339, 81.9620, 'Gonda, Uttar Pradesh (traditional Gonarda)', 'Yoga Sutra: chitta-vritti-nirodha; ashtanga yoga; Ishvara; kaivalya', 'samkhya',
      { era: 'c. 2nd c. BCE (grammarian); Yoga Sutra c. 2nd c. BCE – 4th c. CE',
        place: 'Tradition (from the epithet Gonardiya) links him to Gonarda, identified with Gonda, UP; pin is traditional',
        idea: 'Yoga is the stilling of the fluctuations of the mind (chitta-vritti-nirodha), achieved through the eight-limbed discipline, ending in samadhi and kaivalya — isolation of purusha from prakriti; accepts Samkhya metaphysics plus Ishvara.',
        more: 'Yoga darshana is Samkhya with God (seshvara Samkhya); Ishvara is a special purusha untouched by afflictions. Identity question: Indian tradition treats Patanjali of the Yoga Sutra and Patanjali the grammarian (Mahabhashya, c. 150 BCE, Shunga period) as one; many modern scholars date the Yoga Sutra later (c. 2nd–4th c. CE) and see two authors. Vyasa\'s Yoga Bhashya is the classic commentary. UPSC: ashtanga, kleshas, International Yoga Day.',
        books: [
          { t: 'Yoga Sutra', y: 'c. 2nd c. BCE – 4th c. CE', lang: 'Sanskrit', sum: '195/196 sutras in four padas (Samadhi, Sadhana, Vibhuti, Kaivalya). Defines yoga, five kinds of vritti, five kleshas (avidya, asmita, raga, dvesha, abhinivesha), the eight limbs, siddhis (powers), and liberation as kaivalya.', key: 'Yama, niyama, asana, pranayama, pratyahara, dharana, dhyana, samadhi; kleshas; Ishvara-pranidhana' },
          { t: 'Mahabhashya (if same author)', y: 'c. 150 BCE', lang: 'Sanskrit', sum: 'The great commentary on Panini\'s Ashtadhyayi and Katyayana\'s varttikas; foundational for Sanskrit grammar and also a historical source (mentions Pushyamitra\'s yajna and Yavana attacks on Saketa and Madhyamika).', key: 'Vyakarana; Panini–Katyayana–Patanjali (munitraya)' }
        ] } ],
    ['Jaimini', 25.3176, 82.9739, 'Varanasi (historic centre of Mimamsa learning; birthplace unknown)', 'Purva Mimamsa Sutra: dharma is known only from Vedic injunction; ritual exegesis', 'mimamsa',
      { era: 'c. 3rd–1st c. BCE',
        place: 'No reliable birthplace; tradition makes him a pupil of Vyasa. Pinned at Varanasi as a historic Mimamsa centre',
        idea: 'Dharma is that which is indicated by Vedic injunctions (codana); the Vedas are eternal and authorless (apaurusheya) and self-valid, and right ritual action produces its fruit through an unseen potency (apurva).',
        more: 'Purva Mimamsa ("prior inquiry") interprets the karma-kanda (ritual part) of the Vedas, while Uttara Mimamsa (Vedanta) interprets the jnana-kanda. The Mimamsa Sutra is the longest of the darshana sutras. Shabara (c. 1st c. BCE – 5th c. CE) wrote the classic Bhashya, on which Kumarila and Prabhakara built two schools. Its rules of interpretation (nyaya) influenced Hindu law (dharmashastra) and even modern Indian court interpretation.',
        books: [
          { t: 'Mimamsa Sutra (Purva Mimamsa Sutra)', y: 'c. 3rd–1st c. BCE', lang: 'Sanskrit', sum: 'About 2,700 sutras in 12 chapters beginning "athato dharma-jijnasa" (now, therefore, the inquiry into dharma). Defines dharma, classifies Vedic texts into vidhi, mantra, namadheya, nishedha and arthavada, and gives hermeneutic rules for resolving apparent contradictions in ritual texts.', key: 'Dharma-jijnasa; codana; apaurusheya Veda; vidhi; apurva; svatah-pramanya' }
        ] } ],
    ['Kumarila Bhatta', 25.4235, 81.8850, 'Prayagraj (Triveni Sangam) — traditional site of his self-immolation', 'Bhatta Mimamsa; 6 pramanas; svatah-pramanya; Vedic realism against Buddhism', 'mimamsa',
      { era: 'fl. c. 7th c. CE (c. 600–700)',
        place: 'Tradition (Shankara-digvijaya) says he died on a husk-fire (tushagni) at Prayag, where Shankara met him; birthplace unknown',
        idea: 'Knowledge is intrinsically valid (svatah-pramanya) unless contradicted; the eternal, authorless Vedas are the only source of dharma; the world and souls are real — defended with six pramanas against Buddhist idealism.',
        more: 'Kumarila founded the Bhatta school of Mimamsa and is credited with reviving Vedic orthodoxy against Buddhism and Jainism. He added arthapatti (postulation) and anupalabdhi (non-cognition) to the four Nyaya pramanas (Advaita adopted these six). Semantic theory: abhihitanvayavada (words convey meanings that are then connected). Theory of error: viparitakhyati. Mandana Mishra is traditionally his pupil.',
        books: [
          { t: 'Shlokavarttika', y: '7th c.', lang: 'Sanskrit', sum: 'Verse commentary on the first section (Tarkapada) of Shabara\'s Bhashya; a major work of epistemology refuting Buddhist idealism (Yogachara), momentariness and the Buddhist apoha theory, and defending the self-validity of knowledge.', key: 'Svatah-pramanya; 6 pramanas; anti-vijnanavada; apoha refuted' },
          { t: 'Tantravarttika', y: '7th c.', lang: 'Sanskrit', sum: 'Prose-verse commentary on further parts of Shabara\'s Bhashya, dealing with the sources of dharma, smriti and custom (sadachara) and their relation to the Veda.', key: 'Sources of dharma; smriti-shruti relation' },
          { t: 'Tuptika', y: '7th c.', lang: 'Sanskrit', sum: 'Brief notes on the remaining chapters of the Bhashya, completing his commentary.', key: 'Bhatta Mimamsa' }
        ] } ],
    ['Prabhakara', 10.2280, 76.1960, 'Kerala (Chera region) — approximate pin near Kodungallur', 'Prabhakara (Guru) Mimamsa; 5 pramanas; anvitabhidhanavada; akhyati theory of error', 'mimamsa',
      { era: 'fl. c. 6th–7th c. CE',
        place: 'Kerala tradition makes him a Malabar (Chera) scholar; exact place unknown — pin approximate',
        idea: 'Words convey meaning only as connected in a sentence enjoining action (anvitabhidhana); every cognition reveals knower, known and knowing together (triputi-pratyaksha); error is mere non-discrimination, not wrong cognition (akhyati).',
        more: 'Prabhakara, called "Guru", founded the second school of Mimamsa (Prabhakara or Guru-mata), traditionally a pupil or rival of Kumarila. He accepts five pramanas, rejecting anupalabdhi as a separate means. His school stresses duty for duty\'s sake (karya, niyoga), a point compared with Kant in ethics papers. Shalikanatha (8th c.) is his main commentator.',
        books: [
          { t: 'Brihati', y: '7th c.', lang: 'Sanskrit', sum: 'The "great" commentary on Shabara\'s Bhashya on the Mimamsa Sutra, setting out the Prabhakara positions on meaning, the injunction (vidhi/niyoga) as the core of Vedic sentences, and epistemology.', key: 'Anvitabhidhanavada; niyoga/karya; triputi-pratyaksha' },
          { t: 'Laghvi', y: '7th c.', lang: 'Sanskrit', sum: 'A shorter commentary on Shabara\'s Bhashya attributed to him; less widely studied.', key: 'Guru-mata' }
        ] } ],
    ['Mandana Mishra', 25.8540, 86.4650, 'Mahishi, Saharsa, Bihar (local tradition: Mandan Bharti Dham)', 'Mimamsaka turned Advaitin; Brahmasiddhi; famed debate with Shankara judged by Ubhaya Bharati', 'advaita',
      { era: 'c. 8th c. CE (some put him in the 9th c.)',
        place: 'Mithila tradition places his home at Mahishi, Saharsa; other traditions name Mahishmati (Madhya Pradesh)',
        idea: 'Brahman is the sole reality; avidya resides in the individual jivas, and liberation is attained by knowledge combined with action (jnana-karma-samuccaya).',
        more: 'Mandana was a leading Mimamsaka and Advaitin. Legend (Shankara-digvijaya) says he lost a debate to Shankara with his wife Ubhaya Bharati as judge, and became the monk Sureshvara — scholars now doubt the identity of Mandana and Sureshvara. His Brahmasiddhi shaped the Bhamati school of Advaita through Vachaspati Mishra. Also wrote on grammar (sphota) and error.',
        books: [
          { t: 'Brahmasiddhi', y: '8th c.', lang: 'Sanskrit', sum: 'Independent Advaita treatise in four chapters (Brahma, Tarka, Niyoga, Siddhi): establishes Brahman as pure consciousness and bliss, argues that difference is not perceived, places avidya in the jiva, and defends a combination of ritual and knowledge.', key: 'Avidya in jiva; jnana-karma-samuccaya; bheda refuted' },
          { t: 'Vidhiviveka', y: '8th c.', lang: 'Sanskrit', sum: 'Mimamsa work analysing the nature of Vedic injunction (vidhi) and why commands motivate action.', key: 'Vidhi; injunction' },
          { t: 'Sphotasiddhi', y: '8th c.', lang: 'Sanskrit', sum: 'Defends Bhartrihari\'s sphota theory that meaning is conveyed by an indivisible word-whole, against the Mimamsa view of letters.', key: 'Sphota' }
        ] } ],
    ['Badarayana', 30.7444, 79.4938, 'Badrinath, Uttarakhand (traditional; Vyasa Gufa at Mana nearby)', 'Brahma Sutra: systematises the Upanishads; basis of all Vedanta schools', 'advaita',
      { era: 'c. 500–200 BCE (scholars: final form c. 2nd c. BCE – 2nd c. CE)',
        place: 'Name taken to mean "of Badari" (Badrinath); tradition identifies him with Vyasa — pin traditional',
        idea: 'Brahman, known through the Upanishads, is the cause of the origin, sustenance and dissolution of the world ("janmadyasya yatah"); knowledge of Brahman brings liberation.',
        more: 'The Brahma Sutra (Vedanta Sutra/Uttara Mimamsa Sutra) is one of the three bases of Vedanta (prasthana-trayi: Upanishads, Bhagavad Gita, Brahma Sutra). Its terse 555 sutras allow very different readings, hence the commentaries of Shankara (Advaita), Ramanuja (Vishishtadvaita), Madhva (Dvaita), Nimbarka, Vallabha and Baladeva. It refutes Samkhya, Vaisheshika, Buddhist, Jain, Pashupata and Pancharatra views. Tradition equates Badarayana with Vyasa.',
        books: [
          { t: 'Brahma Sutra (Vedanta Sutra)', y: 'c. 2nd c. BCE (date debated)', lang: 'Sanskrit', sum: 'Four chapters: Samanvaya (harmony of Upanishadic texts on Brahman), Avirodha (refutation of rival systems), Sadhana (means of knowledge) and Phala (fruit — liberation). Opens "athato brahma-jijnasa".', key: 'Athato brahma-jijnasa; janmadyasya yatah; prasthana-trayi' }
        ] } ],
    ['Gaudapada', 15.4010, 74.0080, 'Kavale, Ponda, Goa (Shri Gaudapadacharya Math — later tradition)', 'Mandukya Karika; ajativada (no creation); earliest Advaita teacher, grand-guru of Shankara', 'advaita',
      { era: 'c. 6th c. CE',
        place: 'Nothing certain about his home; the name may point to Gauda (Bengal). Pin at the math named after him at Kavale, Goa',
        idea: 'Ajativada: nothing is ever really born or created; the world of plurality is like a dream or the circles of a whirling firebrand, and only non-dual consciousness (turiya) is real.',
        more: 'Gaudapada is the earliest known systematic Advaitin; tradition calls him the teacher of Govinda Bhagavatpada, Shankara\'s guru. His Karika on the Mandukya Upanishad shows clear borrowing of Madhyamaka and Yogachara vocabulary (alatashanti), a key point in debates on Buddhist influence on Advaita.',
        books: [
          { t: 'Mandukya Karika (Gaudapadiya Karika / Agama Shastra)', y: 'c. 6th c.', lang: 'Sanskrit', sum: 'Four chapters (Agama, Vaitathya, Advaita, Alatashanti): explains Om and the four states (waking, dream, deep sleep, turiya), argues that waking experience is as unreal as dream, and establishes non-origination of anything.', key: 'Ajativada; turiya; alatachakra (firebrand); asparsha-yoga' }
        ] } ],
    ['Adi Shankaracharya', 10.1667, 76.4417, 'Kalady, Ernakulam, Kerala (birthplace)', 'Kevala Advaita: Brahma satyam jagan mithya; maya; vivartavada; four mathas', 'advaita',
      { era: '788–820 CE (traditional); many scholars c. 700–750 CE',
        place: 'Born at Kalady on the Periyar; travelled all over India and founded mathas at Sringeri, Dwarka, Puri and Jyotirmath (Badrinath)',
        idea: 'Brahman alone is real, the world is an appearance (mithya), and the individual self is not other than Brahman ("brahma satyam jagan mithya jivo brahmaiva naparah"); ignorance (avidya/maya) superimposes the world on Brahman, and only knowledge (jnana) liberates.',
        more: 'Shankara wrote bhashyas on the prasthana-trayi and organised the Dashanami monastic order. Causation: vivartavada (the world is an apparent, not real, transformation of Brahman — rope-snake analogy). Three levels of reality: paramarthika, vyavaharika, pratibhasika. Theory of error: anirvachaniya-khyati. Saguna Brahman/Ishvara is Brahman seen through maya. Critics called him a "crypto-Buddhist" (prachchhanna bauddha). Key for GS1 culture and GS4 ethics.',
        books: [
          { t: 'Brahmasutra Bhashya', y: 'c. 8th c.', lang: 'Sanskrit', sum: 'Commentary on the Brahma Sutra and the masterpiece of Advaita. Opens with adhyasa (superimposition) as the root of bondage, interprets the sutras as teaching nirguna Brahman, and refutes Samkhya, Nyaya-Vaisheshika, Buddhist and Jain views.', key: 'Adhyasa; nirguna Brahman; maya; vivartavada' },
          { t: 'Upanishad and Bhagavad Gita Bhashyas', y: 'c. 8th c.', lang: 'Sanskrit', sum: 'Commentaries on about ten principal Upanishads and the Gita, reading them as teaching identity of Atman and Brahman (tat tvam asi, aham brahmasmi) and the primacy of knowledge over ritual action.', key: 'Mahavakyas; jnana-marga; Atman = Brahman' },
          { t: 'Upadeshasahasri', y: 'c. 8th c.', lang: 'Sanskrit', sum: 'His most certainly authentic independent work: a prose and verse manual on teaching Advaita to students, discussing the self as pure witness consciousness.', key: 'Sakshi (witness); teaching method' },
          { t: 'Vivekachudamani (attributed)', y: 'traditionally 8th c.', lang: 'Sanskrit', sum: 'Popular verse primer on discrimination between the real and unreal and the four qualifications of the aspirant (sadhana-chatushtaya); modern scholars doubt Shankara\'s authorship.', key: 'Viveka, vairagya, shatsampatti, mumukshutva' }
        ] } ],
    ['Vachaspati Mishra', 26.3830, 86.3330, 'Andhra Tharhi, Madhubani, Bihar (Mithila)', 'Polymath who commented on almost every darshana; Bhamati school of Advaita', 'advaita',
      { era: '9th–10th c. CE (Nyayasuchinibandha dated 898 vatsara = 840 CE or 976 CE)',
        place: 'Born at Andhra Tharhi, Madhubani district, in Mithila',
        idea: 'In Advaita (Bhamati school), ignorance has the individual jiva as its locus and Brahman as its object; there are many avidyas, one per jiva; meditation and Vedic study prepare for knowledge.',
        more: 'Vachaspati was called "sarva-tantra-svatantra" (master of all systems) for authoritative commentaries on Nyaya, Samkhya, Yoga, Mimamsa and Advaita. His Bhamati, named, by tradition, after his devoted wife, founded one of the two sub-schools of post-Shankara Advaita (the other is Vivarana of Padmapada–Prakashatman). The disputed date comes from whether the era of his colophon is Shaka or Vikrama.',
        books: [
          { t: 'Bhamati', y: '9th–10th c.', lang: 'Sanskrit', sum: 'Sub-commentary on Shankara\'s Brahmasutra Bhashya that incorporates Mandana Mishra\'s views; founds the Bhamati school, holding avidya to be located in the jiva.', key: 'Bhamati prasthana; jiva as locus of avidya; anekajivavada' },
          { t: 'Tattvakaumudi', y: '9th–10th c.', lang: 'Sanskrit', sum: 'The standard commentary on Ishvarakrishna\'s Samkhya Karika, still used to teach classical Samkhya.', key: 'Samkhya Karika commentary' },
          { t: 'Tattvavaisharadi', y: '9th–10th c.', lang: 'Sanskrit', sum: 'Sub-commentary on Vyasa\'s Yoga Bhashya on the Yoga Sutra.', key: 'Yoga commentary' },
          { t: 'Nyayavarttikatatparyatika', y: '9th–10th c.', lang: 'Sanskrit', sum: 'Sub-commentary on Uddyotakara\'s Nyayavarttika, defending Nyaya against Buddhist logicians such as Dharmakirti.', key: 'Nyaya vs Buddhist logic' }
        ] } ],
    ['Vidyaranya', 13.4198, 75.2527, 'Sringeri Sharada Peetham, Karnataka (also Hampi)', 'Advaita jivanmukti; Panchadashi; guide of Harihara & Bukka (Vijayanagara)', 'advaita',
      { era: 'c. 1296–1386 CE',
        place: 'Pontiff of Sringeri math (from c. 1375); traditionally patron-guru of the founders of Vijayanagara',
        idea: 'Advaita as lived experience: the self is pure consciousness-bliss; liberation can be attained while living (jivanmukti) through knowledge, the dissolution of mental tendencies (vasana-kshaya) and stilling of mind (manonasha).',
        more: 'Vidyaranya (often identified with Madhava, brother of Sayana the Vedic commentator) is credited by tradition with inspiring Harihara I and Bukka to found the Vijayanagara empire (1336). The doxography Sarvadarshana-sangraha by "Madhava" (identity with Vidyaranya debated) surveys 16 systems from Charvaka to Advaita and is a main source for Charvaka doctrines.',
        books: [
          { t: 'Panchadashi', y: '14th c.', lang: 'Sanskrit', sum: 'Fifteen chapters in three sets of five (viveka, dipa, ananda) explaining Advaita: discrimination of self from the five sheaths, the self as witness light, and Brahman as bliss. A popular textbook of Advaita.', key: 'Panchakosha; sakshi; sat-chit-ananda' },
          { t: 'Jivanmuktiviveka', y: '14th c.', lang: 'Sanskrit', sum: 'Treatise on liberation in life, describing the characteristics of the jivanmukta and the practices of sannyasa.', key: 'Jivanmukti; vasanakshaya; manonasha' },
          { t: 'Sarvadarshana-sangraha (by Madhava; identity debated)', y: '14th c.', lang: 'Sanskrit', sum: 'Survey of 16 Indian systems ranked from Charvaka upwards to Advaita, quoting opponents in their own words; key source for lost Charvaka, Buddhist and Shaiva texts.', key: 'Doxography; 16 darshanas; Charvaka chapter' }
        ] } ],
    ['Madhusudana Saraswati', 25.3376, 82.9939, 'Varanasi (born Kotalipara, Faridpur, Bengal — now Bangladesh)', 'Advaitasiddhi defending Advaita against Dvaita; reconciled Advaita with Krishna bhakti', 'advaita',
      { era: 'c. 1540–1640 CE',
        place: 'Bengali by birth (Kotalipara); lived and wrote at Varanasi (pin offset)',
        idea: 'The world is indeterminable (anirvachaniya) — neither real nor unreal — and so is falsity itself; devotion to Krishna is compatible with, and a means to, non-dual knowledge.',
        more: 'Trained in Navya-Nyaya at Navadvipa, Madhusudana used its technical language to answer Vyasatirtha\'s Dvaita attack (Nyayamrita), producing the Advaitasiddhi — climax of the Advaita–Dvaita debate. Tradition credits him with organising armed Dashanami ascetics (Naga sadhus) against attacks, and links him to Tulsidas and the Mughal court. His Gudharthadipika on the Gita blends jnana and bhakti.',
        books: [
          { t: 'Advaitasiddhi', y: 'late 16th c.', lang: 'Sanskrit', sum: 'Point-by-point Navya-Nyaya style refutation of Vyasatirtha\'s Nyayamrita, defending the falsity (mithyatva) of the world with five definitions of falsity.', key: 'Mithyatva; anirvachaniya; reply to Nyayamrita' },
          { t: 'Bhaktirasayana', y: 'late 16th c.', lang: 'Sanskrit', sum: 'Treatise presenting bhakti as the highest rasa and analysing its stages, a rare Advaitin defence of devotion.', key: 'Bhakti as rasa' },
          { t: 'Gudharthadipika', y: 'late 16th c.', lang: 'Sanskrit', sum: 'Commentary on the Bhagavad Gita reading it as teaching karma, bhakti and jnana in three sets of six chapters.', key: 'Gita: karma-bhakti-jnana' }
        ] } ],
    ['Ramanuja', 10.8627, 78.6897, 'Srirangam, Tamil Nadu (born Sriperumbudur)', 'Vishishtadvaita: qualified non-dualism; world & souls as Brahman\'s body; prapatti', 'vaishnava',
      { era: '1017–1137 CE (traditional)',
        place: 'Born at Sriperumbudur; led the Sri Vaishnava community at Srirangam temple; spent years at Melkote (Karnataka) under Hoysala patronage',
        idea: 'Brahman (Vishnu-Narayana) is one, but qualified by real souls (chit) and matter (achit), which are his body (sharira-shariri bhava); the world is a real transformation of Brahman, and liberation is eternal loving service of God through bhakti and surrender (prapatti).',
        more: 'Ramanuja systematised the Sri Vaishnava tradition of Nathamuni and Yamunacharya and the Tamil Alvar hymns. He attacked Shankara\'s maya with seven objections (saptavidha anupapatti). Causation: satkaryavada as Brahma-parinamavada. Theory of error: satkhyati. Later split into Vadakalai (Vedanta Desika) and Tenkalai (Pillai Lokacharya). Opened temple worship to lower castes in tradition; the "Statue of Equality" (Hyderabad, 2022) honours him.',
        books: [
          { t: 'Sri Bhashya', y: '12th c.', lang: 'Sanskrit', sum: 'Commentary on the Brahma Sutra that refutes Advaita (especially the maya and nirguna Brahman doctrines) and establishes Brahman as possessed of infinite auspicious qualities, with souls and matter as his inseparable modes.', key: 'Vishishtadvaita; apṛthak-siddhi; saptavidha anupapatti' },
          { t: 'Vedarthasangraha', y: '12th c.', lang: 'Sanskrit', sum: 'Independent essay summarising the meaning of the Upanishads, reconciling texts on identity and difference through the body-soul relation.', key: 'Sharira-shariri bhava; ghataka-shruti' },
          { t: 'Gita Bhashya', y: '12th c.', lang: 'Sanskrit', sum: 'Commentary on the Bhagavad Gita stressing bhakti and surrender to Narayana as the goal of karma and jnana.', key: 'Bhakti; prapatti (sharanagati)' },
          { t: 'Gadya Traya', y: '12th c.', lang: 'Sanskrit', sum: 'Three prose hymns (Sharanagati, Sriranga, Vaikuntha Gadya) expressing total surrender to God; liturgical in Sri Vaishnavism.', key: 'Sharanagati' }
        ] } ],
    ['Vedanta Desika', 12.8542, 79.7236, 'Thoopul, Kanchipuram, Tamil Nadu', 'Vadakalai Sri Vaishnava teacher; Rahasyatrayasara; Shatadushani against Advaita', 'vaishnava',
      { era: '1268–1369 CE',
        place: 'Born at Thoopul, Kanchipuram (pin offset from Kanchipuram town)',
        idea: 'Vishishtadvaita with the "monkey" model of grace (markata-nyaya): the soul must actively surrender with effort, as a baby monkey clings to its mother — basis of the Vadakalai sect.',
        more: 'Venkatanatha, titled Vedanta Desika and Kavitarkika-simha, was a poet-philosopher who wrote over 100 works in Sanskrit, Tamil and Manipravalam. His positions defined the Vadakalai branch, in contrast to Tenkalai (Pillai Lokacharya, "cat" model, marjara-nyaya, grace alone). He lived through the Delhi Sultanate raid on Srirangam (1323).',
        books: [
          { t: 'Rahasyatrayasara', y: '14th c.', lang: 'Manipravalam', sum: 'Exposition of the three secret mantras of Sri Vaishnavism (Tirumantra, Dvaya, Charama shloka) and the doctrine of surrender (prapatti).', key: 'Rahasya-traya; prapatti; Vadakalai' },
          { t: 'Shatadushani', y: '14th c.', lang: 'Sanskrit', sum: 'Polemical work listing (originally a hundred) faults of Advaita Vedanta.', key: 'Critique of Advaita' },
          { t: 'Paduka Sahasram', y: '14th c.', lang: 'Sanskrit', sum: 'Thousand verses on the sandals of Lord Ranganatha, a celebrated devotional poem.', key: 'Devotional kavya' }
        ] } ],
    ['Madhvacharya', 13.3409, 74.7461, 'Udupi, Karnataka (Sri Krishna Matha; born Pajaka nearby)', 'Dvaita: five eternal differences (pancha-bheda); Hari sarvottama; founded Udupi Krishna temple', 'vaishnava',
      { era: '1238–1317 CE (an older dating: 1199–1278)',
        place: 'Born at Pajaka near Udupi; installed the Krishna idol at Udupi and founded the eight (Ashta) mathas',
        idea: 'Reality is fundamentally plural: there are five real, eternal differences — God–soul, God–matter, soul–soul, soul–matter, matter–matter; Vishnu is supreme and independent (svatantra), all else dependent (paratantra); souls are graded (taratamya).',
        more: 'Madhva (Purnaprajna, Anandatirtha) founded Dvaita (Tattvavada), the strongest critique of Advaita. He accepts three pramanas (pratyaksha, anumana, shabda) and a real world. Uniquely in Hindu thought, he held that some souls are eternally damned (tamo-yogya). Successors: Jayatirtha (Nyayasudha), Vyasatirtha. Haridasa saints (Purandara Dasa, Kanaka Dasa) spread his bhakti in Kannada.',
        books: [
          { t: 'Brahma Sutra Bhashya and Anuvyakhyana', y: '13th c.', lang: 'Sanskrit', sum: 'Commentary and verse supplement on the Brahma Sutra interpreting it as teaching the supremacy of Vishnu and the reality of difference; the Anuvyakhyana is his most important philosophical work.', key: 'Pancha-bheda; svatantra-paratantra; Tattvavada' },
          { t: 'Mahabharata Tatparya Nirnaya', y: '13th c.', lang: 'Sanskrit', sum: 'Verse work giving the "true meaning" of the Mahabharata and Ramayana from a Dvaita, Vishnu-centred viewpoint.', key: 'Epic hermeneutics' },
          { t: 'Vishnu Tattva Vinirnaya', y: '13th c.', lang: 'Sanskrit', sum: 'Establishes Vishnu as the sole independent reality and the Vedas as speaking of him; refutes Advaita identity texts.', key: 'Hari sarvottama; Vayu jivottama' },
          { t: 'Gita Bhashya', y: '13th c.', lang: 'Sanskrit', sum: 'Commentary on the Gita from the Dvaita viewpoint.', key: 'Bhakti; difference' }
        ] } ],
    ['Vyasatirtha', 15.3350, 76.4600, 'Hampi (Vijayanagara), Karnataka', 'Dvaita logician; Nyayamrita attacks Advaita; rajaguru of Krishnadevaraya', 'vaishnava',
      { era: '1460–1539 CE',
        place: 'Lived at the Vijayanagara court, Hampi; his brindavana is at Nava Brindavana near Anegundi',
        idea: 'Using Navya-Nyaya precision, the world is shown to be real; Advaita\'s definitions of "falsity" (mithyatva) all fail, so difference and the world are true.',
        more: 'Vyasatirtha was the greatest Dvaita dialectician after Madhva and Jayatirtha, and rajaguru to Saluva Narasimha and Krishnadevaraya. He patronised the Haridasa movement (Purandara Dasa, Kanaka Dasa). His Nyayamrita provoked Madhusudana Saraswati\'s Advaitasiddhi, beginning a long debate literature.',
        books: [
          { t: 'Nyayamrita', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Systematic refutation of Advaita, examining and rejecting each definition of the falsity of the world.', key: 'Mithyatva refuted; reality of bheda' },
          { t: 'Tarkatandava', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Critique of Nyaya-Vaisheshika (Gangesha\'s Navya-Nyaya) from the Dvaita standpoint.', key: 'Critique of Navya-Nyaya' },
          { t: 'Tatparya Chandrika', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Commentary on Jayatirtha\'s work on the Brahma Sutra, comparing and criticising other Vedanta schools.', key: 'Comparative Vedanta' }
        ] } ],
    ['Nimbarka', 27.4964, 77.4635, 'Govardhan, Mathura (Nimbagram tradition), Braj', 'Dvaitadvaita (bhedabheda): soul and world both different and non-different from Brahman; Radha-Krishna', 'vaishnava',
      { era: 'Traditional: c. 7th c.; many scholars: 12th–13th c. CE',
        place: 'Associated with Braj (Govardhan/Vrindavan); main seat now Nimbarka Peeth, Salemabad (Rajasthan)',
        idea: 'Svabhavika bhedabheda: souls and matter are naturally both distinct from and non-distinct from Brahman (Krishna), as waves to the ocean or rays to the sun; liberation is through surrender and devotion to Radha-Krishna.',
        more: 'Nimbarka founded the Nimbarka (Sanakadi/Hamsa) sampradaya, one of the four classical Vaishnava sampradayas, and was among the first to give worship of Radha with Krishna a Vedantic basis. Brahman is both cause and effect. Dating is uncertain, so UPSC usually mentions him only by doctrine.',
        books: [
          { t: 'Vedanta Parijata Saurabha', y: 'date uncertain', lang: 'Sanskrit', sum: 'Brief commentary on the Brahma Sutra explaining dvaitadvaita — real difference together with non-difference between Brahman and its powers.', key: 'Dvaitadvaita; svabhavika bhedabheda' },
          { t: 'Dashashloki (Vedanta Kamadhenu)', y: 'date uncertain', lang: 'Sanskrit', sum: 'Ten verses summarising the nature of soul, world, God (Krishna with Radha), means and goal.', key: 'Radha-Krishna; prapatti' }
        ] } ],
    ['Vallabhacharya', 21.0319, 81.9232, 'Champaran (Champaranya), Raipur district, Chhattisgarh (birthplace)', 'Shuddhadvaita (pure non-dualism) and Pushtimarga — the path of grace; Shrinathji worship', 'vaishnava',
      { era: '1479–1531 CE',
        place: 'Born at Champaranya (Chhattisgarh); lived at Adel near Prayag and in Braj (Gokul, Govardhan); Pushtimarga centre later at Nathdwara',
        idea: 'Shuddhadvaita: Brahman (Krishna) is pure, untouched by maya, and the world is his real manifestation, not illusion (avikrita-parinamavada); liberation is through God\'s grace (pushti) and loving service (seva).',
        more: 'Vallabha (Vallabha Mahaprabhu) won debates at the Vijayanagara court (tradition says under Krishnadevaraya) and founded the Pushti sampradaya. Surdas was among his Ashtachhap disciples (A2 covers Surdas). His son Vitthalnath organised the sect. Uniquely he rejected asceticism, upheld household devotion and rejected maya.',
        books: [
          { t: 'Anubhashya', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Commentary on the Brahma Sutra (completed by his son Vitthalnath) establishing pure non-dualism without maya.', key: 'Shuddhadvaita; avikrita-parinamavada' },
          { t: 'Subodhini', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Commentary on parts of the Bhagavata Purana, especially Krishna\'s childhood lilas, the central scripture of Pushtimarga.', key: 'Bhagavata; Krishna-lila' },
          { t: 'Shodasha Granthas', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Sixteen short works giving Pushtimarga doctrine and practice — grace, seva, surrender.', key: 'Pushti (grace); seva; Brahmasambandha' },
          { t: 'Tattvartha Dipa Nibandha', y: 'early 16th c.', lang: 'Sanskrit', sum: 'Independent work in three parts on the Gita, philosophy of all schools and the Bhagavata from the Shuddhadvaita view.', key: 'Shuddhadvaita system' }
        ] } ],
    ['Jiva Goswami', 27.5810, 77.6950, 'Vrindavan (Radha-Damodar temple), Uttar Pradesh', 'Theologian of Chaitanya\'s Achintya-bhedabheda: inconceivable difference-in-identity', 'vaishnava',
      { era: '1513–1598 CE',
        place: 'Born in Bengal (Ramakeli, near Gaur); lived in Vrindavan and founded the Radha-Damodar temple',
        idea: 'Achintya-bhedabheda: the soul and world are simultaneously, inconceivably one with and different from Krishna, as energies (shakti) of the energetic; pure love (prema-bhakti) for Krishna is the highest goal.',
        more: 'Nephew of Rupa and Sanatana Goswami, Jiva was the chief philosopher of Gaudiya Vaishnavism founded by Chaitanya (A2 covers Chaitanya and Rupa). His Sat-Sandarbha gives the school a systematic theology based on the Bhagavata Purana as the highest pramana. Baladeva Vidyabhushana (18th c.) later wrote the Gaudiya commentary on the Brahma Sutra (Govinda Bhashya).',
        books: [
          { t: 'Sat-Sandarbha (Six Sandarbhas)', y: 'late 16th c.', lang: 'Sanskrit', sum: 'Six treatises (Tattva, Bhagavat, Paramatma, Krishna, Bhakti, Priti Sandarbha) establishing the Bhagavata Purana as supreme authority, Krishna as the highest form of God, bhakti as the means and prema (priti) as the goal.', key: 'Achintya-bhedabheda; shakti-shaktiman; Bhagavata as pramana; prema' },
          { t: 'Gopala Champu', y: 'late 16th c.', lang: 'Sanskrit', sum: 'Long mixed prose-verse (champu) poem narrating Krishna\'s pastimes in Vraja.', key: 'Champu kavya; Krishna-lila' },
          { t: 'Harinamamrita Vyakarana', y: '16th c.', lang: 'Sanskrit', sum: 'A Sanskrit grammar in which all technical terms are names of Krishna, used to teach grammar devotionally.', key: 'Devotional grammar' }
        ] } ],
    ['Vasugupta', 34.1594, 74.8962, 'Harwan, near Srinagar, Kashmir (traditional Mahadeva hill / Shankaropala rock)', 'Revealer of the Shiva Sutras — foundation of Kashmir Shaivism (Trika)', 'shaiva',
      { era: 'c. 800–850 CE',
        place: 'Kashmir; later tradition says the sutras were found inscribed on a rock (Shankaropala) at Mahadeva mountain near Harwan — pin traditional',
        idea: 'Consciousness (chaitanya) is the self; Shiva alone is real, and the world is his free self-expression; bondage is limited knowledge, and liberation is recognition of one\'s identity with Shiva.',
        more: 'Vasugupta founded the Spanda (vibration) school and the textual basis of non-dual Kashmir Shaivism (Trika). The Spanda Karika is attributed either to him or to his disciple Bhatta Kallata. Unlike Advaita Vedanta, the world here is real as Shiva\'s power (shakti), not illusion.',
        books: [
          { t: 'Shiva Sutras', y: 'c. early 9th c.', lang: 'Sanskrit', sum: '77 sutras in three sections on the three upayas (shambhava, shakta, anava) — ways of realising Shiva-consciousness; opens "chaitanyam atma" (consciousness is the self).', key: 'Chaitanyam atma; upayas; Trika' },
          { t: 'Spanda Karika (attributed; or by Bhatta Kallata)', y: '9th c.', lang: 'Sanskrit', sum: 'Verses on spanda, the creative vibration of consciousness by which Shiva manifests the universe.', key: 'Spanda; Shiva-Shakti' }
        ] } ],
    ['Utpaladeva', 34.0837, 74.7773, 'Srinagar, Kashmir', 'Systematiser of Pratyabhijna (Recognition) school; Ishvarapratyabhijna Karika', 'shaiva',
      { era: 'c. 900–950 CE',
        place: 'Kashmir (pin: Srinagar, offset); pupil of Somananda',
        idea: 'Pratyabhijna: liberation is the recognition (pratyabhijna) that one\'s own self is the Lord (Ishvara), whose nature is free, self-aware consciousness (vimarsha) — against Buddhist no-self and momentariness.',
        more: 'Somananda (Shivadrishti) founded the Recognition school; Utpaladeva gave it its philosophical form, engaging closely with Dharmakirti\'s Buddhist epistemology. Abhinavagupta wrote two great commentaries on his Karika. Also known for devotional hymns (Shivastotravali).',
        books: [
          { t: 'Ishvarapratyabhijna Karika', y: 'early 10th c.', lang: 'Sanskrit', sum: 'Verses with his own commentary in four sections (knowledge, action, scripture, conclusion) arguing that unity of memory and cognition requires a single self-aware consciousness identical with Shiva.', key: 'Pratyabhijna; prakasha-vimarsha; svatantrya' },
          { t: 'Shivastotravali', y: '10th c.', lang: 'Sanskrit', sum: 'Collection of devotional hymns to Shiva expressing non-dual bhakti.', key: 'Shaiva bhakti' }
        ] } ],
    ['Abhinavagupta', 34.1037, 74.7973, 'Srinagar, Kashmir', 'Kashmir Shaivism (Trika) culmination; Tantraloka; rasa theory (Abhinavabharati)', 'shaiva',
      { era: 'c. 950–1016 CE',
        place: 'Lived and taught in Kashmir; tradition says he entered the Bhairava cave near Beerwah with disciples',
        idea: 'Reality is Shiva as luminous consciousness (prakasha) with self-awareness (vimarsha); the universe is his free play (svatantrya), real and not illusory; liberation is recognising oneself as Shiva. In aesthetics, rasa is a universalised (sadharanikarana) relish of emotion akin to spiritual bliss.',
        more: 'Abhinavagupta synthesised Trika, Krama, Kula and Pratyabhijna traditions and was also India\'s greatest aesthetician. His commentaries on Bharata\'s Natyashastra (Abhinavabharati) and Anandavardhana\'s Dhvanyaloka (Lochana) define rasa and dhvani theory and added shanta (peace) as the ninth rasa. Important for GS1 art & culture and philosophy.',
        books: [
          { t: 'Tantraloka', y: 'c. 1000 CE', lang: 'Sanskrit', sum: 'Encyclopaedic 37-chapter work on the philosophy and ritual of Trika Shaivism: 36 tattvas, the upayas, initiation, and liberation; his summary Tantrasara condenses it.', key: '36 tattvas; upayas; prakasha-vimarsha' },
          { t: 'Ishvarapratyabhijna-vimarshini', y: 'c. 1014 CE', lang: 'Sanskrit', sum: 'Commentary on Utpaladeva\'s Recognition verses (with a longer Vivritivimarshini), the main philosophical statement of Pratyabhijna.', key: 'Pratyabhijna' },
          { t: 'Abhinavabharati', y: 'c. 1000 CE', lang: 'Sanskrit', sum: 'Commentary on the Natyashastra, giving the classic theory of rasa as universalised aesthetic experience and defending shanta rasa.', key: 'Rasa; sadharanikarana; shanta rasa' },
          { t: 'Dhvanyaloka-lochana', y: 'c. 1000 CE', lang: 'Sanskrit', sum: 'Commentary on Anandavardhana\'s Dhvanyaloka, linking suggestion (dhvani) with rasa.', key: 'Dhvani; rasa-dhvani' }
        ] } ],
    ['Meykandar', 11.8590, 79.3640, 'Tiruvennainallur, Villupuram, Tamil Nadu', 'Founder of Shaiva Siddhanta philosophy; Shivajnanabodham; pati–pashu–pasha', 'shaiva',
      { era: 'fl. 13th c. CE',
        place: 'Lived at Tiruvennainallur on the Pennai river',
        idea: 'Three eternal realities: God (pati, Shiva), souls (pashu) and bonds (pasha — the three malas: anava, karma, maya); by Shiva\'s grace (arul) the soul is freed from bonds and attains union with Shiva without losing its identity.',
        more: 'Meykandar ("seer of truth") wrote the first systematic text of Tamil Shaiva Siddhanta, a realist and pluralist Shaivism drawing on the Shaiva Agamas and the Tevaram/Tirumurai poets (covered under South India). Fourteen Meykanda Shastras form the canon; Arulnandi (Shivajnana Siddhiyar) and Umapati Shivacharya are later masters.',
        books: [
          { t: 'Shivajnanabodham', y: '13th c.', lang: 'Tamil', sum: 'Twelve sutras (with commentary) proving the existence of God, soul and bonds, their relation, and the path to liberation by grace through a guru; the founding text of Shaiva Siddhanta.', key: 'Pati-pashu-pasha; anava, karma, maya malas; arul (grace)' }
        ] } ],
    ['Bhartrihari', 23.1965, 75.8085, 'Ujjain (tradition; historical place unknown)', 'Philosopher of language: sphota; shabda-brahman; Vakyapadiya', 'vyakarana',
      { era: 'c. 5th c. CE',
        place: 'Tradition connects him with Ujjain, but the grammarian is probably different from the legendary king-poet of the Shatakas (pin offset, traditional)',
        idea: 'Shabda-advaita: the ultimate reality is the eternal Word (shabda-brahman); meaning is grasped through sphota, an indivisible meaning-bearing unit revealed by sounds, and the sentence (vakya), not the word, is the primary unit of meaning.',
        more: 'Bhartrihari is the founder of the grammarian (Vaiyakarana) school treated as a darshana (Paniniya darshana) in the Sarvadarshana-sangraha. His sphota theory was attacked by Mimamsakas (Kumarila) and defended by Mandana Mishra; it influenced Kashmir Shaivism and modern philosophy of language. Authorship of the Shringara-, Niti- and Vairagya-Shatakas by the same person is doubted.',
        books: [
          { t: 'Vakyapadiya', y: 'c. 5th c.', lang: 'Sanskrit', sum: 'Three books (Brahma-kanda, Vakya-kanda, Pada-kanda) on the metaphysics of language, the sentence as the unit of meaning, and grammatical categories; opens identifying Brahman with the eternal Word.', key: 'Sphota; shabda-brahman; vakya; pratibha (intuitive flash)' },
          { t: 'Mahabhashya-dipika', y: 'c. 5th c.', lang: 'Sanskrit', sum: 'Commentary on Patanjali\'s Mahabhashya, surviving only in part.', key: 'Vyakarana commentary' }, {"t":"Shatakatraya (Niti, Shringara, Vairagya Shataka)","y":"c. 5th c. CE (attributed)","lang":"Sanskrit","sum":"Three ‘centuries’ of verses on worldly wisdom and conduct (niti), love (shringara) and renunciation (vairagya). The Niti Shataka’s verses on the wise, the fool and the good are widely quoted in ethics and moral education.","key":"Niti, shringara, vairagya; gnomic verse"} ] } ]
  ]
});

GEO.add({
  id: 'bk-nastika', group: 'bk-dar', title: 'Nāstika & Heterodox Schools', bn: 'নাস্তিক দর্শন (বৌদ্ধ, জৈন, চার্বাক, আজীবিক)', icon: '☸️', world: false,
  intro: 'বেদের প্রামাণ্য অস্বীকারকারী নাস্তিক দর্শনের মানচিত্র — বৌদ্ধ (থেরবাদ, মধ্যমক, যোগাচার, বৌদ্ধ ন্যায়, বজ্রযান), জৈন, চার্বাক/লোকায়ত, আজীবিক এবং বুদ্ধের সমকালীন ছয় তীর্থিক। দার্শনিকে ক্লিক করুন → মূল মত → গ্রন্থ → সারাংশ ও মূল পরিভাষা।',
  types: {
    early: ['Early Buddhism & Theravada', '#f9a825'],
    madhyamaka: ['Madhyamaka (Shunyavada)', '#d84315'],
    yogachara: ['Yogachara & Buddhist logic', '#6a1b9a'],
    vajrayana: ['Late Mahayana & Vajrayana (to Tibet)', '#c62828'],
    jain: ['Jain darshana', '#2e7d32'],
    charvaka: ['Charvaka / Lokayata', '#455a64'],
    shramana: ['Ajivika & other Shramana teachers', '#0277bd']
  },
  pts: [
    ['Gautama Buddha', 24.6959, 84.9913, 'Bodh Gaya, Bihar (Mahabodhi — enlightenment)', 'Four Noble Truths; Eightfold Path; dependent origination; anatta; Middle Way', 'early',
      { era: 'c. 563–483 BCE (NCERT); many scholars c. 480–400 BCE',
        place: 'Enlightened under the Bodhi tree at Bodh Gaya; born Lumbini (Nepal), first sermon Sarnath, died Kushinagar',
        idea: 'Life is marked by suffering (dukkha), impermanence (anicca) and no-self (anatta); suffering arises from craving through dependent origination (pratityasamutpada) and ends in nirvana by the Middle Way — the Noble Eightfold Path.',
        more: 'Siddhartha Gautama of the Shakya clan (Kapilavastu) founded Buddhism, a shramana movement rejecting Vedic authority, sacrifice and caste-based purity. Teachings were orally transmitted and fixed in the Pali Tipitaka after councils at Rajagriha, Vaishali, Pataliputra (Ashoka) and in Sri Lanka (written c. 1st c. BCE). Ethics: sila-samadhi-prajna, four brahmaviharas, karma without a permanent self. Core GS1/GS4 topic.',
        books: [
          { t: 'Tipitaka (Pali Canon): Vinaya, Sutta, Abhidhamma Pitakas — compiled teachings', y: 'oral from c. 5th c. BCE; written c. 1st c. BCE, Sri Lanka', lang: 'Pali', sum: 'The "three baskets": Vinaya (monastic rules), Sutta (discourses, in five nikayas, incl. the first sermon Dhammacakkappavattana Sutta) and Abhidhamma (systematic analysis of mind and matter). Compiled by disciples, not written by the Buddha himself.', key: 'Arya satya; ashtangika marga; pratityasamutpada (12 nidanas); dhamma, sangha' },
          { t: 'Dhammapada', y: 'c. 3rd c. BCE (compiled)', lang: 'Pali', sum: '423 verses in 26 chapters from the Khuddaka Nikaya, the best known summary of Buddhist ethics: mind as forerunner of all states, hatred never ceased by hatred, self-conquest.', key: '"Hatred is never appeased by hatred"; appamada; mind first' },
          { t: 'Jataka tales — traditional', y: 'c. 3rd c. BCE onward', lang: 'Pali', sum: 'Over 500 stories of the Buddha\'s previous births illustrating virtues (paramis); depicted on the stupas of Bharhut and Sanchi and in Ajanta paintings.', key: 'Bodhisattva births; paramitas; Ajanta, Sanchi art' }
        ] } ],
    ['Moggaliputta Tissa', 25.6093, 85.1376, 'Pataliputra (Patna), Bihar — Third Buddhist Council', 'Presided over Third Council under Ashoka; Kathavatthu; dispatched missions abroad', 'early',
      { era: 'c. 327–247 BCE (traditional); fl. mid-3rd c. BCE',
        place: 'Presided over the Third Council at Pataliputra (c. 250 BCE) under Ashoka',
        idea: 'Vibhajjavada ("doctrine of analysis"): Theravada orthodoxy that refutes views such as a real person (pudgala) and the existence of past and future dharmas, purging the Sangha of heretics.',
        more: 'According to Sri Lankan chronicles (Dipavamsa, Mahavamsa), Moggaliputta Tissa purified the Sangha at Ashoka\'s request and sent missionaries to nine regions — including Mahinda to Sri Lanka and Sona and Uttara to Suvarnabhumi. He is not mentioned in Ashoka\'s edicts, so some historians doubt details. UPSC: Buddhist councils table.',
        books: [
          { t: 'Kathavatthu (Points of Controversy)', y: 'c. 250 BCE', lang: 'Pali', sum: 'Fifth book of the Abhidhamma Pitaka, ascribed to him: refutes about 200 doctrines of other early Buddhist schools (Sarvastivada, Pudgalavada, Mahasanghika etc.) in question-answer form.', key: 'Vibhajjavada; refutation of pudgala; Third Council' }
        ] } ],
    ['Nagasena', 32.4945, 74.5229, 'Sagala (Sialkot, Pakistan) — court of King Milinda', 'Milindapanha: dialogue with Indo-Greek king Menander; chariot simile of no-self', 'early',
      { era: 'fl. c. 150 BCE',
        place: 'The Milindapanha sets the dialogue at Sagala, capital of the Indo-Greek king Menander I (Milinda)',
        idea: 'The person is a mere name for a combination of parts and processes, like a chariot that is nothing apart from its pole, axle and wheels; there is rebirth without a transmigrating self, like a flame lit from another flame.',
        more: 'Nagasena is the Buddhist sage of the Milindapanha (Questions of Milinda), which records Menander\'s conversion-style dialogue with him. The text shows Greek–Indian contact in the post-Mauryan northwest and is accepted as semi-canonical in Burmese Theravada. UPSC: Menander, Indo-Greeks, Buddhist literature.',
        books: [
          { t: 'Milindapanha (Questions of King Milinda)', y: 'c. 1st c. BCE – 1st c. CE (compiled)', lang: 'Pali (orig. possibly Sanskrit/Gandhari)', sum: 'Dialogue in which Nagasena answers King Milinda\'s questions on no-self, rebirth, karma, nirvana and contradictions in the scriptures, using vivid similes such as the chariot, the flame and the seed.', key: 'Ratha (chariot) simile; anatta; punarbhava without atman; Menander' }
        ] } ],
    ['Buddhaghosa', 8.3452, 80.3963, 'Mahavihara, Anuradhapura, Sri Lanka', 'Theravada commentator; Visuddhimagga — sila, samadhi, panna', 'early',
      { era: 'fl. 5th c. CE',
        place: 'Came from India (Magadha per Culavamsa; South India per others) to the Mahavihara at Anuradhapura, where he wrote his works',
        idea: 'The path to purification has three stages — morality (sila), concentration (samadhi) and wisdom (panna) — culminating in insight into impermanence, suffering and no-self, and nirvana.',
        more: 'Buddhaghosa translated the Sinhala commentaries into Pali and so fixed the orthodox Theravada interpretation followed in Sri Lanka, Myanmar, Thailand, Laos and Cambodia. His meditation scheme lists 40 kammatthanas (meditation subjects). Dates are tied to King Mahanama of Anuradhapura (early 5th c.).',
        books: [
          { t: 'Visuddhimagga (Path of Purification)', y: 'early 5th c.', lang: 'Pali', sum: 'Systematic manual of Theravada doctrine and meditation in 23 chapters arranged under sila, samadhi and panna, including 40 meditation subjects and the stages of insight (nana).', key: 'Sila-samadhi-panna; 40 kammatthana; vipassana nanas' },
          { t: 'Atthakathas (Pali commentaries)', y: '5th c.', lang: 'Pali', sum: 'Commentaries on the Vinaya (Samantapasadika) and the Nikayas and Abhidhamma (e.g. Atthasalini), preserving early Sri Lankan exegesis and historical traditions.', key: 'Theravada orthodoxy; atthakatha' }
        ] } ],
    ['Nagarjuna', 16.5213, 79.2422, 'Nagarjunakonda / Sriparvata, Andhra Pradesh (Ikshvaku-era Buddhist centre)', 'Founder of Madhyamaka: shunyata (emptiness), two truths, middle way between eternalism and nihilism', 'madhyamaka',
      { era: 'c. 150–250 CE',
        place: 'Tradition links him to Sriparvata (Nagarjunakonda) and the Satavahana kings (Ratnavali addressed to one); pin traditional',
        idea: 'All dharmas are empty (shunya) of intrinsic nature (svabhava) because they arise dependently; dependent origination is emptiness, and emptiness itself is empty. Truth has two levels — conventional (samvriti) and ultimate (paramartha); samsara and nirvana are not different.',
        more: 'Nagarjuna is the most important Mahayana philosopher, called the "second Buddha" in Tibet and East Asia. Using the prasanga (reductio) and catushkoti (tetralemma) method, he showed that every view of intrinsic being leads to contradiction. Not to be confused with the later alchemist Nagarjuna. His school spread through Aryadeva, Buddhapalita, Bhavaviveka and Chandrakirti; Nagarjunakonda was flooded by the Nagarjuna Sagar dam.',
        books: [
          { t: 'Mulamadhyamakakarika (Fundamental Verses on the Middle Way)', y: 'c. 2nd c. CE', lang: 'Sanskrit', sum: '27 chapters (c. 450 verses) analysing causation, motion, self, time, the Buddha and nirvana to show that nothing has svabhava; establishes emptiness as the middle way and the two-truth doctrine.', key: 'Shunyata; nihsvabhava; pratityasamutpada = shunyata; catushkoti; samvriti/paramartha' },
          { t: 'Vigrahavyavartani', y: 'c. 2nd c. CE', lang: 'Sanskrit', sum: 'Answers Nyaya objections that the claim "all is empty" is self-refuting, arguing that he advances no thesis of his own and criticising the pramana theory.', key: 'No-thesis; critique of pramanas' },
          { t: 'Ratnavali (Precious Garland)', y: 'c. 2nd c. CE', lang: 'Sanskrit', sum: 'Advice to a king (likely Satavahana) on ethics, statecraft and the path to awakening, combining Madhyamaka with compassionate rule.', key: 'Buddhist kingship; ethics' }
        ] } ],
    ['Aryadeva', 16.5413, 79.2622, 'Nagarjunakonda region, Andhra Pradesh (with Nagarjuna; tradition: from Sri Lanka)', 'Nagarjuna\'s disciple; Chatuhshataka (400 verses) critique of Hindu & Buddhist realists', 'madhyamaka',
      { era: 'fl. 3rd c. CE',
        place: 'Tradition (Chandrakirti) says he came from Sri Lanka to study under Nagarjuna (pin offset from Nagarjunakonda)',
        idea: 'Applies emptiness to refute the permanence of self, time, atoms and sense-objects held by Samkhya, Vaisheshika and Abhidharma realists; all views must finally be abandoned.',
        more: 'Aryadeva was the chief disciple of Nagarjuna and the second great Madhyamaka master; he was famed as a debater. His Chatuhshataka was commented on by Chandrakirti. The Chinese Sanlun ("Three Treatise") school is based on two works of Nagarjuna and one of Aryadeva (Shata-shastra).',
        books: [
          { t: 'Chatuhshataka (Four Hundred Verses)', y: '3rd c.', lang: 'Sanskrit', sum: 'Sixteen chapters: the first eight on the bodhisattva\'s practice (abandoning belief in permanence, pleasure, purity, self) and the last eight refuting rival philosophical positions on self, time, atoms and the senses.', key: 'Madhyamaka polemic; anti-atomism; bodhisattva path' }
        ] } ],
    ['Chandrakirti', 25.1557, 85.4633, 'Nalanda Mahavihara, Bihar', 'Prasangika Madhyamaka; Prasannapada; Madhyamakavatara', 'madhyamaka',
      { era: 'c. 600–650 CE',
        place: 'Taught at Nalanda (pin offset); traditionally born in South India',
        idea: 'Prasangika: the Madhyamika should only show the absurd consequences (prasanga) of opponents\' views, not put forward independent syllogisms; even conventionally, things lack intrinsic nature.',
        more: 'Chandrakirti defended Buddhapalita against Bhavaviveka (Svatantrika), creating the Prasangika–Svatantrika divide. He criticised Dignaga\'s epistemology and Yogachara idealism. In Tibet (especially the Gelug school of Tsongkhapa) his interpretation became the highest view.',
        books: [
          { t: 'Prasannapada (Clear Words)', y: '7th c.', lang: 'Sanskrit', sum: 'Commentary on Nagarjuna\'s Mulamadhyamakakarika — the only one surviving in Sanskrit — defending the prasanga method.', key: 'Prasangika; critique of svatantra-anumana' },
          { t: 'Madhyamakavatara (Entry into the Middle Way)', y: '7th c.', lang: 'Sanskrit', sum: 'Organises Madhyamaka along the ten bodhisattva stages (bhumis) and perfections; includes a famous refutation of the self through a sevenfold analysis of a chariot and of Yogachara idealism.', key: 'Ten bhumis; sevenfold chariot analysis' }
        ] } ],
    ['Asanga', 34.0080, 71.5785, 'Purushapura (Peshawar, Pakistan) — birthplace', 'Co-founder of Yogachara (Vijnanavada): mind-only, alaya-vijnana, three natures', 'yogachara',
      { era: 'fl. 4th c. CE',
        place: 'Born at Purushapura (Peshawar) in Gandhara; taught later at Ayodhya (Saketa) per tradition',
        idea: 'External objects do not exist independently of consciousness; experience arises from seeds (bija) stored in the store-consciousness (alaya-vijnana), and liberation is the transformation of the basis (ashraya-paravritti) through yogic practice.',
        more: 'Asanga, elder half-brother of Vasubandhu, began as a Mahishasaka/Sarvastivada monk. Tradition says he received texts from the future Buddha Maitreya in Tushita heaven (the "five treatises of Maitreya", possibly by a teacher Maitreyanatha). Yogachara gives eight consciousnesses and the trisvabhava (three natures) doctrine. Later developed by Dignaga, Dharmakirti and Xuanzang (who studied it at Nalanda).',
        books: [
          { t: 'Mahayanasamgraha (Compendium of the Mahayana)', y: '4th c.', lang: 'Sanskrit (survives in Tibetan & Chinese)', sum: 'Systematic summary of Yogachara: the store-consciousness, the three natures, the path and the bodies of the Buddha.', key: 'Alaya-vijnana; trisvabhava; trikaya' },
          { t: 'Abhidharmasamuccaya', y: '4th c.', lang: 'Sanskrit', sum: 'Mahayana Abhidharma manual classifying dharmas, the aggregates and the path from a Yogachara viewpoint.', key: 'Mahayana Abhidharma' },
          { t: 'Yogacharabhumi (attributed, in part)', y: '4th c.', lang: 'Sanskrit', sum: 'Huge encyclopaedia of the stages of yogic practice; tradition attributes it to Maitreya-Asanga, scholars see multiple authors.', key: 'Seventeen bhumis; yoga practice' }
        ] } ],
    ['Vasubandhu', 34.0280, 71.5985, 'Purushapura (Peshawar, Pakistan); taught at Ayodhya', 'Abhidharmakosha (Sarvastivada) then Yogachara: vijnaptimatrata (consciousness-only)', 'yogachara',
      { era: 'fl. 4th–5th c. CE',
        place: 'Born at Purushapura (pin offset); tradition says he taught at Ayodhya under a Gupta king (Vikramaditya / Baladitya)',
        idea: 'Vijnaptimatrata: what we take to be external objects are only representations in consciousness, as in dreams; the eight consciousnesses with alaya-vijnana explain continuity and karma without a self.',
        more: 'Vasubandhu first systematised Vaibhashika (Sarvastivada) Abhidharma with Sautrantika critiques in the Abhidharmakosha, the standard Abhidharma text in Tibet and East Asia. Converted to Mahayana by his brother Asanga, he wrote the classic Yogachara proofs of mind-only. Dignaga was his pupil in tradition. UPSC: Yogachara vs Madhyamaka, Gupta-era Buddhism.',
        books: [
          { t: 'Abhidharmakosha (with Bhashya)', y: '4th–5th c.', lang: 'Sanskrit', sum: 'About 600 verses in eight (plus one) chapters on dharmas, cosmology, karma, latent tendencies, the path and meditation, with an auto-commentary that often criticises the Vaibhashika view from a Sautrantika angle; ninth chapter refutes the pudgala (person) doctrine.', key: 'Abhidharma; 75 dharmas; karma; anti-pudgalavada' },
          { t: 'Vimshatika (Twenty Verses)', y: '4th–5th c.', lang: 'Sanskrit', sum: 'Answers objections to idealism (spatial/temporal determination, shared experience, causal efficacy) by the dream and hell-guardian analogies and refutes atomism.', key: 'Vijnaptimatra; dream argument; anti-atomism' },
          { t: 'Trimshika (Thirty Verses)', y: '4th–5th c.', lang: 'Sanskrit', sum: 'Compact statement of the eight consciousnesses, the transformation of consciousness and the three natures; basis of Xuanzang\'s Cheng Weishi Lun.', key: 'Alaya-vijnana; manas; trisvabhava' },
          { t: 'Trisvabhavanirdesha', y: '4th–5th c.', lang: 'Sanskrit', sum: 'Short verse text on the three natures: imagined (parikalpita), dependent (paratantra) and perfected (parinishpanna).', key: 'Parikalpita, paratantra, parinishpanna' }
        ] } ],
    ['Dignaga', 12.8342, 79.7036, 'Kanchipuram, Tamil Nadu (birthplace near Kanchi: Simhavakta)', 'Founder of Buddhist logic (pramanavada): 2 pramanas, svalakshana/samanyalakshana, apoha, trairupya', 'yogachara',
      { era: 'c. 480–540 CE',
        place: 'Born near Kanchipuram; later worked in eastern India (Nalanda per Tibetan tradition)',
        idea: 'There are only two means of knowledge, matching two kinds of objects: perception grasps the unique particular (svalakshana), free of concepts; inference grasps universals (samanyalakshana), which are mental constructs explained by exclusion (apoha).',
        more: 'Dignaga revolutionised Indian epistemology and logic; a valid reason must satisfy three conditions (trairupya) and his "wheel of reasons" (hetuchakra) classifies sound and unsound reasons. He shifted Indian logic to formal inference (svartha vs parartha anumana). Opponents Uddyotakara and Kumarila wrote against him. Dharmakirti developed his system.',
        books: [
          { t: 'Pramanasamuccaya (Compendium of Valid Cognition)', y: 'early 6th c.', lang: 'Sanskrit (survives mainly in Tibetan)', sum: 'Six chapters on perception, inference for oneself, inference for others, example, exclusion (apoha) and futile rejoinders; establishes two pramanas and criticises Nyaya, Vaisheshika, Samkhya and Mimamsa.', key: 'Pratyaksha & anumana only; svalakshana; apoha; trairupya' },
          { t: 'Nyayamukha', y: '6th c.', lang: 'Sanskrit (Chinese)', sum: 'Introductory manual of logic and debate; foundation of logic studies in Chinese Buddhism.', key: 'Hetuvidya' },
          { t: 'Alambanapariksha (Examination of the Object)', y: '6th c.', lang: 'Sanskrit (Tibetan, Chinese)', sum: 'Short Yogachara text arguing that the object of awareness cannot be external atoms, singly or aggregated, but an internal form of consciousness.', key: 'Object of cognition; anti-atomism' }
        ] } ],
    ['Dharmakirti', 25.1357, 85.4433, 'Nalanda Mahavihara, Bihar', 'Buddhist epistemologist: Pramanavarttika; momentariness; 3 types of valid reason', 'yogachara',
      { era: 'c. 600–660 CE',
        place: 'Studied and taught at Nalanda; born in South India per Tibetan tradition',
        idea: 'Only what has causal efficiency (arthakriya) is real, and whatever is real is momentary (kshanika); valid reasons are of three kinds — own nature (svabhava), effect (karya) and non-perception (anupalabdhi).',
        more: 'Dharmakirti perfected Dignaga\'s logic and became the main Buddhist target of Kumarila, Udayana and Jain logicians; he also argued against Vedic authority, caste pride and ritual. He and Dignaga form the "Pramana school" (Sautrantika-Yogachara). Hugely influential in Tibet, where his texts are core monastic curriculum.',
        books: [
          { t: 'Pramanavarttika', y: '7th c.', lang: 'Sanskrit', sum: 'Large verse commentary on Dignaga\'s Pramanasamuccaya in four chapters (inference for oneself, establishment of valid cognition — proving the Buddha\'s authority and rebirth, perception, inference for others).', key: 'Arthakriya; kshanikavada; svabhava, karya, anupalabdhi hetu; apoha' },
          { t: 'Nyayabindu', y: '7th c.', lang: 'Sanskrit', sum: 'Short, much-studied handbook on perception, inference and fallacies; commented on by Dharmottara.', key: 'Primer of Buddhist logic' },
          { t: 'Pramanavinishchaya', y: '7th c.', lang: 'Sanskrit', sum: 'Mid-length treatise restating his epistemology.', key: 'Pramana theory' },
          { t: 'Hetubindu', y: '7th c.', lang: 'Sanskrit', sum: 'Treatise on the valid logical reason (hetu) and its three types.', key: 'Hetu' }
        ] } ],
    ['Shantideva', 25.1157, 85.4233, 'Nalanda Mahavihara, Bihar', 'Bodhicharyavatara: bodhicitta, six paramitas, exchanging self and other', 'vajrayana',
      { era: 'fl. 8th c. CE (c. 685–763)',
        place: 'Monk of Nalanda (pin offset); legend says he recited the Bodhicharyavatara before the assembly there',
        idea: 'The bodhisattva ideal: generate the mind of awakening (bodhicitta) for all beings, practise the six perfections, and overcome self-cherishing by equalising and exchanging self with others, grounded in Madhyamaka emptiness.',
        more: 'Shantideva was a Madhyamaka (Prasangika) monk whose Bodhicharyavatara is among the most loved Mahayana texts and frequently quoted by the Dalai Lama ("For as long as space endures..."). His ethics of altruism is relevant to GS4 (compassion, empathy).',
        books: [
          { t: 'Bodhicharyavatara (Way of the Bodhisattva)', y: 'early 8th c.', lang: 'Sanskrit', sum: 'Ten chapters on the benefits of bodhicitta, confession, the perfections of patience, effort, meditation and wisdom (ch. 9 on emptiness), and dedication; teaches exchanging self and other.', key: 'Bodhicitta; six paramitas; paratmaparivartana; kshanti' },
          { t: 'Shikshasamuccaya', y: '8th c.', lang: 'Sanskrit', sum: 'Anthology of quotations from Mahayana sutras on the bodhisattva\'s training, with his verse framework.', key: 'Bodhisattva training' }
        ] } ],
    ['Shantarakshita', 29.3253, 91.5025, 'Samye Monastery, Tibet (first Tibetan monastery)', 'Yogachara-Madhyamaka synthesis; Tattvasangraha; founded Samye with Padmasambhava', 'vajrayana',
      { era: 'c. 725–788 CE',
        place: 'Abbot of Nalanda; invited to Tibet by King Trisong Detsen and founded Samye (c. 779) — pin at Samye',
        idea: 'Yogachara-Svatantrika-Madhyamaka: conventionally things are mind-only, ultimately even mind is empty; nothing is truly one or many, so nothing has intrinsic nature (neither-one-nor-many argument).',
        more: 'Shantarakshita ordained the first Tibetan monks and, with Padmasambhava, established Buddhism in Tibet. His Tattvasangraha is a massive survey and refutation of Indian schools (Nyaya, Mimamsa, Samkhya, Jain, Charvaka), invaluable as a source. Kamalashila was his disciple.',
        books: [
          { t: 'Tattvasangraha', y: '8th c.', lang: 'Sanskrit', sum: 'About 3,600 verses examining and refuting rival doctrines — God, prakriti, soul, Vedic authority, Shabda-brahman, materialism — and defending Buddhist epistemology and momentariness.', key: 'Doxography; critique of Ishvara, atman, apaurusheya Veda' },
          { t: 'Madhyamakalankara', y: '8th c.', lang: 'Sanskrit (Tibetan)', sum: 'Ninety-seven verses synthesising Yogachara and Madhyamaka through the neither-one-nor-many argument.', key: 'Ekaneka-viyoga; Yogachara-Madhyamaka' }
        ] } ],
    ['Kamalashila', 29.3453, 91.5225, 'Samye Monastery, Tibet (Samye debate)', 'Won the Samye debate (c. 792–794) for gradual path; Bhavanakrama on meditation', 'vajrayana',
      { era: 'c. 740–795 CE',
        place: 'Came from Nalanda to Tibet; debated the Chinese Chan monk Moheyan at Samye (pin offset)',
        idea: 'Awakening is reached gradually by combining calm abiding (shamatha) and analytical insight (vipashyana) with ethical practice, not by sudden non-conceptual realisation.',
        more: 'A disciple of Shantarakshita, Kamalashila is traditionally said to have won the Samye debate against the Chan "sudden enlightenment" view, after which Tibet followed Indian gradualist Buddhism. He wrote the commentary on the Tattvasangraha.',
        books: [
          { t: 'Bhavanakrama (Stages of Meditation)', y: 'late 8th c.', lang: 'Sanskrit', sum: 'Three texts describing the gradual cultivation of compassion, bodhicitta, shamatha and vipashyana, written for the Tibetan king.', key: 'Shamatha-vipashyana; gradual path; Samye debate' },
          { t: 'Tattvasangraha-panjika', y: '8th c.', lang: 'Sanskrit', sum: 'Detailed commentary on his teacher\'s Tattvasangraha, preserving many arguments of rival Indian schools.', key: 'Commentary; source for Indian schools' }
        ] } ],
    ['Padmasambhava', 29.3053, 91.4825, 'Samye Monastery, Tibet (also Rewalsar/Tso Pema, Himachal)', 'Guru Rinpoche: brought Tantric (Vajrayana) Buddhism to Tibet; Nyingma founder', 'vajrayana',
      { era: 'fl. 8th c. CE',
        place: 'From Oddiyana (Swat valley, per tradition); helped found Samye; Tso Pema at Rewalsar is a major pilgrimage site linked to him',
        idea: 'Vajrayana: enlightenment can be realised in one life through tantric practice — guru devotion, mantra, visualisation and Dzogchen (Great Perfection) recognition of the mind\'s nature.',
        more: 'Padmasambhava is revered as the "second Buddha" in Tibet and Bhutan (Paro Taktsang) and founder of the Nyingma school. Much of his story is hagiographical. Texts attributed to him are "terma" (hidden treasures) revealed later, including the Bardo Thodol. UPSC: Buddhism in the Himalaya, Hemis festival, Sikkim/Ladakh monasteries.',
        books: [
          { t: 'Bardo Thodol ("Tibetan Book of the Dead") — attributed terma', y: 'attributed 8th c.; revealed by Karma Lingpa, 14th c.', lang: 'Tibetan', sum: 'Liturgical text read to the dying and dead to guide consciousness through the intermediate states (bardo) between death and rebirth toward liberation. Attributed to Padmasambhava as a hidden treasure text.', key: 'Bardo; terma; liberation through hearing' }
        ] } ],
    ['Atisha (Dipankara Srijnana)', 25.3245, 87.2852, 'Vikramashila Mahavihara, Antichak, Bhagalpur, Bihar', 'Bodhipathapradipa: three scopes of practitioner; revived Buddhism in Tibet (Kadam)', 'vajrayana',
      { era: '982–1054 CE',
        place: 'Born in Bikrampur, Bengal (now Bangladesh); head scholar at Vikramashila under the Palas; went to Tibet in 1042 and died at Nyethang',
        idea: 'All Buddhist paths can be integrated in one graded path (lamrim) for three kinds of persons — those seeking a better rebirth, personal liberation, and Buddhahood for all — with bodhicitta and mind-training (lojong) at the centre.',
        more: 'Atisha Dipankara, a Bengali scholar of the Pala era, was invited to western Tibet (Guge) and reformed Tibetan Buddhism; his disciple Dromtonpa founded the Kadam school, later absorbed into Tsongkhapa\'s Gelug. Important for Bengal history and India–Tibet cultural links.',
        books: [
          { t: 'Bodhipathapradipa (Lamp for the Path to Enlightenment)', y: 'c. 1042 CE', lang: 'Sanskrit (survives in Tibetan)', sum: 'Sixty-eight verses outlining the graded path for three types of practitioners, combining sutra and tantra; model for all later Tibetan lamrim literature.', key: 'Lamrim; three scopes; bodhicitta; lojong' }
        ] } ],
    ['Mahavira (Vardhamana)', 25.9906, 85.1322, 'Kundagrama near Vaishali, Bihar (birthplace); nirvana at Pawapuri', '24th Tirthankara; anekantavada; five vows incl. ahimsa; triratna', 'jain',
      { era: 'c. 599–527 BCE (traditional); many scholars c. 540–468 BCE',
        place: 'Born at Kundagrama near Vaishali (Lichchhavi republic); attained kevala jnana by the Rijupalika river; nirvana at Pawapuri',
        idea: 'Every living being has a soul (jiva) bound by karmic matter; liberation (moksha/kevala) comes through the three jewels — right faith, right knowledge, right conduct — and strict non-violence; truth is many-sided (anekantavada).',
        more: 'Vardhamana Mahavira (Nigantha Nataputta in Pali texts) reformed the faith of the 23rd Tirthankara Parshvanatha, adding brahmacharya to Parshva\'s four vows (chaturyama). Jain metaphysics: jiva-ajiva dualism, six dravyas, seven tattvas, karma as subtle matter. Epistemology: five kinds of knowledge (mati, shruta, avadhi, manahparyaya, kevala). Later split into Digambara and Shvetambara.',
        books: [
          { t: 'Agamas (Jain canon) — teachings compiled by his ganadharas', y: 'oral from 5th c. BCE; fixed at Valabhi council, 5th c. CE (453/466)', lang: 'Ardhamagadhi Prakrit', sum: 'The Shvetambara canon of 45 texts (12 Angas, of which the Drishtivada is lost, plus Upangas etc.) recording Mahavira\'s teaching; Digambaras regard the original canon as lost.', key: 'Anga, Upanga; Valabhi council (Devarddhi Kshamashramana)' },
          { t: 'Acharanga Sutra', y: 'c. 4th–3rd c. BCE', lang: 'Ardhamagadhi', sum: 'First and oldest Anga: rules of ascetic conduct, extreme care for all life-forms, and a biography of Mahavira\'s austerities.', key: 'Ahimsa; monastic conduct' },
          { t: 'Uttaradhyayana Sutra', y: 'c. 3rd c. BCE onward', lang: 'Ardhamagadhi', sum: 'Thirty-six chapters believed to contain Mahavira\'s last sermon: parables and doctrine on karma, the soul and the path.', key: 'Last sermon; karma; tattvas' }
        ] } ],
    ['Bhadrabahu', 12.8590, 76.4880, 'Shravanabelagola (Chandragiri hill), Karnataka', 'Jain acharya; led migration south with Chandragupta Maurya; Kalpa Sutra (attributed)', 'jain',
      { era: 'd. c. 298 BCE (traditional)',
        place: 'Digambara tradition: led monks to the south during a 12-year famine and died at Shravanabelagola with Chandragupta Maurya as disciple',
        idea: 'Strict ascetic practice including total non-possession; Digambaras claim he upheld nudity, and the famine-migration story explains the later Digambara–Shvetambara schism.',
        more: 'Bhadrabahu was the last shrutakevalin (knower of all the scriptures). While he was in the south, Sthulabhadra held the Pataliputra council in the north, which Digambaras reject. The Kalpa Sutra, recited during Paryushana, is attributed to him. UPSC: Jainism in Karnataka, sallekhana, Chandragupta Maurya.',
        books: [
          { t: 'Kalpa Sutra (attributed)', y: 'traditionally 4th c. BCE; compiled later', lang: 'Ardhamagadhi Prakrit', sum: 'Biographies of the Tirthankaras, especially Mahavira and Parshvanatha, the lineage of elders (sthaviravali), and monastic rules for the rainy season; read aloud at Paryushana and richly illustrated in manuscripts.', key: 'Jinacharitra; sthaviravali; Paryushana' },
          { t: 'Niryuktis (attributed)', y: 'attributed; probably later', lang: 'Prakrit', sum: 'Earliest verse commentaries on the Jain canon traditionally credited to Bhadrabahu; many scholars attribute them to a later Bhadrabahu II.', key: 'Canon commentary' }
        ] } ],
    ['Kundakunda', 15.1053, 77.3640, 'Konakondla, Anantapur district, Andhra Pradesh (name origin)', 'Digambara mystic: nishchaya vs vyavahara naya; pure soul; Samayasara', 'jain',
      { era: 'Traditional: 2nd–3rd c. CE; many scholars: c. 8th c. CE',
        place: 'His name is derived from Konakondla (Kondakunda) in Anantapur district — pin there',
        idea: 'From the absolute standpoint (nishchaya naya) the soul is pure, knowing consciousness untouched by karma; only from the conventional standpoint (vyavahara naya) is it bound — realising the pure self is the path to liberation.',
        more: 'Kundakunda is the most revered Digambara acharya; Digambara monks invoke him right after Mahavira and Gautama Ganadhara. His Prakrit works emphasise inner spirituality over ritual and influenced Banarasidas and the modern Shrimad Rajchandra and Kanji Swami movements (Rajchandra was a mentor of Gandhi). Authorship of all 16 attributed works is debated.',
        books: [
          { t: 'Samayasara', y: 'date debated', lang: 'Shauraseni Prakrit', sum: 'About 439 verses on the nature of the pure soul (samaya), distinguishing the absolute and conventional standpoints and showing that the soul is not the doer of karma in reality.', key: 'Nishchaya naya / vyavahara naya; shuddha atma' },
          { t: 'Pravachanasara', y: 'date debated', lang: 'Prakrit', sum: 'On knowledge, the knowable and conduct: the omniscient knowledge of the soul and right monastic behaviour.', key: 'Jnana, jneya, charitra' },
          { t: 'Panchastikayasara', y: 'date debated', lang: 'Prakrit', sum: 'Exposition of the five extended realities (astikayas: jiva, pudgala, dharma, adharma, akasha) plus time, and the nine padarthas.', key: 'Panchastikaya; dravyas' },
          { t: 'Niyamasara', y: 'date debated', lang: 'Prakrit', sum: 'On the essential discipline (niyama) of right faith, knowledge and conduct leading to liberation.', key: 'Ratnatraya' }
        ] } ],
    ['Umasvati', 25.6293, 85.1576, 'Kusumapura (Pataliputra), Bihar — per his colophon', 'Tattvartha Sutra: first Jain Sanskrit sutra-text, accepted by all sects', 'jain',
      { era: 'c. 2nd–5th c. CE',
        place: 'The colophon of the Tattvartha Sutra Bhashya says he composed it at Kusumapura (Pataliputra) (pin offset from Patna)',
        idea: 'Right faith, right knowledge and right conduct together are the path to liberation ("samyag-darshana-jnana-charitrani mokshamargah"); reality is the seven tattvas, and souls render service to one another ("parasparopagraho jivanam").',
        more: 'Umasvati (Umaswami to Digambaras) wrote the only Jain text accepted as authoritative by both Shvetambaras and Digambaras, giving Jainism a concise Sanskrit sutra like other darshanas. Pujyapada\'s Sarvarthasiddhi is the Digambara commentary. "Parasparopagraho jivanam" is the official motto of Jainism.',
        books: [
          { t: 'Tattvartha Sutra (Tattvarthadhigama Sutra)', y: 'c. 2nd–5th c. CE', lang: 'Sanskrit', sum: 'About 350 sutras in ten chapters on the path (triratna), knowledge and pramanas, the soul, cosmology, ajiva substances, karmic influx (ashrava) and bondage, ethics (vows), stoppage (samvara), shedding (nirjara) and liberation.', key: 'Seven tattvas: jiva, ajiva, ashrava, bandha, samvara, nirjara, moksha; parasparopagraho jivanam' }
        ] } ],
    ['Siddhasena Divakara', 23.1765, 75.7885, 'Ujjain, Madhya Pradesh (tradition: court of Vikramaditya)', 'Jain logician; Sanmati Tarka on naya and anekanta; Nyayavatara — first Jain logic manual', 'jain',
      { era: 'c. 5th c. CE (dates debated)',
        place: 'Jain legends place him at Ujjain at the court of a king Vikramaditya, whom he converted',
        idea: 'Every view (naya) is a partial truth; only the synthesis of all standpoints (anekanta) gives the whole truth, and a view taken in isolation becomes false (durnaya).',
        more: 'Siddhasena is regarded as the founder of Jain logic and epistemology in Sanskrit. He unified perception and knowledge under Jain pramana theory, criticised the separation of darshana and jnana in the omniscient, and systematised naya theory. Revered by Shvetambaras; Sanmati Tarka is respected by both sects.',
        books: [
          { t: 'Sanmati Tarka', y: 'c. 5th c.', lang: 'Prakrit', sum: 'Three chapters on the nayas (standpoints), knowledge and the object of knowledge, arguing that all one-sided views are partial and gain truth only in combination.', key: 'Naya-vada; anekantavada; durnaya' },
          { t: 'Nyayavatara', y: 'c. 5th–6th c. (attribution debated)', lang: 'Sanskrit', sum: 'Thirty-two verses — the first Jain manual of logic — defining pramana, perception, inference, testimony and fallacies.', key: 'Jain pramana; anumana' }
        ] } ],
    ['Haribhadra Suri', 24.8870, 74.6450, 'Chittorgarh (Chitrakuta), Rajasthan — birthplace', 'Shaddarshana Samuccaya: impartial survey of six systems; Jain yoga; anekanta', 'jain',
      { era: 'Traditional 459–529 CE; scholars c. 700–770 CE (Jinavijaya)',
        place: 'Born a Brahmin at Chitrakuta (Chittor); converted by the nun Yakini Mahattara',
        idea: 'Truth is many-sided, so other systems should be studied fairly; spiritual progress is graded and open to followers of any tradition — what matters is the soul\'s inner disposition, not sectarian label.',
        more: 'Haribhadra was a prolific Shvetambara scholar credited with hundreds of works (traditionally 1,444). His Shaddarshana Samuccaya is the earliest known Indian doxography presenting Buddhist, Nyaya, Samkhya, Jain, Vaisheshika and Mimamsa views (with Lokayata) without polemics. He also built a Jain theory of yoga in dialogue with Patanjali.',
        books: [
          { t: 'Shaddarshana Samuccaya', y: '8th c.', lang: 'Sanskrit', sum: 'Eighty-seven verses summarising the six philosophical systems — Bauddha, Nyaya, Samkhya, Jaina, Vaisheshika, Jaiminiya (Mimamsa) — and an appendix on Lokayata, presented neutrally.', key: 'Doxography; six darshanas (Jain list)' },
          { t: 'Yogadrishtisamuccaya', y: '8th c.', lang: 'Sanskrit', sum: 'Describes eight stages of spiritual vision (mitra, tara, bala, dipra, sthira, kanta, prabha, para) correlated with Patanjali\'s eight limbs.', key: 'Eight drishtis; Jain yoga' },
          { t: 'Anekantajayapataka', y: '8th c.', lang: 'Sanskrit', sum: 'Defence of anekantavada against Buddhist and other critics, with the author\'s commentary.', key: 'Anekantavada defended' }
        ] } ],
    ['Hemachandra', 23.8500, 72.1167, 'Anahilapataka (Patan), Gujarat — Chaulukya court', '"Kalikalasarvajna"; Jain polymath; Pramana Mimamsa; Yogashastra; guide of Kumarapala', 'jain',
      { era: '1088–1173 CE',
        place: 'Born at Dhandhuka; worked at the Chaulukya (Solanki) capital Anahilapataka under Jayasimha Siddharaja and Kumarapala',
        idea: 'Jain epistemology: knowledge is valid when it determines its object; pramanas are direct (pratyaksha) and indirect (paroksha), and reality is understood through anekanta; ethical life rests on ahimsa and the householder\'s vows.',
        more: 'Hemachandra Suri was a Shvetambara monk and polymath of grammar, poetics, lexicography, history and philosophy, called "omniscient of the Kali age". He influenced King Kumarapala to promote ahimsa and ban animal slaughter in Gujarat. He described the Fibonacci-type sequence in prosody before Fibonacci. Gujarat\'s literary tradition regards his Apabhramsha grammar as its starting point.',
        books: [
          { t: 'Pramana Mimamsa', y: '12th c.', lang: 'Sanskrit', sum: 'Incomplete but important sutra-text with auto-commentary on Jain logic: definitions of pramana, perception, inference and debate.', key: 'Jain pramana; pratyaksha-paroksha' },
          { t: 'Yogashastra', y: '12th c.', lang: 'Sanskrit', sum: 'Written for Kumarapala: the three jewels, the vows of Jain householders and monks, and meditation; with his own commentary.', key: 'Shravakachara; ahimsa; dhyana' },
          { t: 'Trishashti-shalaka-purusha-charitra', y: '12th c.', lang: 'Sanskrit', sum: 'Epic lives of the 63 illustrious persons of Jain universal history — 24 Tirthankaras, 12 Chakravartins, 9 Baladevas, 9 Vasudevas, 9 Prativasudevas.', key: '63 shalaka-purushas' },
          { t: 'Siddha-Hema-Shabdanushasana', y: '12th c.', lang: 'Sanskrit/Prakrit', sum: 'Grammar of Sanskrit and Prakrits (incl. Apabhramsha) composed for Siddharaja Jayasimha.', key: 'Grammar; Apabhramsha' }
        ] } ],
    ['Brihaspati (Charvaka / Lokayata tradition)', 25.0062, 85.3963, 'Magadha region (no historical site; pin near Rajgir, traditional)', 'Materialism: perception the only pramana; four elements; no soul, afterlife or God; pleasure as goal', 'charvaka',
      { era: 'Legendary founder; Lokayata ideas attested from c. 6th c. BCE',
        place: 'No authentic place is known; materialists debated in the Magadhan shramana milieu (pin approximate near Rajgir)',
        idea: 'Only perception (pratyaksha) is valid; the world consists of four elements (earth, water, fire, air); consciousness arises from their combination in the body like the intoxicating power of fermented ingredients, so there is no soul, rebirth, karma or God, and the goal of life is pleasure (kama) with wealth (artha).',
        more: 'Charvaka/Lokayata is the Indian materialist school, traditionally founded by Brihaspati, with Charvaka as a disciple. All its texts are lost; doctrines are known from opponents (Sarvadarshana-sangraha, Shaddarshana Samuccaya, Tattvasangraha). Theory of causation: svabhavavada (things arise from their own nature). Rejects inference as unreliable because vyapti cannot be established. Modern scholars (D. Chattopadhyaya, Ramkrishna Bhattacharya) have reconstructed its fragments.',
        books: [
          { t: 'Barhaspatya Sutra (lost; fragments quoted)', y: 'date unknown (fragments quoted c. 6th–14th c. CE)', lang: 'Sanskrit', sum: 'The lost root text of Lokayata, known from about 30 fragments quoted by opponents: the four elements as the only reality, consciousness from matter, perception as the only pramana, and rejection of afterlife and ritual.', key: 'Pratyaksha-ekam-pramanam; bhuta-chatushtaya; deha-atmavada; svabhavavada' },
          { t: 'Lokayata verses in the Sarvadarshana-sangraha (as quoted)', y: '14th c. (quoted)', lang: 'Sanskrit', sum: 'The first chapter of Madhava\'s survey presents Charvaka views and famous verses mocking Vedic rituals and priests, e.g. that the body once burnt never returns.', key: '"Yavaj jivet sukham jivet"; anti-ritualism' }
        ] } ],
    ['Jayarashi Bhatta', 23.8700, 72.1367, 'Unknown; sole manuscript found in a Jain bhandar at Patan, Gujarat', 'Radical sceptic of Lokayata: Tattvopaplavasimha refutes all pramanas', 'charvaka',
      { era: 'fl. c. 8th c. CE',
        place: 'His home is unknown; the only manuscript of his work was discovered in a Jain library at Patan (pin offset) and published in 1940',
        idea: 'No means of knowledge, including perception, can be shown to be valid, so no metaphysical system (including materialism) can be established; ordinary worldly life should proceed without philosophical dogma.',
        more: 'Jayarashi is the only Lokayata-connected author whose complete work survives. Scholars debate whether he was a true Charvaka or a pure sceptic who went further than materialists, who accepted perception. He criticised Nyaya, Mimamsa, Buddhist and Jain theories of knowledge one by one.',
        books: [
          { t: 'Tattvopaplavasimha (The Lion that Devours All Categories)', y: 'c. 8th c.', lang: 'Sanskrit', sum: 'Systematic refutation of the definitions of pramana in Nyaya, Mimamsa, Buddhism, Samkhya and Jainism, concluding that all categories (tattvas) are overturned (upaplava).', key: 'Scepticism; tattva-upaplava; critique of all pramanas' }
        ] } ],
    ['Makkhali Gosala', 27.5164, 82.0503, 'Shravasti, Uttar Pradesh (died in potter Halahala\'s workshop)', 'Ajivika leader: niyati (fate/determinism) — human effort is useless', 'shramana',
      { era: 'd. c. 484 BCE (contemporary of Mahavira and Buddha)',
        place: 'Jain Bhagavati Sutra says he died at Shravasti in the shop of the potter woman Halahala; Ashoka and Dasharatha later gave Barabar & Nagarjuni caves to Ajivikas',
        idea: 'Niyati-vada: everything is predetermined by fate; beings pass through a fixed cycle of 8,400,000 great aeons and are purified automatically, like a ball of thread that unwinds to its end — effort, karma and virtue have no effect.',
        more: 'Makkhali Gosala (Maskarin Goshala) was an ascetic companion of Mahavira for about six years before they quarrelled. The Ajivikas survived as a sect until about the 14th c. in South India. No Ajivika text survives; doctrine is known from Buddhist (Samannaphala Sutta) and Jain sources, both hostile. Buddha called his view the worst of all. UPSC: Barabar caves (Lomas Rishi), Ajivika patronage by Bindusara.',
        books: [
          { t: 'Teachings recorded in the Samannaphala Sutta (Digha Nikaya 2)', y: 'c. 5th–3rd c. BCE (Buddhist record)', lang: 'Pali', sum: 'King Ajatashatru reports the doctrines of six rival teachers; Gosala\'s is the doctrine of purification through wandering in samsara (samsara-suddhi) and denial of causes for defilement or purity.', key: 'Niyati; samsara-suddhi; ahetuvada; akiriyavada' },
          { t: 'Gosala\'s life in the Bhagavati Sutra (Vyakhyaprajnapti), Book 15', y: 'compiled c. 3rd c. BCE – 5th c. CE (Jain record)', lang: 'Ardhamagadhi', sum: 'Jain account of Gosala\'s association with Mahavira, their quarrel at Shravasti and his death; main source on Ajivika history.', key: 'Ajivika; Mahavira–Gosala dispute' }
        ] } ],
    ['Ajita Kesakambali', 25.0262, 85.4163, 'Rajagriha (Rajgir), Bihar — Magadhan teacher of the Samannaphala Sutta', 'Earliest named materialist: uccheda-vada (annihilation at death); four elements', 'shramana',
      { era: 'fl. 6th–5th c. BCE',
        place: 'One of six teachers who met Ajatashatru at Rajagriha (pin Rajgir)',
        idea: 'Ucchedavada: a person is made of four elements and at death returns to them; nothing survives, there is no fruit of good or bad deeds, no other world — both fool and wise are annihilated.',
        more: 'Ajita "of the hair-blanket" is the earliest known Indian materialist, regarded as a forerunner of Charvaka/Lokayata. Buddhists placed his annihilationism (uccheda) opposite eternalism (sassata) — the two extremes the Buddha\'s middle way avoids.',
        books: [
          { t: 'Teachings recorded in the Samannaphala Sutta (Digha Nikaya 2)', y: 'c. 5th–3rd c. BCE (Buddhist record)', lang: 'Pali', sum: 'Ajita\'s statement that there is no merit in giving or sacrifice, no fruit of deeds, no afterlife and that the body made of four elements dissolves completely at death.', key: 'Ucchedavada; four mahabhutas; natthikavada' }
        ] } ],
    ['Pakudha Kaccayana', 25.0462, 85.4363, 'Rajagriha (Rajgir), Bihar — Samannaphala Sutta teacher', 'Seven eternal, uncreated elements; killing is only a blade passing between elements', 'shramana',
      { era: 'fl. 6th–5th c. BCE',
        place: 'One of the six teachers named in the Samannaphala Sutta (pin offset at Rajgir)',
        idea: 'Seven eternal and unchanging bodies — earth, water, fire, air, pleasure, pain and soul (jiva) — make up all beings; since they cannot be changed, no one truly kills or is killed.',
        more: 'Pakudha (Kakuda) Katyayana taught a pluralist, atomistic eternalism (sassatavada / akatavada) that some historians see as a precursor of Vaisheshika atomism. His ethical conclusion was that actions have no moral significance.',
        books: [
          { t: 'Teachings recorded in the Samannaphala Sutta (Digha Nikaya 2)', y: 'c. 5th–3rd c. BCE (Buddhist record)', lang: 'Pali', sum: 'Presents his doctrine of seven uncreated, unshakable "bodies" (kaya) and the claim that a sword cutting a head only passes through the space between them.', key: 'Sattakaya; sassatavada; akatavada' }
        ] } ],
    ['Purana Kassapa', 25.0062, 85.4363, 'Rajagriha (Rajgir), Bihar — Samannaphala Sutta teacher', 'Akiriyavada: no merit or demerit in any action — amoralism', 'shramana',
      { era: 'fl. 6th–5th c. BCE',
        place: 'One of the six teachers who met Ajatashatru (pin offset at Rajgir)',
        idea: 'Akiriyavada (non-action doctrine): good and bad deeds produce no merit or demerit; killing, stealing or giving alms make no moral difference to the doer.',
        more: 'Purana Kassapa was a naked ascetic teacher with a large following, later perhaps associated with the Ajivikas. Buddhist texts portray his denial of moral causation as a dangerous view; in Buddhist legend he drowned himself after losing to the Buddha at Shravasti.',
        books: [
          { t: 'Teachings recorded in the Samannaphala Sutta (Digha Nikaya 2)', y: 'c. 5th–3rd c. BCE (Buddhist record)', lang: 'Pali', sum: 'His reply to Ajatashatru: whoever acts or causes others to act — maiming, killing, robbing — commits no evil; giving and self-control bring no merit.', key: 'Akiriyavada; amoralism; no punna/papa' }
        ] } ],
    ['Sanjaya Belatthiputta', 25.0262, 85.4363, 'Rajagriha (Rajgir), Bihar — teacher of Sariputta & Moggallana before they joined Buddha', 'Ajnanavada / scepticism: "eel-wriggling" refusal to affirm or deny', 'shramana',
      { era: 'fl. 6th–5th c. BCE',
        place: 'Taught at Rajagriha; his pupils Sariputta and Moggallana left him for the Buddha (pin offset at Rajgir)',
        idea: 'Ajnanavada (agnosticism): on questions like the afterlife or karma one cannot say "it is", "it is not", "both" or "neither"; he refused to commit to any position (amaravikkhepa — "eel-wriggling").',
        more: 'Sanjaya is the earliest recorded Indian sceptic. His fourfold refusal resembles the later catushkoti logic and the Buddha\'s silence on unanswerable questions (avyakata), and is often compared with the Jain saptabhangi. Buddhist sources say 250 of his followers left with Sariputta and Moggallana.',
        books: [
          { t: 'Teachings recorded in the Samannaphala Sutta (Digha Nikaya 2)', y: 'c. 5th–3rd c. BCE (Buddhist record)', lang: 'Pali', sum: 'His evasive answer to Ajatashatru: "If I thought so, I would say so; I do not say it is so, nor otherwise, nor not otherwise..." applied to the afterlife and fruits of action.', key: 'Ajnanavada; amaravikkhepa; fourfold negation' }
        ] } ]
  ]
});
