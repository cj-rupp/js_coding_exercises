export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => num < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => word.match(/^to\s+/));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((number) => Number.isInteger(number));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const rawSqrts =  nums.map((number) => Math.sqrt(number));
  /* 
    sqrt returns long decimals, but you want them rounded to 2
    decimal place.
  */
  return rawSqrts.map((raw) =>Number(raw.toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  /* This is ingenious, but it would be simpler to incorporate a constant
    in a regex.
  */
  /*
    The test should be case insensitive, so reduce everything to
    lower case.
  */
  const testSentences = sentences.map((sent) => sent.toLowerCase());
  const testStr = str.toLowerCase();

  /*
    You want to return the original sentence, so collect the indexes
    of the matches and then look up the indexes in the original input.

    Recurse on the lowercase sentences, using a counter to track the
    overall position in the original array.
  */
  const sentIdxs = getMatchIdsR(testSentences,testStr,0);
  return sentIdxs.map((pos) => sentences[pos]);
}

function getMatchIdsR(sents,str,idx) {
  if(sents.length === 0){
    return [];
  }
  else {
    const [currentSent, ...remainingSents] = sents;
    /*
      To increment the positional counter, you can't use an increment
      operator, because it is used again below.
    */
    const newIdx = idx + 1;
    const idxsInTail = getMatchIdsR(remainingSents,str,newIdx);
    if(currentSent.includes(str)){
      return [idx, ...idxsInTail];
    }
    else {
      return idxsInTail;
    }
  }
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map((triangle) => getMaxR(triangle));
}

function getMaxR(numArr) {
  if(numArr.length == 0){
    return 0;
  }
  const [currentNum, ...laterNums] = numArr;
  const currentMax = getMaxR(laterNums);
  if(currentNum > currentMax) {
    return currentNum;
  }
  else{
    return currentMax;
  }
}
