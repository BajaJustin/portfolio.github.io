const MULTIPLEPEOPLE = document.querySelector('#multiple');
const SINGLEPERSON = document.querySelector('#single');
const BILLINPUT = document.querySelector('#amountDue');
const BILLINFO = document.querySelectorAll('select');
const SUMBIT = document.querySelector('#submit');
const RESET = document.querySelector('#reset');

// Calculates the total tip for the bill
function calculateTip() {
  var billValue = BILLINPUT.value;
  var numberOfPeople = BILLINFO[0].value;
  var billTipPercentage = BILLINFO[1].value;

  // Validate Bill input
  if(billValue == ""){
    alert("Please Enter The Bill Total");
    document.querySelector('#amountDue').focus();
  }
  else {
    let tip = billValue * billTipPercentage;
    let total = billValue;
    if (numberOfPeople > 1){
      // Add total with tip
      total = (+total) + (+tip);
      // Tip & Bill split between number of people
      tip = tip / numberOfPeople;
      let billEach = total / numberOfPeople;

      // Display bill amount with tip rounded two decimal places
      document.querySelector('#multipleTip').innerHTML = tip.toFixed(2);
      document.querySelector('#multipleAmountEach').innerHTML = billEach.toFixed(2);
      document.querySelector('#billTotalMultiple').innerHTML = total.toFixed(2);

      // Display the break down
      MULTIPLEPEOPLE.style.display = "block";
      SINGLEPERSON.style.display = "none";
    }
    else {
      // Add total with tip
      total = (+total) + (+tip);

      // Display bill amount with tip rounded two decimal places
      document.querySelector('#tipAmount').innerHTML = tip.toFixed(2);
      document.querySelector('#billTotal').innerHTML = total.toFixed(2);

      // Display the break down
      SINGLEPERSON.style.display = "block";
      MULTIPLEPEOPLE.style.display = "none";
      document.querySelector('#amountDue').innerHTML = 0;
    }
  }
}

// Reset the Calculator 
function reset() {
  SINGLEPERSON.style.display = "none";
  MULTIPLEPEOPLE.style.display = "none";
  BILLINPUT.value = "";
  BILLINFO[0].selectedIndex = "1";
  BILLINFO[1].selectedIndex = "2";
}

SUMBIT.addEventListener("click", calculateTip);
RESET.addEventListener("click", reset);
