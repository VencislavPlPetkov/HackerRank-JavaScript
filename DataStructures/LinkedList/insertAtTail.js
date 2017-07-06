/*
 Node is defined as
 var Node = function(data) {
 this.data = data;
 this.next = null;
 }
 */

// This is a "method-only" submission.
// You only need to complete this method.


function insert(head, data) {

	const newNode = new Node(data);

	if (head === null)
		return newNode;

	var current = head;

	while (current.next) {

		current = current.next;

	}

	current.next = newNode;

	return head;

}
