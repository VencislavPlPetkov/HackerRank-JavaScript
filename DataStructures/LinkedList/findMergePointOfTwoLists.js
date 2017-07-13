function findMergeNode(headA, headB) {
	if (headA == null || headB == null)
		return null;
	var currentA = headA;
	var currentB = headB;
	while (currentA != currentB) {
		if (currentA.next)
			currentA = currentA.next;
		else
			currentA = headB;

		if (currentB.next)
			currentB = currentB.next;
		else
			currentB = headA;
	}
	return currentA.data;

}
