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
      code: "const x = <Container><Container>Hallo</Container><x></x></Container>",
    },
    {
      code: "const x = <Container><Container>Hallo</Container>{something}</Container>",
    },
    {
      code: "const x = <Container><Container>Hallo</Container>some weird content</Container>",
    }
  ],
  invalid: [
    {
      code: `const x = <Container>
                <Container>Hallo</Container>
                
              </Container>`,
      errors: [
        { messageId: "nestedContainer" },
      ],
    },
    {
      code: `const x = <Container>
                         {condition && (<Container>
                            <Container>Hallo</Container>  
                          </Container>)}
              </Container>`,
      errors: [
        { messageId: "nestedContainer" },
      ],
    },{
      code: `const x = <Layout>
                         {condition && (<Container>
                            <Container>Hallo</Container>  
                          </Container>)}
              </Layout>`,
      errors: [
        { messageId: "nestedContainer" },
      ],
    },
  ],
});
