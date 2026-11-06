// Classes 9–12 free AI workshop deck. Same theme and layouts as the Classes 6–8 deck.
const pptxgen = require("pptxgenjs");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");
const path = require("path");
const { applyTheme } = require("/Users/manish/Library/Application Support/Claude/local-agent-mode-sessions/skills-plugin/964d33b4-29be-4f00-bc90-53c9234aa455/6d8709a6-f6f4-42da-a2e8-29ad9db69342/skills/pptx/scripts/apply_theme.js");

const OUT = process.argv[2];
const QR = process.argv[3];

const THEME = {
  name: "Manish AI Classes", headFontFace: "Arial", bodyFontFace: "Calibri",
  colors: { dk1: "111111", lt1: "FFFFFF", dk2: "3A3A3A", lt2: "FFF1EA", accent1: "FF5A1F", accent2: "FFC233",
            accent3: "2BB3A3", accent4: "5B7CFA", accent5: "E84B8A", accent6: "8A8A8A", hlink: "FF5A1F", folHlink: "FF5A1F" },
};
const FOOT = "Manish Chauhan · learn.themanishchauhan.in";

async function iconData(Comp, color = "#FFFFFF") {
  const svg = renderToStaticMarkup(React.createElement(Comp, { color, size: 256 }));
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Manish Chauhan";
  pres.title = "Learn AI the Smart Way: Free AI Workshop, Classes 9–12";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  const C = pres.SchemeColor;

  const footer = [
    { text: { text: FOOT, options: { x: 0.5, y: 5.22, w: 6, h: 0.25, fontSize: 9, color: C.accent6 } } },
  ];
  pres.defineSlideMaster({ title: "DARK", background: { color: C.text1 }, objects: [
    { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 1.55, w: 7.2, h: 1.5, fontSize: 44, bold: true, color: C.background1, align: "left", valign: "bottom" }, text: "" } },
    { placeholder: { options: { name: "sub", type: "body", x: 0.6, y: 3.15, w: 8.8, h: 1.0, fontSize: 20, color: C.accent2, align: "left", valign: "top" }, text: "" } },
  ]});
  for (const [name, bg] of [["CONTENT", C.background1], ["ACTIVITY", C.background2]]) {
    pres.defineSlideMaster({ title: name, background: { color: bg }, objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: C.text1, align: "center", valign: "middle" }, text: "" } },
      ...footer,
    ], slideNumber: { x: 9.0, y: 5.2, w: 0.5, h: 0.3, fontSize: 9, color: C.accent6, align: "right" } });
  }

  const I = {};
  const want = { robot: fa.FaRobot, brain: fa.FaBrain, camera: fa.FaCamera, book: fa.FaBookOpen, search: fa.FaSearch, code: fa.FaLaptopCode,
    shield: fa.FaShieldAlt, insta: fa.FaInstagram, rupee: fa.FaRupeeSign, lens: fa.FaCameraRetro, mail: fa.FaEnvelope, table: fa.FaTable,
    traffic: fa.FaTrafficLight, scale: fa.FaBalanceScale, coffee: fa.FaCoffee, check: fa.FaCheck, cross: fa.FaTimes, bulb: fa.FaLightbulb,
    secret: fa.FaUserSecret, pen: fa.FaPen, hand: fa.FaHandPaper, users: fa.FaUsers, calendar: fa.FaCalendarAlt, list: fa.FaListOl,
    flask: fa.FaFlask, warn: fa.FaExclamationTriangle, face: fa.FaUserCircle, briefcase: fa.FaBriefcase, money: fa.FaMoneyBillWave,
    phone: fa.FaPhoneAlt, file: fa.FaFileCode, edit: fa.FaEdit, magic: fa.FaMagic, ticket: fa.FaTicketAlt, image: fa.FaImage,
    font: fa.FaFont, sun: fa.FaSun, mic: fa.FaMicrophone };
  for (const [k, comp] of Object.entries(want)) {
    if (!comp) throw new Error("missing icon " + k);
    I[k] = await iconData(comp);
  }

  const circle = (s, icon, color, x, y, d, name) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { type: "none" }, objectName: name + "-circle" });
    s.addImage({ data: I[icon], x: x + d * 0.27, y: y + d * 0.27, w: d * 0.46, h: d * 0.46, altText: "", objectName: name + "-icon" });
  };
  const card = (s, x, y, w, h, color, name) =>
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color }, line: { type: "none" }, objectName: name });
  const txt = (s, text, o) => s.addText(text, { isTextBox: true, margin: 0, fontFace: "Calibri", color: C.text1, valign: "top", ...o });
  const pill = (s, text, x, y, w) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.32, rectRadius: 0.16, fill: { color: C.accent1 }, line: { type: "none" }, objectName: "pill" });
    txt(s, text, { x, y, w, h: 0.32, fontSize: 11, bold: true, color: C.background1, align: "center", valign: "middle" });
  };
  const numDot = (s, n, x, y, color = C.accent4) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: 0.34, h: 0.34, fill: { color }, line: { type: "none" }, objectName: "num-" + n });
    txt(s, String(n), { x, y, w: 0.34, h: 0.34, fontSize: 12, bold: true, color: C.background1, align: "center", valign: "middle" });
  };
  const add = (master, section, title) => {
    const s = pres.addSlide({ masterName: master, sectionTitle: section });
    if (title) s.addText(title, { placeholder: "title" });
    return s;
  };

  // ---------- 1 Title
  pres.addSection({ title: "Start" });
  let s = add("DARK", "Start", "Learn AI the Smart Way");
  s.addText("Free AI Workshop · Classes 9–12 · 2 hours to understand, train, study and build with AI", { placeholder: "sub" });
  txt(s, "with Manish Chauhan, software developer", { x: 0.6, y: 4.55, w: 6, h: 0.3, fontSize: 12, color: C.background1 });
  circle(s, "robot", C.accent1, 8.15, 0.55, 1.2, "title");
  s.addNotes(`0:00–0:05 · WELCOME
Introduce yourself in one line: "I'm Manish. I build websites and apps for companies, and I use AI every day."
Ask: "Who used ChatGPT or Gemini this week? Who used it for homework?" (Laugh with them, no judging.)
Say: "Today we'll see how AI really works, train one ourselves, use it to study better, and watch it build an app. And we'll see where it lies to you."
Rule for today: students do NOT log in to any chatbot. Only I type, on the projector.
Hindi tip: "Aaj hum dekhenge AI andar se kaise kaam karta hai, aur isse padhai smart tarike se kaise karein."`);

  // ---------- 2 Mission
  s = add("CONTENT", "Start", "Today's mission");
  const mission = [["Understand", "How chatbots really work", "brain", C.accent2], ["Train", "Teach a computer and find its bias", "camera", C.accent3],
    ["Study", "Prompts for boards, JEE and NEET", "book", C.accent4], ["Check", "Catch AI mistakes with NCERT", "search", C.accent5],
    ["Build", "Watch AI make an app live", "code", C.accent1], ["Stay safe", "Deepfakes, scams and honest use", "shield", C.text2]];
  mission.forEach(([h, d, ic, col], i) => {
    const x = 0.5 + (i % 3) * 3.05, y = 1.3 + Math.floor(i / 3) * 1.85;
    card(s, x, y, 2.85, 1.65, C.background2, "mission-" + i);
    circle(s, ic, col, x + 0.25, y + 0.25, 0.6, "mission-" + i);
    txt(s, `${i + 1}. ${h}`, { x: x + 1.0, y: y + 0.3, w: 1.75, h: 0.45, fontSize: 16, bold: true, fontFace: "Arial", valign: "middle" });
    txt(s, d, { x: x + 0.25, y: y + 1.0, w: 2.4, h: 0.55, fontSize: 14, color: C.text2 });
  });
  s.addNotes(`0:05–0:08 · MISSION
Walk through the 6 steps quickly. Tell them there is a 10-minute break and an exit ticket at the end.
Two class rules: (1) hand up = everyone quiet; (2) everyone in the group gets a turn on the computer.`);

  // ---------- 3 AI or not
  pres.addSection({ title: "Understand AI" });
  s = add("ACTIVITY", "Understand AI", "Game: AI or not AI?");
  const cards = [["insta", C.accent5, "Instagram choosing your next Reel"], ["rupee", C.accent3, "A UPI app sending ₹100 to a friend"],
    ["lens", C.accent4, "Google Lens reading a maths problem from a photo"], ["mail", C.accent1, "Gmail moving an email to spam"],
    ["table", C.accent3, "Excel adding up a column with SUM"], ["traffic", C.accent2, "A traffic light on a fixed timer"]];
  cards.forEach(([ic, col, t], i) => {
    const x = 0.5 + (i % 3) * 3.05, y = 1.3 + Math.floor(i / 3) * 1.85;
    card(s, x, y, 2.85, 1.65, C.background1, "game-" + i);
    circle(s, ic, col, x + 0.2, y + 0.2, 0.55, "game-" + i);
    txt(s, t, { x: x + 0.2, y: y + 0.9, w: 2.5, h: 0.65, fontSize: 15, bold: true });
  });
  s.addNotes(`0:08–0:14 · GAME: AI OR NOT AI?
Read each card. Thumbs up = AI, thumbs down = not AI. Ask one student to explain each answer.
Answers:
- Instagram Reels: AI (learns from what you and millions of others watch, like, skip).
- UPI payment: NOT AI (fixed rules: check PIN, check balance, send).
- Google Lens: AI (learned to read handwriting and printed text from millions of examples).
- Gmail spam: AI (learned what spam looks like from billions of emails).
- Excel SUM: NOT AI (a formula, same answer every time).
- Fixed-timer traffic light: NOT AI (some new smart signals do use AI, a good bonus point).
Key idea: "If it LEARNS from examples and makes predictions, it's AI. If it follows fixed rules, it's normal software."`);

  // ---------- 4 How chatbot works
  s = add("CONTENT", "Understand AI", "How does a chatbot answer you?");
  card(s, 0.5, 1.2, 9, 0.85, C.text1, "def");
  txt(s, [{ text: "A chatbot ", options: {} }, { text: "predicts the next word", options: { color: C.accent2, bold: true } },
          { text: ", again and again. It learned which words usually come next from a huge amount of text.", options: {} }],
      { x: 0.75, y: 1.2, w: 8.5, h: 0.85, fontSize: 17, color: C.background1, valign: "middle" });
  const flow = [["book", C.accent3, "Reads billions of sentences"], ["brain", C.accent4, "Learns which words go together"], ["bulb", C.accent1, "Predicts the next word, one by one"]];
  flow.forEach(([ic, col, t], i) => {
    const x = 0.5 + i * 3.1;
    circle(s, ic, col, x, 2.3, 0.6, "flow-" + i);
    txt(s, t, { x: x + 0.75, y: 2.3, w: 1.85, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
    if (i < 2) txt(s, "→", { x: x + 2.65, y: 2.3, w: 0.4, h: 0.6, fontSize: 22, bold: true, color: C.accent1, align: "center", valign: "middle" });
  });
  card(s, 0.5, 3.2, 9, 1.75, C.background2, "game");
  txt(s, "Finish the sentence", { x: 0.75, y: 3.35, w: 4, h: 0.35, fontSize: 15, bold: true, color: C.accent1, fontFace: "Arial" });
  ["“The capital of India is ___”", "“Every action has an equal and opposite ___”", "“The best subject in school is ___”"].forEach((q, i) =>
    txt(s, q, { x: 0.75 + i * 2.95, y: 3.85, w: 2.75, h: 0.95, fontSize: 15, color: C.text1 }));
  s.addNotes(`0:14–0:20 · HOW CHATBOTS WORK
Play "finish the sentence" out loud. Everyone shouts the first two (New Delhi, reaction).
The third has no single right answer: the class disagrees. Say: "That's what AI does every time: it picks the most LIKELY next word, not the TRUE one."
Key line: "A chatbot doesn't look up facts. It predicts words that sound right. Most of the time they are right. Sometimes they are not, and it sounds just as confident."
Hindi tip: "Chatbot sach nahi dhundta, agla sabse sahi lagne wala shabd guess karta hai."`);

  // ---------- 5 Activity 1
  s = add("ACTIVITY", "Understand AI", "Activity 1: Build a study detector");
  pill(s, "20 minutes · groups of 3–4", 0.5, 1.15, 2.6);
  const steps = ["Open teachablemachine.withgoogle.com", "Get Started → Image Project → Standard", "Make 3 classes: Book, Pen, Nothing",
    "Hold to record about 50 pictures for each", "Click Train Model, then test it live"];
  steps.forEach((t, i) => { numDot(s, i + 1, 0.5, 1.7 + i * 0.6); txt(s, t, { x: 1.0, y: 1.7 + i * 0.6, w: 4.6, h: 0.34, fontSize: 15, valign: "middle" }); });
  [["book", C.accent4, "Book"], ["pen", C.accent1, "Pen"], ["hand", C.accent6, "Nothing"]].forEach(([ic, col, t], i) => {
    const x = 6.0 + i * 1.18;
    card(s, x, 1.7, 1.05, 1.25, C.background1, "class-" + i);
    circle(s, ic, col, x + 0.25, 1.82, 0.55, "class-" + i);
    txt(s, t, { x, y: 2.48, w: 1.05, h: 0.35, fontSize: 13, bold: true, align: "center" });
  });
  txt(s, "Training happens inside your browser. Don't save the project, and keep faces out of the camera.",
      { x: 6.0, y: 3.2, w: 3.5, h: 0.9, fontSize: 13, italic: true, color: C.text2 });
  s.addNotes(`0:20–0:40 · TEACHABLE MACHINE: STUDY DETECTOR (main activity)
Needs webcams. Test in the lab before class.
Demo all 5 steps on the projector first (3 minutes), then groups do it. Each student records at least one class.
Point the camera at the desk and hands, not faces.
Fast groups: add a 4th class "Phone" using your phone (students' phones are usually not allowed in school), or "Calculator".
At the end, 2–3 groups show their detector working for 30 seconds each.
Backup if no webcams: "Upload" with your prepared image folders (book, pen, empty desk).
Privacy: Teachable Machine trains in the browser; images are not uploaded unless someone saves the project. Ask students not to save.`);

  // ---------- 6 Bias
  s = add("CONTENT", "Understand AI", "The bias experiment");
  card(s, 0.5, 1.2, 4.3, 2.75, C.background2, "exp");
  circle(s, "flask", C.accent3, 0.75, 1.4, 0.55, "exp");
  txt(s, "Try it with your detector", { x: 1.45, y: 1.4, w: 3.2, h: 0.55, fontSize: 16, bold: true, fontFace: "Arial", valign: "middle" });
  txt(s, [{ text: "Train it with one person's hand and one book only.", options: { bullet: { type: "number" }, breakLine: true } },
          { text: "Test it with a different person and a different book.", options: { bullet: { type: "number" }, breakLine: true } },
          { text: "Does it still work? Why not?", options: { bullet: { type: "number" } } }],
      { x: 0.75, y: 2.15, w: 3.85, h: 1.65, fontSize: 15, paraSpaceAfter: 6 });
  [["face", C.accent5, "Face unlock trained mostly on one skin colour"], ["briefcase", C.accent4, "A hiring tool trained on past hires who were mostly men"],
   ["money", C.accent2, "A loan app trained only on big-city data"]].forEach(([ic, col, t], i) => {
    const y = 1.2 + i * 0.95;
    card(s, 5.0, y, 4.5, 0.8, C.background2, "real-" + i);
    circle(s, ic, col, 5.15, y + 0.13, 0.54, "real-" + i);
    txt(s, t, { x: 5.85, y, w: 3.5, h: 0.8, fontSize: 14, valign: "middle" });
  });
  card(s, 0.5, 4.15, 9, 0.75, C.text1, "lesson");
  txt(s, [{ text: "Big lesson: ", options: { color: C.accent2, bold: true } }, { text: "AI learns from data. If the data is unfair or narrow, the AI is too.", options: {} }],
      { x: 0.75, y: 4.15, w: 8.5, h: 0.75, fontSize: 16, color: C.background1, valign: "middle" });
  s.addNotes(`0:40–0:48 · BIAS
Each group retrains with only ONE person's hand and ONE book, then tests with another person and another book. It usually gets worse.
Then go through the 3 real-world examples on the right. Ask: "Who gets hurt when this AI is wrong?"
Real cases exist: face recognition that worked worse on darker skin, and a hiring tool (reported in 2018) that was dropped after it learned to prefer men.
Say: "The AI wasn't evil. The data was narrow. The people who build AI must check this, and that could be you one day."`);

  // ---------- 7 Break
  pres.addSection({ title: "Study with AI" });
  s = add("DARK", "Study with AI", "Break time!");
  s.addText("10 minutes · water, snacks, stretch", { placeholder: "sub" });
  circle(s, "coffee", C.accent2, 8.15, 0.55, 1.2, "break");
  s.addNotes(`0:48–0:58 · BREAK
Close Teachable Machine tabs without saving.
Set up the chatbot on your laptop (your account only) and the code editor for the live demo. Hand out the "Catch the AI mistake" sheets face down.`);

  // ---------- 8 Prompts
  s = add("CONTENT", "Study with AI", "Prompts that help you study");
  card(s, 0.5, 1.25, 4.3, 3.6, C.background2, "weak");
  txt(s, "Weak", { x: 0.75, y: 1.45, w: 3.8, h: 0.35, fontSize: 15, bold: true, color: C.accent5, fontFace: "Arial" });
  txt(s, "“Explain photosynthesis”", { x: 0.75, y: 1.95, w: 3.8, h: 0.5, fontSize: 16 });
  txt(s, "You get a long, textbook-style answer. You read it, nod, and remember nothing.", { x: 0.75, y: 2.65, w: 3.8, h: 1.0, fontSize: 14, color: C.text2 });
  card(s, 5.2, 1.25, 4.3, 3.6, C.text1, "strong");
  txt(s, "Strong", { x: 5.45, y: 1.45, w: 3.8, h: 0.35, fontSize: 15, bold: true, color: C.accent2, fontFace: "Arial" });
  txt(s, "“I'm a Class 10 CBSE student. Explain photosynthesis in 5 short points, then ask me 3 questions to check I understood. Wait for my answers.”",
      { x: 5.45, y: 1.95, w: 3.8, h: 1.75, fontSize: 15, color: C.background1 });
  txt(s, "Who you are + what you need + how + check me", { x: 5.45, y: 3.95, w: 3.8, h: 0.6, fontSize: 14, bold: true, color: C.accent2 });
  s.addNotes(`0:58–1:05 · STUDY PROMPTS
Type both prompts live on the projector and compare.
The strong one makes the AI a tutor that tests you, instead of a machine that hands you answers.
Write the formula on the board: WHO you are + WHAT you need + HOW (format, length) + CHECK ME (ask me questions).
Important: students do not log in today. Most chatbots need users to be 13+, and under-18s need a parent's OK. Only you type.`);

  // ---------- 9 Prompt challenge
  s = add("ACTIVITY", "Study with AI", "Prompt challenge: you choose, I type");
  pill(s, "10 minutes · whole class", 0.5, 1.15, 2.4);
  [["calendar", C.accent3, "Board exams", "“Make a 7-day revision plan for Class 10 Science, Life Processes, 1 hour a day”"],
   ["list", C.accent4, "Practice", "“Give me 10 NCERT-level MCQs on Class 11 Laws of Motion, answers at the end”"],
   ["flask", C.accent5, "JEE / NEET", "“Explain the mole concept step by step with one solved example, then give me a similar problem”"]].forEach(([ic, col, h, q], i) => {
    const x = 0.5 + i * 3.05;
    card(s, x, 1.7, 2.85, 3.15, C.background1, "pc-" + i);
    circle(s, ic, col, x + 0.2, 1.9, 0.55, "pc-" + i);
    txt(s, h, { x: x + 0.9, y: 1.9, w: 1.8, h: 0.55, fontSize: 15, bold: true, color: C.accent1, valign: "middle", fontFace: "Arial" });
    txt(s, q, { x: x + 0.2, y: 2.65, w: 2.45, h: 2.0, fontSize: 14 });
  });
  s.addNotes(`1:05–1:15 · PROMPT CHALLENGE
Class votes which card first. Type it live. Then change one thing they suggest (their own chapter, their board, Hindi medium).
After each answer ask: "Would you trust this in your exam? How would you check it?"
For the MCQs: solve 2 together as a class. This shows AI as practice, not a shortcut.`);

  // ---------- 10 Catch the mistake
  s = add("ACTIVITY", "Study with AI", "Activity 2: Catch the AI mistake");
  pill(s, "12 minutes · pairs", 0.5, 1.15, 1.9);
  ["Read the AI answer on your sheet", "Open NCERT Class 10 Science, Life Processes", "Circle every mistake", "Write the correct fact next to it"].forEach((t, i) => {
    numDot(s, i + 1, 0.5, 1.75 + i * 0.65, C.accent5);
    txt(s, t, { x: 1.0, y: 1.75 + i * 0.65, w: 4.6, h: 0.34, fontSize: 15, valign: "middle" });
  });
  card(s, 6.0, 1.7, 3.5, 2.4, C.background1, "challenge");
  circle(s, "search", C.accent2, 7.4, 1.85, 0.7, "challenge");
  txt(s, "Challenge", { x: 6.2, y: 2.65, w: 3.1, h: 0.35, fontSize: 16, bold: true, color: C.accent1, align: "center", fontFace: "Arial" });
  txt(s, "There are 4 mistakes. Which pair finds all 4 first?", { x: 6.2, y: 3.05, w: 3.1, h: 0.8, fontSize: 14, align: "center" });
  txt(s, "The answer sounded sure. It was still wrong.", { x: 6.0, y: 4.3, w: 3.5, h: 0.4, fontSize: 13, italic: true, color: C.text2, align: "center" });
  s.addNotes(`1:15–1:27 · CATCH THE AI MISTAKE
Hand out the printed sheet (from the lesson plan appendix). Pairs share one NCERT book if possible; otherwise project the NCERT page.
The 4 mistakes: (1) mitochondria → chloroplasts; (2) takes in oxygen, gives out CO2 → takes in CO2, gives out oxygen; (3) desert plants open stomata in the day → at night; (4) stored as glucose → stored as starch.
First pair to find all 4 reads them out. Then reveal all 4 on the board.
Say: "Every sentence sounded correct. That's why you check with NCERT before you learn something from AI."`);

  // ---------- 11 Confidently wrong
  s = add("CONTENT", "Study with AI", "AI can sound sure and still be wrong");
  circle(s, "warn", C.accent2, 0.6, 1.4, 1.1, "warn");
  txt(s, "It predicts words that sound right. It does not check facts, and it can invent sources.", { x: 2.0, y: 1.35, w: 7.4, h: 1.2, fontSize: 18, bold: true, valign: "middle" });
  card(s, 2.0, 2.8, 7.4, 2.05, C.background2, "checks");
  txt(s, "Before you learn it, check with:", { x: 2.25, y: 2.95, w: 6.9, h: 0.4, fontSize: 15, bold: true, color: C.accent1 });
  txt(s, [{ text: "Your NCERT textbook", options: { bullet: true, breakLine: true } }, { text: "Your school or coaching teacher", options: { bullet: true, breakLine: true } },
          { text: "Two trusted sources, not one", options: { bullet: true } }], { x: 2.25, y: 3.45, w: 6.9, h: 1.3, fontSize: 15, paraSpaceAfter: 4 });
  s.addNotes(`1:27–1:30 · WHY IT HAPPENS
Link back to slide 4: it predicts likely words. A wrong fact can be "likely-sounding".
Tip for students: ask the chatbot "Which parts of your answer might be wrong?" or "Give me the NCERT page for this." Then actually check.`);

  // ---------- 12 Live build
  pres.addSection({ title: "Build and stay safe" });
  s = add("CONTENT", "Build and stay safe", "Live demo: AI builds an app");
  [["edit", C.accent4, "Ask", "“Make a quiz web page with 5 questions on Life Processes and a score”"],
   ["file", C.accent3, "AI writes it", "The HTML, CSS and JavaScript code, in seconds"],
   ["code", C.accent1, "Save and open", "Save as quiz.html and open it in the browser"],
   ["magic", C.accent5, "You change it", "Add a timer, dark mode or more questions"]].forEach(([ic, col, h, d], i) => {
    const x = 0.5 + i * 2.3;
    card(s, x, 1.25, 2.1, 2.6, C.background2, "build-" + i);
    circle(s, ic, col, x + 0.2, 1.45, 0.55, "build-" + i);
    txt(s, h, { x: x + 0.2, y: 2.1, w: 1.75, h: 0.4, fontSize: 15, bold: true, fontFace: "Arial" });
    txt(s, d, { x: x + 0.2, y: 2.55, w: 1.75, h: 1.2, fontSize: 14, color: C.text2 });
  });
  card(s, 0.5, 4.05, 9, 0.8, C.text1, "build-lesson");
  txt(s, [{ text: "AI writes code fast. ", options: { color: C.accent2, bold: true } }, { text: "You still have to understand it, test it and fix it. That's what builders learn.", options: {} }],
      { x: 0.75, y: 4.05, w: 8.5, h: 0.8, fontSize: 16, color: C.background1, valign: "middle" });
  s.addNotes(`1:30–1:40 · LIVE BUILD DEMO (wow moment)
Before class: test this exact prompt and have a working quiz.html saved as a backup.
Type the prompt, copy the code into a file in VS Code or Notepad, save as quiz.html, open in Chrome. Play it with the class answering.
Ask the class for one change ("add a 30-second timer"), type it, reload. If something breaks, even better: show how you read the code and fix it.
Say: "Building websites and apps like this, properly, is Level 2 of the Classes 9–12 course."`);

  // ---------- 13 Learn vs copy
  s = add("CONTENT", "Build and stay safe", "Learn with AI, don't copy with AI");
  [["check", C.accent3, "Learn: yes", ["Explain a concept in simple words", "Quiz me and check my answers", "Make my revision plan", "Show me where my answer is weak"]],
   ["cross", C.accent5, "Copy: no", ["Write my assignment for me", "Solve homework I hand in as mine", "Help me during a test or exam", "Paste AI text without saying so"]]].forEach(([ic, col, h, items], i) => {
    const x = 0.5 + i * 4.7;
    card(s, x, 1.25, 4.3, 3.6, C.background2, "lc-" + i);
    circle(s, ic, col, x + 0.25, 1.45, 0.6, "lc-" + i);
    txt(s, h, { x: x + 1.0, y: 1.45, w: 3, h: 0.6, fontSize: 18, bold: true, fontFace: "Arial", valign: "middle" });
    txt(s, items.map((t, k) => ({ text: t, options: { bullet: true, breakLine: k < items.length - 1 } })), { x: x + 0.3, y: 2.35, w: 3.8, h: 2.3, fontSize: 17, paraSpaceAfter: 14 });
  });
  s.addNotes(`1:40–1:45 · HONEST USE
Simple test: "If your teacher saw exactly how you used AI, would you be comfortable?"
Copying hurts you most: board exams and JEE/NEET have no AI. The marks come from what's in your head.
Many schools and boards treat AI-written work as copying. Say when you used AI.`);

  // ---------- 14 Deepfakes and scams
  s = add("ACTIVITY", "Build and stay safe", "Deepfakes and scams");
  card(s, 0.5, 1.2, 4.3, 2.75, C.background1, "fake");
  txt(s, "Spot a fake", { x: 0.75, y: 1.35, w: 3.8, h: 0.4, fontSize: 16, bold: true, color: C.accent1, fontFace: "Arial" });
  [["hand", "Hands, fingers, ears look wrong"], ["font", "Text in the picture is jumbled"], ["sun", "Light and shadows don't match"], ["mic", "Voice sounds flat or oddly calm"]].forEach(([ic, t], i) => {
    const y = 1.85 + i * 0.5;
    circle(s, ic, C.accent4, 0.75, y, 0.38, "fake-" + i);
    txt(s, t, { x: 1.25, y, w: 3.4, h: 0.38, fontSize: 14, valign: "middle" });
  });
  card(s, 5.2, 1.2, 4.3, 2.75, C.background1, "scam");
  txt(s, "Common scams", { x: 5.45, y: 1.35, w: 3.8, h: 0.4, fontSize: 16, bold: true, color: C.accent1, fontFace: "Arial" });
  txt(s, ["A “bank KYC” call asking for your OTP", "An easy part-time job that asks for a fee", "Instant loan apps that want your contacts and photos", "A cloned voice of a relative asking for money"]
      .map((t, k, a) => ({ text: t, options: { bullet: true, breakLine: k < a.length - 1 } })), { x: 5.45, y: 1.85, w: 3.85, h: 2.0, fontSize: 14, paraSpaceAfter: 4 });
  card(s, 0.5, 4.1, 9, 0.75, C.text1, "help");
  txt(s, [{ text: "Never share an OTP. ", options: { color: C.accent2, bold: true } }, { text: "Report fraud: call 1930 or visit cybercrime.gov.in, and tell a parent.", options: {} }],
      { x: 0.75, y: 4.1, w: 8.5, h: 0.75, fontSize: 16, color: C.background1, valign: "middle" });
  s.addNotes(`1:45–1:51 · DEEPFAKES AND SCAMS
Show 3–4 prepared pictures (half real, half AI) and let the class vote. Use the 4 clues.
Scams: ask "Has anyone in your family got a call like this?" Hands usually go up.
Serious point: making fake pictures or videos of classmates or teachers is hurtful and can be a crime. Tell an adult if you see one.
1930 is the national cyber crime helpline; cybercrime.gov.in is the reporting portal.`);

  // ---------- 15 Rules
  s = add("CONTENT", "Build and stay safe", "My 5 AI rules");
  ["Never share personal details, passwords, OTPs or photos with AI tools", "Check important facts with NCERT or a teacher",
   "Use AI to understand and practise, never to copy", "Say when you used AI in your work", "Never make or share fakes of real people"].forEach((t, i) => {
    const y = 1.2 + i * 0.74;
    card(s, 0.5, y, 9, 0.62, C.background2, "rule-" + i);
    numDot(s, i + 1, 0.7, y + 0.14, C.accent1);
    txt(s, t, { x: 1.25, y, w: 8.0, h: 0.62, fontSize: 16, valign: "middle" });
  });
  s.addNotes(`1:51–1:54 · RULES
Read each rule. For rules 2 and 3 ask: "Give me an example of breaking it." Rule 3 matters most to parents and teachers.`);

  // ---------- 16 Exit ticket
  s = add("ACTIVITY", "Build and stay safe", "Exit ticket");
  pill(s, "3 minutes · on your own", 0.5, 1.15, 2.3);
  [["bulb", C.accent3, "One thing AI is good at"], ["warn", C.accent5, "One thing AI gets wrong"], ["edit", C.accent4, "One prompt you will use this week"]].forEach(([ic, col, t], i) => {
    const x = 0.5 + i * 3.05;
    card(s, x, 1.7, 2.85, 2.3, C.background1, "exit-" + i);
    numDot(s, i + 1, x + 0.2, 1.9, C.accent1);
    circle(s, ic, col, x + 2.1, 1.9, 0.55, "exit-" + i);
    txt(s, t, { x: x + 0.2, y: 2.75, w: 2.45, h: 1.0, fontSize: 16, bold: true });
  });
  txt(s, "Write on your card and hand it in on your way out. No names needed.", { x: 0.5, y: 4.25, w: 9, h: 0.4, fontSize: 14, italic: true, color: C.text2, align: "center" });
  s.addNotes(`1:54–1:57 · EXIT TICKET
Hand out index cards. Students write 3 short lines, no names. Collect them at the door.
Read them later: they tell you what worked, and they make good quotes for the principal (anonymous).`);

  // ---------- 17 What's next
  pres.addSection({ title: "Close" });
  s = add("DARK", "Close", "Want to build more?");
  s.addText("AI classes for Classes 9–12: Build and Study with AI", { placeholder: "sub" });
  [["Level 1 · Basics", "AI for study and life"], ["Level 2 · Builder", "Your own website and web app"], ["Level 3 · Advanced", "Python and AI projects"]].forEach(([h, d], i) => {
    txt(s, h, { x: 0.6, y: 3.65 + i * 0.42, w: 2.2, h: 0.38, fontSize: 14, bold: true, color: C.accent1, valign: "middle" });
    txt(s, d, { x: 2.8, y: 3.65 + i * 0.42, w: 3.6, h: 0.38, fontSize: 14, color: C.background1, valign: "middle" });
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.45, y: 0.5, w: 1.95, h: 1.95, rectRadius: 0.1, fill: { color: C.background1 }, line: { type: "none" }, objectName: "qr-bg" });
  s.addImage({ path: QR, x: 7.6, y: 0.65, w: 1.65, h: 1.65, altText: "QR code to learn.themanishchauhan.in", objectName: "qr" });
  txt(s, "Ask your parents to scan", { x: 7.2, y: 2.55, w: 2.45, h: 0.3, fontSize: 12, color: C.background1, align: "center" });
  txt(s, "WhatsApp +91 70150 66237", { x: 7.0, y: 3.65, w: 2.6, h: 0.38, fontSize: 14, bold: true, color: C.accent2, align: "right", valign: "middle" });
  txt(s, "Live online classes every Saturday and Sunday · Launch offer: no admission fee for the first 51 students", { x: 0.6, y: 4.95, w: 8.8, h: 0.35, fontSize: 12, color: C.accent6 });
  s.addNotes(`1:57–2:00 · CLOSE
Thank the students, the teacher and the principal.
Hand out the parents' sheet. Say: "If you enjoyed today, show this to your parents. The first 51 students pay no admission fee."
No hard selling. Parents decide.`);

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("wrote", OUT);
})().catch(e => { console.error(e); process.exit(1); });
