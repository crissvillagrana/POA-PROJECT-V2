var express = require('express');
var router = express.Router();
const administradoresController = require("../controllers/administradoresController");

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
router.get('/planeacion',administradoresController.indexplan)
router.get('/reportes',administradoresController.reportes);

router.get('/aprobart1',administradoresController.aprovet1);
router.get('/aprobart2',administradoresController.aprovet2);
router.get('/aprobart3',administradoresController.aprovet3);
router.get('/aprobart4',administradoresController.aprovet4);

router.get('/aprobar/avance',administradoresController.avance)
router.get('/aprobar/avance/:areaid',administradoresController.indexarea)

router.get('/aprobar/:areaid/t1',administradoresController.indexareat1)
router.get('/aprobar/:areaid/t2',administradoresController.indexareat2)
router.get('/aprobar/:areaid/t3',administradoresController.indexareat3)
router.get('/aprobar/:areaid/t4',administradoresController.indexareat4)
router.get('/aprobar',administradoresController.aprobar)


router.post('/aprobar/:areaid/aprobarevidenciat1',cargar.single('otro'),administradoresController.singleae1)
router.post('/aprobar/:areaid/aprobarevidenciat2',cargar.single('otro'),administradoresController.singleae2)
router.post('/aprobar/:areaid/aprobarevidenciat3',cargar.single('otro'),administradoresController.singleae3)
router.post('/aprobar/:areaid/aprobarevidenciat4',cargar.single('otro'),administradoresController.singleae4)
router.post('/aprobar/:areaid/desaprobarevidenciat1',cargar.single('otro'),administradoresController.singledae1)
router.post('/aprobar/:areaid/desaprobarevidenciat2',cargar.single('otro'),administradoresController.singledae2)
router.post('/aprobar/:areaid/desaprobarevidenciat3',cargar.single('otro'),administradoresController.singledae3)
router.post('/aprobar/:areaid/desaprobarevidenciat4',cargar.single('otro'),administradoresController.singledae4)


router.post('/aprobarevidenciat1',cargar.single('otro'),administradoresController.aprobarevidenciat1)
router.post('/aprobarevidenciat2',cargar.single('otro'),administradoresController.aprobarevidenciat2)
router.post('/aprobarevidenciat3',cargar.single('otro'),administradoresController.aprobarevidenciat3)
router.post('/aprobarevidenciat4',cargar.single('otro'),administradoresController.aprobarevidenciat4)
router.post('/desaprobarevidenciat1',cargar.single('otro'),administradoresController.desaprobarevidenciat1)
router.post('/desaprobarevidenciat2',cargar.single('otro'),administradoresController.desaprobarevidenciat2)
router.post('/desaprobarevidenciat3',cargar.single('otro'),administradoresController.desaprobarevidenciat3)
router.post('/desaprobarevidenciat4',cargar.single('otro'),administradoresController.desaprobarevidenciat4)

router.post('/cambiocontra',cargar.single("otro"),administradoresController.cambiocontra)
//pdfs
router.get('/tabla1',administradoresController.xltabla1)
router.get('/tabla2',administradoresController.xltabla2)
router.get('/tabla3',administradoresController.xltabla3)
router.get('/tabla4',administradoresController.xltabla4)
router.get('/tabla5',administradoresController.xltabla5)
router.get('/tabla6',administradoresController.xltabla6)
router.get('/tabla7',administradoresController.xltabla7)

module.exports = router;