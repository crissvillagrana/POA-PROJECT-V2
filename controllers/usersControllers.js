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
                const doc = new PDFDocument({font: 'Times-Roman'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                
                doc.image('public/images/logo300x300.png', 10, 10, {fit: [70, 70], align: 'center', valign: 'center'}).stroke();
                doc.moveDown();
                doc.text(usuario.fecha,550,40)
                doc.text('Poder Judicial del Estado de Nayarit',150,40)
                doc.text('PROGRAMA OPERATIVO ANUAL '+usuario.year)
                doc.moveDown();
                doc.moveTo(0,90).lineTo(1200,90).stroke()
                doc.text('Reporte de actividades del trimestre ENERO - MARZO:',30,110,{align:'left'})
                doc.moveDown()
                doc.fontSize(10)
                for(var x=0;x<evidencias[0].actividades_cantidad;x++){
                    if(!datos[x].actividad_evt1){
                        doc.moveDown();
                        doc.fillColor('red').text('NO ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t1,
                        {align:'left'})
                    }else{
                        doc.moveDown();
                        doc.fillColor('black').text('ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t1,
                        {align:'left'})
                    }
                }//end for
                doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();
                doc.fontSize(12)
                doc.fillColor('black')
                doc.text('Area: '+datos[0].area_nombre)
                doc.text('Responsable: '+datos[0].responsable_desc)
                //end pdf
                doc.end();
            })
        })
    },
    descargarpdf2:function(req,res){
        user.contarevidenciast2(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf2(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Times-Roman'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                
                doc.image('public/images/logo300x300.png', 10, 10, {fit: [70, 70], align: 'center', valign: 'center'}).stroke();
                doc.moveDown();
                doc.text(usuario.fecha,550,40)
                doc.text('Poder Judicial del Estado de Nayarit',150,40)
                doc.text('PROGRAMA OPERATIVO ANUAL '+usuario.year)
                doc.moveDown();
                doc.moveTo(0,90).lineTo(1200,90).stroke()
                doc.text('Reporte de actividades del trimestre ABRIL - JUNIO:',30,110,{align:'left'})
                doc.moveDown()
                doc.fontSize(10)
                for(var x=0;x<evidencias[0].actividades_cantidad;x++){
                    if(!datos[x].actividad_evt2){
                        doc.moveDown();
                        doc.fillColor('red').text('NO ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t2,
                        {align:'left'})
                    }else{
                        doc.moveDown();
                        doc.fillColor('black').text('ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t2,
                        {align:'left'})
                    }
                }//end for
                doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();
                doc.fontSize(12)
                doc.fillColor('black')
                doc.text('Area: '+datos[0].area_nombre)
                doc.text('Responsable: '+datos[0].responsable_desc)
                //end pdf
                doc.end();
            })
        })
    },
    descargarpdf3:function(req,res){
        user.contarevidenciast3(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf3(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Times-Roman'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                
                doc.image('public/images/logo300x300.png', 10, 10, {fit: [70, 70], align: 'center', valign: 'center'}).stroke();
                doc.moveDown();
                doc.text(usuario.fecha,550,40)
                doc.text('Poder Judicial del Estado de Nayarit',150,40)
                doc.text('PROGRAMA OPERATIVO ANUAL '+usuario.year)
                doc.moveDown();
                doc.moveTo(0,90).lineTo(1200,90).stroke()
                doc.text('Reporte de actividades del trimestre JULIO - SEPTIEMBRE:',30,110,{align:'left'})
                doc.moveDown()
                doc.fontSize(10)
                for(var x=0;x<evidencias[0].actividades_cantidad;x++){
                    if(!datos[x].actividad_evt3){
                        doc.moveDown();
                        doc.fillColor('red').text('NO ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t3,
                        {align:'left'})
                    }else{
                        doc.moveDown();
                        doc.fillColor('black').text('ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t3,
                        {align:'left'})
                    }
                }//end for
                doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();
                doc.fontSize(12)
                doc.fillColor('black')
                doc.text('Area: '+datos[0].area_nombre)
                doc.text('Responsable: '+datos[0].responsable_desc)
                //end pdf
                doc.end();
            })
        })
    },
    descargarpdf4:function(req,res){
        user.contarevidenciast4(conexion,usuario.areaid,function(err,evidencias){
            user.evidenciaspdf4(conexion,usuario.areaid,function(err,datos){
                // Crear un nuevo documento PDF
                const doc = new PDFDocument({font: 'Times-Roman'});

                // Configurar el encabezado del archivo PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');

                // Conectar el flujo de datos del documento PDF con la respuesta HTTP
                doc.pipe(res);
                // Agregar contenido al documento PDF
                
                doc.image('public/images/logo300x300.png', 10, 10, {fit: [70, 70], align: 'center', valign: 'center'}).stroke();
                doc.moveDown();
                doc.text(usuario.fecha,550,40)
                doc.text('Poder Judicial del Estado de Nayarit',150,40)
                doc.text('PROGRAMA OPERATIVO ANUAL '+usuario.year)
                doc.moveDown();
                doc.moveTo(0,90).lineTo(1200,90).stroke()
                doc.text('Reporte de actividades del trimestre OCTUBRE - DICIEMBRE:',30,110,{align:'left'})
                doc.moveDown()
                doc.fontSize(10)
                for(var x=0;x<evidencias[0].actividades_cantidad;x++){
                    if(!datos[x].actividad_evt4){
                        doc.moveDown();
                        doc.fillColor('red').text('NO ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t4,
                        {align:'left'})
                    }else{
                        doc.moveDown();
                        doc.fillColor('black').text('ENTREGADA    '+
                        datos[x].actividad_id+'    '+
                        datos[x].actividad_eje+'    '+
                        datos[x].actividad_estrategia+'    '+
                        datos[x].actividad_desc+'   '+
                        datos[x].actividad_meta+'   '+
                        datos[x].actividad_indicador+'  '+
                        datos[x].actividad_unidad+' '+
                        datos[x].actividad_t4,
                        {align:'left'})
                    }
                }//end for
                doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();doc.moveDown();
                doc.fontSize(12)
                doc.fillColor('black')
                doc.text('Area: '+datos[0].area_nombre)
                doc.text('Responsable: '+datos[0].responsable_desc)
                //end pdf
                doc.end();
            })
        })
    }
}