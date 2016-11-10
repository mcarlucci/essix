// Expressions w/object literal
let person = {
    name: 'Matt Carlucci',
    age: 29
};

// interpolation and string templates
const tmpl = `Hi! My name is ${person.name} and I'm ${person.age} years old.`;

document.getElementById('content').innerHTML = tmpl;
