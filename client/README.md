# form-event
### Setup

* Clone this project

* Install packages for app (call in project directory):
```bash
$ npm install
```
* Then call in `client` directory:
```bash
$ npm install
```

### Run locally

* To run the application, call in project directory:
```bash
# run in developement mode (refreshes the app on source code changes)
$ npm run dev
```

* When running in "dev" mode navigate to [http://localhost:3000/](http://localhost:3000/) to see the application (browser should be opened automatically)


## Code quality

### ESLint && Prettier

[ESLint](http://eslint.org) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
[Prettier](https://prettier.io/) is code formatter. Here it is used for automatic formatting
css, json, md files to maintain common style for every file in easy way.
It will be runned automatically before every commit.
