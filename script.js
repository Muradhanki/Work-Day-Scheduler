//  // Instructs engine to load the HTML and CSS before running the JS
//  $(document).ready(function () {
//     const dayjs = require('dayjs')

// // Create a variable and use query selector to display current date and time
// var displayTime = document.querySelector("#currentDay");

// // Use dayjs to display current date and time in given format
// var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

// displayTime.textContent = currentTime;



// Engine instructior to load the HTML and CSS before running the JS
$(document).ready(function () {
  
    const dayjs = window.dayjs;

    // Create a variable and use query selector to display current date and time
    var displayTime = $("#currentDay"); // Use jQuery selector directly

    // dayjs to display current date and time in the given format
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

    displayTime.text(currentTime); 

    // saveBtn click listener for user input and get row id and save to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // text saving in local storage
        localStorage.setItem(time, text);
    });

    function hourTracker() {
        // Current number of hours using hour() method from dayjs
        var currentHour = dayjs().hour();

        // Loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            // The time checker and the classes adder for background indicators
            if (blockHour < currentHour) {
                $(this).addClass("past").removeClass("present future");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past future").addClass("present");
            } else {
                $(this).removeClass("past present").addClass("future");
            }
        });
    }
    hourTracker();

    // Function creator to loop over time blocks to retrieve and display data from local storage
    function displayText() {
        // Loop over time blocks
        $(".time-block").each(function () {
            var blockHour = $(this).attr("id");
            $(this).children(".description").val(localStorage.getItem(blockHour));
        });
    }
    displayText();
});
