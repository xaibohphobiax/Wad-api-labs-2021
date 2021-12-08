import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;
//let regEx = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$";
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, validate: { validator: function(password) { return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(password); }, message: "Password must be at least 5 characters long and contain at least one number and one letter!"}, required: true },
  favourites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movies'}]
});

//instance function
UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.methods.comparePassword = function (passw, callback) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

//save
UserSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, (err, salt)=> {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, (err, hash)=> {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});


export default mongoose.model('User', UserSchema);