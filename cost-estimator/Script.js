const tuitionData = {
    "main": {
        "resident": 383.30,
        "nonResident": 1134.10,
        "housingFood": 11884,
        "booksSupplies": 1660,
        "miscellaneous": 2488,
        "transportation": 2220
    },
    "valencia": {
        "resident": 74.50,
        "nonResident": 210.00,
        "fees": 3.75
    },
    "losAlamos": {
        "resident": 82.00,
        "nonResident": 227.50,
        "fees": 3.00,
        "fullTime": 1048.00
    },
    "taos": {
        "resident": 81.00,
        "nonResident": 206.00,
        "fees": 30.00
    },
    "gallup": {
        "resident": 80.50,
        "nonResident": 196.16,
        "fees": 3.75
    }
};

function calculateEstimate() {
    const campus = document.getElementById('campus').value;
    const isResident = document.getElementById('location').value === 'in-state';
    const creditHours = parseInt(document.getElementById('credit-hours').value);

    let totalCost = 0.0;
    const campusData = tuitionData[campus];
    
    if (!campusData) {
        document.getElementById('estimate-results').innerHTML = 'Invalid campus selected.';
        return;
    }

    switch (campus) {
        case 'main':
            totalCost = creditHours * (isResident ? campusData.resident : campusData.nonResident) +
                        campusData.housingFood + campusData.booksSupplies +
                        campusData.miscellaneous + campusData.transportation;
            break;
        case 'valencia':
            totalCost = creditHours * (isResident ? campusData.resident : campusData.nonResident) +
                        campusData.fees * creditHours;
            break;
        case 'losAlamos':
            if (creditHours >= 12 && creditHours <= 18) {
                totalCost = campusData.fullTime;
            } else {
                totalCost = creditHours * (isResident ? campusData.resident : campusData.nonResident) +
                            campusData.fees * creditHours;
            }
            break;
        case 'taos':
            totalCost = creditHours * (isResident ? campusData.resident : campusData.nonResident) +
                        campusData.fees;
            break;
        case 'gallup':
            totalCost = creditHours * (isResident ? campusData.resident : campusData.nonResident) +
                        campusData.fees * creditHours;
            break;
    }

    document.getElementById('estimate-results').innerHTML = `<p>Total estimated cost of attendance for ${creditHours} credit hours at ${campus} campus: $${totalCost.toFixed(2)}</p>`;
}

function exportToCSV() {
    const semester = document.getElementById('semester').value;
    const degreeLevel = document.getElementById('degree-level').value;
    const campus = document.getElementById('campus').value;
    const location = document.getElementById('location').value;
    const creditHours = document.getElementById('credit-hours').value;
    const totalCost = document.querySelector('#estimate-results p') ? document.querySelector('#estimate-results p').textContent.split('$')[1] : '0.00';

    const csvContent = `Semester,Degree Level,Campus,Location,Credit Hours,Total Cost\n${semester},${degreeLevel},${campus},${location},${creditHours},$${totalCost}`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'cost_estimate.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearData() {
    document.getElementById('cost-estimate-form').reset();
    document.getElementById('estimate-results').innerHTML = '';
}