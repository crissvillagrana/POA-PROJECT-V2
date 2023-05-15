var conexion=require('../config/mysqlconnection');
var responsable=require('../model/responsable');
//var borrar = require("fs")

module.exports={
    index:function(req,res){
        responsable.leer(conexion,function(err,datos){
            responsable.leerdisponibles(conexion,function(err,datosd){
                responsable.leerareasd(conexion,function(err,dispo){
                    res.render('responsables', {title:'Responsables',responsables:datos,responsablesd:datosd,disponibles:dispo});
                })
            })
        });
    },
    crear:function(req,res){
        responsable.leerareasd(conexion,function(err,datos){
            res.render('responsables/crear',{title:'Añadir Responsable',areas:datos})
        })
    },
    guardar:function(req,res){
        responsable.insertar(conexion,req.body,function(err,datos){
            res.redirect('/responsables');
        });
    },
    eliminar:function(req,res){
        responsable.borrar(conexion,req.params.id,function(err){
            res.redirect('/responsables')
        });
    },
    actualizar:function(req,res){
            if(req.body.respodesc || req.body.respouser){
                responsable.actualizar(conexion,req.body,function(err){});
            }
            res.redirect('/responsables');
    },
    editar:function(req,res){
        responsable.getid(conexion,req.params.id,function(err,registros){
            responsable.leerAreas(conexion,function(err,datos){
                res.render('responsables/editar',{title:'Editar Responsable',responsable:registros[0],areas:datos});
            })
        })
    },
    asignar:function(req,res){
        responsable.leerareasd(conexion,function(err,datos){
            responsable.getid(conexion,req.params.id,function(err,registros){
                res.render('responsables/asignar',{title:'Asignar',disponibles:datos,usuario:registros[0]})
            })
        })
    },
    asignardos:function(req,res){
        //res.send(req.params.areaid.toString()+","+req.params.respoid.toString())
        responsable.asignar(conexion,req.params.areaid,req.params.respoid,function(err){
            res.redirect('/responsables')
        })
        
    },
    desasignar:function(req,res){
        responsable.getareaid(conexion,req.params.respoid,function(err,datos){
            responsable.desasignar(conexion,req.params.respoid,datos[0].area_id,function(err){
                res.redirect('/responsables')
            })
        })
    }
}