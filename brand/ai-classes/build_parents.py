"""Builds the one-page parents' take-home sheet (English + Hindi) given out after the free workshop.
Fees, phone, CSS and QR codes come from build.py so they stay in sync with the brochure."""
import html, pathlib
from build import T as B, FEES_JR, FEES_SR, PHONE, CSS

HERE = pathlib.Path(__file__).parent
OUT = HERE / "parents"
OUT.mkdir(exist_ok=True)

T = {
"en": {
  "lang": "en", "font": "Inter", "qr": "../qr-en.svg", "url": "learn.themanishchauhan.in",
  "top": "For parents · please take this home",
  "fields": ["Student", "Class", "School", "Date"],
  "eyebrow": "Free AI workshop · Classes 6–8",
  "title": "What your child did in today's AI workshop",
  "intro": "Two hours of guessing, drawing, training and asking good questions. No child logged in to any chatbot: only the teacher typed, on the projector.",
  "did": [["Guessed", "Played “AI or not AI?” and found the AI hidden in YouTube, Maps and face unlock."],
          ["Drew", "Drew pictures in 20 seconds and watched an AI try to guess them live."],
          ["Trained", "Taught a computer to recognise rock, paper and scissors hand signs, in a team."],
          ["Asked", "Learned to write clear questions for AI, and saw that AI can be confidently wrong."],
          ["Spotted", "Looked for clues that a picture is made by AI: fingers, text, shadows."],
          ["Promised", "Took the AI pledge: use AI to learn, create and help, and stay safe, honest and kind."]],
  "homeTitle": "Try at home together (10 minutes)",
  "home": ["Ask your child: “What is AI?” and “How did you make the computer learn rock, paper, scissors?”",
           "Play Quick Draw together at quickdraw.withgoogle.com. No sign-up is needed.",
           "Ask them to tell you the 5 golden rules on the right."],
  "rulesTitle": "5 golden rules of AI",
  "rules": ["Never share your name, address, phone or photos with AI",
            "Check important facts before you believe them",
            "Use AI to learn and practise, not to copy homework",
            "Ask a parent or teacher before using a new AI app",
            "Be kind: no fake pictures or mean content about anyone"],
  "nextTitle": "Want your child to keep learning?",
  "nextIntro": "Live online classes on Google Meet, batches of 10–15. Three levels of 8 weeks each (1-hour classes every Saturday and Sunday), each ending with a project showcase.",
  "head": ["Level", "What students do", "Classes 6–8", "Classes 9–12"],
  "levels": [["Level 1 · Basics", "Understand AI, use it safely, first game"],
             ["Level 2 · Builder", "Games, chatbots, websites and apps"],
             ["Level 3 · Advanced", "Real coding with Python and AI projects"]],
  "courses": "Classes 6–8: Make with AI  ·  Classes 9–12: Build and Study with AI",
  "feesNote": "Fees are per student for the full 8-week level.",
  "ctaTitle": "Book a free demo class",
  "ctaText": "Scan to see the full syllabus, or send a WhatsApp message to ask about batch timings.",
  "labels": ["WhatsApp / Call", "Website"],
  "foot": "Live online AI classes",
},
"hi": {
  "lang": "hi", "font": "Mukta", "qr": "../qr-hi.svg", "url": "learn.themanishchauhan.in/hi",
  "top": "पेरेंट्स के लिए · कृपया घर ले जाएँ",
  "fields": ["बच्चे का नाम", "कक्षा", "स्कूल", "तारीख़"],
  "eyebrow": "फ़्री AI वर्कशॉप · कक्षा 6–8",
  "title": "आज की AI वर्कशॉप में आपके बच्चे ने ये सब किया।",
  "intro": "दो घंटे का गेम, ड्रॉइंग, AI को सिखाना और अच्छे सवाल पूछना। किसी भी बच्चे ने किसी चैटबॉट में लॉगिन नहीं किया: प्रोजेक्टर पर सिर्फ़ टीचर ने टाइप किया।",
  "did": [["पहचाना", "“AI है या नहीं?” गेम खेला और YouTube, Maps और फ़ेस अनलॉक में छिपा AI ढूँढा।"],
          ["ड्रॉ किया", "20 सेकंड में ड्रॉइंग बनाई और देखा कि AI लाइव कैसे अंदाज़ा लगाता है।"],
          ["सिखाया", "टीम में मिलकर कंप्यूटर को रॉक, पेपर, सिज़र्स के हाथ के इशारे पहचानना सिखाया।"],
          ["पूछा", "AI से साफ़ सवाल पूछना सीखा, और देखा कि AI पूरे भरोसे से भी गलत हो सकता है।"],
          ["पकड़ा", "AI से बनी तस्वीर पहचानने के निशान देखे: उंगलियाँ, लिखावट, परछाई।"],
          ["वादा किया", "AI प्लेज ली: AI से सीखेंगे, बनाएँगे और मदद करेंगे, और हमेशा सेफ़, ईमानदार और अच्छे रहेंगे।"]],
  "homeTitle": "घर पर साथ में करें (10 मिनट)",
  "home": ["बच्चे से पूछें: “AI क्या है?” और “तुमने कंप्यूटर को रॉक, पेपर, सिज़र्स कैसे सिखाया?”",
           "quickdraw.withgoogle.com पर साथ में Quick Draw खेलें। कोई साइन-अप नहीं चाहिए।",
           "बच्चे से दाईं तरफ़ लिखे AI के 5 गोल्डन रूल सुनें।"],
  "rulesTitle": "AI के 5 गोल्डन रूल",
  "rules": ["अपना नाम, पता, फ़ोन नंबर या फ़ोटो AI को कभी न दें",
            "ज़रूरी बात पर भरोसा करने से पहले उसे चेक करें",
            "AI से सीखें और प्रैक्टिस करें, होमवर्क कॉपी न करें",
            "कोई नया AI ऐप चलाने से पहले पेरेंट्स या टीचर से पूछें",
            "अच्छे रहें: किसी की फ़ेक फ़ोटो या बुरी चीज़ें न बनाएँ"],
  "nextTitle": "क्या आप चाहते हैं कि बच्चा आगे सीखे?",
  "nextIntro": "Google Meet पर लाइव ऑनलाइन AI क्लास, 10–15 बच्चों के छोटे बैच में। बेसिक से एडवांस तक तीन लेवल। हर लेवल 8 हफ़्ते का है, हर शनिवार और रविवार 1 घंटे की क्लास, और आख़िर में प्रोजेक्ट शोकेस।",
  "head": ["लेवल", "बच्चे क्या करते हैं", "कक्षा 6–8", "कक्षा 9–12"],
  "levels": [["लेवल 1 · बेसिक", "AI को समझना, सुरक्षित इस्तेमाल, पहला गेम"],
             ["लेवल 2 · बिल्डर", "गेम, चैटबॉट, वेबसाइट और ऐप बनाना"],
             ["लेवल 3 · एडवांस", "Python के साथ असली कोडिंग और AI प्रोजेक्ट"]],
  "courses": "कक्षा 6–8: Make with AI  ·  कक्षा 9–12: Build and Study with AI",
  "feesNote": "फ़ीस हर बच्चे के लिए पूरे 8 हफ़्ते के लेवल की है।",
  "ctaTitle": "फ़्री डेमो क्लास बुक करें",
  "ctaText": "पूरा सिलेबस देखने के लिए स्कैन करें, या बैच टाइमिंग पूछने के लिए WhatsApp करें।",
  "labels": ["WhatsApp / कॉल", "वेबसाइट"],
  "foot": "लाइव ऑनलाइन AI क्लास",
},
}

