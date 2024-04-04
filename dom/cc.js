const app_id = "97efbfd1ef734594a99eea60f3a32e73"

const url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`

fetch(url)
.then(response =>  response.json())

.then(data=> {
    // console.log(data)
    const currencies = Object.keys(data.rates);
    console.log(currencies);

    const base_currency = document.getElementById("baseCurrency")
    const target_currency = document.getElementById("targetCurrency")

    currencies.forEach(currency=>{
        const option1 = document.createElement("option")
        option1.textContent = currency
        const option2 = document.createElement("option")
        option2.textContent = currency

        base_currency.appendChild(option1)
        target_currency.appendChild(option2)
    })
})

.catch(err=>console.log("error fetching exchange rates ", err))


function convert(){
    var base = document.getElementById("baseCurrency").value
    var target= document.getElementById("targetCurrency").value

    const amount = document.getElementById("amount").value

    const apiUrl = `https://openexchangerates.org/api/convert/${amount}/${base}/${target}?app_id=97efbfd1ef734594a99eea60f3a32e73&prettyprint=false`

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err=>console.error(`Error while converting ${base} into ${target}`, err))


}
document.getElementById("convertBtn").addEventListener("click",convert)