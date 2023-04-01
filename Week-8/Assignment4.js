function paranthesisChecker(expression) {
  const stack = [];
  const bracketsMap = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < expression.length; i++) {
    const currentChar = expression[i];

    if (currentChar === "{" || currentChar === "(" || currentChar === "[") {
      stack.push(currentChar);
    } else if (
      currentChar === "}" ||
      currentChar === ")" ||
      currentChar === "]"
    ) {
      const topElement = stack.pop();
      if (topElement !== bracketsMap[currentChar]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Example usage
const exp1 = "[()]{}{()()}";
const exp2 = "[(])";

console.log("Expression 1:", exp1, "is balanced:", paranthesisChecker(exp1)); // Output: true
console.log("Expression 2:", exp2, "is balanced:", paranthesisChecker(exp2)); // Output: false
