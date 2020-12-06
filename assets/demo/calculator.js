$(function () {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const urlParameters = url.searchParams;
    const calculatorParameters = {
        gender: urlParameters.get("gender"),
        maritalStatus: urlParameters.get("maritalStatus"),
        education: urlParameters.get("education"),
        height: urlParameters.get("height"),
        weight: urlParameters.get("weight"),
        smokingStatus: urlParameters.get("smokingStatus"),
        drinkingStatus: urlParameters.get("drinkingStatus"),
        physicalActivity: urlParameters.get("physicalActivity"),
        redMeat: urlParameters.get("redMeat"),
        tea: urlParameters.get("tea"),
        coffee: urlParameters.get("coffee"),
        numOfMorbidity: urlParameters.get("numOfMorbidity"),
        familyHistory: urlParameters.get("familyHistory"),
    };

    if (calculatorParameters.gender === "male") {
        $("input[name='gender'][value='1']").prop("checked", true);
    } else if (calculatorParameters.gender === "female") {
        $("input[name='gender'][value='0']").prop("checked", true);
    }

    if (calculatorParameters.maritalStatus === "married") {
        $("input[name='maritalStatus'][value='0']").prop("checked", true);
    } else if (calculatorParameters.maritalStatus === "other") {
        $("input[name='maritalStatus'][value='1']").prop("checked", true);
    }
    $("[name='finish']").on("click", function () {

    });
});