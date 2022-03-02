module.exports =function isLayout(node) {
  return (
    (node.type === "JSXElement" &&
      node.openingElement.name.name === "Layout") ||
    (node.type === "JSXVariableContainer" &&
      node.right.type === "JSXElement" &&
      node.right.openingElement.name.name === "Layout")
  );
}
