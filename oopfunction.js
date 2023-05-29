class main_fun1 {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.salary = c;
    }
    getdata(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.salary);
    }
}
const main_fun1_obj1 = new main_fun1;
main_fun1_obj1.getdata(); // undefined cause we have not passed parameters ;;; solution => in class ===> constructor(a="Name",b=20,c="175000")
const main_fun1_obj2 = new main_fun1("John",35,150);
main_fun1_obj2.getdata();

class main_fun2 {
    constructor(a= "James", b= 20, c= 25000) {
        this.name = a;
        this.age = b;
        this.salary = c;
    }
    getdata(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.salary);
    }
}
const main_fun2_obj1 = new main_fun2;
main_fun2_obj1.getdata(); // undefined cause we have not passed parameters ;;; solution => in class ===> constructor(a="Name",b=20,c="175000")
const main_fun2_obj2 = new main_fun2("John",15,150);
main_fun2_obj2.getdata();



// Function and object  ==> constructor
function main_fun (para1,para2,para3){
    this.name = para1;
    this.age = para2;
    this.salary = para3;
//     Checking output// console.log("Name:" + para1);
//     Checking output// console.log("Age:" + para2);
//     Checking output// console.log("Salary:" + para3);
}
const child_fun = new main_fun("Dhruvik",20,175000);
child_fun.updated_salary = 250000; // Updating data of object with use of object accessor [.]
console.log(child_fun.name); // Accesing data via object data accessor
console.log(child_fun.updated_salary); // Accesing data via object data accessor

// Using set keyword in object
let Person = {
    Name : "Elon",
    Lastname: "Musk",
    Age: 45,
    Position: "CEO",
    set age_update(value){
        this.Age = value;
    }
}
console.log(Person);
Person.Name = "Mr.ELON"; // updating data without using set in object
Person.age_update = 51;  // updating data with using set in object
console.log(Person);
