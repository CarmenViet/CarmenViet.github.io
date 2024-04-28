alreadyClicked = false
keysPressed = []
function imageClick() {
    if (!alreadyClicked)
    {
      addimage();
      alreadyClicked = true;
    }
  }
  
function addimage() {
    var img = document.createElement("img");
    img.src = "wabe_love.png";
    img.id = "wabe_love"
    img.onclick = imageClick;
    document.body.appendChild(img);
  }

document.addEventListener('keydown', 
  function(event) {
    keysPressed.push(event.code);
    let lastFourPressed = keysPressed.slice(-4);
    if (lastFourPressed[0] == "KeyW" && lastFourPressed[1] == "KeyA" && lastFourPressed[2] == "KeyB" && lastFourPressed[3] == "KeyE")
    {
      wabe.width = "1100";
      wabe.height = "800";
    }
  }
)
