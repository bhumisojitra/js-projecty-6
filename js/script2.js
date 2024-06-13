let fage = document.querySelector('.fage');
let cage = document.querySelector('.cage');

class Person {
    constructor(fage, cage) {
        this.fage = fage;
        this.cage = cage;
    }
    father(){
        fage.innerHTML = (`Father Age : ${this.fage}`)
    }
    child(){
        cage.innerHTML = (`Child Age : ${this.cage}`)
    }
}

let b1 = new Person(60, 20);

b1.father();
b1.child();