const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex', true)

const password = process.argv[2]
const url = process.env.MONGODB_URI


mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology: true })
        .then((result) => {
            console.log('connected to MongoDB');
        })
        .catch((error) => {
            console.log('error connecting to MongoDB');
        })

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: 'name must be unique'
        },
        number: Number
    }
)

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', userSchema)

