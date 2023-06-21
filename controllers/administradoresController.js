var conexion=require('../config/mysqlconnection');
var actividad=require('../model/actividad');
const usuario = require('../scriptsmios/datosglobales')
const ExcelJS = require('exceljs');
module.exports={
    aprovet1:function(req,res){
        actividad.aprovet1(conexion,function(err,datos){
            res.render('administradores/aprobaciontrimestral/aprobart1',{title:'Actividades por evaluar',actividades:datos})
        })
    },
    aprovet2:function(req,res){
        actividad.aprovet2(conexion,function(err,datos){
            res.render('administradores/aprobaciontrimestral/aprobart2',{title:'Actividades por evaluar',actividades:datos})
        })
    },
    aprovet3:function(req,res){
        actividad.aprovet3(conexion,function(err,datos){
            res.render('administradores/aprobaciontrimestral/aprobart3',{title:'Actividades por evaluar',actividades:datos})
        })
    },
    aprovet4:function(req,res){
        actividad.aprovet4(conexion,function(err,datos){
            res.render('administradores/aprobaciontrimestral/aprobart4',{title:'Actividades por evaluar',actividades:datos})
        })
    },
    asign:function(req,res){
        res.render('administradores/asignar',{title:'Actividades a evaluar'})
    },
    aprobar(req,res){
        switch(usuario.trimestre){
            case 1: res.redirect('/administradores/aprobart1'); break;
            case 2: res.redirect('/administradores/aprobart2'); break;
            case 3: res.redirect('/administradores/aprobart3'); break;
            case 4: res.redirect('/administradores/aprobart4'); break;
        }
    },
    avance(req,res){
        actividad.contarActividades(conexion,function(err,datos){
            res.render('administradores/barradeavance',{title:'Avance por áreas', avance:datos})
        })
    },
    aprobarevidenciat1(req,res){
        actividad.aprobarevidenciat1(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart1')
        })
    },
    aprobarevidenciat2(req,res){
        actividad.aprobarevidenciat2(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart2')
        })
    },
    aprobarevidenciat3(req,res){
        actividad.aprobarevidenciat3(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart3')
        })
    },
    aprobarevidenciat4(req,res){
        actividad.aprobarevidenciat4(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart4')
        })
    },
    desaprobarevidenciat1(req,res){
        actividad.desaprobarevidenciat1(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart1')
        })
    },
    desaprobarevidenciat2(req,res){
        actividad.desaprobarevidenciat2(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart2')
        })
    },
    desaprobarevidenciat3(req,res){
        actividad.desaprobarevidenciat3(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart3')
        })
    },
    desaprobarevidenciat4(req,res){
        actividad.desaprobarevidenciat4(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobart4')
        })
    },
    indexarea:function(req,res){ //ver las actividades a evaluar de cada area, pero evaluando el trimestre primero
        switch(usuario.trimestre){
            case 1: res.redirect('/administradores/aprobar/'+req.params.areaid+'/t1'); break;
            case 2: res.redirect('/administradores/aprobar/'+req.params.areaid+'/t2'); break;
            case 3: res.redirect('/administradores/aprobar/'+req.params.areaid+'/t3'); break;
            case 4: res.redirect('/administradores/aprobar/'+req.params.areaid+'/t4'); break;
        }
    },
    indexareat1:function(req,res){
        actividad.nombrearea(conexion,req.params.areaid,function(err,nombre){
            actividad.leerporareat1(conexion,req.params.areaid,function(err,datos){
                res.render('administradores/singularaprobacion/indexareat1',{title:'Avance de '+nombre[0].area_nombre,actividades:datos})
            })
        })
        
    },
    indexareat2:function(req,res){
        actividad.nombrearea(conexion,req.params.areaid,function(err,nombre){
            actividad.leerporareat2(conexion,req.params.areaid,function(err,datos){
                res.render('administradores/singularaprobacion/indexareat2',{title:'Avance de '+nombre[0].area_nombre,actividades:datos})
            })
        })
    },
    indexareat3:function(req,res){
        actividad.nombrearea(conexion,req.params.areaid,function(err,nombre){
            actividad.leerporareat3(conexion,req.params.areaid,function(err,datos){
            res.render('administradores/singularaprobacion/indexareat3',{title:'Avance de '+nombre[0].area_nombre,actividades:datos})
        })
        })
    },
    indexareat4:function(req,res){
        actividad.nombrearea(conexion,req.params.areaid,function(err,nombre){
            actividad.leerporareat4(conexion,req.params.areaid,function(err,datos){
                res.render('administradores/singularaprobacion/indexareat4',{title:'Avance de '+nombre[0].area_nombre,actividades:datos})
            })
        })
    },
    singleae1:function(req,res){
        actividad.aprobarevidenciat1(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t1')
        })
    },
    singleae2:function(req,res){
        actividad.aprobarevidenciat2(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t2')
        })
    },
    singleae3:function(req,res){
        actividad.aprobarevidenciat3(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t3')
        })
    },
    singleae4:function(req,res){
        actividad.aprobarevidenciat4(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t4')
        })
    },
    singledae1:function(req,res){
        actividad.desaprobarevidenciat1(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t1')
        })
    },
    singledae2:function(req,res){
        actividad.desaprobarevidenciat2(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t2')
        })
    },
    singledae3:function(req,res){
        actividad.desaprobarevidenciat3(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t3')
        })
    },
    singledae4:function(req,res){
        actividad.desaprobarevidenciat4(conexion,req.body.idactividad,function(err){
            res.redirect('/administradores/aprobar/'+req.params.areaid+'/t4')
        })
    },
    reportes:function(req,res){
        actividad.contarActividades(conexion,function(err,datos){
            actividad.contartodo(conexion,function(err,todo){
                actividad.cuentat1(conexion,function(err,datost1){
                    actividad.cuentat2(conexion,function(err,datost2){
                        actividad.cuentat3(conexion,function(err,datost3){
                            actividad.cuentat4(conexion,function(err,datost4){
                                actividad.contartodoaprove(conexion,function(err,todoa){
                                    res.render('administradores/reportes',{title:'Reporte de avance', 
                                avance:datos, 
                                progreso:todo,
                                progresoa:todoa,
                                tri1:datost1,
                                tri2:datost2,
                                tri3:datost3,
                                tri4:datost4
                                })
                            })
                            })
                        })
                    })
                })
            })
        })
    },
    indexplan:function(req,res){
        res.render('planeacion/interfaz',{title:'TSJPOA'})
    },
    xltabla1:function(req,res){
        actividad.contartodoaprove(conexion,function(err,datos){
            // Crear un nuevo libro de Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            // Agregar datos a las celdas
            worksheet.getCell('A1').value = 'Enero - Marzo';
            worksheet.getCell('B1').value = 'Abril - Junio';
            worksheet.getCell('C1').value = 'Julio - Septiembre';
            worksheet.getCell('D1').value = 'Octubre - Diciembre';
            worksheet.getCell('E1').value = 'Actividades Registradas';

            worksheet.getCell('A2').value = datos[0].completadas_t1;
            worksheet.getCell('B2').value = datos[0].completadas_t2;
            worksheet.getCell('C2').value = datos[0].completadas_t3;
            worksheet.getCell('D2').value = datos[0].completadas_t4;
            worksheet.getCell('E2').value = datos[0].total_actividades;

            // Configurar el tipo de contenido de la respuesta
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="aprobacion_trimestral.xlsx"');

            // Escribir el libro de Excel en la respuesta
            workbook.xlsx.write(res)
            .then(() => {
                // Finalizar la respuesta
                res.end();
            })
            .catch((error) => {
                console.log('Error al generar el archivo Excel:', error);
                res.status(500).send('Error al generar el archivo Excel');
            });
        })
    },
    xltabla2:function(req,res){
        actividad.cuentat1(conexion,function(err,tri1){
            // Crear un nuevo libro de Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            // Agregar datos a las celdas
            worksheet.getCell('A1').value = 'Area';
            worksheet.getCell('B1').value = 'Arobadas';
            worksheet.getCell('C1').value = 'Registradas';
            worksheet.getCell('D1').value = 'Avance';

            for(let x=0; x<tri1.length; x++) {
                worksheet.getCell('A'+(x+2)).value = tri1[x].area_nombre;
                worksheet.getCell('B'+(x+2)).value = tri1[x].actividades_aprobadas;
                worksheet.getCell('C'+(x+2)).value = tri1[x].actividades_registradas;
                worksheet.getCell('D'+(x+2)).value = Math.round((tri1[x].actividades_aprobadas * 100)/tri1[x].actividades_registradas)+'%';
            }

            // Configurar el tipo de contenido de la respuesta
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="avance_trimestral_ene-mar.xlsx"');

            // Escribir el libro de Excel en la respuesta
            workbook.xlsx.write(res)
            .then(() => {
                // Finalizar la respuesta
                res.end();
            })
            .catch((error) => {
                console.log('Error al generar el archivo Excel:', error);
                res.status(500).send('Error al generar el archivo Excel');
            });
        })
    },
    xltabla3:function(req,res){
        actividad.cuentat2(conexion,function(err,tri2){
             // Crear un nuevo libro de Excel
             const workbook = new ExcelJS.Workbook();
             const worksheet = workbook.addWorksheet('Datos');
 
             // Agregar datos a las celdas
             worksheet.getCell('A1').value = 'Area';
             worksheet.getCell('B1').value = 'Arobadas';
             worksheet.getCell('C1').value = 'Registradas';
             worksheet.getCell('D1').value = 'Avance';
 
             for(let x=0; x<tri2.length; x++) {
                 worksheet.getCell('A'+(x+2)).value = tri2[x].area_nombre;
                 worksheet.getCell('B'+(x+2)).value = tri2[x].actividades_aprobadas;
                 worksheet.getCell('C'+(x+2)).value = tri2[x].actividades_registradas;
                 worksheet.getCell('D'+(x+2)).value = Math.round((tri2[x].actividades_aprobadas * 100)/tri2[x].actividades_registradas)+'%';
             }
 
             // Configurar el tipo de contenido de la respuesta
             res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
             res.setHeader('Content-Disposition', 'attachment; filename="avance_trimestral_abr-jun.xlsx"');
 
             // Escribir el libro de Excel en la respuesta
             workbook.xlsx.write(res)
             .then(() => {
                 // Finalizar la respuesta
                 res.end();
             })
             .catch((error) => {
                 console.log('Error al generar el archivo Excel:', error);
                 res.status(500).send('Error al generar el archivo Excel');
             });
        })
    },
    xltabla4:function(req,res){
        actividad.cuentat3(conexion,function(err,tri3){
             // Crear un nuevo libro de Excel
             const workbook = new ExcelJS.Workbook();
             const worksheet = workbook.addWorksheet('Datos');
 
             // Agregar datos a las celdas
             worksheet.getCell('A1').value = 'Area';
             worksheet.getCell('B1').value = 'Arobadas';
             worksheet.getCell('C1').value = 'Registradas';
             worksheet.getCell('D1').value = 'Avance';
 
             for(let x=0; x<tri3.length; x++) {
                 worksheet.getCell('A'+(x+2)).value = tri3[x].area_nombre;
                 worksheet.getCell('B'+(x+2)).value = tri3[x].actividades_aprobadas;
                 worksheet.getCell('C'+(x+2)).value = tri3[x].actividades_registradas;
                 worksheet.getCell('D'+(x+2)).value = Math.round((tri3[x].actividades_aprobadas * 100)/tri3[x].actividades_registradas)+'%';
             }
 
             // Configurar el tipo de contenido de la respuesta
             res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
             res.setHeader('Content-Disposition', 'attachment; filename="avance_trimestral_jul-sep.xlsx"');
 
             // Escribir el libro de Excel en la respuesta
             workbook.xlsx.write(res)
             .then(() => {
                 // Finalizar la respuesta
                 res.end();
             })
             .catch((error) => {
                 console.log('Error al generar el archivo Excel:', error);
                 res.status(500).send('Error al generar el archivo Excel');
             });
        })
    },
    xltabla5:function(req,res){
        actividad.cuentat4(conexion,function(err,tri4){
            // Crear un nuevo libro de Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            // Agregar datos a las celdas
            worksheet.getCell('A1').value = 'Area';
            worksheet.getCell('B1').value = 'Arobadas';
            worksheet.getCell('C1').value = 'Registradas';
            worksheet.getCell('D1').value = 'Avance';

            for(let x=0; x<tri4.length; x++) {
                worksheet.getCell('A'+(x+2)).value = tri4[x].area_nombre;
                worksheet.getCell('B'+(x+2)).value = tri4[x].actividades_aprobadas;
                worksheet.getCell('C'+(x+2)).value = tri4[x].actividades_registradas;
                worksheet.getCell('D'+(x+2)).value = Math.round((tri4[x].actividades_aprobadas * 100)/tri4[x].actividades_registradas)+'%';
            }

            // Configurar el tipo de contenido de la respuesta
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="avance_trimestral_oct-dic.xlsx"');

            // Escribir el libro de Excel en la respuesta
            workbook.xlsx.write(res)
            .then(() => {
                // Finalizar la respuesta
                res.end();
            })
            .catch((error) => {
                console.log('Error al generar el archivo Excel:', error);
                res.status(500).send('Error al generar el archivo Excel');
            });
        })
    },
    xltabla6:function(req,res){
        actividad.contartodo(conexion,function(err,progreso){
            // Crear un nuevo libro de Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            // Agregar datos a las celdas
            worksheet.getCell('A1').value = 'Actividades Completadas';
            worksheet.getCell('B1').value = 'Actividades Programadas';
            worksheet.getCell('C1').value = 'Porcentaje de avance';

            worksheet.getCell('A2').value = progreso[0].total_completadas;
            worksheet.getCell('B2').value = progreso[0].total_actividades;
            worksheet.getCell('C2').value = Math.round((progreso[0].total_completadas * 100)/progreso[0].total_actividades)

            // Configurar el tipo de contenido de la respuesta
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="avance_total.xlsx"');

            // Escribir el libro de Excel en la respuesta
            workbook.xlsx.write(res)
            .then(() => {
                // Finalizar la respuesta
                res.end();
            })
            .catch((error) => {
                console.log('Error al generar el archivo Excel:', error);
                res.status(500).send('Error al generar el archivo Excel');
            });
        })
    },
    xltabla7:function(req,res){
        actividad.contarActividades(conexion,function(err,avance){
            // Crear un nuevo libro de Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            // Agregar datos a las celdas
            worksheet.getCell('A1').value = 'Area';
            worksheet.getCell('B1').value = 'Completadas';
            worksheet.getCell('C1').value = 'Pendientes';
            worksheet.getCell('D1').value = 'Total';
            worksheet.getCell('E1').value = 'Avance';

            for(let x=0; x<avance.length; x++) {
                worksheet.getCell('A'+(x+2)).value = avance[x].area_nombre;
                worksheet.getCell('B'+(x+2)).value = avance[x].actividades_completadas;
                worksheet.getCell('C'+(x+2)).value = avance[x].actividades_registradas - avance[x].actividades_completadas;
                worksheet.getCell('D'+(x+2)).value = avance[x].actividades_registradas;
                worksheet.getCell('E'+(x+2)).value = Math.round((avance[x].actividades_completadas * 100)/avance[x].actividades_registradas)+'%'
            }

            // Configurar el tipo de contenido de la respuesta
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="avance_total_por_area.xlsx"');

            // Escribir el libro de Excel en la respuesta
            workbook.xlsx.write(res)
            .then(() => {
                // Finalizar la respuesta
                res.end();
            })
            .catch((error) => {
                console.log('Error al generar el archivo Excel:', error);
                res.status(500).send('Error al generar el archivo Excel');
            });
        })
    }
}