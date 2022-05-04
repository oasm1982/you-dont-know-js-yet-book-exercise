const { expect } = require('@jest/globals');
const {
    range,
} = require('./closure.js');

describe('range', () => {
    it("when you enter 2 number should return an array from fisrt number to final number for instance [3,3]", () => {
        const newArray = range(2,5)
        expect(newArray).toEqual([2, 3, 4, 5]);
    })
    it("when you enter 2 number should return an array from fisrt number to final number for instance [3,8]", () => {
        const newArray = range(2,8)
        expect(newArray).toEqual([2, 3, 4, 5, 6, 7, 8]);
    })
    it("when you enter 2 number and the end is 0, should return an empy array for instance [] ", () => {
        const newArray = range(3,0)
        expect(newArray).toEqual([]);
    })
    it("when the second argument is omitted, should return a function that expects that argument start3(3)", () => {
        let start3 = range(3);
        let newArray = start3(3); 
        expect(newArray).toEqual([3]);
    })
    it("when the second argument is omitted, should return a function that expects that argument start3(8)", () => {
        let start3 = range(3);
        let newArray = start3(8); 
        expect(newArray).toEqual([3, 4, 5, 6, 7, 8]);
    })
    it("when the second argument is omitted, should return a function that expects that argument start3(0)", () => {
        let start3 = range(0);
        let newArray = start3(0); 
        expect(newArray).toEqual([]);
    })
    it("when the second argument is omitted, should return a function that expects that argument start4(6)", () => {
        let start4 = range(4);
        let newArray = start4(6); 
        expect(newArray).toEqual([4, 5, 6]);
    })
})
