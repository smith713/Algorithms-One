function swap(arr, pos1, pos2) {
  var temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
};

function heapsPermutations(arr, output, n) {
  n = n || arr.length; 
  if (n === 1) {
    output(arr);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermutations(arr, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(arr, j - 1, n - 1); 
    }
  }
};


// For testing:
var print = function(input){
  console.log(input);
}

console.log('Set: {1, 2, 3}');
console.log('Number of possible combonations: 3! = 6');
heapsPermutations([1, 2, 3], print);

console.log('Set: {\'a\', \'b\', \'c\', \'d\'}');
console.log('Number of possible combonations: 4! = 24');
heapsPermutations(['a', 'b', 'c', 'd'], print);

console.log('Set: {\'corn\', \'turkey\', \'winter\', \'algebra\', \'window\' }');
console.log('Number of possible combonations: 5! = 120');
heapsPermutations(['corn', 'turkey', 'winter', 'algebra', 'window'], print);
