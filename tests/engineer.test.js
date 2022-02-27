// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

class Engineer extends Employee {
    constructor(employeeName, id, email, gitHub) {
    super(employeeName, id, email)
    this.gitHub = gitHub
}
getGithub(){
    return `${}`
}}

newEngineer = new Engineer(`${}`)
