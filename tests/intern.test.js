const Intern = require("../lib/Intern");


test("Can I initiate intern constructor", () => {
    const int = new Intern()
    expect(typeof(int)).toBe("Object")
})

test("Can I pass a name into the constructor", () => {
    const internName = "Julia"
    const intern = new Intern(internName)
    expect(intern.internName).toBe(internName)
})

test("Can I pass an ID into my construct", ()=> {
    const Id = "9t99t"
    const intId = new Intern(Id)
    expect(intId.Id).toBe(Id)
})

test("Can I pass an email into the constructor", () => {
    const email = "julia@Engineer.com"
    const intEmail = new Intern(email)
    expect(intEmail.email).toBe(email)

})

test("Can I pass a school into the constructor", ()=> {
    const school = "UOB"
    const intSchool = new Intern(school)
    expect(intSchool.school).toBe(school)
})

test("Will the constructor return Intern as a role", () => {
    const intern = new Intern()
    expect(intern.role).toBe("Intern")
})