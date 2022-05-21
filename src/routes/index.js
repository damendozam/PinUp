const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    //res.render('html/login.html')
    res.render('html/AdminVerEstudiantes.html')
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
router.get('/AdminCrearModificarClases', function (req, res) {
    res.render('html/AdminCrearModificarClases.html')
})
module.exports = router;