"""Builds the detailed syllabus PDFs (Classes 6–8 and 9–12, English + Hindi): an overview page plus one page per level.
Weekly topics, level names, fees, phone and CSS come from build.py so they stay in sync with the brochure.
This file only adds the per-week "in class" activity and home task, and the per-level goal, project and tools."""
import html, pathlib
from build import T as B, FEES_JR, FEES_SR, PHONE, EMAIL, CSS

HERE = pathlib.Path(__file__).parent
OUT = HERE / "syllabus"
OUT.mkdir(exist_ok=True)

L = {
"en": {
  "qr": "../qr-en.svg", "url": "learn.themanishchauhan.in", "font": "Inter",
  "eyebrow": "Syllabus", "weeksUnit": "8 weeks · 16 classes",
  "goal": "Goal", "builds": "What students build", "tools": "Tools and device",
  "thWeek": "Week", "thLearn": "What happens in class", "thHome": "Task at home",
  "formatTitle": "How the classes run", "needTitle": "What students need", "safetyTitle": "Safety and honest use",
  "takesHome": "Takes home", "levelsTitle": "Three levels, from basics to advanced",
  "format": [["Every weekend", "Saturday: learn a new idea and build it together. Sunday: build your own version, then show and tell. A small task between weekends."],
             ["Every level", "8 weeks, 16 one-hour classes. Ends with an online showcase for parents."],
             ["Small batches", "10–15 students, live online on Google Meet."],
             ["Where to start", "Everyone starts at Level 1. Students with prior experience can start higher after the free demo."]],
  "feesNote": "Fee per student for the full 8-week level.",
  "contactTitle": "Book a free demo class", "page": "Page", "celebrate": "Celebrate!",
},
"hi": {
  "qr": "../qr-hi.svg", "url": "learn.themanishchauhan.in/hi", "font": "Mukta",
  "eyebrow": "सिलेबस", "weeksUnit": "8 हफ़्ते · 16 क्लास",
  "goal": "लक्ष्य", "builds": "बच्चे क्या बनाएँगे", "tools": "टूल्स और डिवाइस",
  "thWeek": "हफ़्ता", "thLearn": "क्लास में क्या होगा", "thHome": "घर का टास्क",
  "formatTitle": "क्लास कैसे चलती हैं", "needTitle": "बच्चों को क्या चाहिए", "safetyTitle": "सुरक्षा और ईमानदार इस्तेमाल",
  "takesHome": "बच्चा साथ ले जाता है", "levelsTitle": "तीन लेवल, बेसिक से एडवांस तक",
  "format": [["हर वीकेंड", "शनिवार: नई चीज़ सीखना और साथ में बनाना। रविवार: अपना वर्ज़न बनाना, फिर सबको दिखाना। दो वीकेंड के बीच एक छोटा टास्क।"],
             ["हर लेवल", "8 हफ़्ते, 1-1 घंटे की 16 क्लास। आख़िर में पेरेंट्स के लिए ऑनलाइन शोकेस।"],
             ["छोटे बैच", "10–15 बच्चे, Google Meet पर लाइव ऑनलाइन।"],
             ["कहाँ से शुरू करें", "हर बच्चा लेवल 1 से शुरू करता है। जिन्हें पहले से अनुभव है, वो फ़्री डेमो के बाद आगे के लेवल से शुरू कर सकते हैं।"]],
  "feesNote": "फ़ीस हर बच्चे के लिए पूरे 8 हफ़्ते के लेवल की है।",
  "contactTitle": "फ़्री डेमो क्लास बुक करें", "page": "पेज", "celebrate": "जश्न मनाएँ!",
},
}

