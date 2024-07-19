const storyBoard = document.getElementById("storyBoard");
let i = 0;
let hasChanged;
let story;
let asa;
let iwant;
let sothat;
let acceptanceCriteria;
let notes;
let tempStory = "As a " + asa + ", I want " + iwant + ", so that " + sothat + ".\n\nCriteria: \n" + acceptanceCriteria + "\n\nNotes: \n" + notes + "\n\n";

function append(e)
{
    e.preventDefault();

    i += 1;
    hasChanged = true;
    
    story = document.createElement("div");
    story.setAttribute("id", `story-${i}`);
    
    asa = document.getElementById("asa").value;
    iwant = document.getElementById("iwant").value;
    sothat = document.getElementById("sothat").value;
    acceptanceCriteria = document.getElementById("acceptancecriteria").value;
    notes = document.getElementById("notes").value;

    story.innerText = "As a " + asa + ", I want " + iwant + ", so that " + sothat + ".\n\nCriteria: \n" + acceptanceCriteria + "\n\nNotes: \n" + notes + "\n\n";
    story.innerHTML += `<input type="button" value="Copy" onclick="copy('${story.innerHTML}')"> `
    
    for (let j = 1; j < i + 1; j++)
    {   
        if (tempStory != document.getElementById(`story-${j}`).innerText)
        { hasChanged = true; }
        else { hasChanged = false; break; }
    }
    
    if (hasChanged == true)
    {
        tempStory = story.innerText;
        storyBoard.prepend(story);
    }
    else
    {
        alert("Data has not changed or already exists");
    }
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