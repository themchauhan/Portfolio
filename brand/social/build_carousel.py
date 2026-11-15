"""Instagram carousel for the AI classes: 6 portrait slides, 1080×1350 (4:5).
Writes carousel/carousel.html; render each .slide to PNG with render_carousel.js (headless Chrome).
Wording comes from the approved flyer, syllabus and Learn site. No fees, no photos, no certificates, no QR
(people view it on the phone they would scan with)."""
import html, pathlib, sys

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE.parent / "ai-classes"))
from build import PHONE, LOGO  # noqa: E402
from build_flyer import T as F  # noqa: E402  (DK's testimonial, word for word)

OUT = HERE / "carousel"
URL = "learn.themanishchauhan.in"

def e(s): return html.escape(s)

TEXT = {
"en": {
  "cover": ["For parents · Classes 6–12", "Already teaching kids in the USA.", "Now bringing practical AI learning to India.", "Swipe"],
  "how": ["How it works", "Weekend AI classes, live from home.",
          [["Live online", "on Google Meet"], ["Every weekend", "Saturday and Sunday"], ["Small batches", "10–15 students"], ["No coding", "needed to start"]]],
  "jr": ["Classes 6–8", "Make with AI", "Games, chatbots and first steps in coding.",
         ["What AI is, how it learns, and how to use it safely", "Scratch games controlled by their own AI model", "First real code in Python and HTML"],
         "a game and a chatbot they built themselves."],
  "sr": ["Classes 9–12", "Build and Study<br>with AI", "AI-assisted study, websites and Python.",
         ["Use AI to study better for boards, JEE and NEET, honestly", "Build and publish a real website and web app", "Python, data and machine learning through projects"],
         "a live website or app and a project they can show colleges."],
  "finish": "They finish with",
  "quote": ["From a parent in the USA", ""],
  "cta": ["Launch offer", "No admission fee for the first 51 students.", "Book a free demo class", "Link in bio", URL,
          "3 levels · 8 weeks each · a project showcase for parents at the end of every level"],
},
"hi": {
  "cover": ["माता-पिता के लिए · कक्षा 6–12", "अमेरिका के बच्चों को पढ़ा रहे हैं।", "अब भारत के बच्चों के लिए प्रैक्टिकल AI की पढ़ाई।", "आगे देखें"],
  "how": ["क्लास कैसे होती है", "घर बैठे लाइव AI क्लास।",
          [["लाइव ऑनलाइन", "Google Meet पर"], ["हर वीकेंड", "शनिवार और रविवार"], ["छोटे बैच", "10–15 बच्चे"], ["कोडिंग ज़रूरी नहीं", "शुरू करने के लिए"]]],
  "jr": ["कक्षा 6–8", "Make with AI", "गेम, चैटबॉट और कोडिंग की शुरुआत।",
         ["AI क्या है, कैसे सीखता है, और इसका सुरक्षित इस्तेमाल", "अपने AI मॉडल से चलने वाले Scratch गेम", "Python और HTML में पहला असली कोड"],
         "अपना बनाया हुआ एक गेम और एक चैटबॉट।"],
  "sr": ["कक्षा 9–12", "Build and Study<br>with AI", "AI की मदद से पढ़ाई, वेबसाइट और Python।",
         ["बोर्ड, JEE और NEET के लिए AI से बेहतर और ईमानदारी से पढ़ाई", "असली वेबसाइट और वेब ऐप बनाकर ऑनलाइन पब्लिश करना", "प्रोजेक्ट के ज़रिए Python, डेटा और मशीन लर्निंग"],
         "एक लाइव वेबसाइट या ऐप, और एक प्रोजेक्ट जो कॉलेज को दिखा सकें।"],
  "finish": "आख़िर में बच्चे के पास:",
  "quote": ["USA के एक पेरेंट की राय", F["hi"]["quoteNote"]],
  "cta": ["शुरुआती ऑफ़र", "पहले 51 बच्चों की कोई एडमिशन फ़ीस नहीं।", "फ़्री डेमो क्लास बुक करें", "बायो में लिंक", URL + "/hi",
          F["hi"]["levelsNote"]],
},
}

