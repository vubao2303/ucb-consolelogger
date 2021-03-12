=begin
1. Create a function that takes an array and generates an array which
   is a running sum using Ruby.
   [1,2,3,4] => [1,3,6,10]

Here is the code in JavaScript that you can use as a template for your Ruby code:

function runningSum(arr) {
    let s = [arr[0]];
    for (let i = 1; i < arr.length; ++i) {
        s[i] = s[i-1] + arr[i];        
        # s[1] = s[0] + array[1]; s[1]=1+2 s[1]=3
    }
    return s;
}
console.log(`${runningSum([1,2,3,4])}`);
=end


=begin
2. Create a function that takes an array "array" and generates a count of good pairs
   where a good pair is (x,y) and array[x] is equal to array[y] and x < y.

Here is the code in JavaScript that you can use as a template for your Ruby code:

function goodPair(array) {
    let count = 0;
    for (let x = 0; x < array.length; ++x) {
        for (let y = x + 1; y < array.length; ++y) {
            if (array[x] === array[y]) {
                ++count;
            }
        }
    }
    return count;
}
console.log(`${goodPair([2,2,2,2])}`);
=end
