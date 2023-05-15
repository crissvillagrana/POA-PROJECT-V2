const usuario = require('../scriptsmios/datosglobales')
var conexion=require('../config/mysqlconnection')
var login = require('../model/login')

module.exports={
    leer:function(req,res){
        login.leerusuario(conexion,req.body.txtuser,req.body.txtcontra,function(err,datos){
            if(datos.length>0){
                switch(datos[0].responsable_privilegios){
                    case 0:
                            usuario.savedata(datos[0].responsable_usuario,datos[0].responsable_contra,datos[0].responsable_area)
                            switch(usuario.trimestre){
                                case 1:
                                    res.redirect('users/userst1')
                                    break;
                                case 2:
                                    res.redirect('users/userst2')
                                    break;
                                case 3:
                                    res.redirect('users/userst3')
                                    break;
                                case 4:
                                    res.redirect('users/userst4')
                                    break;
                            }
                        break;
                    case 1:
                        usuario.savedata(datos[0].responsable_usuario,datos[0].responsable_contra,datos[0].responsable_area)
                        res.redirect('actividades/avance')
                        break;
                    case 2:
                        usuario.savedata(datos[0].responsable_usuario,datos[0].responsable_contra,datos[0].responsable_area)
                        res.redirect('administradores/planeacion')
                        break;
                    case 3:
                        usuario.savedata(datos[0].responsable_usuario,datos[0].responsable_contra,datos[0].responsable_area)
                        switch(usuario.trimestre){
                            case 1:
                                res.redirect('administradores/aprobart1'); break;
                            case 2:
                                res.redirect('administradores/aprobart2'); break;
                            case 3:
                                res.redirect('administradores/aprobart3'); break;
                            case 4:
                                res.redirect('administradores/aprobart4'); break;
                        }
                        break;
                }
            }else{
                res.redirect('/login/error')
            }
        })
    }
}