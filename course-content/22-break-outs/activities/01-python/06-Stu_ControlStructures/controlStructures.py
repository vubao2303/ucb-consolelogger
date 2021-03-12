"""
1. Write a function using Python the determines if word a is an
anagram of string b (contains all the same letters
but in a different order.)

Here is the code in JavaScript that you can use as a template for your Python code:

function anagram(a,b) {
    if (a.length !== b.length) {
        return false;
    }
    var obj = {}; // create an object    
    // add all letters in a to obj object and their count
    for (letter of a) {
        obj[letter] = letter in obj ? obj[letter] + 1 : 1;
    }
    for (letter of b) {
        obj[letter] = letter in obj ? obj[letter] - 1 : -1;
    }
    for (key in obj) {
        if (obj[key] !== 0) {
            return false;
        }
    }
    return true;
}

anagram("fried","fired") => True

"""


"""
2. Write a function that calculates the maximum product of two elements
   of an array.
   maxProduct([1,2,3,4]) => 12

Here is the code in JavaScript that you can use as a template for your Python code:

function maxProduct(t) {
    if (t.length < 2) {
        return undefined;
    }
    max = t[0] * t[1];
    for (let i = 0; i < t.length; ++i) {
        for (let j = i+1; j < t.length; ++j) {
            let cur = t[i] * t[j];
            if (cur > max) {
                max = cur;
            }
        }
    }
    return max;
}

"""
print(maxProduct([1,2,3,4]) == 12)
print(anagram("fried","fired") == True)

