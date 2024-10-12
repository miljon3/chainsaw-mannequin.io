# sturdychainsaw.io

# Prerequisites
Node.js and npm installed




### List of commands used in order
1. npm create vue@latest
    - y
    - project name: vuepage
    - Typescript : No
    - JSX : No
    - Vue Router : Yes
    - Pinia : No
    - Vitest : No
    - End to End : No
    - EsLint : No
    - Vue Devtools: No

2. cd vuepage
3. npm install
4. npm run Dev , Ctrl + C to terminate
5. npm run build

6. Create a .github/workflows folder
7. Create a deploy.yml file
```
name: Deploy to GitHub Pages

on:
  push:
    branches: [main] # Trigger on push to the main branch
  workflow_dispatch: # Allow manual triggering

permissions:
  contents: write # Grant write access to push changes to the repository

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build the project
        run: npm run build

      - name: Deploy to GitHub Pages
        run: npm run deploy
```
8. Push to git,

9. Enter vite.config.js, set alias to '@': path.resolve(__dirname, 'src'), and add import path from 'path'; to configure for client routing. Also set base to '/REPO-NAME/'

10. Enter src/router/index.js and change all occurances of CreateWebHistory to createWebHashHistory to enable Hash routing instead.

11. npm run build to create a new build containing your changes. You now have a functioning Vue site on github Pages with client-side hash routing.