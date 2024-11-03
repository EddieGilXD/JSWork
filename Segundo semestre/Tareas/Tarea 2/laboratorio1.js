class User {

    constructor (name, surname, email, role){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = {};
        this.messages = [];
    }

    addCourse(course, level){        
        this.courses[course] = level;               
    }

    removeCourse(course) {
        if (this.courses[course]) {
            delete this.courses[course];            
        } else {console.log("Error no hay curso a eliminar");}        
    }

    editCourse(course, level) {
        this.courses[course] = level;        
    }
    
    sendMessage(from, to, message){
        let sendEmail = {
            from: from,
            to: to,
            message: message
        }  
        
        this.messages.push(sendEmail);
    }
    
    showMessageHistory(){
        this.messages.forEach(function(msg) {
            console.log(msg);
        });
    }
}

let user1 = new User ("Pablo", "Flores", "test@test.com", "Maestro");
console.log(user1.name, user1.surname, user1.email, user1.role);

user1.addCourse("Matematicas", 3);
console.log(user1.courses);
console.log(user1);

user1.removeCourse("Matematicas");
console.log(user1);

user1.editCourse("Sociales", 7);
console.log(user1);

user1.sendMessage("Profesor", "Estudiante", "Esto es un mensaje");
user1.sendMessage("Director", "Estudiante", "Este es otro mensaje");
user1.sendMessage("Estudiante", "Estudiante", "Pasame copia del examen");

user1.showMessageHistory();

/*Tarea terminada*/
