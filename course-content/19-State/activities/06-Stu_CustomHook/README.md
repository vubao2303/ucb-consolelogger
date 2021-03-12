In this activity you will review the use of Custom Hooks by examining a custom hook `useDebounce` Hook that will delay the invoking of a function for a given number of milliseconds.

  # Instructions

  * Replace your React application's src folder with [Unsolved/src](Unsolved/src).

  * Start the application in dev mode by running `npm start` in your terminal.

  * Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

  * Review this application:

  * Review the Custom Hook called `useDebounce` that takes in the two parameters `value` and `delay`.

  * Review the use of `setTimeout` to handle the value of the debouncer.

  * Review the `Search` page so that the useEffect Hook is listening for the value returned from the `useDebounce` Hook. Pass in a `delay` value of 500.

  * The application should only search for a new article if there has been a period of 500 milliseconds without any user input.
