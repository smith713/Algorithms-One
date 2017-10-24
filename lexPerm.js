const lexPermutations = (input) => {
  let result = [];

  const permutations = (arr, memo = []) => {
    if (arr.length === 0) {
      result.push(memo)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let current = arr.slice();
        let next = current.splice(i, 1);
        permutations(current.slice(), memo.concat(next))
     }
   }
 }

 permutations(input);
 
 return result;
}

console.log('Set: {1, 2, 3}');
console.log('Number of possible combonations: 3! = 6');
console.log((lexPermutations([1, 2, 3])));

console.log('Set: {\'a\', \'b\', \'c\', \'d\'}');
console.log('Number of possible combonations: 4! = 24');
console.log((lexPermutations(['a', 'b', 'c', 'd'])));

console.log('Set: {\'corn\', \'turkey\', \'winter\', \'algebra\', \'window\' }');
console.log('Number of possible combonations: 5! = 120');
console.log((lexPermutations(['corn', 'turkey', 'winter', 'algebra', 'window'])));
