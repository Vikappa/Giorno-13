
const sideTextArea = document.getElementById("sideDesk")
const arrayCoppieListaTesto = []
const trHtml = document.getElementById("trHtml")
const trCSS = document.getElementById("trCSS")
const trJS = document.getElementById("trJS")
const tBody = document.getElementById("appendHere")
const tablePrincipale = document.getElementById("toDoList")

const listaOnScreen = []

const creatr = function (riga, rigaAdd) {
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
    labelCompito.innerText = "riga"
    const prototdTrashIcon = document.createElement("td")
    const pTrashIcon = document.createElement("p")
    pTrashIcon.classList = "trashIcon"
    pTrashIcon.onclick = function (tr) {
        var riga = document.getElementById(tr);
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
        trPacchetto: prototrDaPushare,
        pPacchetto: rigaAdd
    }

    return pacchettoFinale
}

//tBody.creatr("riga", "rigaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

const aggiungiTr = function (trElementDaPushare) {
    listaOnScreen.push(trElementDaPushare)
    refreshLista()
}


const refreshLista = function () {
    tBody.remove();
    let newtBody = document.createElement("tbody");

    for (let i = 0; i < listaOnScreen.length; i++) {
        console.log("Inizializzo " + listaOnScreen[i].trPacchetto)
        let newTr = creatr(listaOnScreen[i].trPacchetto, listaOnScreen[i].pPacchetto);
        newtBody.tr = newTr
    }

    // Creare un nuovo elemento tr per il pulsante e la nuova riga
    const trAddItem = document.createElement("tr");
    const tdButtonAdd = document.createElement("td");
    const button = document.createElement("input");

    button.onclick = aggiungiTr;
    button.type = "button";
    button.value = `+`;
    const tdVuoto = document.createElement("td");

    tdButtonAdd.appendChild(button);
    trAddItem.appendChild(tdButtonAdd);
    trAddItem.appendChild(tdVuoto);
    trAddItem.appendChild(tdVuoto);

    newtBody.appendChild(trAddItem);

    tablePrincipale.tBody = newtBody;
}




function eliminatr(tr) {
    var riga = document.getElementById(tr);
    riga.remove();
}

const elemento1 = {
    trPacchetto: "Formattazione Html",
    pPacchetto: "Metto l'header del titolo, un main diviso tra to-do list e paragrafi descrittivi, un pulsante per salvare, checkbox e trashicon"
}

const elemento2 = {
    trPacchetto: "Stile CSS",
    pPacchetto: "Palette, icone da fontawesome, font da google font e altri, flexbox, flexbox direction, margini, bordi"
}

const elemento3 = {
    trPacchetto: "Codice JavaScript",
    pPacchetto: "Parto provando a scrivere degli script che creano righe uguali a quelle fatte dal file html. Se funziona, lo inserisco dinamicamente in un metodo che renderizza la pagina partire da un array di elementi. Aggiungo i listener per le funzioni previste"
}


aggiungiTr(elemento1)
aggiungiTr(elemento2)
aggiungiTr(elemento3)
console.log(listaOnScreen)