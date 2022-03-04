const Manager = require("../lib/Manager")

test("Can I initiate Manager constructor", () => {
    const manager = new Manager()
    expect(typeof(manager)).toBe("Object")
    })
    
    test("Can I pass a name in the constructor", ()=> {
        const managerName = "Julia"
        const manager = new Manager(managerName)
        expect(manager.managerName).toBe(managerName)
    })
    
    test("Can I pass an ID in the constructor", () => {
        const managerId = "8405203"
        const id = new Manager(managerId)
        expect(id.managerId).toBe(managerId)
    })
    
    test("can I pass an Email in the constructor", () => {
        const email = "julia.gray@hotmail.com"
        const managerEmail = new Manager(email)
        expect(managerEmail.email).toBe(email)
    })

    test("can I pass an office number in the constructor", () => {
        const officeNumber = "0767685858"
        const managerNumber = new Manager(officeNumber)
        expect(managerNumber.officeNumber).toBe(officeNumber)
    })
    
    test("Will it return Manager as the role", () => {
            const newManager = new Manager()
            expect(newManager.role).toBe("Manager")
    })