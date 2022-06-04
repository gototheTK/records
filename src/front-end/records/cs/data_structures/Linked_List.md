# Linked List

---

---

<br>

---

## Linked List

### A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node.

```

function LinkedList() {
  let length = 0;
  let head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  this.head = () => head;

  this.size = () => length;

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    // Only change code below this line
    if (head.element === element) {
      head = head.next;
      return length--;
    }
    let previous = head;
    while (previous) {
      let current = previous.next;
      if (current) { // makes sure we are not at end where current.next would be null
        if (current.element === element) {
          previous.next = current.next;
          return length--;
        }
      }
      previous = current;
    }
    // Only change code above this line
  };

}

```
