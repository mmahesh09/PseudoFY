// utils/pythonToPseudocode.ts

export function generatePseudocodeFromPython(code: string): string {
    let pseudocode = "";
    const indent = (level: number) => " ".repeat(level);
  
    // A very simple pseudocode generator for Python (expand as necessary)
    const lines = code.split("\n");
  
    lines.forEach((line) => {
      const trimmed = line.trim();
  
      if (trimmed.startsWith("def")) {
        const functionName = trimmed.split("(")[0].split(" ")[1];
        pseudocode += `Function ${functionName}()\n`;
      } else if (trimmed.startsWith("if")) {
        pseudocode += `${indent(2)}If condition\n`;
      } else if (trimmed.startsWith("else")) {
        pseudocode += `${indent(2)}Else\n`;
      } else if (trimmed.startsWith("for")) {
        pseudocode += `${indent(2)}For loop\n`;
      } else if (trimmed.startsWith("return")) {
        pseudocode += `${indent(2)}Return value\n`;
      } else if (trimmed.startsWith("print")) {
        pseudocode += `${indent(2)}Output message\n`;
      } else if (trimmed.length > 0) {
        pseudocode += `${indent(2)}Execute expression\n`;
      }
    });
  
    pseudocode += "\nEnd Function";
    return pseudocode;
  }
  