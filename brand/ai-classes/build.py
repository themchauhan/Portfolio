"""Builds the AI classes brochure (English + Hindi) as HTML; render to PDF with Chrome (see README in reply)."""
import html, pathlib

HERE = pathlib.Path(__file__).parent
FEES_JR = ["₹2,000", "₹2,500", "₹3,000"]  # Classes 6–8: Basics, Builder, Advanced
FEES_SR = ["₹4,000", "₹4,500", "₹5,000"]  # Classes 9–12
PHONE = "+91 70150 66237"
EMAIL = "mani7015066@gmail.com"

T = {
"en": {
  "lang": "en", "font": "Inter", "qr": "qr-en.svg", "url": "themanishchauhan.in/ai-courses",
  "eyebrow": "AI classes for school students · Classes 6–12",
  "title": "Learn AI by building real things.",
  "intro": "Weekend classes where students make games, apps, websites and chatbots with AI, understand how AI really works, and learn to use it the right way for studies. From basics to advanced, in three levels.",
  "offer": "First batch: free admission and a free demo class for the first 20 students.",
  "tracks": [["Classes 6–8", "Make with AI", "Games, chatbots and first steps in coding"], ["Classes 9–12", "Build and Study with AI", "Smarter studying, websites, Python and AI projects"]],
  "where": "Offline in Rewari · Live online · Small batches of 10–15",
  "scan": "Scan to see the courses and book a free demo",
  "howTitle": "How the program works",
  "how": [["3 levels, step by step", "Every student starts at Level 1 (Basics) and moves to Level 2 (Builder) and Level 3 (Advanced). Students with prior experience can start higher after the demo."],
          ["8 weeks per level", "One 2-hour class every weekend (16 hours per level), with a short fun task between classes."],
          ["A project every level", "Each level ends with a showcase where students present what they built to parents."],
          ["Certificate", "Students receive a certificate of completion for every level they finish."]],
  "feesTitle": "Levels and fees",
  "feesHead": ["Level", "What students do", "Duration", "Classes 6–8", "Classes 9–12"],
  "levels": [["Level 1 · Basics", "Understand AI, use it safely, first projects"], ["Level 2 · Builder", "Build games, chatbots, websites and apps"], ["Level 3 · Advanced", "Real coding with Python and AI projects"]],
  "dur": "8 weeks · 16 hours",
  "feesNote": "Fees are per student for the full 8-week level. Free demo class before joining. Free admission for the first 20 students.",
  "teacherTitle": "Who teaches",
  "teacher": "Manish Chauhan is a full stack software developer with 8+ years of experience building websites and apps, including for large US technology companies. He builds with AI every day and runs his own software products. Students learn from someone who does this work for real.",
  "needTitle": "What students need",
  "need": "Level 1 works with a phone or computer. A laptop or computer is needed for Levels 2 and 3 and for online classes. No coding knowledge is needed to start.",
  "trackJunior": "Classes 6–8 · Make with AI",
  "trackSenior": "Classes 9–12 · Build and Study with AI",
  "week": "Week",
  "junior": [
    ["Level 1 · Basics", "Discover AI", FEES_JR[0], [
      "What is AI? Spotting AI around us: maps, YouTube, voice assistants",
      "How computers learn from examples: train a model to recognise pictures",
      "Talking to AI: asking clear questions and checking the answers",
      "Scratch basics: characters, movement and loops",
      "Make your first game in Scratch",
      "AI for studies: flashcards and quizzes the right way",
      "Online safety: privacy, deepfakes and fake news",
      "Mini project and showcase for parents"]],
    ["Level 2 · Builder", "Make with AI", FEES_JR[1], [
      "Game design: plan a game with goals, scores and levels",
      "Build a bigger Scratch game with levels and a score",
      "Train an AI model to recognise drawings or hand gestures",
      "Use your AI model inside your Scratch game",
      "Build a chatbot about a favourite school subject",
      "AI images and stories: creativity, honesty and copyright",
      "Make a personal study planner with AI",
      "Project week and showcase"]],
    ["Level 3 · Advanced", "Code with AI", FEES_JR[2], [
      "Start Python: drawing shapes and patterns with code",
      "Variables, loops and conditions through mini games",
      "Build a quiz game in Python",
      "How chatbots work: build a simple chatbot in Python",
      "Data and charts: run a class survey and chart the results",
      "Build a web page about yourself with HTML",
      "Final project build with teacher support",
      "Showcase and certificate"]],
  ],
  "senior": [
    ["Level 1 · Basics", "AI for Study and Life", FEES_SR[0], [
      "How AI and chatbots really work, and why they make mistakes",
      "Asking AI good questions: clear prompts that get useful answers",
      "AI for board exams: revision plans and practice questions",
      "AI for JEE and NEET concepts: explain, then verify with NCERT",
      "Research and fact-checking: sources and academic honesty",
      "Notes, summaries and flashcards that help you remember",
      "Safety: privacy, deepfakes and scams",
      "Project: your personal AI study system, plus showcase"]],
    ["Level 2 · Builder", "Build with AI", FEES_SR[1], [
      "How websites work: HTML and CSS basics",
      "Build your personal portfolio website",
      "Using AI as a coding assistant, and checking its code",
      "JavaScript basics: make pages interactive",
      "Build a web app: a quiz, planner or to-do app",
      "Publish your website online for free",
      "Project week with teacher reviews",
      "Showcase: a live website you can share"]],
    ["Level 3 · Advanced", "Python and AI Projects", FEES_SR[2], [
      "Python basics for real projects",
      "Working with data: lists, files and spreadsheets",
      "Charts and analysis with Python",
      "How machine learning works: train your first model",
      "Connect a Python app to an AI model",
      "Build a project: a study helper or an image recogniser",
      "Portfolio and GitHub for college applications",
      "Showcase, certificate and careers in AI"]],
  ],
  "schoolsTitle": "For schools and institutes",
  "schoolsIntro": "Bring practical AI learning to your students without extra load on your teachers.",
  "schools": [["Free AI workshop", "A 2-hour hands-on session for one class group. Students build something small and learn to use AI safely. Free of cost."],
              ["AI club in school", "The same 3-level program run weekly at your school, in your computer lab or classroom, for interested students."],
              ["Session for teachers", "A practical session on using AI for lesson planning, question papers and saving time, with clear rules on responsible use."]],
  "schoolsPrice": "School programs are planned with you; pricing on request.",
  "safetyTitle": "Our approach to safe and honest use",
  "safety": ["Students learn to use AI for practice and understanding, never for copying homework or exams.",
             "Every level teaches privacy, deepfakes and checking facts.",
             "Students use AI tools with the teacher's guidance during class.",
             "Parents see what their child built at every showcase."],
  "contactTitle": "Book a free demo class",
  "contactText": "Message on WhatsApp to book a demo, ask about batch timings or plan a school workshop.",
  "labels": ["WhatsApp / Call", "Email", "Website"],
  "page": "Page",
},
"hi": {
  "lang": "hi", "font": "Mukta", "qr": "qr-hi.svg", "url": "themanishchauhan.in/hi/ai-courses",
  "eyebrow": "स्कूल के बच्चों के लिए AI क्लास · कक्षा 6–12",
  "title": "AI सीखें, असली चीज़ें बनाकर।",
  "intro": "वीकेंड क्लास, जहाँ बच्चे AI की मदद से गेम, ऐप, वेबसाइट और चैटबॉट बनाते हैं, समझते हैं कि AI असल में कैसे काम करता है, और पढ़ाई में इसका सही इस्तेमाल सीखते हैं। बेसिक से एडवांस तक, तीन लेवल में।",
  "offer": "पहला बैच: पहले 20 बच्चों के लिए एडमिशन फ़्री, और डेमो क्लास भी फ़्री।",
  "tracks": [["कक्षा 6–8", "Make with AI", "गेम, चैटबॉट और कोडिंग की शुरुआत"], ["कक्षा 9–12", "Build and Study with AI", "स्मार्ट पढ़ाई, वेबसाइट, Python और AI प्रोजेक्ट"]],
  "where": "रेवाड़ी में ऑफ़लाइन · लाइव ऑनलाइन · 10–15 बच्चों के छोटे बैच",
  "scan": "कोर्स देखने और फ़्री डेमो बुक करने के लिए स्कैन करें",
  "howTitle": "प्रोग्राम कैसे चलता है",
  "how": [["3 लेवल, कदम दर कदम", "हर बच्चा लेवल 1 (बेसिक) से शुरू करता है, फिर लेवल 2 (बिल्डर) और लेवल 3 (एडवांस) में जाता है। जिन बच्चों को पहले से अनुभव है, वो डेमो के बाद आगे के लेवल से शुरू कर सकते हैं।"],
          ["हर लेवल 8 हफ़्ते", "हर वीकेंड 2 घंटे की एक क्लास (हर लेवल में 16 घंटे), और क्लास के बीच एक छोटा मज़ेदार टास्क।"],
          ["हर लेवल में एक प्रोजेक्ट", "हर लेवल के आख़िर में शोकेस होता है, जहाँ बच्चे अपना बनाया हुआ प्रोजेक्ट पेरेंट्स को दिखाते हैं।"],
          ["सर्टिफ़िकेट", "हर लेवल पूरा करने पर बच्चे को सर्टिफ़िकेट मिलता है।"]],
  "feesTitle": "लेवल और फ़ीस",
  "feesHead": ["लेवल", "बच्चे क्या करते हैं", "समय", "कक्षा 6–8", "कक्षा 9–12"],
  "levels": [["लेवल 1 · बेसिक", "AI को समझना, सुरक्षित इस्तेमाल, पहले प्रोजेक्ट"], ["लेवल 2 · बिल्डर", "गेम, चैटबॉट, वेबसाइट और ऐप बनाना"], ["लेवल 3 · एडवांस", "Python के साथ असली कोडिंग और AI प्रोजेक्ट"]],
  "dur": "8 हफ़्ते · 16 घंटे",
  "feesNote": "फ़ीस हर बच्चे के लिए पूरे 8 हफ़्ते के लेवल की है। जुड़ने से पहले फ़्री डेमो क्लास। पहले 20 बच्चों का एडमिशन फ़्री।",
  "teacherTitle": "कौन पढ़ाता है",
  "teacher": "मनीष चौहान 8+ साल के अनुभव वाले फ़ुल स्टैक सॉफ़्टवेयर डेवलपर हैं, जो बड़ी US टेक कंपनियों के लिए भी वेबसाइट और ऐप बना चुके हैं। वो रोज़ AI के साथ काम करते हैं और अपने सॉफ़्टवेयर प्रोडक्ट भी चलाते हैं। बच्चे उनसे सीखते हैं जो ये काम असल में करते हैं।",
  "needTitle": "बच्चों को क्या चाहिए",
  "need": "लेवल 1 फ़ोन या कंप्यूटर पर हो जाता है। लेवल 2 और 3 और ऑनलाइन क्लास के लिए लैपटॉप या कंप्यूटर ज़रूरी है। शुरू करने के लिए कोडिंग आना ज़रूरी नहीं।",
  "trackJunior": "कक्षा 6–8 · Make with AI",
  "trackSenior": "कक्षा 9–12 · Build and Study with AI",
  "week": "हफ़्ता",
  "junior": [
    ["लेवल 1 · बेसिक", "AI को जानें", FEES_JR[0], [
      "AI क्या है? हमारे आसपास AI: मैप्स, YouTube, वॉइस असिस्टेंट",
      "कंप्यूटर उदाहरणों से कैसे सीखता है: तस्वीरें पहचानने वाला मॉडल बनाना",
      "AI से बात करना: साफ़ सवाल पूछना और जवाब चेक करना",
      "Scratch की बेसिक्स: कैरेक्टर, मूवमेंट और लूप",
      "Scratch में अपना पहला गेम बनाना",
      "पढ़ाई में AI: सही तरीके से फ़्लैशकार्ड और क्विज़",
      "ऑनलाइन सेफ़्टी: प्राइवेसी, डीपफ़ेक और फ़ेक न्यूज़",
      "मिनी प्रोजेक्ट और पेरेंट्स के लिए शोकेस"]],
    ["लेवल 2 · बिल्डर", "AI से बनाएँ", FEES_JR[1], [
      "गेम डिज़ाइन: लक्ष्य, स्कोर और लेवल के साथ गेम प्लान करना",
      "लेवल और स्कोर वाला बड़ा Scratch गेम बनाना",
      "ड्रॉइंग या हाथ के इशारे पहचानने वाला AI मॉडल ट्रेन करना",
      "अपने AI मॉडल को Scratch गेम में इस्तेमाल करना",
      "पसंदीदा स्कूल सब्जेक्ट पर चैटबॉट बनाना",
      "AI से इमेज और कहानियाँ: क्रिएटिविटी, ईमानदारी और कॉपीराइट",
      "AI से अपना स्टडी प्लानर बनाना",
      "प्रोजेक्ट वीक और शोकेस"]],
    ["लेवल 3 · एडवांस", "AI के साथ कोडिंग", FEES_JR[2], [
      "Python की शुरुआत: कोड से आकार और पैटर्न बनाना",
      "मिनी गेम्स से वेरिएबल, लूप और कंडीशन",
      "Python में क्विज़ गेम बनाना",
      "चैटबॉट कैसे काम करते हैं: Python में आसान चैटबॉट बनाना",
      "डेटा और चार्ट: क्लास सर्वे करके उसका चार्ट बनाना",
      "HTML से अपने बारे में एक वेब पेज बनाना",
      "टीचर की मदद से फ़ाइनल प्रोजेक्ट",
      "शोकेस और सर्टिफ़िकेट"]],
  ],
  "senior": [
    ["लेवल 1 · बेसिक", "पढ़ाई और ज़िंदगी में AI", FEES_SR[0], [
      "AI और चैटबॉट असल में कैसे काम करते हैं, और गलती क्यों करते हैं",
      "AI से अच्छे सवाल पूछना: काम के जवाब पाने वाले साफ़ प्रॉम्प्ट",
      "बोर्ड एग्ज़ाम के लिए AI: रिवीज़न प्लान और प्रैक्टिस सवाल",
      "JEE और NEET के कॉन्सेप्ट: AI से समझें, फिर NCERT से चेक करें",
      "रिसर्च और फ़ैक्ट चेक: सोर्स और पढ़ाई में ईमानदारी",
      "नोट्स, समरी और फ़्लैशकार्ड जो याद रखने में मदद करें",
      "सेफ़्टी: प्राइवेसी, डीपफ़ेक और स्कैम",
      "प्रोजेक्ट: अपना AI स्टडी सिस्टम, और शोकेस"]],
    ["लेवल 2 · बिल्डर", "AI से बनाएँ", FEES_SR[1], [
      "वेबसाइट कैसे काम करती है: HTML और CSS की बेसिक्स",
      "अपनी पर्सनल पोर्टफ़ोलियो वेबसाइट बनाना",
      "AI को कोडिंग असिस्टेंट की तरह इस्तेमाल करना, और उसका कोड चेक करना",
      "JavaScript की बेसिक्स: पेज को इंटरैक्टिव बनाना",
      "वेब ऐप बनाना: क्विज़, प्लानर या टू-डू ऐप",
      "अपनी वेबसाइट फ़्री में ऑनलाइन पब्लिश करना",
      "टीचर रिव्यू के साथ प्रोजेक्ट वीक",
      "शोकेस: एक लाइव वेबसाइट जो आप शेयर कर सकें"]],
    ["लेवल 3 · एडवांस", "Python और AI प्रोजेक्ट", FEES_SR[2], [
      "असली प्रोजेक्ट के लिए Python की बेसिक्स",
      "डेटा के साथ काम: लिस्ट, फ़ाइल और स्प्रेडशीट",
      "Python से चार्ट और एनालिसिस",
      "मशीन लर्निंग कैसे काम करती है: अपना पहला मॉडल ट्रेन करना",
      "Python ऐप को AI मॉडल से जोड़ना",
      "प्रोजेक्ट बनाना: स्टडी हेल्पर या इमेज पहचानने वाला ऐप",
      "कॉलेज एप्लिकेशन के लिए पोर्टफ़ोलियो और GitHub",
      "शोकेस, सर्टिफ़िकेट और AI में करियर"]],
  ],
  "schoolsTitle": "स्कूल और इंस्टिट्यूट के लिए",
  "schoolsIntro": "टीचर्स पर अतिरिक्त बोझ डाले बिना, अपने छात्रों को प्रैक्टिकल AI सिखाएँ।",
  "schools": [["फ़्री AI वर्कशॉप", "एक कक्षा ग्रुप के लिए 2 घंटे का हैंड्स-ऑन सेशन। बच्चे कुछ छोटा बनाते हैं और AI का सुरक्षित इस्तेमाल सीखते हैं। बिल्कुल फ़्री।"],
              ["स्कूल में AI क्लब", "यही 3-लेवल प्रोग्राम आपके स्कूल में, कंप्यूटर लैब या क्लासरूम में, इच्छुक बच्चों के लिए हर हफ़्ते।"],
              ["टीचर्स के लिए सेशन", "लेसन प्लान, क्वेश्चन पेपर और समय बचाने के लिए AI का प्रैक्टिकल सेशन, ज़िम्मेदार इस्तेमाल के साफ़ नियमों के साथ।"]],
  "schoolsPrice": "स्कूल प्रोग्राम आपके साथ मिलकर प्लान होते हैं; फ़ीस पूछने पर।",
  "safetyTitle": "सुरक्षित और ईमानदार इस्तेमाल का हमारा तरीका",
  "safety": ["बच्चे AI को प्रैक्टिस और समझने के लिए इस्तेमाल करना सीखते हैं, होमवर्क या एग्ज़ाम में कॉपी करने के लिए कभी नहीं।",
             "हर लेवल में प्राइवेसी, डीपफ़ेक और फ़ैक्ट चेक करना सिखाया जाता है।",
             "क्लास में बच्चे टीचर की देखरेख में AI टूल्स इस्तेमाल करते हैं।",
             "हर शोकेस में पेरेंट्स देखते हैं कि बच्चे ने क्या बनाया।"],
  "contactTitle": "फ़्री डेमो क्लास बुक करें",
  "contactText": "डेमो बुक करने, बैच टाइमिंग पूछने या स्कूल वर्कशॉप प्लान करने के लिए WhatsApp करें।",
  "labels": ["WhatsApp / कॉल", "ईमेल", "वेबसाइट"],
  "page": "पेज",
},
}

CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --ink:#111; --muted:#555; --bg:#f4f1ec; --line:rgba(0,0,0,.14); --accent:#ff5a1f; }
html, body { color: var(--ink); font-size: 10pt; line-height: 1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; padding: 15mm 15mm 12mm; background: var(--bg); display: flex; flex-direction: column; page-break-after: always; overflow: hidden; position: relative; }
.page:last-child { page-break-after: auto; }
.d { font-family: "Bricolage Grotesque", var(--body), sans-serif; font-weight: 800; letter-spacing: -0.015em; line-height: 1.08; }
.hi .d { font-family: var(--body), sans-serif; letter-spacing: 0; line-height: 1.25; }
.eyebrow { color: var(--accent); font-weight: 600; font-size: 9.5pt; }
.top { display:flex; justify-content:space-between; align-items:center; font-size:8.5pt; color:var(--muted); }
.logo { display:flex; align-items:center; gap:7px; font-family:"Bricolage Grotesque",sans-serif; font-weight:800; font-size:13pt; color:var(--ink); }
.logo b { width:22px; height:22px; border-radius:6px; background:var(--ink); color:#fff; display:grid; place-items:center; font-size:11pt; position:relative; }
.logo b::after { content:""; position:absolute; right:3px; bottom:3px; width:5px; height:5px; border-radius:50%; background:var(--accent); }
.logo span::after { content:"."; color:var(--accent); }
.foot { margin-top:auto; padding-top:5mm; border-top:1px solid var(--line); display:flex; justify-content:space-between; font-size:8pt; color:#888; }
h2.d { font-size: 22pt; margin-top: 2mm; }
.card { background:#fff; border:1px solid var(--line); border-radius:10px; padding:4.5mm 5mm; }
.offer { display:inline-block; background:var(--accent); color:#fff; font-weight:600; border-radius:99px; padding:2mm 5mm; font-size:10pt; }
/* cover */
.cover h1 { font-size: 40pt; margin-top: 4mm; }
.cover .intro { font-size: 12.5pt; color:#444; margin-top: 6mm; max-width: 150mm; }
.tracks { display:grid; grid-template-columns:1fr 1fr; gap:5mm; margin-top:9mm; }
.tracks .card { border-top:4px solid var(--ink); border-radius:0; padding:6mm; }
.tracks .card:last-child { background:var(--ink); color:#fff; border-color:var(--ink); }
.tracks .lvl { color:var(--accent); font-weight:600; font-size:9pt; text-transform:uppercase; letter-spacing:.06em; }
.hi .tracks .lvl { text-transform:none; letter-spacing:0; }
.tracks h3 { font-size:18pt; margin:2mm 0; }
.tracks p { color:var(--muted); }
.tracks .card:last-child p { color:#cfcac2; }
.levelsRow { display:flex; gap:3mm; margin-top:7mm; }
.levelsRow div { flex:1; text-align:center; padding:4mm 2mm; border-radius:10px; background:#fff; border:1px solid var(--line); }
.levelsRow div:nth-child(2) { background:#ffe6dc; }
.levelsRow div:nth-child(3) { background:var(--accent); color:#fff; border-color:var(--accent); }
.levelsRow strong { display:block; font-size:12pt; }
.levelsRow span { font-size:8.5pt; }
.qrbox { display:flex; align-items:center; gap:6mm; margin-top:auto; background:#fff; border-radius:14px; padding:6mm; border:1px solid var(--line); }
.qrbox img { width:30mm; height:30mm; }
.qrbox strong { font-size:13pt; display:block; }
/* how + fees */
.how { display:grid; grid-template-columns:1fr 1fr; gap:4mm; margin-top:5mm; }
.how h3 { font-size:11.5pt; }
.how p { color:var(--muted); font-size:9pt; margin-top:1mm; }
table { width:100%; border-collapse:collapse; margin-top:4mm; background:#fff; border-radius:10px; overflow:hidden; }
th { background:var(--ink); color:#fff; text-align:left; font-size:9pt; padding:3mm 4mm; white-space:nowrap; }
td { padding:3.2mm 4mm; border-top:1px solid var(--line); font-size:9.5pt; vertical-align:top; }
td.fee { font-weight:800; font-size:12.5pt; white-space:nowrap; }
td.lv { font-weight:700; white-space:nowrap; }
.note { font-size:8.8pt; color:var(--muted); margin-top:3mm; }
.two { display:grid; grid-template-columns:1.3fr 1fr; gap:4mm; margin-top:6mm; }
.two h3 { font-size:12pt; }
.two p { color:var(--muted); font-size:9pt; margin-top:1.5mm; }
/* syllabus */
.levels { display:grid; gap:4mm; margin-top:5mm; }
.lvlcard { background:#fff; border:1px solid var(--line); border-radius:12px; padding:4.5mm 5mm; }
.lvlhead { display:flex; justify-content:space-between; align-items:baseline; gap:4mm; border-bottom:1px solid var(--line); padding-bottom:2mm; margin-bottom:2mm; }
.lvlhead .t { font-size:13pt; }
.lvlhead .t small { color:var(--accent); font-size:9pt; font-weight:700; margin-right:2mm; font-family: var(--body), sans-serif; letter-spacing:0; }
.lvlhead .p { font-weight:800; font-size:12pt; white-space:nowrap; }
.lvlhead .p span { font-weight:400; font-size:8pt; color:var(--muted); }
ol.weeks { list-style:none; display:grid; grid-template-columns:1fr 1fr; column-gap:6mm; row-gap:1.2mm; }
ol.weeks li { display:flex; gap:2.5mm; font-size:8.8pt; color:#333; line-height:1.4; }
ol.weeks b { color:var(--accent); min-width:13mm; white-space:nowrap; font-size:8pt; padding-top:.3mm; }
.hi ol.weeks b { min-width:15mm; }
.lvlcard:nth-child(3) { border:2px solid var(--accent); }
/* schools */
.schools { display:grid; grid-template-columns:repeat(3,1fr); gap:4mm; margin-top:5mm; }
.schools .card { border-top:4px solid var(--accent); border-radius:0; }
.schools h3 { font-size:12pt; }
.schools p { color:var(--muted); font-size:9pt; margin-top:1.5mm; }
ul.safety { list-style:none; margin-top:3mm; display:grid; gap:2mm; }
ul.safety li { display:flex; gap:3mm; font-size:9.5pt; color:#333; }
ul.safety li::before { content:"✓"; color:var(--accent); font-weight:800; }
.contact { margin-top:auto; background:var(--ink); color:#fff; border-radius:14px; padding:7mm 8mm; display:grid; grid-template-columns:1.2fr 1fr auto; gap:6mm; align-items:center; }
.contact h3 { font-size:18pt; }
.contact p { color:#cfcac2; font-size:9pt; margin-top:2mm; }
.contact dt { color:var(--accent); font-weight:600; font-size:7.5pt; text-transform:uppercase; letter-spacing:.08em; margin-top:2.5mm; }
.hi .contact dt { text-transform:none; letter-spacing:0; font-size:8.5pt; }
.contact dt:first-child { margin-top:0; }
.contact dd { font-size:9.5pt; }
.contact img { width:26mm; height:26mm; background:#fff; padding:2mm; border-radius:6px; }
"""

def e(s): return html.escape(s)

def header(t, right):
    return f'<div class="top"><div class="logo"><b>M</b><span>manish</span></div><div>{e(right)}</div></div>'

def footer(t, n):
    return f'<div class="foot"><span>Manish Chauhan · {e(t["url"])}</span><span>{t["page"]} {n} / 5</span></div>'

def level_card(t, lvl):
    name, sub, fee, weeks = lvl
    items = "".join(f'<li><b>{t["week"]} {i+1}</b><span>{e(w)}</span></li>' for i, w in enumerate(weeks))
    return (f'<div class="lvlcard"><div class="lvlhead"><div class="t d"><small>{e(name)}</small>{e(sub)}</div>'
            f'<div class="p">{fee} <span>/ 8 {"weeks" if t["lang"]=="en" else "हफ़्ते"}</span></div></div><ol class="weeks">{items}</ol></div>')

def build(lang):
    t = T[lang]
    font_link = ('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Inter:wght@400;600;700;800&display=swap' if lang == 'en'
                 else 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Mukta:wght@400;600;700;800&display=swap')
    tracks = "".join(f'<div class="card"><p class="lvl">{e(a)}</p><h3 class="d">{e(b)}</h3><p>{e(c)}</p></div>' for a, b, c in t["tracks"])
    lrow = "".join(f'<div><strong>{e(n)}</strong><span>{e(d)}</span></div>' for n, d in t["levels"])
    p1 = f'''<section class="page cover">{header(t, t["url"])}
      <p class="eyebrow" style="margin-top:12mm">{e(t["eyebrow"])}</p>
      <h1 class="d">{e(t["title"])}</h1>
      <p class="intro">{e(t["intro"])}</p>
      <p style="margin-top:6mm"><span class="offer">{e(t["offer"])}</span></p>
      <div class="tracks">{tracks}</div>
      <div class="levelsRow">{lrow}</div>
      <p class="note" style="margin-top:4mm;font-size:10pt">{e(t["where"])}</p>
      <div class="qrbox" style="margin-top:8mm"><img src="{t["qr"]}" alt="QR"><div><strong class="d">{e(t["contactTitle"])}</strong><p class="note" style="margin-top:1mm">{e(t["scan"])}</p><p style="margin-top:2mm;font-weight:600">WhatsApp: {PHONE}</p></div></div>
      {footer(t, 1)}</section>'''
    how = "".join(f'<div class="card"><h3 class="d">{e(a)}</h3><p>{e(b)}</p></div>' for a, b in t["how"])
    rows = "".join(f'<tr><td class="lv">{e(n)}</td><td>{e(d)}</td><td>{e(t["dur"])}</td><td class="fee">{FEES_JR[i]}</td><td class="fee">{FEES_SR[i]}</td></tr>' for i, (n, d) in enumerate(t["levels"]))
    head = "".join(f'<th>{e(h)}</th>' for h in t["feesHead"])
    p2 = f'''<section class="page">{header(t, t["howTitle"])}
      <h2 class="d" style="margin-top:8mm">{e(t["howTitle"])}</h2>
      <div class="how">{how}</div>
      <h2 class="d" style="margin-top:8mm">{e(t["feesTitle"])}</h2>
      <table><thead><tr>{head}</tr></thead><tbody>{rows}</tbody></table>
      <p class="note">{e(t["feesNote"])}</p>
      <div class="two"><div class="card"><h3 class="d">{e(t["teacherTitle"])}</h3><p>{e(t["teacher"])}</p></div><div class="card"><h3 class="d">{e(t["needTitle"])}</h3><p>{e(t["need"])}</p></div></div>
      {footer(t, 2)}</section>'''
    p3 = f'''<section class="page">{header(t, t["trackJunior"])}
      <p class="eyebrow" style="margin-top:6mm">{e(t["tracks"][0][0])}</p><h2 class="d">{e(t["trackJunior"].split("·")[1].strip())}</h2>
      <div class="levels">{"".join(level_card(t, l) for l in t["junior"])}</div>
      {footer(t, 3)}</section>'''
    p4 = f'''<section class="page">{header(t, t["trackSenior"])}
      <p class="eyebrow" style="margin-top:6mm">{e(t["tracks"][1][0])}</p><h2 class="d">{e(t["trackSenior"].split("·")[1].strip())}</h2>
      <div class="levels">{"".join(level_card(t, l) for l in t["senior"])}</div>
      {footer(t, 4)}</section>'''
    schools = "".join(f'<div class="card"><h3 class="d">{e(a)}</h3><p>{e(b)}</p></div>' for a, b in t["schools"])
    safety = "".join(f'<li>{e(s)}</li>' for s in t["safety"])
    lab = t["labels"]
    p5 = f'''<section class="page">{header(t, t["schoolsTitle"])}
      <h2 class="d" style="margin-top:8mm">{e(t["schoolsTitle"])}</h2>
      <p style="color:#444;font-size:11pt;margin-top:2mm">{e(t["schoolsIntro"])}</p>
      <div class="schools">{schools}</div>
      <p class="note">{e(t["schoolsPrice"])}</p>
      <h2 class="d" style="margin-top:9mm;font-size:17pt">{e(t["safetyTitle"])}</h2>
      <ul class="safety">{safety}</ul>
      <div class="contact" style="margin-top:9mm"><div><h3 class="d">{e(t["contactTitle"])}</h3><p>{e(t["contactText"])}</p></div>
        <dl><dt>{e(lab[0])}</dt><dd>{PHONE}</dd><dt>{e(lab[1])}</dt><dd>{EMAIL}</dd><dt>{e(lab[2])}</dt><dd>{e(t["url"])}</dd></dl>
        <img src="{t["qr"]}" alt="QR"></div>
      {footer(t, 5)}</section>'''
    doc = f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>AI Classes, Manish Chauhan</title>
<link href="{font_link}" rel="stylesheet"><style>:root{{--body:"{t["font"]}"}} body{{font-family:var(--body),Arial,sans-serif}} {CSS}</style></head>
<body class="{lang}">{p1}{p2}{p3}{p4}{p5}</body></html>'''
    (HERE / f"brochure-{lang}.html").write_text(doc, encoding="utf-8")

for l in ("en", "hi"):
    build(l)
print("built")
