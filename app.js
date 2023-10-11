let incomeCart = [];
let expenseCart = [];
let incomeName = document.getElementById("incomeName");
let incomeAmount = document.getElementById("incomeAmount");
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let totalAmt = document.getElementById("total-amount");
let formOne = document.getElementById("income-form");
let formTwo = document.getElementById("expense-form");
let date = new Date().toDateString();
formOne.addEventListener("submit", (e) => {
  e.preventDefault();
  let incomeNameValue = incomeName.value;
  let incomeAmountValue = parseFloat(incomeAmount.value);
  if (!isNaN(incomeAmountValue) && incomeAmountValue > 0) {
    incomeCart.push({
      Name: incomeNameValue,
      Amount: incomeAmountValue,
    });
    // totalAmount(incomeCart);
    updateDifference();
  }
  funTable();
});

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  let expenseNameValue = expenseName.value;
  let expenseAmountValue = parseFloat(expenseAmount.value);
  if (!isNaN(expenseAmountValue) && expenseAmountValue > 0) {
    expenseCart.push({
      Name: expenseNameValue,
      Amount: expenseAmountValue,
    });
    // totalAmount(expenseCart);
    updateDifference();
  }
  funTable();
});

// function totalAmount(cartObject) {
//     let sum = 0;
//     for (let i = 0; i < cartObject.length; i++) {
//         sum += cartObject[i].Amount;
//     }
//     totalAmt.textContent = sum;
// }

// Calculate the difference between income and expense

function calculateDifference() {
  let incomeTotal = incomeCart.reduce((total, item) => total + item.Amount, 0);
  let expenseTotal = expenseCart.reduce(
    (total, item) => total + item.Amount,
    0
  );
  return incomeTotal - expenseTotal;
}

// Update the difference and log it
function updateDifference() {
  let difference = calculateDifference();
  console.log(difference);
  totalAmt.textContent = difference;
}

// Initial update of the difference
updateDifference();

function funTable() {
  let transList = document.getElementById("transaction-list");
  transList.innerHTML = ``;
  incomeCart.forEach((item) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td style="background-color:green;">${date}</td>
    <td style="background-color:green;">${item.Name}</td>
    <td style="background-color:green;"> ${item.Amount}</td>
        `;
    transList.appendChild(tr);
  });


// transList.innerHTML = ``;
expenseCart.forEach((item) => {
  let tr = document.createElement("tr");
  tr.innerHTML = `
        <td style="background-color:Red;">${date}</td>
        <td style="background-color:Red;">${item.Name}</td>
        <td style="background-color:Red;"> ${item.Amount}</td>
        `;
  transList.appendChild(tr);
});
}
