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
    // https://eslint.org/docs/developer-guide/working-with-rules#the-context-object

    return {
      // 查找所有的变量定义
      // https://eslint.org/docs/developer-guide/selectors
      ["ImportDeclaration"](node) {
        if (node.source.value !== "enzyme") {
          return;
        }

        // 变量名如果不是 "abc"，就报错
        context.report({
          node,
          messageId: "enzyme",
        });
      },
    };
  },
};
