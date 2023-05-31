$(document).ready(function () {
    
  
    
// RELOJ

    $('#reloj').html()
           
    // Setintervar recorre para aplicar la function según el tiempo que le indiques

    setInterval(() => {
        let reloj = moment().format('h:mm:ss');
        $('#reloj').html(reloj);
    }, 1000);
    
    // LOGIN FALSO EN LOCALSTORAGE

    login();
      

});