def slides(lang):
    t = TEXT[lang]
    q, qn, qr = F[lang]["quotes"][0]
    c, h, jr, sr, qt, ct = t["cover"], t["how"], t["jr"], t["sr"], t["quote"], t["cta"]
    facts = "".join(f"<div><b>{e(a)}</b><span>{e(b)}</span></div>" for a, b in h[2])
    def course(x):
        lis = "".join(f"<li>{e(i)}</li>" for i in x[3])
        return (f'<p class="eb">{e(x[0])}</p><h2 class="lat">{x[1]}</h2><p class="lead">{e(x[2])}</p>'
                f'<ul>{lis}</ul><p class="take"><b>{e(t["finish"])}</b> {e(x[4])}</p>')
    note = f'<p class="note">{e(qt[1])}</p>' if qt[1] else ""
    return [
        ("paper cover", f'<p class="eb">{e(c[0])}</p><h1>{e(c[1])}</h1><p class="lead o">{e(c[2])}</p><p class="swipe">{e(c[3])} <span>→</span></p>'),
        ("white", f'<p class="eb">{e(h[0])}</p><h2>{e(h[1])}</h2><div class="facts">{facts}</div>'),
        ("paper", course(jr)),
        ("paper", course(sr)),
        ("orange", f'<p class="eb">{e(qt[0])}</p><p class="mark">“</p><p class="quote">{e(q)}</p><p class="who"><b>{e(qn)}</b> · {e(qr)}</p>{note}'),
        ("ink", f'<p class="eb">{e(ct[0])}</p><h2>{e(ct[1])}</h2><div class="cta">{e(ct[2])}</div>'
                f'<p class="contact">{e(ct[3])} · {e(ct[4])}</p><p class="contact"><b>WhatsApp {PHONE}</b></p><p class="small">{e(ct[5])}</p>'),
    ]

