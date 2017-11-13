DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT(10) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  dept_name VARCHAR(30) NOT NULL,
  price INT(10),
  stock_qty INT(10)
  );

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (1, "Katana", "Self Defense", 350, 5);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (2, "Book", "Self-Improvement", 10, 100);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (3, "Computer", "Electronics", 800, 25);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (4, "Chair", "Furniture", 50, 20);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (5, "Pillow", "Furniture", 15, 50);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (6, "Dog", "Mental Wellness", 200, 5);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (7, "Cat", "Research", 180, 6);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (8, "Shirt", "Clothing", 10, 700);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (9, "Vodka", "Liquor", 18, 500);

INSERT INTO products (item_id, product_name,dept_name, price, stock_qty)
VALUES (10, "Set of Marbles", "Choking Hazards", 5, 100);