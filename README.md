# DemoQA-Playwright-Automation

# DemoQA Playwright Automation

## Overview

This repository contains automated UI tests for the [DemoQA website](https://demoqa.com/) using **Playwright and JavaScript**.

The project focuses on practicing browser automation, validating web elements, interacting with forms, handling browser dialogs, and testing common web application components.

## Technologies Used

- **Playwright** – Browser automation and end-to-end testing
- **JavaScript** – Programming language for test scripts
- **Node.js** – JavaScript runtime
- **npm** – Package and dependency management
- **Git & GitHub** – Version control and project hosting

## Project Structure

```text
demoqa-playwright-automation/
├── .github/
├── tests/
│   ├── alerts.spec.js
│   ├── bookstore.spec.js
│   ├── datepicker.spec.js
│   ├── login.spec.js
│   ├── practice-form.spec.js
│   ├── register.spec.js
│   ├── selectmenu.spec.js
│   ├── textbox.spec.js
│   └── webtables.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

*Note: The structure above assumes these are the actual filenames and extensions. Update it if your project differs.*

## Test Coverage

The repository contains test specifications for the following areas:

| Test file | Test area |
|---|---|
| `alerts.spec.js` | Browser alerts and dialogs |
| `bookstore.spec.js` | Bookstore functionality |
| `datepicker.spec.js` | Date picker interactions |
| `login.spec.js` | Login-related scenarios |
| `practice-form.spec.js` | Form input and submission |
| `register.spec.js` | Registration scenarios |
| `selectmenu.spec.js` | Select menu interactions |
| `textbox.spec.js` | Text box input and validation |
| `webtables.spec.js` | Web table interactions |

The exact scenarios and assertions depend on the implementation of each test file.

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Visual Studio Code or another code editor (optional)

## Installation

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd demoqa-playwright-automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/alerts.spec.js
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

## Test Reports

After test execution, view the HTML report using:

```bash
npx playwright show-report
```

Playwright generates test results and reports according to the configuration in `playwright.config.js`.

Generated reports and test results should generally remain untracked by Git unless you intentionally publish them as project artifacts.

## Learning Objectives

- Practice end-to-end UI automation using Playwright
- Interact with common web elements and forms
- Automate browser dialog handling
- Organize test cases using Playwright test specifications
- Execute tests and analyze test results
- Build practical QA automation skills

