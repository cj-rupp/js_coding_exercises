// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.substring(1); 
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const newPrice = originalPrice * (1 + (vatRate/100));
  if(Number.isInteger(newPrice)){
    return newPrice;
  }
  else{
    return parseFloat(newPrice.toFixed(2));
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const newPrice = originalPrice * (1 - (reduction/100));
  if(Number.isInteger(newPrice)){
    return newPrice;
  }
  else{
    return parseFloat(newPrice.toFixed(2));
  }
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const strLen = str.length;
  const roughMiddle = strLen/2;
  console.warn(roughMiddle);
  if((strLen % 2) === 0) {
    return str[roughMiddle-1] + str[roughMiddle];
  }
  else {
    const result = str[Math.trunc(roughMiddle)];
    return result;
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  const letters = word.split("");
  let rWord = "";
  letters.forEach(letter => {
    rWord = letter + rWord;
  });
  return rWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
