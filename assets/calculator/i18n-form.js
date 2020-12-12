$(function () {
    $('#title').html(dictionary.title);
    $('#subtitle').html(dictionary.subtitle);
    $('#demographicsTab').text(dictionary.demographics);
    $('#activityTab').text(dictionary.activity);
    $('#dietTab').text(dictionary.diet);
    $('#medicalTab').text(dictionary.medical);
    $('#genderLabel').text(dictionary.gender);
    $('#male').text(dictionary.male);
    $('#female').text(dictionary.female);
    $('#marital').text(dictionary.marital);
    $('#married').text(dictionary.married);
    $('#other').text(dictionary.other);
    $('#education').text(dictionary.education);
    $('#noFormal').text(dictionary.noFormal);
    $('#primary').text(dictionary.primarySchool);
    $('#secondary').text(dictionary.secondarySchool);
    $('#highSchool').text(dictionary.highSchool);
    $('#professional').text(dictionary.professional);
    $('#higher').text(dictionary.higher);
    $('#unknown').text(dictionary.unknown);
    $('#age').text(dictionary.age);
    $('#height').text(dictionary.height);
    $('#weight').text(dictionary.weight);
    $('#smoking').text(dictionary.smoking);
    $('#neverSmoker').text(dictionary.neverSmoker);
    $('#formerSmoker').text(dictionary.formerSmoker);
    $('#currentSmoker').text(dictionary.currentSmoker);
    $('#drinking').text(dictionary.drinking);
    $('#neverDrinker').text(dictionary.neverDrinker);
    $('#lt1PerWeek').html(dictionary.lt1PerWeek);
    $('#lt7PerWeek').html(dictionary.lt7PerWeek);
    $('#lt14PerWeek').html(dictionary.lt14PerWeek);
    $('#gt14PerWeek').html(dictionary.gt14PerWeek);
    $('#physicalActivity').text(dictionary.physicalActivity);
    $('#redMeat').text(dictionary.redMeat);
    $('#tea').text(dictionary.tea);
    $('#coffee').text(dictionary.coffee);
    $('#comorbidity').text(dictionary.comorbidity);
    $('#familyHistory').text(dictionary.familyHistory);

    $('.yes').text(dictionary.yes);
    $('.no').text(dictionary.no);

    $('#ageInput').attr("placeholder", dictionary.ageHelp);
    $('#heightInput').attr("placeholder", dictionary.heightHelp);
    $('#weightInput').attr("placeholder", dictionary.weightHelp);

    $('#drinkingHelp').text(dictionary.drinkingHelp);
    $('#physicalActivityHelp').text(dictionary.physicalActivityHelp);
    $('#redMeatHelp').text(dictionary.redMeatHelp);
    $('#teaHelp').text(dictionary.teaHelp);
    $('#coffeeHelp').text(dictionary.coffeeHelp);
    $('#familyHistoryHelp').text(dictionary.familyHistoryHelp);

    $('#previous').attr("value", dictionary.previous);
    $('#next').attr("value", dictionary.next);
    $('#finish').attr("value", dictionary.finish);
    $('#disease-1').before(dictionary.disease1);
    $('#disease-2').before(dictionary.disease2);
    $('#disease-3').before(dictionary.disease3);
    $('#disease-4').before(dictionary.disease4);
    $('#disease-5').before(dictionary.disease5);
    $('#disease-6').before(dictionary.disease6);
    $('#disease-7').before(dictionary.disease7);
    $('#disease-8').before(dictionary.disease8);
    $('#disease-9').before(dictionary.disease9);
    $('#disease-10').before(dictionary.disease10);
    $('#disease-11').before(dictionary.disease11);
    $('#disease-12').before(dictionary.disease12);
    $('#disease-13').before(dictionary.disease13);
    $('#disease-14').before(dictionary.disease14);
    $('#disease-15').before(dictionary.disease15);
    $('#disease-16').before(dictionary.disease16);
    $('#disease-17').before(dictionary.disease17);
    $('#disease-18').before(dictionary.disease18);
    $('#disease-19').before(dictionary.disease19);
    $('#disease-20').before(dictionary.disease20);
    $('#disease-21').before(dictionary.disease21);
    $('#disease-22').before(dictionary.disease22);
});