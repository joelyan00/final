/**
 * File Name: jyutil.js
 *
 * Revision History:
 *       jianliang yan, 2021-03-03 : Created
 */
function doValidate_frmSignUpage() {
    var f = $("#jysingupForm");

    f.validate({
        rules: {
            jytxtsigupUserName:{
                required: true,
                minlength: 4,
                maxlength: 20,
            },
            jytxtSingupEmail:{
                required: true,
                email:true,
                emailCheck:true
            },
            jytxtSingupPassword:{
                required: true,
                minlength: 8,
                passwordCheck:true
            },
            jytxtSingupPassword2:{
                required: true,
                equalTo: "#jytxtSingupPassword"
            }
        },
        messages: {
            jytxtsigupUserName:{
                required: "Length must be 4-20 characters long",
                minlength: "Length must be 4-20 characters long",
                maxlength: "Length must be 4-20 characters long"
            },
            jytxtSingupEmail:{
                required: "You must specify email",
                email: "email must be valid",
                emailCheck: "Please provide right format email"
            },
            jytxtSingupPassword:{
                required: "must",
                minlength: "min 8 ",
                passwordCheck:"right format "
            },
            jytxtSingupPassword2:{
                required: "enter again",
                equalTo: "not match"
            }
        }
    });

    // 3. return valid() on the form

    return f.valid();
}
// email validate//



//update form vaildation function//
function doValidate_jyAddContact()
{
    var f = $("#jyAddContactForm");

    f.validate({
        rules: {
            jytxtNameAdd:{
                required: true,
                minlength: 4,
                maxlength: 20,
            },
            jyReviewAdd:{
                required: true,
                minlength:5,

            },
            jytxtFullName:{
                required: true,
                minlength:4,
            },
            jyPhoneNumber:{
                required:true,
                min:10,
                max:10,
            },
            jytxtEmailAdd:{
                required:true,
                email:true,
                emailCheck:true
            },
            jytxtAddress:{
                required:true,
                min:5,
                max:50,
            },
            jytxtCompanyHomePage:{
                required:true,
                min:0,
                max:35,
            }


        },
        messages: {
            jytxtNameAdd:{
                required: "must provide !",
                minlength: "min 4",
                maxlength: "max 20",
            },
            jyReviewAdd:{
                required: "required",
                minlength:"min 5",

            },
            jytxtFullName:{
                required: "required",
                minlength:"min 4",
            },
            jyPhoneNumber:{
                required:"required",
                min:"min 10",
                max:"max 10",
            },
            jytxtEmailAdd:{
                required:"required",
                email:"required",
                emailCheck:"right format!"
            },
            jytxtAddress:{
                required:"required",
                min:"min 5",
                max:"max 50",
            },
            jytxtCompanyHomePage:{
                required:"required",
                min:"min 0",
                max:"required",
            }
        }
    });
    return f.valid();
}


function doValidate_jyAddContact()
{

    var f = $("#jyAddContactForm");

    f.validate({
        rules: {
            jytxtNameAdd:{
                required: true,
                minlength: 4
            },
            type:{
                required: true,

            },
            jyReviewAdd:{
                required: true,
                minlength: 5
            },
            jytxtFullName:{
                required: true,
                minlength: 2
            },
            jyPhoneNumber:{
                required: true,
                minlength: 9
            },
            jytxtEmailAdd:{
                required: true,
                emailCheck:true
            },
            jytxtAddress:{
                required: true,
                minlength: 4
            },
            jytxtCompanyHomePage:{
                required: true,
                minlength: 4
            },
        },
        messages: {
            jytxtNameAdd:{
                required: "please enter company name",
                minlength: "must have 4 letter"
            },
            type:{
                required: "must choose one"

            },
            jyReviewAdd:{
                required: "please give description!",
                minlength: "min 5 letter"
            },
            jytxtFullName:{
                required: "must proive contact person name",
                minlength: "min 2 letter"
            },
            jyPhoneNumber:{
                required: "must provide 9  digital phone number",
                minlength: "at  9 number"
            },
            jytxtEmailAdd:{
                required: "must provide!",
                emailCheck:"Email must be a conestoga email"
            },
            jytxtAddress:{
                required: "please provide company address",
                minlength: "at least 4 letter"
            },
            jytxtCompanyHomePage:{
                required: "please provide home page",
                minlength: "4 letter at least"
            },
        }
    });
    return f.valid();
}

jQuery.validator.addMethod(
    "passwordCheck",
    function (value, element){
        var r = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || r.test(value);
    },
    "Our cool password check"
);


jQuery.validator.addMethod(
    "emailCheck",
    function (value, element){
        var r = /^.+@conestogac.on.ca$/;
        return this.optional(element) || r.test(value);
    },
    "Our cool email check"
);