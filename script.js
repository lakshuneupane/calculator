var firstnum ="";
var secondnum ="";

function getHistory() {
    document.getElementsById("history-value").innerText;
}
function printHistory(num) {
    document.getElementsById("history-value").innerText = num;
}

function getOutput() {
    document.getElementsById("output-value").innerText;
}



function numberclick(num){
   
        firstnum= firstnum+num;
        document.getElementById("historyvalue").innerText = firstnum;
    console.log(num);

}
function getFormattedNumber(num) {
    var n = number(num);
    var value = n.toLocalString("en");
    return value;
}
function reverseNumberFormat(num) {
    return number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");

var operator = document.getElementsByClassName("number");
