const Intern = require("../lib/Intern")


describe("Intern class", () => {
    const intern = new Intern("Julia", 33, "julia.gray@gmail.com", "High School")

    describe("GetName function", () => {
        it("returns the Intern name", () => {
            expect(intern.getName()).toBe("Julia")
        })
    })

    describe("Get ID function", () => {
        it("returns the Intern Id", () => {
            expect(intern.getId()).toBe(33)
        })
    })

    describe("Get email function", () => {
        it("returns the intern email", () => {
            expect(intern.getEmail()).toBe("julia.gray@gmail.com")
        })
    })

    describe("Get school function", () => {
        it("returns the inter school", () => {
            expect(intern.getSchool()).toBe("High School")
        })
    })

       describe("Get role function", () => {
        it("returns the Intern's role as Intern", () => {
            expect(intern.getRole()).toBe("Intern")
        })
    })})