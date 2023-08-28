const person = {
    name: 'Max',
    age: 29,
    greet() {
        // this is refer to name and age
        console.log('Hi, I am ' + this.name, + 'I am ' + this.age);
    }
};
person.greet();

console.log(person);


// spread operator
const hobbies = ['Sports','Cooking'];


console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

hobbies.push('Programming');
const copiedArray = [...hobbies];
console.log(copiedArray);



// rest operator 
const arrayList = (...args) => {
    return args

}

console.log(arrayList(1,2,3,4))


// Destructuring
const printName = ({ name, age }) => {
    console.log(name);

}
printName(person);

const { name, age} = person;
console.log(name,age);



//Async Code and Promises
const fetchData = callback => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });

    return promise;

};


setTimeout(() => {
    console.log('Timer is Done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');