const express = require('express');
const router = express.Router();
const otpGenerator = require('otp-generator');
const genOtp = () => otpGenerator.generate(4, { digits: true, });
router.post(`/send`, (req, res) => {
  console.log("sendotp backend");
    res.status(200).json({ success: true, otp: genOtp() })

})

router.post(`/verify`, (req, res) => {
    // const otp = req.body;
    res.status(200).json({ success: true, message: "OTP verfied" })
})

module.exports = router;