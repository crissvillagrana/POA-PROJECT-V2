var mysql= require("mysql"); //variable de conexion mysql
var con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Leviathansama28',
    database:'tsjpoadbfull'
}
); //parametros de conexion
con.connect(
    (err)=>{ 
        if(!err){
            console.log('Conexion establecida');
        }else{
            console.log('Error de conexion');
        }
    }
); //establecimiento de la conexion

module.exports=con; //exportar la conexion