

let display = document.getElementById("display");


function calculate(val){
    display.value += val;
}

function emptyDisplay(){
    display.value = "";
}

function answer(){
    let equal = display.value;
    let result = eval(equal);
    display.value = result;

}

