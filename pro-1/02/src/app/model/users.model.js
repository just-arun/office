import { Schema, model } from 'mongoose';

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    uname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    recent: {
        type: Array,
        require: true
    },
    cart: {
        type: Array,
        require: true
    },
    bought: {
        type: Array,
        require: true
    }
});

const User = model('Users',UserSchema);


export default User;
