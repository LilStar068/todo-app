# Todo App: devchallenges.io

This is an exercise of the [Todo App](https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5) from [devchallenges.io](https://devchallenges.io/).

Tech used:
* React
* Redux
* Tailwind
* Formik
* localStorage

## `src/App.js`
Here I verify if the localStorage has "to-do" items, if yes then update the reducer using them, if not it updates the reducer with an empty array. While this is happening a "Loading..." message is displayed.

## `src/redux/reducer.js`
Here is all the logic of the reducer and other things:
* Create reducers for filter and todos
* Create methods for setting reducers
* A method to select "todos" using filters
* Save the state on localStorage



### To run this project:
```
npm i
npm start
```

I'll appreciate any feedback, thank you for being here❤️