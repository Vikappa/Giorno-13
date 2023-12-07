const sideTextArea = document.getElementById("sideDesk")
const arrayCoppieListaTesto = []
const trHtml = document.getElementById("trHtml")
const trCSS = document.getElementById("trCSS")
const trJS = document.getElementById("trJS")
const tBody = document.getElementById("appendHere")
const tablePrincipale = document.getElementById("toDoList")

const listaOnScreen = [elemento1 = {
    titleTask: "Formattazione Html",
    pPacchetto: "Metto l'header del titolo, un main diviso tra to-do list e paragrafi descrittivi, un pulsante per salvare, checkbox e trashicon"
},

elemento2 = {
    titleTask: "Stile CSS",
    pPacchetto: "Palette, icone da fontawesome, font da google font e altri, flexbox, flexbox direction, margini, bordi"
},

elemento3 = {
    titleTask: "Codice JavaScript",
    pPacchetto: "Parto provando a scrivere degli script che creano righe uguali a quelle fatte dal file html. Se funziona, lo inserisco dinamicamente in un metodo che renderizza la pagina partire da un array di elementi. Aggiungo i listener per le funzioni previste"
}]



const creaForm = function () {
    const tdVuoto = document.getElementById("spazio_vuoto_per_input_text")

    tdVuoto.innerHTML = `
    <form style="display:flex">
        <input type="text" placeholder="Digita la nota e premi invio" style="width: 100%">
        <button>Invio</button>
    </form>
`
}
const aggiungiTr = function (trElementDaPushare) {
    listaOnScreen.push(trElementDaPushare)
    refreshLista()
}


const refreshLista = function () {

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    for (let i = 0; i < listaOnScreen.length; i++) {

        let newTr = creatr(listaOnScreen[i].titleTask);
        tBody.appendChild(newTr.trPacchetto)
    }

    const trAddItem = document.createElement("tr");
    trAddItem.id = "trAddItem"
    const tdButtonAdd = document.createElement("td");
    const button = document.createElement("input");

    button.onclick = creaForm;
    button.type = "button";
    button.value = `+`;
    const tdVuoto1 = document.createElement("td");
    const tdVuoto2 = document.createElement("td");

    tdVuoto1.id = "spazio_vuoto_per_input_text"

    tdButtonAdd.appendChild(button);
    trAddItem.appendChild(tdButtonAdd);
    trAddItem.appendChild(tdVuoto1);
    trAddItem.appendChild(tdVuoto2);

    tBody.appendChild(trAddItem);
}

const creatr = function (riga) {
    const prototrDaPushare = document.createElement("tr")
    prototrDaPushare.id = "idtr" + riga
    const tdcheckbox = document.createElement("td")
    const protocheckbox = document.createElement("input")
    protocheckbox.type = "checkbox"
    protocheckbox.id = "checkbox_" + riga
    protocheckbox.classList = "checkboxtodolist"
    const tdcompito = document.createElement("td")
    const labelCompito = document.createElement("label")
    labelCompito.htmlFor = protocheckbox.id
    labelCompito.innerText = riga
    const prototdTrashIcon = document.createElement("td")
    const pTrashIcon = document.createElement("p")
    pTrashIcon.classList = "trashIcon"
    pTrashIcon.onclick = function () {
        let riga = document.getElementById(prototrDaPushare.id);
        for (let i = 0; i < listaOnScreen.length; i++) {
            console.log("listaOnScreen[i].titleTask= [" + listaOnScreen[i].titleTask + "] prototrDaPushare.id= [" + prototrDaPushare.id + "]")
            if ("idtr" + listaOnScreen[i].titleTask === prototrDaPushare.id) {
                listaOnScreen.splice(i, 1)
                console.log("Trovato")
                console.log(listaOnScreen)
            }
        }
        riga.remove();
    };
    const icon = document.createElement("i")
    icon.classList = "far fa-trash-alt"
    icon.style = "color: #ac80a0;"

    pTrashIcon.appendChild(icon)
    prototdTrashIcon.appendChild(pTrashIcon)
    tdcompito.appendChild(labelCompito)
    tdcheckbox.appendChild(protocheckbox)
    prototrDaPushare.appendChild(tdcheckbox)
    prototrDaPushare.appendChild(tdcompito)
    prototrDaPushare.appendChild(prototdTrashIcon)

    const pacchettoFinale = {
        titleTask: riga,
        trPacchetto: prototrDaPushare,
        pPacchetto: "Aggiungi la tua descrizione del task!"
    }

    return pacchettoFinale
}

refreshLista()




