$(function () {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const urlParameters = url.searchParams;
    let calculatorParameters = {
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

    function selectRadio(selector) {
        $(selector).prop("checked", true);
    }

    switch (calculatorParameters.gender) {
        case "male":
            selectRadio("input[name='gender'][value='1']");
            break;
        case "female":
            selectRadio("input[name='gender'][value='0']");
            break;
    }

    switch (calculatorParameters.maritalStatus) {
        case "married":
            selectRadio("input[name='maritalStatus'][value='0']");
            break;
        case "other":
            selectRadio("input[name='maritalStatus'][value='1']");
            break;
    }

    switch (calculatorParameters.education) {
        case "noFormal":
            selectRadio("input[name='education'][value='5']");
            break;
        case "primary":
            selectRadio("input[name='education'][value='4']");
            break;
        case "secondary":
            selectRadio("input[name='education'][value='3']");
            break;
        case "high":
            selectRadio("input[name='education'][value='2']");
            break;
        case "professional":
            selectRadio("input[name='education'][value='1']");
            break;
        case "higher":
            selectRadio("input[name='education'][value='0']");
            break;
        case "unknown":
            selectRadio("input[name='education'][value='6']");
            break;
    }

    const height = parseFloat(calculatorParameters.height);
    if(height) {
        $("input[name='height']").val(height);
    }

    const weight = parseFloat(calculatorParameters.weight);
    if(height) {
        $("input[name='weight']").val(weight);
    }

    switch (calculatorParameters.smokingStatus) {
        case "never":
            selectRadio("input[name='smokingStatus'][value='0']");
            break;
        case "former":
            selectRadio("input[name='smokingStatus'][value='1']");
            break;
        case "current":
            selectRadio("input[name='smokingStatus'][value='2']");
            break;
    }

    switch (calculatorParameters.drinkingStatus) {
        case "never":
            selectRadio("input[name='drinkingStatus'][value='0']");
            break;
        case "le1":
            selectRadio("input[name='drinkingStatus'][value='1']");
            break;
        case "le7":
            selectRadio("input[name='drinkingStatus'][value='2']");
            break;
        case "le14":
            selectRadio("input[name='drinkingStatus'][value='3']");
            break;
        case "gt14":
            selectRadio("input[name='drinkingStatus'][value='4']");
            break;
    }

    switch (calculatorParameters.physicalActivity) {
        case "yes":
            selectRadio("input[name='physicalActivity'][value='1']");
            break;
        case "no":
            selectRadio("input[name='physicalActivity'][value='2']");
            break;
    }

    switch (calculatorParameters.redMeat) {
        case "yes":
            selectRadio("input[name='redMeat'][value='1']");
            break;
        case "no":
            selectRadio("input[name='redMeat'][value='0']");
            break;
    }

    switch (calculatorParameters.tea) {
        case "yes":
            selectRadio("input[name='tea'][value='1']");
            break;
        case "no":
            selectRadio("input[name='tea'][value='0']");
            break;
    }

    switch (calculatorParameters.coffee) {
        case "yes":
            selectRadio("input[name='coffee'][value='1']");
            break;
        case "no":
            selectRadio("input[name='coffee'][value='0']");
            break;
    }

    switch (calculatorParameters.numOfMorbidity) {
        case "0":
            selectRadio("input[name='numOfMorbidity'][value='0']");
            break;
        case "1":
            selectRadio("input[name='numOfMorbidity'][value='1']");
            break;
        case "2":
            selectRadio("input[name='numOfMorbidity'][value='2']");
            break;
        case "3":
            selectRadio("input[name='numOfMorbidity'][value='3']");
            break;
    }

    switch (calculatorParameters.familyHistory) {
        case "yes":
            selectRadio("input[name='familyHistory'][value='1']");
            break;
        case "no":
            selectRadio("input[name='familyHistory'][value='2']");
            break;
    }

    $("[name='finish']").on("click", function () {
        const $valid = $(".card-wizard form").valid();
        if (!$valid) {
            swal({
                title: 'Error!',
                text: "You must select or fill all required fields!",
                type: 'error',
            });
            return false;
        }
        calculatorParameters = {
            gender: $("input[name='gender']:checked").val(),
            maritalStatus: $("input[name='maritalStatus']:checked").val(),
            education: $("input[name='education']:checked").val(),
            height: $("input[name='height']").val(),
            weight: $("input[name='weight']").val(),
            smokingStatus: $("input[name='smokingStatus']:checked").val(),
            drinkingStatus: $("input[name='drinkingStatus']:checked").val(),
            physicalActivity: $("input[name='physicalActivity']:checked").val(),
            redMeat: $("input[name='redMeat']:checked").val(),
            tea: $("input[name='tea']:checked").val(),
            coffee: $("input[name='coffee']:checked").val(),
            numOfMorbidity: $("input[name='numOfMorbidity']:checked").val(),
            familyHistory: $("input[name='familyHistory']:checked").val(),
        };
        console.log(calculatorParameters);
    });
});