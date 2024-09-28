SHOW DATABASES;
 //to show all the databases present in the system 
USE <database_name> 
// to select the particular database to run querries on 

SHOW TABLES;
// to show down all the tables of a perticular selected database

CREATE DATABASE <name>;
// to create a new database

CREATE TABLE <name> (
    <column name 1> [data_type],
    <column name 2> [data_type],
    .
    .
    .
);
// to create a new table 

DESC <table_name>;
// show the structure and description of the table

INSERT INTO <table_name>(col1, col2, ...) VALUES (<val1>, <val2>...);
// for inserting the values in the table

SELECT <column name> FROM <table_name>
// to get a specific column data from the table.
// use * in place of the column to get all the columns. 

("Anshu", DEFAULT, "Female"),("Hitanya", DEFAULT, "Female"),("Jyoti", DEFAULT, "Female"),("Sonal", DEFAULT, "Female")

SELECT * FROM <table name> WHERE {Condition...}

Condition - conparision of column data with your values.  

Example - Select * from second where DoB > '2000-03-01' AND Gender = 'Female';
select * from second where not gender = "Male";
select * from second order by Name desc;
 select * from second where Gender = 'Female' order by Name Desc limit
 4; 

 DELETE from <table name> where {comparision} order by ..

 update <table_name> set <column> = value where {condition};
  
alter table <table name> change <old column name> <new column name> [new constraints]

alter table <table name> add <column name> [parameters];

 