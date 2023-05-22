var conexion=require('../config/mysqlconnection');
var actividad=require('../model/actividad');
var usuario=require('../scriptsmios/datosglobales')
module.exports={
    index:function(req,res){
        switch(usuario.trimestre){
            case 1:
                actividad.leer(conexion,function(err,datos){
                    res.render('actividades/all/indext1', {title:'Actividades', actividades:datos})
                })
                break;
            case 2:
                actividad.leer(conexion,function(err,datos){
                    res.render('actividades/all/indext2', {title:'Actividades', actividades:datos})
                })
                break;
            case 3:
                actividad.leer(conexion,function(err,datos){
                    res.render('actividades/all/indext3', {title:'Actividades', actividades:datos})
                })
                break;
            case 4:
                actividad.leer(conexion,function(err,datos){
                    res.render('actividades/all/indext4', {title:'Actividades', actividades:datos})
                })
                break;
        }
        
    },
    avance:function(req,res){
        actividad.contarActividades(conexion,function(err,datos){
            res.render('actividades/avancegeneral',{title:'Avance por áreas', avance:datos})
        })
    },
    indexarea:function(req,res){
        switch(usuario.trimestre){
            case 1:
                actividad.leerporareat1(conexion,req.params.areaid,function(err,datos){
                    res.render('actividades/single/areat1',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
                })
                break;
            case 2:
                actividad.leerporareat2(conexion,req.params.areaid,function(err,datos){
                    res.render('actividades/single/areat2',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
                })
                break;
            case 3:
                actividad.leerporareat3(conexion,req.params.areaid,function(err,datos){
                    res.render('actividades/single/areat3',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
                })
                break;
            case 4:
                actividad.leerporareat4(conexion,req.params.areaid,function(err,datos){
                    res.render('actividades/single/areat4',{title:'Avance de '+datos[0].area_nombre,actividades:datos})
                })
                break;
        }
    }
}