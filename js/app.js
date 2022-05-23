function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }

const saveVechile = ()=>{
    let fieldsArray = document.querySelectorAll("form input")
    const vechile = new Object()

    for(i=0; i<fieldsArray.length; i++){
        if(fieldsArray[i].name == "")continue;

        vechile[fieldsArray[i].name] = fieldsArray[i].value
    }

    vechileImage = document.querySelector("#file-ip-1-preview")
    vechile.image = getBase64Image(vechileImage);

    localStorage.setItem(vechile.name, JSON.stringify(vechile))
}

function getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}