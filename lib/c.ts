// utils/cToPseudocode.ts

export function generatePseudocodeFromC(code: string): string {
    let pseudocode = "";
    const indent = (level: number) => " ".repeat(level);
  
    // A simple pseudocode generator for C
    const lines = code.split("\n");
  
    lines.forEach((line) => {
      const trimmed = line.trim();
  
      if (trimmed.startsWith("int")) {
        const varName = trimmed.split(" ")[1];
        pseudocode += `${indent(2)}Declare ${varName}\n`;
      } else if (trimmed.startsWith("if")) {
        pseudocode += `${indent(2)}If condition\n`;
      } else if (trimmed.startsWith("else")) {
        pseudocode += `${indent(2)}Else\n`;
      } else if (trimmed.startsWith("for")) {
        pseudocode += `${indent(2)}For loop\n`;
      } else if (trimmed.startsWith("return")) {
        pseudocode += `${indent(2)}Return value\n`;
      } else if (trimmed.startsWith("printf")) {
        pseudocode += `${indent(2)}Output message\n`;
      } else if (trimmed.length > 0) {
        pseudocode += `${indent(2)}Execute expression\n`;
      }
    });
  
    pseudocode += "\nEnd Function";
    return pseudocode;
  }
  