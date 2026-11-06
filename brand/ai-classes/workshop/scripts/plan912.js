// Classes 9–12 workshop lesson plan (.docx), same structure as the Classes 6–8 plan.
const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType,
  LevelFormat, Footer, PageNumber, BorderStyle, PageBreak, HeadingLevel, TabStopType } = require("docx");

const OUT = process.argv[2];
const ORANGE = "FF5A1F", INK = "111111", MUTED = "555555", PEACH = "FFF1EA";
const W = 9638; // A4 text width with 2 cm margins (DXA)

const p = (text, o = {}) => new Paragraph({ spacing: { after: 100 }, ...o, children: Array.isArray(text) ? text : [new TextRun(text)] });
const r = (text, o = {}) => new TextRun({ text, ...o });
const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [r(t)] });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [r(t)] });
const bullet = t => new Paragraph({ numbering: { reference: "bul", level: 0 }, spacing: { after: 60 }, children: Array.isArray(t) ? t : [r(t)] });
const num = (t, ref = "num") => new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60 }, children: [r(t)] });
const check = t => new Paragraph({ spacing: { after: 60 }, indent: { left: 360, hanging: 360 }, children: [r("☐", { color: ORANGE }), r("\t" + t)], tabStops: [{ type: TabStopType.LEFT, position: 360 }] });
const say = t => p([r("Say: ", { bold: true, color: ORANGE }), r(t, { italics: true })]);
const hindi = t => p([r("Hindi tip: ", { bold: true, color: ORANGE }), r(t)]);
const note = (label, t) => p([r(label + ": ", { bold: true }), r(t)]);
const seg = (time, title, slides, goal) => [
  new Paragraph({ heading: HeadingLevel.HEADING_3, children: [r(time + " · ", { color: ORANGE }), r(title)] }),
  p([r(`Slides ${slides}  ·  `, { color: MUTED }), r("Goal: ", { bold: true }), r(goal)]),
];

