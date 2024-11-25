function writeText() {
    document.write("This is my text");
    }

function writeText2(){
    // alert("this is my text")
}

function changeColor(aRef, aColor) {
    if (aRef!== null) {
    aRef.style.color = aColor; 
    console.log(aRef.style);
    }
    // changeColor(aRef.parentNode, aColor)
   
}