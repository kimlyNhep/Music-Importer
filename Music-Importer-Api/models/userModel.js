const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: [true, 'Please tell us your name'],
    },
    Password: {
      type: String,
      required: [true, 'Password should not be empty'],
      minlength: 8,
    },
    ConfirmPassword: {
      type: String,
      required: [true, 'Please confirm your password'],
      validator: function (el) {
        return el === this.password;
      },
      message: `Your password doesn't marched`,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtual: true },
  }
);

const user = mongoose.model('User', userSchema);

module.exports = user;
