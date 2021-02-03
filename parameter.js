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

//threedots

const ages = [10, 20, 30, 40, 80];
const ages2 = [11, 22, 33, 44, 99];
const ages3 = [15, 25, 35, 45, 85];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
const allAges2 = [...ages,...ages2, 6, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const honest = 350;

const totalmax = [650, 450, 350];
// const maximum = Math.max(business,minister,honest);
const maximum = Math.max(...totalmax);
console.log(maximum);


//class constructor

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "My School";
    }
}

const student1 = new Student(32, "Rony");
const student2 = new Student(13, "Raaj");
const student3 = new Student(19, "Richi");

console.log(student1, student2);

console.log(student1.name, student2.name);

console.log(student3);

// inheritance

class Parent{
    constructor(){
        this.fatherName = "Rafiqul";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
        getFullName(){
            return this.name + " " + this.fatherName;
        }
    }


const baby = new Child("Alif");
const baby2 = new Child("Mohammad");
console.log(baby.getFullName());
console.log(baby2.getFullName());


// object, array

const person = {name: 'abc name', age: 17, job: 'facebook', address: 'Dhaka Cantt', phone: '+8801', cousin: 'aa'};

const {phone, cousin} = person;

// const {phone} = person;
// const cousin = person.cousin;

console.log(cousin, phone);
