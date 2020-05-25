const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log('please enter password')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://sarvesh06:${password}@cluster0-4tifp.mongodb.net/users?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema(
    {
        name: String,
        number: String
    }
)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const User = mongoose.model('User', userSchema)


if(process.argv.length === 3){
    User.find({}).then((result) => {
        console.log('phonebook:')
        result.forEach(r => {
            console.log(r.toJSON())
           console.log(`${r.name} ${r.number}`)
        })
        mongoose.connection.close()
    })
}
else{
    const user = new User(
        {
            name: process.argv[3],
            number: process.argv[4]
        }
    )
    
    user.save().then((result) => {
        console.log(result)
        mongoose.connection.close()
    })
}
