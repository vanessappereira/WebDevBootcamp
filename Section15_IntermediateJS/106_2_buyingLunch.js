/* 
Who's Buying Lunch? Code Challenge
Write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
Example Input:
    ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output:
    Michael is going to buy lunch today! 
*/
function whosPaying(names){
    let randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber] + "is going to buy lunch today!";
}
console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));