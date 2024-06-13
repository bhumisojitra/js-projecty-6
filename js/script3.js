let print = document.querySelector('.print')

class Employee {
    constructor(){
        this.name = "Welcome To Coding World ....";
    }
    printEmployee(){
        print.innerHTML = this.name;
    }
}

let e1 = new Employee();

e1.printEmployee();