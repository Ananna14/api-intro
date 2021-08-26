// javaScript object notation 
//JSON
const user = { id: 11, name: 'gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    name: 'Alia store',
    address: 'ranbir road',
    products: ['laptop', 'mobile', 'papsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
}
const shopStringify = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringify);

const converted = JSON.parse(shopStringify);
console.log(converted);