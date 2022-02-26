const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"testEjemplo"', () => {
    expect(isAnagram('cinema', 'aceimn')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    console.log(isAnagram('Hello', 'Aueyoqiuodha'))
    expect(isAnagram('Hello', 'AlAueyoqiuodhaa')).toBeFalsy();
});

