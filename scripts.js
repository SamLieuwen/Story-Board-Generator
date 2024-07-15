var storyBoard = document.getElementById("storyBoard");
var asa = document.getElementById("asa");
var iwant = document.getElementById("iwant");
var sothat = document.getElementById("sothat");

document.getElementById("submit").click();

function click()
{
    var story = new document.createElement("div");
    story.innerHTML = asa + ", " + iwant + ", " + sothat;

    storyBoard.appendChild(story)
}

