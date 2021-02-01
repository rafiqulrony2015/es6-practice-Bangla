function add(num1, num2 = 35){
    // num2 = num2 || 35;
    return num1 + num2;
}

const total = add(120000, 11);
console.log(total);

// Template

const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good man";
const fullName2 = `${firstName} ${lastName} is a good man`;
console.log(fullName);

const multiLine = "I like you\n"
+ "I talk you\n"
+ "I walk with you\n";
console.log(multiLine);

const multiLine2 =`I like you
I talk you
I walk with you`

console.log(multiLine2);


//Arrow

// function doubleIT(num) {
//     return num * 2;
// }

// 

const doubleIT = num => num*2;
const result = doubleIT(41);
console.log(result);

const addNum = (x, y) => x + y;
const result2 = addNum(40, 70);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(35, 6);
console.log(result4);