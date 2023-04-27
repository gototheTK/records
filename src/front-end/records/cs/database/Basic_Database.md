# Basic DataBase

---

---

<br/>

---

## 데이터베이스란?

<br/>

### 데이터란?

관측된 결과를 기호로 표현한것.

<br/>

### 데이터베이스란?

최소한의 중복으로 저장된 통합, 공유, 운영하기 위한 특정한 데이터들의 모음.

<br/>

### DBMS(Database Management System)

데이터베이스를 생성하고 관리하는 프로그램으로, 질의 해석기와 데이터 접근기로 이루어져 있습니다.

<br/>

### 카탈로그(catalog)

데이터베이스에 대한 정의, 제약조건, 구조, 인덱스등의 정보를 담고있는 메타데이터의 모음입니다.

<br/>

### 데이터베이스 시스템(Database System)

클라이언트 어플리케이션 + DBMS + 카탈로그 + 데이터베이스

<br/>

<br/>

---

<br/>

### 속성

테이블의 열에 해당하는 데이터들의 집합입니다.

<br/>

### 튜플

테이블의 행에 해당하는 데이터들의 순서가 없는 집합입니다.

<br/>

### 릴레이션 스키마

테이블의 가장 첫행에 적혀있는 자료구조를 릴레이션의 스키마라고 합니다.

<br>

### 릴레이션

어트리뷰트, 튜플, 스키마를 합쳐서 릴레이션 또는 테이블이라고 지칭합니다.

<br>

### 무결성 제약조건

<br>

#### 엔티티 무결성 제약조건

기본키는 NULL 값이 될 수 없는것을 엔티티 무결성 제약조건이라고 합니다.

<br>

#### 키 무결성 제약조건

서로 다른 튜플은 동일한 키를 가질 수 없다는 것을 키 무결성 제약조건이라고 합니다.

<br>

#### NOT NULL 무결성 제약조건

튜플을 구성하는데 필수적인 속성이 NULL이면 안 되는 것을 NOT NULL 무결성 제약조건이라고 합니다.

<br>

#### 도메인 무결성 제약조건

속성은 원자적이어야 하며 허용되지 않는 값이 존재해서는 안되는 것을 도메인 무결성 제약 조건이라고 합니다.

<br>

#### 의미적 무결성 제약조건

의미적으로 허용되지 않는 값이 존재해서는 안 되는 것을 의미적 무결성 제약조건이라고 합니다.

<br>

#### 참조 무결성 제약조건

외래키의 속성은 기본키의 속성과 동일한 도메인을 가져야 한다는 것을 참조 무결성 제약조건이라고 합니다.


<br/>

---

<br/>

## DBMS(Database Management System)

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

### 1. you make a data model, ask yourself the questions below

<br/>

### - Is the column an object or an attribute of another object?

<br/>

### 2. Once we define objects, we need to define the relationships between objects.

<br/>

### 3. So Do not replicate data - reference data - point at data.

<br/>

### 4. Use integers for a primary key and for a foreign key. By convention, the primary key is called “id.”

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

### Many-to-Many: It’s a relationship that one more row in the table points to one more row in another table. It’s made by adding a connection table with two foreign keys. "Many-to-many" relationships usually use a junction table to link two tables together, forming two "one-to-many" relationships.

<br/>

### One-To-One: One row in a table is related to one row in another table.

<br/>

### One-To-Many: One row in a table is related to many rows in another table.

<br/>

---

<br/>
