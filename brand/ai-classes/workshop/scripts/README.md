# Workshop generators (Classes 9–12)

- `deck912.js` builds `AI-Workshop-Slides-Class-9-12.pptx` (pptxgenjs, react-icons, sharp).
- `plan912.js` builds `AI-Workshop-Lesson-Plan-Class-9-12.docx` (docx).

Setup once in any folder: `npm install pptxgenjs docx react-icons react react-dom sharp`.
`deck912.js` also needs the pptx skill's `apply_theme.js` (path at the top of the file) and a PNG of `../../qr-en.svg`:

    node deck912.js ../AI-Workshop-Slides-Class-9-12.pptx qr-en.png
    node plan912.js ../AI-Workshop-Lesson-Plan-Class-9-12.docx

Export to PDF by opening the files in Keynote / Pages (File → Export To → PDF).
