"""Builds the teacher prep guide (English, for Manish only): every level of both courses, week by week,
with topic, class activity and home task (from build.py / build_syllabus.py) plus prep checklist and watch-outs."""
import html, pathlib
from build import T as B
from build_syllabus import C

HERE = pathlib.Path(__file__).parent
OUT = HERE / "teacher"
OUT.mkdir(exist_ok=True)

CLASS_FLOW = [
    ["Sat 0:00", "Welcome, recap last week, check home tasks (2–3 students share)"],
    ["Sat 0:10", "New idea: explain with a live demo, a game or a question"],
    ["Sat 0:25", "Guided build: everyone follows your shared screen step by step"],
    ["Sun 0:00", "Quick recap, fix problems left from Saturday"],
    ["Sun 0:10", "Own build or challenge; students share their screen when stuck"],
    ["Sun 0:45", "Show and tell, give the home task, note one line for parents"],
]

EVERY_WEEK = [
    "Build this week's project yourself, end to end, on a normal laptop (and on a phone for Level 1)",
    "Send the Google Meet link and starter files on the WhatsApp group the day before",
    "Check your mic, camera, screen share and internet; keep a phone hotspot as backup",
    "Keep a backup: screenshots or a screen recording of the build",
    "Step sheet for the guided build, shared as a PDF or Google Doc",
    "Attendance, and a shared Drive folder where students upload their work (name_week.ext)",
    "After class: short WhatsApp update to parents (what we did, home task, no student faces)",
]

SAFETY = [
    "Classes 6–8: students never log in to AI chatbots or image tools. Only you type, on your shared screen.",
    "Never type a student's name, school or photo into any AI tool.",
    "No recordings or screenshots of student faces unless parents agree in writing.",
    "AI is for learning and practice. If you see copied homework, talk to the student, not the class.",
    "Never promise jobs, placements, marks or admissions.",
    "Classes 9–12: AI accounts and GitHub only with parent permission (both need age 13+).",
]

