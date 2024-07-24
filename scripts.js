const today = new Date();
let i = 0;
let hasChanged;

const checkDefault = document.createElement("div");
checkDefault.setAttribute("id", `story-${0}`);
checkDefault.innerText = formatAMPM() + "\n\nAs a , I want , so that .\n\nCriteria: \n\n\nNotes: \n\n\n";

function append(e)
{
    e.preventDefault();

    i += 1;

    localStorage.setItem("index", i);

    const storyBoard = document.getElementById("storyBoard");
    const story = document.createElement("div");
    story.setAttribute("id", `story-${i}`);
    
    const asa = document.getElementById("asa").value;
    const iwant = document.getElementById("iwant").value;
    const sothat = document.getElementById("sothat").value;
    const acceptanceCriteria = document.getElementById("acceptancecriteria").value;
    const notes = document.getElementById("notes").value;

    if (asa != "" && iwant != "" && sothat != "" && acceptanceCriteria != "")
    {
        if (notes != "")
        {
            story.innerText = formatAMPM() + "\n\nAs a " + asa + ", I want " + iwant + ", so that " + sothat + 
            ".\n\nCriteria: \n" + acceptanceCriteria + "\n\nNotes: \n" + notes + "\n\n";
        }
        else
        {
            story.innerText = formatAMPM() + "\n\nAs a " + asa + ", I want " + iwant + ", so that " + sothat + 
            ".\n\nCriteria: \n" + acceptanceCriteria + "\n\n";
        }
        
        story.innerHTML += `<button onclick="copy('${story.innerHTML}')">Copy</button> <button onclick="saltCard('${story.innerHTML}')">Salt</button>`;
        
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
    else
    {
        alert("Missing required data");
        i -= 1;
    }
}

function checkChange(story)
{
    const currentTemp = document.createElement("div");
    currentTemp.setAttribute("id", `story-${i}`);
    
    currentTemp.innerHTML += story;
    document.body.append(currentTemp);
    document.body.append(checkDefault);
    
    const current = currentTemp.innerText.slice(formatAMPM().length + 2);

    for (let j = i - 1; j >= 0; j--)
    {   
        const storyPath = document.getElementById(`story-${j}`);
        const previousTemp = document.createElement("div");
        
        previousTemp.innerHTML = storyPath.innerHTML;
        document.body.append(previousTemp);

        const previousStory = previousTemp.innerText.slice(formatAMPM().length + 2);
        previousTemp.remove();

        if (current != previousStory)
        { hasChanged = true; }
        else { hasChanged = false; break; }
    }

    currentTemp.remove();
    checkDefault.remove();
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

function saltCard(story)
{
    let temp = document.createElement("div");
    temp.innerHTML += story;
    const text = temp.innerText;
    temp.remove();

    const asa = text.slice(12, text.indexOf("want") - 4);
    const iwant = text.slice(text.indexOf("want") + 5, text.indexOf("that") - 5);
    const sothat = text.slice(text.indexOf("that") + 5, text.indexOf("Criteria:") - 1)

    document.getElementById("asa").value = asa;
    document.getElementById("iwant").value = iwant;
    document.getElementById("sothat").value = sothat;
    
    if (text.indexOf("Notes:") < 1)
    {
        const acceptanceCriteria = text.substring(text.indexOf("Criteria:") + 10);

        document.getElementById("acceptancecriteria").value = acceptanceCriteria;
    }
    else
    {
        const acceptanceCriteria = text.substring(text.indexOf("Criteria:") + 10, text.indexOf("Notes:"));
        const notes = text.substring(text.indexOf("Notes:") + 7);
        
        document.getElementById("acceptancecriteria").value = acceptanceCriteria;
        document.getElementById("notes").value = notes;
    }
}

function clearTextarea(e)
{   
    e.preventDefault();

    document.getElementById("form").reset();
}

function autoGrow(element) 
{
    element.style.height = "0px";
    element.style.height = (element.scrollHeight) + "px";
}

function formatAMPM() 
{
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}