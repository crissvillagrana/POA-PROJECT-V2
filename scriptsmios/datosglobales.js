const fecha = new Date() 
          var year = fecha.getFullYear() 
          var month = fecha.getMonth()+1
          var day = fecha.getDate() 
          var TRI=0; 
          var bstatus1, bstatus2, bstatus3, bstatus4 = false
          var fechastring = day.toString() + '-' + month.toString() + '-' +  year.toString()
          switch(month){ 
            case 1: TRI=1; break; 
            case 2: TRI=1; break; 
            case 3: TRI=1; break; 
            case 4: TRI=2; break; 
            case 5: TRI=2; break; 
            case 6: TRI=2; break; 
            case 7: TRI=3; break; 
            case 8: TRI=3; break; 
            case 9: TRI=3; break; 
            case 10: TRI=4; break; 
            case 11: TRI=4; break; 
            case 12: TRI=4; break; 
          }
          switch(TRI){
            case(2): if(day>25)bstatus1=1 
            break;
            case(3): if(day>25)bstatus1=1; bstatus2=1; 
            break;
            case(4): if(day>25)bstatus1=1; bstatus2=1; bstatus3=1; 
            break;
          }
          
const usuario = {
    username: '', 
    password: '',
    areaid: '',
    bbutton1: bstatus1,
    bbutton2: bstatus2,
    bbutton3: bstatus3,
    bbutton4: bstatus4,
    fecha: fechastring,
    trimestre : TRI,
    savedata:function(username,password,areaid){
        this.username = username
        this.password = password
        this.areaid = areaid
    },

    changeTri:function(tri){
      this.trimestre = tri
    }
}


module.exports = usuario