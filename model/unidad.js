module.exports={
    leer:function(conexion,funcion){
        conexion.query("select * from unidades",funcion)
    },
    insertar:function(conexion,datos,funcion){
        conexion.query("insert into unidades(unidad_desc) values(?)",[datos.nombre],funcion);
    },
    borrar:function(conexion,id,funcion){
        conexion.query("delete from unidades where unidad_id=?",[id],funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("update unidades set unidad_desc=? where unidad_id=?",[datos.nombre,datos.id],funcion);
    },
    getid:function(conexion,id,funcion){
        conexion.query("select * from unidades where unidad_id=?",[id],funcion);
    }
}