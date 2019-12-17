// Mixins

function mixins(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        console.trace('Eating...');
    }
};

const canWalk = {
    walk: function () {
        console.trace('Walking...');
    }
};

const canSwim = {
    swim: function () {
        console.trace('Swimin..');
    }
};

function GoldFish() {

}

function Person() {
}

mixins(Person.prototype, canWalk, canEat);
// Object.assign(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

mixins(GoldFish.prototype, canEat, canSwim);

const goldFish = new GoldFish();
console.trace(goldFish);