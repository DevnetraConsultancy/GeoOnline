// Books & philosophy — Chinese, Japanese & Islamic/Persian thinkers; science, geography & world-changing books.
// Sources: Wikipedia, Britannica, Stanford Encyclopedia of Philosophy, IEP, NCERT/IGNOU geography (geographical thought) texts.
GEO.add({
  id: 'bk-east', group: 'bk-w', title: 'Chinese, Japanese & Islamic Thinkers', bn: 'চীনা, জাপানি ও ইসলামি-পারসিক চিন্তাবিদ', icon: '☯️', world: true,
  intro: "কনফুসিয়াস-লাওৎসে থেকে ইবনে সিনা, ইবনে খালদুন, রুমি ও আধুনিক এশীয় চিন্তাবিদ — কে কোথায় কী লিখেছেন। মানচিত্রে চিন্তাবিদের পিনে ক্লিক করুন → তাঁর বইয়ের তালিকা → বইয়ে ক্লিক করে সারাংশ ও মূল ধারণা দেখুন।",
  types: {
    china: ['Classical Chinese schools (Hundred Schools)', '#c62828'],
    neo: ['Later & modern China', '#ef6c00'],
    japan: ['Japan', '#ad1457'],
    islam: ['Islamic philosophy & science', '#2e7d32'],
    persian: ['Persian & Sufi poetry', '#00838f'],
    modern: ['Modern Asian & Arab writers', '#5e35b1']
  },
  pts: [
    ["Confucius", 35.5967, 116.9911, "Qufu, State of Lu (Shandong, China)", "Founder of Confucianism; ren, li, junzi; Analects", "china",
      { era: "551–479 BCE",
        place: "Born, taught and buried at Qufu (pin: Temple of Confucius, Qufu)",
        idea: "A good society rests on moral cultivation: the junzi (exemplary person) practises ren (humaneness) and li (ritual propriety), filial piety and rectification of names; rulers govern by virtue (de), not punishment.",
        more: "Kong Fuzi (Kongzi), a minor official and teacher of Lu who wandered the states seeking a ruler to adopt his ideas. His teachings, collected by disciples, became the state ideology of Han China and shaped East Asian ethics and civil-service exams for 2,000 years. UPSC GS4 often asks his quotes on governance by virtue and the Golden Rule ('Do not impose on others what you do not wish for yourself').",
        books: [
          { t: "Analects (Lunyu)", y: "Compiled c. 5th–3rd c. BCE by disciples", lang: "Classical Chinese", sum: "Short sayings and dialogues of Confucius recorded by his followers. They treat self-cultivation, the junzi, ren, li, filial piety (xiao), learning and good government by moral example rather than law and punishment.", key: "Ren; li; junzi; xiao; rectification of names; governance by virtue" },
          { t: "Spring and Autumn Annals (Chunqiu)", y: "Traditionally edited by Confucius, c. 5th c. BCE", lang: "Classical Chinese", sum: "Terse chronicle of the state of Lu (722–481 BCE), one of the Five Classics. Tradition holds that Confucius edited it so that word choice conveyed moral praise and blame; the attribution is traditional.", key: "Five Classics; 'praise and blame' historiography" }
        ] } ],
    ["Laozi", 34.6197, 112.4540, "Luoyang, Zhou royal court (Henan, China)", "Traditional founder of Daoism; Tao Te Ching; wu wei", "china",
      { era: "Traditionally 6th c. BCE (historicity debated)",
        place: "Traditionally keeper of archives at the Zhou court in Luoyang (pin); said to have left westward through the Hangu Pass",
        idea: "The Dao (Way) is the nameless source of all things; the sage follows it through wu wei (non-forced action), simplicity and humility, like water that yields yet overcomes the hard.",
        more: "Laozi ('Old Master') is, per Sima Qian, an older contemporary of Confucius, but many scholars see the Tao Te Ching as a compilation of the 4th–3rd c. BCE. Daoism became both a philosophy and an organised religion, and influenced Chan/Zen Buddhism. Quoted in essays: 'A journey of a thousand li begins with a single step.'",
        books: [
          { t: "Tao Te Ching (Daodejing)", y: "c. 4th c. BCE (traditionally 6th c. BCE)", lang: "Classical Chinese", sum: "81 short poetic chapters on the Dao and its virtue (de). It praises non-action, emptiness, softness and returning to simplicity, and advises minimal, non-interfering government: the best ruler is one the people barely know exists.", key: "Dao; de; wu wei; ziran; 'thousand-li journey begins with one step'" }
        ] } ],
    ["Mencius", 35.4053, 116.9655, "Zou (Zoucheng, Shandong, China)", "'Second Sage' of Confucianism; human nature is good", "china",
      { era: "c. 372–289 BCE",
        place: "Born at Zou, near Qufu (pin: Zoucheng, Temple of Mencius)",
        idea: "Human nature is innately good: everyone has four 'sprouts' (compassion, shame, deference, sense of right and wrong) that must be cultivated; a ruler who oppresses the people loses the Mandate of Heaven and may be rightfully overthrown.",
        more: "Mengzi studied under disciples of Confucius' grandson Zisi and travelled to advise rulers of Qi and Liang. Zhu Xi made the Mencius one of the Four Books. His idea that the people are more important than the ruler and his right to resist tyranny are frequently compared with Kautilya and Western social-contract thinkers.",
        books: [
          { t: "Mencius (Mengzi)", y: "c. late 4th c. BCE", lang: "Classical Chinese", sum: "Dialogues of Mencius with kings and rivals (Mohists, Yang Zhu). It argues for innate human goodness, benevolent government, light taxes, the well-field land system and the Mandate of Heaven that justifies removing tyrants.", key: "Four sprouts; ren zheng (benevolent govt); people first, ruler last" }
        ] } ],
    ["Xunzi", 36.8050, 118.3080, "Jixia Academy, Linzi, State of Qi (Shandong)", "Confucian realist: human nature is bad, corrected by ritual", "china",
      { era: "c. 310–c. 235 BCE",
        place: "Taught at the Jixia Academy in Linzi, capital of Qi (pin); later magistrate of Lanling in Chu",
        idea: "Human nature is bad (selfish desires); goodness is the product of deliberate effort, education, teachers and ritual (li). Heaven is a natural order, not a moral will.",
        more: "Xun Kuang was the most systematic Confucian of the Warring States period and the teacher of the Legalists Han Fei and Li Si (chancellor of Qin). His rationalist view of Heaven and stress on law and ritual contrast with Mencius' optimism; exam questions often pair the two on human nature.",
        books: [
          { t: "Xunzi", y: "c. 3rd c. BCE", lang: "Classical Chinese", sum: "Thirty-two essays covering human nature ('Human Nature Is Bad'), learning, ritual and music, rectifying names, and a naturalistic 'Discourse on Heaven'. It argues that society needs ritual rules and teachers to turn selfish people into moral ones.", key: "Xing e (nature is bad); li as social engineering; naturalistic Heaven" }
        ] } ],
    ["Zhuangzi", 34.4141, 115.6564, "Meng, State of Song (near Shangqiu, Henan)", "Daoist sage; relativism, spontaneity, butterfly dream", "china",
      { era: "c. 369–286 BCE",
        place: "Born at Meng in the state of Song (pin: Shangqiu region); minor official at the lacquer garden",
        idea: "All distinctions (right/wrong, life/death, self/other) are relative perspectives; freedom lies in wandering at ease with the Dao and transforming spontaneously with things.",
        more: "Zhuang Zhou is, with Laozi, the co-founder of philosophical Daoism. His witty parables (the butterfly dream, Cook Ding carving an ox, the useless tree) influenced Chinese literature, art and Chan/Zen Buddhism. He reportedly refused an offer to become a chief minister.",
        books: [
          { t: "Zhuangzi", y: "c. 4th–3rd c. BCE (Inner Chapters attributed to him)", lang: "Classical Chinese", sum: "Thirty-three chapters (7 'Inner', 15 'Outer', 11 'Miscellaneous') of parables and dialogues. It mocks fixed values, praises spontaneity and skill that flows with nature, and treats death as natural transformation.", key: "Butterfly dream; Cook Ding; free and easy wandering; relativism" }
        ] } ],
    ["Mozi", 35.0847, 117.1650, "Teng / Lu region (Tengzhou, Shandong)", "Mohism: impartial 'universal love', anti-war, utilitarian", "china",
      { era: "c. 470–391 BCE",
        place: "Traditionally from Tengzhou in the Lu region (pin: Tengzhou, Mozi memorial)",
        idea: "Jian ai — impartial care for all; judge actions by whether they benefit the people (an early consequentialism). Condemns aggressive war, extravagant funerals and music, and calls for promoting the worthy.",
        more: "Mo Di founded a disciplined movement of craftsmen-engineers who defended cities against attack. Mohism rivalled Confucianism in the Warring States period, criticising its stress on family-graded love and ritual, but faded after the Qin unification. Later Mohists made early contributions to logic, optics and mechanics.",
        books: [
          { t: "Mozi", y: "c. 5th–3rd c. BCE (compiled by followers)", lang: "Classical Chinese", sum: "Writings of the Mohist school: core chapters on universal love, against offensive war, frugality, Heaven's will and meritocracy; later 'Mohist Canons' on logic, geometry and optics; and chapters on defensive siege warfare.", key: "Jian ai; fei gong (against aggression); benefit to the people" }
        ] } ],
    ["Han Feizi", 34.3955, 113.7400, "Xinzheng, capital of the State of Han (Henan)", "Synthesiser of Legalism: fa, shu, shi", "china",
      { era: "c. 280–233 BCE",
        place: "Prince of the state of Han, capital Xinzheng (pin); died in Qin",
        idea: "Order comes from clear, harsh, impartially enforced laws (fa), administrative techniques for controlling officials (shu) and the ruler's positional power (shi), not from virtue.",
        more: "Han Fei studied under Xunzi and synthesised Legalism. The King of Qin (later Qin Shi Huang) admired his writings; Han Fei was sent to Qin and died in prison, reportedly through his fellow-student Li Si. Legalism guided Qin's unification of China (221 BCE). Often compared with Kautilya and Machiavelli.",
        books: [
          { t: "Han Feizi", y: "c. 3rd c. BCE", lang: "Classical Chinese", sum: "Fifty-five chapters on statecraft. It argues that people respond only to reward and punishment ('the two handles'), that laws must be public and uniform, and that the ruler must stay secretive and control ministers through technique and position.", key: "Fa-shu-shi; two handles (reward & punishment); Legalism" }
        ] } ],
    ["Sun Tzu", 31.2990, 120.5853, "Court of the State of Wu (Suzhou, Jiangsu)", "Military strategist; The Art of War", "china",
      { era: "Traditionally c. 544–496 BCE (fl. late 6th c. BCE)",
        place: "Traditionally general for King Helü of Wu, capital at Suzhou (pin); born in the state of Qi",
        idea: "War is a matter of vital importance to the state; the supreme art is to subdue the enemy without fighting, through knowledge, deception and positioning.",
        more: "Sun Wu's historicity is debated and the text may date to the Warring States period (5th–4th c. BCE). The Art of War influenced Mao Zedong, Japanese and Western strategists and modern business and diplomacy. Popular in IR, essay and ethics answers: 'Know the enemy and know yourself; in a hundred battles you will never be in peril.'",
        books: [
          { t: "The Art of War (Sunzi Bingfa)", y: "c. 5th c. BCE (traditional)", lang: "Classical Chinese", sum: "Thirteen chapters on planning, waging war, attack by stratagem, terrain, manoeuvre and the use of spies. Emphasises intelligence, deception, speed, flexibility and winning with minimal cost; the best victory avoids battle altogether.", key: "Win without fighting; all warfare is deception; know enemy and self" }
        ] } ],
    ["Sima Qian", 34.3416, 108.9398, "Chang'an, Han imperial capital (Xi'an)", "'Grand Historian'; Shiji — father of Chinese historiography", "china",
      { era: "c. 145–c. 86 BCE",
        place: "Grand Historian at the Han court in Chang'an (pin: Xi'an); born at Longmen (Hancheng)",
        more: "Succeeded his father Sima Tan as court astrologer-historian under Emperor Wu. After defending a defeated general he was castrated, but chose to live to finish his history. His biographical-annal format became the model for all 24 official dynastic histories. His Shiji is the main source on Laozi, Confucius and the Qin unification.",
        books: [
          { t: "Records of the Grand Historian (Shiji)", y: "c. 109–91 BCE", lang: "Classical Chinese", sum: "A 130-chapter history of China from the legendary Yellow Emperor to Emperor Wu of Han, arranged as basic annals, tables, treatises, hereditary houses and biographies. It also describes the Xiongnu and Central Asian lands reached by Zhang Qian.", key: "Annal-biography format; first general history of China" }
        ] } ],
    ["Zhu Xi", 27.7564, 118.0353, "Wuyi Mountains, Fujian (Wuyi Academy)", "Neo-Confucian synthesiser; li & qi; Four Books", "neo",
      { era: "1130–1200",
        place: "Taught for long periods at his Wuyi Jingshe academy in the Wuyi Mountains, Fujian (pin); also revived the White Deer Grotto Academy",
        idea: "Everything is made of qi (material force) organised by li (principle); the moral nature is principle itself. One perfects the self through 'investigation of things' (gewu) and reverent study.",
        more: "Song-dynasty scholar who synthesised Neo-Confucianism (the Cheng-Zhu school), absorbing Buddhist and Daoist metaphysics into a Confucian system. He grouped the Analects, Mencius, Great Learning and Doctrine of the Mean as the Four Books; his commentaries became the official civil-service examination standard from 1313 to 1905 and shaped Korea and Japan.",
        books: [
          { t: "Collected Commentaries on the Four Books (Sishu Zhangju Jizhu)", y: "c. 1190", lang: "Classical Chinese", sum: "Zhu Xi's commentaries on the Four Books, reading them through his li-qi metaphysics and the investigation of things. Adopted as the orthodox curriculum for imperial examinations in 1313 and used until 1905.", key: "Four Books; gewu; li (principle) and qi" },
          { t: "Reflections on Things at Hand (Jinsi Lu)", y: "1175 (with Lü Zuqian)", lang: "Classical Chinese", sum: "An anthology of sayings of the Northern Song masters Zhou Dunyi, Cheng Hao, Cheng Yi and Zhang Zai, arranged as a graded introduction to Neo-Confucian learning, self-cultivation and governance.", key: "Neo-Confucian primer; Cheng brothers; Zhou Dunyi" }
        ] } ],
    ["Wang Yangming", 30.0372, 121.1546, "Yuyao, Zhejiang (birthplace)", "Neo-Confucian idealist; unity of knowledge and action", "neo",
      { era: "1472–1529",
        place: "Born at Yuyao, Zhejiang (pin); had his enlightenment in exile at Longchang, Guizhou (1508)",
        idea: "Principle is not outside but in the mind (xin ji li); everyone has innate knowledge of the good (liangzhi), and true knowledge is inseparable from action (zhi xing he yi).",
        more: "Wang Shouren was a Ming official and successful general who challenged Zhu Xi's 'investigation of external things'. His School of Mind (Lu-Wang school) inspired reformers and samurai in Japan (Yomeigaku), including leaders of the Meiji Restoration. 'Knowledge is the beginning of action; action is the completion of knowledge.'",
        books: [
          { t: "Instructions for Practical Living (Chuanxi Lu)", y: "1518 (first part), expanded after 1529", lang: "Classical Chinese", sum: "Records of Wang's conversations and letters compiled by disciples. It argues that the mind is principle, that innate moral knowledge must be extended in daily affairs, and that knowing and acting are one.", key: "Liangzhi; unity of knowledge and action; mind is principle" }
        ] } ],
    ["Sun Yat-sen", 23.1291, 113.2644, "Guangzhou (Canton), China", "Father of the Republic of China; Three Principles of the People", "neo",
      { era: "1866–1925",
        place: "Based his revolutionary government at Guangzhou, where he delivered the Three Principles lectures in 1924 (pin); born at Cuiheng, Guangdong",
        idea: "China needs nationalism (minzu), democracy/people's rights (minquan) and people's livelihood (minsheng, land equalisation and regulation of capital).",
        more: "Doctor trained in Hong Kong who founded the Revive China Society (1894) and Tongmenghui (1905). After the 1911 Xinhai Revolution he became provisional President of the Republic of China (1912) and later led the Kuomintang. Revered in both Taiwan and the PRC. His Three Principles are often compared with Lincoln's 'of, by, for the people'.",
        books: [
          { t: "Three Principles of the People (Sanmin Zhuyi)", y: "1924 (lectures; ideas from 1905)", lang: "Chinese", sum: "Lectures setting out Sun's political philosophy: Chinese nationalism against imperialism and the Manchu legacy, a five-power constitutional democracy, and people's livelihood through land equalisation and state regulation of capital.", key: "Minzu, minquan, minsheng; five-power constitution" },
          { t: "The International Development of China", y: "1920 (English; Chinese 'Jianguo Fanglüe' 1922)", lang: "English / Chinese", sum: "A plan for China's economic modernisation using foreign capital: thousands of km of railways, roads, canals, ports and industries; it even proposed a great dam on the Yangtze, later realised as the Three Gorges Dam.", key: "Railways; ports; Yangtze dam idea; foreign capital" }
        ] } ],
    ["Mao Zedong", 36.5853, 109.4897, "Yan'an, Shaanxi (CPC base 1936–47)", "Maoism; peasant revolution; Little Red Book", "neo",
      { era: "1893–1976",
        place: "Wrote his key theoretical works at the Yan'an base after the Long March (pin); born at Shaoshan, Hunan",
        idea: "Marxism-Leninism adapted to China: the peasantry, not the urban proletariat, leads revolution; protracted people's war encircles cities from the countryside; contradictions drive change.",
        more: "Founding member of the Communist Party of China (1921), leader after the Long March (1934–35), and founder of the People's Republic (1 Oct 1949). His campaigns included the Great Leap Forward (1958–62) and the Cultural Revolution (1966–76). Maoism inspired Naxalite and other insurgencies, relevant to Indian internal security.",
        books: [
          { t: "On Practice and On Contradiction", y: "1937", lang: "Chinese", sum: "Two philosophical essays from Yan'an lectures. On Practice argues that knowledge comes from and is tested in practice; On Contradiction applies dialectics, distinguishing principal and secondary contradictions to guide strategy.", key: "Practice-theory-practice; principal contradiction" },
          { t: "Quotations from Chairman Mao Tse-tung ('Little Red Book')", y: "1964", lang: "Chinese", sum: "A pocket anthology of Mao's sayings compiled under Lin Biao for the People's Liberation Army; it became the most printed book of the Cultural Revolution. Includes 'Political power grows out of the barrel of a gun.'", key: "Cultural Revolution; 'power grows out of the barrel of a gun'" },
          { t: "Report on an Investigation of the Peasant Movement in Hunan", y: "1927", lang: "Chinese", sum: "Field report arguing that poor peasants are the main revolutionary force in China and that their uprisings should be supported, not restrained, by the party.", key: "Peasants as revolutionary vanguard" }
        ] } ],
    ["Lu Xun", 29.9958, 120.5861, "Shaoxing, Zhejiang (birthplace)", "Father of modern Chinese literature; A Madman's Diary", "neo",
      { era: "1881–1936",
        place: "Born at Shaoxing (pin: Lu Xun's former residence); later lived in Beijing and Shanghai",
        more: "Pen name of Zhou Shuren, who abandoned medical studies in Japan to 'cure the spirit' of China through literature. A leader of the May Fourth / New Culture Movement, he wrote in vernacular Chinese (baihua) and attacked Confucian tradition and national apathy. Mao called him the 'chief commander of China's cultural revolution'.",
        books: [
          { t: "A Madman's Diary (Kuangren Riji)", y: "1918", lang: "Chinese (vernacular)", sum: "First major story in modern vernacular Chinese. A man becomes convinced that everyone around him, and Chinese history itself, is 'cannibalistic' — an allegory of how Confucian tradition devours individuals. Ends 'Save the children...'", key: "Baihua; May Fourth; Confucian society as cannibalism" },
          { t: "The True Story of Ah Q", y: "1921–22 (in Call to Arms, 1923)", lang: "Chinese", sum: "Satire on a village labourer who turns every humiliation into an imagined 'spiritual victory'. Ah Q stands for the self-deception of Chinese society around the 1911 Revolution, which changed rulers but not mentalities.", key: "'Spiritual victory'; critique of 1911 Revolution" }
        ] } ],
    ["Dogen", 36.0553, 136.3553, "Eihei-ji, Echizen (Fukui, Japan)", "Founder of Soto Zen in Japan; Shobogenzo; just sitting", "japan",
      { era: "1200–1253",
        place: "Founded the Eihei-ji monastery in Echizen in 1244 (pin); born in Kyoto",
        idea: "Practice and enlightenment are one: shikantaza ('just sitting' zazen) is not a means to awakening but its very expression; all beings are Buddha-nature and existence is time (uji).",
        more: "Dogen Zenji travelled to Song China (1223–27), studied Caodong (Soto) Chan under Rujing and brought it to Japan. Soto is now one of Japan's two main Zen schools. He is regarded as one of Japan's most original philosophers, writing in Japanese rather than Chinese.",
        books: [
          { t: "Shobogenzo (Treasury of the True Dharma Eye)", y: "1231–1253", lang: "Japanese", sum: "A collection of about 95 fascicles on zazen, Buddha-nature, being-time (uji), monastic practice and koans. It argues that practice and realisation are inseparable and that impermanence itself is Buddha-nature.", key: "Shikantaza; uji (being-time); practice = enlightenment" }
        ] } ],
    ["Murasaki Shikibu", 35.0116, 135.7681, "Heian-kyo (Kyoto), Japan", "Lady-in-waiting; The Tale of Genji, early novel", "japan",
      { era: "c. 973–c. 1014 (death date uncertain)",
        place: "Lady-in-waiting to Empress Shoshi at the Heian imperial court, Kyoto (pin)",
        more: "Her real name is unknown; 'Murasaki' comes from a heroine of her tale and 'Shikibu' from her father's ministry. She wrote in kana (Japanese script), then associated with women. The Tale of Genji is often called the world's first novel and is a key text of Heian court culture and the aesthetic of mono no aware.",
        books: [
          { t: "The Tale of Genji (Genji Monogatari)", y: "Early 11th c. (c. 1000–1012)", lang: "Japanese (kana)", sum: "Fifty-four chapters following the loves and political fortunes of the 'Shining Prince' Genji and his descendants at the Heian court. Its psychological depth and sense of impermanence make it a landmark of world literature.", key: "Mono no aware; Heian court; 'first novel'" },
          { t: "The Diary of Lady Murasaki", y: "c. 1008–1010", lang: "Japanese", sum: "Diary-memoir of her service at court, including the birth of Empress Shoshi's son, with sharp sketches of rival writers such as Sei Shonagon.", key: "Heian court life; nikki literature" }
        ] } ],
    ["Matsuo Basho", 35.6810, 139.7960, "Fukagawa, Edo (Tokyo)", "Master of haiku; Narrow Road to the Deep North", "japan",
      { era: "1644–1694",
        place: "Lived at his Basho-an hut in Fukagawa, Edo (pin), the base for his journeys; born at Iga-Ueno",
        more: "Edo-period poet who raised the hokku/haikai into a serious art infused with Zen and Daoist sensibility (sabi, karumi). His travel journals mix prose and haiku (haibun). Famous haiku: the old pond and the frog's splash. Useful for essay quotes on nature and simplicity.",
        books: [
          { t: "Oku no Hosomichi (The Narrow Road to the Deep North)", y: "Journey 1689; published 1702", lang: "Japanese", sum: "Travel diary of Basho's 150-day walk with his disciple Sora through northern Honshu, combining prose and haiku about places, history and impermanence. A classic of Japanese literature.", key: "Haibun; sabi; travel journal; impermanence" }
        ] } ],
    ["Fukuzawa Yukichi", 35.6490, 139.7425, "Keio Gijuku, Mita, Tokyo", "Meiji modernist; founder of Keio; independence & learning", "japan",
      { era: "1835–1901",
        place: "Founded Keio Gijuku (now Keio University) in 1858; pin at its Mita campus, Tokyo",
        idea: "National independence depends on the personal independence of citizens, gained through practical Western learning; 'Heaven does not create one man above another.'",
        more: "Samurai-born scholar of Dutch and English who travelled to the USA and Europe (1860–67) and popularised Western civilisation in Meiji Japan. He founded the newspaper Jiji Shinpo. Linked (controversially) to the 'Leaving Asia' (Datsu-A) editorial of 1885. Pictured on the 10,000-yen note (1984–2024).",
        books: [
          { t: "An Encouragement of Learning (Gakumon no Susume)", y: "1872–1876", lang: "Japanese", sum: "Seventeen pamphlets arguing that all people are born equal and that status should depend on learning. It urged practical study (reading, arithmetic, science, economics) so that individuals and Japan could be independent. A best-seller of the Meiji era.", key: "'Heaven does not create one man above another'; jitsugaku" },
          { t: "An Outline of a Theory of Civilization (Bunmeiron no Gairyaku)", y: "1875", lang: "Japanese", sum: "Draws on Guizot and Buckle to rank civilisations as primitive, semi-civilised and civilised, arguing that Japan must adopt the spirit of Western civilisation to preserve its independence.", key: "Stages of civilisation; national independence" }
        ] } ],
    ["Nitobe Inazo", 39.7036, 141.1527, "Morioka, Iwate (birthplace)", "Bushido: The Soul of Japan; League of Nations official", "japan",
      { era: "1862–1933",
        place: "Born at Morioka (pin); studied at Sapporo Agricultural College; wrote Bushido in English while recuperating in Monterey, California",
        idea: "Bushido — the samurai code of rectitude, courage, benevolence, politeness, sincerity, honour and loyalty — is the moral foundation of Japan, comparable to European chivalry.",
        more: "Agricultural economist, educator and Quaker Christian who studied at Johns Hopkins and in Germany. He served as Under-Secretary-General of the League of Nations (1920–26) and helped settle the Aland Islands dispute. Pictured on the 5,000-yen note (1984–2004). He wanted to be 'a bridge across the Pacific'.",
        books: [
          { t: "Bushido: The Soul of Japan", y: "1899 (English, first published in the USA)", lang: "English", sum: "Explains to Western readers the ethics of the samurai — rectitude, courage, benevolence, politeness, veracity, honour, loyalty and self-control — tracing them to Buddhism, Shinto and Confucianism, and comparing them with chivalry and Christianity.", key: "Seven virtues of the samurai; chivalry comparison" }
        ] } ],
    ["Okakura Kakuzo", 35.7190, 139.7740, "Tokyo Fine Arts School, Ueno, Tokyo", "Pan-Asianist art critic; 'Asia is one'; friend of Tagore", "japan",
      { era: "1863–1913",
        place: "Co-founded and headed the Tokyo Fine Arts School at Ueno (pin); visited India 1901–02 and stayed with the Tagores in Calcutta",
        idea: "Asia is one: its civilisations share a spiritual unity of 'love for the Ultimate and Universal', which Japan has preserved and which must resist Western materialism.",
        more: "Also called Okakura Tenshin. With Ernest Fenollosa he revived traditional Japanese art (Nihonga). In India he met Vivekananda, Sister Nivedita and Rabindranath and Abanindranath Tagore, influencing the Bengal School of Art. Later curator of Asian art at the Museum of Fine Arts, Boston. Asked in GS1 culture and India–Japan relations.",
        books: [
          { t: "The Ideals of the East", y: "1903 (London; introduction by Sister Nivedita)", lang: "English", sum: "Written during his India visit, it opens 'Asia is one' and surveys Japanese art as a museum of Asian civilisation, inheriting Indian Buddhism and Chinese culture. A founding text of pan-Asianism.", key: "'Asia is one'; pan-Asianism; Bengal School link" },
          { t: "The Book of Tea", y: "1906 (New York)", lang: "English", sum: "A short essay presenting the tea ceremony (chado) and 'Teaism' — rooted in Daoism and Zen — as an aesthetic of simplicity, imperfection and harmony, while criticising Western views of Asia.", key: "Teaism; Zen; aesthetics of the imperfect" },
          { t: "The Awakening of Japan", y: "1904", lang: "English", sum: "Explains Japan's modernisation and its aims to Western readers around the time of the Russo-Japanese War.", key: "Meiji modernisation; Russo-Japanese War" }
        ] } ],
    ["Al-Kindi", 33.3152, 44.3661, "Baghdad, Abbasid Caliphate (House of Wisdom)", "'Philosopher of the Arabs'; first Islamic Aristotelian", "islam",
      { era: "c. 801–873",
        place: "Worked in Baghdad under the caliphs al-Ma'mun and al-Mu'tasim, linked with the House of Wisdom (pin); born at Kufa",
        idea: "Philosophy and revelation do not conflict: Greek philosophy is a path to truth wherever it comes from, and reason can prove the creation of the world and the oneness of God.",
        more: "Abu Yusuf al-Kindi, of the Arab Kinda tribe, supervised translations of Aristotle and Neoplatonists into Arabic and wrote some 260 treatises on philosophy, mathematics, optics, music, medicine and cryptography. His work on frequency analysis is the earliest known code-breaking method. He helped spread Indian numerals.",
        books: [
          { t: "On First Philosophy (Fi al-Falsafa al-Ula)", y: "9th c.", lang: "Arabic", sum: "His main metaphysical work, dedicated to Caliph al-Mu'tasim. It defends learning truth from foreign (Greek) sources, argues that the world had a beginning and cannot be eternal, and describes God as the True One.", key: "Falsafa; True One; creation in time" },
          { t: "Manuscript on Deciphering Cryptographic Messages", y: "9th c.", lang: "Arabic", sum: "Describes frequency analysis — counting how often letters occur — to break substitution ciphers; the earliest known work of cryptanalysis.", key: "Frequency analysis; cryptanalysis" }
        ] } ],
    ["Al-Khwarizmi", 33.3352, 44.3861, "House of Wisdom, Baghdad (born Khwarazm)", "Father of algebra; 'algorithm' from his name", "islam",
      { era: "c. 780–c. 850",
        place: "Scholar at the House of Wisdom (Bayt al-Hikma) in Baghdad under al-Ma'mun (pin, offset); born in Khwarazm (Khiva region, Uzbekistan)",
        more: "Muhammad ibn Musa al-Khwarizmi wrote the first systematic treatment of solving linear and quadratic equations. The word 'algebra' comes from al-jabr in his title, and 'algorithm' from the Latinised form of his name, Algoritmi. His arithmetic spread the Indian decimal place-value numerals to the Islamic world and Europe. He also revised Ptolemy's Geography.",
        books: [
          { t: "The Compendious Book on Calculation by Completion and Balancing (al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala)", y: "c. 820", lang: "Arabic", sum: "Solves linear and quadratic equations by the operations of al-jabr (restoring/completing) and al-muqabala (balancing), with geometric proofs and practical problems of inheritance, trade and land measurement.", key: "Al-jabr; quadratic equations; origin of 'algebra'" },
          { t: "On Indian Calculation (Latin: Algoritmi de numero Indorum)", y: "c. 825 (Arabic original lost)", lang: "Arabic", sum: "Explains the Hindu (Indian) decimal place-value system with zero and arithmetic operations; its 12th-c. Latin translation introduced 'Arabic numerals' to Europe.", key: "Hindu numerals; zero; 'algorithm'" },
          { t: "Book of the Description of the Earth (Kitab Surat al-Ard)", y: "833", lang: "Arabic", sum: "A revision of Ptolemy's Geography listing coordinates of over 2,400 places with corrected values, e.g. a shorter Mediterranean.", key: "Geographic coordinates; revision of Ptolemy" }
        ] } ],
    ["Al-Farabi", 33.5138, 36.2765, "Baghdad and Damascus (died Damascus)", "'Second Teacher' after Aristotle; The Virtuous City", "islam",
      { era: "c. 872–950/951",
        place: "Worked mainly in Baghdad, later at Aleppo and Damascus, where he died (pin: Damascus); born in Farab region (Central Asia)",
        idea: "The ideal 'virtuous city' is like a healthy body ruled by a philosopher-prophet whose intellect is united with the Active Intellect; happiness is the aim of political community.",
        more: "Abu Nasr al-Farabi was called 'the Second Teacher' (al-Mu'allim al-Thani), Aristotle being the first. He founded Islamic Neoplatonic-Aristotelian philosophy, logic and political philosophy, combining Plato's Republic with Islam, and wrote a major treatise on music. Ibn Sina said he understood Aristotle's Metaphysics only through al-Farabi.",
        books: [
          { t: "The Opinions of the People of the Virtuous City (Ara Ahl al-Madina al-Fadila)", y: "c. 942–943", lang: "Arabic", sum: "Describes the emanation of the cosmos from the First Cause and the ideal city ruled by a philosopher-prophet, contrasting it with ignorant, wicked and errant cities organised around wealth, pleasure or honour.", key: "Virtuous city; philosopher-king; Active Intellect" },
          { t: "Enumeration of the Sciences (Ihsa al-Ulum)", y: "10th c.", lang: "Arabic", sum: "A classification of knowledge into language, logic, mathematics, physics, metaphysics, politics and jurisprudence; influential in Latin Europe.", key: "Classification of sciences" },
          { t: "Great Book of Music (Kitab al-Musiqa al-Kabir)", y: "10th c.", lang: "Arabic", sum: "A comprehensive theoretical treatise on music, its scales, intervals and instruments, and its effects on the soul.", key: "Music theory; intervals" }
        ] } ],
    ["Ibn Sina (Avicenna)", 34.7984, 48.5146, "Hamadan, Iran (tomb; born near Bukhara)", "Polymath physician-philosopher; Canon of Medicine; 'floating man'", "islam",
      { era: "980–1037",
        place: "Born at Afshana near Bukhara; worked at Hamadan and Isfahan; buried at Hamadan (pin: Avicenna Mausoleum)",
        idea: "Distinction of essence and existence: God is the Necessary Existent whose essence is existence; the 'floating man' thought experiment shows the soul knows itself independently of the body.",
        more: "Abu Ali al-Husayn ibn Sina served as physician and vizier to Samanid and Buyid rulers. His Canon of Medicine was a standard medical textbook in Europe and the Islamic world until the 17th century. His synthesis of Aristotle and Neoplatonism was attacked by al-Ghazali and shaped Aquinas and Latin scholasticism.",
        books: [
          { t: "The Canon of Medicine (al-Qanun fi al-Tibb)", y: "Completed 1025", lang: "Arabic", sum: "Five-book medical encyclopaedia covering physiology, simple drugs, diseases of each organ, systemic diseases and compound drugs. It described contagion, quarantine and clinical trials of drugs, and was taught in European universities for six centuries.", key: "Medical encyclopaedia; contagion; quarantine" },
          { t: "The Book of Healing (Kitab al-Shifa)", y: "c. 1014–1027", lang: "Arabic", sum: "A vast philosophical and scientific encyclopaedia (of the soul's 'healing' from ignorance) covering logic, natural sciences, psychology, mathematics, music and metaphysics; includes the floating man argument and the Necessary Existent proof.", key: "Necessary Existent; essence-existence; floating man" }
        ] } ],
    ["Al-Ghazali", 33.2952, 44.3461, "Nizamiyya madrasa, Baghdad (born Tus, Iran)", "'Proof of Islam'; critic of philosophers; Sufi synthesis", "islam",
      { era: "1058–1111",
        place: "Professor at the Nizamiyya madrasa in Baghdad 1091–95 (pin, offset); born and died at Tus, Khorasan",
        idea: "Reason alone cannot prove metaphysical truths; philosophers err on the eternity of the world, God's knowledge of particulars and bodily resurrection. Causation is God's habit, not necessity; certainty comes from Sufi experience.",
        more: "Abu Hamid al-Ghazali, called Hujjat al-Islam, left his prestigious chair in 1095 after a spiritual crisis to live as a Sufi. He reconciled Sufism with orthodox Sunni law and theology. His critique of causality anticipated Hume. Ibn Rushd replied to him.",
        books: [
          { t: "The Incoherence of the Philosophers (Tahafut al-Falasifa)", y: "1095", lang: "Arabic", sum: "Attacks twenty doctrines of al-Farabi and Ibn Sina, declaring three heretical (eternity of the world, God not knowing particulars, denial of bodily resurrection). Argues that the link between cause and effect is not necessary but created by God.", key: "Critique of falsafa; occasionalism; causality" },
          { t: "The Revival of the Religious Sciences (Ihya Ulum al-Din)", y: "c. 1096–1102", lang: "Arabic", sum: "Forty books integrating worship, social conduct, the vices that destroy and the virtues that save; it unites Islamic law with Sufi inner spirituality and became one of the most read Islamic texts.", key: "Sufism + Sharia; ethics of the heart" },
          { t: "Deliverance from Error (al-Munqidh min al-Dalal)", y: "c. 1100–1108", lang: "Arabic", sum: "Spiritual autobiography describing his sceptical crisis and his examination of theology, philosophy, Ismaili teaching and Sufism, concluding that Sufism gives certainty.", key: "Scepticism; autobiography; mystical certainty" }
        ] } ],
    ["Ibn Rushd (Averroes)", 37.8882, -4.7794, "Córdoba, al-Andalus (Spain)", "'The Commentator' on Aristotle; reason and faith in harmony", "islam",
      { era: "1126–1198",
        place: "Born at Córdoba, where he was qadi (judge) (pin); also physician at the Almohad court in Marrakesh, where he died",
        idea: "Truth does not contradict truth: philosophy and religion lead to the same truth; scripture should be interpreted allegorically where it conflicts with demonstration, and the Qur'an obliges the learned to philosophise.",
        more: "Abu al-Walid ibn Rushd wrote commentaries on almost all of Aristotle, earning the Latin title 'The Commentator'. Latin 'Averroism' influenced Aquinas and the rise of secular thought in European universities. He was briefly exiled in 1195 amid conservative opposition. Also a jurist (Bidayat al-Mujtahid) and physician.",
        books: [
          { t: "The Incoherence of the Incoherence (Tahafut al-Tahafut)", y: "c. 1180", lang: "Arabic", sum: "Point-by-point reply to al-Ghazali's Incoherence of the Philosophers, defending Aristotelian philosophy, the necessity of causation and the eternity of the world, and accusing al-Ghazali of confused reasoning.", key: "Defence of philosophy; causality; reply to Ghazali" },
          { t: "The Decisive Treatise (Fasl al-Maqal)", y: "c. 1179", lang: "Arabic", sum: "A legal-philosophical argument that Islamic law commands philosophical study for those capable of it, and that demonstrative truth and revelation cannot conflict.", key: "Harmony of reason and revelation; allegorical reading" },
          { t: "Commentaries on Aristotle", y: "c. 1169–1195", lang: "Arabic", sum: "Short, middle and long commentaries on Aristotle's works (Metaphysics, Physics, De Anima, etc.), translated into Latin and Hebrew and central to medieval European philosophy.", key: "'The Commentator'; Latin Averroism" }
        ] } ],
    ["Ibn Khaldun", 36.8065, 10.1815, "Tunis (birthplace); Muqaddimah written at Qal'at Ibn Salama, Algeria", "Muqaddimah; asabiyya; cyclical rise and fall of dynasties", "islam",
      { era: "1332–1406",
        place: "Born at Tunis (pin); wrote the Muqaddimah in 1377 in retreat at Qal'at Ibn Salama (Algeria); later judge in Cairo",
        idea: "History follows cycles: desert peoples with strong asabiyya (group solidarity) conquer cities, found dynasties, then grow soft with luxury and decline within about three to four generations. Climate and environment shape human character and society.",
        more: "Arab statesman and scholar of North Africa and Granada who met Timur outside Damascus (1401). Regarded as a founder of sociology, historiography and economics; he analysed taxation (the Laffer-curve-like idea that high taxes reduce revenue), labour and division of labour. His climatic zones theory is a precursor of environmental determinism, relevant to geography optional.",
        books: [
          { t: "The Muqaddimah (Prolegomena)", y: "1377", lang: "Arabic", sum: "Introduction to his universal history setting out a science of human society ('ilm al-umran): critical evaluation of historical reports, influence of climate on people, nomadic versus sedentary life, asabiyya, the life-cycle of states, economics, crafts and sciences.", key: "Asabiyya; 'ilm al-umran; dynastic cycle; climate zones" },
          { t: "Kitab al-Ibar (Book of Lessons)", y: "c. 1377–1406", lang: "Arabic", sum: "His universal history of Arabs, Persians and Berbers, of which the Muqaddimah is the first volume; especially valuable for the history of the Maghreb.", key: "Universal history; Berber dynasties" }
        ] } ],
    ["Ferdowsi", 36.4667, 59.5167, "Tus, Khorasan (Iran)", "Author of the Shahnameh, national epic of Iran", "persian",
      { era: "c. 940–1019/1025",
        place: "Born, lived and buried at Tus near Mashhad (pin: Tomb of Ferdowsi)",
        more: "Abul-Qasim Ferdowsi (Firdausi) spent over 30 years writing the Shahnameh, reviving Persian (Farsi) with few Arabic words. Legend says Sultan Mahmud of Ghazni, to whom he presented it, underpaid him. The epic shaped Persian identity and Indo-Persian culture under the Mughals.",
        books: [
          { t: "Shahnameh (Book of Kings)", y: "Completed c. 1010", lang: "Persian", sum: "About 50,000 couplets narrating the history of Iran from the mythical first kings through the heroic age of Rostam and Sohrab to the Arab conquest of the Sasanian empire (651). One of the longest epics by a single poet.", key: "Rostam and Sohrab; Persian revival; Mahmud of Ghazni" }
        ] } ],
    ["Omar Khayyam", 36.2133, 58.7958, "Nishapur, Khorasan (Iran)", "Mathematician-astronomer; Rubaiyat; Jalali calendar", "persian",
      { era: "1048–1131",
        place: "Born and buried at Nishapur (pin); worked at the Seljuk observatory at Isfahan for Malik Shah",
        idea: "His quatrains express scepticism about certainty and the afterlife, the brevity of life and the wisdom of enjoying the present moment.",
        more: "Ghiyath al-Din Omar Khayyam classified cubic equations and solved them geometrically with conic sections. He led the calendar reform that produced the Jalali calendar (1079), more accurate than the Gregorian. Worldwide fame came from Edward FitzGerald's free English version of the Rubaiyat (1859).",
        books: [
          { t: "Rubaiyat (Quatrains)", y: "11th–12th c.; FitzGerald's English version 1859", lang: "Persian", sum: "Four-line poems attributed to Khayyam (authenticity of many is debated) on fate, doubt, wine, love and transience. FitzGerald's translation made it one of the most popular poems in English.", key: "Carpe diem; 'a jug of wine, a loaf of bread'; FitzGerald" },
          { t: "Treatise on Demonstration of Problems of Algebra", y: "1070", lang: "Arabic", sum: "Systematically classifies cubic equations into types and solves them by intersecting conic sections, a major step in algebra before Descartes.", key: "Cubic equations; conic sections" }
        ] } ],
    ["Rumi", 37.8715, 32.5047, "Konya, Sultanate of Rum (Turkey)", "Sufi mystic poet; Masnavi; whirling dervishes", "persian",
      { era: "1207–1273",
        place: "Taught and is buried at Konya (pin: Mevlana Museum); born at Balkh or Vakhsh (Central Asia)",
        idea: "The soul longs to return to God like the reed flute cut from its reed-bed; love is the path that dissolves the ego and unites the lover with the Beloved.",
        more: "Jalal al-Din Muhammad Rumi (Mawlana) was a jurist and preacher transformed by his meeting with the wandering dervish Shams of Tabriz (1244). His followers founded the Mevlevi order, known for the sema (whirling) ceremony. Among the most widely read poets in the world; frequently quoted in essays.",
        books: [
          { t: "Masnavi-ye Ma'navi (Spiritual Couplets)", y: "c. 1258–1273", lang: "Persian", sum: "Six books of about 25,000 couplets mixing stories, Qur'anic commentary and Sufi teaching. It opens with the 'Song of the Reed' and has been called 'the Qur'an in Persian'.", key: "Song of the Reed; divine love; Sufism" },
          { t: "Divan-e Shams-e Tabrizi", y: "c. 1244–1273", lang: "Persian", sum: "Collection of ecstatic ghazals and quatrains written in the name of his spiritual master Shams of Tabriz, expressing longing, union and divine love.", key: "Ghazals; Shams of Tabriz" },
          { t: "Fihi Ma Fihi (It Is What It Is)", y: "13th c.", lang: "Persian", sum: "Prose record of Rumi's talks and discourses to his disciples, explaining Sufi ideas in simple language.", key: "Discourses; prose" }
        ] } ],
    ["Saadi", 29.6230, 52.5800, "Shiraz, Iran (Saadieh tomb)", "Gulistan & Bustan; 'Bani Adam' — humanity as one body", "persian",
      { era: "c. 1210–1291/92",
        place: "Born, returned to and buried at Shiraz (pin: Saadieh); travelled for decades through Iraq, Syria and the Hejaz",
        idea: "All human beings are members of one body created from one essence; when one suffers, the others cannot rest — a plea for compassion and justice.",
        more: "Abu Muhammad Muslih al-Din Saadi Shirazi studied at the Nizamiyya in Baghdad. His moral tales mix humour and practical wisdom and were textbooks of Persian in Mughal India. His 'Bani Adam' verse appears on a carpet at UN headquarters in New York and is quoted in speeches on universal brotherhood.",
        books: [
          { t: "Gulistan (The Rose Garden)", y: "1258", lang: "Persian", sum: "Eight chapters of prose anecdotes mixed with verse on kings, dervishes, contentment, love, youth and old age, education and social conduct. Contains the 'Bani Adam' poem.", key: "Bani Adam; moral anecdotes; prosimetrum" },
          { t: "Bustan (The Orchard)", y: "1257", lang: "Persian", sum: "Didactic poem in ten chapters on justice, good government, benevolence, love, humility, contentment and gratitude, illustrated with stories.", key: "Justice; benevolence; didactic verse" }
        ] } ],
    ["Hafez", 29.6255, 52.5583, "Shiraz, Iran (Hafezieh tomb)", "Master of the Persian ghazal; Divan", "persian",
      { era: "c. 1325–1390",
        place: "Lived and is buried at Shiraz (pin: Hafezieh)",
        more: "Khwaja Shams al-Din Muhammad Hafez ('one who has memorised the Qur'an') wrote ghazals blending earthly love, wine and Sufi mysticism, and mocking religious hypocrisy. Iranians use his Divan for divination (fal-e Hafez). Goethe's West-Eastern Divan (1819) was inspired by him; Iqbal and Ghalib admired him.",
        books: [
          { t: "Divan of Hafez", y: "Compiled after 1390", lang: "Persian", sum: "About 500 ghazals plus other poems, layered in meaning between human and divine love; celebrates the 'rend' (free-spirited lover) and criticises hypocritical clerics. Considered the summit of Persian lyric poetry.", key: "Ghazal; rend; fal-e Hafez; Goethe's Divan" }
        ] } ],
    ["Kahlil Gibran", 34.2510, 36.0110, "Bsharri, Mount Lebanon (birthplace & tomb)", "Lebanese-American poet; The Prophet", "modern",
      { era: "1883–1931",
        place: "Born at Bsharri and buried at the Gibran Museum there (pin); lived and wrote in Boston and New York",
        more: "Gibran Khalil Gibran emigrated to Boston in 1895 and was a leading figure of the Arab-American Mahjar literary movement (Pen League, 1920). He wrote in Arabic and English and also painted. The Prophet has been translated into over 100 languages and is among the best-selling books of poetry.",
        books: [
          { t: "The Prophet", y: "1923", lang: "English", sum: "Twenty-six prose-poems in which the prophet Almustafa, before sailing home, speaks to the people of Orphalese on love, marriage, children, work, freedom, reason and passion, pain, death and more.", key: "'Your children are not your children'; Almustafa" },
          { t: "The Broken Wings", y: "1912", lang: "Arabic", sum: "Poetic novella of a young man's tragic love for Selma, forced to marry a bishop's nephew; a critique of Lebanese social and clerical customs.", key: "Arranged marriage; critique of clergy" }
        ] } ],
    ["José Rizal", 14.5831, 120.9794, "Manila (Rizal Park, site of execution)", "Philippine national hero; Noli Me Tángere", "modern",
      { era: "1861–1896",
        place: "Executed by Spanish authorities at Bagumbayan, Manila, now Rizal Park (pin); born at Calamba, Laguna",
        more: "Ophthalmologist, polyglot and leader of the reformist Propaganda Movement while studying in Spain and Germany. His novels exposed friar abuse and colonial injustice and inspired the Katipunan revolution (1896), though he favoured peaceful reform. His execution on 30 December 1896 made him a martyr of Asian anti-colonial nationalism.",
        books: [
          { t: "Noli Me Tángere (Touch Me Not)", y: "1887 (Berlin)", lang: "Spanish", sum: "Novel of Crisostomo Ibarra, who returns from Europe to reform his town but is destroyed by corrupt friars and colonial officials. It portrays the 'social cancer' of Spanish rule in the Philippines.", key: "Social cancer; friars; Ibarra" },
          { t: "El Filibusterismo (The Reign of Greed)", y: "1891 (Ghent)", lang: "Spanish", sum: "Darker sequel in which Ibarra returns as the jeweller Simoun, plotting violent revolution; it questions whether revolution without moral reform can succeed.", key: "Simoun; revolution vs reform" }
        ] } ]
  ]
});

GEO.add({
  id: 'bk-science', group: 'bk-w', title: 'Science & Geographical Thought', bn: 'বিজ্ঞান ও ভৌগোলিক চিন্তাধারা', icon: '🔭', world: true,
  intro: "ইউক্লিড-টলেমি থেকে নিউটন, ডারউইন, আইনস্টাইন এবং হামবোল্ট, রিটার, রাটজেল, ভিদাল দ্য লা ব্লাশ, ক্রিস্টালার-সহ ভূগোলের মডেল ও পরিবেশ-চিন্তার প্রধান বই। পিনে ক্লিক করুন → লেখকের বই → সারাংশ, মডেল ও মূল শব্দ দেখুন।",
  types: {
    ancient: ['Ancient & medieval science / geography', '#8d6e63'],
    rev: ['Scientific Revolution', '#1565c0'],
    life: ['Life & earth sciences', '#2e7d32'],
    physics: ['Modern science & ideas', '#6a1b9a'],
    geo: ['Geographical thought (schools & philosophy)', '#e65100'],
    model: ['Location, urban & population models', '#c62828'],
    env: ['Environment & sustainability', '#00897b']
  },
  pts: [
    ["Euclid", 31.2001, 29.9187, "Alexandria, Ptolemaic Egypt", "'Father of geometry'; Elements", "ancient",
      { era: "fl. c. 300 BCE",
        place: "Taught at Alexandria under Ptolemy I, probably linked to the Museum/Library (pin)",
        more: "Almost nothing is known of Euclid's life. His Elements organised Greek mathematics into an axiomatic system — definitions, postulates, theorems and proofs — and was the main geometry textbook for over 2,000 years. Euclidean geometry held until non-Euclidean geometries of the 19th century.",
        books: [
          { t: "Elements (Stoicheia)", y: "c. 300 BCE", lang: "Ancient Greek", sum: "Thirteen books deriving plane and solid geometry and number theory from five postulates: Pythagoras' theorem, the infinitude of primes, the Euclidean algorithm and the five regular solids. Second only to the Bible in number of editions.", key: "Axiomatic method; five postulates; parallel postulate" },
          { t: "Optics", y: "c. 300 BCE", lang: "Ancient Greek", sum: "Earliest surviving Greek treatise on perspective, treating vision geometrically as straight rays from the eye.", key: "Geometrical optics; perspective" }
        ] } ],
    ["Archimedes", 37.0755, 15.2866, "Syracuse, Sicily", "Buoyancy principle, lever, value of pi; 'Eureka!'", "ancient",
      { era: "c. 287–212 BCE",
        place: "Lived and died at Syracuse (pin); killed by a Roman soldier during the siege of 212 BCE",
        more: "Greatest mathematician of antiquity, who corresponded with Eratosthenes and others at Alexandria. He anticipated integral calculus by the method of exhaustion, estimated pi between 3 10/71 and 3 1/7, explained the lever ('Give me a place to stand and I will move the Earth') and designed war machines and the Archimedes screw.",
        books: [
          { t: "On Floating Bodies", y: "c. 3rd c. BCE", lang: "Ancient Greek", sum: "Founds hydrostatics: a body immersed in a fluid is buoyed up by a force equal to the weight of fluid displaced (Archimedes' principle); also studies the stability of floating shapes.", key: "Archimedes' principle; buoyancy" },
          { t: "Measurement of a Circle", y: "c. 3rd c. BCE", lang: "Ancient Greek", sum: "Uses inscribed and circumscribed 96-sided polygons to show that pi lies between 3 10/71 and 3 1/7.", key: "Value of pi; method of exhaustion" },
          { t: "The Sand Reckoner", y: "c. 3rd c. BCE", lang: "Ancient Greek", sum: "Estimates the number of grains of sand to fill the universe, inventing a notation for very large numbers and reporting Aristarchus' heliocentric hypothesis.", key: "Large numbers; Aristarchus" }
        ] } ],
    ["Eratosthenes", 31.2201, 29.9387, "Library of Alexandria (born Cyrene)", "'Father of geography'; measured Earth's circumference", "ancient",
      { era: "c. 276–c. 194 BCE",
        place: "Chief librarian of the Library of Alexandria (pin, offset); born at Cyrene (Libya)",
        idea: "Earth's circumference can be measured from the difference in noon sun angle between Syene (Aswan), where the sun is overhead at the summer solstice, and Alexandria (about 7.2 degrees, i.e. 1/50 of a circle).",
        more: "He coined the word 'geographia', drew a world map with parallels and meridians, and estimated the circumference at 250,000 stadia (close to the true value, depending on the stade used). He also devised the 'sieve' for primes and calculated the tilt of Earth's axis. A favourite geography-optional question on the history of geographical thought.",
        books: [
          { t: "Geographika", y: "c. 3rd c. BCE (lost; known through Strabo)", lang: "Ancient Greek", sum: "Three books on mathematical and descriptive geography: the history of the subject, the shape and size of the Earth, and a gridded map of the inhabited world (oikoumene) divided into sphragides (regions).", key: "Coined 'geography'; latitude-longitude grid" },
          { t: "On the Measurement of the Earth", y: "c. 240 BCE (lost)", lang: "Ancient Greek", sum: "Described his Syene-Alexandria method for computing Earth's circumference; known from Cleomedes and other later writers.", key: "250,000 stadia; Syene-Alexandria" }
        ] } ],
    ["Ptolemy", 31.1801, 29.8987, "Alexandria, Roman Egypt", "Almagest (geocentric) and Geographia (coordinates)", "ancient",
      { era: "c. 100–c. 170 CE",
        place: "Observed and wrote at Alexandria (pin, offset)",
        idea: "Earth is a stationary sphere at the centre of the universe; planetary motions are explained by epicycles, deferents and equants. Places can be mapped by latitude and longitude on a projection.",
        more: "Claudius Ptolemaeus summed up Greek astronomy and geography. His geocentric model ruled until Copernicus, and his Geographia, rediscovered in Europe c. 1400, shaped Renaissance maps — including the underestimate of Earth's size that encouraged Columbus. He mapped India and Taprobane (Sri Lanka).",
        books: [
          { t: "Almagest (Mathematike Syntaxis)", y: "c. 150 CE", lang: "Ancient Greek", sum: "Thirteen books of mathematical astronomy presenting the geocentric system with epicycles and equants, a star catalogue of 1,022 stars and tables for predicting planetary positions and eclipses. Known by its Arabic name al-Majisti.", key: "Geocentrism; epicycles; equant" },
          { t: "Geographia (Geography)", y: "c. 150 CE", lang: "Ancient Greek", sum: "A manual of map-making listing latitude and longitude for about 8,000 places of the known world, with instructions for two map projections. It placed the prime meridian at the Fortunate (Canary) Islands.", key: "Coordinates; projections; prime meridian at Canaries" },
          { t: "Tetrabiblos", y: "c. 2nd c. CE", lang: "Ancient Greek", sum: "Treatise on astrology, including a climatic-environmental explanation of national characters by their latitude.", key: "Astrology; climate and character" }
        ] } ],
    ["Strabo", 40.6499, 35.8353, "Amaseia, Pontus (Amasya, Turkey)", "Geographica — encyclopaedia of the Roman world; regional geography", "ancient",
      { era: "c. 64 BCE–c. 24 CE",
        place: "Born and probably wrote at Amaseia in Pontus (pin); worked also in Rome and Alexandria",
        more: "Greek geographer-historian who travelled from Armenia to Etruria and up the Nile. His descriptive, regional approach (chorography) contrasted with Eratosthenes' and Ptolemy's mathematical geography and makes him a forerunner of regional geography. His Geographica preserves earlier works including Eratosthenes and Megasthenes' account of India.",
        books: [
          { t: "Geographica", y: "c. 7 BCE–c. 23 CE", lang: "Ancient Greek", sum: "Seventeen books: two of theory and criticism of earlier geographers, then regional descriptions of Iberia, Gaul, Italy, Greece, Asia Minor, the Middle East, India (Book 15) and Egypt-Libya, with history, peoples and products.", key: "Chorography; regional geography; India in Book 15" }
        ] } ],
    ["Herodotus", 37.0344, 27.4305, "Halicarnassus (Bodrum, Turkey)", "'Father of history'; Histories with geography of peoples", "ancient",
      { era: "c. 484–c. 425 BCE",
        place: "Born at Halicarnassus (pin); travelled to Egypt, Babylon and the Black Sea; later lived at Thurii (Italy)",
        more: "His inquiry (historia) into the Greco-Persian Wars combined history, ethnography and geography: the Nile floods, the Scythians, and the gold-digging ants of India. Cicero called him the 'father of history'; geographers treat him as an early descriptive geographer and environmental thinker ('Egypt is the gift of the Nile').",
        books: [
          { t: "The Histories", y: "c. 430 BCE", lang: "Ancient Greek (Ionic)", sum: "Nine books tracing the rise of the Persian Empire and its wars with the Greeks (to 479 BCE), with long digressions on the lands, customs and environments of Egypt, Scythia, Libya, Persia and India.", key: "'Egypt is the gift of the Nile'; Greco-Persian Wars" }
        ] } ],
    ["Hippocrates", 36.8933, 27.2877, "Island of Kos, Greece", "'Father of medicine'; Airs, Waters, Places — environment shapes people", "ancient",
      { era: "c. 460–c. 370 BCE",
        place: "Born and taught at the medical school of Kos (pin)",
        idea: "Disease has natural, not divine, causes; climate, water, soil and seasons shape bodily health and even the character of peoples — an early form of environmental determinism.",
        more: "The Hippocratic Corpus of about 60 texts was written by him and his followers. It separated medicine from religion and introduced clinical observation and the humoral theory. The Hippocratic Oath remains a model of medical ethics (GS4). Airs, Waters, Places is cited as the first statement of environmental determinism in geographical thought.",
        books: [
          { t: "Airs, Waters, Places", y: "c. late 5th c. BCE (Hippocratic Corpus)", lang: "Ancient Greek", sum: "Advises physicians to study a town's winds, water supply, soil and seasons, and contrasts Asians and Europeans, attributing differences in physique and temperament to climate and to institutions.", key: "Environmental determinism; climate and health" },
          { t: "The Hippocratic Oath", y: "c. 5th–4th c. BCE", lang: "Ancient Greek", sum: "Oath binding physicians to serve patients' benefit, avoid harm, keep confidentiality and honour teachers — basis of medical ethics.", key: "'First, do no harm' tradition; confidentiality" }
        ] } ],
    ["Al-Idrisi", 38.1157, 13.3615, "Palermo, Norman Kingdom of Sicily", "Tabula Rogeriana world map (1154) for Roger II", "ancient",
      { era: "1100–1165",
        place: "Worked at the court of King Roger II of Sicily in Palermo (pin); born at Ceuta",
        more: "Muhammad al-Idrisi, educated at Córdoba, spent some 15 years compiling travellers' reports and existing maps for Roger II. His world map (with south at the top) was one of the most accurate of the Middle Ages and was copied for three centuries. It shows India, China and the source of the Nile in mountains.",
        books: [
          { t: "Nuzhat al-Mushtaq (Tabula Rogeriana / Book of Roger)", y: "1154", lang: "Arabic", sum: "Geographical treatise with a circular world map and 70 sectional maps dividing the known world into seven climate zones and ten sections each, describing cities, routes, peoples and products from Europe to China.", key: "Seven climes; south-up map; Roger II" }
        ] } ],
    ["Nicolaus Copernicus", 54.3573, 19.6814, "Frombork (Frauenburg), Royal Prussia, Poland", "Heliocentric theory; De revolutionibus", "rev",
      { era: "1473–1543",
        place: "Canon of Frombork Cathedral, where he observed and wrote and is buried (pin); born at Toruń",
        idea: "The Sun, not the Earth, is near the centre of the universe; Earth rotates daily on its axis and revolves yearly around the Sun, explaining the retrograde motion of planets.",
        more: "Polish canon, physician and economist (Copernicus-Gresham law: bad money drives out good). He delayed publishing his heliocentric system; it appeared as he died in 1543. The 'Copernican Revolution' began the Scientific Revolution, though he kept circular orbits and epicycles. Thomas Kuhn used it as his model of a paradigm shift.",
        books: [
          { t: "De revolutionibus orbium coelestium (On the Revolutions of the Heavenly Spheres)", y: "1543 (Nuremberg)", lang: "Latin", sum: "Six books presenting a Sun-centred cosmos with Earth's triple motion (daily rotation, yearly revolution, axial wobble) and planetary tables. It placed the planets in their correct order by distance from the Sun.", key: "Heliocentrism; Copernican Revolution" },
          { t: "Commentariolus", y: "c. 1514 (circulated in manuscript)", lang: "Latin", sum: "Short outline of his heliocentric hypothesis in seven axioms, circulated privately among astronomers.", key: "Seven axioms; first sketch" }
        ] } ],
    ["Galileo Galilei", 45.4064, 11.8768, "University of Padua, Republic of Venice", "Telescopic astronomy; laws of motion; trial of 1633", "rev",
      { era: "1564–1642",
        place: "Professor at Padua 1592–1610, where he built his telescope and made his discoveries (pin); born at Pisa, died at Arcetri near Florence",
        idea: "The book of nature is written in the language of mathematics; knowledge comes from experiment and observation, not authority. Bodies fall with uniform acceleration regardless of weight (ignoring air).",
        more: "Discovered Jupiter's four largest moons, the phases of Venus, sunspots and lunar mountains (1609–10), supporting Copernicus. Tried by the Roman Inquisition in 1633, forced to recant and kept under house arrest; the Church formally acknowledged its error in 1992. Called the 'father of modern science'.",
        books: [
          { t: "Sidereus Nuncius (The Starry Messenger)", y: "1610", lang: "Latin", sum: "Reports his first telescopic observations: mountains and craters on the Moon, countless new stars in the Milky Way and four moons orbiting Jupiter, evidence against the Earth-centred cosmos.", key: "Galilean moons; Moon's mountains; telescope" },
          { t: "Dialogue Concerning the Two Chief World Systems", y: "1632", lang: "Italian", sum: "A dialogue between Salviati (Copernican), Simplicio (Aristotelian) and Sagredo comparing the Ptolemaic and Copernican systems; it led to his trial in 1633.", key: "Heliocentrism; Inquisition trial 1633" },
          { t: "Two New Sciences", y: "1638 (Leiden)", lang: "Italian", sum: "Founds kinematics (uniform acceleration, projectile parabolas) and the strength of materials; written under house arrest.", key: "Free fall; projectile motion; inertia" }
        ] } ],
    ["Johannes Kepler", 50.0875, 14.4213, "Prague, imperial court of Rudolf II", "Three laws of planetary motion", "rev",
      { era: "1571–1630",
        place: "Imperial Mathematician at Prague 1601–12, using Tycho Brahe's data (pin); born at Weil der Stadt",
        idea: "Planets move in ellipses with the Sun at one focus; a line from Sun to planet sweeps equal areas in equal times; the square of the orbital period is proportional to the cube of mean distance.",
        more: "Assistant and successor of Tycho Brahe, Kepler replaced circles with ellipses, transforming the Copernican system into physical astronomy that Newton later explained by gravity. He also founded modern optics and explained how telescopes work. His mother was tried for witchcraft.",
        books: [
          { t: "Astronomia Nova (New Astronomy)", y: "1609", lang: "Latin", sum: "Based on Tycho's observations of Mars, it states his first two laws: elliptical orbits and equal areas in equal times, and proposes a physical force from the Sun moving the planets.", key: "First & second laws; Mars orbit; ellipse" },
          { t: "Harmonices Mundi (The Harmony of the World)", y: "1619", lang: "Latin", sum: "Seeks geometric and musical harmonies in the cosmos; contains his third law relating orbital periods and distances.", key: "Third law (T² ∝ a³)" },
          { t: "Rudolphine Tables", y: "1627", lang: "Latin", sum: "Star catalogue and planetary tables based on Tycho's data and Kepler's laws, the most accurate of their time.", key: "Planetary tables" }
        ] } ],
    ["Isaac Newton", 52.8092, -0.6306, "Woolsthorpe Manor, Lincolnshire, England", "Laws of motion, universal gravitation, calculus; Principia", "rev",
      { era: "1643–1727 (born 25 Dec 1642 Old Style)",
        place: "Born at Woolsthorpe Manor (pin), where he worked out key ideas on gravity, optics and calculus during the plague years 1665–67; Fellow and Lucasian Professor at Trinity College, Cambridge (1669–1701)",
        idea: "Three laws of motion and the law of universal gravitation: every mass attracts every other with a force proportional to the product of masses and inversely to the square of distance — one law for apples and planets.",
        more: "Studied and taught at Trinity College, Cambridge, and later was Warden and Master of the Royal Mint and President of the Royal Society (1703–27). He invented calculus (independently of Leibniz), the reflecting telescope and showed white light is a spectrum. Explained tides and Earth's oblate shape, important for geodesy. 'If I have seen further it is by standing on the shoulders of giants.'",
        books: [
          { t: "Philosophiae Naturalis Principia Mathematica", y: "1687 (London)", lang: "Latin", sum: "Sets out the three laws of motion and universal gravitation and derives from them Kepler's laws, the motion of comets, the tides, the precession of the equinoxes and Earth's flattening at the poles. Foundation of classical mechanics; published with Edmond Halley's support.", key: "Three laws; inverse-square gravity; tides; oblate Earth" },
          { t: "Opticks", y: "1704", lang: "English", sum: "Reports experiments with prisms showing that white light is a mixture of colours, explains rainbows and colour of bodies, and treats light as particles ('corpuscles'), ending with speculative 'Queries'.", key: "Spectrum; prism; corpuscular theory" }
        ] } ],
    ["Francis Bacon", 51.7520, -0.3360, "St Albans (Gorhambury), Hertfordshire, England", "Father of empiricism; inductive scientific method", "rev",
      { era: "1561–1626",
        place: "Created Viscount St Alban; lived at Gorhambury near St Albans and is buried in St Michael's Church there (pin); born in London",
        idea: "Knowledge is power: science should proceed by careful induction from observation and experiment, clearing the mind of 'idols' (biases), to improve human life.",
        more: "Lawyer and statesman who became Lord Chancellor (1618) but was impeached for bribery in 1621. His programme for organised, experimental science inspired the Royal Society (1660). His Essays are often quoted in UPSC essays ('Reading maketh a full man...').",
        books: [
          { t: "Novum Organum", y: "1620", lang: "Latin", sum: "Proposes a new method of inductive reasoning to replace Aristotelian syllogism, with tables of presence and absence, and warns against four 'Idols' of the mind: of the Tribe, Cave, Marketplace and Theatre.", key: "Induction; four Idols" },
          { t: "Essays", y: "1597; enlarged 1625", lang: "English", sum: "Short, aphoristic essays on truth, studies, revenge, adversity, friendship, ambition and statecraft.", key: "'Of Studies'; 'Reading maketh a full man'" },
          { t: "New Atlantis", y: "1626 (posthumous)", lang: "English", sum: "Utopia describing Salomon's House, a state-funded research institute devoted to experimental science for human benefit.", key: "Salomon's House; scientific utopia" }
        ] } ],
    ["Bernhardus Varenius", 52.3676, 4.9041, "Amsterdam, Dutch Republic", "Geographia Generalis: general vs special geography", "geo",
      { era: "1622–1650",
        place: "Wrote and published his Geography at Amsterdam (pin); born at Hitzacker, Germany",
        idea: "Geography has two branches: general geography (laws of the Earth as a whole — shape, motion, water, atmosphere) and special or regional geography (descriptions of particular countries). This dualism ran through later geographical thought.",
        more: "German physician who died at 28. His general geography was used as a textbook for over a century; Isaac Newton edited two Latin editions at Cambridge (1672, 1681). He is a key figure in the history of the systematic vs regional dichotomy in geography.",
        books: [
          { t: "Geographia Generalis", y: "1650 (Amsterdam)", lang: "Latin", sum: "Treats the Earth scientifically in three parts — absolute (shape, size, land, water, atmosphere), relative (astronomical relations, zones, climates) and comparative (position, navigation) — distinguishing general from special geography.", key: "General vs special geography; Newton's editions" },
          { t: "Descriptio Regni Iaponiae (Description of Japan)", y: "1649", lang: "Latin", sum: "A regional description of Japan compiled from Dutch and other sources, an example of special geography.", key: "Regional (special) geography; Japan" }
        ] } ],
    ["Carl Linnaeus", 59.8586, 17.6389, "Uppsala University, Sweden", "Father of taxonomy; binomial nomenclature", "life",
      { era: "1707–1778",
        place: "Professor at Uppsala University and keeper of its botanical garden (pin); born at Råshult, Småland",
        idea: "All living things can be classified in a nested hierarchy (kingdom, class, order, genus, species) and named by a two-part Latin name — genus plus species (e.g. Homo sapiens).",
        more: "Carl von Linné sent 'apostles' worldwide to collect specimens and classified plants by their sexual organs. His system of binomial nomenclature remains the basis of biological naming, with the 10th edition of Systema Naturae (1758) the starting point of zoological names. He coined the name Homo sapiens.",
        books: [
          { t: "Systema Naturae", y: "1735 (1st ed., Leiden); 10th ed. 1758", lang: "Latin", sum: "A classification of nature into the animal, plant and mineral kingdoms. The 10th edition applied binomial names consistently to animals, including humans as Homo sapiens among the primates.", key: "Hierarchical taxonomy; Homo sapiens" },
          { t: "Species Plantarum", y: "1753", lang: "Latin", sum: "Lists about 6,000 plant species with binomial names; the official starting point of botanical nomenclature.", key: "Binomial nomenclature for plants" }
        ] } ],
    ["Antoine Lavoisier", 48.8510, 2.3630, "Paris (Arsenal laboratory), France", "Father of modern chemistry; conservation of mass", "life",
      { era: "1743–1794",
        place: "Worked in his laboratory at the Arsenal in Paris as commissioner of gunpowder (pin)",
        idea: "In a chemical reaction matter is neither created nor destroyed; combustion and respiration are combination with oxygen, not loss of 'phlogiston'.",
        more: "With his wife Marie-Anne Paulze he named oxygen and hydrogen, disproved the phlogiston theory, drew up the first modern list of elements and reformed chemical nomenclature. He helped create the metric system. As a tax farmer he was guillotined during the Terror (1794).",
        books: [
          { t: "Traité élémentaire de chimie (Elementary Treatise of Chemistry)", y: "1789", lang: "French", sum: "The first modern chemistry textbook: states the law of conservation of mass, lists 33 elements, explains combustion by oxygen and uses the new systematic nomenclature.", key: "Conservation of mass; oxygen; list of elements" }
        ] } ],
    ["Charles Darwin", 51.3313, 0.0530, "Down House, Downe, Kent, England", "Evolution by natural selection; On the Origin of Species", "life",
      { era: "1809–1882",
        place: "Wrote his major works at Down House, Kent, his home 1842–82 (pin); born at Shrewsbury",
        idea: "Species evolve over long periods through natural selection: individuals vary, more are born than survive, and those with favourable variations leave more offspring; all life shares common descent.",
        more: "Naturalist on HMS Beagle (1831–36), whose observations in South America and the Galápagos shaped his theory. Prompted by Wallace's 1858 essay, they presented joint papers at the Linnean Society (1858). Darwinism influenced Ratzel's organic state, social Darwinism and environmental determinism in geography.",
        books: [
          { t: "On the Origin of Species", y: "1859", lang: "English", sum: "Argues that species descend with modification from common ancestors through natural selection acting on variation, using evidence from domestic breeding, geographical distribution, fossils and embryology.", key: "Natural selection; struggle for existence; common descent" },
          { t: "The Voyage of the Beagle", y: "1839", lang: "English", sum: "Journal of the Beagle voyage describing the geology, fauna and peoples of South America, the Galápagos, Australia and coral reefs.", key: "Galápagos; travel natural history" },
          { t: "The Descent of Man", y: "1871", lang: "English", sum: "Applies evolution to humans, arguing for common ancestry with apes and introducing sexual selection.", key: "Human evolution; sexual selection" }
        ] } ],
    ["Alfred Russel Wallace", 0.7833, 127.3667, "Ternate, Maluku (Indonesia)", "Co-discoverer of natural selection; Wallace Line", "life",
      { era: "1823–1913",
        place: "Wrote his 1858 essay on natural selection at Ternate in the Malay Archipelago (pin); born at Usk, Wales",
        idea: "Natural selection explains the origin of species; the distribution of animals reveals deep biogeographic boundaries, such as the Wallace Line between Asian and Australian fauna (between Bali and Lombok, Borneo and Sulawesi).",
        more: "Collector in the Amazon (1848–52) and the Malay Archipelago (1854–62). His essay sent to Darwin in 1858 led to their joint Linnean Society presentation. Regarded as the father of biogeography; he divided the world into zoogeographical regions still used today.",
        books: [
          { t: "On the Tendency of Varieties to Depart Indefinitely from the Original Type", y: "1858", lang: "English", sum: "The 'Ternate essay' independently outlining evolution by natural selection, read with Darwin's papers at the Linnean Society on 1 July 1858.", key: "Natural selection; Ternate essay" },
          { t: "The Malay Archipelago", y: "1869", lang: "English", sum: "Account of eight years in the islands, describing orangutans and birds of paradise and the sharp faunal divide now called the Wallace Line.", key: "Wallace Line; island biogeography" },
          { t: "The Geographical Distribution of Animals", y: "1876", lang: "English", sum: "Divides the world into six zoogeographic regions (Palaearctic, Nearctic, Neotropical, Ethiopian, Oriental, Australian).", key: "Zoogeographic realms" }
        ] } ],
    ["Gregor Mendel", 49.1914, 16.5937, "St Thomas's Abbey, Brno (Moravia, Czechia)", "Father of genetics; pea-plant laws of inheritance", "life",
      { era: "1822–1884",
        place: "Augustinian friar and later abbot of St Thomas's Abbey, Brno, where he grew his peas (pin); born at Heinzendorf, Silesia",
        idea: "Heredity is carried by discrete units (now genes) in pairs; they segregate in gametes and different traits are inherited independently, giving predictable ratios such as 3:1.",
        more: "Between 1856 and 1863 Mendel cultivated about 28,000 pea plants. His results were ignored until rediscovered in 1900 by de Vries, Correns and Tschermak, after which they founded genetics and later merged with Darwinism in the modern synthesis.",
        books: [
          { t: "Experiments on Plant Hybridization (Versuche über Pflanzen-Hybriden)", y: "Read 1865; published 1866", lang: "German", sum: "Reports crosses of pea varieties differing in seven traits, establishing dominant and recessive factors, the 3:1 ratio, the law of segregation and the law of independent assortment.", key: "Segregation; independent assortment; 3:1 ratio" }
        ] } ],
    ["James Hutton", 55.9533, -3.1883, "Edinburgh, Scotland", "Father of modern geology; uniformitarianism, deep time", "life",
      { era: "1726–1797",
        place: "Lived and worked in Edinburgh, a leader of the Scottish Enlightenment (pin)",
        idea: "The Earth is shaped by the same slow processes we see today (erosion, deposition, uplift) acting over immense time — 'no vestige of a beginning, no prospect of an end'.",
        more: "Physician and farmer who studied unconformities such as Siccar Point and granite veins at Glen Tilt, showing rock cycling and the igneous origin of granite (Plutonism vs Werner's Neptunism). Popularised by John Playfair and Lyell; basic to geomorphology.",
        books: [
          { t: "Theory of the Earth", y: "1788 (paper); 2 vols 1795", lang: "English", sum: "Proposes a cyclical Earth in which land is eroded, sediments are laid down and consolidated, then uplifted by subterranean heat, implying vast geological time.", key: "Uniformitarianism; deep time; rock cycle" }
        ] } ],
    ["Charles Lyell", 51.5115, -0.1160, "London (King's College), England", "Principles of Geology; uniformitarianism popularised", "life",
      { era: "1797–1875",
        place: "Professor of geology at King's College London (1831–33) and lived in London (pin); born at Kinnordy, Scotland",
        idea: "'The present is the key to the past': geological change results from gradual, uniform processes over long time, not catastrophes.",
        more: "Lawyer turned geologist whose Principles was read by Darwin on the Beagle and shaped his gradualism. Lyell coined the epochs Eocene, Miocene and Pliocene. He was a close friend of Darwin and urged him to publish.",
        books: [
          { t: "Principles of Geology", y: "1830–1833 (3 vols)", lang: "English", sum: "Argues that present-day causes acting gradually (rivers, volcanoes, earthquakes, sea-level change) explain the geological record; attacks catastrophism.", key: "Uniformitarianism; gradualism; Tertiary epochs" }
        ] } ],
    ["Alfred Wegener", 50.8022, 8.7668, "University of Marburg, Germany", "Continental drift; Pangaea", "life",
      { era: "1880–1930",
        place: "Lecturer at Marburg, where he developed continental drift (1912–15) (pin); died on the Greenland ice sheet in 1930",
        idea: "Continents were once joined in a supercontinent, Pangaea, and have drifted apart; evidence includes matching coastlines, fossils (Mesosaurus, Glossopteris), rock belts and palaeoclimates (glacial tillites in India and Africa).",
        more: "Meteorologist and polar explorer, son-in-law of Köppen. He presented drift in 1912; it was rejected because he could not explain the driving force (he suggested pole-fleeing and tidal forces). Vindicated by sea-floor spreading and plate tectonics in the 1960s. Core geography-optional topic.",
        books: [
          { t: "The Origin of Continents and Oceans (Die Entstehung der Kontinente und Ozeane)", y: "1915 (revised 1920, 1922, 1929)", lang: "German", sum: "Sets out continental drift with geological, palaeontological, palaeoclimatic and geodetic evidence that Pangaea broke apart from the Mesozoic onwards, with continents ploughing through the oceanic crust.", key: "Pangaea; Panthalassa; Glossopteris; Polflucht" },
          { t: "The Climates of the Geological Past (with W. Köppen)", y: "1924", lang: "German", sum: "Uses fossil climatic indicators to reconstruct past climate belts and polar wandering, supporting drift.", key: "Palaeoclimatology; polar wandering" }
        ] } ],
    ["Wladimir Köppen", 53.5511, 9.9937, "Deutsche Seewarte, Hamburg, Germany", "Köppen climate classification (A–E)", "life",
      { era: "1846–1940",
        place: "Meteorologist at the German Naval Observatory (Deutsche Seewarte) in Hamburg for decades (pin); born in St Petersburg; died at Graz",
        idea: "Climate types can be defined by temperature and precipitation thresholds that match vegetation: A tropical, B dry, C warm temperate, D snow, E polar, subdivided by seasonality (f, s, w, m) and heat (a, b, c, d).",
        more: "Russian-German climatologist and botanist whose scheme, first published in 1884 and revised up to 1936 (later refined by Rudolf Geiger), remains the most used climate classification and is standard for UPSC geography. Father-in-law of Alfred Wegener.",
        books: [
          { t: "Climate classification papers (Versuch einer Klassifikation der Klimate)", y: "1900 (first full scheme; heat-zone map 1884)", lang: "German", sum: "Classifies world climates using vegetation zones, mean monthly temperature and precipitation; later revised into the familiar letter system.", key: "A, B, C, D, E; Af, Am, Aw, BWh, Cfb..." },
          { t: "Das geographische System der Klimate", y: "1936", lang: "German", sum: "Final version of his classification in the Handbuch der Klimatologie (with Geiger), with formulae for dry-climate boundaries.", key: "Köppen-Geiger; aridity thresholds" }
        ] } ],
    ["William Morris Davis", 42.3770, -71.1167, "Harvard University, Cambridge, Massachusetts", "Geographical (erosion) cycle: youth, maturity, old age", "geo",
      { era: "1850–1934",
        place: "Professor at Harvard (1878–1912) (pin)",
        idea: "Landscape is a function of structure, process and stage: after rapid uplift, rivers erode the land through youth, maturity and old age to a peneplain; renewed uplift starts a new cycle (rejuvenation).",
        more: "'Father of American geography' and founder of the Association of American Geographers (1904). His deductive, time-based model dominated geomorphology until challenged by Walther Penck and later process geomorphology. Also linked to a deterministic 'ontography'.",
        books: [
          { t: "The Geographical Cycle", y: "1899 (Geographical Journal)", lang: "English", sum: "Presents the cycle of erosion: an uplifted block is dissected by streams through stages of youth (V-valleys), maturity (maximum relief) and old age (peneplain with monadnocks).", key: "Structure-process-stage; peneplain; monadnock" },
          { t: "Geographical Essays", y: "1909", lang: "English", sum: "Collected essays on the cycle of erosion, rivers, coasts and the nature of geography.", key: "Cycle of erosion; collected papers" }
        ] } ],
    ["Walther Penck", 51.3397, 12.3731, "University of Leipzig, Germany", "Slope development; parallel retreat; Morphological Analysis", "geo",
      { era: "1888–1923",
        place: "Professor at Leipzig from 1918 (pin); born in Vienna, died at Stuttgart",
        idea: "Landforms reflect the ratio of uplift to erosion over time, not stages after a single uplift: waxing (concave), uniform (straight) and waning (convex) development, with slopes retreating parallel to themselves.",
        more: "Son of the geomorphologist Albrecht Penck. Field work in Argentina and Turkey. His ideas opposed Davis's cycle; his book appeared posthumously in 1924, edited by his father. Primärrumpf and piedmont benchlands are his terms. A standard Davis-vs-Penck exam question.",
        books: [
          { t: "Die morphologische Analyse (Morphological Analysis of Landforms)", y: "1924 (posthumous; English 1953)", lang: "German", sum: "Argues that slope form depends on the rate of crustal movement relative to denudation; introduces parallel slope retreat, Primärrumpf and Piedmonttreppen (benchlands).", key: "Parallel retreat; waxing/waning slopes; Primärrumpf" }
        ] } ],
    ["Albert Einstein", 46.9480, 7.4474, "Bern, Switzerland (Patent Office)", "Relativity; E = mc²; photoelectric effect", "physics",
      { era: "1879–1955",
        place: "Worked at the Swiss Patent Office in Bern, where he wrote his 1905 'miracle year' papers (pin); born at Ulm; later Berlin and Princeton",
        idea: "The laws of physics and the speed of light are the same for all observers, so space and time are relative; mass and energy are equivalent (E = mc²); gravity is the curvature of spacetime.",
        more: "Won the 1921 Nobel Prize in Physics for the photoelectric effect. Emigrated to the USA (1933) and signed the 1939 letter to Roosevelt that led to the Manhattan Project; later campaigned for disarmament (Russell–Einstein Manifesto 1955). Corresponded with Tagore and admired Gandhi.",
        books: [
          { t: "Annus mirabilis papers (Annalen der Physik)", y: "1905", lang: "German", sum: "Four papers on the photoelectric effect (light quanta), Brownian motion (proof of atoms), special relativity, and mass-energy equivalence (E = mc²).", key: "Special relativity; photon; E = mc²" },
          { t: "Relativity: The Special and the General Theory", y: "1916 (German, pub. 1917)", lang: "German", sum: "Einstein's popular explanation of special relativity and of general relativity (1915), in which gravity is the curvature of spacetime by mass.", key: "Spacetime curvature; general relativity" }
        ] } ],
    ["Marie Curie", 48.8287, 2.3445, "Paris (Sorbonne / Radium Institute), France", "Radioactivity; polonium & radium; two Nobel Prizes", "physics",
      { era: "1867–1934",
        place: "Worked in Paris at the School of Physics and Chemistry and the Sorbonne, later the Radium Institute (pin, offset); born in Warsaw",
        more: "Maria Skłodowska-Curie coined the term 'radioactivity', discovered polonium and radium with Pierre Curie (1898), and was the first woman to win a Nobel Prize (Physics 1903, with Pierre and Becquerel) and the only person to win in two sciences (Chemistry 1911). Ran mobile X-ray units in World War I.",
        books: [
          { t: "Research on Radioactive Substances (Recherches sur les substances radioactives)", y: "1903 (doctoral thesis)", lang: "French", sum: "Her doctoral thesis summarising the discovery of polonium and radium and showing that radioactivity is an atomic property.", key: "Radioactivity; polonium; radium" },
          { t: "Traité de radioactivité (Treatise on Radioactivity)", y: "1910", lang: "French", sum: "Two-volume systematic account of the science of radioactivity.", key: "Radioactivity textbook" }
        ] } ],
    ["Sigmund Freud", 48.2185, 16.3631, "Berggasse 19, Vienna, Austria", "Founder of psychoanalysis; unconscious; id, ego, superego", "physics",
      { era: "1856–1939",
        place: "Lived and practised at Berggasse 19, Vienna (1891–1938), now the Freud Museum (pin); fled to London in 1938",
        idea: "Much of mental life is unconscious; repressed desires shape dreams, slips and neuroses; the psyche has id, ego and superego, and civilisation demands repression of instincts.",
        more: "Austrian neurologist who founded psychoanalysis, using free association and dream interpretation. His ideas reshaped psychology, literature and social theory, though many are contested scientifically. Relevant to GS4 (emotions, conscience as superego).",
        books: [
          { t: "The Interpretation of Dreams", y: "1899 (dated 1900)", lang: "German", sum: "Argues that dreams are disguised fulfilments of repressed wishes, introducing the unconscious, dream-work (condensation, displacement) and the Oedipus complex.", key: "'Royal road to the unconscious'; wish fulfilment" },
          { t: "Civilization and Its Discontents", y: "1930", lang: "German", sum: "Explores the conflict between individual instincts (sex and aggression) and the restrictions of civilisation, which produce guilt and unhappiness.", key: "Eros vs death drive; guilt; repression" }
        ] } ],
    ["Thomas Kuhn", 37.8719, -122.2585, "University of California, Berkeley", "Paradigm shift; The Structure of Scientific Revolutions", "physics",
      { era: "1922–1996",
        place: "Wrote The Structure of Scientific Revolutions while at Berkeley (1956–64) (pin); later Princeton and MIT",
        idea: "Science advances not by steady accumulation but through 'normal science' within a paradigm, crisis from anomalies, and revolutionary 'paradigm shifts' to incommensurable new frameworks.",
        more: "American physicist-turned-historian of science. 'Paradigm shift' became an everyday term. Geographers use Kuhn to explain shifts such as determinism to possibilism, the quantitative revolution of the 1950s–60s, and behavioural, radical and humanistic approaches.",
        books: [
          { t: "The Structure of Scientific Revolutions", y: "1962", lang: "English", sum: "Using the Copernican, Newtonian and Einsteinian revolutions, it describes the cycle of pre-paradigm, normal science, anomaly, crisis and revolution; competing paradigms are incommensurable.", key: "Paradigm; normal science; anomaly; incommensurability" },
          { t: "The Copernican Revolution", y: "1957", lang: "English", sum: "History of the shift from the Ptolemaic to the Copernican cosmos and its wider effects on thought.", key: "Copernicus; history of astronomy" }
        ] } ],
    ["Stephen Hawking", 52.2053, 0.1218, "University of Cambridge (DAMTP), England", "Black holes, Hawking radiation; A Brief History of Time", "physics",
      { era: "1942–2018",
        place: "Lucasian Professor of Mathematics at Cambridge 1979–2009, Newton's former chair (pin); born at Oxford",
        idea: "Black holes are not completely black: quantum effects make them emit radiation (Hawking radiation) and eventually evaporate; with Penrose he showed the universe began in a singularity.",
        more: "Theoretical physicist who lived with motor neurone disease (ALS) for over 50 years, communicating through a speech synthesiser. His popular books brought cosmology to millions. Buried in Westminster Abbey near Newton and Darwin.",
        books: [
          { t: "A Brief History of Time", y: "1988", lang: "English", sum: "Popular explanation of the Big Bang, black holes, light cones, the arrow of time and the search for a unified theory of physics; stayed on bestseller lists for years.", key: "Big Bang; black holes; arrow of time" },
          { t: "The Large Scale Structure of Space-Time (with G.F.R. Ellis)", y: "1973", lang: "English", sum: "Technical monograph on general relativity, causal structure and singularity theorems.", key: "Singularity theorems" }
        ] } ],
    ["Alexander von Humboldt", 52.5180, 13.3934, "Berlin, Prussia (Humboldt University)", "Founder of modern geography; Kosmos; isotherms", "geo",
      { era: "1769–1859",
        place: "Born in Berlin and spent his last decades there writing Kosmos (pin); lived in Paris 1804–27",
        idea: "Nature is an interconnected whole (Kosmos) to be studied empirically through measurement; climate, altitude and vegetation are linked, as shown by isotherms and vegetation zones on Chimborazo.",
        more: "Explored Spanish America (1799–1804) with Aimé Bonpland, then Russia and Siberia (1829). He invented isotherm maps, described altitudinal vegetation zones and the Humboldt (Peru) Current, and with Ritter founded modern geography; he favoured systematic (general) geography and empirical method. The Humboldt University is named after him and his brother Wilhelm.",
        books: [
          { t: "Kosmos", y: "1845–1862 (5 vols)", lang: "German", sum: "A grand synthesis of all knowledge of the physical universe, from the stars to Earth's geology, climate, plants and the history of humans' perception of nature, stressing the unity of nature.", key: "Unity of nature; Kosmos; holistic science" },
          { t: "Essay on the Geography of Plants", y: "1807", lang: "French & German", sum: "With the famous 'Naturgemälde' of Chimborazo showing how vegetation changes with altitude and climate; founds plant geography.", key: "Altitudinal zonation; plant geography" },
          { t: "Personal Narrative of Travels to the Equinoctial Regions", y: "1814–1831", lang: "French", sum: "Account of his American expedition, inspiring Darwin.", key: "Orinoco; Andes; inspiration to Darwin" }
        ] } ],
    ["Carl Ritter", 52.4980, 13.3734, "University of Berlin, Prussia", "Erdkunde; regional & comparative geography; teleology", "geo",
      { era: "1779–1859",
        place: "First professor of geography at the University of Berlin from 1820 (pin, offset); born at Quedlinburg",
        idea: "Earth is the 'home of mankind' designed by God (teleology); geography should study regions as wholes and compare them, showing how physical conditions influence human history — unity in diversity.",
        more: "Co-founder, with Humboldt, of modern geography. Where Humboldt was empirical and systematic, Ritter was regional, anthropocentric and teleological. He founded the Berlin Geographical Society (1828). His comparative method and 'Länderkunde' influenced Ratzel and regional geography.",
        books: [
          { t: "Die Erdkunde im Verhältniss zur Natur und zur Geschichte des Menschen", y: "1817–1859 (19 vols)", lang: "German", sum: "A monumental comparative regional geography of Africa and Asia, relating land and nature to human history; Earth seen as an organism and an educational home for humanity.", key: "Erdkunde; comparative method; teleology; Länderkunde" }
        ] } ],
    ["Friedrich Ratzel", 51.3597, 12.3931, "University of Leipzig, Germany", "Anthropogeographie; state as organism; Lebensraum", "geo",
      { era: "1844–1904",
        place: "Professor of geography at Leipzig from 1886 (pin, offset); born at Karlsruhe",
        idea: "Human societies are shaped by the physical environment (environmental determinism); the state is a living organism that must grow by acquiring space (Lebensraum), with seven laws of spatial growth of states.",
        more: "Zoologist and journalist influenced by Darwin and Haeckel. He founded human (anthropo-) and political geography. His student Ellen Semple spread determinism to the USA; his Lebensraum idea was later distorted by Haushofer and Nazi geopolitics. Core geography-optional figure.",
        books: [
          { t: "Anthropogeographie", y: "Vol. 1 1882; vol. 2 1891", lang: "German", sum: "Studies the influence of natural conditions on the distribution, migration and culture of peoples (vol. 1) and the geographical distribution of humankind (vol. 2).", key: "Environmental determinism; human geography" },
          { t: "Politische Geographie", y: "1897", lang: "German", sum: "Treats states as organisms tied to the soil, growing and declining, with laws of territorial growth; founding text of political geography.", key: "Organic state; seven laws of state growth" },
          { t: "Der Lebensraum", y: "1901 (essay)", lang: "German", sum: "Biogeographical essay applying the concept of living space to species and peoples.", key: "Lebensraum" }
        ] } ],
    ["Paul Vidal de la Blache", 48.8487, 2.3431, "Sorbonne, Paris, France", "Founder of French geography; possibilism; genre de vie", "geo",
      { era: "1845–1918",
        place: "Taught at the École normale supérieure and the Sorbonne, Paris (pin); born at Pézenas",
        idea: "Possibilism: nature offers possibilities and humans choose among them; regions (pays) are shaped by distinct ways of life (genre de vie) developed by people in their milieu.",
        more: "Founder of the French school of regional geography and the journal Annales de Géographie (1891). The term 'possibilism' was coined by the historian Lucien Febvre to describe his approach. His students included Jean Brunhes and Albert Demangeon.",
        books: [
          { t: "Tableau de la géographie de la France", y: "1903", lang: "French", sum: "A regional portrait of France as a mosaic of pays, showing how human activity and history moulded each region's character.", key: "Pays; regional monograph" },
          { t: "Principes de géographie humaine (Principles of Human Geography)", y: "1922 (posthumous, ed. E. de Martonne)", lang: "French", sum: "Discusses distribution of population, civilisations, means of life (genre de vie), circulation and settlement, arguing for human choice within environmental possibilities.", key: "Genre de vie; possibilism; milieu" }
        ] } ],
    ["Jean Brunhes", 46.8065, 7.1619, "University of Fribourg, Switzerland", "La Géographie humaine; essential facts of human geography", "geo",
      { era: "1869–1930",
        place: "Professor at Fribourg (1896–1912), where he wrote La Géographie humaine (pin); later Collège de France, Paris",
        idea: "Human geography studies the visible imprint of humans on the land, grouped into 'essential facts': unproductive occupation (houses, roads), conquest of plant and animal life (fields, herds) and destructive exploitation (mines, deforestation).",
        more: "Disciple of Vidal de la Blache who carried possibilism further and stressed the interaction of human and physical facts. He held the first chair of human geography at the Collège de France (1912).",
        books: [
          { t: "La Géographie humaine", y: "1910", lang: "French", sum: "Systematic human geography based on observable facts on the landscape, classified into three groups and six types of 'essential facts', with case studies such as desert oases.", key: "Essential facts; destructive exploitation; possibilism" }
        ] } ],
    ["Ellen Churchill Semple", 42.2510, -71.8230, "Clark University, Worcester, Massachusetts", "Spread Ratzel's environmental determinism in the USA", "geo",
      { era: "1863–1932",
        place: "Taught at Clark University's Graduate School of Geography from 1921 (pin); born at Louisville, Kentucky",
        idea: "'Man is a product of the earth's surface': environment moulds physique, mind, economy and history of peoples.",
        more: "Studied under Ratzel at Leipzig and became the first woman president of the Association of American Geographers (1921). Her vivid writing made determinism influential in American geography before it was criticised for oversimplification.",
        books: [
          { t: "Influences of Geographic Environment", y: "1911", lang: "English", sum: "A restatement of Ratzel's anthropogeography for English readers, tracing effects of location, climate, coasts, rivers, islands and mountains on societies.", key: "'Man is a product of the earth's surface'" },
          { t: "American History and Its Geographic Conditions", y: "1903", lang: "English", sum: "Explains American history (settlement, expansion, civil war) through geography such as the Appalachians and river systems.", key: "Determinism applied to US history" }
        ] } ],
    ["Ellsworth Huntington", 41.3163, -72.9223, "Yale University, New Haven, Connecticut", "Climatic determinism; Civilization and Climate", "geo",
      { era: "1876–1947",
        place: "Taught at Yale University (from 1907) (pin); born at Galesburg, Illinois",
        idea: "Climate (with heredity) controls human energy and civilisation; an ideal climate with moderate temperatures and changeable, stormy weather produces the highest civilisation; climatic pulsations drove migrations in Asia.",
        more: "Travelled in Turkey, Central Asia and Persia. His 'climatic energy' maps placed NW Europe and NE USA at the top, a view now criticised as ethnocentric and linked to eugenics. Still a standard example of environmental determinism.",
        books: [
          { t: "Civilization and Climate", y: "1915", lang: "English", sum: "Uses factory output and other data to claim that human health and energy peak in cool, variable climates, and maps world 'climatic energy' and 'civilisation'.", key: "Climatic energy; ideal climate; determinism" },
          { t: "The Pulse of Asia", y: "1907", lang: "English", sum: "Argues that cycles of drier and wetter climate in Central Asia drove nomadic migrations and historical upheavals.", key: "Climatic pulsation; Central Asia" },
          { t: "Mainsprings of Civilization", y: "1945", lang: "English", sum: "Late synthesis on climate, heredity and culture as drivers of history.", key: "Climate, heredity, culture" }
        ] } ],
    ["Griffith Taylor", -33.8886, 151.1873, "University of Sydney, Australia", "Neo-determinism: 'stop-and-go determinism'", "geo",
      { era: "1880–1963",
        place: "Founded geography at the University of Sydney (pin); later Chicago (1929) and founder of geography at Toronto (1936)",
        idea: "Neo-determinism ('stop-and-go'): humans can speed up, slow down or stop the progress of settlement, like traffic at a crossing, but cannot change the direction set by nature; e.g. Australia's arid interior limits population.",
        more: "Thomas Griffith Taylor was a geologist on Scott's Terra Nova Antarctic expedition (1910–13). His forecast that Australia could support far fewer people than politicians hoped made him unpopular there. President of the Association of American Geographers (1940).",
        books: [
          { t: "Environment, Race and Migration", y: "1937", lang: "English", sum: "His most discussed work, relating the distribution and migration of human groups to environment through 'zones and strata', and explaining stop-and-go determinism.", key: "Neo-determinism; zones and strata theory" },
          { t: "Geography in the Twentieth Century (ed.)", y: "1951", lang: "English", sum: "Edited survey of the growth, fields and methods of geography, with his own essays defending a modified determinism.", key: "History of geography; stop-and-go" }
        ] } ],
    ["Alfred Hettner", 49.4093, 8.6940, "University of Heidelberg, Germany", "Chorology: geography as the study of areal differentiation", "geo",
      { era: "1859–1941",
        place: "Professor at Heidelberg from 1899 (pin); born at Dresden",
        idea: "Geography is a chorological science: like history for time, it studies the earth's areas and the causal connections among phenomena that give each region its character.",
        more: "Founded the journal Geographische Zeitschrift (1895). Building on Kant's distinction of chorological and chronological sciences, his ideas shaped Hartshorne's 'areal differentiation' and the regional paradigm in 20th-century geography.",
        books: [
          { t: "Die Geographie: ihre Geschichte, ihr Wesen und ihre Methoden", y: "1927", lang: "German", sum: "A methodological treatise on the history, nature and methods of geography, defining it as the chorological science of the earth's surface.", key: "Chorology; regional differentiation" }
        ] } ],
    ["Richard Hartshorne", 44.9740, -93.2277, "University of Minnesota, Minneapolis", "The Nature of Geography; areal differentiation", "geo",
      { era: "1899–1992",
        place: "Wrote The Nature of Geography at the University of Minnesota (pin); later at Wisconsin-Madison",
        idea: "Geography is an idiographic, chorological discipline describing and interpreting areal differentiation — the variable character of the earth's surface — rather than seeking universal laws.",
        more: "His book synthesised German thought (Hettner) and became the bible of regional geography in the USA. Fred Schaefer's 1953 attack on 'exceptionalism' and the ensuing debate helped launch the quantitative revolution.",
        books: [
          { t: "The Nature of Geography", y: "1939", lang: "English", sum: "A critical survey of geographical thought, arguing that geography studies areal differentiation and integration of phenomena in regions, and is distinct from systematic sciences.", key: "Areal differentiation; idiographic; regional geography" },
          { t: "Perspective on the Nature of Geography", y: "1959", lang: "English", sum: "Answers critics like Schaefer and updates his view, accepting more room for generalisation.", key: "Reply to Schaefer" }
        ] } ],
    ["Fred K. Schaefer", 41.6611, -91.5302, "University of Iowa, Iowa City", "'Exceptionalism in Geography' (1953): call for laws", "geo",
      { era: "1904–1953",
        place: "Taught at the University of Iowa (pin); German émigré",
        idea: "Geography is not exceptional: like other sciences it should seek general laws of spatial arrangement (nomothetic), not only describe unique regions.",
        more: "A political refugee from Nazi Germany. His posthumously published paper attacked Hettner and Hartshorne and became a manifesto of the quantitative revolution and spatial science.",
        books: [
          { t: "Exceptionalism in Geography: A Methodological Examination", y: "1953 (Annals of the AAG)", lang: "English", sum: "Argues that geography should be a nomothetic science seeking morphological laws of spatial patterns, rejecting the Kant–Hettner–Hartshorne view of geography as an exceptional, idiographic discipline.", key: "Nomothetic vs idiographic; quantitative revolution" }
        ] } ],
    ["David Harvey", 39.3299, -76.6205, "Johns Hopkins University, Baltimore", "Positivist then Marxist (radical) geography", "geo",
      { era: "b. 1935",
        place: "Taught at Johns Hopkins, Baltimore (from 1969), where he turned to Marxism (pin); later CUNY Graduate Center; born at Gillingham, England",
        idea: "Urban space and inequality are produced by capital accumulation; geographers must explain and challenge injustice (spatial fix, accumulation by dispossession).",
        more: "His Explanation in Geography (1969, written at Bristol) was a key text of the quantitative/positivist revolution; with Social Justice and the City (1973) he led the radical turn. Among the most cited social scientists.",
        books: [
          { t: "Explanation in Geography", y: "1969", lang: "English", sum: "A philosophy-of-science text applying positivist scientific method, models and quantitative techniques to geography.", key: "Positivism; spatial science" },
          { t: "Social Justice and the City", y: "1973", lang: "English", sum: "Moves from liberal to Marxist formulations to explain urban inequality, land rent and ghetto formation under capitalism.", key: "Radical geography; urban inequality" },
          { t: "The Limits to Capital", y: "1982", lang: "English", sum: "Extends Marx's theory to space, introducing the 'spatial fix' for crises of over-accumulation.", key: "Spatial fix" }
        ] } ],
    ["Yi-Fu Tuan", 43.0766, -89.4125, "University of Wisconsin-Madison", "Humanistic geography; topophilia; space and place", "geo",
      { era: "1930–2022",
        place: "Taught at Minnesota (1968–83) and Wisconsin-Madison (1983–98) (pin: Madison); born at Tianjin, China",
        idea: "Places gain meaning through human experience and emotion; 'space' is abstract and open, 'place' is space endowed with value; topophilia is the affective bond between people and place.",
        more: "Chinese-American geographer who founded humanistic geography in the 1970s, drawing on phenomenology as a reaction to spatial science.",
        books: [
          { t: "Topophilia: A Study of Environmental Perception, Attitudes, and Values", y: "1974", lang: "English", sum: "Explores how perception, culture and experience create love of place, from senses to city and wilderness.", key: "Topophilia; environmental perception" },
          { t: "Space and Place: The Perspective of Experience", y: "1977", lang: "English", sum: "Contrasts space (freedom, movement) with place (security, pause) and shows how experience turns one into the other.", key: "Space vs place; humanistic geography" }
        ] } ],
    ["Johann Heinrich von Thünen", 53.8400, 12.4472, "Tellow estate, Mecklenburg (near Rostock), Germany", "Isolated State; agricultural location rings", "model",
      { era: "1783–1850",
        place: "Farmed and ran experiments on his estate at Tellow (Warnkenhagen, Mecklenburg), where he died (pin, approximate); born at Canarienhausen",
        idea: "In an isolated state with one central market on a uniform plain, land use forms concentric rings determined by economic (location) rent = yield × (price − cost) − yield × distance × freight rate: market gardening/dairy, forestry, crop rotation, ranching outward.",
        more: "Agricultural economist who kept detailed farm accounts for decades. His model founded location theory and marginal productivity theory, and is a core geography-optional topic (agricultural location, applied today to urban fringes and global agriculture).",
        books: [
          { t: "Der isolierte Staat (The Isolated State)", y: "1826 (vol. 1); later parts 1850, 1863", lang: "German", sum: "Models land use around a single city on an isotropic plain, showing that transport costs and land rent produce rings of intensive farming, forestry, grain and livestock; also develops wage theory.", key: "Concentric rings; economic rent; isotropic plain" }
        ] } ],
    ["Alfred Weber", 49.4293, 8.7140, "University of Heidelberg, Germany", "Least-cost theory of industrial location", "model",
      { era: "1868–1958",
        place: "Professor at Heidelberg from 1907 (pin, offset); brother of Max Weber",
        idea: "Industries locate where total transport and labour costs are least: the locational triangle, material index (weight-losing vs pure materials), isodapanes and agglomeration economies.",
        more: "Economist and sociologist. His model treats raw-material sources, market and labour as forces pulling a factory; weight-losing industries (e.g. iron and steel, sugar) locate near raw materials, weight-gaining near markets. Core for industrial geography.",
        books: [
          { t: "Über den Standort der Industrien (Theory of the Location of Industries)", y: "1909 (English 1929)", lang: "German", sum: "Develops a least-cost theory of industrial location using the locational triangle, the material index, isodapanes (lines of equal additional cost) and labour and agglomeration deviations.", key: "Least cost; material index; isodapanes; locational triangle" }
        ] } ],
    ["Walter Christaller", 49.5897, 11.0078, "University of Erlangen, Bavaria", "Central Place Theory (1933): hexagons, K=3,4,7", "model",
      { era: "1893–1969",
        place: "Developed Central Place Theory in his doctoral thesis at Erlangen (pin); born at Berneck, Württemberg",
        idea: "Settlements (central places) supplying goods and services to surrounding areas form a hierarchy with hexagonal market areas, governed by range and threshold; arranged by marketing (K=3), transport (K=4) or administrative (K=7) principles.",
        more: "Tested his model in southern Germany. His theory was largely ignored until the quantitative revolution, when it became a classic of spatial science. His collaboration with Nazi regional planning in occupied Poland is a criticised part of his career.",
        books: [
          { t: "Die zentralen Orte in Süddeutschland (Central Places in Southern Germany)", y: "1933 (English 1966)", lang: "German", sum: "Derives a nested hierarchy of settlements with hexagonal hinterlands on an isotropic plain, using range and threshold of goods, and tests it on southern Germany.", key: "Range; threshold; K=3,4,7; hexagons" }
        ] } ],
    ["August Lösch", 54.3233, 10.1228, "Kiel Institute for the World Economy, Germany", "Economic landscape; profit-maximising location", "model",
      { era: "1906–1945",
        place: "Researcher at the Kiel Institute for the World Economy (pin); born at Öhringen",
        idea: "Location should maximise profit (not merely minimise cost); overlaying hexagonal market networks of many goods produces an economic landscape with city-rich and city-poor sectors.",
        more: "German economist who refined Christaller's model with a flexible K value and demand cones. He refused to join the Nazi party and died aged 39 just after the war.",
        books: [
          { t: "Die räumliche Ordnung der Wirtschaft (The Economics of Location)", y: "1940 (English 1954)", lang: "German", sum: "A general theory of spatial equilibrium: demand cones, hexagonal market areas for each good and their rotation into an 'economic landscape' with sectors.", key: "Profit maximisation; economic landscape; demand cone" }
        ] } ],
    ["Mark Jefferson", 42.2411, -83.6130, "Michigan State Normal College (Eastern Michigan Univ.), Ypsilanti", "Law of the Primate City (1939)", "model",
      { era: "1863–1949",
        place: "Professor of geography at Michigan State Normal College, Ypsilanti (1901–39) (pin)",
        idea: "A country's leading (primate) city is disproportionately larger than the next — often more than twice the size of the second city — and expresses national capability and feeling (e.g. London, Paris).",
        more: "American geographer, chief cartographer for the US delegation at the Paris Peace Conference (1919). Primacy contrasts with Zipf's rank-size rule and is used to discuss urban hierarchies in developing countries.",
        books: [
          { t: "The Law of the Primate City", y: "1939 (Geographical Review)", lang: "English", sum: "Compares the largest cities of 51 countries, finding that the largest city is commonly far larger than the second and third, and calls it the primate city.", key: "Primate city; urban primacy" }
        ] } ],
    ["Ernest Burgess", 41.7886, -87.5987, "University of Chicago (Chicago School of sociology)", "Concentric zone model of urban structure (1925)", "model",
      { era: "1886–1966",
        place: "Professor of sociology at the University of Chicago (pin)",
        idea: "Cities grow outward in concentric zones: CBD, zone in transition, working-class homes, residential zone and commuter zone, through invasion and succession (urban ecology).",
        more: "Ernest W. Burgess, with Robert Park, led the Chicago School of urban ecology, using Chicago as a laboratory. His model was later modified by Hoyt's sector and Harris-Ullman's multiple nuclei models.",
        books: [
          { t: "The Growth of the City (in The City, with R. Park & R. McKenzie)", y: "1925", lang: "English", sum: "Presents the concentric zone model with five rings around the Loop of Chicago and the processes of invasion, succession and segregation.", key: "Concentric zones; invasion-succession; urban ecology" }
        ] } ],
    ["Homer Hoyt", 38.9072, -77.0369, "Federal Housing Administration, Washington DC", "Sector model of urban land use (1939)", "model",
      { era: "1895–1984",
        place: "Principal housing economist of the US Federal Housing Administration, Washington DC (pin)",
        idea: "Residential areas develop in sectors or wedges along transport routes from the CBD; high-rent areas expand outward along particular axes, not in rings.",
        more: "Land economist who studied rent patterns in 142 US cities. His sector model refined Burgess's concentric zones; his work was also linked to the practice of 'redlining'.",
        books: [
          { t: "The Structure and Growth of Residential Neighborhoods in American Cities", y: "1939", lang: "English", sum: "Maps rents in US cities and shows that residential land use forms sectors radiating from the centre along transport lines, with high-income sectors moving outward.", key: "Sector model; wedges; transport axes" }
        ] } ],
    ["Chauncy Harris & Edward Ullman", 41.8086, -87.6187, "University of Chicago (Harris)", "Multiple nuclei model (1945)", "model",
      { era: "Harris 1914–2003; Ullman 1912–1976",
        place: "Pin: University of Chicago, where Harris taught (offset); Ullman later at Harvard and the University of Washington",
        idea: "Large cities grow around several nuclei (CBD, industrial districts, suburbs, universities, ports), because some activities need specialised facilities, cluster together or repel each other, and differ in ability to pay rent.",
        more: "American urban geographers whose model added realism to Burgess and Hoyt for car-age cities. Ullman also developed the spatial interaction triad of complementarity, intervening opportunity and transferability.",
        books: [
          { t: "The Nature of Cities", y: "1945 (Annals of the American Academy of Political and Social Science)", lang: "English", sum: "Classifies cities by function (central places, transport, specialised) and proposes the multiple nuclei model of internal urban structure.", key: "Multiple nuclei; urban functions" }
        ] } ],
    ["George Kingsley Zipf", 42.3970, -71.1367, "Harvard University, Cambridge, Massachusetts", "Rank-size rule; principle of least effort", "model",
      { era: "1902–1950",
        place: "Linguist at Harvard University (pin, offset)",
        idea: "Rank-size rule: the population of the nth-ranked city is about 1/n of the largest city (Pn = P1/n); the same power law describes word frequencies (Zipf's law).",
        more: "Harvard philologist who explained such regularities by the 'principle of least effort'. Rank-size distributions indicate integrated urban systems, while primacy (Jefferson) indicates dominance of one city.",
        books: [
          { t: "Human Behavior and the Principle of Least Effort", y: "1949", lang: "English", sum: "Argues that people minimise effort, producing power-law regularities in language, city sizes and other social phenomena, including the rank-size rule.", key: "Pn = P1/n; Zipf's law; least effort" }
        ] } ],
    ["Torsten Hägerstrand", 55.7047, 13.1910, "Lund University, Sweden", "Spatial diffusion of innovations; time geography", "model",
      { era: "1916–2004",
        place: "Professor at Lund University (pin)",
        idea: "Innovations spread through space by neighbourhood (contagious) and hierarchical diffusion, following an S-shaped curve with primary, diffusion, condensing and saturation stages; time geography maps individuals' paths in space-time.",
        more: "Swedish geographer who used Monte Carlo simulation of diffusion, a pioneering step in the quantitative revolution. His time-geography (space-time prisms) influenced sociology (Giddens).",
        books: [
          { t: "Innovation Diffusion as a Spatial Process (Innovationsförloppet ur korologisk synpunkt)", y: "1953 (English 1967)", lang: "Swedish", sum: "Studies the spread of farming innovations in central Sweden, modelling diffusion through a 'mean information field' and Monte Carlo simulation.", key: "Neighbourhood effect; S-curve; mean information field" }
        ] } ],
    ["Warren Thompson", 39.5070, -84.7452, "Scripps Foundation, Miami University, Oxford, Ohio", "First outline of the demographic transition (1929)", "model",
      { era: "1887–1973",
        place: "Director of the Scripps Foundation for Research in Population Problems at Miami University, Oxford, Ohio (pin)",
        idea: "Countries fall into three groups by birth and death rates — high births and deaths, falling deaths with high births, and low births and deaths — the basis of the demographic transition model later elaborated by Frank Notestein (1945).",
        more: "American demographer. The DTM (later 4–5 stages) is a core population-geography topic used to explain India's population growth.",
        books: [
          { t: "Population (American Journal of Sociology)", y: "1929", lang: "English", sum: "Classifies world populations into three groups by their stage of birth- and death-rate decline, an early statement of demographic transition.", key: "Demographic transition; three groups of countries" }
        ] } ],
    ["Ernst Georg Ravenstein", 51.5010, -0.1750, "London (Royal Geographical Society / Royal Statistical Society)", "Laws of migration (1885, 1889)", "model",
      { era: "1834–1913",
        place: "Worked in London as a cartographer and geographer (pin: Royal Geographical Society, Kensington); born at Frankfurt",
        idea: "Laws of migration: most migrants move short distances; migration proceeds by steps; long-distance migrants go to big cities; each current produces a counter-current; townsfolk migrate less than rural people; women migrate more over short distances; economic motives dominate.",
        more: "German-born British geographer who analysed British census birthplace data. His laws underlie gravity models and push-pull theory (E.S. Lee, 1966).",
        books: [
          { t: "The Laws of Migration", y: "1885 and 1889 (Journal of the Statistical Society)", lang: "English", sum: "Two papers using census data from Britain and other countries to formulate generalisations on distance, steps, counter-streams, sex, urban-rural differences and economic motives of migration.", key: "Distance decay; stepwise migration; counter-current" }
        ] } ],
    ["George Perkins Marsh", 43.6242, -72.5185, "Woodstock, Vermont, USA", "Man and Nature (1864): humans as destroyers of nature", "env",
      { era: "1801–1882",
        place: "Grew up at Woodstock, Vermont, observing deforestation (pin); later US Minister to Italy, where he wrote the book",
        idea: "Humans are a geological force who disturb nature's harmonies; deforestation causes erosion, floods and climate change, so forests and soils must be conserved and restored.",
        more: "Lawyer, diplomat and philologist, often called America's first environmentalist. His book inspired forest conservation and the creation of forest reserves in the USA and elsewhere; an early counterpoint to determinism.",
        books: [
          { t: "Man and Nature; or, Physical Geography as Modified by Human Action", y: "1864", lang: "English", sum: "Documents how human activities — clearing forests, draining wetlands, overgrazing — have degraded lands from the Mediterranean to New England, and calls for restoration.", key: "Human impact; deforestation; conservation" }
        ] } ],
    ["Rachel Carson", 38.9907, -77.0261, "Silver Spring, Maryland, USA", "Silent Spring (1962): pesticides & the modern environmental movement", "env",
      { era: "1907–1964",
        place: "Wrote Silent Spring at her home in Silver Spring, Maryland (pin); born at Springdale, Pennsylvania",
        idea: "Synthetic pesticides like DDT accumulate through food chains (biomagnification) and poison wildlife and people; humans are part of nature, not its masters.",
        more: "Marine biologist with the US Fish and Wildlife Service. Silent Spring led to the US ban on agricultural DDT (1972) and the creation of the EPA (1970), and launched the modern environmental movement. Relevant to UPSC (Stockholm Convention on POPs, GS3).",
        books: [
          { t: "Silent Spring", y: "1962", lang: "English", sum: "Shows how indiscriminate pesticide use (DDT, dieldrin) kills birds and fish, persists in the environment and threatens human health, imagining a spring without birdsong; criticises the chemical industry.", key: "DDT; biomagnification; 'silent spring'" },
          { t: "The Sea Around Us", y: "1951", lang: "English", sum: "Popular natural history of the ocean — its origin, tides, currents and life; won the US National Book Award.", key: "Oceanography; popular science" }
        ] } ],
    ["E. F. Schumacher", 16.8409, 96.1735, "Rangoon (Yangon), Burma — 'Buddhist economics'", "Small Is Beautiful; appropriate technology", "env",
      { era: "1911–1977",
        place: "His 1955 work in Burma as economic consultant inspired his 'Buddhist economics' (pin: Yangon); born at Bonn; Chief Economic Adviser to Britain's National Coal Board 1950–70",
        idea: "Economics should serve people, not the reverse: human-scale, decentralised 'intermediate' technology and 'Buddhist economics' (maximum well-being with minimum consumption); natural capital must not be treated as income.",
        more: "German-born British economist who was influenced by Gandhi and J.C. Kumarappa and advised the Government of India. He founded the Intermediate Technology Development Group (now Practical Action) in 1966.",
        books: [
          { t: "Small Is Beautiful: A Study of Economics as if People Mattered", y: "1973", lang: "English", sum: "Criticises gigantism and growth-obsessed economics that use up non-renewable resources as income; proposes Buddhist economics, intermediate technology and smaller, decentralised enterprises.", key: "Buddhist economics; intermediate technology; natural capital" },
          { t: "A Guide for the Perplexed", y: "1977", lang: "English", sum: "Philosophical book arguing for levels of being and against materialistic scientism.", key: "Levels of being" }
        ] } ],
    ["Garrett Hardin", 34.4140, -119.8489, "University of California, Santa Barbara", "The Tragedy of the Commons (1968)", "env",
      { era: "1915–2003",
        place: "Professor of human ecology at UC Santa Barbara (pin)",
        idea: "When a resource is open to all, each user gains fully from adding to his use but bears only part of the cost, so rational individuals together destroy the commons (overgrazing, overfishing, pollution).",
        more: "American ecologist. His essay is a key concept for environmental economics and policy (climate change, fisheries). Elinor Ostrom (Nobel 2009) later showed communities can manage commons sustainably. Hardin's coercive population views are controversial.",
        books: [
          { t: "The Tragedy of the Commons", y: "1968 (Science)", lang: "English", sum: "Using herdsmen on a shared pasture, argues that unregulated common resources are inevitably overexploited and that population growth has no technical solution, requiring 'mutual coercion mutually agreed upon'.", key: "Commons; overexploitation; mutual coercion" }
        ] } ],
    ["Paul R. Ehrlich", 37.4275, -122.1697, "Stanford University, California", "The Population Bomb (1968); I = PAT", "env",
      { era: "b. 1932",
        place: "Professor of biology at Stanford University (pin)",
        idea: "Population growth outstrips resources, causing famine and environmental collapse; environmental impact I = P × A × T (population, affluence, technology).",
        more: "Butterfly ecologist whose neo-Malthusian bestseller (co-written with his wife Anne Ehrlich, though credited to him alone) predicted mass famines in the 1970s, which the Green Revolution helped avert. A standard reference in population geography debates.",
        books: [
          { t: "The Population Bomb", y: "1968", lang: "English", sum: "Warns that rapid population growth will cause mass starvation and ecological disaster and calls for population control; famously opens with an impression of crowded Delhi.", key: "Neo-Malthusianism; I = PAT" }
        ] } ],
    ["Donella Meadows (Club of Rome)", 42.3601, -71.0942, "Massachusetts Institute of Technology, Cambridge, Massachusetts", "The Limits to Growth (1972) for the Club of Rome", "env",
      { era: "1941–2001",
        place: "MIT system dynamics group, where the World3 model was built (pin)",
        idea: "If growth in population, industrialisation, pollution, food production and resource use continues, the planet's limits will be reached within a century, leading to overshoot and collapse; sustainable equilibrium is possible if growth is checked early.",
        more: "Lead author with Dennis Meadows, Jørgen Randers and William Behrens III. Commissioned by the Club of Rome (founded 1968 by Aurelio Peccei and Alexander King), the report used Jay Forrester's system dynamics. Shaped the 1972 Stockholm Conference debates and the idea of sustainability.",
        books: [
          { t: "The Limits to Growth", y: "1972", lang: "English", sum: "Uses the World3 computer model to run scenarios of five interacting variables, showing that exponential growth on a finite planet leads to overshoot and collapse unless policies stabilise population and capital.", key: "World3; exponential growth; overshoot and collapse" },
          { t: "Thinking in Systems: A Primer", y: "2008 (posthumous)", lang: "English", sum: "Introduction to systems thinking — stocks, flows, feedback loops and leverage points.", key: "Systems thinking; leverage points" }
        ] } ],
    ["Gro Harlem Brundtland", 59.9139, 10.7522, "Oslo, Norway", "Our Common Future (1987): sustainable development defined", "env",
      { era: "b. 1939",
        place: "Prime Minister of Norway, based in Oslo (pin); chaired the UN World Commission on Environment and Development (1983–87)",
        idea: "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
        more: "Physician and three-time Prime Minister of Norway, later Director-General of WHO (1998–2003). The Brundtland Commission's report led to the 1992 Rio Earth Summit, Agenda 21 and eventually the SDGs. The definition is a must-quote in GS3 and essays.",
        books: [
          { t: "Our Common Future (Brundtland Report)", y: "1987", lang: "English", sum: "Report of the World Commission on Environment and Development linking poverty, inequality and environmental degradation, defining sustainable development and calling for integrating environment into economic decision-making worldwide.", key: "Sustainable development; intergenerational equity" }
        ] } ]
  ]
});
