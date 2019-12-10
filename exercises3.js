
// Constructor Function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    };

    this.email = function () {
        return `${this.firstName}.${this.lastName}@company.com`;
    }
}

const naresh = new Person('Naresh', 'Sonagoni', '06-10-1989');

// console.log(naresh.getBirthYear());

// console.log(naresh.email());


class People {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    birthYear() {
        return this.dob.getFullYear();
    }
}

const peep = new People('Isha', 'Sonagoni', '24-02-2019');

console.log(peep.fullName());

