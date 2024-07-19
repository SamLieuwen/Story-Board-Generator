let i = 0;

function append(e)
{
    e.preventDefault();

    i += 1;
    
    const storyBoard = document.getElementById("storyBoard");

    let story = document.createElement("div");
    story.setAttribute("id", `story-${i}`);
    
    let asa = document.getElementById("asa").value;
    let iwant = document.getElementById("iwant").value;
    let sothat = document.getElementById("sothat").value;
    let acceptanceCriteria = document.getElementById("acceptancecriteria").value;
    let notes = document.getElementById("notes").value;

    story.innerText = "As a " + asa + ", I want " + iwant + ", so that " + sothat + ".\n\nCriteria: \n" + acceptanceCriteria + "\n\nNotes: \n" + notes + "\n\n";
    story.innerHTML += `<input type="button" value="Copy" onclick="copy('${story.innerHTML}')"> `

    storyBoard.prepend(story);
}

function copy(story)
{
    let temp = document.createElement("div");
    temp.innerHTML += story;
    document.body.append(temp);
    const text = temp.innerText;
    temp.remove();

    navigator.clipboard.writeText(text);
}