
var txns = [];

const addTransaction = event => {
    let id = txns.length == 0 ? 1 : txns[txns.length - 1].id + 1;
    let header = document.querySelector("#txnHeader").value
    let amount = parseFloat(document.querySelector("#amount").value)
    let type = document.querySelector("#type").value

    txns.push({ id, header, amount, type });

    updateData();
}

const updateData = () => {
    let tableObj = document.querySelector("#txnsTable");
    let tbodyObj = document.querySelector("#txnsTable>tbody");

    if (tbodyObj) {
        tbodyObj.remove();
    }

    tbodyObj = document.createElement("tbody");
    tableObj.append(tbodyObj);

    txns.forEach(
        t => {
            let tr = document.createElement("tr");
            let tds = [
                document.createElement("td"),
                document.createElement("td"),
                document.createElement("td"),
                document.createElement("td")
            ];
            tds.forEach(td => tr.append(td))
            tbodyObj.append(tr);
            tds[0].innerText = t.id;
            tds[1].innerText = t.header;
            if (t.type === 'CREDIT') {
                tds[2].innerText = t.amount;
            } else {
                tds[3].innerText = t.amount;
            }
        }
    );
}