const Engineer = require("../lib/Engineer")


describe("Engineer class", () => {
    const engineer = new Engineer("Julia", 33, "julia.gray@gmail.com", "jgray33")

    describe("GetName function", () => {
        it("returns the Engineer name", () => {
            expect(engineer.getName()).toBe("Julia")
        })
    })

    describe("Get ID function", () => {
        it("returns the Engineer Id", () => {
            expect(engineer.getId()).toBe(33)
        })
    })

    describe("Get email function", () => {
        it("returns the engineer email", () => {
            expect(engineer.getEmail()).toBe("julia.gray@gmail.com")
        })
    })

    describe("Get gitHub function", () => {
        it("returns the engineer gitHub", () => {
            expect(engineer.getGithub()).toBe("jgray33")
        })
    })

       describe("Get role function", () => {
        it("returns the Engineer's role as Engineer", () => {
            expect(engineer.getRole()).toBe("Engineer")
        })
    })})