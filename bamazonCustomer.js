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
    console.log("-----------------------------------");
    
});

function queryInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].dept_name + " | " + "$" + res[i].price + " | " + res[i].stock_qty + " in stock");
        }
        console.log("-----------------------------------");
        userPrompt();

    });
}

function userPrompt() {
    inquirer.prompt([

        {
            type: "input",
            name: "inputID",
            message: "Enter the product ID of the product you would like to buy. \n"
        },
        {
            type: "input",
            name: "inputQTY",
            message: "How many would you like to purchase?"
        },

    ]).then(function(answers) {
        var chosenItem = answers.inputID;
        var chosenQTY = answers.inputQTY;

        connection.query("SELECT * FROM products WHERE ?", {
                item_id: answers.inputID
            },
            function(err, res) {
                var currentStock = parseInt(res[0].stock_qty);
                var chosenPrice = parseInt(res[0].price);

                if (chosenQTY <= currentStock) {
                    console.log("We can fulfill that order! \n");

                    connection.query("UPDATE products SET ? WHERE ?", 
                    	[
                    		{
                                stock_qty: (currentStock - chosenQTY)
                            },
                            {
                                item_id: answers.inputID
                            }
                        ],
                        function(err, res) {
                            console.log("Transaction Completed!\n\nYour total comes out to: $" + (chosenQTY * chosenPrice) + "\n\nThank you for shopping with b'Amazon.")

                        });
                }
                else {
                    console.log("We currently don't have that many in stock.")
                }

            });

    });


};