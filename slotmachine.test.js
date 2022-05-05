const { expect } = require('@jest/globals');
const {
    Slot,
    Machine,
} = require('./slotmachine.js');

// 0 - 0.25
// 0.25 - 0.5
// 0.5 - 0.75
// 0.75 - 1
// ⭐ - 🙂 - 🐷 - 🐧
describe('Slot', () => {
    afterEach(()=> {
        jest.spyOn(Math, "random").mockRestore()
        jest.spyOn(console, "log").mockRestore()
    })
    it("should start with icon ⭐", () => {
        const slot1 = new Slot();
        expect(slot1.value).toEqual("⭐");
    })
    it("should spin", () => {
        const slot1 = new Slot();
        jest.spyOn(Math, "random").mockReturnValue(0.6245)
        slot1.spin()
        expect(slot1.value).toEqual("🐷");
    })
    it("should display", () => {
        const slot1 = new Slot();
        jest.spyOn(Math, "random").mockReturnValue(0.8)
        slot1.spin()
        const logSpy = jest.spyOn(console, "log")
        slot1.display()
        expect(logSpy).toHaveBeenCalledWith("[ 🐧 ]");
    })
})
describe('Machine', () => {
    afterEach(()=> {
        jest.spyOn(Math, "random").mockRestore()
        jest.spyOn(console, "log").mockRestore()
    })
    it("should display [ 🐧  ] | [ 🙂 ] | [ ⭐ ]", () => {
        const machine = new Machine();
        jest.spyOn(Math, "random").mockReturnValueOnce(0.8).mockReturnValueOnce(0.4).mockReturnValueOnce(0.2);
        machine.spin()
        const logSpy = jest.spyOn(console, "log")
        machine.display()
        expect(logSpy).toHaveBeenCalledWith("[ 🐧 ] | [ 🙂 ] | [ ⭐ ]");
    })
    it("should display [ ⭐ ] | [ ⭐ ] | [ ⭐ ]", () => {
        const machine = new Machine();
        jest.spyOn(Math, "random").mockReturnValueOnce(0.8).mockReturnValueOnce(0.86).mockReturnValueOnce(1);
        machine.spin()
        const logSpy = jest.spyOn(console, "log")
        machine.display()
        expect(logSpy).toHaveBeenCalledWith("[ 🐧 ] | [ 🐧 ] | [ 🐧 ]");
    })
})
