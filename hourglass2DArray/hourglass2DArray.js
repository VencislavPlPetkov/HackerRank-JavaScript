function main() {
    // var arr = [];
    // for(arr_i = 0; arr_i < 6; arr_i++){
    //    arr[arr_i] = readLine().split(' ');
    //    arr[arr_i] = arr[arr_i].map(Number);
    // }

	var arr = [ [ 1, 1, 1, 0, 0, 0 ],
	          [ 0, 1, 0, 0, 0, 0 ],
	          [ 1, 1, 1, 0, 0, 0 ],
	          [ 0, 9, 2, -4, -4, 0 ],
	          [ 0, 0, 0, -2, 0, 0 ],
	          [ 0, 0, -1, -2, -4, 0 ] ];



	var offset = 2;//hourglass width

	var maxHourglass = -63;// initialize to lowest possible sum (-9 x 7)


	function hourglass (row, col){
		
		var tmp = 0;// current hourglass sum
		
		// sum top 3 and bottom 3 elements
		for (var int = col; int < col + offset; int++) {
			
			tmp+=arr[row][int];//Values from upper row of hourglass
			tmp+=arr[row + offset][int];//Values from lowest row of hourglass
			
		}
		
		tmp+=arr[row+1][col+1];// Value from the middle of the hourglass
		
		if(maxHourglass < tmp){
			maxHourglass = tmp;
		}
	}


	for (let row = 0; row < arr.length - offset; row++) {
		for (let col = 0; col < arr[row].length - offset; col++) {
			
			hourglass(row,col);
			
		}
	}



	console.log(maxHourglass);

}

main();