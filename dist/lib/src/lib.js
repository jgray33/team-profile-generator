class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName
        this.emplyeeId = id
        this.email = email
    }
    getName() {
        return `${}`
    }
    getId(){
        return `${}`
    }
    getEmail(){
        return `${}`
    }
    getRole(){
        return `${role}`
    }
}

newEmployee = new Employee(`"${}", "${}", "${}"`)

module.exports = employee



class Engineer extends Employee {
    constructor(employeeName, id, email, gitHub) {
    super(employeeName, id, email)
    this.gitHub = gitHub
}
getGithub(){
    return `${}`
}}

newEngineer = new Engineer(`${}`)
