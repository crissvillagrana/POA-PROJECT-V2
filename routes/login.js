var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController')
var multer = require('multer') 
var fecha= Date.now();

var rutaAlmacen = multer.diskStorage({
    destination:function(request,file,callback){
        callback(null,'./public/archivos')
    },
    filename:function(request,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
}
);

var cargar= multer({storage:rutaAlmacen});

router.get('/', function(req, res){
    res.render('login',{title:'TSJPOA - Iniciar Sesión'})
})

router.get('/error', function(req, res){
    res.render('login',{title:'Error de Autenticación'})
})

router.get('/error2', function(req, res, next) {
    res.render('login',{title:'Usuario no asignado'})
});

//router.get('/reload',cargar.single("otro"),loginController.leer)
router.post('/',cargar.single("otro"),loginController.leer)
module.exports = router;