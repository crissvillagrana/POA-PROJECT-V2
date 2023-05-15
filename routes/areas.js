var express = require('express');
var router = express.Router();
const areasController = require("../controllers/areasController");
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
router.get('/',areasController.index);
router.get('/crear',areasController.crear);
router.post('/',cargar.single("otro"),areasController.guardar);
router.post('/eliminar/:id',areasController.eliminar);
router.get('/editar/:id',areasController.editar);
router.post('/actualizar',cargar.single("otro"),areasController.actualizar);
module.exports = router;