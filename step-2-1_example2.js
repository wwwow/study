const items = [
  {
    id: 1,
    text: "hello",
    average: 0.3333
  },
  {
    id: 2,
    text: "bye",
    average: 0.444
  }
];

const texts = items.map(item => item.text);
const numbers = items.map(item => item.id);
const average = items.map(item => item.average.toFixed(3));
console.log("text는 " + texts);
console.log("number는 " + numbers);
console.log("average는 " + average);