export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const index = nums.indexOf(n);
  if(index < 0){
    return null;
  }
  /*
    Lest you forget that index starts at 0, but length at 1
  */
  else if(index === (nums.length-1)){
    return null;
  }
  else {
    return nums[index+1];
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  /*
    It's an array of "1s" and "0s", so binArr.
  */
  const binArr = str.split("");
  const oneArr = binArr.filter((digit) => digit === "1");
  const zeroArr = binArr.filter((digit) => digit === "0");

  /*
    How does this work? It's declared as constant, but it changes.
  */
  const outputObj = {};
  outputObj['1'] = oneArr.length;
  outputObj['0'] = zeroArr.length;
  return outputObj;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const charArr = String(n).split("");
  const invStr = charArr.reverse().join("");
  return Number(invStr.replace(/^0+/,""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  /*
    Wow! Worked first time!
  */
  return sumTotalArr(arrs);
};

export const totalNumArr = (numArr) => {
  if(numArr.length === 0) {
    return 0;
  }
  else {
    const [firstNum, ...otherNums] = numArr;
    return firstNum + totalNumArr(otherNums);
  }
}

const sumTotalArr = (numArrArr) => {
  if(numArrArr.length === 0) {
    return 0;
  }
  else {
    const [firstArr, ...otherArrs] = numArrArr;
    return totalNumArr(firstArr) + sumTotalArr(otherArrs);
  }
}

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length < 2) {
    return arr;
  }
  else {
    const firstElement = arr[0];
    const lastIndex = arr.length-1;
    const lastElement = arr[lastIndex];
    const remainingElements = arr.slice(1,lastIndex);
    remainingElements.push(firstElement);
    remainingElements.unshift(lastElement);
    return remainingElements;
  }
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  /*
    When in doubt, use a regular expression.
  */
  const termPattern = new RegExp(searchTerm,"gi");
  const keyArr = Object.keys(haystack);
  const findings = keyArr.filter((key) => {
    /*
      You are only interested in string values, but it might
      not be a string. You could test for string instead.
    */
    const currentValue = String(haystack[key]);
    /*
      Avoid return statements with the right test.
    */
    return currentValue.match(termPattern) !== null;
  })
  return findings.length > 0;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const freqAccumulatorObj = {};
  const allWords = str.split(/\s+/);
  allWords.forEach((word) => {
    /*
      Normalize word form, before creating matcher or key name.
    */
    const canonicalWord = word.toLowerCase().replace(/\W+$/,"");
    console.log("Matching: "+canonicalWord);
    if(!(canonicalWord in freqAccumulatorObj)) {
      /*
        You can look for punctuation explicitly if you use
        Unicode classes. That requires an extra regex flag.
      */
      const wordPattern = new RegExp(canonicalWord+"\\p{P}?","igu");
      const wordMatches = str.match(wordPattern);
      if(wordMatches !== null){
        freqAccumulatorObj[canonicalWord] = wordMatches.length;
      }
    }});
  return freqAccumulatorObj;
};
