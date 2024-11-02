class User {

    constructor (name, surname, email, role){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
    }

    addCourse(course, level) {
        this.course = course;
        this.level = level;
    }

    removeCourse() {
        this.course = null;
        this.level = null;
    }
}

let user1 = new User ("Pablo", "Flores", "test@test.com", "Maestro");
console.log(user1.name, user1.surname, user1.email, user1.role);
user1.addCourse("Matematicas", 3)