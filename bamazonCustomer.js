const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "crIx1d4c",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryInventory();
});

function queryInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].dept_name + " | " + res[i].price + " | " + res[i].stock_qty);
        }
        console.log("-----------------------------------");

    });
}

function userPrompt() {
    inquirer.prompt([

        {
            type: "input",
            name: "inputID",
            message: "Which location or landmark would you like to geocode?"
        },
        {
        	type: "input",
            name: "inputQTY",
            message: "Which location or landmark would you like to geocode?"
        },

    ]).then()
}