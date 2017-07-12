/*
    Print elements of a linked list in reverse order as standard output
    head pointer could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
 */

// This is a "method-only" submission.
// You only need to complete this method.
function reversePrint(head) {

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

	while (rev != null) {
		console.log(rev.data);
		rev = rev.next;
	}

	// return head;

}