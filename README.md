# Demos Using TypeScript and React

React Demos implemented using TS and React Functional Components

[![Netlify Status](https://api.netlify.com/api/v1/badges/97e1271e-d18b-4ab4-b5e5-5f2518f6f88d/deploy-status)](https://app.netlify.com/sites/dev0-react-demos/deploys)

## Index

:book:
  - [Why Though?](#why-though)
  - [Deployments](#deployments)
  - [TypeScript with React Best Practices](#typescript-with-react-best-practices)
  - [React Code Challenges](#react-code-challenges)
  - [Active Demos](#active-demos)
  - [Roadmap (tentative)](#roadmap-tentative)
  - [Available Scripts](#available-scripts)
  - [Resources Used](#resources-used)
  - [Road Blocks](#personal-road-blocks)
  - [Show your support](#show-your-support)
  - [License](#license)

### Why Though?

One repository that is a collection of demos (small contained projects that can live in its own component), and react-based code challenges where I can learn TypeScript and further explore my React Skills by implementing simple demos (clock,counter,etc), optimzation techniques (memoization, composition, debounce, etc), and react code challenges.

vs....

creating multiple 'overkill' create-react-app projects for each demo or optimization, code challenges.

### Deployments

Active Deployments 

- [x] via [ Netlify ](https://dev0-react-demos.netlify.app/)

- [ ] via AWS Services

### TypeScript with React Best Practices 

Each Component is implemented using the following guidelines:

- [ ] Provide Explicit Types for all Values
- [ ] State as a function: next state is based on the previous State
- [ ] Manage the multiple possible states of variables with an Object (constant)
- [ ] Component Render logic is as function-free as possible (make references vs inline definitions)
- [ ] Clean conditionals 
- [ ] Use JSX shorthands (i.e. someProp vs someProp={true})
- [ ] Opt for string props vs string props with curly brackets

### React Code Challenges

Using TypeScript, solve LinkedIn [React.js Code Challenges](https://www.linkedin.com/learning/react-js-code-challenges/dark-mode?autoplay=true&resume=false)

- [x] **Color Renderer - build a color renderer that will display color swatches on a user interface**
  - [x] **Given**: ColorRenderer, Color Component
  - [x] **Requirements**: Update the ColorRender component to display one instance of the Color Component for each color in the array of colors

- [ ] DarkMode - implement a component that allows you to change from light to dark
  - [ ] **Given**: 
  - [ ] **Requirements**:
    - [ ] when darkmode button is clicked the page should be displayed in darkmode
    - [ ] when lightmode button is clicked the page should be displayed in lightmode

### Active Demos

Simple Demos
- [ ] Analog Clock
- [ ] Calculator
- [x] Counter
- [ ] Digital Clock
- [ ] Image Scraper
- [x] Login Form
  - Sub Features:
  - [ ] Signup Form
  - [ ] Reset Password Form
- [ ] Auth0 Login Form
  - Sub Features:
  - [ ] Signup Form
  - [ ] Reset Password Form
- [ ] Query a Table
- [ ] Searchable Photo Gallery
- [ ] Streak Counter
- [ ] Stop Watch

Optimization Techniques
- [x] Cache Component
  - [x] with useState Hook
  - [ ] with useRef Hook
- [ ] Composition
- [ ] Debounce 
- [ ] Memoization
- [ ] Throttle

### Demo Functionality and Features

- [ ] **Counter Component**

- [x] **Login Component**
    - [x] Display Login form with username, password, login button, rememebr me, sign-up on the screen
    - [x] User can input the values on the displayed form
    - [x] Validation of the username and password
    - [x] Display error message on login fail
    - [x] Display success message when login succeeds
**Login Sub Components** :
  - [ ] **Profile Component**
    - [x] Display personalized content ( users personal data ) when login successfull
    - [x] Display welcome message, username, last session
    - [x] Display Logout Button 
    - [x] User is able to sign out
    - [ ] StretchGoal: User is able to update Profile Pic
    - [ ] StretchGoal: User is able to update Username
  - [ ] **Signup Component**
    - [ ] Display Modal that displays Signup form with new username, new password, signup button
    - [ ] Display success message when signup succeeds
    - [ ] Redirect user to Login Form
  - [ ] **Reset Password Form Component**
    - [ ] User is able to reset password 
    - [ ] Display Modal that displays Reset Password form when click hyperlink
    - [ ] Redirect user to Login Form

## Roadmap (tentative)

- [x] Create Basic React and TypeScript project using create-react-app tool
  - [x] prune the template project created from create-react-app + keep cool-looking react logo
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

### Personal Road Blocks

ssh key identity missing
- problem: on local branch push to remote repo
- outputs error: 
    ```
    git push origin style/Counter-Component/MUI-styling
    git@github.com: Permission denied (publickey).
    fatal: Could not read from remote repository.
- solution: Generate a new SSH key and add it to the ssh-agent on local machine 
  - using [GitHub Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Show your support

Give a ⭐️ if this project helped you!

### License

License [MIT](https://opensource.org/licenses/MIT)