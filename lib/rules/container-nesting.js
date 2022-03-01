// https://eslint.org/docs/developer-guide/working-with-rules
module.exports = {
  meta: {
    messages: {
      nestedContainer: "Don't nest a container as only child in a container",
    },
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
      ["JSXElement"](node) {
        if (
          node.openingElement.name.name === "test" &&
          node.parent &&
          node.parent.type === "JSXElement" &&
          node.parent.openingElement.name.name === "test" &&
          node.parent.children.length === 1
        ) {
          context.report({
            node,
            messageId: "nestedContainer",
          });
        }
      },
    };
  },
};
