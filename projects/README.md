# Google Apps Script Projects Directory

This directory contains standalone and production Google Apps Script projects, tools, and workflow automation add-ons.

---

## Directory Index

| Project | Category | Description | Primary Services | Tech Stack |
| :--- | :--- | :--- | :--- | :--- |
| [`SheetCloner`](./SheetCloner/) | Sheets Automation | Lightweight utility that seamlessly imports and replaces a specific tab from an external Google Spreadsheet with zero duplication and real-time toast notifications. | `SpreadsheetApp`, `Utilities` | GAS V8 |

---

## Standard Project Layout

Each subfolder contains:
- `README.md` — Project documentation, deployment instructions, and usage guide.
- `appsscript.json` — Google Apps Script manifest file specifying permissions and runtime.
- `Code.js` (or `.gs`) — Core Apps Script backend business logic.
- `.claspignore` — Ignore rules for clasp synchronization.
- HTML templates (if web app or sidebar) — Frontend views and scripts.

---

Whenever any project inside this directory is added, renamed, updated, or removed, this table and the root [`../README.md`](../README.md) must be updated synchronously.
