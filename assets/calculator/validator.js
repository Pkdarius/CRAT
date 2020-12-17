$(function() {
    const $validator = $(".card-wizard form").validate({
        rules: {
            gender: {
                required: true,
            },
            maritalStatus: {
                required: true,
            },
            education: {
                required: true,
            },
            age: {
                required: true,
                min: 40,
                max: 100,
                number: true
            },
            height: {
                required: true,
                number: true,
                min: 50,
                max: 210
            },
            weight: {
                required: true,
                number: true,
                min: 30,
                max: 150
            },
            smokingStatus: {
                required: true,
            },
            drinkingStatus: {
                required: true,
            },
            physicalActivity: {
                required: true,
            },
            redMeat: {
                required: true,
            },
            tea: {
                required: true,
            },
            coffee: {
                required: true,
            },
            familyHistory: {
                required: true,
            }
        },
        highlight: function(element) {},
        success: function(element) {},
        errorPlacement: function(error, element) {},
        error: function(element) {
            console.log(element);
        },
        invalidHandler: function(event, validator) {
            validator.errorList.forEach(error => {
                let message = dictionary.validatorError;
                console.log(error)
                if (error.element.id === "ageInput") {
                    if (error.method === "max" || error.method === "min") {
                        message = dictionary.ageValueError;
                    } else if (error.method === "number") {
                        message = dictionary.ageFormatError;
                    }
                } else if (error.element.id === "heightInput") {
                    if (error.method === "max" || error.method === "min") {
                        message = dictionary.heightValueError;
                    } else if (error.method === "number") {
                        message = dictionary.heightFormatError;
                    }
                } else  if (error.element.id === "weightInput") {
                    if (error.method === "max" || error.method === "min") {
                        message = dictionary.weightValueError;
                    } else if (error.method === "number") {
                        message = dictionary.weightFormatError;
                    }
                }
                swal({
                    title: dictionary.errorTitle,
                    text: message,
                    type: 'error',
                });
            });
        }
    });

    $(".card-wizard").bootstrapWizard({
        tabClass: "nav nav-pills",
        nextSelector: ".btn-next",
        previousSelector: ".btn-previous",

        onNext: function(tab, navigation, index) {
            return $(".card-wizard form").valid();
        },
        onInit: function(tab, navigation, index) {
            //check number of tabs and fill the entire row
            const $total = navigation.find("li").length;
            const $wizard = navigation.closest(".card-wizard");

            const $first_li = navigation.find("li:first-child a").html();
            const $moving_div = $(
                '<div class="moving-tab">' + $first_li + "</div>"
            );
            $(".card-wizard .wizard-navigation").append($moving_div);

            refreshAnimation($wizard, index);

            $(".moving-tab").css("transition", "transform 0s");
        },

        onTabClick: function(tab, navigation, index) {
            return $(".card-wizard form").valid();
        },

        onTabShow: function(tab, navigation, index) {
            const $total = navigation.find("li").length;
            const $current = index + 1;

            const $wizard = navigation.closest(".card-wizard");

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find(".btn-next").hide();
                $($wizard).find(".btn-finish").show();
            } else {
                $($wizard).find(".btn-next").show();
                $($wizard).find(".btn-finish").hide();
            }

            const button_text = navigation
                .find("li:nth-child(" + $current + ") a")
                .html();

            setTimeout(function() {
                $(".moving-tab").text(button_text);
            }, 150);

            const checkbox = $(".footer-checkbox");

            if (index !== 0) {
                $(checkbox).css({
                    opacity: "0",
                    visibility: "hidden",
                    position: "absolute",
                });
            } else {
                $(checkbox).css({
                    opacity: "1",
                    visibility: "visible",
                });
            }

            refreshAnimation($wizard, index);
        },
    });

    $('[data-toggle="wizard-radio"]').on("click", function() {
        const wizard = $(this).closest(".card-wizard");
        wizard.find(`[data-toggle="wizard-radio"]`).removeClass("active");
        $(this).addClass("active");
        $(wizard).find(`[type="radio"]`).removeAttr("checked");
        $(this).find(`[type="radio"]`).attr("checked", "true");
    });

    $('[data-toggle="wizard-checkbox"]').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find('[type="checkbox"]').removeAttr("checked");
        } else {
            $(this).addClass("active");
            $(this).find('[type="checkbox"]').attr("checked", "true");
        }
    });

    $(".set-full-height").css("height", "auto");

    $(window).on("resize", function() {
        $(".card-wizard").each(function() {
            const $wizard = $(this);

            const index = $wizard.bootstrapWizard("currentIndex");
            refreshAnimation($wizard, index);

            $(".moving-tab").css({
                transition: "transform 0s",
            });
        });
    });

    function refreshAnimation($wizard, index) {
        const $total = $wizard.find(".nav li").length;
        let $li_width = 100 / $total;

        const total_steps = $wizard.find(".nav li").length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        const mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
            move_distance = $wizard.width() / 2;
            index_temp = index % 2;
            $li_width = 50;
        }

        $wizard.find(".nav li").css("width", $li_width + "%");

        const step_width = move_distance;
        move_distance = move_distance * index_temp;

        const $current = index + 1;

        if ($current === 1 || (mobile_device && index % 2 === 0)) {
            move_distance -= 8;
        } else if ($current === total_steps || (mobile_device && index % 2 === 1)) {
            move_distance += 8;
        }

        if (mobile_device) {
            vertical_level = Math.floor(index / 2);
            vertical_level = vertical_level * 38;
        }

        $wizard.find(".moving-tab").css("width", step_width);
        $(".moving-tab").css({
            transform: "translate3d(" +
                move_distance +
                "px, " +
                vertical_level +
                "px, 0)",
            transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)",
        });
    }
});