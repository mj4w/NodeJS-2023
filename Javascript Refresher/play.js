const name = 'Marcel';
let age = 29;
const hobby = true;

const summarizeUser = (userName, userAge, userHobby) => {
    return (
        'Name is ' +
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' +
        userHobby
    );
};

const add = (a, b) => a + b;


// function summarizeUser(name, age, hobby) {
//     return 'Name is ' + name + ', age is ' + age + ' and the user has hobbies ' + hobby
// } 
console.log(add(1,2));

console.log(summarizeUser(name,age,hobby));

