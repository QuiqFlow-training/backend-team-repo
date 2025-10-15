# Backend Team - Core Utilities & Models

This repository contains the core shared logic for the backend team, including data models (`User`, `Admin`) and reusable utility functions. The project is configured with a professional toolchain including Jest for testing, and ESLint/Prettier for code quality and formatting.

---

## Getting Started

To get a local copy of the project set up and running, please follow these steps.

### Prerequisites

Ensure you have the following software installed on your local machine:
* [Node.js](https://nodejs.org/) (LTS version is recommended)
* [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_REPOSITORY_URL>
    ```

2.  **Navigate into the project directory:**
    ```sh
    cd backend-team-repo
    ```

3.  **Install all the necessary dependencies:**
    ```sh
    yarn install
    ```

---

## Available Scripts

In the project directory, you can run the following commands:

### `yarn format`

This command runs Prettier to automatically format all of the source code, ensuring a consistent style across the entire project. It's a good practice to run this before committing your code.

### `yarn lint`

This command runs ESLint to statically analyze the code for potential bugs, style issues, and unused variables. The command will report any problems it finds. To automatically fix fixable problems, you can run:
```sh
yarn lint --fix