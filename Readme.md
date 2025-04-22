# Immersive Full Screen Experience Userscript

A userscript that adds a floating button to any website, enabling a true immersive full screen mode without black bars. Especially useful on Android browsers like **Kiwi Browser** (with [Tampermonkey](https://www.tampermonkey.net/)) or **Cromite** (which supports userscripts natively).

---

## Features

- 🖥️ Floating button to activate immersive full screen on any page
- Removes black bars and maximizes content area
- Works on most websites
- Automatically adapts to orientation changes
- Easy to enable/disable

---

## Installation

### For Kiwi Browser (Android)

1. Install [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser) from Google Play.
2. Install [Tampermonkey](https://tampermonkey.net/?browser=kiwi) extension from the Kiwi Browser extensions store.
3. Open Tampermonkey, tap the `+` button to add a new script.
4. Choose the downloaded `script.user.js` file from your file manager. 
5. Save the script and refresh any page to see the 🖥️ button.

### For Cromite Browser (Android)

1. Install [Cromite](https://github.com/uazo/cromite) (userscript support is built-in).
2. Open the browser menu → "Userscripts" → "Add".
3. Paste the contents of [`script.user.js`](./script.user.js).
4. Save and refresh any page.

### For Chrome Extension on Kiwi Browser

1. Clone or download this repository.
2. Open Chrome (or Edge) and go to `chrome://extensions` (or `edge://extensions`).
3. Enable **Developer mode** (top‑right).
4. Click **Load unpacked** and select the `d:\B.Tech\Immersive Full Screen` folder.
5. The extension will inject the floating 🖥️ button on all pages.
6. Refresh any page to see the button and enter immersive full screen.

---

## Usage

- Tap the 🖥️ button at the bottom-right corner to enter immersive full screen.
- To exit, use your browser's back gesture or exit full screen as usual.
- The script automatically reapplies immersive styles on orientation change.

---

## Compatibility

- **Android:** Kiwi Browser (with Tampermonkey), Cromite (native)
- **Desktop:** Should work in any browser supporting userscripts (e.g., Tampermonkey, Violentmonkey)
- **Note:** Some websites with aggressive custom layouts may override the immersive styles.

---

## License

MIT License

---

## Author

[0xArchit](https://github.com/0xArchit)

### ⭐ If you like this project, please star the repository! ⭐
