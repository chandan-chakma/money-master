function getInputId(inputId) {
    const inputField = document.getElementById(inputId);
    const income = inputField.value;
    const inputText = parseFloat(income);
    inputField.value = '';
    return inputText;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    // call getInputId function 
    const incomeField = getInputId('income')
    const foodMoney = getInputId('food');
    const rentMoney = getInputId('rent');
    const clothesMoney = getInputId('clothes');
    // total expenses 
    const totalExpenses = document.getElementById('expenses');
    const expenses = totalExpenses.innerText;
    totalExpenses.innerText = parseFloat(foodMoney) + parseFloat(rentMoney) + parseFloat(clothesMoney);
    // total Balance 
    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    totalBalance.innerText = incomeField - parseFloat(totalExpenses.innerText);
    // saving Money 
    document.getElementById('save-btn').addEventListener('click', function () {
        const saveField = document.getElementById('save');
        const save = saveField.value;
        // console.log(saveField.value);
        const saveAmount = document.getElementById('saving-money');
        const saving = saveAmount.innerText;
        saveAmount.innerText = incomeField * parseFloat(saveField.value) / 100;
        // console.log(saveAmount.innerText)

        const remainingBalance = document.getElementById('remaining');
        const remain = remainingBalance.innerText;

        remainingBalance.innerText = totalBalance.innerText - saveAmount.innerText;
        // clear field 
        saveField.value = '';
    })

})

