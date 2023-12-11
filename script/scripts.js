const appendHere = document.getElementById("appendHere")
//
const listaTask = [
    {
        titolo: "HTML",
        check: true,
        descr: "Formattazione interna della pagina quasi nulla: fatto!"
    }, {
        titolo: "CSS",
        check: true,
        descr: "Palette, icone da fontawesome, font da google font e altri, flexbox, flexbox direction, margini, bordi"
    },

    {
        titolo: "JS",
        check: true,
        descr: "Una cifra di codice!"
    }
]

//codice generato con chatGPT
// Funzione per impostare i dati nel localStorage
// function setQuaterna(key, value1, value2, value3, value4) {
//     // Creare un oggetto rappresentante la quaterna
//     const quaterna = {
//         value1: value1,
//         value2: value2,
//         value3: value3,
//         value4: value4
//     };

//     // Convertire l'oggetto in formato JSON e memorizzarlo nel localStorage
//     localStorage.setItem(key, JSON.stringify(quaterna));
// }

// // Funzione per ottenere i dati dal localStorage
// function getQuaterna(key) {
//     // Recuperare la stringa JSON dal localStorage
//     const quaternaString = localStorage.getItem(key);

//     // Verificare se la chiave esiste nel localStorage
//     if (quaternaString === null) {
//         // Restituire un valore di default o gestire l'assenza della chiave
//         return null;
//     }

//     // Convertire la stringa JSON in un oggetto JavaScript
//     const quaterna = JSON.parse(quaternaString);

//     return quaterna;
// }

// // Esempio di utilizzo:
// const chiave = "miaQuaterna";
// setQuaterna(chiave, "valore1", "valore2", "valore3", "valore4");

// // Ottenere i dati
// const risultato = getQuaterna(chiave);

// // Visualizzare i dati
// console.log(risultato);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const trDinamico = function (indextask) {
    const prototr = document.createElement("tr")
    prototr.id = "idtr" + indextask
    const tdcheckbox = document.createElement("td")
    const protocheckbox = document.createElement("input")
    protocheckbox.type = "checkbox"
    protocheckbox.id = "checkbox_" + indextask
    protocheckbox.classList = "checkboxtodolist"
    protocheckbox.checked = listaTask[indextask].check
    protocheckbox.onchange = function () {
        const protocheckbox = document.getElementById("checkbox_" + indextask)
        if (protocheckbox.checked) {
            listaTask[indextask].check = true
        } else {
            listaTask[indextask].check = false
        }
        console.log(listaTask)
    }
    const tdcompito = document.createElement("td")
    const labelCompito = document.createElement("label")
    labelCompito.htmlFor = protocheckbox.id
    labelCompito.innerText = listaTask[indextask].titolo
    const prototdTrashIcon = document.createElement("td")
    const pTrashIcon = document.createElement("p")
    pTrashIcon.classList = "trashIcon"
    pTrashIcon.onclick = function () {
        let taskDaEliminare = document.getElementById(prototr.id);

        listaTask.splice(indextask, 1)
        taskDaEliminare.remove()
    }

    const icon = document.createElement("i")
    icon.classList = "far fa-trash-alt"
    icon.style = "color: #ac80a0;"

    pTrashIcon.appendChild(icon)
    prototdTrashIcon.appendChild(pTrashIcon)
    tdcompito.appendChild(labelCompito)
    tdcheckbox.appendChild(protocheckbox)
    prototr.appendChild(tdcheckbox)
    prototr.appendChild(tdcompito)
    prototr.appendChild(prototdTrashIcon)

    return prototr
}

const pulisciTaskList = function () {
    while (appendHere.firstChild) {
        appendHere.removeChild(appendHere.firstChild);
    }
}

const printTasklist = function () {
    for (let i = 0; i < listaTask.length; i++) {
        appendHere.appendChild(trDinamico(i))
    }
}

const pushmeinto = function () {
    const tdPieno = document.getElementById("inputNomeNuovoTask");
    let giàEsistente = false
    listaTask.forEach(task => {
        if (task.titolo === tdPieno.value) {
            giàEsistente = true
        }
    });

    if (giàEsistente) {

        const toRemove = document.getElementById("trAddItem")
        toRemove.remove()
        addFormNuovoTask()
    } else {
        let newOggetto = {
            titolo: tdPieno.value,
            check: false,
            descr: ""
        }


        listaTask.push(newOggetto)
        pulisciTaskList()
        printTasklist()
        addFormNuovoTask()
    }

}

const creaForm = function () {
    const tdVuoto = document.getElementById("spazio_vuoto_per_input_text");

    tdVuoto.innerHTML = `
        <form id="myForm" style="display:flex" onsubmit="return pushmeinto()">
            <input type="text" id="inputNomeNuovoTask" placeholder="Digita la nota e premi invio" style="width: 100%">
            <button type="submit">Invio</button>
        </form>
    `
}


const addFormNuovoTask = function () {
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

    appendHere.appendChild(trAddItem);
}

printTasklist()
addFormNuovoTask()