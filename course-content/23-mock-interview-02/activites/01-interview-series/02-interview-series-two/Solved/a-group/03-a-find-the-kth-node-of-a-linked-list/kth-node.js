// Using pseudoclassical instantiation for Node constructor function
function Node(val){
    this.value = val;
    this.next = null;
  }
  
  // Using pseudoclassical instantiation for LinkedList constructor function
  function LinkedList(){
    //each list will have a head node
    this.head = null;
    //each list will have a tail node - the caboose in our train
    this.tail = null;
  }

  // Add a node at the very end of the linked list
  LinkedList.prototype.append = function(val){
    // use insert method to insert a new node after the tail node
    //the insert method will instantiate a new node object with the value
    this.insert(val, this.tail);
  }
  
  // Insert a node 
  // If prevNode is undefined or null, then assume insert in the front of linked list
  LinkedList.prototype.insert = function(val, prevNode){
    //create a new node with the value passed
    var node = new Node(val);
    
    if(!prevNode){ // if there was no value passed as an argument to the prevNode parameter
      if(!this.head){   //if head is null
        this.tail = node; //set the tail to be the new node
      } else { //if head is not null then...
        node.next = this.head; //set the new node's 'next' field to be set to the heads next which which was null or pointed to another object
      }
      this.head = node; // if the head was null then set the head node to be the new node // this is true if we are prepending - creating a node to replace head (passing no prevNode)
      //yep - the head and the tail of the LL will both be pointing to the same object - it's only lonly node. 
    } else { //if there was a value passed as an argument to the prevNode parameter
      node.next = prevNode.next; //the new node's field of 'next' will be now set to the prevNode's 'next' value
      prevNode.next = node; //now set the previous Node's 'next' field to be set to the new node
      // if insert into end of list, then update tail node
      if(this.tail === prevNode){ // if the prev Node was the last Node (same exact object) then set the LL's tail to be the new Node
        this.tail = node;
      }
    }
  }
  
  
  // SOLUTIONS

  LinkedList.prototype.findKth = function(k){
      if(!this.head)
        return "No nodes in the list"

      //instantiate variables of current and count that refer to our current "indexed" node (in this case, we start at 1)
      var current = this.head;
      var count = 1;

      //while there is a 'next' node, keep moving forward in the linked list until we reach the kth node
      while(current.next){
          
          current = current.next;
          count++;
          if(count === k)
            return current
      }
      return "Number of nodes less than k"
  }


  LinkedList.prototype.findKthToTheLast = function(k){
    if(!this.head)
      return "No nodes in the list"
    
    //Instantiate variables for the highEnd, count, an lowEnd of the linked list
    var highEnd = this.head;
    var count = 1;
    var lowEnd = this.head;

    // while there is a next node, move the highEnd pointer up the linked list until we get to the kth index
    while(highEnd.next){
        
        highEnd = highEnd.next;
        count++;
        if(count === k)
            break;    
    }
    // if the current kth index is the end of the linked list, return a relevant error message
    if(!highEnd.next)
        return "Number of nodes less than k"

    // while there exists a next node for highEnd, we can move both pointers through the linked list until we reach the end. Since the lowEnd node is starting at the head and the highEnd is starting at k, the lowEnd will reach the 'kth from the last' node by the end of the while loop.
    while(highEnd.next){
        highEnd= highEnd.next;
        lowEnd= lowEnd.next;
    }
    return lowEnd;
}
  
  //Test cases
  var list = new LinkedList();
  list.append(20);
  list.append(30);
  list.append(40);
  list.append(50);
  list.append(60);
  list.append(70);
  list.append(80);
  list.append(90);
  list.append(100);
  list.append(110);
  list.append(120);
  list.append(130);

  console.log(list.findKth(5))
  console.log(list.findKthToTheLast(5))



  // Alternative O(n)

// LinkedList.prototype.findKthToTheLast = function(k) {
//     // if no nodes in the list return undefined
//     if (!this.head) {
//         return undefined;
//     }
//     // get the length of the list
//     var listLength = 0;
//     for (let node = this.head; node.next; ++listLength) {
//         node = node.next, 
//     }
//     // get the offset into the list which is kth from last
//     let indexOfKthFromLast = listLength - k;
//     // if indexOfKthFromLast is before the first element then return first element
//     if (indexOfKthFromLast < 0) {
//         return this.head;
//     }
//     // find the nth from end element at offset
//     let nodeAtKthFromLast = this.head;
//     for (let i = 0; i < indexOfKthFromLast; ++i) {
//         nodeAtKthFromLast = nodeAtKthFromLast.next
//     }
//     return nodeAtKthFromLast;
// }

  
  
  