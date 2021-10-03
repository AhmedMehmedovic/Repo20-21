let textarea = document.getElementById("textarea");
let dugmic = document.getElementsByClassName("dugmic");

let caps = document.getElementById("caps");
let body = document.getElementsByTagName("body");
let arr = Array.from(document.querySelectorAll("button"));
let caps_status = 0;

let shift = document.getElementById("shift");
let num1 = document.getElementsByClassName("dugmic")[0];
let num2 = document.getElementsByClassName("dugmic")[1];
let num3 = document.getElementsByClassName("dugmic")[2];
let num4 = document.getElementsByClassName("dugmic")[3];
let num5 = document.getElementsByClassName("dugmic")[4];
let num6 = document.getElementsByClassName("dugmic")[5];
let num7 = document.getElementsByClassName("dugmic")[6];
let num8 = document.getElementsByClassName("dugmic")[7];
let num9 = document.getElementsByClassName("dugmic")[8];
let num10 = document.getElementsByClassName("dugmic")[9];

arr.forEach((item) => {
   
var text = item.innerHTML;

  item.onclick = function () {

    if(caps_status == 1){
        text = item.innerHTML.toUpperCase();
    }else{
        text = item.innerHTML;
    }
    if(text === "Space" || text === "SPACE"){
     return textarea.innerHTML += " ";
    }else if(text === "Backspace" || text === "BACKSPACE"){
        return textarea.innerHTML = textarea.innerHTML.substring(0,textarea.innerHTML.length - 1);    
    }else if(text === "Caps Lock" || text === "CAPS LOCK"){
        textarea.innerHTML += "";
        if(caps_status == 1) {
            caps_status = 0;
            for(i=9; i<dugmic.length; i++) {
                dugmic[i].style.textTransform = "none";
            }   
        }else{
            caps_status = 1;
            for(i=9; i<dugmic.length; i++) {
                dugmic[i].style.textTransform = "uppercase";
            }            
        }
    }else if(text === "OK" || text === "ok"){
        alert(textarea.innerHTML);
    }else if(text === "Shift" || text === "SHIFT"){
     
            if(caps_status == 1) {
                num1.innerHTML = "1";
                num2.innerHTML = "2";
                num3.innerHTML = "3";
                num4.innerHTML = "4";
                num5.innerHTML = "5";
                num6.innerHTML = "6";
                num7.innerHTML = "7";
                num8.innerHTML = "8";
                num9.innerHTML = "9";
                num10.innerHTML = "0";
                caps_status = 0;
                for(i=9; i<dugmic.length; i++) {
                    dugmic[i].style.textTransform = "none";
                }
            }else{
                caps_status = 1;
                for(i=9; i<dugmic.length; i++) {
                    dugmic[i].style.textTransform = "uppercase";
            }
            
        }   
    }else if(text === "Enter" || text === "ENTER"){
        textarea.innerHTML += '\n';
    }else{
        textarea.innerHTML += text;
    }
  };
});