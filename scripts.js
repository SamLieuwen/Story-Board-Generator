let i = 0;
let hasChanged;

const checkDefault = document.createElement("div");
checkDefault.setAttribute("id", `story-${0}`);
checkDefault.innerText += "As a , I want , so that .\n\nCriteria: \n\n\nNotes: \n\n\n";

function append(e)
{
    e.preventDefault();

    i += 1;
    hasChanged = false;
    
    const storyBoard = document.getElementById("storyBoard");
    const story = document.createElement("div");
    story.setAttribute("id", `story-${i}`);
    
    const asa = document.getElementById("asa").value;
    const iwant = document.getElementById("iwant").value;
    const sothat = document.getElementById("sothat").value;
    const acceptanceCriteria = document.getElementById("acceptancecriteria").value;
    const notes = document.getElementById("notes").value;

    story.innerText = "As a " + asa + ", I want " + iwant + ", so that " + sothat + ".\n\nCriteria: \n" + acceptanceCriteria + "\n\nNotes: \n" + notes + "\n\n";
    story.innerHTML += `<input type="button" value="Copy" onclick="copy('${story.innerHTML}')"> `

    checkChange(story.innerHTML);
    
    if (hasChanged == true)
    {
        storyBoard.prepend(story);   
    }
    else
    {
        alert("Data hasn't changed or already exists");
        i -= 1;
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

function checkChange(story)
{
    const temp = document.createElement("div");
    temp.setAttribute("id", `story-${i}`);
    temp.innerHTML += story;
    document.body.append(temp);
    const current = temp.innerText;

    document.body.append(checkDefault);

    console.log(current);

    for (let j = i - 1; j >= 0; j--)
    {   
        const storyPath = document.getElementById(`story-${j}`);
        const temp = document.createElement("div");
        temp.innerHTML = storyPath.innerHTML;
        document.body.append(temp);
        const previousStory = temp.innerText;
        temp.remove();
    
        console.log(previousStory + j);

        if (current != previousStory)
        { hasChanged = true; }
        else { break; }
    }

    temp.remove();
    checkDefault.remove();
}