import Regex from "../src/"

describe("Constructor", () => {
    it("Initialized with a regular expression", () => {
        const regex = new Regex(/.*/)

        expect(regex).toBeInstanceOf(Regex)
        expect(regex.isValid).toBe(true)
        expect(regex.isGlobal).toBe(false)
    })

    it("Initialized with a string", () => {
        const regex = new Regex(".*")

        expect(regex).toBeInstanceOf(Regex)
        expect(regex.isValid).toBe(true)
        expect(regex.isGlobal).toBe(false)
    })

    it("Initialized with a regular expression with global flag", () => {
        const regex = new Regex(/.*/g)

        expect(regex).toBeInstanceOf(Regex)
        expect(regex.isValid).toBe(true)
        expect(regex.isGlobal).toBe(true)
    })

    it("Initialized with a regular expression with global and non-case-sensitive flag", () => {
        const regex = new Regex(/.*/gi)

        expect(regex).toBeInstanceOf(Regex)
        expect(regex.isValid).toBe(true)
        expect(regex.isGlobal).toBe(true)
    })
})

describe("String methods", () => {
    const regex = new Regex(/Hello .*/)
    const globalRegex = new Regex(/o/g)

    it("RegExp matches String.Prototype.match", () => {
        const match = regex.match("Hello world")

        expect(match).toContain("Hello world")
        expect(match).toHaveLength(1)
    })

    it("RegExp does not match String.Prototype.match", () => {
        const match = regex.match("Goodbye world")

        expect(match).toBe(null)
    })

    it("RegExp matches String.Prototype.matchAll", () => {
        const matches = globalRegex.matchAll("Hello world")

        expect(matches).toHaveLength(2)
        expect(matches[0]).toHaveLength(1)
        expect(matches[1]).toHaveLength(1)
        expect(matches[0][0]).toBe("o")
        expect(matches[1][0]).toBe("o")
    })

    it("RegExp does not match String.Prototype.matchAll", () => {
        const matches = globalRegex.matchAll("Abracadabra")

        expect(matches).toHaveLength(0)
    })

    it("RegExp throw TypeError when passing non-global regular expression", () => {
        const matches = regex.matchAll("Hello world")

        expect(matches).toHaveLength(0)
    })
})

describe("RegExp functions", () => {
    const regex = new Regex(/Hello .*/)

    it("RegExp matches string", () => {
        const match = regex.test("Hello world")

        expect(regex.isValid).toBe(true)
        expect(match).toBe(true)
    })

    it("RegExp does not match string", () => {
        const match = regex.test("Googbye world")

        expect(regex.isValid).toBe(true)
        expect(match).toBe(false)
    })
})

describe("Own functions", () => {
    const regex = new Regex(/(Hello (.*))/)

    it("Regex.groups has groups", () => {
        const groups = regex.groups()
        
        expect(groups).toHaveLength(2)
        expect(groups[0]).toBe("Hello (.*))/")
        expect(groups[1]).toBe("(.*))/")
    })
})