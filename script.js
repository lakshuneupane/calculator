function getHistory(){
    document.getElementsById("history-value").innerText;
}
function printHistory(num){
    document.getElementsById("history-value").innerText= num;
}

function getOutput(){
    document.getElementsById("output-value").innerText;
}

function printOutput(num){
    if (num=""){
        document.getElementsById("output-value").innerText=num;
    }
    else{
    document.getElementsById("output-value").innerText=getFormattedNumber(num);
}
}
function getFormattedNumber(num){
    var n= number(num);
    var value = n.toLocalString("en");
    return value;
}
function reverseNumberFormat(num){
    return number (num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for (var i=0; i<operator.length;i++){
    operator[i].addEventListener("click", function()
 );
}
var operator = document.getElementsByClassName("number");
for (var i=0; i<number.length;i++){
    number[i].addEventListener('click', function(){
        var output= getReverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    }
    );
}
printOutput("123456";)