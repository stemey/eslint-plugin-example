// https://eslint.org/docs/developer-guide/working-with-rules
module.exports = {
  meta: {
    messages: {
      toplevelContainer: "Don't use coontainer as top level",
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
          node.openingElement.name.name === "Container" &&
          node.parent &&
          node.parent.type !== "JSXElement" &&
          node.parent.type !== "JSXFragment"
        ) {
          context.report({
            node,
            messageId: "toplevelContainer",
          });
        }
      },
    };
  },
};
