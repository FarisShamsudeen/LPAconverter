// Tax slabs for different countries
const taxSlabs = {
    'USD': [
        { limit: 9950, rate: 10 },     // Up to $9,950: 10%
        { limit: 40525, rate: 12 },    // $9,951 to $40,525: 12%
        { limit: 86375, rate: 22 },    // $40,526 to $86,375: 22%
        { limit: 164925, rate: 24 },   // $86,376 to $164,925: 24%
        { limit: 209425, rate: 32 },   // $164,926 to $209,425: 32%
        { limit: 523600, rate: 35 },   // $209,426 to $523,600: 35%
        { limit: Infinity, rate: 37 }  // Above $523,600: 37%
    ],
    'CNY': [
        { limit: 36000, rate: 3 },     // Up to ¥36,000: 3%
        { limit: 144000, rate: 10 },   // ¥36,001 to ¥144,000: 10%
        { limit: 300000, rate: 20 },   // ¥144,001 to ¥300,000: 20%
        { limit: 420000, rate: 25 },   // ¥300,001 to ¥420,000: 25%
        { limit: 660000, rate: 30 },   // ¥420,001 to ¥660,000: 30%
        { limit: 960000, rate: 35 },   // ¥660,001 to ¥960,000: 35%
        { limit: Infinity, rate: 45 }  // Above ¥960,000: 45%
    ],
    'JPY': [
        { limit: 1950000, rate: 5 },     // Up to ¥1,950,000: 5%
        { limit: 3300000, rate: 10 },    // ¥1,950,001 to ¥3,300,000: 10%
        { limit: 6950000, rate: 20 },    // ¥3,300,001 to ¥6,950,000: 20%
        { limit: 9000000, rate: 23 },    // ¥6,950,001 to ¥9,000,000: 23%
        { limit: 18000000, rate: 33 },   // ¥9,000,001 to ¥18,000,000: 33%
        { limit: 40000000, rate: 40 },   // ¥18,000,001 to ¥40,000,000: 40%
        { limit: Infinity, rate: 45 }    // Above ¥40,000,000: 45%
    ],
    'EUR': [
        { limit: 9744, rate: 0 },       // Up to €9,744: 0%
        { limit: 14753, rate: 14 },     // €9,745 to €14,753: 14%
        { limit: 57918, rate: 24 },     // €14,754 to €57,918: 24%
        { limit: 274612, rate: 42 },    // €57,919 to €274,612: 42%
        { limit: Infinity, rate: 45 }   // Above €274,612: 45%
    ],
    'INR': [
        { limit: 250000, rate: 0 },     // Up to ₹250,000: 0%
        { limit: 500000, rate: 5 },     // ₹250,001 to ₹500,000: 5%
        { limit: 750000, rate: 10 },    // ₹500,001 to ₹750,000: 10%
        { limit: 1000000, rate: 15 },   // ₹750,001 to ₹1,000,000: 15%
        { limit: 1250000, rate: 20 },   // ₹1,000,001 to ₹1,250,000: 20%
        { limit: 1500000, rate: 25 },   // ₹1,250,001 to ₹1,500,000: 25%
        { limit: Infinity, rate: 30 }   // Above ₹1,500,000: 30%
    ],
    'GBP': [
        { limit: 12570, rate: 0 },      // Up to £12,570: 0%
        { limit: 50270, rate: 20 },     // £12,571 to £50,270: 20%
        { limit: 150000, rate: 40 },    // £50,271 to £150,000: 40%
        { limit: Infinity, rate: 45 }   // Above £150,000: 45%
    ],
    'CAD': [
        { limit: 14000, rate: 0 },      // Up to C$14,000: 0%
        { limit: 49020, rate: 15 },     // C$14,001 to C$49,020: 15%
        { limit: 98040, rate: 20.5 },   // C$49,021 to C$98,040: 20.5%
        { limit: 151978, rate: 26 },    // C$98,041 to C$151,978: 26%
        { limit: 216511, rate: 29 },    // C$151,979 to C$216,511: 29%
        { limit: Infinity, rate: 33 }   // Above C$216,511: 33%
    ],
    'AUD': [
        { limit: 18200, rate: 0 },      // Up to A$18,200: 0%
        { limit: 45000, rate: 19 },     // A$18,201 to A$45,000: 19%
        { limit: 120000, rate: 32.5 },  // A$45,001 to A$120,000: 32.5%
        { limit: 180000, rate: 37 },    // A$120,001 to A$180,000: 37%
        { limit: Infinity, rate: 45 }   // Above A$180,000: 45%
    ],
    'BRL': [
        { limit: 22847, rate: 0 },      // Up to R$22,847: 0%
        { limit: 33919, rate: 7.5 },    // R$22,848 to R$33,919: 7.5%
        { limit: 45012, rate: 15 },     // R$33,920 to R$45,012: 15%
        { limit: 55976, rate: 22.5 },   // R$45,013 to R$55,976: 22.5%
        { limit: Infinity, rate: 27.5 } // Above R$55,976: 27.5%
    ],
    'RUB': [
        { limit: 5000000, rate: 13 },   // Up to ₽5,000,000: 13%
        { limit: Infinity, rate: 15 }   // Above ₽5,000,000: 15%
    ],
    'TRY': [
        { limit: 32000, rate: 15 },     // Up to ₺32,000: 15% 
        { limit: 70000, rate: 20 },     // ₺32,001 to ₺70,000: 20% 
        { limit: 250000, rate: 27 },    // ₺70,001 to ₺250,000: 27% 
        { limit: 880000, rate: 35 },    // ₺250,001 to ₺880,000: 35% 
        { limit: Infinity, rate: 40 }   // Above ₺880,000: 40% 
    ],
    'SAR': [
        { limit: Infinity, rate: 0 }    // No personal income tax in Saudi Arabia 
    ],
    'AED': [
        { limit: Infinity, rate: 0 }    // No personal income tax in UAE 
    ]
};


