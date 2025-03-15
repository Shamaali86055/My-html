function btn() {
  let pop = document.querySelector(".pop");
  let a = document.querySelector(".a");
  let h3 = document.querySelectorAll("h3");
  
  pop.style.display = "none";
  a.hidden = false;
  
  h3.forEach(h3 => {
    h3.hidden = true;
  })
  
}

function login() {
  let name = document.getElementById("name").value.trim().toLowerCase();
  let pin = document.getElementById("pin").value;
  let b = document.querySelector(".b");
  let a = document.querySelector(".a");
  
  if (name === "hhh" && pin === "5555") {
    document.getElementById("para").innerText = " Hallo" + name + "!";
     b.hidden = false;
     a.hidden = true;
  } else {
    alert("Name Aur Pin Galat Hai");
    return;
  }
}



const repoURL = "https://api.github.com/repos/Shamaali86055/Images-video-/contents/";
let mediaFiles = [];

async function loadMedia() {
  try {
    const response = await fetch(repoURL);
    const data = await response.json();
    
    // Sirf images aur videos ko filter karna (jpg, jpeg, png, mp4, webm, ogg)  
    mediaFiles = data.filter(file => file.name.match(/\.(jpg|jpeg|png|mp4|webm|ogg)$/i))
      .map(file => ({ name: file.name, url: file.download_url }));
    
  } catch (error) {
    console.error("Error loading media:", error);
  }
}

function search() {
  let input = document.getElementById("sear").value.trim().toLowerCase();
  let imgTag = document.getElementById("resultImage");
  let videoTag = document.getElementById("resultVideo");
  
  if (input === "") {
    alert("Please enter a media name!");
    return;
  }
  
  let foundMedia = mediaFiles.find(file => file.name.toLowerCase().includes(input));
  let c = document.querySelector(".c");
  let b = document.querySelector(".b");
  
  b.hidden = true;
  c.hidden = false;
  
  if (foundMedia) {
    if (foundMedia.name.match(/\.(jpg|jpeg|png)$/i)) {
      imgTag.src = foundMedia.url;
      imgTag.hidden = false;
      videoTag.hidden = true;
    } else {
      videoTag.src = foundMedia.url;
      videoTag.hidden = false;
      imgTag.hidden = true;
      videoTag.play();
    }
  } else {
    c.hidden = true;
    b.hidden = false;
    alert("Media not found!");
  }
}

function fulls(element) {  
    if (!document.fullscreenElement) {  
        if (element.requestFullscreen) {  
            element.requestFullscreen();  
        } else if (element.mozRequestFullScreen) {  
            element.mozRequestFullScreen();  
        } else if (element.webkitRequestFullscreen) {  
            element.webkitRequestFullscreen();  
        } else if (element.msRequestFullscreen) {  
            element.msRequestFullscreen();  
        }  
    } else {  
        if (document.exitFullscreen) {  
            document.exitFullscreen();  
        } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } else if (document.webkitExitFullscreen) {  
            document.webkitExitFullscreen();  
        } else if (document.msExitFullscreen) {  
            document.msExitFullscreen();  
        }  
    }  
}


// Jab page load ho tabhi media fetch ho jaye  
loadMedia();
