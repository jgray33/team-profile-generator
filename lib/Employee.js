class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName
        this.employeeId = id
        this.email = email
    }
    getName() {
        return this.employeeName
    }
    getId(){
        return this.employeeId
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee


