var display = document.getElementById("display");
function getValue(btnValue){
    display.value+=btnValue
}
function calc(){
    var a = display.value;
    var ans = eval(a);
    display.value = ans;
}
function clearAns(){
    display.value = ""; 
}
function clearAns2(){
    display.value = display.value.substr(0,display.value.length-1); 
}