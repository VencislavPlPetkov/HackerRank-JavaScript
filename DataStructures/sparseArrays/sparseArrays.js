function processData(input) {
    var strings = []; 
    var queries = [];
    for(var i=1; i<=input.split('\n')[0]; i++){ 
        strings.push(input.split('\n')[i]);
    }
    for(var i= parseFloat(input.split('\n')[0]) + 2; i<input.split('\n').length; i++){
       queries.push(input.split('\n')[i]);
    }
    for(var i=0; i<queries.length; i++) {
    var query = queries[i];
    var matches = 0;

        for(var j = 0; j < strings.length; j++) {
            if(query === strings[j]) matches++;
        }
        console.log(matches);
    }
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