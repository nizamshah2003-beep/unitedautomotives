# United Automotives India — Vercel Website

Files:
- index.html — website
- style.css — styling
- vercel.json — Vercel routing configuration

## Publish on Vercel

1. Put all three files in one folder.
2. Upload the folder to a GitHub repository, or import the repository into Vercel.
3. In Vercel, create a new project and select the repository.
4. Framework Preset: Other.
5. Build Command: leave blank.
6. Output Directory: leave blank.
7. Deploy.

This is a static HTML/CSS site, so no npm, Node.js or build command is required.

## Important
Do not open the HTML file using a Vercel URL such as `/services.html` unless that file exists.
The included `vercel.json` lets `/services` resolve to the main page.

Replace the Unsplash image URLs with your own vehicle images before production if desired.
