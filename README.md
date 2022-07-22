# Demos Using TypeScript and react

React Demos implemented using TS and React Functional Components

[![Netlify Status](https://api.netlify.com/api/v1/badges/97e1271e-d18b-4ab4-b5e5-5f2518f6f88d/deploy-status)](https://app.netlify.com/sites/dev0-react-demos/deploys)

## Index

:book:
- [Demos Using TypeScript and react](#demos-using-typescript-and-react)
  - [Index](#index)
    - [Why Though?](#why-though)
    - [Deployments](#deployments)
    - [TypeScript with React Best Practices](#typescript-with-react-best-practices)
    - [Active Demos](#active-demos)
  - [Roadmap (tentative)](#roadmap-tentative)
    - [Available Scripts](#available-scripts)
    - [Resources Used](#resources-used)
    - [Show your support](#show-your-support)
    - [License](#license)

### Why Though?

One repository that is a collection of demos, small contained projects that can live in its own component, where I can learn TypeScript and further explore my React Skills by implementing simple demos (clock,counter,etc) and optimzation techniques (memoization, composition, debounce, etc).

vs....

creating multiple 'overkill' create-react-app projects for each 'demo' or optimizations

### Deployments

Active Deployments 

- [x] via [ Netlify ](https://dev0-react-demos.netlify.app/)

- [ ] via AWS Services

### TypeScript with React Best Practices 

Each Component is implemented using the following guidelines:

- [ ] Provide Explicit Types for all Values
- [ ] State as a function: next state is based off of the previous State
- [ ] Manage the multiple possible states of variables with an Object (constant)
- [ ] Component Render logis is as function-free as possible (make references vs inline definitions)
- [ ] Clean conditionals 
- [ ] Use JSX shorthands (i.e. someProp vs someProp={true})
- [ ] Opt for string props vs string props with curly brackets

### Active Demos

Simple Demos
- [x] Counter
- [ ] Stop Watch
- [ ] Calculator
- [ ] Analog Clock
- [ ] Digital Clock
- [ ] Image Scraper
- [ ] Login Form
- [ ] Query a Table
- [ ] Searchable Photo Gallery

Optimization Techniques
- [x] Cache Component
  - [x] with useState Hook
- [ ] Memoization
- [ ] Debounce 
- [ ] Throttle
- [ ] Composition

## Roadmap (tentative)

- [x] Create Basic React and TypeScript project using create-react-app tool
  - [x] prune the template project created from create-react-app + keep cool looking react logo
- [x] Deploy main branch to Netlify
- [ ] Add CI/CD via GitHub
  - [ ] create .gh dir
- [ ] Add Testing using Jest     
- [ ] Web Responsive on most devices (i.e. mobile,tablet,laptop, widescreen etc)

### Available Scripts

In the project directory, you can run:

`npm start` Runs the app in the development mode

`npm test` Launches the test runner in the interactive watch mode

`npm run build` Builds the app for production to the `build` folder

### Resources Used

APIs

- [Star Wars API](https://swapi.dev/documentation#base)

Best Practices: React with TypeSript
- [ sitepoint ](https://www.sitepoint.com/react-with-typescript-best-practices/)
- [ DEV ](https://dev.to/ruppysuppy/7-tips-for-clean-react-typescript-code-you-must-know-2da2)
### Show your support

Give a ⭐️ if this project helped you!

### License

License [MIT](https://opensource.org/licenses/MIT)