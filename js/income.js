const incomeField = document.getElementById('income');
const income = incomeField.value;
// console.log(incomeField.value)

document.getElementById('calculate-btn').addEventListener('click', function () {

    const foodField = document.getElementById('food');
    const foodBudget = foodField.value;
    // console.log(foodBudget);
    const rentField = document.getElementById('rent');
    const rentBudget = rentField.value;
    // console.log(rentBudget);
    const clothesField = document.getElementById('clothes');
    const clothesbudget = clothesField.value;
    // console.log(clothesbudget);


    // console.log(totalBudget);
    // total expenses 
    const totalExpenses = document.getElementById('expenses');
    const expenses = totalExpenses.innerText;
    totalExpenses.innerText = parseFloat(foodBudget) + parseFloat(rentBudget) + parseFloat(clothesbudget);
    // console.log(totalExpenses.innerText);
    // total Balance 
    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    totalBalance.innerText = parseFloat(incomeField.value) - parseFloat(totalExpenses.innerText);

    // console.log(totalBalance.innerText);

    // clear all field 

    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';

    document.getElementById('save-btn').addEventListener('click', function () {
        const saveField = document.getElementById('save');
        const save = saveField.value;
        // console.log(saveField.value);
        const saveAmount = document.getElementById('saving-money');
        const saving = saveAmount.innerText;
        saveAmount.innerText = parseFloat(incomeField.value) * parseFloat(saveField.value) / 100;
        // console.log(saveAmount.innerText)


        const remainingBalance = document.getElementById('remaining');
        const remain = remainingBalance.innerText;

        remainingBalance.innerText = totalBalance.innerText - saveAmount.innerText;



        // clear field 
        saveField.value = '';

    })

})



