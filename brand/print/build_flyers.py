"""Two separate A4 colour flyers, each in English and Hindi:
  business  -> Software & automation for clinics, shops, PGs and cafés (themanishchauhan.in)
  classes   -> AI classes for school students, classes 6-12 (learn.themanishchauhan.in)

Brand: orange #ff5a1f, black #111, off-white #f4f1ec, Bricolage Grotesque + Inter (Mukta for Hindi).
QR codes are the existing SVGs in ./combined (destinations unchanged). Everything is vector, so it prints sharp
at any DPI. Two outputs per flyer: plain A4 (office / digital print) and A4 + 3 mm bleed (print shop).
No fees, no photos, no certificates (see brand/ai-classes)."""
import html, pathlib, sys

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE.parent / "ai-classes"))
from build import PHONE, EMAIL, LOGO  # noqa: E402
from build_flyer import T as F  # noqa: E402  (testimonial, word for word)

OUT = HERE / "flyers"
QR = HERE / "combined"

T = {
"en": {
  "business": {
    "side": "Software and automation for local businesses",
    "eyebrow": "For clinics · labs · shops · PGs · hostels · cafés",
    "title": ["Stop managing your", "business on ", "paper."],
    "sub": "Let technology handle the repetitive work.",
    "products": [["ClinicOs", "Clinic and lab management", "Appointments, patient records, prescriptions, billing and reminders"],
                 ["RentCorp", "Rent, PG and hostel management", "Tenants, rooms, monthly dues, receipts and rent reminders"],
                 ["CafeCorp", "Café and restaurant management", "GST billing, table and QR ordering, stock and daily sales"],
                 ["Automation", "Your daily work, done for you", "Websites, WhatsApp, Google and Excel automation"]],
    "points": [["1–2 days", "Ready to use"], ["Old data", "Moved in for you"], ["Same day", "WhatsApp support"]],
    "ctaEyebrow": "Get started", "cta": "Free demo at your shop or clinic",
    "scan": "Scan for products and pricing", "url": "themanishchauhan.in", "qr": "qr-software-en.svg",
  },
  "classes": {
    "side": "AI classes for school students",
    "eyebrow": "For parents of students in classes 6–12",
    "title": ["Already teaching", "kids in the USA."],
    "title2": "Now bringing practical AI learning to India.",
    "facts": [["Live online", "on Google Meet"], ["Every weekend", "Saturday and Sunday"], ["Small batches", "10–15 students"]],
    "courses": [["Classes 6–8", "Make with AI", "Games, chatbots and coding"],
                ["Classes 9–12", "Build and Study with AI", "AI-assisted study, websites and Python"]],
    "offerTag": "Launch offer", "offer": "No admission fee for the first 51 students.",
    "ctaEyebrow": "Get started", "cta": "Book a free demo class",
    "scan": "Scan for the full syllabus", "url": "learn.themanishchauhan.in", "qr": "qr-learn-en.svg",
  },
  "call": "Call or WhatsApp",
},
"hi": {
  "business": {
    "side": "छोटे बिज़नेस के लिए सॉफ़्टवेयर और ऑटोमेशन",
    "eyebrow": "क्लिनिक · लैब · दुकान · PG · हॉस्टल · कैफ़े के लिए",
    "title": ["अब रजिस्टर और", "कागज़ों से ", "छुट्टी।"],
    "sub": "रोज़ के दोहराए जाने वाले काम अब सॉफ़्टवेयर करेगा।",
    "products": [["ClinicOs", "क्लिनिक और लैब के लिए", "अपॉइंटमेंट, मरीज़ों का रिकॉर्ड, पर्ची, बिल और रिमाइंडर"],
                 ["RentCorp", "किराया, PG और हॉस्टल के लिए", "किरायेदार, कमरे, हर महीने का किराया, रसीद और रिमाइंडर"],
                 ["CafeCorp", "कैफ़े और रेस्टोरेंट के लिए", "GST बिल, टेबल और QR से ऑर्डर, स्टॉक और रोज़ की बिक्री"],
                 ["Automation", "रोज़ का काम, अपने-आप", "वेबसाइट, WhatsApp, Google और Excel ऑटोमेशन"]],
    "points": [["1–2 दिन", "में तैयार"], ["पुराना डेटा", "नए सिस्टम में डालकर"], ["उसी दिन", "WhatsApp पर मदद"]],
    "ctaEyebrow": "शुरुआत करें", "cta": "आपकी दुकान या क्लिनिक पर फ़्री डेमो",
    "scan": "स्कैन करें: प्रोडक्ट और कीमत", "url": "themanishchauhan.in", "qr": "qr-software-hi.svg",
  },
  "classes": {
    "side": "स्कूल के बच्चों के लिए AI क्लास",
    "eyebrow": "कक्षा 6 से 12 के बच्चों के माता-पिता के लिए",
    "title": ["अमेरिका के बच्चों को", "पढ़ा रहे हैं।"],
    "title2": "अब भारत के बच्चों के लिए प्रैक्टिकल AI की पढ़ाई।",
    "facts": [["लाइव ऑनलाइन", "Google Meet पर"], ["हर वीकेंड", "शनिवार और रविवार"], ["छोटे बैच", "10–15 बच्चे"]],
    "courses": [["कक्षा 6–8", "Make with AI", "गेम, चैटबॉट और कोडिंग"],
                ["कक्षा 9–12", "Build and Study with AI", "AI की मदद से पढ़ाई, वेबसाइट और Python"]],
    "offerTag": "शुरुआती ऑफ़र", "offer": "पहले 51 बच्चों की कोई एडमिशन फ़ीस नहीं।",
    "ctaEyebrow": "शुरुआत करें", "cta": "फ़्री डेमो क्लास बुक करें",
    "scan": "स्कैन करें: पूरा सिलेबस", "url": "learn.themanishchauhan.in/hi", "qr": "qr-learn-hi.svg",
  },
  "call": "कॉल या WhatsApp करें",
},
}

