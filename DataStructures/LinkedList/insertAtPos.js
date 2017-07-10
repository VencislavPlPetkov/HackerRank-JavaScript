
function insert(head, data, position) {

	var newNode = new Node(data);

	var temp = head;

	var counter = 0;

	if (head == null) {
		head = newNode;
        return head;
	}
	if (position == 0) {
		newNode.next = head;
		head = newNode;
        return head;
	}

	while (counter < position - 1) {
        if(temp.next != null){
		temp = temp.next;
		counter++;
        }
	}
	newNode.next = temp.next;
	temp.next = newNode;
	

	return head;

}