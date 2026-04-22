# Fahrschule Schulterblick Feedback Dashboard

Static customer-feedback dashboard concept for Fahrschule Schulterblick in Bonn.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
cd /Users/hammam/Desktop/schulterblick-feedback-dashboard
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish as a static site

This project has no build step. The publish directory is the project root:

- `index.html`
- `styles.css`
- `app.js`

You can deploy it with any static hosting provider.

## Easiest options

### GitHub Pages

This repo already includes a GitHub Actions workflow for Pages deployment in `.github/workflows/pages.yml`.

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Push everything to the `main` branch.
4. In GitHub, open `Settings > Pages`.
5. Under source, select `GitHub Actions`.
6. Wait for the `Deploy GitHub Pages` workflow to finish.
7. GitHub will publish the site at the repository Pages URL.

For a project site, the default URL is `https://<owner>.github.io/<repositoryname>`.

### Netlify

1. Create a new site in Netlify.
2. Either drag and drop this folder in the deploy UI or connect a Git repository.
3. If asked for a publish directory, use the project root.
4. No build command is needed.

### Vercel

1. Import the project into Vercel or deploy it from the project folder with the CLI.
2. Keep the framework preset as `Other` if Vercel asks.
3. No build command is needed.
4. The output is the project root.

## Custom domain

After deployment, connect the school domain in your hosting provider's domain settings.

## Notes

- The dashboard currently uses sample feedback data in `app.js`.
- The export button downloads the currently filtered dataset as JSON.
- If you want this to be production-ready, the next step is wiring it to a real feedback source such as Google Reviews exports, a form backend, Airtable, or a small admin API.
