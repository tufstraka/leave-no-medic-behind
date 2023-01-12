const router = require('express').Router()
const Runner = require('../models/Runner')

router.post('/buy-tshirt', async (req, res) => {
    const newRunner = new Runner(req.body)
    try {
        const savedRunner = await newRunner.save()
        res.status(200).json(savedRunner)
        // res.redirect('/sucess')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/buy-tshirt', (req, res) => {
    res.render('buy-tshirt')
})

// router.get('/vendor', (req, res) => {
//     res.render('vendor')
// });

module.exports = router