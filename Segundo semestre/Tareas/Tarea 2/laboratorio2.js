import {User} from "./laboratorio1";
class ExtendedUser extends User {
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(value) {
        let [firstName, lastName] = value.split(' ');
        this.name = firstName;
        this.surname = lastName;
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: "teacher"});
    }
}
class Student extends ExtendedUser {
    constructor({name, surname, email}){
        super({name, surname, email, role: "student"})
    }
}


let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); 
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); 
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); 

"Tarea hecha, pero tengo un error ya que son dos archivos distintos no logro hacer que funcione, si funciona pero por alguna razon node no me funciona ya que esta fuera de modulo"