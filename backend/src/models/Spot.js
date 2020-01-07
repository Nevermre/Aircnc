const moongoose = require('mongoose')

const SpotSchema = new moongoose.Schema ({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON:{
        virtuals:true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.1.107:3333/files/${this.thumbnail}`
})
module.exports = moongoose.model('Spot', SpotSchema);