SHEET_CSS = """
.page { padding: 10mm 14mm 8mm; page-break-after: auto; }
.fields { display:grid; grid-template-columns:1.6fr .7fr 1.6fr .9fr; gap:4mm; margin-top:3mm; font-size:8.5pt; color:var(--muted); }
.fields div { border-bottom:1px solid #999; padding-bottom:1mm; height:8mm; display:flex; align-items:flex-end; }
h1.d { font-size:21pt; margin-top:1.5mm; }
.hi h1.d { font-size:21pt; }
.intro { font-size:10pt; color:#444; margin-top:2.5mm; }
.did { display:grid; grid-template-columns:repeat(3,1fr); gap:2.5mm; margin-top:3mm; }
.did .card { padding:2.6mm 3.5mm; }
.did h3 { font-size:11.5pt; display:flex; align-items:center; gap:2mm; }
.did h3 i { font-style:normal; width:5.5mm; height:5.5mm; border-radius:50%; background:var(--accent); color:#fff; font-size:8pt; display:grid; place-items:center; font-family:Inter,sans-serif; }
.did p { font-size:8.4pt; color:#444; margin-top:1mm; line-height:1.4; }
.homeRow { display:grid; grid-template-columns:1fr 1fr; gap:2.5mm; margin-top:2.5mm; }
.homeRow h3 { font-size:11.5pt; margin-bottom:1.5mm; }
.homeRow ol { padding-left:4.5mm; display:grid; gap:.6mm; font-size:8.5pt; color:#333; line-height:1.4; }
.rules { background:var(--ink); color:#fff; border-color:var(--ink); }
.rules li::marker { color:var(--accent); font-weight:800; }
.rules ol { color:#e8e4dd; }
.next { margin-top:3.5mm; }
.next h2.d { font-size:16pt; margin:0; }
.next .sub { font-size:9pt; color:#444; margin-top:1.5mm; }
.next table { margin-top:2.5mm; }
.next th { padding:2mm 3.5mm; }
.next td { padding:1.6mm 3.5mm; font-size:9pt; }
.next td.fee { font-size:11pt; }
.next .note { margin-top:1.5mm; font-size:8.3pt; }
.offerRow { margin-top:2.5mm; margin-bottom:3mm; }
.cta { margin-top:auto; background:var(--ink); color:#fff; border-radius:12px; padding:4mm 6mm; display:grid; grid-template-columns:1fr auto auto; gap:6mm; align-items:center; }
.cta h3 { font-size:15pt; }
.cta p { color:#cfcac2; font-size:8.8pt; margin-top:1mm; }
.cta dt { color:var(--accent); font-weight:600; font-size:7.5pt; text-transform:uppercase; letter-spacing:.08em; margin-top:2mm; }
.hi .cta dt { text-transform:none; letter-spacing:0; font-size:8.5pt; }
.cta dt:first-child { margin-top:0; }
.cta dd { font-size:10pt; font-weight:600; }
.cta img { width:23mm; height:23mm; background:#fff; padding:1.5mm; border-radius:6px; }
.foot { padding-top:3mm; margin-top:3mm; }
.hi .intro { font-size:10.5pt; }
.hi .did p { font-size:9.4pt; }
.hi .did h3, .hi .homeRow h3 { font-size:12.5pt; }
.hi .homeRow ol { font-size:9.8pt; }
.hi .next .sub { font-size:10pt; }
.hi .next td { font-size:10pt; padding:1.7mm 3.5mm; }
.hi .next .note { font-size:9pt; }
.hi .cta p { font-size:9.8pt; }
"""

