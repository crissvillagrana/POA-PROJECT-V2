var conexion=require('../config/mysqlconnection');
var area=require('../model/area');
//var borrar = require("fs")

module.exports={
    index:function(req,res){
        area.leer(conexion,function(err,datos){
                    res.render('areas', {title:'Áreas',areas:datos});
        });
    },
    crear:function(req,res){
        area.leerRespo(conexion,function(err,datos){
            res.render('areas/crear',{title:'Crear área',areas:datos});
        })
    },
    guardar:function(req,res){
        area.insertar(conexion,req.body,function(err,datos){
            res.redirect('/areas');
        });
    },
    eliminar:function(req,res){
        area.borrar(conexion,req.params.id,function(err){
            res.redirect('/areas')
        });
    },
    actualizar:function(req,res){
        if(req.body.areaname){
            area.actualizar(conexion,req.body,function(err){});
        }
        res.redirect('/areas');
    },
    editar:function(req,res){
        area.getid(conexion,req.params.id,function(err,registros){
            area.leerRespo(conexion,function(err,datos){
                res.render('areas/editar',{title:'Editar Área',areas:registros[0],responsable:datos});
            })
        })
    }
}