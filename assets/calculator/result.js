$(function () {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const urlParameters = url.searchParams;

    const gender = urlParameters.get("gender");
    const maritalStatus = urlParameters.get("maritalStatus");
    const education = urlParameters.get("education");
    const age = parseFloat(urlParameters.get("age"));
    const height = parseFloat(urlParameters.get("height"));
    const weight = parseFloat(urlParameters.get("weight"));
    const smokingStatus = urlParameters.get("smokingStatus");
    const drinkingStatus = urlParameters.get("drinkingStatus");
    const physicalActivity = urlParameters.get("physicalActivity");
    const redMeat = urlParameters.get("redMeat");
    const tea = urlParameters.get("tea");
    const coffee = urlParameters.get("coffee");
    const morbidity = urlParameters.get("morbidity");
    const familyHistory = urlParameters.get("familyHistory");
    const language = urlParameters.get("language");

    $('#reset').attr('href', `./index.html?language=${language}`);
    $('#reset').text(dictionary.reset);
    $('#recalculate').attr('href', `./index.html?gender=${gender}&maritalStatus=${maritalStatus}&education=${education}&age=${age}&height=${height}&weight=${weight}&smokingStatus=${smokingStatus}&drinkingStatus=${drinkingStatus}&physicalActivity=${physicalActivity}&redMeat=${redMeat}&tea=${tea}&coffee=${coffee}&morbidity=${morbidity}&familyHistory=${familyHistory}&language=${language}`)
    $('#recalculate').text(dictionary.recalculate);
    let numOfMorbidity = morbidity.replaceAll("0", "").length;
    if (numOfMorbidity > 3) {
        numOfMorbidity = 3
    }
    const bmi = weight / ((height / 100) * (height / 100));
    const sigma = 0.1004906 - 0.0031462 * age + 0.1225548 * gender
        + 0.0291978 * maritalStatus - 0.0375267 * education + 0.026224 * bmi
        + 0.0406323 * smokingStatus + 0.1206483 * drinkingStatus
        + 0.1201688 * physicalActivity - 0.0772327 * familyHistory
        + 0.4353487 * numOfMorbidity - 0.7580442 * redMeat
        - 0.1374505 * tea - 0.2713213 * coffee;
    const result = Math.round(100 / (1 + Math.exp(-sigma)));
    $('#result-text').text(dictionary.resultText + result + '%');
    const config = {
        type: 'pie',
        data: {
            datasets: [{
                labels: [
                    'risk of cancer', 'abc'
                ],
                data: [
                    result, 100 - result
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.blue,
                ]
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        }
    }
    const ctx = document.getElementById('chartPreferences').getContext('2d');
    window.myPie = new Chart(ctx, config);
});