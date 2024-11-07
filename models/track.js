const { Schema } = require("mongoose")

const Track = new Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true}
})

module.exports = Track