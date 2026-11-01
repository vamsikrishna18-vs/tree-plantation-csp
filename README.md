# Tree Plantation - Community Service Project

Showcase website for my CSP (Raju Palem, Nellore).

## Files
- index.html - page structure
- style.css - layout and animations
- script.js - interactions, photo upload and saving
- server.js - local Node.js server (saves edits to data.json)
- package.json - run script
- images/ - keep your own project photos here

## Run on localhost
1. Install Node.js (nodejs.org) if you don't have it.
2. In VS Code open this folder, then open the terminal (Ctrl + `).
3. Run: `node server.js`  (or `npm start`)
4. Open http://localhost:3000 in your browser.

Click Edit inside any panel to change text, add photos and add feedback.
Everything is saved to data.json in this folder. Press Ctrl + C to stop the server.
Without Node you can still double-click index.html (edits then save in the browser only).

## Publish with GitHub Pages
GitHub Pages hosts the static website. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. The site will be available at `https://<your-username>.github.io/<repository-name>/` after deployment completes.

On GitHub Pages, text, photos and feedback are saved only in the current browser's local storage; they are not shared with other visitors. Run the Node.js server locally if you need edits saved to `data.json`. Everything committed to a public repository or published site is visible to anyone.
