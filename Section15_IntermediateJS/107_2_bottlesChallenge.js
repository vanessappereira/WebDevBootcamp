//99 botles challenge

var numberOfBottles = 99;

function bottlesChallenge(){
    while(numberOfBottles >= 0){
        var bottleWord = numberOfBottles === 1? "bottle" : "bottles";
        if (numberOfBottles === 0){
            console.log(`No more ${bottleWord} of beer on the wall`);
            break;
        }
        console.log(`${numberOfBottles} ${bottleWord} of beer on the wall`);
        console.log(`${numberOfBottles} ${bottleWord} of beer,`);
        console.log("Take one down, pass it around, ");
        numberOfBottles--;
    }
}
bottlesChallenge();