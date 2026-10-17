# Google Apps Script Projects

[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-V8%20Runtime-4285F4?logo=google&logoColor=white)](https://developers.google.com/apps-script)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Automations-34A853?logo=googlesheets&logoColor=white)](https://workspace.google.com/products/sheets/)
[![Clasp](https://img.shields.io/badge/Built%20with-clasp-EA4335?logo=google&logoColor=white)](https://github.com/google/clasp)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

A centralized monorepo for managing production-ready **Google Apps Script projects and Google Workspace automations**. Built with a focus on maintainability, modular architecture, version control, code reusability, and streamlined deployment across multiple projects.

This repository serves as a unified development workspace for building, maintaining, and scaling reusable Google Apps Script solutions. It brings together tools and applications designed to automate business workflows, eliminate repetitive tasks, streamline spreadsheet operations, and extend the capabilities of Google Workspace through efficient, maintainable, and scalable automation.

---

## All Projects Directory

| Project | Category | Description | Primary Services | Tech Stack |
| :--- | :--- | :--- | :--- | :--- |
| [`SheetCloner`](./projects/SheetCloner/) | Sheets Automation | Lightweight utility that seamlessly imports and replaces a specific tab from an external Google Spreadsheet with zero duplication and real-time toast notifications. | `SpreadsheetApp`, `Utilities` | GAS V8 |

*Additional projects will be documented here as they are added to the repository.*

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Google Apps Script | Automation logic and Google Workspace integrations |
| Google Sheets | Spreadsheet-based data management and processing |
| Apps Script V8 Runtime | Modern JavaScript execution environment |
| Google Apps Script API | Programmatic management of Apps Script projects |
| `@google/clasp` | Local development, version control, and deployment |
| Git and GitHub | Source control, project organization, and change tracking |
| Google Workspace APIs | Integration with supported Google Workspace services |

Individual projects may use additional libraries, APIs, or services as required by their functionality.

---

## How to Use & Deploy

### Option 1: Deploy with Google Clasp (Recommended)

The repository layout is optimized for deployment using [`@google/clasp`](https://github.com/google/clasp).

1. **Install Clasp globally:**
   ```bash
   npm install -g @google/clasp
   ```

2. **Login to your Google account:**
   ```bash
   clasp login
   ```

3. **Navigate to the target project directory:**
   ```bash
   cd "projects/SheetCloner"
   ```

4. **Clone an existing Google Apps Script project or create a new one:**
   ```bash
   # Link to an existing script
   clasp clone "<SCRIPT_ID>"

   # Or create a new standalone/sheet-bound script
   clasp create --type sheets --title "SheetCloner"
   ```

5. **Push code to Google Apps Script:**
   ```bash
   clasp push
   ```

6. **Open the script in your browser:**
   ```bash
   clasp open
   ```

### Option 2: Manual Deployment via Apps Script Web Editor

1. Navigate to [script.google.com](https://script.google.com) and create a **New Project**.
2. Copy the contents of the project's `.js` or `.gs` files into the online code editor.
3. If the project includes HTML files, click **+ > HTML** and paste each template's source.
4. In **Project Settings**, enable **"Show 'appsscript.json' manifest file in editor"** and replace its content with the project's `appsscript.json`.
5. Click **Save** and test by clicking **Run** or deploying.

---

## Contributing

This repository is primarily a personal development workspace maintained by Sumit Singh at Synbus Solutions.

Suggestions, bug reports, and improvements are welcome. Before proposing changes, please review the relevant project's documentation and ensure that your changes do not expose credentials or confidential information.

For substantial changes, document the problem being solved and explain how the proposed solution improves reliability, maintainability, or usability.

---

## License

This repository is licensed under the **MIT License**.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software, subject to the terms and conditions of the license.

The MIT License requires the original copyright and permission notice to be included in copies or substantial portions of the software.

See [LICENSE.md](./LICENSE.md) for the full license text.

**Copyright © 2026 Sumit Singh / Synbus Solutions**

*Individual projects may contain third-party dependencies or components subject to their own licenses. Please review their respective license terms before redistribution.*

---

## A Note from the Developer

The goal of this repository is straightforward: build practical, maintainable automations that solve real problems.

From simplifying everyday Google Sheets operations to developing reusable business workflows, each project represents an effort to make repetitive work more efficient through thoughtful engineering.

Explore the projects, adapt them to your workflows, and build on them.

[Website](https://synbussolutions.com) · [GitHub](https://github.com/singhsumi01) · [Google Apps Script Documentation](https://developers.google.com/apps-script)
