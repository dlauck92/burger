create database burgers_db;

use burgers_db;

create table burgers(
	id INTEGER(40) AUTO_INCREMENT NOT NULL,
    burger_name varchar(1000),
    devoured BOOLEAN NOT NULL,
    primary key(id)
);

