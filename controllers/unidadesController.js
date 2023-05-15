var conexion=require('../config/mysqlconnection');
var unidad=require('../model/unidad');
//var borrar = require("fs")

module.exports={
    index:function(req,res){
        unidad.leer(conexion,function(err,datos){
            res.render('unidades', {title:'Unidades',unidades:datos});
        });
    },
    crear:function(req,res){
        res.render('unidades/crear',{title:'Agregar Unidad'})
    },
    guardar:function(req,res){
        
        unidad.insertar(conexion,req.body,function(err,datos){
            res.redirect('/unidades');
        });
    },
    eliminar:function(req,res){
        unidad.borrar(conexion,req.params.id,function(err){
            res.redirect('/unidades')
        });
    },
    editar:function(req,res){
        unidad.getid(conexion,req.params.id,function(err,registros){
            res.render('unidades/editar',{title:'Editar Unidad',unidad:registros[0]})
        })
    },
    actualizar:function(req,res){
            unidad.actualizar(conexion,req.body,function(err){})
            res.redirect('/unidades')
    }
}