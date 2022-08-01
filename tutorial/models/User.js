const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        required: [true, "type your name here please"]
    },
    email: {
        required: [true, 'whats your email bro?']
    },
    phone: {
        requiered: [true, 'pass your phone number here we must know how to contact you']
    } 
});

const User = mongoose.model("User", UserSchema)
module.exports = User

const user_resource = new User({
    name: 'kacper adamczyk',
    email: 'kacperadam10@gmail.com',
    phone: '4565347654'
});

user_resource.save((error) => {
    if(error) {
        console.log(error);
    }
    res.send({
        success: true,
        code: 200,
        message: 'User has been added'
    })
});

User.find({name: 'kacper adamczyk'}, 'name email phone', function(error, users) {
    if(error) {
        console.error(error); 
    }
    res.send({
        users: users
    }) 
});