# (course, level index) -> setup before Week 1, and per week: (prep checklist, watch out)
P = {
("junior", 0): {
 "setup": ["Ask parents to check that quickdraw.withgoogle.com, teachablemachine.withgoogle.com and scratch.mit.edu open on the child's device",
           "Each child needs a webcam (laptop or phone) from Week 2; ask parents to allow camera access in the browser",
           "Share the Scratch offline app link with families who have slow internet",
           "Your own AI chatbot logged in on your laptop only; no student accounts",
           "Students on phones: Scratch is hard on a small screen; ask parents for a laptop or tablet from Week 4"],
 "weeks": [
  (["12 “AI or not AI?” examples on slides or cards (workshop slides 2–6 work)", "Quick Draw tested on a phone and a laptop", "Short screen recording of Quick Draw as backup"],
   "If a child's internet is slow, share your screen and let them call out what to draw."),
  (["Train a demo model yourself on 3 objects (pen, bottle, book)", "A second “bad” model with only 5 pictures from one angle, to show failure", "Webcams tested"],
   "Students record too few pictures from one angle. Push for 50+ per class and a “nothing” class."),
  (["6 prompt pairs ready: unclear vs clear", "1–2 questions where AI gives a wrong answer (test beforehand, e.g. counting letters in a long word)", "Textbook page to check the answer"],
   "Only you type. Never put a student's name or school into the chatbot."),
  (["Scratch starter project with 2–3 sprites", "A finished “dance” demo", "Block cheat sheet: motion, looks, sound, repeat, forever"],
   "Kids spend ages picking sprites and costumes. Give a 5-minute limit."),
  (["Build the catch game yourself: falling object, basket, score variable", "Step card as a PDF", "Starter file with sprites in the Drive folder"],
   "Save every game as name_week5.sb3 and upload it to the Drive folder, or it is lost."),
  (["Pick one NCERT chapter each for Classes 6, 7 and 8 (science or SST)", "Textbook pages to check AI answers", "Blank flashcard sheets"],
   "Make sure the class sees at least one AI mistake and fixes it with the textbook."),
  (["8–10 pictures: half real (free stock), half AI-made (make them beforehand)", "2 harmless fake news examples", "5 golden rules poster"],
   "No pictures of real people or politicians. Keep it light, not scary."),
  (["WhatsApp invite to parents one week before, with date and time", "Showcase order list (1–2 minutes per child)", "Short parent feedback form (Google Form)", "Level 2 details: start date and fee"],
   "Every child presents, even shy ones (let them present with a partner). No screenshots of faces without written permission."),
 ]},
("junior", 1): {
 "setup": ["Laptops or computers needed for every student from this level",
           "Choose how the AI model goes into Scratch: Stretch3 (stretch3.github.io, TM2Scratch extension) or PictoBlox. Test one fully before Week 1",
           "Collect students' Level 1 games so they can reuse sprites",
           "Ask students to sit in good light with a plain background for the gesture weeks"],
 "weeks": [
  (["Game planning sheet: story, character, goal, score, levels, how you lose", "2–3 simple games to play first for ideas"],
   "Kids plan huge games. Push “small and finished” over “big and half-done”."),
  (["Demo with score, lives, timer and a level change (broadcast)", "Variables cheat sheet"],
   "Confusion between “for all sprites” and “for this sprite only” variables."),
  (["Demo gesture model (up, down, left, right or rock-paper-scissors) with a “nothing” class", "Plain background and good light"],
   "Models fail when trained on one hand or one background. Mix hands and angles."),
  (["Test the full path: train → upload model → link in Scratch → control a sprite", "Step card for this path", "Backup: keyboard controls if the camera fails"],
   "Only the model is uploaded, not the photos. Test the model link on a slow connection too."),
  (["Scratch chatbot template: ask and wait, if answer contains keyword, say", "10 facts per subject from textbooks", "Real AI chatbot on your laptop to compare"],
   "Keyword matching breaks on spelling and capitals. Teach “contains” and lower-case answers."),
  (["Collect story ideas from students in Week 5", "Make images on your account (check them before class)", "Copyright examples: cartoon character, brand logo", "A “Made with AI” label"],
   "No images of real people or classmates. Check every output before you share it on screen."),
  (["Blank weekly timetable template", "Chart paper and colours, or a Google Slides template", "Your AI chat ready to share on screen"],
   "AI timetables are too packed. Keep play, rest and family time in the plan."),
  (["Same showcase checklist as Level 1", "Level 3 details: Python, laptop needed"],
   "Run each game once before parents join the call, so nothing fails live."),
 ]},
("junior", 2): {
 "setup": ["Send parents Thonny install steps (thonny.org, includes Python); hold a 10-minute setup call before Week 1",
           "Students install matplotlib in Thonny (Tools → Manage packages) during the setup call",
           "A text editor (VS Code or Notepad++) and a browser for HTML",
           "Starter files for every week in the shared Drive folder"],
 "weeks": [
  (["Turtle cheat sheet: forward, left, right, penup, color, for loop", "Demos: square, star, spiral"],
   "Indentation and typos. Teach them to read the error message first."),
  (["Guess-the-number code with input(), int(), if/elif/else, while"],
   "input() gives text. Show why int() is needed."),
  (["Quiz with a list of questions and a score", "5 sample questions"],
   "Answers do not match because of capitals and spaces. Use .lower().strip()."),
  (["Keyword chatbot using a dictionary", "Real AI chatbot on your shared screen to compare (you type)"],
   "Explain honestly: our bot follows rules; real AI learned patterns from huge amounts of text."),
  (["3-question class survey (favourite sport, subject, snack)", "matplotlib bar chart example", "Turtle bar chart as backup"],
   "Use only class survey data, never personal details."),
  (["HTML starter with head and body", "A sample page", "Images folder with their own drawings or free images"],
   "No address, phone, school name or face photos on the page."),
  (["List of project choices", "Minimum checklist for each choice", "1:1 time slots"],
   "Finish the basic version first, add extras later."),
  (["Showcase checklist", "What next: practice ideas, and the Classes 9–12 course later"],
   "Have every project open and tested before parents join the call."),
 ]},
("senior", 0): {
 "setup": ["Written parent permission for students to use a free AI chatbot (they must be 13+)",
           "Intro form: each student's board, subjects and goals (boards, JEE, NEET)",
           "NCERT PDFs for their subjects (ncert.nic.in)",
           "A Google account for Docs and Sheets; phones are fine for this level"],
 "weeks": [
  (["Next-word guessing game: 5 sentences with a blank", "3–4 prompts where AI makes mistakes (test beforehand)", "Intro form"],
   "The goal is “check, don't blindly trust”, not “AI is useless”."),
  (["5 weak prompts from real student needs", "Prompt formula card: role + task + context + format", "Shared doc for their prompt library"],
   "Show “quiz me on this” vs “give me the answer”. Ban “do my homework” prompts."),
  (["Real exam dates (board date sheet when out) and syllabus PDFs", "Google Sheets timetable template"],
   "AI plans are too ambitious. Add buffer days, sleep and school hours."),
  (["3 hard concepts (e.g. electromagnetic induction, mole concept, meiosis)", "NCERT pages for each", "One AI explanation mistake found beforehand"],
   "You are teaching a study method, not the subject. Tell them to confirm with their school or coaching teacher."),
  (["One harmless viral forward to fact-check", "Fact-check sources (e.g. PIB Fact Check)", "Example of how to cite a source"],
   "Avoid political or religious forwards."),
  (["One chapter PDF", "Flashcard tool (Google Sheets is enough)", "Spaced revision calendar template"],
   "Notes must be in their own words. AI only checks what they missed."),
  (["Real scam examples: OTP, fake job, loan app, lottery", "Deepfake examples from news", "Privacy settings walkthrough for WhatsApp and Instagram"],
   "Sensitive topic. Share the cyber crime helpline 1930 and cybercrime.gov.in, and tell them to talk to parents."),
  (["Showcase checklist", "Level 2 details: laptop needed"],
   "Each student shows their own study system, not a copy of a friend's."),
 ]},
("senior", 1): {
 "setup": ["Laptops needed for every student",
           "Install VS Code with the Live Server extension, and Chrome",
           "Turn on “show file extensions” on Windows computers",
           "A free AI chatbot in the browser is enough as the coding assistant",
           "Your own sample portfolio and finished versions of all three apps"],
 "weeks": [
  (["Inspect a well-known site with browser dev tools", "A “hello” HTML file", "Simple drawing of browser ↔ server"],
   "Hidden file extensions on Windows create index.html.txt. Check before class."),
  (["Portfolio starter template (HTML + CSS, sections)", "List of free image and icon sources"],
   "No phone, address or school photos. First name and city are enough."),
  (["2–3 prompts that give code with a bug (test beforehand)", "Rule card: never paste code you cannot explain"],
   "Students paste long AI code they do not understand. Ask them to explain it line by line."),
  (["JS demos: button changes text, colour toggle, dark mode", "Browser console demo"],
   "Script tag in the wrong place and typos. Teach the console early."),
  (["Three starters: quiz, planner, to-do (localStorage)", "Finished versions for reference"],
   "Scope. Also explain that localStorage data stays only in that browser."),
  (["Ask students in Week 5 to create a GitHub account at home with a parent (email check needed)", "Step card: create username.github.io repo, upload files, Settings → Pages", "Students share their screen while publishing, so you can spot mistakes"],
   "Site can take a few minutes to go live. Keep a second task ready while waiting."),
  (["Review checklist: works on phone, links work, spelling, no personal info", "1:1 review slots"],
   "Give at most 3 points per student, so they finish."),
  (["Each student's live link ready to open on screen", "Showcase checklist", "Level 3 details"],
   "Open every live link before parents join the call."),
 ]},
("senior", 2): {
 "setup": ["Google account for Google Colab (13+), with local Python + Jupyter as a backup",
           "2–3 small clean CSV datasets (e.g. public cricket stats, Rewari weather, anonymous survey)",
           "GitHub accounts from Level 2 (create for new students)",
           "AI API key on your own account with a low spending limit. Keep it out of student code and GitHub"],
 "weeks": [
  (["Colab notebook with exercises", "Marks calculator example"],
   "Colab resets. Students must save a copy to their Drive."),
  (["CSV datasets ready", "pandas snippets: read_csv, filter, sort", "Ask students for their own dataset idea"],
   "Uploaded files vanish when the Colab session ends. Keep data in Drive."),
  (["Chart examples: bar, line, scatter", "“Find a pattern” questions for each chart"],
   "Messy data. Show dropna and checking column types."),
  (["Small dataset for classification (e.g. iris, or study hours vs pass/fail)", "Train/test split demo", "A bias example: model trained on one group only"],
   "Keep the maths light. Focus on the idea: learn from examples, test on new ones."),
  (["API key in Colab secrets, never in the code", "Small working demo app", "Fallback: exported Teachable Machine model"],
   "Never let the key reach GitHub. Remove it before students push code."),
  (["Project idea list with difficulty levels", "Template notebooks", "Milestone checklist"],
   "Projects are too big. Agree on a minimum version first."),
  (["README template: what, why, how to run, screenshots, what I learned", "Example GitHub profile"],
   "Show how to describe a project for college applications, but promise nothing about admissions."),
  (["Careers talk outline: developer, data analyst, ML engineer, designer", "Showcase checklist"],
   "Be honest: careers need much more learning. Never promise jobs or placements."),
 ]},
}

