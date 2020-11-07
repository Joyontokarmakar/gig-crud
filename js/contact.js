  (function($) {
    "use strict";
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: false,
                    minlength: 2
                },
                name2: {
                    required: false,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 2
                },
                web: {
                    required: false,
                    minlength: 7
                },
                phone: {
                    required: false,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "come on, enter your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                name2: {
                    required: "come on, enter your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "Please indicate E-mail address"
                },
                phone: {
                    required: "Enter your number"
                },
                subject: {
                    required: "please indicate a subject"
                },
                web: {
                    required: "please indicate a Website Link"
                },
                message: {
                    required: "you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"./contact/contact_process.php",
                    success: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                            $("#contactForm").resetForm();
                        });
                       
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn();
                        });
                    }
                })
            }
        })
    })
 })(jQuery)