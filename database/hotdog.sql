DROP DATABASE IF EXISTS hotdog;
CREATE DATABASE IF NOT EXISTS hotdog;
USE hotdog;

CREATE TABLE vendor (
	vendorID int NOT NULL auto_increment,
    firstName varchar(20) NOT NULL,
    lastName varchar(20) NOT NULL,
    phoneNum varchar(12) DEFAULT NULL,         ## AAA-BBB-CCCC
    email varchar(40) DEFAULT NULL,
    ##PasswordHash blob DEFAULT NULL,    TODO: Look into hashing passwords
    CONSTRAINT vendorPK PRIMARY KEY(vendorID),
    UNIQUE KEY email (email)
);

/*
DB should be able to have vendors unassigned to carts--new hires
And carts without (ie NULL) vendors--carts that need a new vendor assigned
*/

CREATE TABLE carts (
	cartID int NOT NULL auto_increment,
    vendorID int DEFAULT NULL,
    cartName varchar(30) NOT NULL,
    cartLat float,
    cartLon float,
    CONSTRAINT cartPK PRIMARY KEY(cartID),
    CONSTRAINT fk_vendor_cart FOREIGN KEY(vendorID) REFERENCES vendor(vendorID)
		ON UPDATE CASCADE      ## if a vendor is let go (deleted) set that cart's vendor to null
        ON DELETE SET NULL
);

CREATE TABLE hotDogs (
	dogID int NOT NULL AUTO_INCREMENT,
    price float NOT NULL,
    title varchar(30) NOT NULL,
    descript blob DEFAULT NULL,
    CONSTRAINT hotDogsPK PRIMARY KEY (dogID)
);

CREATE TABLE menuItems (
	itemID int NOT NULL AUTO_INCREMENT,
    cartID int DEFAULT NULL,
    dogID int NOT NULL,
    available bool DEFAULT true,
    CONSTRAINT menuPK PRIMARY KEY (itemID),
    CONSTRAINT fk_cart_menu FOREIGN KEY (cartID) REFERENCES carts(cartID)
		ON UPDATE CASCADE   ## if a cart is deleted, delete all of its menu items
        ON DELETE CASCADE,
	CONSTRAINT fk_dog_item FOREIGN KEY (dogID) REFERENCES hotDogs(dogID)
		ON UPDATE CASCADE   ## if a hot dog is no longer offered (deleted) delete all of its listings in menus
        ON DELETE CASCADE
);

CREATE TABLE users (
	userID int NOT NULL AUTO_INCREMENT,
    firstName varchar(20) DEFAULT NULL,
    email varchar(40) DEFAULT NULL,
    ##passwordHash blob DEFAULT NULL,     TODO: See vendors
    CONSTRAINT userPK PRIMARY KEY(userID),
    UNIQUE KEY email (email)
);

CREATE TABLE orders (
	orderID int NOT NULL auto_increment,
    userID int,
    cartID int,
    menuItemID int,
    quantity int DEFAULT 1,
    glutenFree bool DEFAULT false,    ## if true add $1.00
    vegan bool DEFAULT false,         ## if true add $1.00
    orderPlaced timestamp,
    orderPaid bool DEFAULT false,
    orderCompleted timestamp DEFAULT NULL,
    CONSTRAINT ordersPK PRIMARY KEY (orderID),
    CONSTRAINT fk_user_makes_order FOREIGN KEY (userID) REFERENCES users(userID)
		ON UPDATE CASCADE          ## If a user is removed from the system keep the order information
        ON DELETE SET NULL,
	CONSTRAINT fk_order_at_cart FOREIGN KEY (cartID) REFERENCES carts(cartID)
		ON UPDATE CASCADE           ## if a cart is deleted keep order information
        ON DELETE SET NULL,
	CONSTRAINT fk_order_is_menuItem FOREIGN KEY (menuItemID) REFERENCES menuItems(itemID)
		ON UPDATE CASCADE          ## if a menu item is deleted keep order information
        ON DELETE SET NULL
);

CREATE TABLE extraToppings (
	toppingID int NOT NULL auto_increment,
    title varchar(30) NOT NULL,
    addedCost float NOT NULL,
    CONSTRAINT extraToppingsPK PRIMARY KEY (toppingID)
);

CREATE TABLE order_add_toppings (
	orderID int NOT NULL,
    toppingID int NOT NULL,
    CONSTRAINT addToppingPK PRIMARY KEY (orderID, toppingID),
    CONSTRAINT fk_order_this FOREIGN KEY (orderID) REFERENCES orders(orderID)
		ON UPDATE CASCADE         ## If an order is deleted delete all of the requests for extra toppings
        ON DELETE CASCADE,
	CONSTRAINT fk_extraTop_this FOREIGN KEY (toppingID) REFERENCES extraToppings(toppingID)
		ON UPDATE CASCADE         ## If an extra topping is removed from the db throw error/roll back. Dump orders to log first
        ON DELETE NO ACTION					## Ideally orders will be dumped into a log before a topping is removed
);





















