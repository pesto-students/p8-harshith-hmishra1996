const mathOperations = require("./calculator");
describe("Calculator tests", () => {
  test("Testing add function", () => {
    var result = mathOperations.sum(100, 34);
    expect(result).toBe(134);
  });

  test("Testing diff fucntion", () => {
    var result = mathOperations.diff(30, 15);
    expect(result).toBe(15);
  });

  test("Testing product function", () => {
    var result = mathOperations.product(25, 25);
    expect(result).toBe(625);
  });
});
