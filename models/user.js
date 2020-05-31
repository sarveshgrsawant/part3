/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useCreateIndex', true);

// const password = process.argv[2];
const url = process.env.MONGODB_URI;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(() => {
    console.log('error connecting to MongoDB');
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: true,
      unique: 'name must be unique',
    },
    number: {
      type: String,
      minlength: 8,
      required: true,
    },
  },
);

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('User', userSchema);
