const mongoose = require('mongoose')
const TrackSchema = require('./track')

const Track = mongoose.model('Track', TrackSchema)

module.exports = {
  Track
}