module.exports={
    leer:function(conexion,funcion){
        conexion.query("select * from areas",funcion)
    },
    insertar:function(conexion,datos,funcion){
        //conexion.query("insert into areas(area_nombre,area_responsable) values(?,0)",[datos.nombre],funcion);
    },
    borrar:function(conexion,id,funcion){
        conexion.query("delete from areas where area_id=?",[id],funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("update areas set area_nombre=? where area_id=?",[datos.areaname, datos.id],funcion);
    },
    leerRespo:function(conexion,funcion){
        //conexion.query("select responsable_id, responsable_desc from responsables",funcion)
    },
    getid:function(conexion,id,funcion){
        conexion.query("select * from areas where area_id=?",[id],funcion)
    },
    getdisponibles:function(conexion,funcion){
        conexion.query("select * from areas where area_id=?",[id],funcion)
    },
    leerd:function(conexion,funcion){
        //conexion.query("select area_id, area_nombre from areas where area_responsable=0",funcion)
    }
}