function dragAbout(X,Y) {
    let wrapper_skills = document.getElementById(X);
    let header_skills = document.getElementById(Y);
  
    function onDrag({ movementX, movementY }) {
      let getStyle = window.getComputedStyle(wrapper_skills);
      let leftVal = parseInt(getStyle.left) || 0;
      let topVal = parseInt(getStyle.top) || 0;
      wrapper_skills.style.left = `${leftVal + movementX}px`;
      wrapper_skills.style.top = `${topVal + movementY}px`;
    }
  
    header_skills.addEventListener("mousedown", function() {
      header_skills.addEventListener("mousemove", onDrag);
    });
  
    document.addEventListener("mouseup", function() {
      header_skills.removeEventListener("mousemove", onDrag);
    }); 
}

function openCloseProjects() {
    document.getElementById("projects").addEventListener("dblclick", () => {
        document.getElementById('A').style.display = "block"
    })

    document.getElementById("p-close").addEventListener("click", () => {
        document.getElementById('A').style.display = "none"
    })
}

function openCloseSkills() {
    document.getElementById("skills").addEventListener("dblclick", () => {
        document.getElementById('C').style.display = "block"
    })

    document.getElementById("s-close").addEventListener("click", () => {
        document.getElementById('C').style.display = "none"
    })
}

function openCloseAbout() {
    document.getElementById("about").addEventListener("dblclick", () => {
        document.getElementById('E').style.display = "block"
    })

    document.getElementById("a-close").addEventListener("click", () => {
        document.getElementById('E').style.display = "none"
    })
}
document.addEventListener("DOMContentLoaded", function() {
    dragAbout("A", "B")
    dragAbout("C", "D")
    dragAbout("E", "F")
    openCloseProjects()
    openCloseSkills()
    openCloseAbout()

    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();
    document.getElementById('times').innerHTML = time;
  });
  