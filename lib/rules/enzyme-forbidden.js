// https://eslint.org/docs/developer-guide/working-with-rules
module.exports = {
  meta: {
    messages: { enzyme: "Enyzyme is deprecated" },
    type: "suggestion",

    docs: {
      description: "Checking",
      category: "category",
      url: "url",
    },
    schema: [],
  },

  create: function (context) {

    return {
      ["ImportDeclaration"](node) {
        if (node.source.value !== "enzyme") {
          return;
        }

        context.report({
          node,
          messageId: "enzyme",
        });
      },
    };
  },
};
