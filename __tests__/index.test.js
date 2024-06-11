// __tests__/index.test.js
const holaMundo = require("../app");

test("returns Hola, Mundo!", () => {
  expect(holaMundo()).toBe("Hola, Mundo!");
});
