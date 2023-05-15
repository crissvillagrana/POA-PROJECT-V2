module.exports={
    leerusuario:function(conexion,usuario,contra,funcion){
        conexion.query("select * from responsables where responsable_usuario=? and responsable_contra=?",[usuario,contra],funcion)
    }
}