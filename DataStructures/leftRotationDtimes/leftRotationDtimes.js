function processData(input) {
    /*
    var lines = input.split('\n');
    var line = lines[0];

    var n = line.split(' ')[0];
    var d = line.split(' ')[1];
    var arr = lines[1].split(' ').map(Number);
    */

    input = input.split('\n');
    var i,
        n = input[0].split(' ')[0],
        d = input[0].split(' ')[1],
        arr = input[1].split(' ').map(Number),
        left = arr.slice(0, d),
        right = arr.slice(d);
   
    /*
    var arr=[12,3,9,0,22,77];
    var left = arr.slice(0, 3);//[ 12, 3, 9 ]
    var right = arr.slice(3);//[ 0, 22, 77 ]
    */
    
    var result = right.length > 0 ? (right.join(' ') + ' '): '';
    result += left.length > 0 ? left.join(' ') : '';
    
    console.log(result);

} 




process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
