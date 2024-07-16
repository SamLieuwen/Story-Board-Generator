function append(e)
{
    e.preventDefault();
    
    const storyBoard = document.getElementById("storyBoard");
    const story = document.createElement("div");
    
    let asa = document.getElementById("asa").value;
    let iwant = document.getElementById("iwant").value;
    let sothat = document.getElementById("sothat").value;
    let text = document.createTextNode("As a " + asa + ", I want " + iwant + ", so that" + sothat);
    
    story.appendChild(text);
    storyBoard.prepend(story);
}

