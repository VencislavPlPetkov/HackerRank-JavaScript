/*
Print all  integers in Arr in reverse order as a single line of space-separated integers.

Sample Input

4
1 4 3 2
Sample Output

2 3 4 1
*/

function main() {
    // var n = parseInt(readLine());
    // arr = readLine().split(' ');
    // arr = arr.map(Number);

    //var arr = [1,2,3,4];

    var revArr = []; 
   
    for(var i = arr.length - 1;i >= 0;i--){
        revArr.push(arr[i]);
    }
    
    var str = revArr.toString();
    
    var strRepl = str.replace(/,/g," ");
    
    console.log(strRepl);
}

//main();