CSS = """
@page { size: var(--w) var(--h); margin: 0; }
:root { --o: #ff5a1f; --ink: #111; --mute: #55524c; --paper: #f4f1ec; --rule: #d8d4cc; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: #fff; color: var(--ink); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: "Inter", Arial, sans-serif; line-height: 1.35; }
.hi body, body.hi { font-family: "Mukta", "Inter", sans-serif; }
.sheet { width: var(--w); height: var(--h); position: relative; overflow: hidden; display: flex; flex-direction: column; }
.d, .lat { font-family: "Bricolage Grotesque", "Inter", sans-serif; }
.top { padding: calc(var(--b) + 13mm) calc(var(--b) + 15mm) 0; flex: 1; display: flex; flex-direction: column; }
.head { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 2.6mm; font: 800 14pt "Bricolage Grotesque", sans-serif; letter-spacing: -.01em; }
.logo .mark { width: 9mm; height: 9mm; display: block; }
.head .side { font-size: 9.5pt; color: var(--mute); }
.hi .head .side { font-size: 11pt; }
.eyebrow { margin-top: 17mm; color: var(--o); font-weight: 700; font-size: 10pt; letter-spacing: .12em; text-transform: uppercase; }
.hi .eyebrow { letter-spacing: 0; text-transform: none; font-size: 13pt; font-weight: 600; }
h1 { margin-top: 4mm; font: 800 50pt/0.98 "Bricolage Grotesque", sans-serif; letter-spacing: -.035em; }
.hi h1 { font: 800 46pt/1.12 "Mukta", sans-serif; letter-spacing: -.01em; }
h1 em { font-style: normal; color: var(--o); }
.sub { margin-top: 5mm; font-size: 17pt; line-height: 1.3; color: var(--ink); font-weight: 500; max-width: 150mm; }
.hi .sub { font-size: 19pt; }
.sub.o { color: var(--o); font: 800 23pt/1.12 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; max-width: 165mm; }
.hi .sub.o { font: 700 24pt/1.25 "Mukta", sans-serif; letter-spacing: 0; }

.grid { margin-top: 11mm; display: grid; grid-template-columns: 1fr 1fr; column-gap: 10mm; border-top: 1.4pt solid var(--ink); }
.cell { padding: 4.6mm 0 4.8mm; border-bottom: .6pt solid var(--rule); }
.cell strong { display: block; font: 800 19pt/1.05 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; }
.cell em { display: block; font-style: normal; color: var(--o); font-weight: 700; font-size: 10.5pt; margin-top: 1.2mm; }
.hi .cell em { font-size: 12.5pt; font-weight: 600; }
.cell p { font-size: 10.5pt; color: var(--mute); margin-top: 1.2mm; line-height: 1.35; }
.hi .cell p { font-size: 12pt; line-height: 1.4; }

.points { margin-top: auto; margin-bottom: 11mm; display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 8mm; }
.points div { border-top: 2.4pt solid var(--o); padding-top: 3mm; }
.points b { display: block; font: 800 20pt/1.05 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; }
.hi .points b { font: 800 21pt/1.15 "Mukta", sans-serif; letter-spacing: 0; }
.points span { display: block; font-size: 11pt; color: var(--mute); margin-top: 1mm; }
.hi .points span { font-size: 13pt; }

.facts { margin-top: 9mm; display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 8mm; }
.facts div { border-top: 2.4pt solid var(--o); padding-top: 2.6mm; }
.facts b { display: block; font-weight: 700; font-size: 13pt; }
.hi .facts b { font-size: 15pt; }
.facts span { display: block; font-size: 11pt; color: var(--mute); margin-top: .6mm; }
.hi .facts span { font-size: 13pt; }
.courses { margin-top: 10mm; display: grid; grid-template-columns: 1fr 1fr; column-gap: 10mm; border-top: 1.4pt solid var(--ink); }
.courses .cell { border-bottom: 0; padding-top: 4.6mm; }
.courses small { display: block; font-weight: 700; font-size: 10.5pt; color: var(--o); }
.hi .courses small { font-size: 13pt; font-weight: 600; }
.courses .cell strong { margin-top: 1mm; font-size: 21pt; }
.courses .cell p { font-size: 12pt; margin-top: 1.6mm; }
.hi .courses .cell p { font-size: 13.5pt; }
.offer { margin-top: 6mm; display: flex; align-items: center; gap: 4mm; font-weight: 700; font-size: 14pt; }
.hi .offer { font-size: 16pt; }
.offer span { flex: none; background: var(--o); color: #fff; font-size: 9pt; letter-spacing: .1em; text-transform: uppercase; padding: 1.4mm 3mm; border-radius: 1.2mm; }
.hi .offer span { font-size: 11.5pt; letter-spacing: 0; text-transform: none; padding: .8mm 3mm; }
.quote { margin-top: auto; margin-bottom: 10mm; display: grid; grid-template-columns: 12mm 1fr; }
.quote i { font: 800 46pt/0.8 "Bricolage Grotesque", sans-serif; color: var(--o); font-style: normal; }
.quote p { font-size: 13pt; line-height: 1.4; }
.hi .quote p { font-size: 14pt; line-height: 1.5; }
.quote small { display: block; margin-top: 2mm; font-size: 10pt; color: var(--mute); }
.hi .quote small { font-size: 11.5pt; }
.quote small b { color: var(--ink); }

.cta { background: var(--paper); padding: 11mm calc(var(--b) + 15mm) calc(var(--b) + 11mm); display: grid; grid-template-columns: 1fr 46mm; column-gap: 10mm; align-items: center; }
.cta .eb { color: var(--o); font-weight: 700; font-size: 10pt; letter-spacing: .12em; text-transform: uppercase; }
.hi .cta .eb { letter-spacing: 0; text-transform: none; font-size: 13pt; font-weight: 600; }
.cta h2 { margin-top: 1.5mm; font: 800 25pt/1.05 "Bricolage Grotesque", sans-serif; letter-spacing: -.025em; }
.hi .cta h2 { font: 800 25pt/1.2 "Mukta", sans-serif; letter-spacing: 0; }
.cta .call { margin-top: 6mm; font-size: 11pt; font-weight: 600; color: var(--mute); }
.hi .cta .call { font-size: 13pt; }
.cta .phone { font: 800 36pt/1 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; margin-top: 1mm; white-space: nowrap; }
.cta .web { margin-top: 4mm; font-size: 11pt; font-weight: 600; }
.cta .web span { color: var(--mute); font-weight: 400; }
.qr { text-align: center; }
.qr img { display: block; width: 46mm; height: 46mm; background: #fff; padding: 3mm; border-radius: 2mm; }
.qr p { margin-top: 2.2mm; font-size: 9.5pt; font-weight: 600; line-height: 1.25; }
.hi .qr p { font-size: 11.5pt; }
"""