CSS = """
@page { size: A4; margin: 11mm 12mm 13mm; @bottom-left { content: "Manish Chauhan · AI classes · Teacher prep guide"; font: 7.5pt Inter, sans-serif; color: #999; } @bottom-right { content: "Page " counter(page) " / " counter(pages); font: 7.5pt Inter, sans-serif; color: #999; } }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --ink:#111; --muted:#555; --bg:#f4f1ec; --line:rgba(0,0,0,.14); --accent:#ff5a1f; }
body { font-family: Inter, Arial, sans-serif; color: var(--ink); font-size: 9pt; line-height: 1.38; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.d { font-family: "Bricolage Grotesque", Inter, sans-serif; font-weight: 800; letter-spacing: -0.015em; line-height: 1.1; }
.eyebrow { color: var(--accent); font-weight: 600; font-size: 9pt; }
.logo { display:flex; align-items:center; gap:7px; font-family:"Bricolage Grotesque",sans-serif; font-weight:800; font-size:13pt; }
.logo b { width:22px; height:22px; border-radius:6px; background:var(--ink); color:#fff; display:grid; place-items:center; font-size:11pt; position:relative; }
.logo b::after { content:""; position:absolute; right:3px; bottom:3px; width:5px; height:5px; border-radius:50%; background:var(--accent); }
.logo span::after { content:"."; color:var(--accent); }
section { break-before: page; }
section:first-child { break-before: auto; }
h1.d { font-size: 27pt; margin-top: 2mm; }
h2.d { font-size: 14pt; margin: 5mm 0 2mm; }
.lead { font-size: 10.5pt; color: #444; margin-top: 2mm; max-width: 165mm; }
.box { background: var(--bg); border-radius: 10px; padding: 4mm 5mm; }
.grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
table.flow { width:100%; border-collapse: collapse; }
table.flow td { padding: 1.2mm 0; border-bottom: 1px solid var(--line); vertical-align: top; }
table.flow td:first-child { font-weight: 800; color: var(--accent); width: 17mm; white-space: nowrap; }
ul.check { list-style: none; display: grid; gap: .8mm; }
ul.check li { display:flex; gap: 2.2mm; }
ul.check li::before { content: ""; flex: 0 0 3.2mm; height: 3.2mm; border: 1.3px solid var(--ink); border-radius: 2px; margin-top: .6mm; background:#fff; }
ul.dot { list-style: none; display:grid; gap: 1.3mm; }
ul.dot li { display:flex; gap: 2.2mm; }
ul.dot li::before { content: "•"; color: var(--accent); font-weight: 800; }
table.toc { width:100%; border-collapse: collapse; margin-top: 2mm; }
table.toc th { background: var(--ink); color:#fff; text-align:left; font-size: 8.5pt; padding: 2mm 3mm; }
table.toc td { padding: 1.1mm 3mm; border-bottom: 1px solid var(--line); }
table.toc td.c { color: var(--accent); font-weight: 700; white-space: nowrap; }
.lvhead { display:flex; justify-content: space-between; align-items: flex-end; border-bottom: 3px solid var(--ink); padding-bottom: 3mm; }
.lvhead h1.d { font-size: 22pt; margin-top: 1mm; }
.lvhead .goal { text-align:right; font-size: 9pt; color: var(--muted); max-width: 80mm; }
.setup { margin-top: 3mm; padding: 3mm 4mm; border: 1.5px solid var(--accent); background: #fff6f2; }
.setup h3 { font-size: 11pt; margin-bottom: 2mm; }
.week { break-inside: avoid; margin-top: 2.6mm; border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
.wtop { display:flex; gap: 3mm; align-items: baseline; background: var(--ink); color: #fff; padding: 1.6mm 4mm; }
.wtop b { color: var(--accent); white-space: nowrap; font-size: 9pt; }
.wtop span { font-weight: 700; font-size: 10.5pt; }
.wbody { display:grid; grid-template-columns: 1fr 1.15fr; }
.wbody > div { padding: 2.2mm 4mm; }
.wbody > div:first-child { border-right: 1px solid var(--line); }
.lbl { color: var(--accent); font-weight: 700; font-size: 7.5pt; text-transform: uppercase; letter-spacing: .06em; margin-bottom: .8mm; }
.wbody p + .lbl, .wbody ul + .lbl { margin-top: 1.6mm; }
.watch { margin-top: 1.8mm; background: var(--bg); border-radius: 6px; padding: 1.5mm 3mm; font-size: 8.5pt; }
.watch b { color: var(--accent); }
.notes { margin-top: 1.5mm; height: 7mm; border-bottom: 1px dashed #bbb; font-size: 7.5pt; color: #aaa; }
"""

