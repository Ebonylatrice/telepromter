# Toolkit for Meta Ray-Ban Display

Four tools in one glasses app: **Practice** (quiz yourself), **Checklists**, **Markets** (paper-trading watchlist) and **Timer**. There's also a shortcut to your Teleprompter.

## Setup (about 5 minutes)

**1. Upload the folder.** On your `telepromter` repo page, choose **Add file → Upload files**.
This time, drag the **whole `hub` folder**, not the files inside it. Then click **Commit changes**.
You should end up with a `hub` folder next to `index.html`.

**2. Get a free market data key** (only needed for Markets):
- Sign up at **finnhub.io**.
- Copy the **API key** from your dashboard.

**3. Connect it to the glasses.** In the Meta AI app, go to **Settings → Apps → Web Apps → Connect Web App**. Paste:
```
https://ebonylatrice.github.io/telepromter/hub/?key=YOUR_FINNHUB_KEY
```
The key stays on your glasses and is never saved in your public repo. If you skip Markets, leave off everything from `?key=` on.

**4. Open it.** On the glasses, go to the app grid, scroll to the bottom, and open **Toolkit**.

## Controls

- **Swipe:** moves between buttons.
- **Pinch:** chooses the selected button.
- **Middle-finger tap:** goes back one screen.

## Edit your content on GitHub

Open a file in the `hub` folder, click the pencil, make your changes, and commit. On the glasses, each screen has a **Reload** button.

### `practice.txt`: quiz questions
```
# Stats Exam 1
Q: At α = 0.05, a test gives p = 0.03. What do you conclude?
- Fail to reject H0
* Reject H0                ← put * on the correct choice
Why: p < α, so reject.      ← optional explanation

Q: What does SE measure?
A: How much the sample mean varies.   ← written answer instead of choices
```
- Each `# Title` starts a new deck.
- Questions you miss come back once at the end of the round, and a **Review** button keeps them for later.
- **Shuffle** is on by default.

### `checklists.txt`
```
# Morning routine (daily)     ← "(daily)" clears the checks each new day
Drink a glass of water
Lunches packed
```

### `watchlist.txt`
```
SPY
AAPL @ 225.50 x 10      ← paper position: 10 shares bought at $225.50
```
- Prices refresh every 30 seconds while Markets is open.
- Positions show profit or loss, and the top line shows your total paper P/L.
- This is a practice tool. Finnhub's free plan is for personal use.

## Timer

- Choose **Focus 25 · break 5**, **Deep study 50 · break 10**, **Presentation · 10 min**, **Quick break · 5 min**, or a custom length.
- It speaks through the glasses when it's time to switch, and one minute before.

## Privacy

GitHub Pages sites are public, so anyone with the link can read these text files. Keep anything private out of them.
