window.onload = function() {

};
function click_boton(){
    //let lista = document.getElementById('lista');
    //lista.innerHTML = "<div class='amarillo'>s sdfsdfsdfsdfs </div>";
    cargar_datos()
}


function hola_mundo(){
    alert("hola mundo");
}


function cargar_datos(){
    fetch('https://localhost:44347/api/values')
        .then(response => response.json())
        .then(data =>{
            let lista = document.getElementById('lista');
            lista.innerHTML = "";
            data.forEach(element => {
                lista.innerHTML += '<div>'+element+'</div>';
            });
        });
  }