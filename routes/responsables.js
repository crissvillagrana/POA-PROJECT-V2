var express = require('express');
var router = express.Router();
const responsablesController = require("../controllers/responsablesController");
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
router.get('/',responsablesController.index); //vista de registros

router.get('/crear',responsablesController.crear); //crear registro
router.post('/',cargar.single("otro"),responsablesController.guardar); //guardar registro creado

router.post('/eliminar/:id',responsablesController.eliminar); //eliminar registro

router.get('/editar/:id',responsablesController.editar); //mandar registro a editar
router.post('/actualizar',cargar.single("otro"),responsablesController.actualizar); //actualizar registro editado

router.get('/asignar/:id',responsablesController.asignar); //abrir registro para asignars
router.post('/asignar/:areaid&:respoid',cargar.single("otro"),responsablesController.asignardos); //guardar asignaci[o]n

router.post('/desasignar/:respoid',cargar.single("otro"),responsablesController.desasignar); //desasignar
module.exports = router;