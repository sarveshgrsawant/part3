const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'))

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

let persons = [
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

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const total = persons.length
    const date = new Date()
    res.send(`
    <p>Phonebook has info for ${total} people</p>
    <p>${date}</p>
    `)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
    
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(203).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    console.log(`body is ${body}`)
    let containsName = false

    persons.forEach((person) => {
	    if(person.name === body.name){
    	    containsName = true
        }
    })

    if(containsName){
        return res.status(400).json({
            error: 'The name already exists in the phonebook'
        })
    }
    if(!body.name || !body.number){
        return res.status(400).json({
            error: 'The name or number is missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 1000000) + 1
    }
    persons = persons.concat(person)
    res.json(person)
})
app.po
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})