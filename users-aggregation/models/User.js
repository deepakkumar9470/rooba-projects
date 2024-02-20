import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },

    country: {
        type: String,
    },
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

export default User