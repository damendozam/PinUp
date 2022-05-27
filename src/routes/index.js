const express = require('express');
const router = express.Router();
const pool = require('../database');

let people={
    id:0,
    code:' ',
    namePerson:' ',
    type:' ',
    statusPerson:0,
    picture:' ',
    mail:' ',
    password:' ',
    address:' ',
    cel:' ',
    preferences:' ',
    age:0
}

router.get('/', async (req, res)=> {
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

router.get('/AdminCrearModificarClases', function (req, res) {
    res.render('html/AdminCrearModificarClases.html')
})
router.get('/AdminVerEstudiantes', function (req, res) {
    res.render('html/AdminVerEstudiantes.html')
})

router.post('/', function (req, res) {
    console.log(req.body)
    res.render('html/AdminInicio.html')
})
router.post('/RegistraseContacto', function (req, res) {
    console.log(req.body)
    people.namePerson=req.body.name+' '+req.body.lastName
    people.id=req.body.id
    people.preferences=req.body.proname
    res.render('html/RegistraseContacto.html')
})
router.post('/RegistraseTipo', function (req, res) {
    console.log(req.body)
    people.mail=req.body.email
    people.password=req.body.password
    people.cel=req.body.cel
    res.render('html/RegistraseTipo.html')
})
router.post('/Registrase', async (req, res) =>{
    console.log(req.body)
    people.type=req.body.typeSelect
    await pool.query(`INSERT INTO people (id,code,name,type,status,picture,mail,password,address,cel,preferences,age) VALUES (0,"${people.code}","${people.namePerson}","${people.type}","${people.statusPerson}","${people.picture}","${people.mail}","${people.password}","${people.address}","${people.cel}","${people.preferences}",${people.age})`);
    res.render('html/login.html')
})
module.exports = router;