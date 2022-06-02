# Basic DataBase

---

---

<br/>

---

## Why use Relational DataBase?

<br/>

### By removing the replicated data and replacing it with references to a single copy of each bit of data, we build a web of information that the relational database can read through very quickly - even for very large amounts of data. Often when you want some data, it comes from a number of tables by these foreign keys.

<br/>

---

<br/>

## Design a Relational Database

<br/>

### Database design is the act of figuring out what your application is going to want to store and spreading that across multiple tables.

<br/>

---

<br/>

## Design a Relational Database:

<br/>

### Use normalizing the data and linking it with integer keys. So the overall amounts of data which the relational database must scan is far lower than if the data were simply flattened out. And space of the database is not wasted.

<br/>

### Basic Rule: When you build a data model, don’t put the same string data in twice - use a relationship instead. When there is one thing in the “real world,” there should be one copy of that thing in the database. So, the idea is to pull duplicate data out.

<br/>

### you make a data model, ask yourself the questions below

### Is the column an object or an attribute of another object?

### Once we define objects, we need to define the relationships between objects.

### So Do not replicate data - reference data - point at data.

### Use integers for a primary key and for a foreign key. By convention, the primary key is called “id.”

<br/>

---

<br/>

## The JOIN Operation:

<br/>

### The JOIN operation is used to reconstruct data by pulling out data from tables in a relational database.

<br/>

### The JOIN operation links several tables as part of a special operation. You must tell the JOIN how to use the keys that make the connection between the tables using an ON clause. There is usually no separate primary key. It uses a primary key in combination with foreign keys

<br/>

---

<br/>

## Relationships

<br/>

### Many-to-Many: It’s a relationship that one more row in the table points to one more row in another table. It’s made by adding a connection table with two foreign keys.

<br/>

### One-To-One: One row in a table is related to one row in another table.

<br/>

### One-To-Many: One row in a table is related to many rows in another table.

<br/>

---

<br/>
