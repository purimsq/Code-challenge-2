
//Write a JavaScript function that accepts two numbers to generate an array between them.
function rangeBetween(num1, num2){

    let output = [];

    for (let i = num1; i <= num2; i++){
        output.push(i)
    };

    return output
}

console.log(rangeBetween(2,7))
