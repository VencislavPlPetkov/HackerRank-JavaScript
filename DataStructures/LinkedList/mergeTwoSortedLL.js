var result = new Node();

if (headA === null) {
	return headB;
} else if (headB === null) {
	return headA;
}
var result = new Node();

if (headA.data <= headB.data) {
	result.data = headA.data;
	result.next = mergeLinkedLists(headA.next, headB);
} else {
	result.data = headB.data;
	result.next = mergeLinkedLists(headA, headB.next);
}

return result;