const border = { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" };
const borders = { top: border, bottom: border, left: border, right: border };
function table(widths, head, rows, opts = {}) {
  const cell = (t, w, isHead, shade) => new TableCell({
    width: { size: w, type: WidthType.DXA }, borders,
    shading: isHead ? { type: ShadingType.CLEAR, fill: INK, color: "auto" } : shade ? { type: ShadingType.CLEAR, fill: shade, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({ children: [r(t, { bold: isHead || (opts.boldFirst && shade === "first"), color: isHead ? "FFFFFF" : INK, size: 19 })] })],
  });
  return new Table({
    width: { size: widths.reduce((a, b) => a + b), type: WidthType.DXA }, columnWidths: widths,
    rows: [
      ...(head ? [new TableRow({ tableHeader: true, children: head.map((t, i) => cell(t, widths[i], true)) })] : []),
      ...rows.map(row => new TableRow({ cantSplit: true, children: row.map((t, i) => cell(t, widths[i], false, opts.shadeFirst && i === 0 ? PEACH : undefined)) })),
    ],
  });
}
const gap = () => new Paragraph({ spacing: { after: 120 }, children: [] });

const glance = [
  ["Who", "One class group, Classes 9–12 (best with 20–40 students)"],
  ["Duration", "2 hours, including a 10-minute break"],
  ["Where", "School computer lab (1 computer per 2–4 students) with a projector"],
  ["Teacher", "Manish Chauhan, with one school teacher present in the room"],
  ["Students leave with", "An AI model they trained, an NCERT answer they checked, a study prompt to use, 5 AI rules and a parents' sheet"],
  ["Cost to school", "Free"],
];
const timeline = [
  ["0:00–0:08", "Welcome and today's mission", "1–2", "Listen, share how they use AI"],
  ["0:08–0:14", "Game: AI or not AI?", "3", "Thumbs up / down for 6 examples"],
  ["0:14–0:20", "How a chatbot answers", "4", "Finish-the-sentence game"],
  ["0:20–0:40", "Activity 1: study detector", "5", "Train a Book / Pen / Nothing model in groups"],
  ["0:40–0:48", "The bias experiment", "6", "Retrain with narrow data and test it"],
  ["0:48–0:58", "Break", "7", "Water, snacks, stretch"],
  ["0:58–1:15", "Study prompts + prompt challenge", "8–9", "Compare prompts, choose and edit study prompts"],
  ["1:15–1:30", "Activity 2: catch the AI mistake", "10–11", "Check an AI answer against NCERT in pairs"],
  ["1:30–1:40", "Live demo: AI builds an app", "12", "Play the quiz, ask for changes"],
  ["1:40–1:51", "Honest use, deepfakes and scams", "13–14", "Learn vs copy; vote real or fake"],
  ["1:51–1:57", "5 AI rules + exit ticket", "15–16", "Give examples; write 3 lines on a card"],
  ["1:57–2:00", "What's next + parents' sheet", "17", "Take the sheet home"],
];
const gameKey = [
  ["Instagram choosing your next Reel", "AI: learns from what you and millions of others watch, like and skip"],
  ["A UPI app sending ₹100 to a friend", "Not AI: fixed rules (PIN, balance, send)"],
  ["Google Lens reading a maths problem from a photo", "AI: learned to read text from millions of examples"],
  ["Gmail moving an email to spam", "AI: learned what spam looks like from billions of emails"],
  ["Excel adding up a column with SUM", "Not AI: a formula, same answer every time"],
  ["A traffic light on a fixed timer", "Not AI (bonus: some new smart signals do use AI)"],
];
const trouble = [
  ["Internet is slow or down", "Run Teachable Machine as a demo on your laptop with your phone hotspot. The finish-the-sentence game, catch-the-mistake sheet, rules and scams work offline. Use your saved quiz.html for the live demo."],
  ["No webcams in the lab", "Teachable Machine with “Upload” and your image folders (book, pen, empty desk), or groups come to your laptop's webcam in turns."],
  ["Too few computers", "Groups of 4–5 with roles: recorder, trainer, tester, reporter. Rotate roles."],
  ["The chatbot gets the facts right", "Good: say so. Use your printed sheet for Activity 2, which always has 4 mistakes. Ask the chatbot something very local or recent to show a wrong or invented answer."],
  ["Live build fails or the code breaks", "Turn it into the lesson: read the error together and ask AI to fix it. If time is short, open your backup quiz.html."],
  ["Some students already code or use AI a lot", "Give them a harder job: explain the quiz code to the class, or design a fairer dataset for the bias experiment."],
  ["Students want to use their own phones for the chatbot", "Not today: no parent permission for accounts in a school workshop. Only you type."],
  ["Running late", "Do one prompt from the challenge and skip slide 11 (say its line during Activity 2). Never skip the rules or the mistake activity."],
  ["A student shares they or their family were scammed", "Thank them, keep it short in class, talk privately later and point them to 1930 and cybercrime.gov.in."],
];

const sheetText = [
  "Photosynthesis is the process by which green plants make their own food using sunlight. It takes place mainly in the mitochondria of the leaf cells. The green pigment chlorophyll absorbs the light energy.",
  "During photosynthesis, plants take in oxygen and water and give out carbon dioxide. Water is absorbed by the roots, and gases enter and leave the leaf through tiny pores called stomata.",
  "The process has three main events: absorption of light energy by chlorophyll; conversion of light energy to chemical energy and splitting of water molecules into hydrogen and oxygen; and reduction of carbon dioxide to carbohydrates.",
  "Desert plants open their stomata during the day to take in carbon dioxide, which helps them in the hot sun.",
  "The carbohydrates that are not used right away are stored in the plant as glucose.",
];
const answers = [
  ["“in the mitochondria of the leaf cells”", "In the chloroplasts, which contain chlorophyll"],
  ["“take in oxygen and water and give out carbon dioxide”", "Plants take in carbon dioxide and water and give out oxygen"],
  ["“Desert plants open their stomata during the day”", "Desert plants take up carbon dioxide at night and keep stomata closed in the day to save water"],
  ["“stored in the plant as glucose”", "Stored as starch"],
];

const doc = new Document({
  creator: "Manish Chauhan", title: "Learn AI the Smart Way: workshop lesson plan, Classes 9–12",
  styles: {
    default: { document: { run: { font: "Calibri", size: 21, color: INK } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", run: { font: "Arial", size: 40, bold: true }, paragraph: { spacing: { before: 0, after: 160 }, keepNext: true } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 30, bold: true }, paragraph: { spacing: { before: 320, after: 140 }, keepNext: true, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 23, bold: true }, paragraph: { spacing: { before: 200, after: 100 }, keepNext: true, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 23, bold: true }, paragraph: { spacing: { before: 260, after: 80 }, keepNext: true, outlineLevel: 2 } },
    ],
  },
  numbering: { config: [
    { reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] },
    ...["num", "num2", "num3"].map(ref => ({ reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 300 } } } }] })),
  ] },
  sections: [{
    properties: { page: { margin: { top: 1000, bottom: 1000, left: 1134, right: 1134 } } },
    footers: { default: new Footer({ children: [new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: W }],
      children: [r("Learn AI the Smart Way · Workshop lesson plan · Manish Chauhan", { size: 16, color: "888888" }), r("\t", { size: 16 }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888" })] })] }) },
    children: [
      p([r("FREE AI WORKSHOP · CLASSES 9–12", { bold: true, color: ORANGE, size: 18 })]),
      new Paragraph({ style: "Title", children: [r("Learn AI the Smart Way: 2-hour workshop lesson plan")] }),
      p("A hands-on workshop where older students see how chatbots really work, train an AI model and find its bias, use AI to study for boards, JEE and NEET, catch AI mistakes with NCERT, watch AI build an app, and learn honest and safe use. Use this plan with the slide deck “AI-Workshop-Slides-Class-9-12.pptx” (the same timings are in the slide notes)."),
      gap(),
      table([2600, W - 2600], ["Workshop at a glance", ""], glance, { shadeFirst: true }),

      h1("Learning goals"),
      p("By the end of the workshop, every student can:"),
      num("Explain how a chatbot answers (it predicts the next word) and why that makes it sometimes wrong."),
      num("Train a simple image model and show how narrow data creates bias."),
      num("Write a study prompt using: who you are + what you need + how + check me."),
      num("Check an AI answer against NCERT and correct its mistakes."),
      num("Tell learning with AI from copying with AI, and spot common deepfakes and scams."),

      h1("Before the workshop"),
      h2("One week before"),
      check("Confirm date, time, class, number of students and the lab with the school."),
      check("Ask how many computers work, whether they have webcams, and the internet speed."),
      check("Ask which board the school follows (CBSE or HBSE) and which classes will attend, so the prompt examples match their syllabus."),
      check("Ask the school's rule on photos. Plan to photograph screens only, never students' faces, unless the school gives written permission."),
      check("Print the “Catch the AI mistake” sheet (Appendix, one per pair), the parents' take-home sheet (one per student) and get index cards for the exit ticket."),
      h2("The day before"),
      check("Test teachablemachine.withgoogle.com on your own laptop with the Book / Pen / Nothing classes."),
      check("Run the live-demo prompt from slide 12, save a working quiz.html as a backup, and keep a code editor (VS Code or Notepad) ready."),
      check("Run the 3 prompt-challenge prompts once so you know roughly what the answers look like."),
      check("Prepare 3–4 pictures for the real-or-fake vote: half real photos, half AI-generated. No real people."),
      check("Backup for no webcams: folders of about 20 images each of a book, a pen and an empty desk."),
      check("Log in to your chatbot (ChatGPT or Gemini) on your laptop. Only you will type. Students do not log in."),
      check("Keep the NCERT Class 10 Science “Life Processes” PDF on your laptop, and the deck on a USB drive with a PDF copy."),
      h2("30 minutes before class"),
      check("Open Teachable Machine on every lab computer and test one webcam."),
      check("Connect your laptop to the projector, turn sound off, and open the deck in presenter view."),
      check("Write on the board: “Who you are + What you need + How + Check me”."),

      h1("What you need"),
      table([3600, W - 3600], ["Item", "Notes"], [
        ["Your laptop + charger + projector cable (HDMI/USB-C adapter)", "Presenter view shows your notes"],
        ["Lab computers with Chrome or Edge", "1 per 2–4 students; webcams for Activity 1"],
        ["Internet", "Teachable Machine and the chatbot need it; most other parts work offline"],
        ["NCERT Class 10 Science", "A few copies for Activity 2, or project the PDF"],
        ["“Catch the AI mistake” sheets + pens", "One sheet per pair (Appendix)"],
        ["Index cards", "One per student, for the exit ticket"],
        ["Whiteboard and markers", "For the prompt formula and students' ideas"],
        ["Parents' sheets (printed)", "One per student"],
        ["Pen drive with deck, PDF, quiz.html and backup images", "In case the internet or laptop fails"],
      ]),

      h1("Timeline"),
      table([1250, 3200, 800, W - 5250], ["Time", "Segment", "Slides", "Students do"], timeline),

      new Paragraph({ children: [new PageBreak()] }),
      h1("Step-by-step plan"),
      ...seg("0:00–0:08", "Welcome and today's mission", "1–2", "Get attention, find out how they already use AI, set expectations."),
      bullet("Introduce yourself in one line. Ask who used ChatGPT or Gemini this week, and who used it for homework. No judging."),
      bullet("Show the 6-step mission: Understand, Train, Study, Check, Build, Stay safe."),
      bullet("Set two rules: hand up means quiet; everyone in the group gets a turn on the computer. Tell them nobody logs in to a chatbot today."),
      say("I'm Manish. I build websites and apps for companies and I use AI every day. Today we'll see how it really works, use it to study better, watch it build an app, and catch it when it's wrong."),
      hindi("“Aaj hum dekhenge AI andar se kaise kaam karta hai, aur isse padhai smart tarike se kaise karein.”"),

      ...seg("0:08–0:14", "Game: AI or not AI?", "3", "Students separate learning systems from fixed-rule software."),
      bullet("Read each card. Thumbs up for AI, thumbs down for not AI. Ask one student to explain each answer."),
      gap(),
      table([4300, W - 4300], ["Card", "Answer and reason"], gameKey),
      say("If it learns from examples and makes predictions, it's AI. If it follows fixed rules, it's normal software."),

      ...seg("0:14–0:20", "How a chatbot answers", "4", "Students understand next-word prediction, the root of AI mistakes."),
      bullet("Play “finish the sentence” out loud. The first two have one answer (New Delhi, reaction). The third has none, and the class disagrees."),
      bullet("Explain: a chatbot picks the most likely next word, again and again. Likely is not the same as true."),
      say("A chatbot doesn't look up facts. It predicts words that sound right. Usually they are right. Sometimes they're not, and it sounds just as confident."),
      hindi("“Chatbot sach nahi dhundta, agla sabse sahi lagne wala shabd guess karta hai.”"),

      ...seg("0:20–0:40", "Activity 1: Build a study detector (main activity)", "5", "Every group trains an image model and sees it work."),
      bullet("Demo all 5 steps on the projector (about 3 minutes)."),
      bullet("Groups of 3–4: teachablemachine.withgoogle.com → Get Started → Image Project → Standard image model."),
      bullet("Classes: Book, Pen, Nothing. Each student records at least one class (about 50 pictures). Point the camera at the desk and hands, not faces."),
      bullet("Train Model, then test live. 2–3 groups show their detector working for 30 seconds."),
      bullet("Fast groups: add a 4th class (Calculator, or Phone using your phone)."),
      note("Backup if there are no webcams", "use “Upload” with the image folders."),
      note("Privacy", "training happens in the browser; nothing is uploaded unless someone saves the project. Ask students not to save."),

      ...seg("0:40–0:48", "The bias experiment", "6", "Students see that narrow data makes unfair AI."),
      bullet("Each group retrains with one person's hand and one book only, then tests with another person and another book. Accuracy usually drops."),
      bullet("Go through the 3 real-world examples. Ask: “Who gets hurt when this AI is wrong?”"),
      bullet("Real cases: face recognition that worked worse on darker skin; a hiring tool (reported in 2018) that was dropped after it learned to prefer men."),
      say("The AI wasn't evil. The data was narrow. People who build AI have to check this, and that could be you one day."),

      ...seg("0:48–0:58", "Break", "7", "Rest, and set up the second half."),
      bullet("Students get water and stretch. Close Teachable Machine tabs without saving."),
      bullet("You: open the chatbot (your account) and the code editor, and place the mistake sheets face down."),

      ...seg("0:58–1:15", "Study prompts + prompt challenge", "8–9", "Students learn prompts that make AI a tutor, not an answer machine."),
      bullet("Type the weak and the strong prompt live and compare. The strong one asks the AI to test the student."),
      bullet("Point to the formula on the board: who you are + what you need + how + check me."),
      bullet("Class votes which challenge card to run first. Type it, then change one thing they suggest (their chapter, their board, Hindi medium)."),
      bullet("For the MCQ prompt, solve 2 questions together. After each answer ask: “Would you trust this in your exam? How would you check it?”"),
      note("Important", "most chatbots need users to be 13+, and under-18s need a parent's permission. Students do not log in during the workshop. Only you type, on the projector."),
      hindi("“AI ko answer machine nahi, apna tutor banao: usse bolo ki tumse sawaal pooche.”"),

      ...seg("1:15–1:30", "Activity 2: Catch the AI mistake", "10–11", "Students check AI against NCERT and find confident mistakes."),
      bullet("Hand out the sheet (Appendix), one per pair. Pairs share an NCERT book, or project the NCERT page."),
      bullet("Pairs circle every mistake and write the correct fact. First pair to find all 4 reads them out."),
      bullet("Reveal the answer key on the board. Then show slide 11: it predicts words that sound right and can even invent sources."),
      say("Every sentence sounded correct. That's why you check with NCERT before you learn anything from AI."),

      ...seg("1:30–1:40", "Live demo: AI builds an app", "12", "Students see what building with AI looks like, and why skills still matter."),
      bullet("Type the prompt, paste the code into a file, save as quiz.html and open it in Chrome. The class plays it."),
      bullet("Take one change from the class (for example a 30-second timer), type it, reload. If something breaks, read the code together and fix it."),
      say("AI writes code fast. You still have to understand it, test it and fix it. Building websites and apps properly is Level 2 of the Classes 9–12 course."),

      ...seg("1:40–1:51", "Honest use, deepfakes and scams", "13–14", "Habits that parents, teachers and boards care about."),
      bullet("Learn vs copy: ask “If your teacher saw exactly how you used AI, would you be comfortable?” Board exams and JEE/NEET have no AI."),
      bullet("Show the prepared pictures; students vote real or fake using the 4 clues."),
      bullet("Scams: ask if anyone's family got a call like these. Never share an OTP. Report fraud on 1930 or cybercrime.gov.in."),
      bullet("Serious point: fake pictures or videos of classmates or teachers are hurtful and can be a crime. Tell an adult."),

      ...seg("1:51–1:57", "5 AI rules + exit ticket", "15–16", "Students leave with clear rules and one thing to try."),
      bullet("Read each rule. For rules 2 and 3 ask for an example of breaking it."),
      bullet("Hand out index cards. Students write: one thing AI is good at, one thing it gets wrong, one prompt they'll use this week. No names. Collect at the door."),

      ...seg("1:57–2:00", "What's next", "17", "A friendly close and a clear next step for parents."),
      bullet("Thank the students, the teacher and the principal."),
      bullet("Hand out the parents' sheet. Mention the free demo class and the launch offer: no admission fee for the first 51 students. Classes are live online, every Saturday and Sunday."),
      bullet("No hard selling. Parents decide."),
      say("If you enjoyed today, show this sheet to your parents. There's a lot more we can build together."),

      new Paragraph({ children: [new PageBreak()] }),
      h1("If something goes wrong"),
      table([3000, W - 3000], ["Problem", "What to do"], trouble),

      h1("Safety and privacy checklist"),
      bullet("Students never create accounts or log in to any AI chatbot during the workshop. Teachable Machine needs no login."),
      bullet("Only the teacher uses the chatbot, on the projector."),
      bullet("No names, phone numbers, addresses or photos of students are typed into any AI tool."),
      bullet("Cameras point at desks and hands. Teachable Machine projects are not saved; close the tabs at the end."),
      bullet("Photos of screens only, never faces, unless the school gives written permission."),
      bullet("A school teacher stays in the room for the whole workshop."),
      bullet("Never promise jobs, marks, ranks or admissions."),

      h1("After the workshop"),
      check("Same day: send the principal a thank-you message with 2–3 screen photos (if allowed), what students built, and 2–3 anonymous exit-ticket quotes."),
      check("Ask the school for a 5-minute chat about a weekly AI club, a second workshop, or a session for teachers."),
      check("Read all exit tickets. Note what worked and what to change (timing, examples, tech issues)."),
      check("Follow up with parents who message you within 24 hours, with the demo class timing and fees."),
      h2("Quick feedback questions (by show of hands)"),
      num("What was most useful: training the model, study prompts, catching mistakes or the app demo?", "num2"),
      num("Would you like to learn to build websites and apps with AI?", "num2"),
      num("Which AI rule will you follow this week?", "num2"),

      // Appendix: student sheet
      new Paragraph({ children: [new PageBreak()] }),
      p([r("APPENDIX · PRINT ONE PER PAIR", { bold: true, color: ORANGE, size: 18 })]),
      new Paragraph({ style: "Title", children: [r("Catch the AI mistake")] }),
      p([r("Pair number: ________     Class: ________", { color: MUTED })]),
      p([r("We asked an AI chatbot: ", { bold: true }), r("“How do plants make their food? Explain for Class 10 Science.”")]),
      p("Here is its answer. It sounds sure, but it has 4 mistakes. Use your NCERT Class 10 Science book (chapter “Life Processes”) to find them. Circle each mistake and write the correct fact in the margin.", { spacing: { after: 200 } }),
      ...sheetText.map(t => new Paragraph({ spacing: { after: 260, line: 400 }, indent: { right: 2200 }, children: [r(t, { size: 24 })] })),
      p([r("Our 4 corrections:", { bold: true })], { spacing: { before: 200, after: 120 } }),
      ...[1, 2, 3, 4].map(n => new Paragraph({ spacing: { after: 300 }, children: [r(`${n}. ______________________________________________________________________________`)] })),

      new Paragraph({ children: [new PageBreak()] }),
      p([r("APPENDIX · ANSWER KEY (TEACHER ONLY)", { bold: true, color: ORANGE, size: 18 })]),
      h2("The 4 mistakes"),
      table([4200, W - 4200], ["AI said", "Correct (NCERT Class 10 Science, Life Processes)"], answers),
      gap(),
      p("Everything else on the sheet is correct, including the three main events of photosynthesis and the role of stomata. If a pair marks a correct sentence as wrong, ask them to show the NCERT line that disagrees. Checking works both ways."),
    ],
  }],
});

Packer.toBuffer(doc).then(b => { fs.writeFileSync(OUT, b); console.log("wrote", OUT); });
