const validatePassword = require("./validatePassword")

describe('Password', () => {
    it("should return false for empty characters", () => {
        expect(validatePassword('')).toBe(false)
    })
    it("should return false when there is no letters", () => {
        expect(validatePassword('12345678')).toBe(false)
    })
    it("should return false when there is no numbers", () => {
        expect(validatePassword('abcdefghij')).toBe(false)
    })
    it("should return false when is shorter than 8 characters", () => {
        expect(validatePassword('a1')).toBe(false)
    })
    it("should be valid with only lowercase letters and numbers", () => {
        expect(validatePassword('abcd1234')).toBe(true)
    })
    it("should be valid with only uppercase letters and numbers", () => {
        expect(validatePassword('ABCD1234')).toBe(true)
    })
    it("should return true when is has at least 8 characters, one character and one number", () => {
        expect(validatePassword('abCD1234')).toBe(true)
    })
})

