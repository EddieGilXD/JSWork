class User {

    constructor ({name, surname, email, role}){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }

    addCourse(course, level){
        let classes = {        
            course: course,
            level: level,
        }
        this.courses.push(classes);
    }
    removeCourse(course) {
        const index = this.courses.findIndex(c => c.course === course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        } else {
            console.log("Error: No hay curso a eliminar");
        }
    }

    editCourse(course, level) {
        this.courses[course] = level;        
    }
    
    sendMessage(to, message){
        let sendEmail = {
            from: this.email,
            to: to.email,
            message: message
        }  
        
        this.messages.push(sendEmail);
    }
    
    showMessagesHistory(){
        this.messages.forEach(function(msg) {
            console.log(`From: ${msg.from}, To: ${msg.to}, Message: ${msg.message}`);
        });
    }
}

// /*let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});*/
// let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
// let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

// student1.addCourse('maths', 2);
// student1.addCourse('physics', 1);
// student1.removeCourse('physics');
// teacher1.addCourse('biology', 3);
// teacher1.editCourse('biology', 4);
// console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
// console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
// teacher1.sendMessage(student1, 'test message');
// teacher1.sendMessage(student1, 'another message');
// teacher1.showMessagesHistory();

/*Tarea terminada finalmente*/
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