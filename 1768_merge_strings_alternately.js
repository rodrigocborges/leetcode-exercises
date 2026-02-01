/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let retorno = '';
    //abc pqr = a p b q c r
    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; ++i){
            retorno += word1[i] + word2[i];
        }
    }
    else if(word2.length > word1.length){
        //ab pqrs -> a p b q r s
        let lastIndex = 0;
        for(let i = 0; i < word2.length; ++i){
            if(!word1[i]){
                lastIndex = i;
                break;
            }
            retorno += word1[i] + word2[i];
        }

        retorno += word2.substring(lastIndex, word2.length); //não inclui o ultimo
    }
    else if(word1.length > word2.length){
        //abcd pq -> a p b q c d

        let lastIndex = 0;
        for(let i = 0; i < word1.length; ++i){
            if(!word2[i]){
                lastIndex = i;
                break;
            }
            retorno += word1[i] + word2[i];
        }

        retorno += word1.substring(lastIndex, word1.length);
    }

    return retorno;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));