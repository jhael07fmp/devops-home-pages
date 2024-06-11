// __tests__/index.test.js
const holaMundo = require("../index");

test("returns Hola, Mundo!", () => {
  expect(holaMundo()).toBe("Hola, Mundo!");
});
