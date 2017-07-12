var curA = headA;
var curB = headB;

while (curA != null && curB != null) {

	if (curA.data != curB.data) {
		return 0;
	}

	curA = curA.next;
	curB = curB.next;

}

if (curA == null && curB == null) {
	return 1;
} else {
	return 0;
}