const currencySymbols = {
    'USD': '$',   // United States 
    'CNY': '¥',   // China 
    'JPY': '¥',   // Japan
    'EUR': '€',   // Germany
    'INR': '₹',   // India 
    'GBP': '£',   // United Kingdom  
    'CAD': 'C$',  // Canada
    'BRL': 'R$',  // Brazil
    'AUD': 'A$',  // Australia
    'RUB': '₽',   // Russia
    'TRY': '₺',   // Turkey
    'SAR': '﷼',   // Saudi Arabia
    'AED': 'AED' // United Arab Emirates
};


//==============================================================================================


// Fetch exchange rate and convert to target country's currency
const convertCurrency = async (amountInINR, targetCountry) => {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/4f971c101acaad916a46e30e/latest/INR');
        const data = await response.json();

        if (data.result !== 'success') {
            showModal("Please Retry Again, Couldn't Able to Fetch results properly")
            return
        }

        if (!data.conversion_rates || !data.conversion_rates[targetCountry]) {
            throw new Error(`Exchange rate for ${targetCountry} not found`);
        }
        console.log(data);
        return amountInINR * data.conversion_rates[targetCountry];
    } catch (error) {
        showModal("Please Retry Again, Couldn't Able to Fetch results properly")
        console.error('Error fetching exchange rate:', error.message);
        return null;
    }
};

// Calculate tax based on country's slabs
const calculateTax = (salary, country) => {
    const slabs = taxSlabs[country];

    if (!slabs) {
        console.error(`Tax slabs not found for ${country}`);
        return null;
    }

    let tax = 0, previousLimit = 0;

    for (const slab of slabs) {
        if (salary > previousLimit) {
            const taxableAmount = Math.min(salary, slab.limit) - previousLimit;
            tax += (taxableAmount * slab.rate) / 100;
            previousLimit = slab.limit;
        } else {
            break;
        }
    }

    return tax;
};


async function convertLPAToTargetCurrency() {
    const convertBtn = document.getElementById('convert-btn');
    convertBtn.disabled = true;
    let tempContent = convertBtn.textContent
    convertBtn.textContent = 'Loading...'

    const targetCountry = document.getElementById('lpa-country').value;
    const lpaAmount = document.getElementById('lpa-amount').value;

    if (isNaN(lpaAmount) || lpaAmount <= 0 || lpaAmount >= 100) {
        showModal('Please enter a valid amount');
        convertBtn.disabled = false;
        convertBtn.style.boxShadow = '';
        return;
    }

    let preIncomeTaxAnnualAmount = await convertCurrency(lpaAmount * 100000, targetCountry);
    preIncomeTaxAnnualAmount = Math.round(preIncomeTaxAnnualAmount * 100) / 100;
    let preIncomeTaxMonthlyAmount = Math.round(preIncomeTaxAnnualAmount / 12 * 100) / 100;

    let incomeTaxAmount = calculateTax(preIncomeTaxAnnualAmount, targetCountry)

    let postIncomeTaxMonthlyAmount = Math.round((preIncomeTaxAnnualAmount - incomeTaxAmount) / 12 * 100) / 100;

    displayAmountLTM(currencySymbols[targetCountry] + ' ' + preIncomeTaxMonthlyAmount.toFixed(2),
        currencySymbols[targetCountry] + ' ' + preIncomeTaxAnnualAmount.toFixed(2),
        currencySymbols[targetCountry] + ' ' + incomeTaxAmount.toFixed(2),
        currencySymbols[targetCountry] + ' ' + postIncomeTaxMonthlyAmount.toFixed(2));
    convertBtn.textContent = tempContent
    convertBtn.disabled = false;
    convertBtn.style.boxShadow = '';
}

