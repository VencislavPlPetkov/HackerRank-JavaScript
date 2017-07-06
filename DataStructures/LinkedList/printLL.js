/* Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}
*/
// This is a "method-only" submission.
// You only need to complete this method.

function print(head) {
    
  let current = head;
		    
	while(current !== null){
		
		console.log(current.data);
		current = current.next;
	}
	
    
}
