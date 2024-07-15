const storyBoard = document.getElementById("storyBoard");

function append()
{
    const story = document.createElement("div");
    let asa = document.getElementById("asa").value;
    let iwant = document.getElementById("iwant").value;
    let sothat = document.getElementById("sothat").value;

    story.textContent = "As a " + asa + ", I want " + iwant + ", so that" + sothat;
    storyBoard.appendChild(story);
}

