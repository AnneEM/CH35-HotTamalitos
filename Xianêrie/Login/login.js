// Lógica de validación del formulario
// Por ejemplo, verificar que los campos no estén vacíos

$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
})