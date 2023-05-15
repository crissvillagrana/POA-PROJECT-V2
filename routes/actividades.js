var express = require('express');
var router = express.Router();
const actividadesController = require("../controllers/actividadesController");

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
router.get('/',actividadesController.index);
router.get('/avance',actividadesController.avance);
router.get('/avance/:areaid',actividadesController.indexarea)
module.exports = router;