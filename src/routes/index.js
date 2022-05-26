const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.render('html/login.html')
    //res.render('html/AdminVerEstudiante.html')
})
router.get('/RegistraseNombre', function (req, res) {
    res.render('html/RegistraseNombre.html')
})
router.get('/RegistraseContacto', function (req, res) {
    res.render('html/RegistraseContacto.html')
})
router.post('/RegistraseContacto', function (req, res) {
    console.log(req.body)
    res.render('html/RegistraseContacto.html')
})
router.get('/RegistraseTipo', function (req, res) {
    res.render('html/RegistraseTipo.html')
})
router.post('/RegistraseTipo', function (req, res) {
    console.log(req.body)
    res.render('html/RegistraseTipo.html')
})
router.post('/Registrase', function (req, res) {
    console.log(req.body)
    res.render('html/login.html')
})
router.get('/AdminCrearModificarClases', function (req, res) {
    res.render('html/AdminCrearModificarClases.html')
})
router.post('/', function (req, res) {
    console.log(req.body.email)
    res.render('html/AdminInicio.html')
})
router.get('/AdminVerEstudiantes', function (req, res) {
    res.render('html/AdminVerEstudiantes.html')
})
module.exports = router;