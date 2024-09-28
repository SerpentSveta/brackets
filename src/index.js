module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const openBrackets = [];
  const bracketPairs = {};
  const sameBrackets = [];

  bracketsConfig.forEach(subArray => {
    openBrackets.push(subArray[0]);
    bracketPairs[subArray[1]] = subArray[0];
    if (subArray[1] == subArray[0]) {
      sameBrackets.push(subArray[0]);
    }
  })

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentElem = str[i];

    if (sameBrackets.includes(currentElem)) {
      if (stack[stack.length - 1] === currentElem) {
        stack.pop();
      } else {
        stack.push(currentElem);
      }
      continue;
    }

    if (openBrackets.includes(currentElem)) {
      stack.push(currentElem);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[currentElem]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
