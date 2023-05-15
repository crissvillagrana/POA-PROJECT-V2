module.exports={
    leer:function(conexion,funcion){
        conexion.query("select responsables.responsable_id, responsables.responsable_desc, responsables.responsable_usuario, areas.area_nombre, responsables.responsable_contra "+
        "from responsables inner join areas on responsables.responsable_area = areas.area_id",funcion)
    },
    insertar:function(conexion,datos,funcion){
        console.log(datos)
        conexion.query("insert into responsables(responsable_desc ,responsable_usuario , responsable_contra, responsable_area) "+
        "values(?,?,?,0)",[datos.respodesc,datos.respouser,datos.respopass],funcion);
    },
    borrar:function(conexion,id,funcion){
        conexion.query("delete from responsables where responsable_id=?",[id],funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("update responsables set responsable_desc=?, responsable_usuario=?, responsable_contra=?"+
        " where responsable_id=?",[datos.respodesc,datos.respouser,datos.respopass, datos.respoid],funcion);
    },
    leerAreas:function(conexion,datos){
        conexion.query("select area_id, area_nombre from areas",datos);
    },
    getid:function(conexion,id,funcion){
        conexion.query("select * from responsables where responsable_id=?",[id],funcion)
    },
    leerdisponibles(conexion,funcion){
        conexion.query("select responsable_id, responsable_desc, responsable_usuario, responsable_contra from responsables where responsable_area=0",funcion)
    },
    leerareasd:function(conexion,funcion){
        conexion.query("select * from areas where area_responsable=0",funcion)
    },
    asignar:function(conexion,areaid,respoid,funcion){
        conexion.query("update areas, responsables set areas.area_responsable=?, responsables.responsable_area=?"+
        "where areas.area_id=? and responsables.responsable_id=?",[respoid,areaid,areaid,respoid],funcion)
    },
    desasignar:function(conexion,respoid,areaid,funcion){
        conexion.query("update responsables inner join areas on responsables.responsable_id = areas.area_responsable "+
        "set responsables.responsable_area = 0, areas.area_responsable=0"+
        " where responsables.responsable_id=? and areas.area_id=?",[respoid,areaid],funcion)
    },
    getareaid:function(conexion,respoid,funcion){
        conexion.query("select * from areas where area_responsable=?",[respoid],funcion)
    }
}