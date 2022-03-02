// https://eslint.org/docs/developer-guide/nodejs-api#ruletester

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/container-toplevel");

// https://stackoverflow.com/questions/42706584/eslint-error-parsing-error-the-keyword-const-is-reserved
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("container-toplevel", rule, {
  valid: [
    {
      code: "const x = <x><Container><x></x></Container></x>",
    },
    {
      code: "const x = <><Container><x></x></Container></>",
    },
  ],
  invalid: [
    {
      code: `const x = <Container>fff</Container>`,
      errors: [{ message: "Don't use coontainer as top level" }],
    },
  ],
});