CSS = """
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --o: #ff5a1f; --ink: #111; --paper: #f4f1ec; --mute: #5f5b55; }
body { background: #777; font-family: Inter, sans-serif; color: var(--ink); }
.slide { width: 1080px; height: 1350px; position: relative; overflow: hidden; padding: 110px 96px 0; display: flex; flex-direction: column; }
.slide + .slide { margin-top: 40px; }
.paper { background: var(--paper); }
.cover .eb { margin-top: 200px; } .cover h1 { font-size: 132px; } .cover .lead.o { font-size: 64px; margin-top: 44px; } .white { background: #fff; } .orange { background: var(--o); } .ink { background: var(--ink); color: #fff; }
.eb { font-weight: 700; font-size: 30px; letter-spacing: .14em; text-transform: uppercase; color: var(--o); }
.orange .eb { color: var(--ink); }
h1 { margin-top: 40px; font: 800 118px/0.98 "Bricolage Grotesque", sans-serif; letter-spacing: -.04em; }
h2 { margin-top: 36px; font: 800 86px/1.0 "Bricolage Grotesque", sans-serif; letter-spacing: -.035em; }
.lead { margin-top: 30px; font-size: 40px; line-height: 1.3; font-weight: 500; color: var(--mute); }
.lead.o { color: var(--o); font: 800 58px/1.1 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; }
.swipe { margin-top: auto; margin-bottom: 190px; font-weight: 700; font-size: 34px; }
.swipe span { color: var(--o); }
.facts { margin-top: 110px; display: grid; grid-template-columns: 1fr 1fr; gap: 90px 56px; }
.facts div { border-top: 7px solid var(--o); padding-top: 22px; }
.facts b { display: block; font: 800 56px/1.05 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; }
.facts span { display: block; margin-top: 12px; font-size: 34px; color: var(--mute); line-height: 1.3; }
ul { margin-top: 56px; list-style: none; border-top: 3px solid var(--ink); }
li { font-size: 36px; line-height: 1.32; padding: 26px 0 26px 50px; border-bottom: 1.5px solid #d8d4cc; position: relative; }
li::before { content: ""; position: absolute; left: 0; top: 40px; width: 20px; height: 20px; border-radius: 99px; background: var(--o); }
.take { margin-top: 44px; font-size: 36px; line-height: 1.35; }
.take b { color: var(--o); }
.mark { margin-top: 40px; font: 800 220px/0.6 "Bricolage Grotesque", sans-serif; color: #fff; height: 120px; }
.quote { font: 700 64px/1.18 "Bricolage Grotesque", sans-serif; letter-spacing: -.02em; color: #fff; }
.who { margin-top: 48px; font-size: 34px; color: var(--ink); }
.cta { margin-top: 70px; align-self: flex-start; background: var(--o); color: #fff; font: 800 58px/1 "Bricolage Grotesque", sans-serif; padding: 34px 54px; border-radius: 99px; }
.contact { margin-top: 40px; font-size: 38px; }
.contact + .contact { margin-top: 14px; }
.small { margin-top: auto; margin-bottom: 170px; font-size: 28px; line-height: 1.4; color: #b9b5ad; }
.foot { position: absolute; left: 96px; right: 96px; bottom: 70px; display: flex; justify-content: space-between; align-items: center; font-size: 28px; }
.foot .logo { display: flex; align-items: center; gap: 16px; font: 800 34px "Bricolage Grotesque", sans-serif; }
.foot .mark2 { width: 56px; height: 56px; display: block; }
.foot .mark2 rect { }
.ink .foot .mark2 rect { fill: #fff; } .ink .foot .mark2 path { stroke: #111; }
.foot .n { color: var(--mute); font-weight: 600; }
.note { margin-top: 14px; font-size: 26px; color: var(--ink); opacity: .7; }
/* Hindi: Mukta, no letter-spacing tricks, roomier line height. Course names stay in Bricolage. */
body.hi { font-family: Mukta, Inter, sans-serif; }
.hi .eb { font-family: Mukta, sans-serif; text-transform: none; letter-spacing: 0; font-size: 38px; font-weight: 700; }
.hi h1 { font: 800 112px/1.12 Mukta, sans-serif; letter-spacing: -.01em; }
.hi.cover h1, .hi .cover h1 { font-size: 112px; }
.hi h2 { font: 800 84px/1.12 Mukta, sans-serif; letter-spacing: -.01em; }
.hi h2.lat { font: 800 86px/1.0 "Bricolage Grotesque", sans-serif; letter-spacing: -.035em; }
.hi .lead { font-size: 44px; }
.hi .lead.o, .hi .cover .lead.o { font: 800 60px/1.25 Mukta, sans-serif; letter-spacing: 0; }
.hi .facts b { font: 800 56px/1.15 Mukta, sans-serif; letter-spacing: 0; }
.hi .facts span, .hi li, .hi .take, .hi .contact { font-size: 38px; }
.hi li::before { top: 44px; }
.hi .quote { font: 700 64px/1.3 Mukta, sans-serif; letter-spacing: 0; }
.hi .cta { font: 800 58px/1.1 Mukta, sans-serif; }
.hi .swipe { font-size: 38px; }
.hi .small { font-size: 30px; }
.ink .foot .n { color: #9a958e; } .orange .foot .n { color: var(--ink); }
"""

def build(lang):
    out = OUT if lang == "en" else OUT / lang
    out.mkdir(parents=True, exist_ok=True)
    logo = LOGO.replace('class="mark"', 'class="mark2"')
    ss = slides(lang)
    body = "".join(
        f'<section class="slide {bg}">{b}<div class="foot"><div class="logo">{logo}<span>Manish Chauhan</span></div>'
        f'<span class="n">{i + 1}/{len(ss)}</span></div></section>'
        for i, (bg, b) in enumerate(ss))
    font = "Inter:wght@400;500;600;700" + ("&family=Mukta:wght@400;500;600;700;800" if lang == "hi" else "")
    doc = f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>AI classes carousel</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family={font}&display=swap" rel="stylesheet">
<style>{CSS}</style></head><body class="{lang}">{body}</body></html>'''
    (out / "carousel.html").write_text(doc, encoding="utf-8")
    print("built", out / "carousel.html")

if __name__ == "__main__":
    for lg in (sys.argv[1:] or ["en", "hi"]):
        build(lg)
