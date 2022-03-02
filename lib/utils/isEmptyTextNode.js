module.exports = function isEmptyTextNode(node) {
  return node.type === "JSXText" && node.value.replace(/[\n \t]/g, "").length === 0;
};
