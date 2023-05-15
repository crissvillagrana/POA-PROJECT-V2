var express = require('express');
var router = express.Router();
const unidadesController = require("../controllers/unidadesController");
var multer = require('multer');
var fecha= Date.now();

var rutaAlmacen = multer.diskStorage({
    destination:function(request,file,callback){
        callback(null,'./public/images')
    },
    filename:function(request,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
}
);

var cargar= multer({storage:rutaAlmacen});
router.get('/',unidadesController.index);
router.get('/crear',unidadesController.crear);
router.post('/',cargar.single("otro"),unidadesController.guardar);
router.post('/eliminar/:id',unidadesController.eliminar);
router.get('/editar/:id',unidadesController.editar);
router.post('/actualizar',cargar.single("otro"),unidadesController.actualizar)
module.exports = router;