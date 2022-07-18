const requestOrigin2 = 'http://localhost:8080/api/comanda/';
const requestOrigin = 'http://localhost:8080/api/comanda/';


function updateList() {
    fetch(requestOrigin, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            let htmlCode = '';

            for (p of data) {
                htmlCode += '<tr>';
                htmlCode += '<td>' + p["id"] + '</td>';
                htmlCode += '<td>' + p["qtdespeto"] + '</td>';
                htmlCode += '<td>' + p["qtdrefrigerante"] + '</td>';
                htmlCode += '<td>' + p["qtdcerveja"] + '</td>';
                htmlCode += '<td>' + p["total"] + '</td>';
                htmlCode += '</tr>';

            }
            document.getElementById("tableBody").innerHTML = htmlCode;
            const ValorRecebido = document.getElementById("InputID");
            console.log(ValorRecebido.value);
        })
}
function updateListID() {
    const valorRecebido = document.getElementById('InputID'); //10
    fetch(requestOrigin, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let valorASerExibido;
            for (let i = 0; i < data.length; i++) {
                let doc = data[i];
                console.log(doc);
                if (valorRecebido.value == doc["id"]) {
                    valorASerExibido = data[i];
                    console.log(doc["id"])
                };
            }

            let htmlcode = '';
            htmlcode += '<tr>'
            htmlcode += '<td>' + valorASerExibido["id"] + '</td>'
            htmlcode += '<td>' + valorASerExibido["qtdespeto"] + '</td>'
            htmlcode += '<td>' + valorASerExibido["qtdrefrigerante"] + '</td>'
            htmlcode += '<td>' + valorASerExibido["qtdcerveja"] + '</td>'
            htmlcode += '<td>' + valorASerExibido["total"] + '</td>'
            htmlcode += '<tr>'
            document.getElementById("tableBody").innerHTML = htmlcode;
        });

}

function getInputValues() {
    return obj = {
        qtdespeto: parseInt(document.getElementById("inputEspeto").value),
        qtdrefrigerante:  parseInt(document.getElementById("inputRefri").value),
        qtdcerveja:  parseInt(document.getElementById("inputCerveja").value),
    }
}
function inserir() {
    fetch(requestOrigin, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(getInputValues()),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(function (response) {
            console.log(response);
        })
}
function getInputValues2() {
    return obj = {
        id: document.getElementById("inputID").value,
        qtdespeto: document.getElementById("inputEspeto").value,
        qtdrefrigerante:  document.getElementById("inputRefri").value,
        qtdcerveja:  document.getElementById("inputCerveja").value,
    }
}
function atualizar() {
    fetch(requestOrigin, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(getInputValues2()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Informar se houve um erro ou atualizar a lista caso ocorra tudo certo
        if(data['success'] == true) {
            updateList();
        }   
        else {
            console.log(data['error']);
        }
    })
}

function getInputValues3() {
    return obj = {
        id: parseInt(document.getElementById("inputID").value),
        qtdespeto: parseInt(document.getElementById("inputEspeto").value),
        qtdrefrigerante:  parseInt(document.getElementById("inputRefri").value),
        qtdcerveja:  parseInt(document.getElementById("inputCerveja").value),
    }
}

function remove() {
    fetch(requestOrigin, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(getInputValues3()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => res.json())
    .then(data => {
        // Informar se houve um erro ou atualizar a lista caso ocorra tudo certo
        if(data['success'] == true) {
            updateList();
        }   
        else {
            console.log(data['error']);
        }
    })
}

