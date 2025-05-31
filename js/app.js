
// donate for noakhali 
document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const myTotalAmmout = getTextFiledValue('my-total-ammount');
    const totalDonationAmmount = getTextFiledValue('total-ammount-noakhali');
    const donatedAmmount = getInputFiledValue('donated-ammount-noakhali');
    if (isNaN(donatedAmmount)) {
        my_modal_3.showModal()
        return;
    }
    if (donatedAmmount > myTotalAmmout) {
        modal_for_negative_balance.showModal();
        return;
    }
    const totalDonationAmmountNew = totalDonationAmmount + donatedAmmount;
    const myRemaningAmmount = myTotalAmmout - donatedAmmount;
    document.getElementById('total-ammount-noakhali').innerText = totalDonationAmmountNew;
    document.getElementById('my-total-ammount').innerText = myRemaningAmmount;
    my_modal_1.showModal();

    // history 
    const donationTime = new Date();
    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="text-2xl font-bold">${donatedAmmount} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h1>
    <p class="text-gray-400 mt-3">Date ${donationTime}</p>
    `
    div.classList.add('border-2', 'border-gray-200', 'rounded-xl', 'p-4')
    historyContainer.appendChild(div);

})

// donate for feni 
document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const myBalance = getTextFiledValue('my-total-ammount');
    const totalDonationAmmountFeni = getTextFiledValue('total-ammount-feni');
    const donatedAmmountFeni = getInputFiledValue('donated-ammount-feni');
    if (isNaN(donatedAmmountFeni)) {
        my_modal_3.showModal()
        return;
    }
    if (donatedAmmountFeni > myBalance) {
        modal_for_negative_balance.showModal();
        return;
    }
    const totalDonationAmmountFeniNew = totalDonationAmmountFeni + donatedAmmountFeni;
    const myRemainingBalance = myBalance - donatedAmmountFeni;
    document.getElementById('total-ammount-feni').innerText = totalDonationAmmountFeniNew;
    document.getElementById('my-total-ammount').innerText = myRemainingBalance;
    my_modal_1.showModal();

    // history 
    const donationTime = new Date();
    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `
     <h1 class="text-2xl font-bold">${donatedAmmountFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
     <p class="text-gray-400 mt-3">Date ${donationTime}</p>
     `
    div.classList.add('border-2', 'border-gray-200', 'rounded-xl', 'p-4')
    historyContainer.appendChild(div);
})

// Aid for Injured in the Quota Movement
document.getElementById('btn-donate-quota-movement').addEventListener('click', function () {
    const myBalance = getTextFiledValue('my-total-ammount');
    const totalDonationAmmountQuota = getTextFiledValue('total-ammount-quota');
    const donatedAmmountQuota = getInputFiledValue('donated-ammount-quota');
    if (isNaN(donatedAmmountQuota)) {
        my_modal_3.showModal()
        return;
    }
    if (donatedAmmountQuota > myBalance) {
        modal_for_negative_balance.showModal();
        return;
    }
    const totalDonationAmmountQuotaNew = totalDonationAmmountQuota + donatedAmmountQuota;
    const myRemainingBalance = myBalance - donatedAmmountQuota;
    document.getElementById('total-ammount-quota').innerText = totalDonationAmmountQuotaNew;
    document.getElementById('my-total-ammount').innerText = myRemainingBalance;
    my_modal_1.showModal();

    // history 
    const donationTime = new Date();
    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `
     <h1 class="text-2xl font-bold">${donatedAmmountQuota}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
     <p class="text-gray-400 mt-3">Date ${donationTime}</p>
     `
    div.classList.add('border-2', 'border-gray-200', 'rounded-xl', 'p-4')
    historyContainer.appendChild(div);
})