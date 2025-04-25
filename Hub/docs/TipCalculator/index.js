
function formatMoney(value){
    value = Math.ceil(value * 100) / 100 //arredonda o valor para cima dessa forma trabalha sempre no utlimo digito.
    value = value.toFixed(2) //fixa o valor decimal em 2 casas
    return "$ " + value
}

function formatSplit(value){
    if (value == 1) return value + " Person"
    return value + " People"
}

function update(){
    let bill = Number (document.getElementById("yourBill").value)
    let tipPercent = document.getElementById("tipInput").value
    let split = document.getElementById("splitInput").value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    let tipEach = tipValue / split
    let totalEach = billEach + tipEach

    document.getElementById("tipPercent").innerHTML = tipPercent + " %"
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue)
    document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal)
    document.getElementById("billEach").innerHTML = formatMoney(billTotal / split)
    document.getElementById("splitValue").innerHTML = formatSplit(split)
    document.getElementById("tipEach").innerHTML = formatMoney(tipValue / split)
    document.getElementById("totalEach").innerHTML = formatMoney(totalEach)
}


