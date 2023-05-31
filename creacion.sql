create schema tsjPOAdb;
use tsjPOAdb;

-- tables
create table areas(
	area_id int primary key auto_increment,
    area_nombre varchar(500)
);

create table responsables(
	responsable_id int primary key auto_increment,
    responsable_desc varchar(500),
    responsable_usuario varchar(100),
    responsable_contra varchar(100),
    responsable_area int references areas(area_id),
    responsable_privilegios int
);

create table unidades(
	unidad_id int primary key auto_increment,
    unidad_desc varchar(500)
);

create table ejes(
	eje_id int primary key,
	eje_desc varchar(500)
);

create table estrategias(
	estrategia_id float primary key,
    estrategia_desc varchar(300),
    estrategia_eje int references ejes(ejes_id)
);

create table actividades(
	actividad_id int primary key auto_increment,
	actividad_eje int references ejes(eje_id),
	actividad_estrategia double references estrategias(estrategias_id),
    actividad_desc longtext,
    actividad_area int references areas(area_id),
    actividad_responsable int references responsables(responsable_id),
    actividad_meta longtext,
    actividad_indicador text,
    actividad_unidad text,
    actividad_t1 int,
    actividad_t2 int,
    actividad_t3 int,
    actividad_t4 int,
    actividad_completada int,
    actividad_status int,
	actividad_evt1 text,
	actividad_evt2 text,
	actividad_evt3 text,
	actividad_evt4 text,
	actividad_obst1 text,
	actividad_obst2 text,
	actividad_obst3 text,
	actividad_obst4 text,
	actividad_ap1 int,
	actividad_ap2 int,
	actividad_ap3 int,
	actividad_ap4 int
);