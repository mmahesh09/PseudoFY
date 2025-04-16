import Color from 'color';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Converts OKLCH to LCH
 * @param {number} L - The luminance component (0 to 1)
 * @param {number} C - The chroma component
 * @param {number} H - The hue component (in degrees, 0 to 360)
 * @returns {string} RGB string
 */
export const oklchToRgb = (L: number, C: number, H: number): string => {
  // Convert OKLCH to LCH (for simplicity, assuming no perceptual transform applied here)
  const lch = { l: L * 100, c: C * 100, h: H };  // LCH values are generally scaled by 100
  
  // Now use the color library to convert LCH to RGB
  const color = Color.lch(lch.l, lch.c, lch.h);
  return color.rgb().string();  // Returns the RGB color in string format
};

/**
 * Function to export the content with a watermark in PDF or image format
 */
export const exportWithWatermark = async (
  exportRef: React.RefObject<HTMLDivElement>,
  format: "pdf" | "png" | "jpg",
  setIsExporting: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const element = exportRef.current;
  if (!element) return;

  setIsExporting(true); // Trigger inline Tailwind "export-safe" styles

  await new Promise((r) => setTimeout(r, 100)); // Let styles apply before render

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: "#000000",
      useCORS: true,
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    if (format === "pdf") {
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      pdf.addImage(imgData, "PNG", 0, 0, 595, 842);
      pdf.setTextColor(200, 200, 200);
      pdf.setFontSize(40);
      pdf.text("PSEUDOFY", 200, 800, { angle: 45 });
      pdf.save("pseudocode.pdf");
    } else {
      const link = document.createElement("a");
      link.download = `pseudocode.${format}`;
      link.href = canvas.toDataURL(`image/${format}`);
      link.click();
    }
  } catch (error) {
    console.error("Export failed:", error);
  } finally {
    setIsExporting(false);
  }
};
