# Twitter Shortcuts Blocker

Twitter Shortcuts Blocker is a Chrome extension that blocks all keyboard shortcuts on Twitter except for a defined set of shortcuts specified in the code. This ensures that users do not accidentally trigger common keyboard shortcuts while using Twitter, leading to a more streamlined and efficient browsing experience.

## Installation

To install this Chrome extension, follow these steps:

1. Download the code from the [GitHub repository](https://github.com/username/repo).
2. Unzip the downloaded file and save it to a location on your computer.
3. Open Chrome and navigate to chrome://extensions.
4. Enable Developer Mode by clicking the toggle switch on the top right.
5. Click on "Load unpacked" and select the unzipped folder containing the extension code.
6. The extension will now be installed and ready to use.

## Usage

Once the extension is installed, it will automatically block all keyboard shortcuts on Twitter except for the ones specified in the code. These shortcuts can be viewed and modified in the content.js file located in the extension code.

To modify the shortcuts, simply edit the shortcuts and multiKeyShortcuts arrays in the content.js file. The format for the arrays is as follows:

- shortcuts: an array of objects that represent single-key shortcuts. Each object should contain a key property with the shortcut key (in the format 'KeyX' for letter keys or just 'Space' for space bar) and a description property with a brief description of what the shortcut does.

- multiKeyShortcuts: an array of objects that represent multi-key shortcuts. Each object should contain a keys property with an array of key codes for the shortcut (in the format ['KeyX', 'KeyY', 'KeyZ']) and a description property with a brief description of what the shortcut does.

After modifying the content.js file, you will need to reload the extension for the changes to take effect. To do this, go back to chrome://extensions and click the reload icon next to the extension.

## Support

If you encounter any issues while using this Chrome extension, please open an issue in the [GitHub repository](https://github.com/0xAnonDeveloper/twitter-shortcuts-blocker) or contact the developer directly.

## License

This Chrome extension is licensed under the [MIT License](https://opensource.org/licenses/MIT).
