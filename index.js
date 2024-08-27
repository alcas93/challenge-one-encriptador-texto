function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let mensaje = document.getElementById("mensaje");
    let btnCopiar = document.getElementById("btn-copiar");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    
    if (texto.length > 0) {
        mensaje.value = textoCifrado;
        mensaje.style.display = 'block';
        btnCopiar.style.display = 'block';
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.style.display = 'none'; // Oculta la imagen
    } else {
        muneco.src = "./Imagenes/muneco.png";
        muneco.style.display = 'block'; // Muestra la imagen
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡ATENCIÓN!", "Debes ingresar algún texto", "warning");
        mensaje.style.display = 'none';
        btnCopiar.style.display = 'none';
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let mensaje = document.getElementById("mensaje");
    let btnCopiar = document.getElementById("btn-copiar");

    let textoCifrado = texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");

    if (texto.length > 0) {
        mensaje.value = textoCifrado;
        mensaje.style.display = 'block';
        btnCopiar.style.display = 'block';
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muneco.style.display = 'none'; // Oculta la imagen
    } else {
        muneco.src = "./Imagenes/muneco.png";
        muneco.style.display = 'block'; // Muestra la imagen
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡ATENCIÓN!", "Debes ingresar algún texto", "warning");
        mensaje.style.display = 'none';
        btnCopiar.style.display = 'none';
    }
}

document.getElementById("btn-copiar").addEventListener("click", function() {
    let mensaje = document.getElementById("mensaje");
    mensaje.select();
    document.execCommand("copy");
    swal("¡Copiado!", "El texto ha sido copiado al portapapeles", "success");
});

function filtrarTexto() {
    let texto = document.getElementById("texto");
    let textoFiltrado = texto.value
        .toLowerCase()               // Convertir a minúsculas
        .replace(/á|à|â|ã|ä|å/g, "a") // Eliminar acentos de 'a'
        .replace(/é|è|ê|ë/g, "e")    // Eliminar acentos de 'e'
        .replace(/í|ì|î|ï/g, "i")    // Eliminar acentos de 'i'
        .replace(/ó|ò|ô|õ|ö/g, "o")  // Eliminar acentos de 'o'
        .replace(/ú|ù|û|ü/g, "u")    // Eliminar acentos de 'u'
        .replace(/ç/g, "c");          // Eliminar cedilla
    
    // Actualiza el valor del campo con el texto filtrado
    texto.value = textoFiltrado;
}