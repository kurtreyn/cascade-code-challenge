# Cascade Code Challenge

## Kurt Reynolds

## Methodology

- To start I took the data provided in the challenge and stored it in a state variable inside the transactionData.js file in the store folder.
- I then created an object called "getters", set the key to "transactions" and the value to return the state.

- I created two components in the components folder Header & Transactions.
- These components were added into the App.vue file for rendering
- The Header component is a simple component that renders the header of the page.
- The Transaction component is where the bulk of the functional logic is.

* In the Transactions component I imported "mapGetters" from the Vuex store. Two computed properties were created to calculate the remaining balance and the ending balance.

* The data from the transactionsData is displayed in respective locations to Recent Transactions and Pending Transactions utilizing the "v-for and "v-if" directives.

## Notes

- Given more time I have created a reusable component for the transaction and utilized props to pass the data for the recent transactions and pending transactions.
- The style is very basic and only made to serve the purpose of making the information more readable to the user.
