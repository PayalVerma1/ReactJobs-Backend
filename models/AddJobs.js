const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddJobsSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['Full Time', 'Part Time', 'Remote', 'Internship'],
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
        enum: ['Under $50k', '$50k-$60k', '$60k-$70k', '$70k-$80k', '$80k-$90k', '$90k-$100k', '$100k-$125k', '$125k-$150k', '$150k-$175k', '$175k-$200k', 'Over $200k']
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
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    contact_phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number']
    },
});

module.exports = mongoose.model('AddJobs', AddJobsSchema);
