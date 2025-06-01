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

function toggleBetween(id) {
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    // remove hidden class for clicked button 
    document.getElementById(id).classList.remove('hidden');

}

function toogleBgColor(id) {
    document.getElementById('btn-donate-page').classList.remove('bg-[#B4F461]', 'border-0');
    document.getElementById('btn-history-page').classList.remove('bg-[#B4F461]', 'border-0');

    // toggle color 
    document.getElementById(id).classList.add('bg-[#B4F461]', 'border-0');
}