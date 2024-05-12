var output = [];
var count = 1;

function fizzBuzzV2() {
    while (count <= 100)
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
}
console.log(output)