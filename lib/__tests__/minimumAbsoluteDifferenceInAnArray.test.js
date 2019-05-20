const minimumAbsoluteDifference = require("../index.js");

describe("minimumAbsoluteDifference", () => {
  it("test case 1", () => {
    const arr = [3, -7, 0];
    expect(minimumAbsoluteDifference(arr)).toBe(3);
  });

  it("test case 2", () => {
    const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
    expect(minimumAbsoluteDifference(arr)).toBe(1);
  });

  it("test case 3", () => {
    const arr = [1, -3, 71, 68, 17];
    expect(minimumAbsoluteDifference(arr)).toBe(3);
  });
});
