export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => (num**2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const componentWords = words.map((word,pos) => (
    (pos === 0) ? word : word[0].toUpperCase() + word.substring(1)
  ));
  return componentWords.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if(people.length === 0){
    return 0;
  }
  else {
    const head = people[0];
    const tail = people.slice(1);
    /*  Why can't you split a list with a spread operator? E.g.
          peopleArr == [head, ...tail];
        Is that just too sloppy?
    */
    return head.subjects.length + getTotalSubjects(tail);
  }
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if(menu.length === 0){
    return false;
  }
  else{
    if(menu[0].ingredients.includes(ingredient)){
      return true;
    }
    else {
      return checkIngredients(menu.slice(1), ingredient);
    }
  }
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  if (arr2.length > arr1.length) {
    /*
      Try to recurse on the shorter array.
    */
    return duplicateNumbers(arr2, arr1);
  }
  else {
    /*
      Sort once at the end, not inside the recursion.
    */
    return myFindDuplicateNumsR(arr1, arr2).sort();
  }
}

function myFindDuplicateNumsR(arr1, arr2) {
  if( arr1.length === 0){
    return [];
  }
  else {
    let duplicatesInTail = duplicateNumbers(arr1.slice(1),arr2);
    let currentNumber = arr1[0];
    if(duplicatesInTail.includes(currentNumber)) {
      /* empty */
    }
    else if(arr2.includes(currentNumber)){
      duplicatesInTail.push(currentNumber);
    }
    /*
      An else clause would be repetitive.
    */
   return duplicatesInTail;
  }
}
