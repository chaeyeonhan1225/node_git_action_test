const { test, expect } = require("@jest/globals");

test("simple test", (done) => {
  expect(1).toBe(1);
  done();
});
