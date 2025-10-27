---
sidebar_label: "Deployment - Github Pages"
sidebar_position: 2
---

# Hosting Website

## Build the Website

To generate a static production build:

```bash
npm run build
```

This will create a folder named `build/` containing the compiled static files.

You can test the production build locally using:

```bash
npm run serve
```

Then open:
```
http://localhost:3000
```

---

## Deploy to GitHub Pages

### 1. Configure `docusaurus.config.js`

Open your config file and set:

```js
url: 'https://<your-username>.github.io',
baseUrl: '/dazzleduck-website/',
organizationName: '<your-username>', // Your GitHub username or org name
projectName: 'dazzleduck-website',  // Repository name
deploymentBranch: 'gh-pages',
trailingSlash: false,
```

> Make sure your repo name and organization name are correct.

---

### 2. Push the Source Code

```bash
git add .
git commit -m "Initial Docusaurus setup for Dazzle Duck"
git push origin main
```

---

### 3. Deploy Using Script

If your project uses the default Docusaurus deployment workflow, run:

```bash
GIT_USER=<your-username> npm run deploy
```

This will:
- Build the site (`npm run build`)
- Push the contents of `/build` to the `gh-pages` branch
- Automatically publish to GitHub Pages

---

## Customization

### Add New Documentation Page

1. Create a new Markdown file inside `docs/`
   ```bash
   docs/my-new-guide.md
   ```
2. Add frontmatter:
   ```markdown
   ---
   sidebar_label: "My New Guide"
   sidebar_position: 5
   ---
   # My New Guide

   This is my custom documentation page.
   ```

3. Add it to `sidebars.js` if needed.

---

### Add New Blog Post

1. Create a new file under `/blog`:
   ```bash
   blog/2025-11-01-new-feature-announcement.md
   ```
2. Add frontmatter:
   ```markdown
   ---
   slug: new-feature
   title: "Announcing a New Feature in Dazzle Duck"
   authors: [community]
   tags: [announcement, dazzle-duck]
   date: 2025-11-01
   ---
   ```
3. Write your blog content in Markdown — it will automatically appear in `/blog`.

---

