var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = prompt("Isnt that comfy?");
} else if (response === "gaze") {
    response = prompt("Ah the serenity, would you like a coffee or tea?");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

if(response === "yes"){
    response = prompt("Thats a little better isnt it?") || "no";
} else if (response === "coffee") {
    response = prompt("1 or 2 sugars?");
} else if (response === "no") {
    response = prompt("This is all we have today, how about a beer?");
} else if (response === "tea") {
    response = prompt("Peppermint or green tea?");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

if(response === "1"){
    response = prompt("coming right up!") || "2";
} else if (response === "coffee") {
    response = alert("Youre a caffiene freak!");
} else if (response === "ok") {
    response = alert("Then your only option is the pub down the road!") || yes;
} else if (response === "2") {
    response = prompt("Sweet tooth I see!");
} else if (response === "Peppermint") {
    response = prompt("Good on ya for keeping it healthy!");
} else if (response === "green tea") {
    response = alert("Coming right up, enjoy your sleep!");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}
