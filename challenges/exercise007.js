/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  const digitArr = String(n).split("");
  return sumDigitArr(digitArr);
};

const sumDigitArr = (digitArr) => {
  if(digitArr.length === 0) {
    return 0;
  }
  else {
    const [currentDigit, ...laterDigits] = digitArr;
    return Number(currentDigit) + sumDigitArr(laterDigits);
  }
}
/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) {
    step = 1;
  }
  const newRange = [];
  for(let i=start; i<=end; i+=step){
    newRange.push(i);
  }
  return newRange;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const userNameArr = [];
  users.forEach((user) => {
    const screenRecord = user.screenTime;
    const sessionData = screenRecord.filter((session) => session.date === date);
    if(sessionData.length > 0) {
      const currentSession = sessionData[0];
      const usageObj = currentSession.usage;
      const apps = Object.keys(usageObj);
      let totalScreenTime = 0;
      apps.forEach((app) => {
        totalScreenTime += Number(usageObj[app]);
      })
      if(totalScreenTime > 100){
        userNameArr.push(user.username);
      }
    }
  });
  return userNameArr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  
  const hexExtTable = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }

  const hexCharArr = hexStr.slice(1).split("");
  const decimalRawArr = hexCharArr.map((char) => (Number.isNaN(parseInt(char))? hexExtTable[char] : char));

  const decimalPairArr = [];
  const redHxStr = decimalRawArr.slice(0,2);
  decimalPairArr.push(redHxStr);
  const grnHxStr = decimalRawArr.slice(2,4);
  decimalPairArr.push(grnHxStr);
  const bluHxStr = decimalRawArr.slice(4,6);
  decimalPairArr.push(bluHxStr);

  const decimalNumArr = decimalPairArr.map((pair) => (parseInt(pair[0]) * 16) + parseInt(pair[1]));

  return "rgb("+decimalNumArr[0]+","+decimalNumArr[1]+","+decimalNumArr[2]+")";

};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");
  /*
    OK. So, this is brute force, but I'm running out of time.
  */
  const linesArr = board.slice();
  const column1 = [];
  column1.push(board[0][0]);
  column1.push(board[1][0]);
  column1.push(board[2][0]);
  linesArr.push(column1);
  const column2 = [];
  column2.push(board[0][1]);
  column2.push(board[1][1]);
  column2.push(board[2][1]);
  linesArr.push(column2);
  const column3 = [];
  column3.push(board[0][2]);
  column3.push(board[1][2]);
  column3.push(board[2][2]);
  linesArr.push(column3);
  const diagonal1 = [];
  diagonal1.push(board[0][0]);
  diagonal1.push(board[1][1]);
  diagonal1.push(board[2][2]);
  linesArr.push(diagonal1);
  const diagonal2 = [];
  diagonal2.push(board[0][2]);
  diagonal2.push(board[1][1]);
  diagonal2.push(board[2][0]);
  linesArr.push(diagonal2);


  let result = null;

  linesArr.forEach((line) => {
    const xLine = line.filter((element) => element === "X");
    if(xLine.length === 3){
      result = "X";
      return;
    }
    const oLine = line.filter((element) => element === "0");
    if(oLine.length === 3){
      result = "0";
      return;
    }
    console.log("["+xLine.length+"|"+oLine.length+"]");
  })

  if(result === null){
    return "stalemate";
  }
  else {
    return result;
  }
};
