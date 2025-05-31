function getTextFiledValue(id) {
    const ammount = document.getElementById(id).innerText;
    const ammountNumber = parseFloat(ammount);
    return ammountNumber;
}

function getInputFiledValue(id) {
    const donatedAmmount = document.getElementById(id).value;
    const donatedAmmountNew = parseFloat(donatedAmmount);
    return donatedAmmountNew;
}