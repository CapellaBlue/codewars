function longestConsec(strarr, k) {
  if (strarr.length === 0 || strarr.length < k || k <= 0) {
    return '';
  } else {
    var result = '';
    var n = strarr.length;
    for (var i = 0; i < n-k+1; i++) {
      var temp = '';
      for (var j = 0; j < k; j++) {
        temp += strarr[i+j];
      }
      if (result.length < temp.length) {
        result = temp;
      }
    }
  return result;
  }
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
