const Manager = require("../lib/Manager")


describe("Manager class", () => {
    const manager = new Manager("Julia", 33, "julia.gray@gmail.com", 666)

    describe("GetName function", () => {
        it("returns the Manger name", () => {
            expect(manager.getName()).toBe("Julia")
        })
    })

    describe("Get ID function", () => {
        it("returns the Manager Id", () => {
            expect(manager.getId()).toBe(33)
        })
    })

    describe("Get email function", () => {
        it("returns the manager email", () => {
            expect(manager.getEmail()).toBe("julia.gray@gmail.com")
        })
    })

    describe("Get officeNumber function", () => {
        it("returns the office number", () => {
            expect(manager.getOfficeNumber()).toBe(666)

        })
    })

    describe("Get role function", () => {
        it("returns the Manager's role as Manager", () => {
            expect(manager.getRole()).toBe("Manager")
        })
    })})