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
    const numOfMorbidity = urlParameters.get("numOfMorbidity");
    const familyHistory = urlParameters.get("familyHistory");

    const bmi = weight / ((height / 100) * (height / 100));
    const xigma = 0.1004906 - 0.0031462 * age + 0.1225548 * gender
        + 0.0291978 * maritalStatus - 0.0375267 * education + 0.026224 * bmi
        + 0.0406323 * smokingStatus + 0.1206483 * drinkingStatus
        + 0.1201688 * physicalActivity - 0.0772327 * familyHistory
        + 0.4353487 * numOfMorbidity - 0.7580442 * redMeat
        - 0.1374505 * tea - 0.2713213 * coffee;
    const result = Math.round(100 / (1 + Math.exp(-xigma)));

    const dataPreferences = {
        series: [result, 100 - result]
    };

    const optionsPreferences = {
        height: '230px'
    };

    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
});