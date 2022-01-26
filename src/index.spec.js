/**
 *********************************************
 *********************************************
 ************* DO NOT MODIFY *****************
 *********************************************
 *********************************************
 */

const fileParser = require("./file-parser");

it("parse file size given in kbs", () => {
  expect(fileParser("100kb")).toBe(0.09765625);
});

it("parse file size given in mbs", () => {
  expect(fileParser("100mb")).toBe(100.0);
});

it("parse file size given in gbs", () => {
  expect(fileParser("100gb")).toBe(102400.0);
});

it("parse file size given in tbs", () => {
  expect(fileParser("100tb")).toBe(104857600.0);
});

it("should parse arguments with arbitary number of spaces", () => {
  expect(fileParser("   100 kb")).toBe(0.09765625);
  expect(fileParser("   100 kb       ")).toBe(0.09765625);
  expect(fileParser("   100           kb")).toBe(0.09765625);
});

describe("Invalid arguments", () => {
  it("should throw an error when just a number is passed", () => {
    expect(() => fileParser(100)).toThrow();
  });

  it("should throw an error when there is not unit", () => {
    expect(() => fileParser("100")).toThrow();
  });

  it("should throw an error when there are no numbers", () => {
    expect(() => fileParser("say-what-now")).toThrow();
  });

  it("should throw an error when no argument passed", () => {
    expect(() => fileParser()).toThrow();
  });

  it("should throw an error when invalid unit type is given", () => {
    expect(() => fileParser("100wp")).toThrow();
  });
});
