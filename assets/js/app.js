function show() {
    //oculta boton y muetra el formulario para crear nuevas tarjetas//
    var boton = document.getElementById("mostrar")
    boton.style.display="none";
    document.getElementsByClassName("create")[0].style.display="inline-block";
}

window.onload = function() {
    //funcion para crear nuevas tarjetas//

    var guardar = document.getElementById("guardar");
    var newList = document.getElementById("newList");
    var section = document.getElementsByTagName("section")[0];
    var bot = document.getElementById("mostrar");

    guardar.onclick = function() {
        if (newList.value == "") {
            //el boton solo funcionara si hay algo escrito en el input//
            return false;
        } else {
            //se crean divs y los demas elemenos que componen el bloque de nuevas tarjetas//
            var lista = document.createElement("div");
            var nombreLista = document.createElement("h3");
            var tarjeta = document.createElement("textarea");
            var btn = document.createElement("button")
            //se le agregan atributos y cotenidos//
            btn.textContent="Añadir";
            btn.classList.add("btn");
            btn.id = "addCard";
            tarjeta.placeholder="Anadir tarjeta";
            nombreLista.textContent = newList.value;
            lista.appendChild(nombreLista);
            lista.appendChild(tarjeta);
            lista.appendChild(btn);
            lista.classList.add("newCreate");
            //se inserta adelante del boton para crear uno nuevo//
            section.insertBefore(lista, bot);
            //se borra el input para dejar espacio para crear uno nuevo//
            document.getElementById("newList").value = "";
            //se oculta el bloque y se vuelve a mostrar el boton de añadir//
            document.getElementById("mostrar").style.display="inline-block";
            document.getElementsByClassName("create")[0].style.display="none";

            btn.addEventListener("click",function(){

                if (tarjeta.value == "") {
                    //el boton solo funcionara si hay algo escrito en el textarea//
                    return false;
                } else {

                    var divT =  document.createElement("div");//contendor de tarjeta//
                    var txtT = document.createElement("p");//texto de tarjeta//
                    txtT.textContent = tarjeta.value;
                    divT.appendChild(txtT);
                    lista.insertBefore(divT, lista.children[1]);
                    document.getElementsByTagName("textarea")[0].value = "";

                }

            })
        }
    }




}
