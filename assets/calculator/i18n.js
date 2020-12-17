const languageElement = $('#language');
console.log(languageElement.prop('checked'))
const vietnameseDictionary = {
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
    single: "Độc thân",
    married: "Đã kết hôn",
    other: "Li dị/Li thân/Góa bụa",
    education: "Trình độ học vấn",
    noFormal: "Không đi học",
    primarySchool: "Tiểu học (cấp 1)",
    secondarySchool: "Trung học cơ sở (cấp 2)",
    highSchool: "Trung học phổ thông (cấp 3)",
    professional: "Trung cấp nghề",
    higher: "Cao đẳng/Đại học hoặc cao hơn",
    unknown: "Không biết",
    age: "Tuổi",
    ageFormatError: "Giá trị tuổi không hợp lệ.",
    ageValueError: "Công cụ này chỉ áp dụng với người từ 40 tuổi trở lên.",
    ageHelp: "Tính theo tuổi dương lịch, tuổi lớn hơn hoặc bằng 40",
    height: "Chiều cao",
    heightFormatError: "Giá trị chiều cao không hợp lệ.",
    heightValueError: "Chiều cao nên trong khoảng 50 - 210cm.",
    heightHelp: "Tính theo cm",
    weight: "Cân nặng",
    weightFormatError: "Giá trị cân nặng không hợp lệ.",
    weightValueError: "Cân nặng nên trong khoảng 30 - 150kg.",
    weightHelp: "Tính theo kg",
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
    drinkingHelp: "01 đơn vị tương đương với 30 ml 40 rượu độ hoặc 40 ml rượu &lt;=39 độ hoặc 120ml rượu 12 độ hoặc 285ml bia 4.5 độ)",
    physicalActivity: "Hoạt động thể chất",
    physicalActivityHelp: "Trong 10 năm qua có tập thể dục hoặc chơi thể thao thường xuyên ít nhất 1 lần 1 tuần trong 2 tháng liên tục)",
    yes: "Có",
    no: "Không",
    redMeat: "Có ăn các loại thịt đỏ (ví dụ như: thịt bò, lợn, cừu, dê, ngựa, bê, ngựa) trong 5 năm qua không?",
    redMeatHelp: "Thịt đỏ là các loại thịt có màu đỏ như thịt bò thịt lợn. Tần suất ăn ít nhất 50g/ngày",
    tea: "Có uống trà xanh (ví dụ như trà tươi, trà mạn) và/hoặc trà đen (ví dụ như trà Lipton) trong 5 năm qua không?",
    teaHelp: "Trà ở đây bao gồm trà mạn, trà xanh. Tần suất uống ít nhất 1 lần/tuần",
    coffee: "Có uống cà phê (có hoặc không có sữa) trong 5 năm qua không?",
    coffeeHelp: "Cafe ở đây bao gồm tất cả các loại cafe. Tần suất uống ít nhất 1 lần/tuần",
    comorbidity: "Có mắc các bệnh sau không? Chọn đánh dấu tất cả các bệnh hiện mắc.",
    familyHistory: "Có người thân trực hệ nào trong gia đình (bao gồm bố mẹ ruột, anh chị em ruột, con ruột) mắc ung thư không?",
    familyHistoryHelp: "Người thân trong gia đình là bố, mẹ, anh chị em ruột, vợ con...",
    next: "Tiếp tục",
    previous: "Trở lại",
    finish: "Hoàn thành",
    disease1: "Đái tháo đường  (không tính đái đáo đường khi mang thai)",
    disease2: "Mỡ máu cao như cholesterol hoặc tăng triglycerides",
    disease3: "Đột quỵ",
    disease4: "Viêm gan mạn tính",
    disease5: "Viêm dạ dày mạn tính",
    disease6: "Dị ứng, ví dụ như dị ứng thức ăn, dị ứng da, dị ứng thuốc, di ứng phấn hoa/bụi hoặc các dị ứng khác",
    disease7: "Khí phế thũng",
    disease8: "Lao phổi",
    disease9: "Lupus như lupus hệ thống, luphus ban đỏ hệ thống",
    disease10: "Bệnh viêm ruột (IBD)",
    disease11: "Bệnh gout",
    disease12: "Tăng huyết áp (không tính tăng huyết áp khi mang thai)",
    disease13: "Bệnh tim mạch vành khác",
    disease14: "Nhồi máu cơ tim",
    disease15: "Xơ gan",
    disease16: "Loét dạ dày, tá trang (không tính loét dạ dày do tăng tiết dịch vị)",
    disease17: "Hen suyễn",
    disease18: "Viêm phế quản mạn tính",
    disease19: "Viêm khớp",
    disease20: "Hội chứng ruột kích thích (IBS)",
    disease21: "Polyps đại trực tràng",
    disease22: "Phì đại tuyến tiền liệt (ở nam giới)",
    errorTitle: "Lỗi!",
    validatorError: "Bạn phải chọn tất cả các trường được yêu cầu!",
    ageRangeError: "Tuổi của bạn phải trong khoảng 20 - 80!",
    reset: "Tính lại với thông tin mới",
    recalculate: "Chỉnh sửa lại thông tin đã điền",
    resultText: "Bạn có tỉ lệ mắc ung thư là ",
    quote1: "Công thức ước tính nguy cơ polyp/ung thư đại trực tràng bạn vừa sử dụng được xây\n" +
        "dựng dựa trên kết quả của nghiên cứu Polyp và Ung thư đại trực tràng tại Việt Nam\n" +
        "(VinCAPR). Kết quả nguy cơ ước tính chỉ có tính chất tham khảo. Nếu bạn có bất cứ\n" +
        "câu hỏi nào liên quan đến tình trạng sức khỏe của mình bạn cần đến gặp bác sỹ\n" +
        "chuyên khoa để được tư vấn và có thông tin chi tiết.",
    quote2: "Để hạn chế nguy cơ mắc polyp/ung thư đại trực tràng, bạn nên:",
    rcm1: "Từ bỏ thuốc lá càng sớm càng tốt",
    rcm2: "Hạn chế sử dụng đồ uống có cồn",
    rcm3: "Duy trì tập thể dục hay các hoạt động thể lực thường xuyên",
    rcm4: "Duy trì chế độ ăn uống lành mạnh, tăng cường ăn rau, hoa quả, giảm tiêu thụ thịt\n" +
        "đỏ và/hoặc thịt chế biến",
    rcm5: "Duy trì cân nặng hợp lý",
    rcm6: "Bắt đầu thực hiện sàng lọc ung thư đại trực tràng từ tuổi 45",
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
    single: "Single",
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
    ageHelp: "Calculated according to the calendar age, age greater or equal 40",
    age: "Age",
    ageFormatError: "Invalid age value.",
    ageValueError: "This tool is only applicable to people aged 40 and over.",
    height: "Height",
    heightFormatError: "Invalid height value.",
    heightValueError: "Your height should be in range 50 - 210cm",
    heightHelp: "In cm",
    weight: "Weight",
    weightFormatError: "Invalid weight value.",
    weightValueError: "Your weight should be in range 30 - 150kg",
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
    drinkingHelp: "01 standard drink equivalent to: 30 ml spirits of 40% acl/vol; or 40 ml of &le;39% alc/vol; or 120 ml wine of 12% acl/vol; or 285 ml beer of 4.5% acl/vol",
    physicalActivity: "Physical activity",
    physicalActivityHelp: "Doing exercise or sport at least once per week for 2 months continuously during last 10 years",
    yes: "Yes",
    no: "No",
    redMeat: "Do you eat red meat (such as: beef, pork, lamp, goat, horse, veal, mutton) in the last 5 years?",
    redMeatHelp: "Red meats are red meats like pork beef. The frequency of eating is at least 50g / day.",
    tea: "Do you drink green tea and/or black tea in the last 5 years?",
    teaHelp: "Tea here includes tea, green tea. Frequency of drinking at least 1 time / week",
    coffee: "Do you drink coffee (with or without milk) in the last 5 years?",
    coffeeHelp: "The cafe here includes all types of coffee. Frequency of drinking at least 1 time / week",
    comorbidity: "Have the following diseases? Select to check all the available diseases.",
    familyHistory: "Are there any your blood related relatives, including your parents, siblings, brothers and children, diagnosed with any cancer?",
    familyHistoryHelp: "Relatives in the family are father, mother, siblings, wife and children ...",
    next: "Next",
    previous: "Previous",
    finish: "Finish",
    disease1: "Diabetes (excluding gestational diabetes)\tHigh blood pressure (excluding gestational hypertension)",
    disease2: "Hyperlipidemia",
    disease3: "Stroke",
    disease4: "Chronic hepatitis",
    disease5: "Chronic gastritis",
    disease6: "Allergies",
    disease7: "Emphysema",
    disease8: "TB",
    disease9: "Lupus",
    disease10: "IBD",
    disease11: "Gout",
    disease12: "High blood pressure (excluding gestational hypertension)",
    disease13: "CVD",
    disease14: "Myocardial infarction",
    disease15: "Cirrhosis of the liver",
    disease16: "Peptic, Gastric (excluding peptic ulcer) and duodenal ulcers",
    disease17: "Asthma",
    disease18: "Chronic bronchitis",
    disease19: "Arthritis",
    disease20: "IBS",
    disease21: "Colorectal Polyps",
    disease22: "Prostatic hypertrophy",
    errorTitle: "Error!",
    validatorError: "You must select or fill all required fields!",
    ageRangeError: "Your age must be in range 20 - 80",
    reset: "Reset",
    recalculate: "Recalculate",
    resultText: "Your chance of getting cancer is ",
    quote1: "The above calculation is based on the results from the Vietnam Colorectal Cancer and\n" +
        "Polyps Research (VinCAPR) and should be used as a reference only. Please consult\n" +
        "with your doctors or other healthcare professional for any question or concern you may\n" +
        "have regarding your condition.",
    quote2: "General recommendations to lower your risk of colorectal cancer:",
    rcm1: "To quit cigarette smoking as early as possible",
    rcm2: "To limit alcohol drinking",
    rcm3: "To maintain the exercise practice or physical activity as more frequent as\n" +
        "possible",
    rcm4: "To maintain the healthy eating habits, including more vegetables and fruits and\n" +
        "less read meat and/or processed meat",
    rcm5: "To manage your weight",
    rcm6: "To start colorectal cancer screening at age 45",
}

languageElement.on('click', () => {
    const checked = languageElement.prop('checked');
    const currentHref = window.location.href;
    if (currentHref.includes("language=en")) {
        if (checked) {
            window.location.href = currentHref.replace("language=en", "language=vi");
        } else {}
    } else if (currentHref.includes("language=vi")) {
        if (checked) {} else {
            window.location.href = currentHref.replace("language=vi", "language=en");
        }
    } else {
        if (checked) {
            window.location.href = currentHref + (currentHref.includes("?") ? "&" : "?") + "language=vi";
        } else {
            window.location.href = currentHref + (currentHref.includes("?") ? "&" : "?") + "language=en";
        }
    }
});

let dictionary;
let language = new URL(window.location.href).searchParams.get("language");
if (language === "en") {
    dictionary = englishDictionary;
    languageElement.prop('checked', false);
} else {
    dictionary = vietnameseDictionary;
    languageElement.prop('checked', true);
}