# BasicWeb

---

---

<br/>

---

<br/>

## What is a web?

<br/>

### Internet Communication Network through HTTP protocol.

<br/>

---

<br/>

### What is HTTP, and What are the features?

<br/>

### HTTP is HyperText Transfer Protocol. It’s communication through TCP/IP. Its server cannot distinguish clients. So it uses information like sessions and cookies to determine clients. After that, it’s disconnected.

<br/>

### More specifically, In HTTP, the Server transfers HTML documents, and the Client’s browsers interpret its HTML documents.

<br/>

### Clients find out domains through URL(Uniform Resource Location) or URI(Uniform Resource Identifier).

<br/>

---

<br/>

## WEB SERVICE

<br/>

### Wire Format: It’s a format to make communications among different programming languages on the Internet.

<br/>

### - XML(Extensible Markup Language)

<br/>

#### It’s used to help computers exchange data using hierarchically structured information.

<br/>

#### It has only one text content and ignores space.

<br/>

#### A parent node can have a self-closing tag if there is no Text Content.

<br/>

### - XML Schema

<br/>

#### It’s a contract to determine if an accepted XML document meets the specification.

<br/>

#### It’s common to use XSD(W3C Schema)

<br/>

#### It consists of terms of constraints on the structure and content of XML documents like below:

<br/>

```
<?xml version=”1.0” encoding=”utf-8”?>
<xs:complexType name=”person>
<xs:sequence>
<xs:element name=”lasaname” tpye=”xs:string/>
<xs:element minOccurs=”1” name=”age” tpye=”xs:integer/>
<xs:element name=”dateborn” tpye=”xs:date/>
<xs:element maxOccurs=”2” name=”Contry”/>
<xs:element name=”startdate” type=”xs:dateTime”/>(ISO 8601 Date/Time
Format yyyy-mm-ddThh:mm:ssZ / 2002-05-30T09:30:10Z
Z means Timezone - typically specified in UTC/GMT rather than local time zone.)
<xs:element base=”xs:string/>
<xs:enumeration value=”FR” />
<xs:enumeration value=”UK” />
</xs:sequence>
<xs:complexType>
```

<br/>

---

<br/>

## JSON

<br/>

### It’s a wire format organizing data with curly braces as nested lists or dictionaries.

<br/>

---

<br/>

## API(Application Program Interface)

<br/>

### It stands for Application Program Interface. It follows Service Oriented Architecture that allows an application to be broken into parts and distributed across a network because a person can make everything of an application.

<br/>

### Web Services provide infrastructure for applications cooperating(an API) over a network. There are two styles of web services. (SOAP and REST)

<br/>

### It uses serialization formats like XML and JSON.

<br/>

### It’s limited to the number of requests per day. It’s not free. And It usually demands “API KEY.”

<br/>

---

<br/>

## Object’s four features

<br/>

### - abstraction

### They can be defined as templates. And it can be instanced through contractors. It can have a destructor.

<br/>

### - encapsulation

### Objects hide detail.

<br/>

### - inheritance

### Objects can inherit an existing object. So It can use methods or attributes of the inherited object.

<br/>

### - polymorphism

### A particular instance of a class has its state.

<br/>

---

<br/>

## JWT = JSON WEB TOKEN

<br>

### 세션이란?
클라이언트와의 연결 상태 정보, 일종의 명부

<br/>

## 쿠키란?
클라이언트와의 연결 식별 정보, 일종의 식별증

<br>

#### 쿠키와 세션의 특징 1
사용자의 인증 및 민감한 정보 접근시 식별하여 적절히 응답해줄 수 있다.

<br>

#### 쿠키와 세션의 특징 2
세션은 서버에서 지우거나, 사용자가 브라우저를 종료할때 또는, 특정시간이 경과하면 사라진다.

<br>

#### 세션의 특징 3
세션은 메모리에 저장되기대문에, 사용자가 많으면 많을수록 메모리자원을 많이 소비한다.

<br/>

#### TCP(Transmission Control Protocol)
프랜스포트계층에 있는 연결지향형 프로토콜이다. 3 Hand-way Shaking으로 연결상태를 만들어놓고 데이터를 주고받는다. 데이터를 주고 받을때 확인하므로 신뢰성이있다고한다.

<br/>

#### 보안의 조건(기밀성, 무결성, 가용성)
1. Confidential
2. Integrity
3. Availability

<br>

### RSA 암호화
공개키와 개인키로 이루어진 대칭키를 사용한 암호화방법. 수신자의 공개키로 암호화를하고, 송신자의 개인키로 인증을 한다. 데이터를 수신자의 공개키로 암호화를하고, 다시 데이터를 송신자의 개인키로 전자서명을 위해 암호화한다.

<br>

#### RFC
WWW의 프로토콜 문서


```

```
