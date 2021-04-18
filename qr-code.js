class QrCode {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My qrCode: ${this.name} is this old: ${this.age}`);
    }
}

module.exports = QrCode;