def e(s): return html.escape(s)

def li(items): return "".join(f"<li>{e(x)}</li>" for x in items)

def build():
    en = B["en"]
    toc = []
    sections = []
    for key in ("junior", "senior"):
        c = C[key]["en"]
        for i in range(3):
            name, title, fee, topics = en[key][i]
            goal, builds, tools, weeks = c["levels"][i]
            prep = P[(key, i)]
            toc.append(f'<tr><td class="c">{e(c["classes"])}</td><td><b>{e(name)}</b> · {e(title)}</td><td>{e(builds)}</td><td>{fee}</td></tr>')
            blocks = []
            for w in range(8):
                do, home = weeks[w]
                plist, watch = prep["weeks"][w]
                blocks.append(f'''<div class="week"><div class="wtop"><b>Week {w+1}</b><span>{e(topics[w])}</span></div>
<div class="wbody"><div><p class="lbl">In class</p><p>{e(do)}</p><p class="lbl">Home task</p><p>{e(home) if home else "None. Celebrate!"}</p>
<div class="notes">My notes</div></div>
<div><p class="lbl">Prepare</p><ul class="check">{li(plist)}</ul><p class="watch"><b>Watch out:</b> {e(watch)}</p></div></div></div>''')
            sections.append(f'''<section>
<div class="lvhead"><div><p class="eyebrow">{e(c["classes"])} · {e(c["name"])} · {e(name)} · {fee} · 8 weeks</p><h1 class="d">{e(title)}</h1></div>
<p class="goal"><b style="color:var(--ink)">Goal:</b> {e(goal)}<br><b style="color:var(--ink)">Students build:</b> {e(builds)}</p></div>
<div class="box setup"><h3 class="d">Before Week 1</h3><ul class="check">{li(prep["setup"])}</ul>
<p style="margin-top:2mm;font-size:8.8pt;color:var(--muted)"><b style="color:var(--ink)">Tools:</b> {e(tools)}</p></div>
{"".join(blocks)}</section>''')

    flow = "".join(f"<tr><td>{a}</td><td>{e(b)}</td></tr>" for a, b in CLASS_FLOW)
    intro = f'''<section>
<div class="logo"><b>M</b><span>manish</span></div>
<p class="eyebrow" style="margin-top:4mm">For Manish only · not for parents or schools</p>
<h1 class="d">AI classes: teacher prep guide</h1>
<p class="lead">Both courses, all three levels, week by week. For each week: the topic, what happens in class, the home task, what to prepare and what to watch out for. Tick the boxes as you prepare and use the notes lines after each class.</p>
<h2 class="d">The six levels</h2>
<table class="toc"><tr><th>Course</th><th>Level</th><th>Students build</th><th>Fee</th></tr>{"".join(toc)}</table>
<div class="grid2" style="margin-top:5mm">
 <div class="box"><h3 class="d" style="font-size:12pt;margin-bottom:2mm">Every weekend: Sat + Sun, 1 hour each</h3><table class="flow">{flow}</table></div>
 <div class="box"><h3 class="d" style="font-size:12pt;margin-bottom:2mm">Before every class</h3><ul class="check">{li(EVERY_WEEK)}</ul></div>
</div>
<div class="box" style="margin-top:4mm;background:#fff6f2;border:1.5px solid var(--accent)"><h3 class="d" style="font-size:12pt;margin-bottom:2mm">Safety rules, always</h3><ul class="dot">{li(SAFETY)}</ul></div>
</section>'''

    doc = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>AI classes teacher prep guide</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style></head><body>{intro}{"".join(sections)}</body></html>'''
    (OUT / "teacher-guide.html").write_text(doc, encoding="utf-8")

build()
print("built teacher guide")
