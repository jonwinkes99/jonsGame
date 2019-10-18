// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Hello terd nugget! Welcome to Jons game!",
    "Hmmm...terd nugget, I dont like that name.",
    "What the hell should I call you?");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log('okay ' + data + ", That's a pretty stupid name but we'll go with it. " + data + ", You officially started the game. It's dark and cold out, you look over to your left and see a very large castle with no visible light showing do you wish to go inside the castele? y/n?");
    }

});


/* First step accomplished. Replace "data" with "player" to clarify whats going on.
Clean up output of first input function. When data/"player" has value, end first
function and figure out how to start next function. Next function should start out by
saying data/"player" either entered castle and runs into a ghost, or doesn't enter
castle and wanders down the trail.
 */
