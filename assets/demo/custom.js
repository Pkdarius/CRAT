const demo = {
    presentationAnimations: function() {
        $(function (events, handler) {
            const $window = $(window),
                isTouch = Modernizr.touch;

            if (isTouch) {
                $(".add-animation").addClass("animated");
            }

            $window.on("scroll", revealAnimation);

            function revealAnimation() {
                $(".add-animation:not(.animated)").each(function() {
                    const $this = $(this),
                        offsetTop = $this.offset().top,
                        scrolled = $window.scrollTop(),
                        win_height_padded = $window.height();
                    if (scrolled + win_height_padded > offsetTop) {
                        $this.addClass("animated");
                    }
                });
                $(".add-animation.animated").each(function(index) {
                    const $this = $(this);
                    const offsetTop = $this.offset().top;
                    const scrolled = $window.scrollTop();
                    const windowHeight = $window.height();

                    const win_height_padded = windowHeight * 0.8;
                    if (scrolled + win_height_padded < offsetTop) {
                        $(this).removeClass("animated");
                    }
                });
            }

            revealAnimation();
        });
    },

    initMaterialWizard: function() {
        // Code for the Validator
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
                },
                height: {
                    required: true,
                },
                weight: {
                    required: true,
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
                numOfMorbidity: {
                    required: true,
                },
                familyHistory: {
                    required: true,
                },
            },

            highlight: function(element) {
            },
            success: function(element) {
            },
            errorPlacement: function(error, element) {
            },
        });
        // Wizard Initialization
        $(".card-wizard").bootstrapWizard({
            tabClass: "nav nav-pills",
            nextSelector: ".btn-next",
            previousSelector: ".btn-previous",

            onNext: function(tab, navigation, index) {
                const $valid = $(".card-wizard form").valid();
                if (!$valid) {
                    swal({
                        title: 'Error!',
                        text: "You must select or fill all required fields!",
                        type: 'error',
                    });
                    return false;
                }
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
            wizard.find('[data-toggle="wizard-radio"]').removeClass("active");
            $(this).addClass("active");
            $(wizard).find('[type="radio"]').removeAttr("checked");
            $(this).find('[type="radio"]').attr("checked", "true");
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
            } else if ($current === total_steps ||(mobile_device && index % 2 === 1)
            ) {
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
    },
};