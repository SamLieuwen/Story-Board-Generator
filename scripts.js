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

    story.innerHTML = "<p>As a " + asa + ", I want " + iwant + ", so that " + sothat + ".</p>";
    story.innerHTML += "<p>Criteria: <br>" + acceptanceCriteria + "</p>";
    story.innerHTML += "<p>Notes: <br>" + notes + "</p>";
    story.innerHTML += `<input type="button" value="Copy" onclick="copy('${story.innerText}')"> `

    storyBoard.prepend(story);
}

function copy(story)
{
    navigator.clipboard.writeText(story);
}