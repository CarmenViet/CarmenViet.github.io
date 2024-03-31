function imageClick() {
    if (! this.alreadyClicked)
    {
      addimage();
      this.alreadyClicked = true;
    }
  }
  
  function addimage() {
    var img = document.createElement("img");
    img.src = "wabe_love.png";
    img.onclick = imageClick;
    document.body.appendChild(img);
  }