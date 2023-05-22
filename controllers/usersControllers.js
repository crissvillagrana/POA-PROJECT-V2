var usuario = require('../scriptsmios/datosglobales')
var conexion=require('../config/mysqlconnection')
var user = require('../model/users')
const PDFDocument = require('pdfkit');
const { fecharray } = require('../scriptsmios/datosglobales')

module.exports={
    cargart1:function(req,res){
        user.cargart1(conexion,usuario.areaid,function(err,datos){
            user.avance(conexion,usuario.areaid,function(err,avance){
                res.render('users/userst1',{title:'Actividades',
                actividades:datos,
                bbutton1:usuario.bbutton1,
                fechastring:usuario.fecha,
                trimestre:usuario.trimestre,
                usuario:usuario,
                avance:avance})
            })
        })
    },
    cargart2:function(req,res){
        user.cargart2(conexion,usuario.areaid,function(err,datos){
            user.avance(conexion,usuario.areaid,function(err,avance){
                res.render('users/userst2',{title:'Actividades',
                actividades:datos,
                bbutton2:usuario.bbutton2,
                fechastring:usuario.fecha,
                trimestre:usuario.trimestre,
                usuario:usuario,
                avance:avance})
            })
        })
    },
    cargart3:function(req,res){
        user.cargart3(conexion,usuario.areaid,function(err,datos){
            user.avance(conexion,usuario.areaid,function(err,avance){
                res.render('users/userst3',{title:'Actividades',
                actividades:datos,
                bbutton3:usuario.bbutton3,
                fechastring:usuario.fecha,
                trimestre:usuario.trimestre,
                usuario:usuario,
                avance:avance})
            })
        })
    },
    cargart4:function(req,res){
        user.cargart4(conexion,usuario.areaid,function(err,datos){
            user.avance(conexion,usuario.areaid,function(err,avance){
                res.render('users/userst4',{title:'Actividades',
                actividades:datos,
                bbutton4:usuario.bbutton4,
                fechastring:usuario.fecha,
                trimestre:usuario.trimestre,
                usuario:usuario,
                avance:avance})
            })
        })
    },
    observacionest1:function(req,res){
        user.observat1(conexion,req.body.idactividad,req.body.observaciones,function(err){
            res.redirect('/users/userst1')
        })
    },
    observacionest2:function(req,res){
        user.observat2(conexion,req.body.idactividad,req.body.observaciones,function(err){
            res.redirect('/users/userst2')
        })
    },
    observacionest3:function(req,res){
        user.observat3(conexion,req.body.idactividad,req.body.observaciones,function(err){
            res.redirect('/users/userst3')
        })
    },
    observacionest4:function(req,res){
        user.observat4(conexion,req.body.idactividad,req.body.observaciones,function(err){
            res.redirect('/users/userst4')
        })
    },
    subirt1:function(req,res){
        user.uploadt1(conexion,req.body.idactividad,req.file,function(err){
            res.redirect('/users/userst1')
        })
    },
    subirt2:function(req,res){
        user.uploadt2(conexion,req.body.idactividad,req.file,function(err){
            res.redirect('/users/userst2')
        })
    },
    subirt3:function(req,res){
        user.uploadt3(conexion,req.body.idactividad,req.file,function(err){
            res.redirect('/users/userst3')
        })
    },
    subirt4:function(req,res){
        user.uploadt4(conexion,req.body.idactividad,req.file,function(err){
            res.redirect('/users/userst4')
        })
    },
    descargarpdf1:function(req,res){
        user.contarevidenciast1(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf1(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Courier'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                doc.image('public/images/logo300x300.png', 430, 15, {fit: [100, 100], align: 'center', valign: 'center'})
                .rect(430, 15, 100, 100).stroke();
                doc.moveDown();
                doc.text('Poder Judicial del Estado de Nayarit')
                doc.text('Contraloría')
                doc.moveDown();
                doc.lineTo(0,72)
                doc.moveDown();
                doc.text('Actividades Entregadas del trimestre ENERO - MARZO:')
                
                for(var x=0;x<evidencias[0].Evidencias_Subidas;x++){
                    doc.moveDown();
                    doc.text(datos[x].actividad_desc)
                }//end for
                //end pdf
                doc.end();
            })
        })
    },
    descargarpdf2:function(req,res){
        user.contarevidenciast2(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf2(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Courier'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                doc.image('public/images/logo300x300.png', 430, 15, {fit: [100, 100], align: 'center', valign: 'center'})
                .rect(430, 15, 100, 100).stroke();
                doc.moveDown();
                doc.text('Poder Judicial del Estado de Nayarit')
                doc.text('Contraloría')
                doc.moveDown();
                doc.lineTo(0,72)
                doc.moveDown();
                doc.text('Actividades Entregadas del trimestre ABRIL - JUNIO:')
                
                for(var x=0;x<evidencias[0].Evidencias_Subidas;x++){
                    doc.moveDown();
                    doc.text(datos[x].actividad_desc)
                }//end for
                //end pdf
                doc.end();
            })
        })
    },
    descargarpdf3:function(req,res){
        user.contarevidenciast4(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf4(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Courier'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                doc.image('public/images/logo300x300.png', 430, 15, {fit: [100, 100], align: 'center', valign: 'center'})
                .rect(430, 15, 100, 100).stroke();
                doc.moveDown();
                doc.text('Poder Judicial del Estado de Nayarit')
                doc.text('Contraloría')
                doc.moveDown();
                doc.lineTo(0,72)
                doc.moveDown();
                doc.text('Actividades Entregadas del trimestre JULIO - SEPTIEMBRE:')
                
                for(var x=0;x<evidencias[0].Evidencias_Subidas;x++){
                    doc.moveDown();
                    doc.text(datos[x].actividad_desc)
                }//end for
                //end pdf
                doc.end();
            })
        })
    },
    descargarpdf4:function(req,res){
        user.contarevidenciast4(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf4(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Courier'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                doc.image('public/images/logo300x300.png', 430, 15, {fit: [100, 100], align: 'center', valign: 'center'})
                .rect(430, 15, 100, 100).stroke();
                doc.moveDown();
                doc.text('Poder Judicial del Estado de Nayarit')
                doc.text('Contraloría')
                doc.moveDown();
                doc.lineTo(0,72)
                doc.moveDown();
                doc.text('Actividades Entregadas del trimestre OCTUBRE - DICIEMBRE:')
                
                for(var x=0;x<evidencias[0].Evidencias_Subidas;x++){
                    doc.moveDown();
                    doc.text(datos[x].actividad_desc)
                }//end for
                //end pdf
                doc.end();
            })
        })
    }
}