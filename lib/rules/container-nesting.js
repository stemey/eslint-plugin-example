const isContainer = require("../utils/isContainer");
const isEmptyTextNode = require("../utils/isEmptyTextNode");
const isLayout = require("../utils/isLayout");

// https://eslint.org/docs/developer-guide/working-with-rules
module.exports = {
  meta: {
    messages: {
      nestedContainer: "Don't nest only containers as children of container or layout. This results in a lot of unecessary markup.",
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
          (isContainer(node) || isLayout(node)) &&
          node.children.filter((n) => !isEmptyTextNode(n) && !isContainer(n))
            .length === 0
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
