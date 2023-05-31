$(document).ready(function () {
    


    // LOGIN FALSO EN LOCALSTORAGE

    function login() {

        $('#login').submit(function () {
        
            let formName = $('#form-name').val();
            localStorage.setItem('form-name', formName);
        });
    
        let formName = localStorage.getItem('form-name');
        if (formName != null && formName != 'undefined') {
            //Lo que va a aparecer cuando iniciemos sesión 
            let about_parrafo = $('#about p');
            about_parrafo.html('<br><strong>Bienvenido, ' + formName + '</strong>');
            // Crear botón para cerrar sesión
            about_parrafo.append("<br/><br/><input type='submit' id='logout' value='Cerrar Sesión'>");

            $('#login').hide(); // se oculta el meter datos para iniciar sesión
            // Para recargar la pagina y que vuelva a aparecer iniciar sesión después de cerrar
            $('#logout').click(function () {
                localStorage.clear();
                location.reload();
            
            });
        }
        

    }
});