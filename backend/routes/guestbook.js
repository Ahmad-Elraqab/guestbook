const express = require('express')
const router = express.Router()
var cors = require('cors')
const { MongoClient } = require('mongodb');
const { json } = require('express');
const client = require('../models/db')

router.get('/', cors(), async (req, res) => {

    try {

        const data = await client.db('guestbook').collection('book').find({}).toArray()

        return res.status(200).json(data)

    } catch (e) {

        return res.status(500).json(null)

    }

})

router.post('/', cors(), async (req, res) => {

    try {

        req.body['date'] = new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
        const data = await client.db('guestbook').collection('book').insertOne(req.body)

        return res.status(200).json(data)

    } catch (e) {

        return res.status(500).json(null)
    }

})


module.exports = router