# Teleprompter for Meta Ray-Ban Display

A word-for-word teleprompter that runs in your glasses and scrolls at your speaking pace. You control it with the Meta Neural Band.

**What's in this folder**

| File | What it does |
|---|---|
| `index.html` | The app itself |
| `script.txt` | Your script. **This is the only file you'll edit.** |
| `sw.js` | Saves a copy so the app still opens if the Wi-Fi drops |
| `icon.svg`, `.well-known/meta-wearables-manifest.json` | App icon (optional, see the end) |

---

## 1. Put it online (GitHub Pages, free, about 10 minutes)

The glasses load web apps from an `https://` address. GitHub Pages gives you one for free.

1. Sign in at **github.com**, tap **+** → **New repository**. Name it `teleprompter`, set it to **Public**, and tap **Create repository**.
2. On the new repo page, tap **uploading an existing file** (or **Add file → Upload files**). Upload `index.html`, `script.txt`, `sw.js`, and `icon.svg`. Tap **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, and tap **Save**.
4. Wait a minute or two and refresh. The page will say your site is live at:
   `https://YOUR-USERNAME.github.io/teleprompter/`
5. Open that link on your phone. You should see the menu with **Practice run**. If you do, it's working.

## 2. Connect it to your glasses

You need glasses software **v125 or newer** and Meta AI app **v272 or newer**.

1. **Turn on Developer Mode:** Meta AI app → **Settings → App Info** → tap the **App version** number **5 times** → **Enable**.
2. **Add the app:** Meta AI app → **Settings → Apps → Web Apps → Connect Web App**. Paste your link from step 1 and tap **Save**.
3. **Open it on the glasses:** it appears at the **bottom of the app grid**. Pin it so it's easy to find.

## 3. Put in your script

1. On github.com, open `script.txt`, tap the **pencil** (edit), and replace the text with your script.
2. Tap **Commit changes**, then wait about a minute.
3. On the glasses, choose **Script: Reload** on the menu.

**How to write the script**

```
title: UHD Data Science Showcase      ← optional first line, shown on the menu

# Slide 1 · Intro                     ← a section header (blue). Use for slide changes.
Good morning, everyone. [pause]       ← [anything in brackets] shows in gold, as a cue

Leave a blank line between paragraphs. ← one swipe forward = one paragraph
I want to *stress* this word.         ← *word* gets a gold underline
```

Line breaks inside a paragraph are ignored, so text pasted from a PDF or Google Doc still wraps to fit the lens.

## 4. Controls

| On the Neural Band | While scrolling | While paused |
|---|---|---|
| **Pinch** (index finger) | Pause | Play (first time: 3-2-1 countdown) |
| **Swipe down / up** | Faster / slower (10 wpm steps) | Move forward / back one line |
| **Swipe forward / back** | Jump to next / previous paragraph | Same |
| **Back** (middle-finger tap) | Return to the menu (your spot is saved) | Same |

- **Swipes feel backwards?** On the menu, change **Swipes** to *Flip ↕*, *Flip ↔*, or *Flip both*.
- The top bar shows **time spoken**, **status**, and **time left** at your current speed.
- The **gold arrow** marks the line you should be reading. Lines above it fade out.
- **Speed, text size, and swipe direction** are remembered.
- If you leave mid-talk, the menu shows **Resume** with your spot and time.
- At the menu, Back opens the glasses' own Web App menu (**Restart / Resume**).

## 5. Before you present

- **Rehearse once in the glasses.** Find your natural speed. Most presenters land between 130 and 160 wpm.
- **Open the app once on the venue's Wi-Fi** (or with your phone connected) so the latest script is saved offline.
- **Charge the glasses and the band.** Display apps use more battery.
- **Keep a printed copy** as a backup.

---

## Optional: a custom app icon

GitHub skips folders that start with a dot unless you add a `.nojekyll` file. Your phone's file picker usually hides them too, so create these two files right on github.com:

1. **Add file → Create new file**. Name it `.nojekyll`. Type a single space as the content and commit.
2. **Add file → Create new file**. Name it `.well-known/meta-wearables-manifest.json`. Typing the `/` makes the folder. Paste in the contents of that file from this folder and commit.
3. In the Meta AI app, remove the web app and connect it again so the glasses pick up the icon.

## A second script

Upload another file, for example `class-talk.txt`. Then connect a second web app with this link:
`https://YOUR-USERNAME.github.io/teleprompter/?script=class-talk.txt`

## Privacy

GitHub Pages sites are public. Anyone with the link can open `script.txt`, so don't put anything confidential in it.
