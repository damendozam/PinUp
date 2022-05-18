const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('html/login.html')
})
router.get('/RegistraseNombre', function (req, res) {
    res.render('html/RegistraseNombre.html')
})
router.get('/RegistraseContacto', function (req, res) {
    res.render('html/RegistraseContacto.html')
})
router.get('/RegistraseTipo', function (req, res) {
    res.render('html/RegistraseTipo.html')
})
module.exports = router;