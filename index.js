document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById("total").value);
    var tip = document.getElementById("tipEntry").value;
    document.getElementById("tip").innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount')
  var totalBillWithTip = document.querySelector('#totalBillWithTip')
  
  tipAmount.value = tipValue.toFixed(2);
   totalBillWithTip.value =finalBill.toFixed(2);
  
   //Show Results
  
    document.getElementById('outcome').style.display='block'
  }
  