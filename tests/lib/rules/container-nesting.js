// https://eslint.org/docs/developer-guide/nodejs-api#ruletester

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/container-nesting");

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

ruleTester.run("container-nesting", rule, {
  valid: [
    {
      code: "const x = <test><test>Hallo</test>xxx</test>",
    },
  ],
  invalid: [
    {
      code: "<test><test>Hallo</test></test>",
      errors: [
        { message: "Don't nest a container as only child in a container" },
      ],
    },
  ],
});
