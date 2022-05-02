const { expect } = require('@jest/globals');
const {
    scheduleMeeting,
    convertHourToMinutes,
} = require('./comparison.js');

describe('scheduleMeeting', () => {
    it("should return false when meeting starts before 07:30", () => {
        const returnFunction = scheduleMeeting("7:00", 15)
        expect(returnFunction).toBe(false);
    })
    it("should return false when meeting starts before 07:30", () => {
        const returnFunction = scheduleMeeting("07:15", 30)
        expect(returnFunction).toBe(false);
    })
    it("should return false when meeting ends after 17:45", () => {
        const returnFunction = scheduleMeeting("17:30", 30)
        expect(returnFunction).toBe(false);
    })
    it("should return true when meeting start after 17:45", () => {
        const returnFunction = scheduleMeeting("18:00", 15)
        expect(returnFunction).toBe(false);
    })
    it("should return true when startTime is 07:30 and durationMinutes is 30", () => {
        const returnFunction = scheduleMeeting("07:30", 30)
        expect(returnFunction).toBe(true);
    })
    it("should return true when startTime is 11:30 and durationMinutes is 60", () => {
        const returnFunction = scheduleMeeting("11:30", 60)
        expect(returnFunction).toBe(true);
    })
    it("should return true when startTime is 17:00 and durationMinutes is 45", () => {
        const returnFunction = scheduleMeeting("17:00", 45)
        expect(returnFunction).toBe(true);
    })
})

describe("convertHourToMinutes", () => {
    it("should convert 07:30 to 450 minutes", () => {
        const minutes = convertHourToMinutes("07:30")
        expect(minutes).toBe(450)
    })
    it("should convert 7:30 to 450 minutes", () => {
        const minutes = convertHourToMinutes("7:30")
        expect(minutes).toBe(450)
    })
    it("should convert 00:00 to 0 minutes", () => {
        const minutes = convertHourToMinutes("00:00")
        expect(minutes).toBe(0)
    })
    it("should convert 23:59 to 1439 minutes", () => {
        const minutes = convertHourToMinutes("23:59")
        expect(minutes).toBe(1439)
    })
})

