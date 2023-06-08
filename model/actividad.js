module.exports={
    leer:function(conexion,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_evt1, actividades.actividad_obst1, "+
        "actividades.actividad_t2, actividades.actividad_evt2, actividades.actividad_obst2, "+
        "actividades.actividad_t3, actividades.actividad_evt3, actividades.actividad_obst3, "+
        "actividades.actividad_t4, actividades.actividad_evt4, actividades.actividad_obst4, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id) " +
        "inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1",funcion)
    },
    contarActividades(conexion,funcion){
        conexion.query("select areas.area_id, areas.area_nombre, "+
        "count(actividades.actividad_id) as 'actividades_registradas', "+
        "count(if(actividades.actividad_completada=4,1,null)) as 'actividades_completadas'"+
        "from actividades "+
        "inner join areas on actividades.actividad_area = areas.area_id "+
        "group by actividad_area",funcion)
    },
    contartodo(conexion,funcion){
        conexion.query("select count(if(actividad_completada=4,1,null)) as 'total_completadas',count(*) as 'total_actividades' from actividades",funcion)
    },
    leerporareat1(conexion,areaid,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt1, actividades.actividad_obst1, actividades.actividad_ap1, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        "inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_area = ? and actividades.actividad_t1!=0",[areaid],funcion)
    },
    leerporareat2(conexion,areaid,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad, "+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt2, actividades.actividad_obst2, actividades.actividad_ap2, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        "inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_area = ? and actividades.actividad_t2!=0",[areaid],funcion)
    },
    leerporareat3(conexion,areaid,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt3, actividades.actividad_obst3, actividades.actividad_ap3, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        "inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_area = ? and actividades.actividad_t3!=0",[areaid],funcion)
    },
    leerporareat4(conexion,areaid,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt4, actividades.actividad_obst4, actividades.actividad_ap4, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        "inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_area = ? and actividades.actividad_t4!=0",[areaid],funcion)
    },
    aprobarall(conexion,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_evt1, actividades.actividad_obst1, "+
        "actividades.actividad_t2, actividades.actividad_evt2, actividades.actividad_obst2, "+
        "actividades.actividad_t3, actividades.actividad_evt3, actividades.actividad_obst3, "+
        "actividades.actividad_t4, actividades.actividad_evt4, actividades.actividad_obst4, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        " inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1",funcion)
    },
    aprovet1(conexion,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt1, actividades.actividad_obst1, actividad_ap1,"+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        " inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_t1!=0",funcion)
    },
    aprovet2(conexion,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt2, actividades.actividad_obst2, actividad_ap2,"+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        " inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_t2!=0",funcion)
    },
    aprovet3(conexion,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt3, actividades.actividad_obst3, actividad_ap3,"+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        " inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_t3!=0",funcion)
    },
    aprovet4(conexion,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_t2, actividades.actividad_t3, actividades.actividad_t4, "+
        "actividades.actividad_evt4, actividades.actividad_obst4, actividad_ap4,"+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        " inner join responsables on actividades.actividad_responsable = responsables.responsable_id "+
        "where actividades.actividad_status=1 and actividades.actividad_t4!=0",funcion)
    },
    aprobarsingle(conexion,areaid,funcion){
        conexion.query("select actividades.actividad_id, actividades.actividad_eje, actividades.actividad_estrategia, actividades.actividad_desc, areas.area_nombre, responsables.responsable_desc,"+
        "actividades.actividad_meta, actividades.actividad_indicador, actividades.actividad_unidad,"+
        "actividades.actividad_t1, actividades.actividad_evt1, actividades.actividad_obst1, "+
        "actividades.actividad_t2, actividades.actividad_evt2, actividades.actividad_obst2, "+
        "actividades.actividad_t3, actividades.actividad_evt3, actividades.actividad_obst3, "+
        "actividades.actividad_t4, actividades.actividad_evt4, actividades.actividad_obst4, "+
        "actividades.actividad_completada, actividades.actividad_status from (actividades inner join areas on actividades.actividad_area = areas.area_id)"+
        " inner join responsables on actividades.actividad_responsable = responsables.responsable_id where actividades.actividad_area = ? "+
        "and actividades.actividad_status=1",[areaid],funcion)
    },
    aprobarevidenciat1(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap1=1, actividad_completada = actividad_completada+1 where actividad_id=?",[id],funcion)
    },
    aprobarevidenciat2(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap2=1, actividad_completada = actividad_completada+1 where actividad_id=?",[id],funcion)
    },
    aprobarevidenciat3(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap3=1, actividad_completada = actividad_completada+1 where actividad_id=?",[id],funcion)
    },
    aprobarevidenciat4(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap4=1, actividad_completada = actividad_completada+1 where actividad_id=?",[id],funcion)
    },
    desaprobarevidenciat1(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap1=0, actividad_completada = actividad_completada-1 where actividad_id=?",[id],funcion)
    },
    desaprobarevidenciat2(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap2=0, actividad_completada = actividad_completada-1 where actividad_id=?",[id],funcion)
    },
    desaprobarevidenciat3(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap3=0, actividad_completada = actividad_completada-1 where actividad_id=?",[id],funcion)
    },
    desaprobarevidenciat4(conexion,id,funcion){
        conexion.query("update actividades set actividad_ap4=0, actividad_completada = actividad_completada-1 where actividad_id=?",[id],funcion)
    },
    nombrearea(conexion,id,funcion){
        conexion.query("select area_nombre from areas where area_id=?",[id],funcion)
    }
}