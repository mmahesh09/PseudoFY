// utils/javaToPseudocode.ts

export function generatePseudocodeFromJava(code: string): string {
    let pseudocode = "";
    const indent = (level: number) => " ".repeat(level);
  
    // A simple pseudocode generator for Java
    const lines = code.split("\n");
  
    lines.forEach((line) => {
      const trimmed = line.trim();
  
      if (trimmed.startsWith("public") || trimmed.startsWith("private")) {
        const functionName = trimmed.split("(")[0].split(" ")[2];
        pseudocode += `Function ${functionName}()\n`;
      } else if (trimmed.startsWith("if")) {
        pseudocode += `${indent(2)}If condition\n`;
      } else if (trimmed.startsWith("else")) {
        pseudocode += `${indent(2)}Else\n`;
      } else if (trimmed.startsWith("for")) {
        pseudocode += `${indent(2)}For loop\n`;
      } else if (trimmed.startsWith("return")) {
        pseudocode += `${indent(2)}Return value\n`;
      } else if (trimmed.startsWith("System.out.println")) {
        pseudocode += `${indent(2)}Output message\n`;
      } else if (trimmed.length > 0) {
        pseudocode += `${indent(2)}Execute expression\n`;
      }
    });
  
    pseudocode += "\nEnd Function";
    return pseudocode;
  }
  