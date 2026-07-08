const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvertSelect = document.querySelector(".currency-convert-select")

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".value-input").value) || 0
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const realToday = 1
    const dolarToday = 5.17
    const euroToday = 5.90
    const libraToday = 6.91
    const bitcoinToday = 325290.00

     if (currencyConvertSelect.value === "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    
    if (currencyConvertSelect.value === "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencyConvertSelect.value === "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencyConvertSelect.value === "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencyConvertSelect.value === "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    let valueInReal = inputCurrencyValue // Se já for Real, o valor base é ele mesmo

    if (currencyConvertSelect.value === "Dolar") { valueInReal = inputCurrencyValue * dolarToday }
    if (currencyConvertSelect.value === "Euro") { valueInReal = inputCurrencyValue * euroToday }
    if (currencyConvertSelect.value === "Libra") { valueInReal = inputCurrencyValue * libraToday }
    if (currencyConvertSelect.value === "Bitcoin") { valueInReal = inputCurrencyValue * bitcoinToday }

    if (currencySelect.value === "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(valueInReal / dolarToday)
    }

    if (currencySelect.value === "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInReal / euroToday)
    }

    if (currencySelect.value === "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInReal / libraToday)
    }

    if (currencySelect.value === "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valueInReal / bitcoinToday)
    }

    if (currencySelect.value === "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal)
    }

    





}

function changeCurrencyConvert() {
    const currencyNameConvert = document.getElementById("currency-name-convert")
    const currencyImageConvert = document.querySelector(".currency-img-convert")

    if(currencyConvertSelect.value === "Dolar") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/img/estados-unidos (1) 1.png"
    }

    if(currencyConvertSelect.value === "Euro") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/img/euro.png"
    }

    if(currencyConvertSelect.value === "Libra") {
        currencyNameConvert.innerHTML = "Libra"
        currencyImageConvert.src = "./assets/img/libra 1.png"
    }

    if(currencyConvertSelect.value === "Bitcoin") {
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImageConvert.src = "./assets/img/bitcoin 1.png"
    }

    if(currencyConvertSelect.value === "Real") {
        currencyNameConvert.innerHTML = "Real"
        currencyImageConvert.src = "./assets/img/brasil 2.png"
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value === "Dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/img/estados-unidos (1) 1.png"
    }

    if(currencySelect.value === "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/euro.png"
    }

    if(currencySelect.value === "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/img/libra 1.png"
    }

    if(currencySelect.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/img/bitcoin 1.png"
    }

    if(currencySelect.value === "Real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/img/brasil 2.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)

currencyConvertSelect.addEventListener("change", changeCurrencyConvert)



