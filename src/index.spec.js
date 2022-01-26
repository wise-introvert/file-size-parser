const fileParser = require("./file-parser");

it("parse file size given in kbs", () => {
  expect(fileParser("100kb")).toBe(0.1);
});

it("parse file size given in mbs", () => {
  expect(fileParser("100mb")).toBe(100);
});

it("parse file size given in gbs", () => {
  expect(fileParser("100gb")).toBe(100000);
});

it("parse file size given in tbs", () => {
  expect(fileParser("100tb")).toBe(100000000);
});

it("should parse arguments with arbitary number of spaces", () => {
  expect(fileParser("   100 kb")).toBe(0.1);
  expect(fileParser("   100 kb       ")).toBe(0.1);
  expect(fileParser("   100           kb")).toBe(0.1);
});

it("should throw an error if the argument is malformed", () => {
  expect(fileParser("100 say-what-now")).toThrow();
  expect(fileParser("200aba")).toThrow();
  expect(fileParser("something completely different")).toThrow();
});
