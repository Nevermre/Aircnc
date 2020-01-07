const moongoose = require('mongoose')

const BookingSchema = new moongoose.Schema ({
    date: String,
    approved: Boolean,
    user: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = moongoose.model('Booking', BookingSchema);