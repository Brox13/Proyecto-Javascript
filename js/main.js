$(document).ready(function(){
    
    // SLIDER

     //El if es para que en caso que exista index en localstorage siga haciendo lo seleccionado
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true,
        
        });
    }
    
    // POSTS

    //El if es para que en caso que exista index en localstorage siga haciendo lo seleccionado
    if(window.location.href.indexOf('index') > -1) {
        let posts = [
            {
                title: 'Primera Noticia',
                date: 'Publicado el día ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia consequat nibh, vel lobortis sem convallis ut. Sed interdum porttitor mi eu gravida. Vestibulum aliquet libero vel ante finibus accumsan. Maecenas viverra, justo a finibus dictum, tellus magna tempus diam, vel fringilla turpis elit ut ex. Morbi eu turpis eu velit tincidunt ultrices ac id neque. Fusce semper nisl ac arcu imperdiet, at placerat diam gravida. Etiam condimentum, nulla eu porttitor ultricies, nisl dui ultrices velit, vitae tincidunt tellus dui vel enim. Nullam ante arcu, bibendum vitae est id, posuere euismod ante. Nullam nisl dui, cursus non lectus lacinia, porta pretium mauris. Proin laoreet massa sem.'
            },
            {
                title: 'Segunda Noticia',
                date: 'Publicado el día ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia consequat nibh, vel lobortis sem convallis ut. Sed interdum porttitor mi eu gravida. Vestibulum aliquet libero vel ante finibus accumsan. Maecenas viverra, justo a finibus dictum, tellus magna tempus diam, vel fringilla turpis elit ut ex. Morbi eu turpis eu velit tincidunt ultrices ac id neque. Fusce semper nisl ac arcu imperdiet, at placerat diam gravida. Etiam condimentum, nulla eu porttitor ultricies, nisl dui ultrices velit, vitae tincidunt tellus dui vel enim. Nullam ante arcu, bibendum vitae est id, posuere euismod ante. Nullam nisl dui, cursus non lectus lacinia, porta pretium mauris. Proin laoreet massa sem.'
            },
            {
                title: 'Tercera Noticia',
                date: 'Publicado el día ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia consequat nibh, vel lobortis sem convallis ut. Sed interdum porttitor mi eu gravida. Vestibulum aliquet libero vel ante finibus accumsan. Maecenas viverra, justo a finibus dictum, tellus magna tempus diam, vel fringilla turpis elit ut ex. Morbi eu turpis eu velit tincidunt ultrices ac id neque. Fusce semper nisl ac arcu imperdiet, at placerat diam gravida. Etiam condimentum, nulla eu porttitor ultricies, nisl dui ultrices velit, vitae tincidunt tellus dui vel enim. Nullam ante arcu, bibendum vitae est id, posuere euismod ante. Nullam nisl dui, cursus non lectus lacinia, porta pretium mauris. Proin laoreet massa sem.'
            },
            {
                title: 'Cuarta Noticia',
                date: 'Publicado el día ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia consequat nibh, vel lobortis sem convallis ut. Sed interdum porttitor mi eu gravida. Vestibulum aliquet libero vel ante finibus accumsan. Maecenas viverra, justo a finibus dictum, tellus magna tempus diam, vel fringilla turpis elit ut ex. Morbi eu turpis eu velit tincidunt ultrices ac id neque. Fusce semper nisl ac arcu imperdiet, at placerat diam gravida. Etiam condimentum, nulla eu porttitor ultricies, nisl dui ultrices velit, vitae tincidunt tellus dui vel enim. Nullam ante arcu, bibendum vitae est id, posuere euismod ante. Nullam nisl dui, cursus non lectus lacinia, porta pretium mauris. Proin laoreet massa sem.'
            },
            {
                title: 'Quinta Noticia',
                date: 'Publicado el día ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia consequat nibh, vel lobortis sem convallis ut. Sed interdum porttitor mi eu gravida. Vestibulum aliquet libero vel ante finibus accumsan. Maecenas viverra, justo a finibus dictum, tellus magna tempus diam, vel fringilla turpis elit ut ex. Morbi eu turpis eu velit tincidunt ultrices ac id neque. Fusce semper nisl ac arcu imperdiet, at placerat diam gravida. Etiam condimentum, nulla eu porttitor ultricies, nisl dui ultrices velit, vitae tincidunt tellus dui vel enim. Nullam ante arcu, bibendum vitae est id, posuere euismod ante. Nullam nisl dui, cursus non lectus lacinia, porta pretium mauris. Proin laoreet massa sem.'
            },
            ];
    
    
  
//ahora reccorremos todos los post incrustando los json en la plantilla que sera la que vaya luego en el html y con jQuery elefimos el id que esta dentro del div posts para clavar el post dentro de el
    posts.forEach((item, index) => {

        let post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;
        $('#posts').append(post);
    });
        };

    
    // SELECTOR CAMBIO COLORES

    let theme = $('#theme');
// Para cambiar a verde, hemos metido el id del href theme en una variable y ahora a cada tema le hacemos un evento click y le cambiamos el atributo href a la pag css que corresponda
    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });
    
    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });
    
    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });
    

    // SCROLL ARRIBA WEB

    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500)
        return false;
    });

    
    login();
});
      