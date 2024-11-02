class User {

    constructor (name, surname, email, role){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];        
    }

    addCourse(course, level){        
        this.courses[course] = level;               
    }

    removeCourse(course) {
        if (this.courses[course]) {
            delete this.courses[course];            
        } else {console.log("Error no hay curso a eliminar");}        
    }
    
}

let user1 = new User ("Pablo", "Flores", "test@test.com", "Maestro");
console.log(user1.name, user1.surname, user1.email, user1.role);

user1.addCourse("Matematicas", 3);
console.log(user1.courses);

user1.removeCourse("Matematicas");
console.log(user1);

