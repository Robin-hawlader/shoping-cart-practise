function updateProductNumber(product, price, isAdd) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isAdd == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;

}

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})




document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

