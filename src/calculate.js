

function addition(firstNumber, secondNumber) {
    var firstNumber=document.getElementById('numOne').value;
    var secondNumber=document.getElementById('numTwo').value;
    var summation=parseInt(firstNumber) + parseInt(secondNumber);
    window.alert(summation);
}

function subtraction(firstNumber, secondNumber){
    var firstNumber=document.getElementById('numOne').value;
    var secondNumber=document.getElementById('numTwo').value;
    var subtraction=parseInt(firstNumber) - parseInt(secondNumber);
    window.alert(subtraction);
}
function multiplication(firstNumber, secondNumber){
    var firstNumber=document.getElementById('numOne').value;
    var secondNumber=document.getElementById('numTwo').value;
    var multiplication=parseInt(firstNumber) * parseInt(secondNumber);
    window.alert(multiplication);
} 
function division(firstNumber, secondNumber){
    var firstNumber=document.getElementById('numOne').value;
    var secondNumber=document.getElementById('numTwo').value;
    var division=parseInt(firstNumber) / parseInt(secondNumber);
    window.alert(division);
}

