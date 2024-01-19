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
        skillsCMD()
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

function skillsCMD() {
    document.querySelector('#one').style.opacity = 1;
    setTimeout(function() {
        document.querySelector('#two').style.opacity = 1;
    }, 600);
    
    setTimeout(function() {
        document.querySelector('#three').style.opacity = 1;
    }, 1600);
    
    setTimeout(function() {
        document.querySelector('#four').style.opacity = 1;
    }, 2000);
    
    setTimeout(function() {
        document.querySelector('#five').style.opacity = 1;
    }, 2400);
    
    setTimeout(function() {
        document.querySelector('#six').style.opacity = 1;
    }, 3700);
    
    setTimeout(function() {
        document.querySelector('#seven').style.opacity = 1;
    }, 3800);
}

function loading() {
    let audio = new Audio('Windows-98-startup-sound.mp3');
    audio.play();
    
    let main = document.getElementById("main")
    main.style.display = "block"

    document.getElementById('l').style.display = "none"
}

document.addEventListener("DOMContentLoaded", function() {
    let main = document.getElementById("main")
    main.style.display = "block"
    document.getElementById('l').style.display = "none"
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
  
