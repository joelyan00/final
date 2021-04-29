/**
 * File Name: jyfacade.js
 *
 * Revision History:
 *       jianliang yan, 2021-03-03 : Created
 */

function clearTable(){
    var result = confirm("do you want to clear tables?");
    if(result)
    {
        try{
            DB.dropTables();
            alert("table drop completed!");
        }
        catch(e){
            alert(e);
        }
    }
}
function jyupdateTypesDropdown() {
    var options = [];
    function callback(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += "<option value="+row['id']+ ">" + row['name']+
            "</option>";
        }
        var dl = $("#jytypeAdd");
         dl=dl.html(htmlCode).val(3).change();
    }

    type.jyselectAll(options, callback);
}


function  jyaddUser()
{

     if ( doValidate_frmSignUpage())
     {
         alert("verify passed");

        var userName = $("#jytxtsigupUserName").val();
        var userEmail = $("#jytxtSingupEmail").val();
        var password = $("#jytxtSingupPassword").val();
        var options = [userName, userEmail, password];

        function callback() {
            console.info("Success: Record inserted successfully");
        }

        user.jyuserinsert(options, callback);
         window,location.href='#jyreviewConatactPage';
    }
    else {
        // 3. if not valid show error
        console.info("form is INVALID");
    }

}
function jyaddContact()
{
    if(doValidate_jyAddContact())
    {
        var businessName = $("#jytxtNameAdd").val();
        console.info(businessName);
        var typeId = $("#jytypeAdd").val();
        console.info(typeId);
        localStorage.setItem("date-row-id",typeId);
        var description =$("#jyReviewAdd").val();
        console.info(description);
        var name =$("#jytxtFullName").val();
        console.info(name);
        var phone = $("#jyPhoneNumber").val();
        console.info(phone);
        var reviewerEmail =$("#jytxtEmailAdd").val();
        console.info(reviewerEmail);
        var address =$("#jytxtAddress").val();
        console.info(address)
        var homepage =$("#jytxtCompanyHomePage").val();
        console.info(homepage);
        var options = [businessName,typeId,description,name,phone,reviewerEmail,address,homepage];
        function callback() {
            console.info("Success: inserted contact 2 successfully");
        }
        review.jycontactinsert(options,callback);
        window.location.href='#jyreviewConatactPage';
    }
    else
    {
        console.info("add contact form not work");
    }

}

function validationcheck()
{
    var username = $("#jyLoginUserName").val();
    var password = $("#jyloginpassword").val();
    try {

        db.transaction(function(tx) {
            tx.executeSql(`SELECT * FROM user WHERE userName='${username}'`, [], function(tx, result) {
                if (result.rows.length == 1) {
                    var user = result.rows.item(0);

                    if (username == user.username && password == user.password)
                    {
                       alert('LOGIN SUCCESS');
                        window.location.href='#jyreviewConatactPage';
                        localStorage.setItem("id",$(this))
                    }
                    else if(username != user.username || password != user.password)
                    {
                        alert('username or password not match');
                    }
                    else
                    {
                        alert('please enter username and password');
                    }
                    // else {
                    //     console.info('username not find!');
                    // }
                }
            }, function(tx, error) {
                console.log('ERROR:', error);
            });
        });

    } catch (e) {
        console.log(e);
    }
}
function jygetAllContact()
{
    var options = [];
    function callback(tx, results)
    {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++)
        {
            var row = results.rows[i];

            htmlCode += "<li><a data-role='button' href='#' data-row-id=" + row['id'] + ">" +
                "<h1>Company Name: " + row['businessName'] + "</h1>" +
                "<h4>Description: " + row['description'] + "</h4>" +
                "<h4>phone : " + row['phone'] +"</h4>"+
                "</a></li>";
        }
        var lv = $("#jylvall");
        lv = lv.html(htmlCode);
        lv.listview("refresh"); // very important

        function clickHandler() {
            localStorage.setItem("id", $(this).attr('data-row-id'));
            $(location).prop('href', '#jyEditFeedbackPage');
        }

        $("#jylvall a").on("click", clickHandler);

    }
    review.jyselectAllcontact(options, callback);
}
function jyshowCurrentContact()
{

    var id = localStorage.getItem("id");

    var options = [id];

    function callback(tx, results) {

        var row = results.rows[0];
        var typeID = row['typeId'];
        $("#jytxtNameEdit").val(row['businessName']);

        var options = [];
        function callback(tx, results) {
            var htmlCode = "";
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += "<option value="+row['id']+ ">" + row['name']+
                    "</option>";
            }
            var dl = $("#jytypeEdit");
            dl=dl.html(htmlCode).val(typeID).change();
        }

        type.jyselectAll(options, callback);

        $("#jyReviewEdit").val(row['description']);
        $("#jytxtFullNameEdit").val(row['name']);
        $("#jyPhoneNumberEdit").val(row['phone']);
        $("#jytxtEmailEdit").val(row['reviewerEmail']);
        $("#jytxtAddressEdit").val(row['address']);
        $("#jytxtCompanyHomePageEdit").val(row['homepage']);

    }

    review.jyselect(options, callback);
}
//

//
function jyupdateContact()
{
       var id = localStorage.getItem("id");


        var businessName = $("#jytxtNameEdit").val();
        console.info(businessName);
        var typeId = $("#jytypeEdit").val();

        localStorage.setItem("date-row-id",typeId);

        var description = $("#jyReviewEdit").val();
        var name = $("#jytxtFullNameEdit").val();
        var phone = $("#jyPhoneNumberEdit").val();

        var reviewerEmail = $("#jytxtEmailEdit").val();
        var address =$("#jytxtAddressEdit").val();
        var homepage =$("#jytxtCompanyHomePageEdit").val();

        var options = [businessName,typeId,description,name,phone,reviewerEmail,address,homepage,id];

        function callback() {
            console.info("Success: Record update successfully");
        }
        review.jyupdate(options, callback);
        window,location.href='#jyreviewConatactPage';


}
function jydeleteContact()
{
    var id = localStorage.getItem("id");
    var options = [id];
    function callback(){
        $(location).prop('href', '#jyreviewConatactPage');
    }
    review.jydelte(options,callback());
}