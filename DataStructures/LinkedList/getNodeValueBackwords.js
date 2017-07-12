/*
Find the node at the given position counting backwards from the tail. Then return the
data contained in this node.

Sample Input

1 -> 3 -> 5 -> 6 -> NULL, positionFromTail = 0
1 -> 3 -> 5 -> 6 -> NULL, positionFromTail = 2
Sample Output

6
3
 */




if (head == null) {
	return head;
}

var current = head;

var prevNode = null;
var nextNode = null;

while (current != null) {

	nextNode = current.next;
	current.next = prevNode;
	prevNode = current;
	current = nextNode;
}

head = prevNode;

var rev = head;

var counter = 0;

while (counter != position) {
	counter++;
	rev = rev.next;
}

return rev.data;
