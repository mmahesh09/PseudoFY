// utils/astToPseudocode.ts
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";

export function generatePseudocodeFromJS(code: string): string {
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  let pseudocode = "";
  const indent = (level: number) => "  ".repeat(level);

  traverse(ast, {
    enter(path) {
      const level = path.parentPath ? path.parentPath.listKey ? path.parentPath.listKey.length : 0 : 0;
      const node = path.node;

      switch (node.type) {
        case "FunctionDeclaration":
          pseudocode += `${indent(level)}Function ${node.id?.name}()\n`;
          break;

        case "VariableDeclaration":
          node.declarations.forEach((decl) => {
            if (decl.id.type === "Identifier") {
              pseudocode += `${indent(level)}Declare ${decl.id.name}\n`;
            }
          });
          break;

        case "IfStatement":
          pseudocode += `${indent(level)}If (condition)\n`;
          break;

        case "WhileStatement":
          pseudocode += `${indent(level)}While (condition)\n`;
          break;

        case "ForStatement":
          pseudocode += `${indent(level)}For (loop)\n`;
          break;

        case "ReturnStatement":
          pseudocode += `${indent(level)}Return value\n`;
          break;

        case "ExpressionStatement":
          pseudocode += `${indent(level)}Execute expression\n`;
          break;
      }

      // Closing structures
      if (path.isIfStatement()) pseudocode += `${indent(level)}End If\n`;
      if (path.isWhileStatement()) pseudocode += `${indent(level)}End While\n`;
      if (path.isForStatement()) pseudocode += `${indent(level)}End For\n`;
      if (path.isFunctionDeclaration()) pseudocode += `${indent(level)}End Function\n`;
    },
  });

  return pseudocode;
}
