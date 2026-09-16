export{}
class Student {
    constructor(private name: string, private major: string) {}
    getStudentInfo(){
        return `Student Name: ${this.name} Major ${this.major}`;
    }
}


class Teacher {
    constructor(private name: string, private faculat: string) {}
    getTeacherInfo(){
        return `Teacher Name: ${this.name} Facalty ${this.faculat}`;
    }
    teach(student:Student){
        console.log(`Teacher:${this.name} สอน Student: ${student.getStudentInfo()}`);
    }
}


const s1 = new Student ("วันเพ็ญ","Computer Science");
const s2 = new Student ("วันแพน","Computer Science");
const t1 = new Teacher ("สามารถ","Science");


t1.teach(s1);
t1.teach(s2);
