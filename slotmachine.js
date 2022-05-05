class Slot {
    constructor () {
        this.value = "⭐";
    }

    spin() {
        const number = Math.random();

        if (number >= 0 && number < 0.25) {
            this.value = "⭐";
        } else if (number >= 0.25 && number <0.5) {
            this.value = "🙂"; 
        } else if (number >= 0.5 && number <0.75) {
            this.value = "🐷";
        } else if (number >= 0.75 && number <= 1) {
            this.value = "🐧";
        }
    }

    display() {
        console.log(`[ ${this.value} ]`);
    }
}
class Machine {
    constructor() {
       this.slot1 = new Slot();
       this.slot2 = new Slot();
       this.slot3 = new Slot();
    }
    spin() {
        this.slot1.spin();
        this.slot2.spin();
        this.slot3.spin();
    }
    display() {
        const s1 = this.slot1.value;
        const s2 = this.slot2.value;
        const s3 = this.slot3.value;
        console.log(`[ ${s1} ] | [ ${s2} ] | [ ${s3} ]`);
    }
}


module.exports = {
    Slot,
    Machine,
}