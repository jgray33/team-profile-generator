const Employee = require("../lib/Employee")


describe("Employee class", () => {
    const employee = new Employee("Julia", 33, "julia.gray@gmail.com", 666)

    describe("GetName function", () => {
        it("returns the Manger name", () => {
            expect(employee.getName()).toBe("Julia")
        })
    })

    describe("Get ID function", () => {
        it("returns the Employee Id", () => {
            expect(employee.getId()).toBe(33)
        })
    })

    describe("Get email function", () => {
        it("returns the employee email", () => {
            expect(employee.getEmail()).toBe("julia.gray@gmail.com")
        })
    })

       describe("Get role function", () => {
        it("returns the Employee's role as Employee", () => {
            expect(employee.getRole()).toBe("Employee")
        })
    })})