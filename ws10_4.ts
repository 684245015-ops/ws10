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

    // เพิ่ม
    prescribeMedicine(p: Patient, medicine: string){
        console.log(this.showInfo(), " จ่ายยา ", medicine, " ให้ ", p.showInfo());
    }

    // เพิ่ม
    calculateTreatmentCost(p: Patient, fee: number, medFee: number){
        let total = fee + medFee;
        console.log(this.showInfo(), " คำนวณค่ารักษาของ ", p.showInfo());
        console.log("ค่าตรวจ = ", fee);
        console.log("ค่ายา = ", medFee);
        console.log("ค่ารักษารวม = ", total, " บาท");
    }
}

const doctor = new Doctor("สำราญ","หัวใจ");
const p1 = new Patient("วันดี",25);
const p2 = new Patient("วันเวง",50);

doctor.examine(p1);
doctor.examine(p2);

doctor.diagnose(p1, "หัวใจเจ้นผิดจังหวะ");
doctor.diagnose(p2, "หัวใจเจ้นล้มเหลว");

doctor.prescribeMedicine(p1, "ยาหัวใจ");
doctor.prescribeMedicine(p2, "ยาลดไข้");

doctor.calculateTreatmentCost(p1, 1000, 500);
doctor.calculateTreatmentCost(p2, 300, 150)