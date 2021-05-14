// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  // console.log(s.length);
  if (s.length < 0) {
    return 0;
  }

  let map = {};
  let start = 0;
  let maxLen = 0;
  let arr = s.split('');

  for (i = 0; i < s.length; i++) {
    let current = map[arr[i]];
    console.log(map);
    if (start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    map[arr[i]] = i;
  }
  console.log(maxLen);
  return maxLen;
};

lengthOfLongestSubstring('abcabcbb');
