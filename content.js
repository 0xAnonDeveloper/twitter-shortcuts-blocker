const keys = {
  "shortcuts": [
    {
      "key": "KeyH",
      "description": "Go to Home"
    },
    {
      "key": "KeyN",
      "description": "New Tweet"
    },
    {
      "key": "KeyJ",
      "description": "Next Tweet"
    },
    {
      "key": "KeyK",
      "description": "Previous Tweet"
    },
    {
      "key": "KeyL",
      "description": "Like"
    },
    {
      "key": "KeyR",
      "description": "Reply"
    },
    {
      "key": "KeyT",
      "description": "Retweet"
    },
    {
      "key": "KeyM",
      "description": "Direct Message"
    },
    {
      "key": "KeyU",
      "description": "Mute account"
    },
    {
      "key": "KeyB",
      "description": "Bookmark"
    },
    {
      "key": "Key1",
      "description": "Likes"
    },
    {
      "key": "KeyO",
      "description": "Expand photo"
    },
    {
      "key": "KeyI",
      "description": "Lists"
    },
    {
      "key": "KeyF",
      "description": "Drafts"
    },
    {
      "key": "KeyX",
      "description": "Block account"
    },
    {
      "key": "KeyP",
      "description": "Profile"
    },
    {
      "key": "KeyE",
      "description": "Explore"
    },
    {
      "key": "KeyS",
      "description": "Settings"
    },
    {
      "key": "KeyD",
      "description": "Display settings"
    },
    {
      "key": "KeyG",
      "description": "Open/Close Messages dock"
    },
    {
      "key": "Space",
      "description": "Scroll down"
    },
    {
      "key": "PageDown",
      "description": "Page down"
    },
    {
      "key": "MediaPlayPause",
      "description": "Pause/Play selected video"
    }
  ],
  "multiKeyShortcuts": [
    {
      "keys": ["KeyA", "KeyD"],
      "description": "Go to Audio Dock"
    },
    {
      "keys": ["KeyA", "Space", "KeyH"],
      "description": "Play/Pause Audio Dock"
    },
    {
      "keys": ["KeyA", "KeyM"],
      "description": "Mute/Unmute Audio Dock"
    },
    {
      "keys": ["KeyG", "KeyE"],
      "description": "Explore"
    },
    {
      "keys": ["KeyG", "KeyN"],
      "description": "Notifications"
    },
    {
      "keys": ["KeyG", "KeyR"],
      "description": "Share Tweet"
    },
    {
      "keys": ["KeyG", "KeyP"],
      "description": "Profile"
    },
    {
      "keys": ["KeyG", "KeyT"],
      "description": "Scheduled Tweets"
    },
    {
      "keys": ["KeyG", "KeyU"],
      "description": "Go to user.."
    },
    {
      "keys": ["KeyG", "KeyI"],
      "description": "Lists"
    },
    {
      "keys": ["KeyG", "KeyB"],
      "description": "Bookmarks"
    },
    {
      "keys": ["KeyG", "KeyS"],
      "description": "Settings"
    },
    {
      "keys": ["KeyG", "KeyF", "KeyM"],
      "description": "Open/Close Messages dock"
    }
  ]
}
const { shortcuts, multiKeyShortcuts } = keys;
  // Listen for all keyboard events
document.addEventListener("keydown", function (event) {
  // Check if the event target is an input or textarea
  console.log(event.target)
  const replyInput = document.querySelector('[data-testid="tweetTextarea_0"]');
  if (event.target && (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA')) {
    return;
  }
  if (replyInput && replyInput.closest('.DraftEditor-root') && replyInput === event.target) {
          // The focused element is a reply input textarea in Twitter, allow the event to pass through
    return;
  }

// Check if the event target is an input or textarea
if (event.target && (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA')) {
  const replyInput = document.querySelector('[data-testid="tweetTextarea_0"]');
  if (replyInput && replyInput.closest('.DraftEditor-root') && replyInput === event.target) {
          // The focused element is a reply input textarea in Twitter, allow the event to pass through
    return;
  }
}
  // Check if the pressed keys match any of the known shortcuts
  if (shortcuts.includes(event.code)) {
    // Block the event
    event.preventDefault();
  }

  // Check if the pressed keys match any of the multi-key shortcuts
  for (let i = 0; i < multiKeyShortcuts.length; i++) {
    const keys = multiKeyShortcuts[i];
    let match = true;
    for (let j = 0; j < keys.length; j++) {
      if (!event.getModifierState(keys[j].replace("Key", ""))) {
        match = false;
        break;
      }
    }
    if (match) {
      event.preventDefault();
      break;
    }
  }
});

