let student11 = document.querySelector('.student11');
let faculty11 = document.querySelector('.faculty11');
let peon11 = document.querySelector('.peon11');

class School {
    constructor(name, email, contact){
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    student(){
        student11.innerHTML = (`NAME : ${this.name} <br> EMAIL : ${this.email} <br> CONTACT : ${this.contact}`);
    }
    faculty(){
        faculty11.innerHTML = (`NAME : ${this.name} <br> EMAIL : ${this.email} <br> CONTACT : ${this.contact}`);
    }
    peon(){
        peon11.innerHTML = (`NAME : ${this.name} <br> EMAIL : ${this.email} <br> CONTACT : ${this.contact}`);
    }
}

let studentData = new School("moni", "moni@gmail.com", "9856741236");
studentData.student();

let facultyData = new School("suresh", "suresh@gmail.com", "9889567946");
facultyData.faculty();

let peonDate = new School("rakesh", "rakesh@gmail.com", "9897465896");
peonDate.peon();