# Profilize

A simple CV/resume builder built with React. Fill out your details on one side, see a live formatted preview on the other, and download it as a PDF.

**Live demo:** [profilize-omega.vercel.app](https://profilize-omega.vercel.app/)

## Features

- Two-panel layout — form on the left, real-time resume preview on the right
- Sections: Personal Details, Education, Experience, Others
- Education, Experience, and Others support multiple entries (add / edit / delete)
- Draft-then-save pattern — edits only appear in the preview after hitting Submit
- Download the finished resume as a PDF (via browser print)

## Tech Stack

- React (Vite)
- Plain CSS (custom properties / design tokens)
- Deployed on Vercel

## Running Locally

```bash
git clone https://github.com/ThousandView-AJ/profilize.git
cd profilize
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Project Structure

```
src/
├── main.jsx              # entry point, mounts Profilize
├── Profilize.jsx         # owns all form state
├── personalDetails.jsx   # Personal Details form + preview
├── educationDetails.jsx  # Education form + preview (multi-entry)
├── experience.jsx        # Experience form + preview (multi-entry)
├── others.jsx            # Others form + preview (multi-entry)
└── styles/
    ├── index.css          # resets, tokens, layout, print styles
    ├── panel.css           # form panel styling
    └── preview.css         # resume preview styling
```
