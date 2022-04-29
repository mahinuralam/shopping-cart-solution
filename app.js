
function upadeCaseNumber (isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing == true)
    {
        caseNumber.value = parseInt(caseNumber) + 1;
    }
    else
    {
        if(parseInt(caseNumber)>0)
        {
            caseNumber.value = parseInt(caseNumber) - 1;
        }
    }
    caseInput.value = caseNumber;

    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerHTML = caseNumber * 59;
}

document.getElementById('case-plus').addEventListener
('click', function () {
    upadeCaseNumber(true);
});

document.getElementById('case-minus').addEventListener
('click', function () {
    upadeCaseNumber(false);
});