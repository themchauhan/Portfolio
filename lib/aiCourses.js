// Content for the AI courses page, in English and Hindi (simple Hindi with common English words).

// Fees per student for one 8-week level (16 hours). Keep in sync with brand/ai-classes/build.py.
export const aiFees = {
  junior: [2000, 2500, 3000], // Classes 6–8: Basics, Builder, Advanced
  senior: [4000, 4500, 5000], // Classes 9–12
};

export const aiCourses = {
  en: {
    eyebrow: "AI classes for school students · Classes 6–12",
    title: "Learn AI by building real things.",
    intro: "Small weekend classes where students make games, apps and chatbots with AI, learn how AI really works, and use it the right way to study better. Offline in Rewari and live online.",
    offer: "First batch: free admission and a free demo class for the first 20 students.",
    demoCta: "Book a free demo class",
    coursesCta: "See the courses",
    whatsapp: "Hi Manish, I'd like to book a free AI demo class for my child (Class __).",
    badges: ["Classes 6–8", "Classes 9–12", "Offline in Rewari + online", "Small batches", "No coding needed to start"],
    whyTitle: "Why parents choose these classes",
    why: [
      ["They build, not just watch", "Every class ends with something your child made: a game, a chatbot, a website or an app they can show you."],
      ["They study smarter, honestly", "Students learn to use AI for revision plans, practice questions and doubt clearing, not for copying homework."],
      ["They stay safe online", "Deepfakes, privacy and checking facts: children learn when not to trust AI, which matters as much as using it."],
    ],
    coursesTitle: "Two courses, from basics to advanced",
    coursesIntro: "Each course has three levels of 8 weeks: Basics, Builder and Advanced. Here is what students learn every week.",
    weekLabel: "Week",
    courses: [
      {
        level: "Classes 6–8",
        name: "Make with AI",
        meta: "3 levels · 8 weeks each · one 2-hour class every weekend",
        points: [
          "How AI works, explained simply: how it learns and why it makes mistakes",
          "Make a game in Scratch with AI as a helper",
          "Build a chatbot about a favourite school subject",
          "AI for studies: flashcards, summaries and self-quizzes",
          "Online safety: deepfakes, privacy and fake news",
          "Showcase day: students present their project to parents",
        ],
        takeaway: "Takes home: a game and a chatbot they built themselves.",
        syllabus: [
          {
            "name": "Level 1 · Basics",
            "title": "Discover AI",
            "weeks": [
              "What is AI? Spotting AI around us: maps, YouTube, voice assistants",
              "How computers learn from examples: train a model to recognise pictures",
              "Talking to AI: asking clear questions and checking the answers",
              "Scratch basics: characters, movement and loops",
              "Make your first game in Scratch",
              "AI for studies: flashcards and quizzes the right way",
              "Online safety: privacy, deepfakes and fake news",
              "Mini project and showcase for parents"
            ]
          },
          {
            "name": "Level 2 · Builder",
            "title": "Make with AI",
            "weeks": [
              "Game design: plan a game with goals, scores and levels",
              "Build a bigger Scratch game with levels and a score",
              "Train an AI model to recognise drawings or hand gestures",
              "Use your AI model inside your Scratch game",
              "Build a chatbot about a favourite school subject",
              "AI images and stories: creativity, honesty and copyright",
              "Make a personal study planner with AI",
              "Project week and showcase"
            ]
          },
          {
            "name": "Level 3 · Advanced",
            "title": "Code with AI",
            "weeks": [
              "Start Python: drawing shapes and patterns with code",
              "Variables, loops and conditions through mini games",
              "Build a quiz game in Python",
              "How chatbots work: build a simple chatbot in Python",
              "Data and charts: run a class survey and chart the results",
              "Build a web page about yourself with HTML",
              "Final project build with teacher support",
              "Showcase and certificate"
            ]
          }
        ],
      },
      {
        level: "Classes 9–12",
        name: "Build and Study with AI",
        meta: "3 levels · 8 weeks each · one 2-hour class every weekend",
        points: [
          "Build a real website or app with AI tools",
          "Python basics and how AI models work",
          "AI for boards, JEE and NEET: revision plans, practice questions, doubt clearing",
          "How to check AI answers and avoid wrong information",
          "A final project for college applications and CVs",
          "Careers in AI and tech, and the skills that will still matter",
        ],
        takeaway: "Takes home: a live website or app and a project they can show colleges.",
        syllabus: [
          {
            "name": "Level 1 · Basics",
            "title": "AI for Study and Life",
            "weeks": [
              "How AI and chatbots really work, and why they make mistakes",
              "Asking AI good questions: clear prompts that get useful answers",
              "AI for board exams: revision plans and practice questions",
              "AI for JEE and NEET concepts: explain, then verify with NCERT",
              "Research and fact-checking: sources and academic honesty",
              "Notes, summaries and flashcards that help you remember",
              "Safety: privacy, deepfakes and scams",
              "Project: your personal AI study system, plus showcase"
            ]
          },
          {
            "name": "Level 2 · Builder",
            "title": "Build with AI",
            "weeks": [
              "How websites work: HTML and CSS basics",
              "Build your personal portfolio website",
              "Using AI as a coding assistant, and checking its code",
              "JavaScript basics: make pages interactive",
              "Build a web app: a quiz, planner or to-do app",
              "Publish your website online for free",
              "Project week with teacher reviews",
              "Showcase: a live website you can share"
            ]
          },
          {
            "name": "Level 3 · Advanced",
            "title": "Python and AI Projects",
            "weeks": [
              "Python basics for real projects",
              "Working with data: lists, files and spreadsheets",
              "Charts and analysis with Python",
              "How machine learning works: train your first model",
              "Connect a Python app to an AI model",
              "Build a project: a study helper or an image recogniser",
              "Portfolio and GitHub for college applications",
              "Showcase, certificate and careers in AI"
            ]
          }
        ],
      },
    ],
    feesTitle: "Levels and fees",
    feesIntro: "Every student starts at Level 1 and moves up one level at a time. Students with prior experience can start higher after the free demo.",
    levels: [
      ["Level 1 · Basics", "Understand AI, use it safely, first projects"],
      ["Level 2 · Builder", "Build games, chatbots, websites and apps"],
      ["Level 3 · Advanced", "Real coding with Python and AI projects"],
    ],
    duration: "8 weeks · 16 hours",
    juniorLabel: "Classes 6–8",
    seniorLabel: "Classes 9–12",
    feesNote: "Fees are per student for the full 8-week level. Free demo class before joining, and free admission for the first 20 students.",
    stepsTitle: "How it works",
    steps: [
      ["Free demo class", "Your child joins a 1–2 hour demo and builds something small on day one."],
      ["Join a small batch", "Weekend batches of 10–15 students, offline in Rewari or live online."],
      ["Build every week", "Each class adds a new piece to their project, with homework that is fun to do."],
      ["Showcase day", "At the end, students present what they built to parents."],
    ],
    teacherTitle: "Who teaches",
    deskAlt: "Manish's work desk with an iMac, a MacBook Pro and books",
    teacher: "Classes are taught by Manish Chauhan, a full stack software developer with 8+ years of experience building websites and apps, including for large US technology companies. He builds with AI every day and also runs his own software products. Students learn from someone who does this work for real.",
    faqTitle: "Questions parents ask",
    faqs: [
      ["Does my child need to know coding?", "No. The courses start from zero. Students who already know some coding get harder challenges."],
      ["Won't AI make my child lazy in studies?", "We teach the opposite: using AI to practise, revise and clear doubts, not to copy answers. Students also learn to check when AI is wrong."],
      ["Does my child need a laptop?", "A laptop or computer is best, and is needed for online classes. Some activities work on a phone. Ask us on WhatsApp if your child does not have one."],
      ["Where are the offline classes?", "In Rewari, Haryana. The exact place and timings are shared on WhatsApp when you book the demo."],
      ["How many students are in a batch?", "10–15 students, so every child gets attention."],
      ["What are the fees?", "Fees are per 8-week level. Classes 6–8: ₹2,000 (Level 1), ₹2,500 (Level 2), ₹3,000 (Level 3). Classes 9–12: ₹4,000 (Level 1), ₹4,500 (Level 2), ₹5,000 (Level 3)."],
      ["Is there anything for the first batch?", "The first 20 students get free admission (no admission fee) and a free demo class. Book on WhatsApp to reserve a place."],
    ],
    finalTitle: "Book a free demo class",
    finalText: "See how your child learns before you pay anything. Free admission for the first 20 students.",
    switchLabel: "हिंदी में पढ़ें",
  },
  hi: {
    eyebrow: "स्कूल के बच्चों के लिए AI क्लास · कक्षा 6–12",
    title: "AI सीखें, असली चीज़ें बनाकर।",
    intro: "छोटे वीकेंड बैच, जहाँ बच्चे AI की मदद से गेम, ऐप और चैटबॉट बनाते हैं, समझते हैं कि AI असल में कैसे काम करता है, और पढ़ाई में इसका सही इस्तेमाल सीखते हैं। रेवाड़ी में ऑफ़लाइन और लाइव ऑनलाइन।",
    offer: "पहला बैच: पहले 20 बच्चों के लिए एडमिशन फ़्री, और डेमो क्लास भी फ़्री।",
    demoCta: "फ़्री डेमो क्लास बुक करें",
    coursesCta: "कोर्स देखें",
    whatsapp: "नमस्ते मनीष जी, मैं अपने बच्चे (कक्षा __) के लिए फ़्री AI डेमो क्लास बुक करना चाहता/चाहती हूँ।",
    badges: ["कक्षा 6–8", "कक्षा 9–12", "रेवाड़ी में ऑफ़लाइन + ऑनलाइन", "छोटे बैच", "शुरू करने के लिए कोडिंग ज़रूरी नहीं"],
    whyTitle: "पेरेंट्स ये क्लास क्यों चुनते हैं",
    why: [
      ["बच्चे सिर्फ़ देखते नहीं, बनाते हैं", "हर क्लास में बच्चा कुछ बनाता है: गेम, चैटबॉट, वेबसाइट या ऐप, जो वो आपको दिखा सके।"],
      ["पढ़ाई स्मार्ट तरीके से, ईमानदारी से", "बच्चे AI से रिवीज़न प्लान, प्रैक्टिस सवाल और डाउट क्लियर करना सीखते हैं, होमवर्क कॉपी करना नहीं।"],
      ["ऑनलाइन सुरक्षित रहना", "डीपफ़ेक, प्राइवेसी और फ़ैक्ट चेक करना: बच्चे सीखते हैं कि कब AI पर भरोसा नहीं करना है।"],
    ],
    coursesTitle: "दो कोर्स, बेसिक से एडवांस तक",
    coursesIntro: "हर कोर्स में 8-8 हफ़्ते के तीन लेवल हैं: बेसिक, बिल्डर और एडवांस। हर हफ़्ते बच्चे क्या सीखते हैं, यहाँ देखें।",
    weekLabel: "हफ़्ता",
    courses: [
      {
        level: "कक्षा 6–8",
        name: "Make with AI",
        meta: "3 लेवल · हर लेवल 8 हफ़्ते · हर वीकेंड 2 घंटे की एक क्लास",
        points: [
          "AI कैसे काम करता है, आसान भाषा में: ये कैसे सीखता है और गलती क्यों करता है",
          "AI की मदद से Scratch में गेम बनाना",
          "अपने पसंदीदा सब्जेक्ट पर चैटबॉट बनाना",
          "पढ़ाई में AI: फ़्लैशकार्ड, समरी और खुद का क्विज़",
          "ऑनलाइन सेफ़्टी: डीपफ़ेक, प्राइवेसी और फ़ेक न्यूज़",
          "शोकेस डे: बच्चे अपना प्रोजेक्ट पेरेंट्स को दिखाते हैं",
        ],
        takeaway: "साथ ले जाते हैं: खुद का बनाया गेम और चैटबॉट।",
        syllabus: [
          {
            "name": "लेवल 1 · बेसिक",
            "title": "AI को जानें",
            "weeks": [
              "AI क्या है? हमारे आसपास AI: मैप्स, YouTube, वॉइस असिस्टेंट",
              "कंप्यूटर उदाहरणों से कैसे सीखता है: तस्वीरें पहचानने वाला मॉडल बनाना",
              "AI से बात करना: साफ़ सवाल पूछना और जवाब चेक करना",
              "Scratch की बेसिक्स: कैरेक्टर, मूवमेंट और लूप",
              "Scratch में अपना पहला गेम बनाना",
              "पढ़ाई में AI: सही तरीके से फ़्लैशकार्ड और क्विज़",
              "ऑनलाइन सेफ़्टी: प्राइवेसी, डीपफ़ेक और फ़ेक न्यूज़",
              "मिनी प्रोजेक्ट और पेरेंट्स के लिए शोकेस"
            ]
          },
          {
            "name": "लेवल 2 · बिल्डर",
            "title": "AI से बनाएँ",
            "weeks": [
              "गेम डिज़ाइन: लक्ष्य, स्कोर और लेवल के साथ गेम प्लान करना",
              "लेवल और स्कोर वाला बड़ा Scratch गेम बनाना",
              "ड्रॉइंग या हाथ के इशारे पहचानने वाला AI मॉडल ट्रेन करना",
              "अपने AI मॉडल को Scratch गेम में इस्तेमाल करना",
              "पसंदीदा स्कूल सब्जेक्ट पर चैटबॉट बनाना",
              "AI से इमेज और कहानियाँ: क्रिएटिविटी, ईमानदारी और कॉपीराइट",
              "AI से अपना स्टडी प्लानर बनाना",
              "प्रोजेक्ट वीक और शोकेस"
            ]
          },
          {
            "name": "लेवल 3 · एडवांस",
            "title": "AI के साथ कोडिंग",
            "weeks": [
              "Python की शुरुआत: कोड से आकार और पैटर्न बनाना",
              "मिनी गेम्स से वेरिएबल, लूप और कंडीशन",
              "Python में क्विज़ गेम बनाना",
              "चैटबॉट कैसे काम करते हैं: Python में आसान चैटबॉट बनाना",
              "डेटा और चार्ट: क्लास सर्वे करके उसका चार्ट बनाना",
              "HTML से अपने बारे में एक वेब पेज बनाना",
              "टीचर की मदद से फ़ाइनल प्रोजेक्ट",
              "शोकेस और सर्टिफ़िकेट"
            ]
          }
        ],
      },
      {
        level: "कक्षा 9–12",
        name: "Build and Study with AI",
        meta: "3 लेवल · हर लेवल 8 हफ़्ते · हर वीकेंड 2 घंटे की एक क्लास",
        points: [
          "AI टूल्स से असली वेबसाइट या ऐप बनाना",
          "Python की बेसिक्स और AI मॉडल कैसे काम करते हैं",
          "बोर्ड, JEE और NEET के लिए AI: रिवीज़न प्लान, प्रैक्टिस सवाल, डाउट क्लियर",
          "AI के जवाब कैसे चेक करें और गलत जानकारी से कैसे बचें",
          "कॉलेज एप्लिकेशन और CV के लिए एक फ़ाइनल प्रोजेक्ट",
          "AI और टेक में करियर, और कौन सी स्किल आगे भी काम आएँगी",
        ],
        takeaway: "साथ ले जाते हैं: एक लाइव वेबसाइट या ऐप, जो कॉलेज में दिखा सकें।",
        syllabus: [
          {
            "name": "लेवल 1 · बेसिक",
            "title": "पढ़ाई और ज़िंदगी में AI",
            "weeks": [
              "AI और चैटबॉट असल में कैसे काम करते हैं, और गलती क्यों करते हैं",
              "AI से अच्छे सवाल पूछना: काम के जवाब पाने वाले साफ़ प्रॉम्प्ट",
              "बोर्ड एग्ज़ाम के लिए AI: रिवीज़न प्लान और प्रैक्टिस सवाल",
              "JEE और NEET के कॉन्सेप्ट: AI से समझें, फिर NCERT से चेक करें",
              "रिसर्च और फ़ैक्ट चेक: सोर्स और पढ़ाई में ईमानदारी",
              "नोट्स, समरी और फ़्लैशकार्ड जो याद रखने में मदद करें",
              "सेफ़्टी: प्राइवेसी, डीपफ़ेक और स्कैम",
              "प्रोजेक्ट: अपना AI स्टडी सिस्टम, और शोकेस"
            ]
          },
          {
            "name": "लेवल 2 · बिल्डर",
            "title": "AI से बनाएँ",
            "weeks": [
              "वेबसाइट कैसे काम करती है: HTML और CSS की बेसिक्स",
              "अपनी पर्सनल पोर्टफ़ोलियो वेबसाइट बनाना",
              "AI को कोडिंग असिस्टेंट की तरह इस्तेमाल करना, और उसका कोड चेक करना",
              "JavaScript की बेसिक्स: पेज को इंटरैक्टिव बनाना",
              "वेब ऐप बनाना: क्विज़, प्लानर या टू-डू ऐप",
              "अपनी वेबसाइट फ़्री में ऑनलाइन पब्लिश करना",
              "टीचर रिव्यू के साथ प्रोजेक्ट वीक",
              "शोकेस: एक लाइव वेबसाइट जो आप शेयर कर सकें"
            ]
          },
          {
            "name": "लेवल 3 · एडवांस",
            "title": "Python और AI प्रोजेक्ट",
            "weeks": [
              "असली प्रोजेक्ट के लिए Python की बेसिक्स",
              "डेटा के साथ काम: लिस्ट, फ़ाइल और स्प्रेडशीट",
              "Python से चार्ट और एनालिसिस",
              "मशीन लर्निंग कैसे काम करती है: अपना पहला मॉडल ट्रेन करना",
              "Python ऐप को AI मॉडल से जोड़ना",
              "प्रोजेक्ट बनाना: स्टडी हेल्पर या इमेज पहचानने वाला ऐप",
              "कॉलेज एप्लिकेशन के लिए पोर्टफ़ोलियो और GitHub",
              "शोकेस, सर्टिफ़िकेट और AI में करियर"
            ]
          }
        ],
      },
    ],
    feesTitle: "लेवल और फ़ीस",
    feesIntro: "हर बच्चा लेवल 1 से शुरू करता है और एक-एक लेवल आगे बढ़ता है। जिन बच्चों को पहले से अनुभव है, वो फ़्री डेमो के बाद आगे के लेवल से शुरू कर सकते हैं।",
    levels: [
      ["लेवल 1 · बेसिक", "AI को समझना, सुरक्षित इस्तेमाल, पहले प्रोजेक्ट"],
      ["लेवल 2 · बिल्डर", "गेम, चैटबॉट, वेबसाइट और ऐप बनाना"],
      ["लेवल 3 · एडवांस", "Python के साथ असली कोडिंग और AI प्रोजेक्ट"],
    ],
    duration: "8 हफ़्ते · 16 घंटे",
    juniorLabel: "कक्षा 6–8",
    seniorLabel: "कक्षा 9–12",
    feesNote: "फ़ीस हर बच्चे के लिए पूरे 8 हफ़्ते के लेवल की है। जुड़ने से पहले फ़्री डेमो क्लास, और पहले 20 बच्चों का एडमिशन फ़्री।",
    stepsTitle: "कैसे काम करता है",
    steps: [
      ["फ़्री डेमो क्लास", "बच्चा 1–2 घंटे की डेमो क्लास में आता है और पहले ही दिन कुछ छोटा बनाता है।"],
      ["छोटे बैच में जुड़ें", "10–15 बच्चों के वीकेंड बैच, रेवाड़ी में ऑफ़लाइन या लाइव ऑनलाइन।"],
      ["हर हफ़्ते कुछ नया", "हर क्लास में प्रोजेक्ट में नया हिस्सा जुड़ता है, और होमवर्क भी मज़ेदार होता है।"],
      ["शोकेस डे", "आख़िर में बच्चे अपना बनाया हुआ प्रोजेक्ट पेरेंट्स को दिखाते हैं।"],
    ],
    teacherTitle: "कौन पढ़ाता है",
    deskAlt: "मनीष की वर्क डेस्क: iMac, MacBook Pro और किताबें",
    teacher: "क्लास मनीष चौहान लेते हैं, जो 8+ साल के अनुभव वाले फ़ुल स्टैक सॉफ़्टवेयर डेवलपर हैं और बड़ी US टेक कंपनियों के लिए भी वेबसाइट और ऐप बना चुके हैं। वो रोज़ AI के साथ काम करते हैं और अपने सॉफ़्टवेयर प्रोडक्ट भी चलाते हैं। बच्चे उनसे सीखते हैं जो ये काम असल में करते हैं।",
    faqTitle: "पेरेंट्स के सवाल",
    faqs: [
      ["क्या बच्चे को कोडिंग आनी चाहिए?", "नहीं। कोर्स ज़ीरो से शुरू होते हैं। जिन बच्चों को थोड़ी कोडिंग आती है, उन्हें मुश्किल चैलेंज मिलते हैं।"],
      ["क्या AI से बच्चा पढ़ाई में आलसी नहीं हो जाएगा?", "हम उल्टा सिखाते हैं: AI से प्रैक्टिस, रिवीज़न और डाउट क्लियर करना, जवाब कॉपी करना नहीं। बच्चे ये भी सीखते हैं कि AI कब गलत होता है।"],
      ["क्या लैपटॉप ज़रूरी है?", "लैपटॉप या कंप्यूटर सबसे अच्छा है, और ऑनलाइन क्लास के लिए ज़रूरी है। कुछ एक्टिविटी फ़ोन पर भी हो जाती हैं। अगर बच्चे के पास लैपटॉप नहीं है तो WhatsApp पर पूछ लें।"],
      ["ऑफ़लाइन क्लास कहाँ होती है?", "रेवाड़ी, हरियाणा में। डेमो बुक करने पर सही जगह और टाइमिंग WhatsApp पर बताई जाती है।"],
      ["एक बैच में कितने बच्चे होते हैं?", "10–15 बच्चे, ताकि हर बच्चे पर ध्यान दिया जा सके।"],
      ["फ़ीस कितनी है?", "फ़ीस हर 8 हफ़्ते के लेवल की है। कक्षा 6–8: ₹2,000 (लेवल 1), ₹2,500 (लेवल 2), ₹3,000 (लेवल 3)। कक्षा 9–12: ₹4,000 (लेवल 1), ₹4,500 (लेवल 2), ₹5,000 (लेवल 3)।"],
      ["पहले बैच के लिए क्या है?", "पहले 20 बच्चों का एडमिशन फ़्री है (कोई एडमिशन फ़ीस नहीं) और डेमो क्लास भी फ़्री है। अपनी जगह पक्की करने के लिए WhatsApp पर बुक करें।"],
    ],
    finalTitle: "फ़्री डेमो क्लास बुक करें",
    finalText: "फ़ीस देने से पहले देखिए कि आपका बच्चा कैसे सीखता है। पहले 20 बच्चों का एडमिशन फ़्री।",
    switchLabel: "Read in English",
  },
};
