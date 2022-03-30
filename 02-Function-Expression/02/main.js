```js
const showModal = alert;
showModal("Execute modal"); // *  Execute modal 
``````js
const showModal = alert();
showModal("Execute modal"); // ** error because showModal is not function. alert is a function of windows
```;
