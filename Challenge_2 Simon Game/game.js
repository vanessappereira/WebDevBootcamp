
// Create an array called buttonColours and set to hold the sequence "red", "blue", "green", "yellow".
var buttonColours = ["red", "blue", "green", "yellow"];

// Create an empty array called gamePattern.
var gamePattern = [];

// Create an array called gamePattern and set to an empty array.
var userClickedPattern = [];

// Create a var called level and start at level 0
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        // The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    // Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        // If the user got the most recent answer right in step above, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        // In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");

        // In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");

        // Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Call startOver() if the user gets the sequence wrong.
        startOver();
    }
}


function nextSequence() {
    // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    // Increase the level by 1 every time nextSequence() is called
    level++;

    // Update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);

    // Generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);

    // Create a new variable called randomChosenColour and use the randomNumber from step above to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    // Add the new randomChosenColour generated in step above to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

// Animate the button
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Make sound corresponding to the colour
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
// Create a function called startOver() and call if the user gets the sequence wrong. Inside this function, include reset of values of level, gamePattern and started variables
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
