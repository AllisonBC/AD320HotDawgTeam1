## Test the DB with dummy data

USE hotdog;

DELETE FROM vendor;
ALTER TABLE vendor AUTO_INCREMENT = 0;

INSERT INTO vendor(firstName, lastName, phoneNum, email)
VALUES
	("Jason","Vorhees","206-444-5555","LoveMyMummy@gmail.com"),
    ("Michael","Myers","999-999-9999","RevengeoftheBabySat@gmail.com"),
    ("Freddie","Krueger","565-676-8899","DreamWarrior@outlook.com");
    
SELECT * FROM vendor;

INSERT INTO carts(vendorID, cartName, cartLat, cartLon)
VALUES
	(1,"CampCart",2.33,3.22),
    (2,"FamilyReunion",4.44,5.55),
    (3,"InYourDreams",6.00,7.00);
    
SELECT * FROM Carts;
SELECT firstName, lastName, cartName
FROM carts JOIN vendor USING (vendorID);

INSERT INTO extratoppings(title, addedCost)
VALUES ("ketchup",0.00),("mustard",0.00),("relish",0.50),("onions",1.00);
SELECT * FROM extratoppings;

INSERT INTO hotdogs(title,price)
VALUES ("classic",5.00),("New York Style",7.00),("Seattle Style",7.50);
SELECT * FROM hotdogs;

## example menu for cart 1
INSERT INTO menuitems(cartID, dogID)
VALUES (1,1),(1,2),(1,3);
SELECT cartName, title, price, available
FROM carts
	JOIN menuitems USING (cartID)
    JOIN hotdogs USING (dogID);

## Users can save their email for faster checkout/receipts, ideally
INSERT INTO users(firstName, email)
VALUES
	("savedUser", "saved@user.com"),
    ("guestUser", NULL),
    ("ThirdUser", "third@user.com");
SELECT * FROM users;

DELETE FROM orders;
ALTER TABLE orders AUTO_INCREMENT = 0;
## SavedUser will place an order at CampCart for one classic and two New York
INSERT INTO orders(userID, cartID, menuItemID, quantity, orderPlaced)
VALUES
	(1, 1, 1, 1, NOW() ),
    (1, 1, 2, 2, NOW() );

SELECT * FROM orders;

## guestUser wants a classic add ketchup and mustard
INSERT INTO orders(userID, cartID, menuItemID, quantity, orderPlaced)
VALUES (2, 2, 1, 1, NOW() );

INSERT INTO order_add_toppings (orderID, toppingID)
VALUES (3,1),(3,2);


## Third User wants a gluten free vegan classic
INSERT INTO orders(userID, cartID, menuItemID, glutenFree, Vegan, quantity, orderPlaced)
VALUES (3, 1, 1, 1, 1, 1, NOW());

SELECT * FROM extratoppings;
INSERT INTO orders
VALUES (5, 2, 2, 1, 1, 0, 0, NOW(), DEFAULT, DEFAULT);
INSERT INTO order_add_toppings (orderID, toppingID)
VALUES (5,4),(5,3);

SELECT * FROM orderFeed;
