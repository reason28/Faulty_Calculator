/* My Way */

const randomNum=(min,max)=>{
    return Math.floor(Math.random() * (max-min) + min);
}
const numRandom = randomNum(1,100);
console.log(numRandom);



const calc = (x,y,z) =>{
    if (numRandom<10) {
        // Performs faulty calculations
        if (z == "+"){
            return x-y;
        }
        else if (z == "-"){
            return x / y;
        }
        else if (z == "*"){
            return x + y;
        }
        else if (z == "/"){
            return x ** y;
        }
    }
    else{
        // Performs correct calculations
        if (z == "+") {
            return x + y;
        }
        else if (z == "-"){
            return x - y;
        }
        else if (z == "*"){
            return x * y;
        }
        else if (z == "/"){
            return x / y;
        }
    }
}
let x = 20;
let y = 30;
let z = "*";

/* let x = Number(prompt("Enter Number: "));
let y = Number(prompt("Enter Another Number: "));
let z = prompt("Enter The Operator: "); */
result = calc(x,y,z);
console.log(result);

/* Another Way */

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}

