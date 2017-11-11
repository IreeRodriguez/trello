function show() {
    var boton = document.getElementById("mostrar")
    boton.style.display="none";
    document.getElementsByClassName("create")[0].style.display="inline-block";
}
window.onload = function() {

    var guardar = document.getElementById("guardar");
    var newList = document.getElementById("newList");
    var section = document.getElementsByTagName("section")[0];

    guardar.onclick = function() {
        if (newList.value == "") {
            return false;
        } else {
            var lista = document.createElement("div");
            var nombreLista = document.createElement("h3");
            var tarjeta = document.createElement("textarea");
            var btn = document.createElement("button")
            btn.textContent="Añadir";
            btn.classList.add("btn");
            btn.id = "addCard";
            tarjeta.placeholder="Anadir tarjeta";
            nombreLista.textContent = newList.value;
            lista.appendChild(nombreLista);
            lista.appendChild(tarjeta);
            lista.appendChild(btn);
            lista.classList.add("newCreate");
            section.insertBefore(lista, section.children[0]);
            document.getElementById("newList").value = "";
            document.getElementById("mostrar").style.display="inline-block";
            document.getElementsByClassName("create")[0].style.display="none";

            btn.addEventListener("click",function(){

                if (tarjeta.value == "") {
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
