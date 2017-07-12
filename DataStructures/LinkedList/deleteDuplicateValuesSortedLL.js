function removeDuplicates(head) {

	if (head == null) {
		return head;
	}

	var current = head;

	while (current != null) {

		var temp = current;

		while ((current.next != null) && (current.next.data == temp.data)) {

			current.next = current.next.next;
		}

		current = current.next;

	}

	return head;
}
