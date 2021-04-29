/**
 * File Name: jydatabase.js
 *
 * Revision History:
 *       jianliang yan, 2021-03-03 : Created
 */
//global database reference
var db;
function errorHandler(error) {
    console.error("SQL Error: " + error.message);
}

var DB = {
    createDatabase: function () {
        //create data base
        var shortName = "FinalProject";
        var version = "1.0";
        var displayName = "DB for Final app";
        var dbSize = 2 * 1024 * 1024;
        function dbCreate() {

            console.info("database created!");
        }

        db = openDatabase(shortName, version, displayName, dbSize,dbCreate);

    },
    createTables: function () {
        // step 2: define the callback functions
        function txFunction(tx) {

            var sql = "DROP TABLE IF EXISTS type;";
             var options = [];
            tx.executeSql(sql, options, successCallback, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS type( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
              // options = [];
            tx.executeSql(sql, options, successCallback, errorHandler);

             sql ="INSERT INTO type(name) VALUES('Canada');";
            tx.executeSql(sql, options, successCallback, errorHandler);

            sql ="INSERT INTO type(name) VALUES('Asian');";
            tx.executeSql(sql, options, successCallback, errorHandler);

            sql ="INSERT INTO type(name) VALUES('Other');";
            tx.executeSql(sql, options, successCallback, errorHandler);

           // create review table //
             options =[];
             sql ="CREATE TABLE IF NOT EXISTS contacts( " +
                 "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                 "businessName VARCHAR(30) NOT NULL," +
                 "typeId INTEGER ," +
                 "description TEXT," +
                 "name VARCHAR(30)," +
                 "phone INTEGER," +
                 "reviewerEmail VARCHAR(60)," +
                 "address VARCHAR(60)," +
                 "homepage VARCHAR(60)," +
                 "username VARCHAR(20)," +
                 "FOREIGN KEY(typeId) REFERENCES type(id));";


            tx.executeSql(sql, options, successCallback, errorHandler);


            //---create user table start----//

             // sql = "DROP TABLE IF EXISTS user;"; // create a table
             // tx.executeSql(sql, options, successCallback, errorHandler);
             options = [];
            sql ="CREATE TABLE IF NOT EXISTS user( " +
                "userid INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "username VARCHAR(30) NOT NULL," +
                "userEmail VARCHAR(30) NOT NULL," +
                "password VARCHAR(30) NOT NULL);";
            tx.executeSql(sql, options, successCallback, errorHandler);
            // sql ="INSERT INTO user(username,userEmail,password) VALUES('hello','hello@gmail.com','world');";
            // tx.executeSql(sql, options, successCallback, errorHandler);


            //---create user table end----//

            function successCallback() {
                console.info("Success: sql  successful");
            }
        }

        function successTransaction() {
            console.info("Success: create table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);


    },

    dropTables: function () {
        // step 2: define the callback functions
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS contacts;";

            var options = [];

            function successCallback() {
                console.info("Success: table dropped successful");
            }
            // step 3: execute query on tx object
            tx.executeSql(sql, options, successCallback, errorHandler);
             sql = "DROP TABLE IF EXISTS type;";
             options = [];
            tx.executeSql(sql, options, successCallback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: drop table transaction successful");
        }

        // step 1: start transaction on db
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};