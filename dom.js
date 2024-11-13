
//CSS: # -> identificador; . -> clase
let tagBody = document.getElementsByTagName("body");
let tagMain = document.getElementsByTagName("main");
let mainHeader = document.getElementById("mainHeader");
let thunder = document.getElementsByClassName("thunder");


console.log("Body: ", tagBody);
console.log("MainHeader: ", mainHeader);
console.log("Thunder: ", thunder);

//tagBody[0].style = "background-color: lightcyan";
tagBody[0].style.backgroundColor = "lightcyan";

//tagMain[0].style = "padding-top: 1rem; padding-left: 1rem;"
tagMain[0].style.paddingTop ="1rem";
tagMain[0].style.paddingLeft ="1rem";

// Darle estilo igual que en nuestro CSS a las siguientes etiquetas utilziando JS
// p, img, section, ul, ol


//console.log("style: ", tagMain[0].style);


//console.log("Body hijos: ", tagBody[0].childNodes);


/*
//Esperar a que cargue la ventana (con script dentro de head)
window.onload = function () {
    //CSS: # -> identificador; . -> clase
    let tagBody = document.getElementsByTagName("body");
    let mainHeader = document.getElementById("mainHeader");
    let thunder = document.getElementsByClassName("thunder");


    console.log("Body: ", tagBody);
    console.log("MainHeader: ", mainHeader);
    console.log("Thunder: ", thunder);

    tagBody[0].style = "background-color: lightcyan";
}
*/