def e(s): return html.escape(s)

def title(lines):
    """['a', 'b ', 'c'] -> a<br>b <em>c</em> (last word in orange); two lines -> a<br>b"""
    if len(lines) == 3:
        return f"{e(lines[0])}<br>{e(lines[1])}<em>{e(lines[2])}</em>"
    return "<br>".join(e(x) for x in lines)

def page(lang, kind, bleed):
    t, c = T[lang][kind], T[lang]
    if kind == "business":
        cells = "".join(f'<div class="cell"><strong class="lat">{e(n)}</strong><em>{e(w)}</em><p>{e(d)}</p></div>'
                        for n, w, d in t["products"])
        pts = "".join(f"<div><b>{e(a)}</b><span>{e(b)}</span></div>" for a, b in t["points"])
        body = f'''<h1>{title(t["title"])}</h1><p class="sub">{e(t["sub"])}</p>
          <div class="grid">{cells}</div><div class="points">{pts}</div>'''
    else:
        q, qn, qr = F[lang]["quotes"][0]
        facts = "".join(f"<div><b>{e(a)}</b><span>{e(b)}</span></div>" for a, b in t["facts"])
        courses = "".join(f'<div class="cell"><small>{e(a)}</small><strong class="lat">{e(n)}</strong><p>{e(d)}</p></div>'
                          for a, n, d in t["courses"])
        body = f'''<h1>{title(t["title"])}</h1><p class="sub o">{e(t["title2"])}</p>
          <div class="facts">{facts}</div><div class="courses">{courses}</div>
          <p class="offer"><span>{e(t["offerTag"])}</span>{e(t["offer"])}</p>
          <div class="quote"><i>“</i><div><p>{e(q)}</p><small><b>{e(qn)}</b> · {e(qr)}</small></div></div>'''
    b = 3 if bleed else 0
    font = "Inter:wght@400;500;600;700" if lang == "en" else "Mukta:wght@400;500;600;700;800&family=Inter:wght@400;600;700"
    return f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>Manish Chauhan flyer</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family={font}&display=swap" rel="stylesheet">
<style>:root{{--b:{b}mm;--w:{210 + 2 * b}mm;--h:{297 + 2 * b}mm}} {CSS}</style></head><body class="{lang}"><div class="sheet">
<div class="top"><div class="head"><div class="logo">{LOGO}<span>Manish Chauhan</span></div><div class="side">{e(t["side"])}</div></div>
  <p class="eyebrow">{e(t["eyebrow"])}</p>{body}</div>
<div class="cta"><div><p class="eb">{e(t["ctaEyebrow"])}</p><h2>{e(t["cta"])}</h2>
  <p class="call">{e(c["call"])}</p><p class="phone">{PHONE}</p>
  <p class="web">{e(t["url"])} <span>· {EMAIL}</span></p></div>
  <div class="qr"><img src="../combined/{t["qr"]}" alt="QR code"><p>{e(t["scan"])}</p></div></div>
</div></body></html>'''

if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    langs = sys.argv[1:] or ["en", "hi"]
    for lang in langs:
        for kind in ("business", "classes"):
            for bleed in (False, True):
                name = f"{kind}-{lang}{'-bleed' if bleed else ''}.html"
                (OUT / name).write_text(page(lang, kind, bleed), encoding="utf-8")
    print("built", langs)
