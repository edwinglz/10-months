# 10 Months 🌷 — setup guide

## What's in here
- `index.html` — the page structure (countdown + the gift scenes)
- `style.css` — all the colors/fonts/animations
- `script.js` — the countdown logic and the cat/card interactions
- The site automatically shows the **countdown** until Sept 10, 2026, then automatically switches to the **gift** — no need to touch it on the day itself.

## 1. Write your letter (do this whenever you're ready)
Open `index.html` in VS Code, search for `letter-text` (Ctrl/Cmd+F), and replace the
placeholder paragraphs with your own. Each `<p>...</p>` is one paragraph.

## 2. Double check the date
In `script.js`, the first real line sets the target:
```js
const TARGET_DATE = new Date(2026, 8, 10, 0, 0, 0);
```
`8` means September (months start at 0), `10` is the day. This uses whoever's
opening the site's own device time — fine for a gift like this.

## 3. Put it on GitHub from VS Code
1. **Create the repo on GitHub:** go to github.com/edwinglz → **New repository** → name it something like `anniversary-gift` → Create.
2. **Open the folder in VS Code:** File → Open Folder → select this `anniversary-gift` folder.
3. **Open the built-in terminal:** Terminal → New Terminal, then run:
   ```bash
   git init
   git add .
   git commit -m "10 months site"
   git branch -M main
   git remote add origin https://github.com/edwinglz/anniversary-gift.git
   git push -u origin main
   ```
   (If VS Code asks you to sign in to GitHub, do that when prompted — it'll handle auth for you.)

## 4. Turn on GitHub Pages
1. On GitHub, open your new repo → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Wait ~1 minute, then refresh — GitHub shows your live link, something like:
   `https://edwinglz.github.io/anniversary-gift/`

That link is what you'd send her. It'll show the countdown until Sept 10, then flip
to the gift on its own.

## Making changes later
Any time you edit a file, just repeat in the terminal:
```bash
git add .
git commit -m "update letter"
git push
```
Give it a minute and the live link updates itself.
