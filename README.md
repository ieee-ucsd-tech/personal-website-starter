This starter code was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

You will need [npm](https://nodejs.org/en/download/), [git](https://git-scm.com/downloads), and a text editor installed. \
[VSCode](https://code.visualstudio.com/Download) is an excellent choice for a text editor.

## Getting Started
Begin by creating a GitHub repository with the repository name `[your-username].github.io`.

Then, run the following lines to download the starter code

```
git clone https://github.com/ieee-ucsd-tech/personal-website-starter.git
cd personal-website-starter
```

and update it so any pushes will be made to your new repository

```
git remote set-url https://github.com/[your-username]/[your-username].github.io.git
```
\
The starter code comes with [Sass](https://sass-lang.com/) preconfigured, and supports absolute imports in the `src` folder.

It also has a (admittedly rudimentary) React component wrapper for [Typed.js](https://github.com/mattboldt/typed.js/) located in `src/components`.

A template component for components and pages is located at `src/pages/Template`.

The general file structure of the starter code is as follows: \
`src/assets`: images, pdfs, and other external files used \
`src/components`: reusable components \
`src/pages`: actual page components, corresponding to a route in `src/index.jsx` \
`src/styles`: global styles
- `typography.scss`: custom typography
- `vars.scss`: any global variables, mixins, etc



## Developing

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`
Builds the app for production to the `build` folder and deploys it to GitHub Pages. \
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. \
Your app is ready to be deployed!

You can learn more about deployment [here](https://create-react-app.dev/docs/deployment/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).