/**
 * File Name: jyglobal.js
 *
 * Revision History:
 *       jianliang yan, 2021-03-03 : Created
 */
function btnShow_click() {
    console.info("start show location!");
   getPosition();
}

function  jybtnClear_click()
{
    clearTable();
}

function jybtnSveUser_click()
{
    jyaddUser();
};
function jybtnUpdate_click()
{
    jyupdateContact();
    var email = localStorage.getItem("Defaultemail");
    $("#jytxtEmailEdit").val(email);
    // jyUpdateValidation();


}
function jypageshow()
{
    jygetAllContact();
}
function jybtnCurrentReview_click()
{
    jyshowCurrentContact();
}
function jybtnDelete_click()
{
    jydeleteContact();
}
function jybtnDefault_click()
{
    var defaultEmail=
    $("#jysetEmail").val();

    localStorage.setItem("Defaultemail",defaultEmail);
}
function jypageshowEvent(){
    var email = localStorage.getItem("Defaultemail");

    $("#jytxtEmailAdd").val(email);
    jyupdateTypesDropdown();
}
function jybtnSignUp_click()
{
  window.location.href='#JysignUpPage';
}
function jybtnSignIn_Click()
{
    validationcheck();
}
function jybtnSignOut_Click()
{
    window.location.href='#jyloginPage';
}
function jybtnSignOutMainPage_click()
{
    window.location.href='#jyloginPage';
}
function jybtnSaveContatc_click()
{
    jyaddContact(); // add one company contaction information into list

}
function jyinit()
{

    JyintiDB();
    // $("#btnShowMap").on("click",btnShowMap_click);
    $("#btnShow").on("click", btnShow_click);
    $("#jybtnSignUp").on("click",jybtnSignUp_click)// sign up button
    $("#jybtnSveUser").on("click",jybtnSveUser_click) // after filling out the sign up form, save button
    $("#jybtnSignIn").on("click",jybtnSignIn_Click)  // login in button
    $("#jybtnSignOut").on("click",jybtnSignOut_Click) // sign out button
    $("#jybtnSaveContatc").on("click",jybtnSaveContatc_click)// add company contact information
    $("#jybtnSignOutMainPage").on("click",jybtnSignOutMainPage_click)
    $("#jybtnUpdate").on("click",jybtnUpdate_click);
    $("#jybtnDefault").on("click",jybtnDefault_click)
    $("#jybtnClear").on("click",jybtnClear_click);
     $("#jyAddContactPage").on("pageshow", jypageshowEvent);// show the add contact page
    $("#jyreviewConatactPage").on("pageshow",jypageshow);
    $("#jyEditFeedbackPage").on("pageshow",jybtnCurrentReview_click);
     $("#jybtnDelete").on("click",jybtnDelete_click);
    // $("#jybtnUpdate").on("click",jybtnUpdate_click())
}
function  JyintiDB() {
    try {

        DB.createDatabase();
        if (db) {
            console.info("Creating tables ...");
            DB.createTables();
        } else {
            console.error("Error: Cannot create tables: database does not exist!");
        }
    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). can not proceed");
    }

}



$(document).ready(function () {
    jyinit();

});

///




