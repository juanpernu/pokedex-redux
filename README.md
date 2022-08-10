# Pokedex with Redux

This is a Pokedes with a paginated list of all pokemon. Clicking on one of them render a details page of a pokemon.

## Getting Started

1. Make sure to have installed the last [Node.js](https://nodejs.org).
2. Clone this repo.
3. On your terminal, run `npm install` to install all the required dependencies.
4. Run `npm start` to start the server.
5. Go to [http://localhost:3000](http://localhost:3000).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies

- [React](https://facebook.github.io/react/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - For managing the local state of some components and to create custom hooks.
- [Redux](https://reactjs.org/docs/hooks-intro.html)
  - For Managing the state of the app.
- [PokeApi](https://pokeapi.co/)
  - The RESTful Pokemon API provided in the challenge with data to use.
- [TailwindCss](https://tailwindcss.com/) and [HeadlessUi](https://headlessui.com/react)
  - A functional CSS approach library. Selected to style the entire App and to manage the responsiveness easily.
  - HeadlessUi is the animation library for TailwindCss.
- [Jest](https://jestjs.io/)
  - _(Already included with React Create App)_ One of the most used testing library with JavaScript. Used to write unit testing code.
- [Axios](https://axios-http.com/)
  - Axios is a simple promise based HTTP client for the browser and node.js.

## Features

- **List all Pokemons**
- **Add a new Pokemon**
- **View an specific Pokemon details**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
