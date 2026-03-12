# myPDF

> _"I just wanted to add a signature to a PDF, and they asked me to pay $12/month."_

Ever needed to edit a single page in a PDF — add some text, crop it, or just rotate — only to find every online tool hiding behind a paywall? Free trials limited to 2 files a day? Giant watermarks on your exports?

**myPDF was born out of that frustration.**

A PDF editor that runs 100% in your browser. No uploads to any server. No accounts. No paywalls. Your files stay on your device.

## ✨ Features

- 📝 **Edit Text** — Add or modify text directly on your PDF
- 🖼️ **Add Images** — Insert and position images anywhere
- ✏️ **Draw & Sign** — Freehand drawing, shapes, and digital signatures
- 🔖 **Annotate** — Highlight, strikethrough, and sticky notes
- 📄 **Manage Pages** — Merge, split, rotate, reorder, and delete pages
- 🔒 **Secure** — Password protection and watermarks
- 💾 **Auto-save** — Progress saved in your browser, survives page refreshes

## 🔒 Privacy

Your PDF files **never leave your device**. All processing — rendering, editing, merging, compressing — happens 100% in the browser using JavaScript. No backend. No server storing your files. Ever.

## 🛠️ Tech Stack

| Layer       | Technology           |
| ----------- | -------------------- |
| Framework   | React + TypeScript   |
| Build Tool  | Vite                 |
| Styling     | Tailwind CSS v3      |
| PDF Render  | PDF.js               |
| PDF Modify  | pdf-lib              |
| Canvas Edit | Fabric.js            |
| Icons       | Lucide React         |
| Caching     | IndexedDB (Dexie.js) |
| Linting     | ESLint 9 + Prettier  |
| Pre-commit  | Husky + lint-staged  |

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/bayustwn/pdf.git
cd pdf

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open `http://localhost:5173` and drop your PDF.

## 📜 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Lint & auto-fix          |
| `npm run format`  | Format all files         |

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -m "feat: add new feature"`)
4. Push to branch (`git push origin feat/new-feature`)
5. Open a Pull Request

## 📄 License

MIT — Use it however you want.

---

_Built because I was tired of paying to edit PDFs._
