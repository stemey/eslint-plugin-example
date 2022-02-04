// https://eslint.org/docs/developer-guide/nodejs-api#ruletester

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/abc');

// https://stackoverflow.com/questions/42706584/eslint-error-parsing-error-the-keyword-const-is-reserved
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType:"module"
  },
});

ruleTester.run('abc', rule, {
  valid: [
    {
      code: "import {x} from 'x'",
    }
  ],
  invalid: [
    {
      code: "import {x} from 'enzyme'",
      errors: [
        { message: 'Enyzyme is deprecated' },
      ]
    }
  ],
});
