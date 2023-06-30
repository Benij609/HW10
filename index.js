const Fruits = ["apple", "banana", "orange", "grape", "mango"]
Fruits.push("pineapple")
Fruits.unshift("kiwi")


console.log(Fruits[0])
console.log(Fruits[Fruits.length - 1]);


const selectedFruits = Fruits.slice(1, 4)
console.log(selectedFruits)


const Gindex = Fruits.indexOf("grape")
console.log(Gindex)

const fruitString = Fruits.join(", ")
const fruitsFromString = fruitString.split(",")
console.log(fruitString)
console.log(fruitsFromString)



reversedFruits = ["apple", "banana", "orange", "grape", "mango"]
reversedFruits.push("pineapple")
reversedFruits.unshift("kiwi")
for (let i = reversedFruits.length -1; i >= 0; i--) {
    console.log(reversedFruits[i]);
}


Fruits.sort();
console.log(Fruits)



const email = "john.doe@example.com"
const emailParts = email.split("@")
console.log(email)
console.log(emailParts)


temperatures = [72, 85, 90, 65, 75, 88]
let highTemp = 0;
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > highTemp) {
        highTemp = temperatures[i];
    }
}
console.log(highTemp);



//I used the AI for help
var names = ["Alice", "Bob", "Charlie", "David", "Eva"]
for (var i = 0; i < names.length; i++) {
  console.log(names[i] + " is at index " + i);
}