# Per course: overview text, plus per level (goal, builds, tools, 8 × (in class, home task)).
C = {
"junior": {
 "slug": "Class-6-8", "fees": FEES_JR,
 "en": {
  "classes": "Classes 6–8", "name": "Make with AI",
  "intro": "Weekend AI classes where students go from “what is AI?” to building games, chatbots and their first real code, and learn to use AI safely and honestly.",
  "takes": "A game and a chatbot they built themselves.",
  "safety": ["Students under 13 never log in to AI chatbots. The teacher types and shares the screen, and the class decides together.",
             "Every level covers privacy, fake pictures and checking facts.",
             "AI is for learning and practice, never for copying homework.",
             "No photos of students' faces are shared without permission."],
  "levels": [
   ["Understand what AI is, how it learns and how to use it safely.",
    "A picture-recognising AI model and a first Scratch game.",
    "Quick Draw, Teachable Machine, Scratch. Phone or computer.",
    [["“AI or not AI?” game, then Quick Draw on your own device", "Find 3 places AI is used at home and tell a parent"],
     ["Train Teachable Machine to recognise objects, and see what bad examples do", "Draw 5 things for a family member to guess"],
     ["Students write questions, the teacher types them and shares the screen; compare unclear and clear questions, catch a wrong answer", "Write 3 clear questions on a subject you are studying"],
     ["Move a character, add sounds, use loops", "Make a character dance to music"],
     ["Build a “catch the falling object” game with a score", "Add one new idea to your game"],
     ["Make flashcards and a quiz from a chapter (the teacher types), then check them against the textbook", "Quiz a parent with your flashcards"],
     ["Real or fake picture game, privacy rules, checking fake news", "Teach your family the 5 golden rules"],
     ["Finish your game and present it to parents", None]]],
   ["Make bigger projects that mix AI and coding.",
    "A multi-level game controlled by your own AI model, and a subject chatbot.",
    "Scratch, Teachable Machine with a Scratch extension. Laptop or computer.",
    [["Plan a game on paper: story, goal, score and levels", "Sketch one level of your game"],
     ["Add levels, score, lives and a timer using variables", "Let a family member play it and note one problem"],
     ["Collect examples in teams, train, test and improve the model", "Think of 3 hand signs your game could use"],
     ["Connect the model so a hand sign moves your character", "Play-test and fix one bug"],
     ["Build it in Scratch with questions, answers and a quiz mode, then compare it with a real AI chatbot", "Add 5 more facts from your textbook"],
     ["The teacher makes pictures and stories from students' ideas on a shared screen; talk about honesty, copyright and labelling AI work", "Write a short story idea for a comic"],
     ["Plan a weekly study timetable with AI on a shared screen, then turn it into your own poster", "Follow your planner for one week"],
     ["Finish your game or chatbot and present it", None]]],
   ["Move from blocks to real typed code.",
    "A Python quiz game, a simple chatbot and a web page about yourself.",
    "Python (Thonny, free), HTML in a text editor. Laptop or computer.",
    [["Draw shapes and patterns with Python turtle", "Draw your initials with code"],
     ["Build a guess-the-number game", "Change the rules of the game"],
     ["Questions, a score and a final result", "Add 5 questions on your favourite subject"],
     ["Build a keyword chatbot and see how real AI chatbots are different", "Teach your chatbot 5 new replies"],
     ["Enter class survey data and draw a bar chart with Python", "Ask your family one survey question"],
     ["Headings, pictures, lists and links in HTML (no address, phone or other personal details)", "Add a section about your hobby"],
     ["Pick a game, chatbot or web page and build it with teacher help", "Practise your presentation"],
     ["Present your project to parents", None]]],
  ],
 },
 "hi": {
  "classes": "कक्षा 6–8", "name": "Make with AI",
  "intro": "वीकेंड AI क्लास, जहाँ बच्चे “AI क्या है?” से शुरू करके गेम, चैटबॉट और अपना पहला असली कोड बनाते हैं, और AI का सुरक्षित और ईमानदार इस्तेमाल सीखते हैं।",
  "takes": "अपना बनाया हुआ एक गेम और एक चैटबॉट।",
  "safety": ["13 साल से छोटे बच्चे किसी AI चैटबॉट में लॉगिन नहीं करते। टीचर टाइप करके स्क्रीन शेयर करते हैं और पूरी क्लास मिलकर तय करती है।",
             "हर लेवल में प्राइवेसी, फ़ेक फ़ोटो और फ़ैक्ट चेक करना सिखाया जाता है।",
             "AI सीखने और प्रैक्टिस के लिए है, होमवर्क कॉपी करने के लिए कभी नहीं।",
             "बच्चों के चेहरे वाली फ़ोटो बिना इजाज़त शेयर नहीं की जाती।"],
  "levels": [
   ["AI क्या है, कैसे सीखता है, और इसे सुरक्षित तरीके से कैसे इस्तेमाल करें।",
    "तस्वीर पहचानने वाला AI मॉडल और पहला Scratch गेम।",
    "Quick Draw, Teachable Machine, Scratch। फ़ोन या कंप्यूटर।",
    [["“AI है या नहीं?” गेम, फिर अपने डिवाइस पर Quick Draw", "घर में AI की 3 जगहें ढूँढें और पेरेंट्स को बताएँ"],
     ["Teachable Machine को चीज़ें पहचानना सिखाना, और देखना कि गलत उदाहरण से क्या होता है", "परिवार में किसी के लिए 5 चीज़ें ड्रॉ करें, वो अंदाज़ा लगाएँ"],
     ["बच्चे सवाल लिखते हैं, टीचर टाइप करके स्क्रीन शेयर करते हैं; अधूरे और साफ़ सवाल की तुलना, गलत जवाब पकड़ना", "अपने किसी सब्जेक्ट पर 3 साफ़ सवाल लिखें"],
     ["कैरेक्टर चलाना, आवाज़ जोड़ना, लूप इस्तेमाल करना", "किसी कैरेक्टर को म्यूज़िक पर डांस कराएँ"],
     ["स्कोर वाला “गिरती चीज़ पकड़ो” गेम बनाना", "अपने गेम में एक नया आइडिया जोड़ें"],
     ["किसी चैप्टर से फ़्लैशकार्ड और क्विज़ बनाना (टीचर टाइप करते हैं), फिर किताब से चेक करना", "अपने फ़्लैशकार्ड से पेरेंट्स का क्विज़ लें"],
     ["असली या फ़ेक फ़ोटो गेम, प्राइवेसी के नियम, फ़ेक न्यूज़ चेक करना", "परिवार को 5 गोल्डन रूल बताएँ"],
     ["गेम पूरा करना और पेरेंट्स के सामने दिखाना", None]]],
   ["AI और कोडिंग मिलाकर बड़े प्रोजेक्ट बनाना।",
    "अपने AI मॉडल से चलने वाला कई लेवल का गेम, और सब्जेक्ट चैटबॉट।",
    "Scratch, Teachable Machine (Scratch एक्सटेंशन के साथ)। लैपटॉप या कंप्यूटर।",
    [["कागज़ पर गेम प्लान करना: कहानी, लक्ष्य, स्कोर और लेवल", "अपने गेम के एक लेवल का स्केच बनाएँ"],
     ["वेरिएबल से लेवल, स्कोर, लाइफ़ और टाइमर जोड़ना", "परिवार में किसी को गेम खिलाएँ और एक कमी लिखें"],
     ["टीम में उदाहरण इकट्ठा करना, मॉडल ट्रेन करना, टेस्ट करना और सुधारना", "सोचें कि गेम में कौन-से 3 इशारे काम आ सकते हैं"],
     ["मॉडल जोड़ना ताकि हाथ के इशारे से कैरेक्टर चले", "गेम खेलकर एक गलती (bug) ठीक करें"],
     ["Scratch में सवाल, जवाब और क्विज़ मोड के साथ बनाना, फिर असली AI चैटबॉट से तुलना", "अपनी किताब से 5 और बातें जोड़ें"],
     ["बच्चों के आइडिया से टीचर स्क्रीन शेयर करके इमेज और कहानी बनाते हैं; ईमानदारी, कॉपीराइट और AI से बना काम बताने पर बात", "कॉमिक के लिए एक छोटी कहानी का आइडिया लिखें"],
     ["शेयर की गई स्क्रीन पर AI के साथ हफ़्ते का स्टडी टाइमटेबल बनाना, फिर उसे अपने पोस्टर में बदलना", "एक हफ़्ते अपने प्लानर पर चलें"],
     ["अपना गेम या चैटबॉट पूरा करके दिखाना", None]]],
   ["ब्लॉक से असली टाइप किए गए कोड तक जाना।",
    "Python क्विज़ गेम, आसान चैटबॉट और अपने बारे में एक वेब पेज।",
    "Python (Thonny, फ़्री), टेक्स्ट एडिटर में HTML। लैपटॉप या कंप्यूटर।",
    [["Python turtle से आकार और पैटर्न बनाना", "कोड से अपने नाम के पहले अक्षर बनाएँ"],
     ["नंबर गेस करने वाला गेम बनाना", "गेम के नियम बदलकर देखें"],
     ["सवाल, स्कोर और आख़िर में रिज़ल्ट", "पसंदीदा सब्जेक्ट के 5 सवाल जोड़ें"],
     ["कीवर्ड वाला चैटबॉट बनाना और समझना कि असली AI चैटबॉट कैसे अलग हैं", "अपने चैटबॉट को 5 नए जवाब सिखाएँ"],
     ["क्लास सर्वे का डेटा डालना और Python से बार चार्ट बनाना", "परिवार से एक सर्वे सवाल पूछें"],
     ["HTML में हेडिंग, फ़ोटो, लिस्ट और लिंक (पता, फ़ोन या कोई निजी जानकारी नहीं)", "अपनी हॉबी पर एक सेक्शन जोड़ें"],
     ["गेम, चैटबॉट या वेब पेज चुनकर टीचर की मदद से बनाना", "अपनी प्रेज़ेंटेशन की प्रैक्टिस करें"],
     ["पेरेंट्स के सामने अपना प्रोजेक्ट दिखाना", None]]],
  ],
 },
},
"senior": {
 "slug": "Class-9-12", "fees": FEES_SR,
 "en": {
  "classes": "Classes 9–12", "name": "Build and Study with AI",
  "intro": "Weekend AI classes where students learn to study smarter for boards, JEE and NEET, then build and publish real websites, apps and Python AI projects.",
  "takes": "A live website or app and a project they can show colleges.",
  "safety": ["Students use AI chatbots only with parent permission and never share personal details.",
             "Every AI answer is checked against NCERT, teachers or trusted sources.",
             "AI is for understanding and practice, never for copying homework or cheating in exams.",
             "Every level covers privacy, deepfakes and scams."],
  "levels": [
   ["Use AI to study better and honestly, and know where it goes wrong.",
    "A personal AI study system: revision plan, question bank and flashcards.",
    "A free AI chatbot (with parent permission), NCERT books, Google Docs and Sheets. Phone or computer.",
    [["Next-word guessing game, then catch AI making mistakes", "Find one wrong AI answer and the correct source"],
     ["Role, task and format: rewrite weak prompts into strong ones", "Make your own list of 5 study prompts"],
     ["Make a revision timetable up to exam day, and practice questions from your syllabus", "Follow the plan for one week"],
     ["Get a hard concept explained step by step, then check every step against NCERT", "Explain one concept to a friend without AI"],
     ["Compare sources, cite them, and learn the rules on copying and plagiarism", "Fact-check one viral message"],
     ["Turn a chapter into short notes and flashcards, and plan spaced revision", "Make flashcards for one chapter"],
     ["Privacy settings, spotting deepfakes, common scams like OTP and fake job offers", "Show your family how to spot one scam"],
     ["Present your study system and how you will use it", None]]],
   ["Build and publish a real website and web app.",
    "A personal portfolio website and a small web app, both live online.",
    "VS Code, HTML, CSS, JavaScript, an AI coding assistant, GitHub and free hosting. Laptop or computer.",
    [["Browsers, servers and code: inspect a real site and make your first page", "Plan what goes on your portfolio"],
     ["Build the About, Skills, Projects and Contact sections", "Write your About text"],
     ["Ask AI for code, read it, test it and fix its mistakes", "Find and fix one bug"],
     ["Buttons, events and changing the page with code", "Add a dark mode button"],
     ["Build a quiz, planner or to-do app that saves data in the browser", "Add one feature of your own"],
     ["Put your site on GitHub and publish it with free hosting", "Share your link with family"],
     ["The teacher reviews your code; you polish the design and fix issues", "Fix your review comments"],
     ["Present your live website and app", None]]],
   ["Learn Python, data and machine learning basics through projects.",
    "A data analysis notebook, a trained model and a final AI project on GitHub.",
    "Python, Google Colab, pandas, matplotlib, scikit-learn, GitHub. Laptop or computer.",
    [["Variables, lists, loops and functions through small programs", "Write a marks calculator"],
     ["Read a spreadsheet file, filter and sort the data", "Collect a small dataset of your own"],
     ["Make charts with pandas and matplotlib and find patterns", "Make 2 charts from your dataset"],
     ["Train a simple model, test how accurate it is, talk about bias", "Test your model with new data"],
     ["Use a trained model or an AI API inside your own app (teacher's account in class)", "Plan your final project"],
     ["Build your project step by step with teacher help", "Keep building and note your questions"],
     ["Write a README, push your code and learn to describe your projects", "Finish your README"],
     ["Present your project and talk about careers in AI and tech", None]]],
  ],
 },
 "hi": {
  "classes": "कक्षा 9–12", "name": "Build and Study with AI",
  "intro": "वीकेंड AI क्लास, जहाँ बच्चे बोर्ड, JEE और NEET के लिए स्मार्ट पढ़ाई सीखते हैं, फिर असली वेबसाइट, ऐप और Python AI प्रोजेक्ट बनाकर पब्लिश करते हैं।",
  "takes": "एक लाइव वेबसाइट या ऐप, और एक प्रोजेक्ट जो कॉलेज को दिखा सकें।",
  "safety": ["बच्चे AI चैटबॉट सिर्फ़ पेरेंट्स की इजाज़त से इस्तेमाल करते हैं और कोई निजी जानकारी शेयर नहीं करते।",
             "AI का हर जवाब NCERT, टीचर या भरोसेमंद सोर्स से चेक किया जाता है।",
             "AI समझने और प्रैक्टिस के लिए है, होमवर्क कॉपी करने या एग्ज़ाम में चीटिंग के लिए कभी नहीं।",
             "हर लेवल में प्राइवेसी, डीपफ़ेक और स्कैम के बारे में सिखाया जाता है।"],
  "levels": [
   ["AI से बेहतर और ईमानदारी से पढ़ाई करना, और समझना कि ये कहाँ गलत होता है।",
    "अपना AI स्टडी सिस्टम: रिवीज़न प्लान, क्वेश्चन बैंक और फ़्लैशकार्ड।",
    "एक फ़्री AI चैटबॉट (पेरेंट्स की इजाज़त से), NCERT किताबें, Google Docs और Sheets। फ़ोन या कंप्यूटर।",
    [["अगला शब्द अंदाज़ा लगाने वाला गेम, फिर AI की गलतियाँ पकड़ना", "AI का एक गलत जवाब और उसका सही सोर्स ढूँढें"],
     ["रोल, टास्क और फ़ॉर्मैट: कमज़ोर प्रॉम्प्ट को अच्छा बनाना", "पढ़ाई के 5 प्रॉम्प्ट की अपनी लिस्ट बनाएँ"],
     ["एग्ज़ाम तक का रिवीज़न टाइमटेबल और सिलेबस से प्रैक्टिस सवाल बनाना", "एक हफ़्ते प्लान फ़ॉलो करें"],
     ["मुश्किल कॉन्सेप्ट स्टेप बाय स्टेप समझना, फिर हर स्टेप NCERT से चेक करना", "बिना AI के एक दोस्त को एक कॉन्सेप्ट समझाएँ"],
     ["सोर्स की तुलना और उनका नाम देना, कॉपी और प्लेजरिज़्म के नियम", "एक वायरल मैसेज का फ़ैक्ट चेक करें"],
     ["एक चैप्टर से छोटे नोट्स और फ़्लैशकार्ड बनाना, और बार-बार रिवीज़न का प्लान", "एक चैप्टर के फ़्लैशकार्ड बनाएँ"],
     ["प्राइवेसी सेटिंग, डीपफ़ेक पहचानना, OTP और फ़ेक जॉब ऑफ़र जैसे स्कैम", "परिवार को एक स्कैम पहचानना सिखाएँ"],
     ["अपना स्टडी सिस्टम दिखाना, और बताना कि उसे कैसे इस्तेमाल करेंगे", None]]],
   ["असली वेबसाइट और वेब ऐप बनाकर ऑनलाइन पब्लिश करना।",
    "अपनी पोर्टफ़ोलियो वेबसाइट और एक छोटा वेब ऐप, दोनों ऑनलाइन लाइव।",
    "VS Code, HTML, CSS, JavaScript, AI कोडिंग असिस्टेंट, GitHub और फ़्री होस्टिंग। लैपटॉप या कंप्यूटर।",
    [["ब्राउज़र, सर्वर और कोड: एक असली साइट को अंदर से देखना और पहला पेज बनाना", "पोर्टफ़ोलियो में क्या होगा, प्लान करें"],
     ["About, Skills, Projects और Contact सेक्शन बनाना", "अपना About टेक्स्ट लिखें"],
     ["AI से कोड लेना, पढ़ना, टेस्ट करना और उसकी गलतियाँ ठीक करना", "एक bug ढूँढकर ठीक करें"],
     ["बटन, इवेंट और कोड से पेज बदलना", "डार्क मोड बटन जोड़ें"],
     ["क्विज़, प्लानर या टू-डू ऐप बनाना जो ब्राउज़र में डेटा सेव करे", "अपना एक फ़ीचर जोड़ें"],
     ["साइट को GitHub पर डालना और फ़्री होस्टिंग पर पब्लिश करना", "अपना लिंक परिवार के साथ शेयर करें"],
     ["टीचर आपका कोड रिव्यू करते हैं; आप डिज़ाइन सुधारते हैं और गलतियाँ ठीक करते हैं", "रिव्यू के पॉइंट ठीक करें"],
     ["अपनी लाइव वेबसाइट और ऐप दिखाना", None]]],
   ["प्रोजेक्ट के ज़रिए Python, डेटा और मशीन लर्निंग की बेसिक्स सीखना।",
    "डेटा एनालिसिस नोटबुक, ट्रेन किया हुआ मॉडल और GitHub पर फ़ाइनल AI प्रोजेक्ट।",
    "Python, Google Colab, pandas, matplotlib, scikit-learn, GitHub। लैपटॉप या कंप्यूटर।",
    [["छोटे प्रोग्राम से वेरिएबल, लिस्ट, लूप और फ़ंक्शन", "मार्क्स कैलकुलेटर बनाएँ"],
     ["स्प्रेडशीट फ़ाइल पढ़ना, डेटा फ़िल्टर और सॉर्ट करना", "अपना छोटा डेटासेट इकट्ठा करें"],
     ["pandas और matplotlib से चार्ट बनाना और पैटर्न ढूँढना", "अपने डेटासेट से 2 चार्ट बनाएँ"],
     ["आसान मॉडल ट्रेन करना, वो कितना सही है ये टेस्ट करना, bias पर बात", "अपने मॉडल को नए डेटा पर टेस्ट करें"],
     ["अपने ऐप में ट्रेन किया मॉडल या AI API इस्तेमाल करना (क्लास में टीचर का अकाउंट)", "अपना फ़ाइनल प्रोजेक्ट प्लान करें"],
     ["टीचर की मदद से स्टेप बाय स्टेप प्रोजेक्ट बनाना", "प्रोजेक्ट पर काम जारी रखें, सवाल लिखें"],
     ["README लिखना, कोड GitHub पर डालना और अपने प्रोजेक्ट के बारे में बताना सीखना", "अपना README पूरा करें"],
     ["अपना प्रोजेक्ट दिखाना और AI व टेक में करियर पर बात", None]]],
  ],
 },
},
}

