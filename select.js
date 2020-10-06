function myFunction() {
    var x = document.getElementById("select1")
    var y = x.options[x.selectedIndex].text;

    //document.getElementById("selectionArea").innerHTML = "Found " + y + " options in the list.";
    switch(y){
        case '1':
            document.getElementById("RPIImage").src = "./pics/rpi1.jpg";
            break;
        case '2':
            document.getElementById("RPIImage").src = "./pics/rpi2.jpg";
            break;
        case '3':
            document.getElementById("RPIImage").src = "./pics/rpi3.jpg";
            break;
        case '4':
        document.getElementById("RPIImage").src = "./pics/rpi4.jpg";
        break;
    }

  }