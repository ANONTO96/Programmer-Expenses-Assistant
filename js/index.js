// global variable to use
let count = 0;
// add event listener for calculate btn
const calculateBtn = document.getElementById('calculate').addEventListener('click',function(){
    // getting value without function

    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);
 
    //getting value by calling function 
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    // validation for inputs
    if(income <= 0){
        removeHidden('income-error')
        return;
    }
    if(software <= 0 || software >=income){
        removeHidden('software-error')
        return;
    }
    if(courses <= 0 || courses >=income){
        removeHidden('courses-error')
        return;
    }
    if(internet <= 0 || internet >=income){
        removeHidden('internet-error')
        return;
    }
     
    // calculating and inserting values to result summary
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if(totalExpenses > income){
        removeHidden('logic-error')
    return;
    }

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');result.classList.remove("hidden");

    //adding to history
    count += 1;
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-lg shadow-lg border-l-2 border-purple-400';
    historyItem.innerHTML =`
    <p class="text-xs text-gray-500">Serial: ${count}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: ৳${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses: ৳${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance: ৳${balance.toFixed(2)}</p>
    `;
    
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});
// add event listener for calculate savings btn
const calculateSavingsBtn = document.getElementById('calculate-savings').addEventListener('click',function(){
const savingPercentage = parseFloat(document.getElementById('savings').value);
const income = getInputValueById('income');
const software = getInputValueById('software');
const courses = getInputValueById('courses');
const internet = getInputValueById('internet');

// validation
if(savingPercentage <= 0 || savingPercentage >100){
    removeHidden('savings-error')
    return;
}

const totalExpenses = software + courses + internet;
const balance = income - totalExpenses;

const savingAmount = (savingPercentage * balance) / 100;
const remainingBalance = balance - savingAmount;

const savingElement = document.getElementById('savings-amount');
savingElement.innerText = savingAmount.toFixed(2);
const remainingBalanceElement = document.getElementById('remaining-balance');
remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});
// history tab functionality
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click',function(){
    historyTab.classList.remove('text-gray-600')
    historyTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

    assistantTab.classList.add('text-gray-600');
    assistantTab.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

addHidden('expense-form')
removeHidden('results')
removeHidden('history-section')
});
// assistant tab functionality
assistantTab.addEventListener('click',function(){
    assistantTab.classList.remove('text-gray-600')
    assistantTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

    historyTab.classList.add('text-gray-600');
    historyTab.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

    removeHidden('expense-form')
    addHidden('results')
    addHidden('history-section')
})

// live validation for input
// document.getElementById('income').addEventListener   ('input',function(){
//     const inputValue = parseFloat(document.getElementById('income').value);
//     if(inputValue <= 0){
//         document.getElementById('income-error').classList.remove('hidden');
//         return;
//     }
// })