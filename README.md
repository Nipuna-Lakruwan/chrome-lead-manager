
# Chrome Lead Manager

A simple Chrome extension to save and manage website leads (URLs).

## Introduction

Chrome Lead Manager is a lightweight and user-friendly Chrome extension designed to help users save and manage website leads efficiently. Whether you're conducting research, managing projects, or bookmarking important URLs, this extension provides a seamless way to organize and access your leads.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nipuna-lakruwan/chrome-lead-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chrome-lead-manager
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Open Chrome and navigate to chrome://extensions/
6. Enable “Developer mode” by toggling the switch in the top right corner.
7. Click on “Load unpacked” and select the dist folder from the project directory.

## Usage

Once the extension is installed:

1. Click on the extension icon in the Chrome toolbar to open the popup interface.
2. To save a URL:
   - Enter the URL in the text field and click SAVE INPUT.
   - Alternatively, click SAVE TAB to save the URL of the current active tab.
3. View your saved leads in the list displayed in the popup.
4. To delete all saved leads, double-click the DELETE ALL button.

## Features

- Popup Interface: Displays a popup (index.html) when the extension icon is clicked.
- Saving Leads:
  - Enter a URL in the text field and click SAVE INPUT.
  - Click SAVE TAB to save the current active tab’s URL.
- Viewing Leads: Displays saved URLs in a list.
- Deleting Leads: Double-click DELETE ALL to clear saved leads.

## Development

To contribute or customize the extension:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b my-feature-branch
   ```

3. Make changes in the codebase.
4. Test changes using:

   ```bash
   npm run dev
   ```

5. Commit changes:

   ```bash
   git commit -m 'Add some feature'
   ```

6. Push your changes:

   ```bash
   git push origin my-feature-branch
   ```

7. Open a pull request.

## Testing

### Manual Testing

- Load the extension in Chrome and manually test saving, viewing, and deleting leads.
- Verify behavior in different scenarios, e.g., saving duplicate URLs or handling invalid inputs.

### Automated Testing

- Write unit tests for JavaScript functions in index.js.
- Use a testing framework like Jest:

   ```bash
   npm run test
   ```

## Troubleshooting

If you encounter issues:

1. Check the browser console for errors (right-click on the popup and select “Inspect”).
2. Ensure all dependencies are installed correctly by running npm install.
3. Verify the manifest.json file is configured properly.
4. Refer to the Chrome Extension Documentation for additional guidance.

## File Overview

- manifest.json: Declares the extension setup with manifest version 3 and permissions.
- vite.config.js: Configures Vite for bundling and development.
- package.json: Lists project scripts and dependencies for development.
- index.html: Contains the UI for the popup, referencing index.css and index.js.
- index.css: Defines basic styles for the popup.
- index.js: Manages lead data using localStorage and interacts with the Chrome tabs API to save the current tab.

## Running Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build or serve with Vite:

   ```bash
   npm run build
   npm run dev
   ```

3. Load the dist folder as an unpacked extension in Chrome.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b my-feature-branch
   ```

3. Make changes and commit:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin my-feature-branch
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or feedback, please contact [Nipuna-Lakruwan](mailto:senarath.lakruwan@gmail.com).
