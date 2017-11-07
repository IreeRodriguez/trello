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
            nombreLista.textContent = newList.value;
            lista.appendChild(nombreLista);
            lista.appendChild(tarjeta);
            section.insertBefore(lista, section.children[0]);
            document.getElementById("newList").value = "";
        }


    }


}
