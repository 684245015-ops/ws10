export {}

class CPU {
    constructor(private brand: string, private cors: number) {}
    process(){
        this.showInfo();
        console.log("CPU กำลังทำงาน");
    }
    showInfo(){
        console.log(`CPU - ${this.brand} ${this.cors} cors`);
    }
}

class RAM {
    constructor(private capacity: number){}
    load(): void{
        this.showInfo();
        console.log(`RAM กำลังโหลดข้อมูล`)
    }
    showInfo(){
        console.log(`RAM - ${this.capacity} GB`);
    }
}

class Storage {
    constructor(private capacity: number, private type: string){}

    readData(): void{
        this.showInfo();
        console.log(`Storage กำลังอ่านข้อมูล`);
    }

    showInfo(){
        console.log(`Storage - ${this.type} ${this.capacity} GB`);
    }
}

class Computer{
    private cpu: CPU;
    private ram: RAM;
    private storage: Storage;

    constructor(brand: string, cors: number, capacity: number){
        this.cpu = new CPU(brand,cors);
        this.ram = new RAM(capacity);
        this.storage = new Storage(512,"SSD");
    }

    boot(): void{
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log("Computer is ready!");
    }

    showComputerInfo(): void{
        console.log("Computer information:");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}

const pc1 = new Computer ("Intel",8,16);
pc1.boot();
pc1.showComputerInfo();