const persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-23445",
        id: 3
    }
]

console.log(persons)
const name = "Ada Lovelace"
const b = persons.forEach((person) => {
if(person.name === name){
return true
}
}

console.log(b)
