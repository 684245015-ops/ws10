export{}
class Patient {
    constructor(private name: string, private age: number){}
    showInfo(){
        return `ผู้ป่วย ${this.name} อายุ ${this.age}`;
    }
}


class Doctor {
    constructor(private name: string, private special: string){}
    showInfo(){
        return `แผทย์ ${this.name} เชี่ยวชาญ ${this.special}`;
    }
    examine(p:Patient){
        console.log(this.showInfo(), " ตรวจคนไข้ ",p.showInfo());
    }
    diagnose(p: Patient, diagnosis: string){
        console.log(this.showInfo(), " วินิจฉัย ", p.showInfo(),  " เป็นโรค ", diagnosis);
    }
}


const doctor = new Doctor("สำราญ","หัวใจ");
const p1 = new Patient("วันดี",25);
const p2 = new Patient("วันเวง",50);


doctor.examine(p1);
doctor.examine(p2);
doctor.diagnose(p1, "หัวใจเจ้นผิดจังหวะ");
doctor.diagnose(p2, "หัวใจเจ้นล้มเหลว");
