// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
        
    $('.owl-carousel').owlCarousel();
    let titulo = $('h4') // tag

    let itens = $('.featured-items') // class

    let destaque = $('#featured') // id 

    console.log (titulo.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-success stretch-link');

    $('.featured-item:first h4').append( '<span class="badge bg-secondary">New</span>' )
    // $('.featured-item:first h4').start( '<span class="badge bg-secondary">New</span>' )
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.item-destaque:primeiro h4').hide()
    // $('.item-destaque:primeiro h4').show()
    // $('.item-featured:first h4').fadeIn(2000)
    // $('.item-featured:first h4').fadeOut()
    // $('.featured-item:first h4').css('color', '#f00')

     $('.featured-item h4').dblclick( function(){
       
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',

        });
     });

      /*
      * Manipulação de eventos
      */
      $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     });


    /* 
    * Callback
    * entendendo ações que começam ao termino de outra
    */
   $('.featured-item:nth(1)')
   .hide(500, function(){
      // este é o callback
      console.log( $(this).find('h4').text() + ' esgotado')
   })
   .show(500, function(){
      console.log( $(this).find('h4').text() + ' em estoque')
   })


    /*
    * Animações
    */
    const duracao = 1000 // equivalenta a 1 segundo

    $('.featured-item:nth(0)')
       .hide(duracao)
       .show(duracao)
       .fadeOut(duracao)
       .fadeIn(duracao)
       .toggle(duracao)
       .toggle(duracao)
 
    $('#form-submit').on('click', function(e){
 
       e.preventDefault()
 
       if( $('#email').val() != '' ){
 
          $('#email').animate({
             opacity: "toggle",
             top: "-50"
          }, 500, function(){
             console.log($(this).val())
          })
 
       }
 
 
    });
 
 
    /*
     * Ouvinte de eventos .nav-modal-open
     */
    $('.nav-modal-open').on('click', function(){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())

         $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show()


    })

     
     
    
         
})
