/**
 * File Name: jyfeedbackDAL.js
 *
 * Revision History:
 *       jianliang yan, 2021-03-03 : Created
 */
var review = {
    jycontactinsert: function(options, callback){

        function txFunction(tx)
        {
            var sql = "INSERT INTO contacts(businessName, typeId, description, name, phone, reviewerEmail, address, homepage,username) VALUES(?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Insert contact transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    jyupdate: function(options, callback)
    {
        function txFunction(tx)
        {
            var sql = "UPDATE contacts SET businessName=?, typeId=?, description=?,name=?,phone=?,reviewerEmail=?,address=?,homepage=?,username=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Update transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    jydelte: function(options, callback){
        function txFunction(tx) {
            var sql = "DELETE FROM contacts WHERE id=?;";

            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    jyselect: function(options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM contacts WHERE id=?;";

            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    jyselectAllcontact: function(options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM contacts;";

            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: SelectAll transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
var type ={
    jyselectAll: function(options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM type;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select All types transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

}
//----- function for login table database

var user ={

    jyuserinsert: function(options, callback)
    {

        function txFunction(tx)
        {
            var sql = "INSERT INTO user(username, userEmail, password) VALUES(?,?,?);";

            // step 3: execute query on tx object
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction()
        {
            console.info("Success: Insert user transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },


}