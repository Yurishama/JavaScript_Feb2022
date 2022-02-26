/*
function isAnagram(str1,str2){
    return formatStr(str1) === formatStr(str2);
}

//Function ayuda
function formatStr(str){
    return str
        .toLowerCase()
        .replace(/[^/w]/g,'')
        .split('')
        .sort()
        .join('');
}
*/

/*
const reverseString = str =>
  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = reverseString;
*/


function isAnagram (palabra1, palabra2) {
    palabra1 = palabra1.toLowerCase().replace(/[\W_]+/g, "");
    palabra2 = palabra2.toLowerCase().replace(/[\W_]+/g, "");
    // sorting
    const stringASorted = palabra1.split("").sort().join("");
    const stringBSorted = palabra2.split("").sort().join("");
    return stringASorted === stringBSorted;
}


module.exports = isAnagram();