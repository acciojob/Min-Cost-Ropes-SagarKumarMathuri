//function mincost(arr)
//{ 
//write your code here
	function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Sort initially
    arr.sort((a, b) => a - b);

    let cost = 0;

    while (arr.length > 1) {
        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // Insert sum back into sorted array
        // Using binary insertion for efficiency
        let i = 0;
        while (i < arr.length && arr[i] < sum) {
            i++;
        }
        arr.splice(i, 0, sum);
    }
    return cost;
}

// return the min cost
  
//}

module.exports=mincost;
