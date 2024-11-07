const { Track } = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allTrack = await Track.find({})
    res.status(200).json(allTrack)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.get('/:trackId', async (req, res) => {
  try {
    const foundTrack = await Track.findById(req.params.trackId)
    res.status(200).json(foundTrack)
    if (!foundTrack) {
      res.status(404)
      throw new Error('Track not found')
    }
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message })
    } else {
      res.status(500).json({ error: error.message })
    }
  }
})
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const createTrack = await Track.create(req.body)
    res.status(201).json(createTrack)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.put('/:trackId', async (req, res) => {
  try {
    const updateTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, { new: true })
    if (!updateTrack) {
      res.status(404)
      throw new Error('Track not found')
    }
    res.status(200).json(updateTrack)
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message })
    } else {
      res.status(500).json({ error: error.message })
    }
  }
})
router.delete('/:trackId', async (req, res) => {
  try {
    const deleteTrack = await Track.findByIdAndDelete(req.params.trackId)
    if (!deleteTrack) {
      res.status(404)
      throw new Error('Track not found')
    }
    res.status(200).json(deleteTrack)
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message })
    } else {
      res.status(500).json({ error: error.message })
    }
  }
})

module.exports = router
