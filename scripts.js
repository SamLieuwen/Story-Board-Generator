function append()
{
    const storyBoard = document.getElementById("storyBoard");
    const story = document.createElement("div");
    
    let asa = document.getElementById("asa").value;
    let iwant = document.getElementById("iwant").value;
    let sothat = document.getElementById("sothat").value;

    alert(textnode);

    story.appendChild(textnode);
    storyBoard.appendChild(story);
}

