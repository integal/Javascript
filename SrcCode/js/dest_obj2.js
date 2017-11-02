let book = { title: 'JavaPoketReference', publish: '技術評論社', price: 2680, other: { keywd: 'java SE 8', logo: 'logo.jpg'} };
let { price, title, other:{ keywd }} = book;

console.log(title);
console.log(other);
console.log(keywd);
