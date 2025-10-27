---
sidebar_label: "Dazzle Duck - Project Setup"
sidebar_position: 1
---

# Dazzle Duck — Website Setup

Welcome to the **official documentation site** for the **Dazzle Duck SQL Server** project.  
This website is built using **[Docusaurus 2](https://docusaurus.io/)** and contains guides, blogs, and references for developers and contributors.

---

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/dazzleduck-web/dazzleduck-website.git
cd dazzleduck-website
```

---

### 2. Install Dependencies

Install using **npm** or **yarn**:

```bash
npm install
```

or

```bash
yarn install
```

---

### 3. Start the Development Server

Run the local Docusaurus development server:

```bash
npm run start
```

Then open your browser at:

```
http://localhost:3000
```

This will start the site in watch mode — edits to your docs or blog reload automatically.

---

## Project Structure

```
dazzleduck-website/
│
├── blog/                    # Blog posts and articles
│   ├── blogs.md
│   ├── blogs.md
│   ├── ....
│   ├── authors.yml
│   └── tags.yml
│
├── docs/                    # Documentation pages
│   ├── intro.md
│   ├── quick-start/
│   └── about.md
│
├── src/pages/               # React-based custom pages
│   ├── index.js             # Home page
│   └── about.js             # About page (custom)
│
├── static/                  # Static assets (images, icons, etc.)
│
├── docusaurus.config.js     # Main configuration file
├── sidebars.js              # Sidebar configuration
├── package.json             # Dependencies and scripts
└── README.md
```

---

## Available Commands

| Command          | Description                            |
|------------------|----------------------------------------|
| `npm install`    | Install needed dependencies            |
| `npm run start`  | Starts local dev server with hot reload |
| `npm run build`  | Builds the site for production         |
| `npm run serve`  | Serves the production build locally    |
| `npm run deploy` | Deploys the site to GitHub Pages       |

---