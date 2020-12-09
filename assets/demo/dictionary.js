$(function () {
    let dictionary = {
        title: "CÔNG CỤ TỰ ĐÁNH GIÁ NGUY CƠ<br/>UNG THƯ ĐẠI TRỰC TRÀNG",
        subtitle: "Đánh giá nguy cơ mắc ung thư đại trực tràng dựa trên các yếu tố nhân khẩu học và hành vi lối sống.<br/>Thời gian để hoàn thành tự đánh giá: 5 phút.",
        demographics: "Nhân khẩu học",
        activity: "Lối sống",
        diet: "Chế độ ăn",
        medical: "Thông tin khác",
        gender: "Giới tính",
        male: "Nam",
        female: "Nữ",
        marital: "Tình trạng hôn nhân",
        married: "Đã kết hôn",
        other: "Độc thân/Li dị/Li thân/Góa bụa",
        education: "Trình độ học vấn",
        noFormal: "Không đi học",
        primarySchool: "Tiểu học (cấp 1)",
        secondarySchool: "Trung học cơ sở (cấp 2)",
        highSchool: "Trung học phổ thông (cấp 3)",
        professional: "Trung cấp nghề",
        higher: "Cao đẳng/Đại học hoặc cao hơn",
        unknown: "Không biết",
        age: "Tuổi",
        ageHelp: "Tính theo tuổi dương lịch trong khoảng từ 20 đến 80",
        height: "Cân nặng",
        heightHelp: "Tính theo kg",
        weight: "Chiều cao",
        weightHelp: "Tính theo cm",
        smoking: "Hút thuốc",
        neverSmoker: "Chưa bao giờ hút",
        formerSmoker: "Trước đây có hút (nhưng đã dừng)",
        currentSmoker: "Hiện tại đang hút thuốc",
        drinking: "Uống đồ uống có cồn",
        neverDrinker: "Chưa bao giờ uống",
        lt1PerWeek: "Uống ít hơn 1 đơn vị/tuần",
        lt7PerWeek: "Uống từ 2-7 đơn vị/tuần",
        lt14PerWeek: "Uống từ 8-14 đơn vị/tuần",
        gt14PerWeek: "Uống lớn hơn 14 đơn vị trên/tuần",
        drinkingHelp: "1 đơn vị tính là 1 chén 30ml rượu hoặc 1 cốc/ly 100ml bia",
        physicalActivity: "Hoạt động thể chất",
        physicalActivityHelp: "Hoạt động thể chất là có vận động: đi lại, chơi thể thao lớn hơn 30 phút mỗi ngày",
        yes: "Có",
        no: "Không",
        redMead: "Có ăn thịt đỏ không?",
        tea: "Có uống trà không?",
        teaHelp: "Trà ở đây bao gồm trà mạn, trà xanh. Tần suất uống ít nhất 1 lần/tuần",
        coffee: "Có uống cafe không?",
        coffeeHelp: "Cafe ở đây bao gồm tất cả các loại cafe. Tần suất uống ít nhất 1 lần/tuần",
        comorbidity: "Có mắc các bệnh sau không? Chọn đánh dấu tất cả các bệnh hiện mắc.",
        familyHistory: "Người thân trong gia đình có ai bị ung thư không?",
        familyHistoryHelp: "Người thân trong gia đình là bố, mẹ, anh chị em ruột, vợ con..."
    }
    const englishDictionary = {
        title: "Colorectal Cancer Risk Assessment Tool",
        subtitle: "Assess the risk of colorectal cancer based on demographic factors and lifestyle behaviors. <br/> Time to complete self-assessment: 5 minutes.",
        demographics: "Demographics",
        activity: "Activity",
        diet: "Diet",
        medical: "Medical",
        gender: "Gender",
        male: "Male",
        female: "Female",
        marital: "Marital Status",
        married: "Married",
        other: "Separated/Divorced/Windowed",
        education: "Education",
        noFormal: "No formal education",
        primarySchool: "Primary school",
        secondarySchool: "Secondary school",
        highSchool: "High school",
        professional: "Professional education",
        higher: "College or higher",
        unknown: "Unknown",
        ageHelp: "Calculated according to the calendar age",
        age: "Age",
        height: "Height",
        heightHelp: "In cm",
        weight: "Weight",
        weightHelp: "In kg",
        smoking: "Smoking status",
        neverSmoker: "Never smoker",
        formerSmoker: "Former smoker",
        currentSmoker: "Current smoker",
        drinking: "Drinking status",
        neverDrinker: "Never drinker",
        lt1PerWeek: "&le; 1 drink/week",
        lt7PerWeek: "1.1 - 7 drink/week",
        lt14PerWeek: "7.1 - 14 drink/week",
        gt14PerWeek: "&ge; 14 drink/week",
        drinkingHelp: "1 unit is 1 cup of 30ml of wine or 1 cup / glass of 100ml of beer",
        physicalActivity: "Physical activity",
        physicalActivityHelp: "Physical activity means having exercise: walking, playing sports for more than 30 minutes a day",
        yes: "Yes",
        no: "No",
        redMead: "Red meat",
        tea: "Tea",
        teaHelp: "Tea here includes tea, green tea. Frequency of drinking at least 1 time / week",
        coffee: "Coffee",
        coffeeHelp: "The cafe here includes all types of coffee. Frequency of drinking at least 1 time / week",
        comorbidity: "Have the following diseases? Select to check all the available diseases.",
        familyHistory: "Does anyone in the family have cancer?",
        familyHistoryHelp: "Relatives in the family are father, mother, siblings, wife and children ..."
    }

    if(new URL(window.location.href).searchParams.get("language") === "en") {
        dictionary = englishDictionary;
    }

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
});