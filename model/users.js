module.exports={
    cargart1:function(conexion,areaid,funcion){
        conexion.query(
            "select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_id, areas.area_nombre, responsables.responsable_desc,"+
            "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
            "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
            "actividades.actividad_completada, actividades.actividad_evt1, " +
            "actividades.actividad_obst1 as 'actividad_obs' "+
            "from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
            " inner join responsables on actividades.actividad_responsable = responsables.responsable_id where actividades.actividad_status=1 and actividades.actividad_area = ?",[areaid],funcion)
    },
    cargart2:function(conexion,areaid,funcion){
        conexion.query(
            "select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_id, areas.area_nombre, responsables.responsable_desc,"+
            "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
            "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
            "actividades.actividad_completada, actividades.actividad_evt2, " +
            "actividades.actividad_obst2 as 'actividad_obs' "+
            "from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
            " inner join responsables on actividades.actividad_responsable = responsables.responsable_id where actividades.actividad_status=1 and actividades.actividad_area = ?",[areaid],funcion)
    },
    cargart3:function(conexion,areaid,funcion){
        conexion.query(
            "select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_id, areas.area_nombre, responsables.responsable_desc,"+
            "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
            "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
            "actividades.actividad_completada, actividades.actividad_evt3, " +
            "actividades.actividad_obst3 as 'actividad_obs' "+
            "from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
            " inner join responsables on actividades.actividad_responsable = responsables.responsable_id where actividades.actividad_status=1 and actividades.actividad_area = ?",[areaid],funcion)
    },
    cargart4:function(conexion,areaid,funcion){
        conexion.query(
            "select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_id, areas.area_nombre, responsables.responsable_desc,"+
            "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
            "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
            "actividades.actividad_completada, actividades.actividad_evt4, " +
            "actividades.actividad_obst4 as 'actividad_obs' "+
            "from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
            " inner join responsables on actividades.actividad_responsable = responsables.responsable_id where actividades.actividad_status=1 and actividades.actividad_area = ?",[areaid],funcion)
    },
    uploadt1(conexion,id,archivo,funcion){
        conexion.query("update actividades set actividad_evt1=? where actividad_id=?",[archivo.filename,id],funcion)
    },
    uploadt2(conexion,id,archivo,funcion){
        conexion.query("update actividades set actividad_evt2=? where actividad_id=?",[archivo.filename,id],funcion)
    },
    uploadt3(conexion,id,archivo,funcion){
        conexion.query("update actividades set actividad_evt3=? where actividad_id=?",[archivo.filename,id],funcion)
    },
    uploadt4(conexion,id,archivo,funcion){
        conexion.query("update actividades set actividad_evt4=? where actividad_id=?",[archivo.filename,id],funcion)
    },
    observat1(conexion,id,texto,funcion){
        conexion.query("update actividades set actividad_obst1=? where actividad_id=?",[texto,id],funcion)
    },
    observat2(conexion,id,texto,funcion){
        conexion.query("update actividades set actividad_obst2=? where actividad_id=?",[texto,id],funcion)
    },
    observat3(conexion,id,texto,funcion){
        conexion.query("update actividades set actividad_obst3=? where actividad_id=?",[texto,id],funcion)
    },
    observat4(conexion,id,texto,funcion){
        conexion.query("update actividades set actividad_obst4=? where actividad_id=?",[texto,id],funcion)
    },
    avance(conexion,areaid,funcion){
        conexion.query("select count(if(actividad_completada=1,1,null)) as 'Completadas', "+
        "count(case when actividad_completada=null then 1 else 0 end) as 'Pendientes' from actividades ",[areaid],funcion)
    }
}