SYL_CSS = """
.page { padding: 11mm 14mm 9mm; }
.cover h1.d { font-size:31pt; margin-top:1.5mm; }
.hi .cover h1.d { font-size:29pt; }
.cover .intro { font-size:11pt; color:#444; margin-top:3mm; max-width:160mm; }
.hi .cover .intro { font-size:12pt; }
.sec { font-size:14pt; margin-top:5.5mm; }
.lv3 { display:grid; grid-template-columns:repeat(3,1fr); gap:3mm; margin-top:3mm; }
.lv3 .card { border-top:4px solid var(--ink); border-radius:0 0 10px 10px; display:flex; flex-direction:column; }
.lv3 .card:nth-child(2) { border-top-color:#ffb08f; }
.lv3 .card:nth-child(3) { border-top-color:var(--accent); }
.lv3 small { color:var(--accent); font-weight:700; font-size:8.5pt; }
.lv3 h3 { font-size:13pt; margin:1mm 0 1.5mm; }
.lv3 p { font-size:8.8pt; color:#444; line-height:1.4; }
.hi .lv3 p { font-size:9.8pt; }
.lv3 .fee { margin-top:auto; padding-top:2.5mm; font-weight:800; font-size:14pt; }
.lv3 .fee span { font-weight:400; font-size:8pt; color:var(--muted); }
.fmt { display:grid; grid-template-columns:1fr 1fr; gap:2mm 6mm; margin-top:2.5mm; }
.fmt h4 { font-size:10pt; }
.fmt p { font-size:9pt; color:#444; }
.hi .fmt p { font-size:9.8pt; line-height:1.4; }
.pair { display:grid; grid-template-columns:1fr 1.25fr; gap:3mm; margin-top:5mm; }
.pair h3 { font-size:12pt; margin-bottom:1.5mm; }
.pair p, .pair li { font-size:9pt; color:#333; line-height:1.45; }
.hi .pair p, .hi .pair li { font-size:9.8pt; }
.pair ul { list-style:none; display:grid; gap:1.2mm; }
.pair li { display:flex; gap:2mm; }
.pair li::before { content:"✓"; color:var(--accent); font-weight:800; }
.takes { margin-top:2.5mm; padding-top:2.5mm; border-top:1px solid var(--line); }
.takes b { color:var(--accent); }
.cta { margin-top:auto; background:var(--ink); color:#fff; border-radius:12px; padding:3.5mm 6mm; display:grid; grid-template-columns:1fr auto auto; gap:6mm; align-items:center; }
.cta h3 { font-size:15pt; }
.cta dt { color:var(--accent); font-weight:600; font-size:7.5pt; text-transform:uppercase; letter-spacing:.08em; margin-top:1.5mm; }
.hi .cta dt { text-transform:none; letter-spacing:0; font-size:8.5pt; }
.cta dt:first-child { margin-top:0; }
.cta dd { font-size:9.5pt; font-weight:600; }
.cta img { width:21mm; height:21mm; background:#fff; padding:1.5mm; border-radius:6px; }
/* level pages */
.lhead { display:flex; justify-content:space-between; align-items:flex-end; gap:6mm; margin-top:7mm; }
.lhead h2.d { font-size:26pt; margin-top:1mm; }
.lhead .price { text-align:right; white-space:nowrap; }
.lhead .price strong { display:block; font-size:22pt; font-weight:800; line-height:1; }
.lhead .price span { font-size:8.5pt; color:var(--muted); }
.info { display:grid; grid-template-columns:1fr 1fr 1fr; gap:3mm; margin-top:4mm; }
.info .card { padding:3mm 4mm; }
.info h4 { color:var(--accent); font-size:8pt; text-transform:uppercase; letter-spacing:.06em; }
.hi .info h4 { text-transform:none; letter-spacing:0; font-size:9pt; }
.info p { font-size:10pt; margin-top:1mm; line-height:1.4; }
.hi .info p { font-size:10.8pt; }
table.wk { margin-top:4.5mm; }
table.wk th { font-size:9pt; padding:3mm 4mm; }
table.wk td { font-size:10pt; padding:2.7mm 4mm; line-height:1.45; }
.hi table.wk td { font-size:10.8pt; padding:3mm 4mm; line-height:1.45; }
table.wk td.n { font-weight:800; color:var(--accent); white-space:nowrap; width:13mm; }
table.wk td.t b { display:block; font-size:11pt; color:var(--ink); margin-bottom:.6mm; }
.hi table.wk td.t b { font-size:11.8pt; }
table.wk td.t span { color:#555; }
table.wk td.h { width:48mm; color:#333; }
table.wk tr:last-child td { background:#fff1ea; }
"""

