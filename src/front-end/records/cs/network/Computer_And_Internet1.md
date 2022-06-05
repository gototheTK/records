# Computer And Internet1

---

---

<br>

---

<br>

# The Internet

<br>

## The Internet

<br>

### The Internet is an open network of WAN(Wide Area Network) Types.

<br/>

### The Internet needs physical connections(Wire or Wireless) and protocols like rules to interchange data.

<br/>

### The Protocols the Internet needs are Wires & wireless(for converting electromagnetic signals into binary data), IP((for uniquely identifying and a routing strategy), TCP/UDP(for transporting packets and checking errors), and TLS(for encrypting data), HTTP & DNS(For World Wide Web browsers use).

<br/>

---

<br/>

## Computer Network

<br/>

### Network is a group of more than 2 computing devices.

<br/>

### The ways of building a network are ring, mesh, star, bus, and tree topologies

<br/>

### Types of networks are LAN(Local Area Network), WAN(Wide Area Network), and DCN(Data Center Network).

<br/>

### Whenever computing devices are connected in a network, they need protocols to communicate with each other. The Internet needs Internet networking protocols.

<br/>

## Physical network connections

<br>

### There are typically 3 ways for a network connection. These are Twisted pair copper cables, Fiber-optic cables, and Wireless. They are commonly used together.

<br>

### Twisted pair copper cables are a wire technology using electricity. It follows the Ethernet standards and is used in both LAN and WAN. In issues, It has susceptible to interference problems.

<br>

### Fiber-optic cables are a technology carrying light pulses. It also typically follows Ethernet standards and is fast than copper cables. It is used in both oceans and cities. But it is still expensive as it becomes less.

<br>

### Wireless is a technology using radio pulses. A wireless card inside the computer turns binary data into radio waves and transmits them through the air. Those radio waves can’t travel very far and are affected by obstacles. Thus, the communication way is slow.

<br>

---

<br>

## Bit rate, bandwidth, and latency

<br/>

### Bit rate: When a computer sends data to another computer, is uses pulse periods(on puls, nothing). For example, if it sends 5(101), it sends first sending an on pulse, then sending nothing(and waiting), then sending an on pulse. When it comes to measurement of its speed, we use bit rate, the number of bits of data that are sent each second.

<br>

### Bandwidth: The maximum bit rate of a system.

<br>

### Latency: It's the time between the sending of a data message and the receiving of that message, measured in milliseconds. Typically, the "round-trip" latency of a request is used. There's a major limiting factor to latency: physical connection(electricity or light), congestion(waiting).

<br/>

### Internet Speed: Speed is a combination of bandwidth and latency. Computers split up messages into packets, and they can't send another message until the first packet is received. Even if a computer is on a connection with high bandwidth, its speed of sending and receiving messages will still be limited by the latency of the connection.

<br>

---

<br/>

<br>

## IP packets

<br/>

### there's a limit to how large a message can be, since there's a limit to how much data can be reasonably transmitted at once by the physical network connections between devices. That's why many networking protocols split each message into multiple small packets.

<br>

<img src="https://cdn.kastatic.org/ka-perseus-images/337190cba133e19ee9d8b5878453f915971a59cd.svg" width="700">

<br>

### The Internet Protocol (IP) describes the structure of the packets that whizz around the Internet. Each IP packet contains both a header (20 or 24 bytes long) and data (variable length). The header includes the IP addresses of the source and destination, plus other fields that help to route the packet. The data is the actual content, such as a string of letters or part of a webpage.

<br>

---

<br>

## IP Address

<br>

### Internet Protocol: It's one of the core protocols in the layers of the Internet to handle both addressing and routing. It describes how to split messages into multiple IP packets and route packets to their destination by hopping from router to router.

<br>

### IPv4 addresses: It's the first version ever used on the Internet. Each IP address is split into 4 numbers, and each of those numbers can range from 0 to 255: [0 - 255].[0 - 255].[0 - 255].[0 - 255]

<br>

### IPv6: It's a backwards-compatible successor for addressing more than 2 to the 32 devices. There are 8 hexadecimal numbers, and each number is 4 digits long. The highest value for each number is FFFF.

<br>

### IPv4 address hierarchy: Both IPv4 and IPv6 addresses are hierarchical. For simplicity, The first sequence of bits identifies the network and the final bits identify the individual node in the network. Typically, the first two octets (161616 bits) identifies a network administered by the Comcast (an Internet Service Provider). The last two octets (the final 161616 bits) identifies a home computer on that Comcast network. The Internet Protocol uses this hierarchical addressing scheme to make it easier to route messages from source to destination. Once a message arrives at the network, a network router can take care of sending it to the individual node.

<br>

### Subnets: It's a concept for breaking IP addresses into further subnetworks as needed.Adding further levels to the address hierarchy can improve the efficiency of routing within the network.

<br/>

### For Example:

<br/>

```
141.213      ,  213	               ,    13
UMich network,	Medicine department,	Lab computer
```

<br>

---

<br/>

## Redundancy and fault tolerance

<br/>

### What happens if a network path is no longer available, like due to a natural disaster physically destroying it or a cybercriminal hijacking it? Is the packet doomed to never reach its destination?

<br/>

### Fortunately, there are often many possible paths a packet can go down to reach the same destination. The availability of multiple paths increases the redundancy of a network. The redundancy of the paths in the network increases the number of possible ways that a packet can reach its destination.

<br/>

### A fault-tolerant system is one that can experience failure (or multiple failures) in its components, but still continue operating properly.

<br>

---

<br/>

## Data Transport Protocol

