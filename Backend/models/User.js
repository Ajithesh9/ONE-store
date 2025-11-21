const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // By default, a new user is NOT an admin
    },
    // We can add an avatar later for your dashboard requirement
    avatar: {
      type: String,
      default: "", 
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Method to check if entered password matches the hashed password in DB
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware to hash the password BEFORE saving to database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;