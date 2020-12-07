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

    function selectRadio(selector) {
        $(selector).prop("checked", true);
    }

    if (gender) {
        selectRadio(`input[name='gender'][value='${gender}']`);
    }

    if (maritalStatus) {
        selectRadio(`input[name='maritalStatus'][value='${maritalStatus}']`);
    }

    if (education) {
        selectRadio(`input[name='education'][value='${education}']`);
    }

    if (age) {
        $("input[name='age']").val(age);
    }

    if (height) {
        $("input[name='height']").val(height);
    }

    if (height) {
        $("input[name='weight']").val(weight);
    }

    if (smokingStatus) {
        selectRadio(`input[name='smokingStatus'][value='${smokingStatus}']`);
    }

    if (drinkingStatus) {
        selectRadio(`input[name='drinkingStatus'][value='${drinkingStatus}']`);
    }

    if (physicalActivity) {
        selectRadio(`input[name='physicalActivity'][value='${physicalActivity}']`);
    }

    if (redMeat) {
        selectRadio(`input[name='redMeat'][value='${redMeat}']`);
    }

    if (tea) {
        selectRadio(`input[name='tea'][value='${tea}']`);
    }

    if (coffee) {
        selectRadio(`input[name='coffee'][value='${coffee}']`);
    }

    if (numOfMorbidity) {
        selectRadio(`input[name='numOfMorbidity'][value='${numOfMorbidity}']`);
    }

    if (familyHistory) {
        selectRadio(`input[name='familyHistory'][value='${familyHistory}']`);
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
        const gender = $("input[name='gender']:checked").val();
        const maritalStatus = $("input[name='maritalStatus']:checked").val();
        const education = $("input[name='education']:checked").val();
        const age = $("input[name='age']").val();
        const height = $("input[name='height']").val();
        const weight = $("input[name='weight']").val();
        const smokingStatus = $("input[name='smokingStatus']:checked").val();
        const drinkingStatus = $("input[name='drinkingStatus']:checked").val();
        const physicalActivity = $("input[name='physicalActivity']:checked").val();
        const redMeat = $("input[name='redMeat']:checked").val();
        const tea = $("input[name='tea']:checked").val();
        const coffee = $("input[name='coffee']:checked").val();
        const numOfMorbidity = $("input[name='numOfMorbidity']:checked").val();
        const familyHistory = $("input[name='familyHistory']:checked").val();

        window.location.href = `./result.html?gender=${gender}&maritalStatus=${maritalStatus}&education=${education}&age=${age}&height=${height}&weight=${weight}&smokingStatus=${smokingStatus}&drinkingStatus=${drinkingStatus}&physicalActivity=${physicalActivity}&redMeat=${redMeat}&tea=${tea}&coffee=${coffee}&numOfMorbidity=${numOfMorbidity}&familyHistory=${familyHistory}`;
    });
});