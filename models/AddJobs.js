const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddJobsSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['Full-Time', 'Part-Time', 'Remote', 'Internship'],
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: String,
        required: true,
        enum: ['Under $50K', '$50K - $60K', '$60K - $70K', '$70K - $80K', '$80K - $90K', '$90K - $100K', '$100K - $125K', '$125K - $150K', '$150K - $175K', '$175K - $200K', 'Over $200K']
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    company_description: {
        type: String,
        required: true,
        trim: true
    },
    contact_email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    contact_phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number']
    },
});

module.exports = mongoose.model('AddJobs', AddJobsSchema);
