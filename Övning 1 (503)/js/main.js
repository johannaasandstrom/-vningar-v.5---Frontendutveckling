import { createButton } from "./components/button.js";

function hejknapp(){
    alert("Hej världen")
}


function bytfarg(){
    
    if(document.body.style.backgroundColor === "pink"){
            document.body.style.backgroundColor = "black";

        }else{
            document.body.style.backgroundColor = "pink";
        }
    }

    function skrivkonsol(){
        console.log("Hej hej i konsolen skrivs detta meddelande ut")
    }


    const knapp1 = createButton("Hej världen", hejknapp);
    const knapp2 = createButton("Byt färg", bytfarg);
    const knapp3 = createButton("Skriv i konsolen", skrivkonsol);

    document.body.appendChild(knapp1);
    document.body.appendChild(knapp2);
    document.body.appendChild(knapp3);