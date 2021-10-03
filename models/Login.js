const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    type: String,
    email: String,
    password: String
}, {
    collection: 'login',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('login',schema);
