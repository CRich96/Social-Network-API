// Importing the required dependencies from the mongoose library
const { Schema, model, Types } = require('mongoose'); 

// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: { 
          validator: function(v) {
              return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
          }
      }
    },

    friends:[{
        type: Schema.ObjectId,
        ref: 'User',
    }],

    thoughts:[{
        type: Schema.ObjectId,
        ref: 'Thought',
    }],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
});


userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User',userSchema)

module.exports = User