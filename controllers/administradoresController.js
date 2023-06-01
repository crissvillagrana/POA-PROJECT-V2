var conexion=require('../config/mysqlconnection');
var actividad=require('../model/actividad');
const usuario = require('../scriptsmios/datosglobales')
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
        actividad.leerporareat1(conexion,req.params.areaid,function(err,datos){
            res.render('administradores/singularaprobacion/indexareat1',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
        })
    },
    indexareat2:function(req,res){
        actividad.leerporareat2(conexion,req.params.areaid,function(err,datos){
            res.render('administradores/singularaprobacion/indexareat2',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
        })
    },
    indexareat3:function(req,res){
        actividad.leerporareat3(conexion,req.params.areaid,function(err,datos){
            res.render('administradores/singularaprobacion/indexareat3',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
        })
    },
    indexareat4:function(req,res){
        actividad.leerporareat4(conexion,req.params.areaid,function(err,datos){
            res.render('administradores/singularaprobacion/indexareat4',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
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
                console.log(todo)
                res.render('administradores/reportes',{title:'Reporte de avance', avance:datos, progreso:todo})
            })
        })
    },
    indexplan:function(req,res){
        res.render('planeacion/interfaz',{title:'TSJPOA'})
    }
}