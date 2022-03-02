const Employee = require("../Employee")

test("Can I initiate employee construct", () => {
const emp = new Employee()
expect(typeof(emp)).toBe("Object")
})

test("Can I pass a name in the constructor", ()=> {
    const employeeName = "Julia"
    const emp = new Employee(employeeName)
    expect(emp.employeeName).toBe(employeeName)
})