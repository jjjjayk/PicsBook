appendImg = function() {
    const pinBoard = document.querySelector(".pinboard");
    var imgCount = 12;
    for (var i = 1; i <= imgCount; i++) {
        var addDiv = document.createElement("div");
        pinBoard.appendChild(addDiv);
        var newDiv = pinBoard.querySelector("div:last-child");
        newDiv.className = "pin";
        var addImg = document.createElement("img");
        newDiv.appendChild(addImg);
        var newImg = newDiv.querySelector("img");
        newImg.src = "./images/"+i+".jpg";
    };
};