 // Instructs engine to load the HTML and CSS before running the JS
 $(document).ready(function () {
    const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()
// Create a variable and use query selector to display current date and time
var displayTime = document.querySelector("#currentDay");

// Use dayjs to display current date and time in given format
var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

displayTime.textContent = currentTime;
});