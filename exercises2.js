// try and catch -> error

const person = {
    firstName: 'Naresh',
    lastName: 'Sonagoni',
    // We use getters to access the properties in an object
    get fullName (){
        return `${person.firstName} ${person.lastName}`;
    },
    // we use setters to change or mutate getters.
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('It is not a string: ');
            // we are throwing the exception here and we need to catch it,

        const parts = value.split(' ');
        if (parts.length < 2)
            throw new Error('Enter valid first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
// Here we are catching the error,
try{
    person.fullName = 'Isha Sonagoni';
}

catch (e){
    alert(e);
};

// console.log(person);

// Scope
// A scope of the variable or constant determines where that variable or constant accessible.


let color = 'red'; //-> global constant, its scope is golbal, we can access it throught the programe

// We should always avoid declaring variables globaly, it will create a mess, and each
// function can accidentally change the value


function start(){
    const color = 'blue'; //-> local constant, its scope is local, it is only accessible in the block it specified

    // local constants or variable have precedence over the global variables or  constants.
    console.log(color);
}

// start();
// console.log(color);


// A window object is
// => All the functions, objects are inside the window object are actually methods inside the window object

// this => keyword:

const video = {
    title: 'a',
    tags: ['a', 'b', 'c', 'd'],
    showTags(){ 
        this.tags.forEach(tag => console.log(this.title, tag));
    }
        // const self = this;
        // this.tags.forEach(function(tag){
            //      console.log(self.title, tag);
            // });
    // }
};

// video.showTags();


function playVideo(a, b){
    console.log(this);
}

playVideo.call({Name: 'Naresh'}, 1, 2);
playVideo.apply({Name: 'Naresh'}, [1, 2]);
playVideo.bind({Name: 'Naresh'})();
