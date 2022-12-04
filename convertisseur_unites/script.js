// API des tau de changes de diverses devises
const lienApiChange = 'https://api.exchangerate-api.com/v4/latest/USD'


function showRateConv (data) {
  let devise1 = document.getElementById('sel1').value
  let devise2 = document.getElementById('sel2').value
  
  let montant = parseFloat(document.getElementById('oamount').value)

  let taux1 = parseFloat(data.rates[devise1]);
  let taux2 = parseFloat(data.rates[devise2]);
  
  let calcul = taux1 * montant / taux2;
  document.getElementById('oamount').value = calcul;
}
async function returnCurrency () {
  res = await fetch(lienApiChange)
    .then(response => {
      return response.json()
    })
    .then(data => {
      obj = data
    })
    .then(() => {
      showRateConv(obj)
    })
    .catch(function (error) {
      console.log(error)
    })
}


function reinitForm()
{
  document.getElementById("oamount").value = '';
}