def e(s): return html.escape(s)

def build(lang):
    t = T[lang]
    font = "Inter:wght@400;600;700;800" if lang == "en" else "Mukta:wght@400;600;700;800"
    fields = "".join(f"<div>{e(f)}:</div>" for f in t["fields"])
    did = "".join(f'<div class="card"><h3 class="d"><i>{i+1}</i>{e(a)}</h3><p>{e(b)}</p></div>' for i, (a, b) in enumerate(t["did"]))
    home = "".join(f"<li>{e(x)}</li>" for x in t["home"])
    rules = "".join(f"<li>{e(x)}</li>" for x in t["rules"])
    head = "".join(f"<th>{e(h)}</th>" for h in t["head"])
    rows = "".join(f'<tr><td class="lv">{e(n)}</td><td>{e(d)}</td><td class="fee">{FEES_JR[i]}</td><td class="fee">{FEES_SR[i]}</td></tr>'
                   for i, (n, d) in enumerate(t["levels"]))
    lab = t["labels"]
    body = f'''<section class="page">
  <div class="top"><div class="logo"><b>M</b><span>manish</span></div><div>{e(t["top"])}</div></div>
  <div class="fields">{fields}</div>
  <p class="eyebrow" style="margin-top:4mm">{e(t["eyebrow"])}</p>
  <h1 class="d">{e(t["title"])}</h1>
  <p class="intro">{e(t["intro"])}</p>
  <div class="did">{did}</div>
  <div class="homeRow">
    <div class="card"><h3 class="d">{e(t["homeTitle"])}</h3><ol>{home}</ol></div>
    <div class="card rules"><h3 class="d">{e(t["rulesTitle"])}</h3><ol>{rules}</ol></div>
  </div>
  <div class="next">
    <h2 class="d">{e(t["nextTitle"])}</h2>
    <p class="sub">{e(t["nextIntro"])}</p>
    <p class="sub" style="font-weight:600;color:var(--ink)">{e(t["courses"])}</p>
    <table><tr>{head}</tr>{rows}</table>
    <p class="note">{e(t["feesNote"])}</p>
  </div>
  <p class="offerRow"><span class="offer">{e(B[lang]["offer"])}</span></p>
  <div class="cta"><div><h3 class="d">{e(t["ctaTitle"])}</h3><p>{e(t["ctaText"])}</p></div>
    <dl><dt>{e(lab[0])}</dt><dd>{PHONE}</dd><dt>{e(lab[1])}</dt><dd>{e(t["url"])}</dd></dl>
    <img src="{t["qr"]}" alt="QR"></div>
  <div class="foot"><span>Manish Chauhan · {e(t["url"])}</span><span>{e(t["foot"])}</span></div>
</section>'''
    doc = f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>AI Workshop, note for parents</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family={font}&display=swap" rel="stylesheet">
<style>:root{{--body:"{t["font"]}"}} body{{font-family:var(--body),Arial,sans-serif}} {CSS} {SHEET_CSS}</style></head>
<body class="{lang}">{body}</body></html>'''
    (OUT / f"parents-{lang}.html").write_text(doc, encoding="utf-8")

for l in ("en", "hi"):
    build(l)
print("built parents sheets")
