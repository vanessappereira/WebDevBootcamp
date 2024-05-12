class BellBoy {
    constructor(name, age, language) {
        this.name = name;
        this.age = age;
        this.language = language;
    }
}

class Housekeeper {
    constructor(yearsOfExperience, name, cleaningRepertoire) {
        this.yearsOfExperience = yearsOfExperience;
        this.age = name;
        this.cleaningRepertoire = cleaningRepertoire;
        this.clean = function () {
            alert("Cleaning in progress...");
        };

    }
}
var bellBoy1 = new BellBoy("Timmy", 19, ["French", "English"]);
var housekeeper1 = new Housekeeper(12, "janique", ["bathroom", "restroom"])


