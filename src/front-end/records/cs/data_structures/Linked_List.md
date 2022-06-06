# Linked List

---

---

<br>

---

## Linked List

### A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node.

### add method: Add an element to the linked list, our length property should be incremented by one. Or if our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a Node class, and we assign that node to the head of our linked list.

### removed method: This method should take the element we want to remove as an argument, and then search the list to find and remove the node that contains that element. If we're removing the middle element, say, we'll want to make sure that we have a connection from that element's previous node's next property to the middle element's next property (which is the next node in the list!). If the element we wish to remove is the head element, we reassign the head to the second node of the linked list.

### elementAt method: This takes an index as an argument and returns the element at the given index. If no element is found, return undefined.

### indexOf method: This takes an element as an argument, and returns that element's index in the linked list. If the element is not found in the linked list, return -1.

### isEmpty method: This could tell if the linked list was empty or not,

### removeAt method: This removes the element at a given index. The method should be called removeAt(index). To remove an element at a certain index, we'll need to keep a running count of each node as we move along the linked list.

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


    // Only change code below this line

    this.isEmpty = function(){
      return head === null ? true : false;
    }

    this.indexOf = function(element) {


      var currentNode = head;
      let currentIndex = 0;


      while(currentNode){


        if(currentNode.element === element){
          return currentIndex;
        }

        currentNode = currentNode.next;
        currentIndex++;

      }


      return -1 ;

    }


    this.removeAt = function(index) {

      if (index < 0 || index >= length) {
        return null;
      }

      let deletedNode = head;
      if (index == 0) {
        head = head.next;
      } else {
        let currentNode  = head;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
        }
        deletedNode      = currentNode.next;
        currentNode.next = deletedNode.next;
      }

      length--;
      return deletedNode.element;
    }

}

```
