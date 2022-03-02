module.exports =function isContainer(node) {
  return (
    (node.type === "JSXElement" &&
      node.openingElement.name.name === "Container") ||
    (node.type === "JSXVariableContainer" &&
      node.right.type === "JSXElement" &&
      node.right.openingElement.name.name === "Container")
  );
}
