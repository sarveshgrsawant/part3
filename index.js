require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const User = require('./models/user')
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'))

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

// let persons = [
//     {
//         name: "Arto Hellas",
//         number: "040-123456",
//         id: 1
//     },
//     {
//         name: "Ada Lovelace",
//         number: "39-44-5323523",
//         id: 2
//     },
//     {
//         name: "Dan Abramov",
//         number: "12-43-23445",
//         id: 3
//     }
// ]

app.get('/api/persons', (req, res, next) => {
    User.find({}).then(users => {
        res.json(users.map(u => u.toJSON()))
    }).catch(error => {
        console.log(error.name)
        next(error)
    })  
})

app.get('/info', (req, res, next) => {
    let persons
    User.find({}).then(users => {
        persons = users.map(u => u.toJSON())
        const total = persons.length
        const date = new Date()
        res.send(`
        <p>Phonebook has info for ${total} people</p>
        <p>${date}</p>
        `)
    }).catch(error => {
        console.log(error.name)
        next(error)
    })  
})

app.get('/api/persons/:id', (req, res, next) => {
    // const id = Number(req.params.id)
    // const person = persons.find(p => p.id === id)
    User.findById(req.params.id).then(person => {
        if(person){
            res.json(person)
        }else{
            res.status(404).end()
        }
    }).catch(error => {
        console.log(error.name)
        next(error)
    })
})

app.delete('/api/persons/:id', (req, res, next) => {
    // const id = Number(req.params.id)
    // persons = persons.filter(p => p.id !== id)
    User.findByIdAndDelete(req.params.id).then((result) => {
        res.status(204).end()
    }).catch(error => {
        console.log(error.name)
        next(error)
    })
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    // console.log(`body is ${body}`)
    // let containsName = false

    // persons.forEach((person) => {
	//     if(person.name === body.name){
    // 	    containsName = true
    //     }
    // })

    // if(containsName){
    //     return res.status(400).json({
    //         error: 'The name already exists in the phonebook'
    //     })
    // }
    //     const persons = undefined
    
    if(!body.name || !body.number){
        return res.status(400).json({
           error: 'The name or number is missing'
            })
    }
        
    const user = new User(
        {
            name: body.name,
            number: body.number
            // id: Math.floor(Math.random() * 1000000) + 1
        }
    )
            
    // persons = persons.concat(person)
        
    user.save().then((user) => {
        res.json(user.toJSON())
        }).catch(error => {
            console.log(error.name)
            next(error)
        })
})

app.put('/api/persons/:id', (req, res, next) => {
    let body = req.body
    const person = {
        name: body.name,
        number: body.number
    }
    console.log('update')
    console.log(req.params.id)
    User.findByIdAndUpdate(req.params.id, person, { new:true }).then(
        (person)=>{
            res.json(person)
        }
    ).catch(error => {
        console.log(error.name)
        next(error)
    })
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    
    if(error.name === "CastError"){
        console.log("heyy")
        return res.status(400).json({ error: 'malformed id'})
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})