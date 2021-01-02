class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(stReg) {
        const check = this.students.filter(s=>s.email===stReg.email);
        if (check.length === 0) {
            this.students.push(stReg);
            console.log(`${stReg.name}, email: ${stReg.email} is now registered for ${this.name} boot camp level ${this.level}.`);
        } else {
            console.log(`Student ${stReg.email} already exists.`);
        }
        return this.students;
    }
}