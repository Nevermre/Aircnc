const moongoose = require('mongoose')

const UserSchema = new moongoose.Schema ({

    email: String,
});

module.exports = moongoose.model('User', UserSchema);