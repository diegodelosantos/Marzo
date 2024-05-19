window.onload = function(){
    var Centro = localStorage.getItem('Centro')
    console.log(Centro)
    let Fecha = document.getElementById("Fechas")
    console.log(Fecha)

    Fecha.addEventListener('change', function() {
        console.log(Fecha.value);
    });

    $.ajax({
        type: "POST",
        url: "consulta.php",
        data: { Centro: Centro, Fecha: Fecha},
        success: function(response){
            console.log(response);
        }
    });
}