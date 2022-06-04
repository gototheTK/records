# Linked List

---

---

<br>

---

## Linked List

### A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node.

### add method: Add an element to the linked list, our length property should be incremented by one. Or if our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a Node class, and we assign that node to the head of our linked list.

### removed method: This method should take the element we want to remove as an argument, and then search the list to find and remove the node that contains that element. If we're removing the middle element, say, we'll want to make sure that we have a connection from that element's previous node's next property to the middle element's next property (which is the next node in the list!). If the element we wish to remove is the head element, we reassign the head to the second node of the linked list.

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
