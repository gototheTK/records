# Postgre_SQL_DataBase

---

---

<br/>

---

<br/>

## How to make database

<br/>

### 1.How to log in postgre sql database: psql --username=user_name dbname=db_name

### 2.How to connect to a database: \c table_name

### 3.How to view all databases: \l

### 4.How to view a list of relations: \d

### 5.How to view details of a table: \d table_name

### 6.In Postgre_SQL_DataBase, a SQL command must end with a semicolon(';').

---

<br/>

## How to make table:

<br/>

### 1.CREATE TABLE table_name();

### 2.CREATE TABLE table_name(column_name DATATYPE);

<br/>

---

<br/>

## How to Add Column:

<br/>

### ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;

### ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINTS REFERENCES referenced_table_name(referenced_column_name);

<br/>

---

<br/>

## How to Rename Column:

<br/>

### ALTER TABLE table_name RENAME COLUMN column_name TO new_name;

<br/>

---

<br/>

## How to Drop Constraint:

<br/>

### ALTER TABLE table_name DROP CONSTRAINT constraint_name;

<br/>

---

<br/>

## Data Types:

<br/>

### VARCHAR(\_): It has a string of characters with a max length specified in the parenthesizes.

### NUMERIC(\_, \_): It has a decimal number. In parenthesizes, the first place holder indicates the left digits, and the second does digits on the right of the decimal.

### DATE: It’s a string with a format like “yyyy-mm-dd.”

### NULL: It can be inserted by simply not including the null columns.

<br/>

---

<br/>

## KEYS

<br/>

### PRIMARY KEY:

### It’s a column that uniquely identifies each row in the table.

### It should set a primary key and be only one per table.

<br/>

### How to add:

### ALTER TABLE table_name ADD PRIMARY KEY(column_name);

### FOREIGN KEY:

### How to use:

### ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES;

### referenced_table_name(referenced_column_name);

### It’s used to relate rows from a table to rows from another table.

### LOGICAL KEY:

### What the “outside world” uses for lookup. The key should always be separate, and there should be a primary key. Cause things like logical keys do change.

<br/>

---

<br/>

## CONSTRAINTS ABOUT TABLE

<br/>

### UNIQUE:

### How to use:

### ALTER TABLE table_name ADD UNIQUE(column_name);

### It can be used to make a one-to-one relationship.

### NOT NULL

<br/>

### How to use:

### ALTER TABLE table_name ALTER COLUMN TYPE SET NOT NULL;

### It makes a column not have blank data.
