
function updateProductNumber (product, price, isIncreasing) {

    // Update Quanity 
    const productInput = document.getElementById(product + '-number');
    let caseNumber = productInput.value;
    if(isIncreasing == true)
    {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else
    {
        if(parseInt(caseNumber)>0)
        {
            caseNumber = parseInt(caseNumber) - 1;
        }
    }
    productInput.value = caseNumber;

    // Update price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerHTML = caseNumber * price;
    calculateToatal();
}

function getInputvalue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateToatal(){
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the html
    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount').innerHTML = tax;
    document.getElementById('total-price').innerHTML = totalPrice;
    

}

// Phone
document.getElementById('phone-plus').addEventListener
('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener
('click', function () {
    updateProductNumber('phone', 1219, false);
});

// Case
document.getElementById('case-plus').addEventListener
('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener
('click', function () {
    updateProductNumber('case', 59, false);
});