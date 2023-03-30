const express = require('express')
const router = express.Router()
const { initiateSTKPush, stkPushCallback, confirmPayment } = require('../controllers/mpesaController')

const { accessToken } = require('../middleware/generateAccessToken')

router.route("/stkPush").post(accessToken, initiateSTKPush);
router.route('/stkPushCallback/').post(stkPushCallback)
router.route('/errorstkPushCallback/').post(stkPushCallback)
router.route('/confirmPayment/:CheckoutRequestID').post(accessToken, confirmPayment)

module.exports = router