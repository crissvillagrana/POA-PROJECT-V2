var express = require('express');
var router = express.Router();
const usersControllers = require("../controllers/usersControllers")
var multer = require('multer');
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


/* GET users listing. */
router.get('/userst1',usersControllers.cargart1);
router.get('/userst2',usersControllers.cargart2);
router.get('/userst3',usersControllers.cargart3);
router.get('/userst4',usersControllers.cargart4);
router.post('/observacionest1',cargar.single("otro"),usersControllers.observacionest1)
router.post('/observacionest2',cargar.single("otro"),usersControllers.observacionest2)
router.post('/observacionest3',cargar.single("otro"),usersControllers.observacionest3)
router.post('/observacionest4',cargar.single("otro"),usersControllers.observacionest4)
router.post('/subirt1',cargar.single("archivo"),usersControllers.subirt1)
router.post('/subirt2',cargar.single("archivo"),usersControllers.subirt2)
router.post('/subirt3',cargar.single("archivo"),usersControllers.subirt3)
router.post('/subirt4',cargar.single("archivo"),usersControllers.subirt4)
router.get('/pdf1',usersControllers.descargarpdf1)
router.get('/pdf2',usersControllers.descargarpdf2)
router.get('/pdf3',usersControllers.descargarpdf3)
router.get('/pdf4',usersControllers.descargarpdf4)

module.exports = router;
