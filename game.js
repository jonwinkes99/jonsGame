"use strict";
const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function player1name(word) {
    let newWord = word.trim().toLowerCase();
    return "okay, player ones name is " + newWord;
}
function getPrompt() {
    rl.question("word ", answer => {
        console.log(player1name(answer));
        getPrompt();
    });
}


//player one then needs to explore a castle and create settings to where eventually
//he finds a ghost. Batlle ghost...then continue to explore. here's a new attack..