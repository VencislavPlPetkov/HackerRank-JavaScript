function processData(input) {
    //Enter your code here
    
    var data = [ [ 1, 1, 1, 0, 0, 0 ],
              [ 0, 1, 0, 0, 0, 0 ],
              [ 1, 1, 1, 0, 0, 0 ],
              [ 0, 9, 2, -4, -4, 0 ],
              [ 0, 0, 0, -2, 0, 0 ],
              [ 0, 0, -1, -2, -4, 0 ] ];
    var max = false;
    var sum = 0;
    
    // // convert line to 2D Array of strings
    // for (var i = 0; i < 6; ++i) {
    //     data[i] = input.split("\n")[i].trim().split(" ");
    // }
    
    // // convert 2D Array of strings to 2D Array of numbers
    // for (var i = 0; i < 6; ++i) {
    //     for (var j = 0; j < 6; ++j) {
    //         data[i][j] = parseInt(data[i][j]);
    //     }
    // }
    

    // Just travese small squares with size 3x3 and get only the values that we need 
    // for the shape of hourglass
    for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            sum = data[i][j] + data[i][j + 1] + data[i][j + 2] + data[i + 1][j + 1] 
            + data[i + 2][j] + data[i + 2][j + 1] + data[i +2][j + 2];
            
            if (max === false || max < sum) {
                max = sum;
            }
        }
    }
    
    console.log(max);
} 

processData();


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });