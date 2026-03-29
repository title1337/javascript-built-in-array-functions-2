function isPalindrome(string) {
  return string.trim() === string.trim().spilt("").reverse().join("")
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false