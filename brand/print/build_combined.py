"""One A4 black-and-white sheet that advertises both: business software on top, AI classes for students below.
Built for cheap B&W printing and pasting. Business text follows leaflet-A5-english-hindi.pdf; AI classes text,
offer, phone and email come from ../ai-classes (build.py, build_flyer.py). No fees, no photos, no certificates."""
import html, pathlib, sys

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE.parent / "ai-classes"))
from build import T as B, PHONE, EMAIL, LOGO  # noqa: E402  (build.py rebuilds the brochure on import)
from build_flyer import T as F  # noqa: E402

OUT = HERE / "combined"

T = {
"en": {
  "font": "Inter", "brand": "Software for businesses · AI classes for students",
  "bizTag": "For clinics, shops, PGs and cafés",
  "bizTitle": "Stop running your business on paper.",
  "products": [["ClinicOs", "Clinics & labs", "Appointments, patient records, prescriptions, billing, reminders"],
               ["RentCorp", "Rent, PG & hostels", "Tenants, rooms, monthly dues, receipts, rent reminders"],
               ["CafeCorp", "Cafés & restaurants", "GST billing, table & QR ordering, stock, daily sales"],
               ["Automation", "Websites & Excel", "Mobile websites, Google & WhatsApp setup, Excel automation"]],
  "hook": "Doing the same work every day in a register or Excel? I'll automate it.",
  "points": ["Ready in 1–2 days", "Your old data moved in", "Same-day WhatsApp support"],
  "bizCta": "Free demo at your shop or clinic", "bizScan": "Scan: products & pricing",
  "bizUrl": "themanishchauhan.in", "bizQr": "qr-software-en.svg",
  "aiTag": "For school students · Classes 6–12",
  "aiCta": "Book a free demo class", "aiScan": "Scan: full syllabus",
  "aiUrl": "learn.themanishchauhan.in", "aiQr": "qr-learn-en.svg",
  "wa": "Call or WhatsApp",
},
"hi": {
  "font": "Mukta", "brand": "बिज़नेस के लिए सॉफ़्टवेयर · बच्चों के लिए AI क्लास",
  "bizTag": "क्लिनिक, दुकान, PG और कैफ़े के लिए",
  "bizTitle": "रजिस्टर और कागज़ों का झंझट ख़त्म।",
  "products": [["ClinicOs", "क्लिनिक और लैब", "अपॉइंटमेंट, मरीज़ों का रिकॉर्ड, पर्ची, बिल और रिमाइंडर"],
               ["RentCorp", "किराया, PG और हॉस्टल", "किरायेदार, कमरे, हर महीने का किराया, रसीद और रिमाइंडर"],
               ["CafeCorp", "कैफ़े और रेस्टोरेंट", "GST बिल, टेबल और QR से ऑर्डर, स्टॉक और रोज़ की बिक्री"],
               ["Automation", "वेबसाइट और Excel", "मोबाइल वेबसाइट, Google और WhatsApp सेटअप, Excel ऑटोमेशन"]],
  "hook": "रोज़ एक ही काम रजिस्टर या Excel में करते हैं? मैं उसे ऑटोमैटिक कर दूँगा।",
  "points": ["1–2 दिन में तैयार", "पुराना डेटा मैं डाल दूँगा", "उसी दिन WhatsApp पर जवाब"],
  "bizCta": "आपकी दुकान या क्लिनिक पर फ़्री डेमो", "bizScan": "स्कैन करें: प्रोडक्ट और कीमत",
  "bizUrl": "themanishchauhan.in", "bizQr": "qr-software-hi.svg",
  "aiTag": "स्कूल के बच्चों के लिए · कक्षा 6–12",
  "aiCta": "फ़्री डेमो क्लास बुक करें", "aiScan": "स्कैन करें: पूरा सिलेबस",
  "aiUrl": "learn.themanishchauhan.in/hi", "aiQr": "qr-learn-hi.svg",
  "wa": "कॉल या WhatsApp",
},
}

CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { color: #111; line-height: 1.35; background: #fff; }
body { font-family: var(--body), Arial, sans-serif; }
.page { width: 210mm; height: 297mm; padding: 10mm 11mm 9mm; display: flex; flex-direction: column; gap: 4.5mm; overflow: hidden; }
.d { font-family: "Bricolage Grotesque", var(--body), sans-serif; font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; }
.hi .d { font-family: var(--body), sans-serif; letter-spacing: 0; line-height: 1.2; }
.head { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 9px; }
.logo .mark { width: 34px; height: 34px; flex: none; display: block; }
.logo strong { display: block; font: 800 15pt "Bricolage Grotesque", sans-serif; }
.logo span { font-size: 9pt; color: #333; }
.hi .logo span { font-size: 10pt; }
.phoneTop { text-align: right; }
.phoneTop small { display: block; font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
.hi .phoneTop small { text-transform: none; letter-spacing: 0; font-size: 10pt; }
.phoneTop strong { font: 800 20pt "Bricolage Grotesque", sans-serif; letter-spacing: -0.01em; }
.half { flex: 1 1 auto; border: 2.5px solid #111; border-radius: 14px; padding: 5.5mm 6mm 4.5mm; display: grid; grid-template-columns: 1fr 46mm; gap: 5mm; position: relative; }
.tag { position: absolute; top: -3.6mm; left: 5mm; background: #fff; color: #111; border: 2px solid #111; font-weight: 800; font-size: 10pt; padding: 1mm 4mm; border-radius: 99px; }
.hi .tag { font-size: 11pt; padding: .5mm 4mm; }
h1 { font-size: 26pt; }
.hi h1 { font-size: 26pt; }
.sub { font-size: 11.5pt; margin-top: 2mm; color: #222; }
.hi .sub { font-size: 13pt; }
.prods { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm; margin-top: 4mm; }
.prod { border: 1.2px solid #111; border-radius: 9px; padding: 3mm 3.5mm; }
.prod strong { display: block; font: 800 13.5pt "Bricolage Grotesque", sans-serif; }
.prod em { display: block; font-style: normal; font-weight: 700; font-size: 9pt; margin-top: .3mm; text-transform: uppercase; letter-spacing: .04em; }
.hi .prod em { text-transform: none; letter-spacing: 0; font-size: 10.5pt; }
.prod p { font-size: 10pt; color: #222; margin-top: 1mm; line-height: 1.3; }
.hi .prod p { font-size: 11pt; }
.hook { margin-top: 3.5mm; border: 2.5px solid #111; border-radius: 9px; padding: 2.6mm 4mm; font-weight: 800; font-size: 12.5pt; line-height: 1.25; }
.hi .hook { font-size: 13.5pt; }
.points { display: flex; flex-wrap: wrap; gap: 1.5mm 4mm; margin-top: 3mm; font-weight: 700; font-size: 10.5pt; }
.hi .points { font-size: 12pt; }
.points span::before { content: "✓ "; }
.courses { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm; margin-top: 4.5mm; }
.course { border: 1.2px solid #111; border-radius: 9px; padding: 3mm 3.5mm; }
.course small { font-weight: 800; font-size: 10pt; }
.hi .course small { font-size: 11pt; }
.course strong { display: block; font: 800 13pt "Bricolage Grotesque", sans-serif; margin-top: .5mm; }
.course p { font-size: 10pt; color: #222; margin-top: 1mm; line-height: 1.3; }
.hi .course p { font-size: 11pt; }
.offer { margin-top: 4mm; border: 2.5px solid #111; border-radius: 9px; padding: 2.8mm 4mm; font-weight: 800; font-size: 12.5pt; }
.hi .offer { font-size: 13.5pt; }
.quote { margin-top: 3mm; font-size: 10pt; font-style: italic; color: #222; }
.hi .quote { font-size: 11pt; font-style: normal; }
.quote b { font-style: normal; }
.side { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-left: 1.2px dashed #111; padding-left: 5mm; }
.side .cta { font-size: 15pt; line-height: 1.15; }
.hi .side .cta { font-size: 16pt; }
.side img { width: 38mm; height: 38mm; margin: 3mm 0 1.5mm; }
.side .scan { font-size: 9.5pt; font-weight: 700; }
.hi .side .scan { font-size: 10.5pt; }
.side .url { font-size: 8pt; margin-top: 1mm; white-space: nowrap; }
.foot { display: flex; justify-content: space-between; font-size: 9pt; color: #333; }
"""

def e(s): return html.escape(s)

def build(lang):
    t, b, f = T[lang], B[lang], F[lang]
    prods = "".join(f'<div class="prod"><strong>{e(n)}</strong><em>{e(w)}</em><p>{e(d)}</p></div>' for n, w, d in t["products"])
    points = "".join(f"<span>{e(x)}</span>" for x in t["points"])
    courses = "".join(f'<div class="course"><small>{e(c)}</small><strong>{e(n)}</strong><p>{e(d)}</p></div>' for c, n, d in f["courses"])
    q, qn, qr = f["quotes"][0]
    font = "Inter:wght@400;600;700;800" if lang == "en" else "Mukta:wght@400;600;700;800"
    doc = f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>Manish Chauhan: software and AI classes</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family={font}&display=swap" rel="stylesheet">
<style>:root{{--body:"{t["font"]}"}} {CSS}</style></head><body class="{lang}"><section class="page">
  <div class="head"><div class="logo">{LOGO}<div><strong>Manish Chauhan</strong><span>{e(t["brand"])}</span></div></div>
    <div class="phoneTop"><small>{e(t["wa"])}</small><strong>{PHONE}</strong></div></div>

  <div class="half"><span class="tag">{e(t["bizTag"])}</span>
    <div><h1 class="d">{e(t["bizTitle"])}</h1><div class="prods">{prods}</div><p class="hook">{e(t["hook"])}</p><div class="points">{points}</div></div>
    <div class="side"><p class="cta d">{e(t["bizCta"])}</p><img src="{t["bizQr"]}" alt="QR"><p class="scan">{e(t["bizScan"])}</p><p class="url">{e(t["bizUrl"])}</p></div>
  </div>

  <div class="half"><span class="tag">{e(t["aiTag"])}</span>
    <div><h1 class="d">{e(f["usa"])}</h1><p class="sub">{e(f["sub"])}</p><div class="courses">{courses}</div>
      <p class="offer">{e(b["offer"])}</p>
      <p class="quote">“{e(q)}” <b>— {e(qn)}, {e(qr)}</b></p></div>
    <div class="side"><p class="cta d">{e(t["aiCta"])}</p><img src="{t["aiQr"]}" alt="QR"><p class="scan">{e(t["aiScan"])}</p><p class="url">{e(t["aiUrl"])}</p></div>
  </div>

  <div class="foot"><span>{EMAIL}</span><span>themanishchauhan.in · learn.themanishchauhan.in</span></div>
</section></body></html>'''
    (OUT / f"combined-{lang}.html").write_text(doc, encoding="utf-8")

for lg in ("en", "hi"):
    build(lg)
print("built combined sheet")
