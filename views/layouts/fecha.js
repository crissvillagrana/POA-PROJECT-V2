const fecha = new Date() 
          var year = fecha.getFullYear() 
          var month = fecha.getMonth() 
          var day = fecha.getDate() 
          var TRI=0; 
        
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