let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

if (boton && textoVotos) {
    boton.addEventListener("click", function () {

        votos = votos + 1
        textoVotos.innerText = "Votos: " + votos

        console.log("voto registrado")

    })
}
const ultimaPropuestaText=document.getElementById("ultimaPropuesta")
const ultimoNombrePropuesta=document.getElementById("nombreUltimaPropuesta")
const form = document.getElementById("formPropuesta")
let mensaje = document.getElementById("mensaje")

if (form && mensaje) {
    form.addEventListener("submit", function (e) {

        let nombre = document.getElementById("nombre").value.trim()
        let idea = document.getElementById("idea").value.trim()

        

        mensaje.innerText = ""

        if (nombre === "") {
            e.preventDefault()
            mensaje.style.color = "red"
            mensaje.innerText = "El nombre es obligatorio"
            return
        }

        if (idea === "") {
            e.preventDefault()
            mensaje.style.color = "red"
            mensaje.innerText = "La propuesta es obligatoria"
            return
        }
        else if (idea.length < 10) {
            e.preventDefault()
            mensaje.style.color = "red"
            mensaje.innerText = "La propuesta debe tener al menos 10 caracteres"
            return
        }else{
            e.preventDefault()
            ultimaPropuestaText.textContent=idea
            ultimoNombrePropuesta.textContent="por: "+nombre
            return
        }

        

    })
}
