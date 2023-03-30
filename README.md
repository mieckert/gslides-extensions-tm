# gslides-extensions-tm
Tampermonkey script with extensions for Google Slides

This Tampermonkey user script improved your Google Slides experience by (1) providing
better keyboard shortcuts that are easier to memorize and typeable on non-US keyboards
and (2) stops slides form advancing when scrolling with the mouse.

## Installation
You have to use Chrome or Chrome-like browser with the Tampermonkey extension installed.

Click on the Tampermonkey icon, click Dashboard, click the Tab Utilities and paste the URL

https://raw.githubusercontent.com/mieckert/gslides-extensions-tm/main/gslides-extensions.user.js
into Import from URL textbox. On the next page click "Install" or "Reinstall".

## Functionality

### Better keyboard shortcuts

Note that keyboard shortcuts are only tested for Mac (and developed from the perspective 
of a German keyboard).  Feedback for Windows/Linux or other Language keyboards is welcome!

| Shortcut                                                  | Description                                                                                                                  |
| --------------------------------------------------------- | --------------------------- |
| <kbd>⌘ Command</kbd> + <kbd>⌥ Option</kbd> + <kbd>0</kbd> | Zoom to fit (1)             |
| <kbd>⌥ Option</kbd> + <kbd>⌃ Control</kbd> + <kbd>L</kbd> | Resize larger horizontally  |
| <kbd>⌥ Option</kbd> + <kbd>⌃ Control</kbd> + <kbd>H</kbd> | Resize smaller horizontally |
| <kbd>⌥ Option</kbd> + <kbd>⌃ Control</kbd> + <kbd>M</kbd> | Resize smaller vertically   |

#### Understanding the resizing keyboard shortcuts

Together with the default keyboard shortcuts for resizing in Google Slides, the keyboard shortcuts defined
here are nicely arranged on the keyboard to be easier to remember.

```
   I
H J K L
   N
```

The middle keys (J/K) make the whole object smaller/larger, the other two keys around it in the 
horizontal make the object smaller/larger horizontally, the two keys in the (well almost) vertical 
(N, I) make the object smaller/larger vertically.

#### Remarks:
(1) The original keyboard shortcut for Zoom to fit (<kbd>⌘ Command</kbd> + <kbd>⌥ Option</kbd> + <kbd>[</kbd>) 
cannot be typed properly on, e.g., a German keyboard (since you also need <kbd>⌥ Option</kbd> to type the square 
bracket)

### Stop Mouse Scrolling
The script stops Google Slides from advancing between slides when accidentally scrolling 
with the mouse (esp. with an Apple Magic Mouse). Works both in editing mode and in 
presentation mode.

If you only want this behavior without the keyboard shortcuts, it's also available separately:
https://github.com/mieckert/gslides-no-scroll-tm