
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Promt-Anforderung eine Zahl ein
Geben Sie über eine Promt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

let number1 = parseFloat(prompt("Bitte die erste Zahl eingeben:"));
let operator = prompt("Bitte Operator eingeben:")
while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "<" && operator !== ">")
 {
    operator = prompt("Bitte einen der folgenden Operatoren + - * / < > eingeben!")
}
let number2 = parseFloat(prompt("Bitte die zweite Zahl eingeben:"));
let summe;

/**if (operator === "+" ) 
{
    summe = number1 + number2;
} 
else if (operator === "-" ) 
{
    summe = number1 - number2;
} 
else if (operator === "*" ) 
{
    summe = number1 * number2;
} 
else if (operator === "/" ) 
{
    summe = number1 / number2;
} 
else if (operator === "<" ) 
{
    summe = number1 < number2;
} 
else if (operator === ">" ) 
{
    summe = number1 > number2;
} */

if (operator !== "<" && operator !== ">" ) 
{
    summe = summe.toFixed(2);
};


console.log(operator);
console.log(number1 + " " + operator + " " + number2 + " = " + summe);