<br>

### IP does not handle all the consequences of packets. For example, when a computer might send multiple messages to a destination, the destination needs to identify which packets belong to which message. And, due to some accidents, Packets can arrive out of order, be corrupted, lost, and duplicated. So It’s the data transport protocol on top of IP to deal with these problems. There are two types of the data transport protocol. They are Transmission Control Protocol(TCP) and User Datagram Protocol(UDP). TCP is more reliable than UDP but slower.

<br>

---

<br/>
 
## User Datagram Protocol
 
<br/>

### UDP is simple and fast, at least in comparison to other protocols that work over IP. It only detects the corrupted data using a checksum, but it does not attempt to solve other problems that arise with packets, such as lost or out-of-order packets. So it does not ensure reliable transmission of packets. It’s often used for time-sensitive applications where speed is more important than accuracy.

<br/>

### When sending packets using UDP over IP, the data portion of each IP packet(Opens in a new window) is formatted as a UDP segment.

<br>

### Its packet format:

<br/>

| 2 bytes(16 bits)   | 2 bytes(16 bits)        |
| ------------------ | ----------------------- |
| source port number | destination port number |
| segment length     | Checksum                |
| Data               |                         |

### checksum: binary data

<br>

### how to detect a corrupted data using a checksum

<br>

### Before sending off the segment, the sender:

<br>

### 1. Computes the checksum based on the data in the segment.

    - First,Encode data into binary data.
    - Next, Segment the binary data into 2-byte binary numbers
    - Add up the 16-bit binary numbers.

### 2. Stores the computed checksum in the field.

<br>

### Upon receiving the segment, the recipient:

<br>

### 1. Computes the checksum based on the received segment.

    - First,Encode data into binary data.
    - Next, Segment the binary data into 2-byte binary numbers
    - Add up the 16-bit binary numbers.

### 2. Compares the checksums to each other. If the checksums aren't equal, it knows the data was corrupted. Then, discard the packet.

<br>

---

<br/>

## TCP(Transport Control Protocol)

<br/>

### TCP is a transport protocol that is used on top of IP to ensure reliable transmission of packets. It includes mechanisms to solve many of the problems that arise from packet-based messaging, such as lost packets, out of order packets, duplicate packets, and corrupted packets. it handles “flow control” using a transmit window. it provides a nice reliable pipe.

<br>

### Assumes IP might lose some data - stores and retransmits data if it seems to be lost.

<br>

### Its packet format:

<br/>

<img src="https://cdn.kastatic.org/ka-perseus-images/e5fdf560fdb40a1c0b3c3ce96f570e5f00fff161.svg" width="700">

<br>

### Each TCP segment contains a header and data. The TCP header contains many more fields than the UDP header and can range in size from 20 to 60 bytes, depending on the size of the options field. The TCP header shares some fields with the UDP header: source port number, destination port number, and checksum.

<br/>

## From start to finish

<br/>

## Step 1: Establish connection

<br/>

### When two computers want to send data to each other over TCP, they first need to establish a connection using a three-way handshake.

<br/>

### The first computer sends a packet with the SYN bit set to 111 (SYN = "synchronize?"). The second computer sends back a packet with the ACK bit set to 111 (ACK = "acknowledge!") plus the SYN bit set to 111. The first computer replies back with an ACK. In fact, the three packets involved in the three-way handshake do not typically include any data.

<br/>

<br/>

## Step 2: Send packets of data

<br/>

### When a packet of data is sent over TCP, the recipient must always acknowledge what they received. The first computer sends a packet with data and a sequence number. The second computer acknowledges it by setting the ACK bit and increasing the acknowledgement number by the length of the received data. Those two numbers help the computers to keep track of which data was successfully received, which data was lost, and which data was accidentally sent twice.

<br/>

## Step 3: Close the connection

<br/>

### Either computer can close the connection when they no longer want to send or receive data. A computer initiates closing the connection by sending a packet with the FIN bit set to 1 (FIN = finish). The other computer replies with an ACK and another FIN. After one more ACK from the initiating computer, the connection is closed.

<br/>

## Detecting lost packets

<br/>

### After sending off a packet, the sender starts a timer and puts the packet in a retransmission queue. If the timer runs out and the sender has not yet received an ACK from the recipient, it sends the packet again.

<br/>

## Handling out of order packets

<br>

### TCP connections can detect out of order packets by using the sequence and acknowledgement numbers.When the recipient sees a higher sequence number than what they have acknowledged so far, they know that they are missing at least one packet in between. The recipient lets the sender know there's something amiss by sending a packet with an acknowledgement number set to the expected sequence number.

<br>

### In TCP connections, a recipient can use the sequence numbers to reassemble the packet data in the correct order.

<br>

---

<br/>

## TCP Port Numbers

<br>

### A port is an application-specific or process-specific software communications endpoint.

<br>

### It allows multiple networked applications to coexist on the same server.

<br>

### There is a list of well-known TCP port numbers.

<br>

    - Telnet(23) - Login
    - SSH(22) - Secure Login
    - HTTP(80)
    - HTTPS(443) - Secure
    - SMTP(25)(Mail)
    - IMAP(143/220/993) - Mail Retrieval
    - POP(109/110) - Mail Retrieval
    - DNS(53) - Domain Name
    - FTP(21) -File Transfer

<br/>

---

<br/>

## Socket

<br>

### A socket is an endpoint of bidirectional inter-process communication flow across an Internet Protocol-based computer network. And an identifier to identify a process on the specific computer in specific computer networking based on TCP. For example, 123.123.123:80 and so on.