def e(s): return html.escape(s)

def top(right):
    return f'<div class="top"><div class="logo"><b>M</b><span>manish</span></div><div>{e(right)}</div></div>'

def foot(l, n, label):
    return f'<div class="foot"><span>Manish Chauhan · {e(l["url"])}</span><span>{e(label)} · {l["page"]} {n} / 4</span></div>'

def build(key, lang):
    course, l, b = C[key], L[lang], B[lang]
    c = course[lang]
    fees = course["fees"]
    base = b[key]  # [name, title, fee, weeks] per level, from the brochure
    label = f'{c["classes"]} · {c["name"]}'
    unit = "8 weeks" if lang == "en" else "8 हफ़्ते"

    cards = "".join(
        f'<div class="card"><small>{e(base[i][0])}</small><h3 class="d">{e(base[i][1])}</h3><p>{e(c["levels"][i][0])}</p>'
        f'<div class="fee">{fees[i]} <span>/ {unit}</span></div></div>' for i in range(3))
    fmt = "".join(f'<div><h4>{e(a)}</h4><p>{e(x)}</p></div>' for a, x in l["format"])
    safety = "".join(f"<li>{e(x)}</li>" for x in c["safety"])
    cover = f'''<section class="page cover">{top(l["url"])}
  <p class="eyebrow" style="margin-top:6mm">{e(l["eyebrow"])} · {e(c["classes"])}</p>
  <h1 class="d">{e(c["name"])}</h1>
  <p class="intro">{e(c["intro"])}</p>
  <p style="margin-top:4mm"><span class="offer">{e(b["offer"])}</span></p>
  <h2 class="d sec">{e(l["levelsTitle"])}</h2>
  <div class="lv3">{cards}</div>
  <p class="note">{e(l["feesNote"])}</p>
  <h2 class="d sec">{e(l["formatTitle"])}</h2>
  <div class="fmt">{fmt}</div>
  <div class="pair">
    <div class="card"><h3 class="d">{e(l["needTitle"])}</h3><p>{e(b["need"])}</p>
      <p class="takes"><b>{e(l["takesHome"])}:</b> {e(c["takes"])}</p></div>
    <div class="card"><h3 class="d">{e(l["safetyTitle"])}</h3><ul>{safety}</ul></div>
  </div>
  <div class="cta" style="margin-top:5mm"><div><h3 class="d">{e(l["contactTitle"])}</h3></div>
    <dl><dt>{e(b["labels"][0])}</dt><dd>{PHONE}</dd><dt>{e(b["labels"][1])}</dt><dd>{EMAIL}</dd></dl>
    <img src="{l["qr"]}" alt="QR"></div>
  {foot(l, 1, label)}</section>'''

    pages = [cover]
    for i in range(3):
        name, title, _, topics = base[i]
        goal, builds, tools, weeks = c["levels"][i]
        rows = "".join(
            f'<tr><td class="n">{i2+1}</td><td class="t"><b>{e(topics[i2])}</b><span>{e(do)}</span></td>'
            f'<td class="h">{e(home) if home else e(l["celebrate"])}</td></tr>' for i2, (do, home) in enumerate(weeks))
        pages.append(f'''<section class="page">{top(label)}
  <div class="lhead"><div><p class="eyebrow">{e(name)} · {e(l["weeksUnit"])}</p><h2 class="d">{e(title)}</h2></div>
    <div class="price"><strong>{fees[i]}</strong><span>{e(l["feesNote"])}</span></div></div>
  <div class="info">
    <div class="card"><h4>{e(l["goal"])}</h4><p>{e(goal)}</p></div>
    <div class="card"><h4>{e(l["builds"])}</h4><p>{e(builds)}</p></div>
    <div class="card"><h4>{e(l["tools"])}</h4><p>{e(tools)}</p></div>
  </div>
  <table class="wk"><tr><th>{e(l["thWeek"])}</th><th>{e(l["thLearn"])}</th><th>{e(l["thHome"])}</th></tr>{rows}</table>
  {foot(l, i + 2, label)}</section>''')

    font = "Inter:wght@400;600;700;800" if lang == "en" else "Mukta:wght@400;600;700;800"
    doc = f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>{e(label)} syllabus</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family={font}&display=swap" rel="stylesheet">
<style>:root{{--body:"{l["font"]}"}} body{{font-family:var(--body),Arial,sans-serif}} {CSS} {SYL_CSS}</style></head>
<body class="{lang}">{"".join(pages)}</body></html>'''
    (OUT / f'syllabus-{course["slug"]}-{lang}.html').write_text(doc, encoding="utf-8")

for k in C:
    for lg in ("en", "hi"):
        build(k, lg)
print("built syllabus")