function displayAmountLTM(monthlyAmount, yearlyAmount, incomeTaxAmount, postTaxIncome) {
    const results = document.getElementById('results');
    results.style.display = 'block';

    document.getElementById('annual-result').textContent = yearlyAmount;
    document.getElementById('monthly-gross').textContent = monthlyAmount;
    document.getElementById('income-tax').textContent = incomeTaxAmount;
    document.getElementById('monthly-net').textContent = postTaxIncome;
}

//====================================================================================================

const revConvertCurrency = async (amountInOther, targetCountry) => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/4f971c101acaad916a46e30e/latest/${targetCountry}`);
        const data = await response.json();

        if (data.result !== 'success') {
            showModal("Please Retry Again, Couldn't Able to Fetch results properly")
            return
        }

        if (!data.conversion_rates || !data.conversion_rates["INR"]) {
            throw new Error(`Exchange rate for ${targetCountry} not found`);
        }
        console.log(data);
        return amountInOther * data.conversion_rates["INR"];
    } catch (error) {
        showModal("Please Retry Again, Couldn't Able to Fetch results properly")
        console.error('Error fetching exchange rate:', error.message);
        return null;
    }
};


async function convertMonthlyToLPA() {
    const convertBtn = document.getElementById('monthly-convert-btn');
    convertBtn.disabled = true;
    let tempContent = convertBtn.textContent
    convertBtn.textContent = 'Loading...'

    const targetCountry = document.getElementById('monthly-country').value;
    const monthlyAmount = document.getElementById('monthly-amount').value;

    if (isNaN(monthlyAmount) || monthlyAmount <= 0 ) {
        showModal('Please enter a valid amount');
        convertBtn.disabled = false;
        convertBtn.style.boxShadow = '';
        return;
    }
    let preIncomeTaxAnnualAmount = Math.round(monthlyAmount * 12 * 100) / 100;

    let monthlyAmountInINR = await revConvertCurrency(preIncomeTaxAnnualAmount, targetCountry);
    let preIncomeTaxLPA = (monthlyAmountInINR / 100000).toFixed(2);
    let incomeTaxAmount = calculateTax(preIncomeTaxAnnualAmount, targetCountry).toFixed(2);
    let postIncomeTaxAnnualConverted = await revConvertCurrency((preIncomeTaxAnnualAmount - incomeTaxAmount), targetCountry);
    let postIncomeTaxLPA = (postIncomeTaxAnnualConverted / 100000).toFixed(2);

    displayAmountMTL(
        currencySymbols[targetCountry] + ' ' + preIncomeTaxAnnualAmount,
        preIncomeTaxLPA + " LPA",
        currencySymbols[targetCountry] + ' ' + incomeTaxAmount,
        postIncomeTaxLPA + " LPA"
    )
    convertBtn.textContent = tempContent
    convertBtn.disabled = false;
    convertBtn.style.boxShadow = '';

}



function displayAmountMTL(yearlyAmount, lpaGross, incomeTaxAmount, lpaNet) {
    const results = document.getElementById('monthly-results');
    results.style.display = 'block';

    document.getElementById('lpa-annual-result').textContent = yearlyAmount;
    document.getElementById('lpa-gross').textContent = lpaGross;
    document.getElementById('lpa-income-tax').textContent = incomeTaxAmount;
    document.getElementById('lpa-net').textContent = lpaNet;
}


// Initialize
document.addEventListener('DOMContentLoaded', function () {
    updateCurrencySymbol('lpa-country', '.input-group');
    updateCurrencySymbol('monthly-country', '.input-group');

    document.getElementById('lpa-country').addEventListener('change', function () {
        updateCurrencySymbol('lpa-country', '.input-group');
    });

    document.getElementById('monthly-country').addEventListener('change', function () {
        updateCurrencySymbol('monthly-country', '.input-group');
    });

    document.getElementById('convert-btn').addEventListener('click', convertLPAToTargetCurrency);
    document.getElementById('monthly-convert-btn').addEventListener('click', convertMonthlyToLPA);

    document.getElementById('lpa-amount').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            convertLPAToTargetCurrency();
        }
    });

    document.getElementById('monthly-amount').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            convertMonthlyToLPA();
        }
    });
});

function updateCurrencySymbol(selectId, inputGroupClass) {
    const select = document.getElementById(selectId);
    const inputGroup = select.closest('.card').querySelector(inputGroupClass);
    const country = select.value;
    inputGroup.dataset.currency = currencySymbols[country];
}

function showModal(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('custom-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('custom-modal').style.display = 'none';
}
