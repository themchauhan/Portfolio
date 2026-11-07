"""Builds the one-page A4 flyer / poster (English + Hindi) for handouts and pasting as ads.
Fees, phone, levels, offer and QR codes come from build.py so they stay in sync. No fees on the flyer, on purpose with the brochure."""
import html, pathlib
from build import T as B, PHONE

HERE = pathlib.Path(__file__).parent
OUT = HERE / "flyer"
OUT.mkdir(exist_ok=True)

T = {
"en": {
  "font": "Inter", "qr": "../qr-en.svg", "url": "learn.themanishchauhan.in",
  "usa": "Already teaching kids in the USA. Now here in India.",
  "quotesTitle": "What they say in the USA",
  "quotes": [["The results were consistently impressive — the kids produced work that was far beyond what typical beginner classes deliver.", "DK", "Parent · Livermore, California"],
             ["Manish was and still is an amazing teacher who beautifully explained every concept in a way that I could understand as a beginner.", "Brian", "Student in the USA, learning with Manish since 2025"]],
  "quoteNote": "",
  "sub": "Live online on Google Meet · Classes every Saturday and Sunday · Batches of 10–15",
  "courses": [["Classes 6–8", "Make with AI", "Games, chatbots and first steps in coding"],
              ["Classes 9–12", "Build and Study with AI", "Smarter study for boards, JEE and NEET, websites and Python"]],
  "takes": ["Takes home: a game and a chatbot they built themselves", "Takes home: a live website or app and a project they can show colleges"],
  "levelsNote": "8 weeks per level · 1-hour classes every Saturday and Sunday · project showcase every level",
  "why": ["Kids build their own games, apps and websites", "Honest use of AI for studies, not copying", "Online safety: deepfakes, privacy and scams"],
  "cta": "Book a free demo class", "wa": "WhatsApp or call",
  "scan": "Scan to see the full syllabus",
  "teacher": "Taught by Manish Chauhan, software developer with 8+ years of experience",
},
"hi": {
  "font": "Mukta", "qr": "../qr-hi.svg", "url": "learn.themanishchauhan.in/hi",
  "usa": "USA के बच्चों को पढ़ा रहे हैं, अब यहाँ भारत में भी।",
  "quotesTitle": "USA में क्या कहते हैं",
  "quotes": [["नतीजे लगातार शानदार रहे — बच्चों ने ऐसा काम बनाया जो आम शुरुआती क्लास से कहीं आगे था।", "DK", "पेरेंट · लिवरमोर, कैलिफ़ोर्निया"],
             ["मनीष पहले भी और आज भी एक शानदार टीचर हैं, जिन्होंने हर कॉन्सेप्ट को इतनी अच्छी तरह समझाया कि शुरुआती होने के बावजूद मैं समझ सका।", "Brian", "अमेरिका में छात्र, 2025 से मनीष से सीख रहे हैं"]],
  "quoteNote": "अंग्रेज़ी से हिंदी अनुवाद",
  "sub": "Google Meet पर लाइव ऑनलाइन · हर शनिवार और रविवार क्लास · 10–15 बच्चों के बैच",
  "courses": [["कक्षा 6–8", "Make with AI", "गेम, चैटबॉट और कोडिंग की शुरुआत"],
              ["कक्षा 9–12", "Build and Study with AI", "बोर्ड, JEE और NEET के लिए स्मार्ट पढ़ाई, वेबसाइट और Python"]],
  "takes": ["साथ ले जाते हैं: अपना बनाया हुआ गेम और चैटबॉट", "साथ ले जाते हैं: एक लाइव वेबसाइट या ऐप, और कॉलेज को दिखाने लायक प्रोजेक्ट"],
  "levelsNote": "हर लेवल 8 हफ़्ते · हर शनिवार और रविवार 1 घंटे की क्लास · हर लेवल के आख़िर में प्रोजेक्ट शोकेस",
  "why": ["बच्चे खुद गेम, ऐप और वेबसाइट बनाते हैं", "पढ़ाई में AI का ईमानदार इस्तेमाल, कॉपी नहीं", "ऑनलाइन सेफ़्टी: डीपफ़ेक, प्राइवेसी और स्कैम"],
  "cta": "फ़्री डेमो क्लास बुक करें", "wa": "WhatsApp या कॉल करें",
  "scan": "पूरा सिलेबस देखने के लिए स्कैन करें",
  "teacher": "पढ़ाते हैं मनीष चौहान, 8+ साल के अनुभव वाले सॉफ़्टवेयर डेवलपर",
},
}

CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --ink:#111; --muted:#555; --bg:#f4f1ec; --line:rgba(0,0,0,.14); --accent:#ff5a1f; }
html, body { color: var(--ink); line-height: 1.4; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: var(--body), Arial, sans-serif; }
.page { width: 210mm; height: 297mm; padding: 13mm 13mm 11mm; background: var(--bg); display: flex; flex-direction: column; overflow: hidden; }
.d { font-family: "Bricolage Grotesque", var(--body), sans-serif; font-weight: 800; letter-spacing: -0.02em; line-height: 1.02; }
.hi .d { font-family: var(--body), sans-serif; letter-spacing: 0; line-height: 1.2; }
.top { display:flex; justify-content:space-between; align-items:center; font-size:9.5pt; color:var(--muted); }
.logo { display:flex; align-items:center; gap:8px; font-family:"Bricolage Grotesque",sans-serif; font-weight:800; font-size:16pt; color:var(--ink); }
.logo b { width:28px; height:28px; border-radius:7px; background:var(--ink); color:#fff; display:grid; place-items:center; font-size:14pt; position:relative; }
.logo b::after { content:""; position:absolute; right:4px; bottom:4px; width:6px; height:6px; border-radius:50%; background:var(--accent); }
.logo span::after { content:"."; color:var(--accent); }
.tag { font-size: 20pt; color: var(--accent); margin-top: 3mm; }
.hi .tag { font-size: 21pt; }
.eyebrow { color: var(--accent); font-weight: 700; font-size: 14pt; margin-top: 9mm; }
h1 { font-size: 52pt; margin-top: 2mm; }
.hi h1 { font-size: 46pt; }
.sub { font-size: 13pt; color: #333; margin-top: 4mm; }
.offer { margin-top: 6mm; background: var(--accent); color: #fff; border-radius: 14px; padding: 4.5mm 6mm; font-size: 17pt; font-weight: 800; line-height: 1.25; }
.hi .offer { font-size: 18pt; }
.courses { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin-top: 6mm; }
.course { background: #fff; border-radius: 14px; padding: 5mm 5.5mm; display: flex; flex-direction: column; border: 1px solid var(--line); }
.course:last-child { background: var(--ink); color: #fff; border-color: var(--ink); }
.course .cls { color: var(--accent); font-weight: 800; font-size: 13pt; }
.course h2 { font-size: 21pt; margin: 1.5mm 0 2mm; }
.course p { font-size: 11.5pt; color: #444; }
.hi .course p { font-size: 12.5pt; }
.course:last-child p { color: #d6d1c9; }
.course .takes { margin-top: auto; padding-top: 4mm; font-weight: 700; font-size: 12pt; line-height: 1.3; }
.course:last-child .takes { color: #fff; }
.hi .course .takes { font-size: 13pt; }
.course .fee { margin-top: auto; padding-top: 4mm; font-weight: 800; font-size: 22pt; }
.course .fee span { display: block; font-weight: 400; font-size: 9.5pt; color: var(--muted); }
.course:last-child .fee span { color: #b9b3aa; }
.levels { display: flex; align-items: stretch; gap: 2mm; margin-top: 6mm; }
.levels div { flex: 1; border-radius: 12px; padding: 2.2mm 3mm; text-align: center; background: #fff; border: 1px solid var(--line); }
.levels div:nth-of-type(2) { background: #ffe6dc; }
.levels div:nth-of-type(3) { background: var(--accent); color: #fff; border-color: var(--accent); }
.levels strong { display: block; font-size: 13pt; }
.levels span { font-size: 9.5pt; }
.hi .levels span { font-size: 10.5pt; }
.levels i { align-self: center; font-style: normal; font-weight: 800; color: var(--accent); font-size: 16pt; }
.lnote { text-align: center; font-size: 11pt; color: #333; margin-top: 2.5mm; font-weight: 600; }
.quotes { margin-top: 4.5mm; margin-bottom: 4.5mm; }
.qt { font-weight: 800; font-size: 12pt; color: var(--accent); margin-bottom: 2mm; }
.hi .qt { font-size: 13pt; }
.qnote { font-weight: 400; font-size: 8.5pt; color: var(--muted); margin-left: 2mm; }
.qs { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.q { background: #fff; border-radius: 12px; padding: 4mm 5mm; border: 1px solid var(--line); display: flex; flex-direction: column; }
.q blockquote { font-size: 11.5pt; font-weight: 600; line-height: 1.35; }
.hi .q blockquote { font-size: 13pt; }
.q figcaption { margin-top: auto; padding-top: 2.5mm; font-size: 9pt; color: var(--muted); }
.q figcaption b { color: var(--ink); }
.why { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin-top: 6mm; margin-bottom: 4mm; }
.why div { display: flex; gap: 2.5mm; font-size: 11.5pt; font-weight: 600; line-height: 1.3; }
.hi .why div { font-size: 12.5pt; }
.why div::before { content: "✓"; flex: 0 0 6.5mm; height: 6.5mm; border-radius: 50%; background: var(--ink); color: #fff; display: grid; place-items: center; font-size: 10pt; }
.cta { margin-top: auto; background: var(--ink); color: #fff; border-radius: 16px; padding: 6mm 7mm; display: grid; grid-template-columns: 1fr auto; gap: 7mm; align-items: center; }
.cta h3 { font-size: 22pt; }
.cta .wa { color: var(--accent); font-weight: 700; font-size: 11pt; margin-top: 4mm; text-transform: uppercase; letter-spacing: .06em; }
.hi .cta .wa { text-transform: none; letter-spacing: 0; font-size: 12pt; }
.cta .phone { font-family: "Bricolage Grotesque", sans-serif; font-weight: 800; font-size: 34pt; line-height: 1.05; letter-spacing: -0.01em; }
.cta .url { font-size: 11pt; color: #d6d1c9; margin-top: 2mm; }
.cta figure { text-align: center; }
.cta img { width: 44mm; height: 44mm; background: #fff; padding: 2.5mm; border-radius: 10px; display: block; }
.cta figcaption { font-size: 8.5pt; color: #d6d1c9; margin-top: 2mm; max-width: 44mm; }
.hi .cta figcaption { font-size: 9.5pt; }
.by { font-size: 9.5pt; color: #b9b3aa; margin-top: 2.5mm; max-width: 110mm; }
.hi .by { font-size: 10.5pt; }
.teacher { text-align: center; font-size: 10pt; color: var(--muted); margin-top: 4mm; }
.hi .teacher { font-size: 11pt; }
.hi .eyebrow { margin-top: 6mm; }
.hi .courses, .hi .levels, .hi .why { margin-top: 4.5mm; }
.hi .offer { margin-top: 4mm; font-size: 16pt; padding: 3mm 6mm; }
.en .eyebrow { margin-top: 6mm; }
.en h1 { font-size: 40pt; }
.hi h1 { font-size: 36pt; }
.en .courses, .en .levels { margin-top: 4mm; }
.hi .courses, .hi .levels { margin-top: 4mm; }
.en .sub { margin-top: 3mm; }
.en .offer { font-size: 14pt; margin-top: 4mm; padding: 3mm 6mm; }
.en .courses, .en .levels, .en .why { margin-top: 4.5mm; }
.en .course h2 { font-size: 19pt; }
.en .course .fee { font-size: 20pt; }
.en .cta { padding: 5mm 7mm; }
.hi .cta { padding: 5mm 7mm; }
.hi .cta img { width: 40mm; height: 40mm; }
.en .cta img { width: 40mm; height: 40mm; }
"""

def e(s): return html.escape(s)

# Black-and-white print version: white paper, no big solid fills, outlines instead of colour.
BW_CSS = """
:root { --accent: #111; --bg: #fff; --muted: #333; --line: #111; }
.page { background: #fff; }
.eyebrow, .tag, .qt, .course .cls { color: #111; }
.tag { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 5px; }
.offer { background: #fff; color: #111; border: 3px solid #111; }
.course, .course:last-child { background: #fff; color: #111; border: 2px solid #111; }
.course:last-child p, .course p { color: #222; }
.levels div, .levels div:nth-of-type(2) { background: #fff; border: 1.5px solid #111; }
.levels div:nth-of-type(3) { background: #fff; color: #111; border: 3px solid #111; }
.levels i { color: #111; }
.q { border: 1.5px solid #111; }
.q figcaption, .qnote { color: #333; }
.cta { background: #fff; color: #111; border: 3px solid #111; }
.cta .wa { color: #111; }
.cta .url, .by, .cta figcaption { color: #333; }
.cta img { border: 1.5px solid #111; }
.logo b::after { background: #fff; }
.top { color: #333; }
"""

def build(lang, bw=False):
    t, b = T[lang], B[lang]
    courses = "".join(f'<div class="course"><p class="cls">{e(c)}</p><h2 class="d">{e(n)}</h2><p>{e(d)}</p>'
                      '</div>' for c, n, d in t["courses"])
    levels = '<i>→</i>'.join(f'<div><strong>{e(n)}</strong></div>' for n, d in b["levels"])
    quotes = "".join(f'<figure class="q"><blockquote>“{e(q)}”</blockquote><figcaption><b>{e(n)}</b> · {e(r)}</figcaption></figure>' for q, n, r in t["quotes"])
    note = f'<span class="qnote">{e(t["quoteNote"])}</span>' if t["quoteNote"] else ""
    font = "Inter:wght@400;600;700;800" if lang == "en" else "Mukta:wght@400;600;700;800"
    doc = f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>AI classes flyer</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family={font}&display=swap" rel="stylesheet">
<style>:root{{--body:"{t["font"]}"}} {CSS} {BW_CSS if bw else ""}</style></head><body class="{lang}"><section class="page">
  <div class="top"><div class="logo"><b>M</b><span>manish</span></div><div>{e(t["url"])}</div></div>
  <p class="eyebrow">{e(b["eyebrow"])}</p>
  <h1 class="d">{e(t["usa"])}</h1>
  <p class="tag d">{e(b["title"])}</p>
  <p class="sub">{e(t["sub"])}</p>
  <div class="offer">{e(b["offer"])}</div>
  <div class="courses">{courses}</div>
  <div class="levels">{levels}</div>
  <p class="lnote">{e(t["levelsNote"])}</p>
  <div class="quotes"><p class="qt">{e(t["quotesTitle"])} {note}</p><div class="qs">{quotes}</div></div>
  <div class="cta"><div><h3 class="d">{e(t["cta"])}</h3><p class="wa">{e(t["wa"])}</p><p class="phone">{PHONE}</p><p class="url">{e(t["url"])}</p><p class="by">{e(t["teacher"])}</p></div>
    <figure><img src="{t["qr"]}" alt="QR"><figcaption>{e(t["scan"])}</figcaption></figure></div>
</section></body></html>'''
    (OUT / f"flyer-{lang}{'-bw' if bw else ''}.html").write_text(doc, encoding="utf-8")

for lg in ("en", "hi"):
    build(lg)
    build(lg, bw=True)
print("built flyer")
