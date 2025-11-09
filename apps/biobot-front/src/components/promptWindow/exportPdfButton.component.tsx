import React from "react";
import { Download } from "lucide-react";
import type { FullReport } from "../../hooks/ai/useAi.definition";

interface ExportPdfButtonProps {
  content: FullReport;
}

export const ExportPdfButton: React.FC<ExportPdfButtonProps> = ({
  content,
}) => {
  if (!content || !content.report_title || !content.report) {
    return null;
  }

  const handleExport = async () => {
    try {
      // Dynamic import of jsPDF
      const { default: jsPDF } = await import("jspdf");
      const doc = new jsPDF();
      let yPos = 20;
      const pageHeight = doc.internal.pageSize.height;
      const margin = 14;
      const maxWidth = 180;

      // Helper function to load image and convert to base64
      const loadImageAsBase64 = (
        url: string
      ): Promise<{ dataURL: string; width: number; height: number }> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              reject(new Error("Could not get canvas context"));
              return;
            }
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            try {
              const dataURL = canvas.toDataURL("image/jpeg", 0.8);
              resolve({ dataURL, width: img.width, height: img.height });
            } catch (error) {
              reject(error);
            }
          };
          img.onerror = () => reject(new Error("Failed to load image"));
          img.src = url;
        });
      };

      // Add title
      doc.setFontSize(20);
      doc.setTextColor(33, 33, 33);
      const title = content.report_title;
      const splitTitle = doc.splitTextToSize(title, maxWidth);
      doc.text(splitTitle, margin, yPos);
      yPos += splitTitle.length * 8 + 10;

      // Add sections
      content.report.forEach((section) => {
        // Check if we need a new page
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = 20;
        }

        // Section title
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        const sectionTitle = doc.splitTextToSize(section.title, maxWidth);
        doc.text(sectionTitle, margin, yPos);
        yPos += sectionTitle.length * 6;

        // Section content
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(60, 60, 60);
        const contentText = doc.splitTextToSize(section.content, maxWidth);
        doc.text(contentText, margin, yPos);
        yPos += contentText.length * 5 + 8;
      });

      // Add figures if they exist
      if (content.figures && content.figures.length > 0) {
        for (const figure of content.figures) {
          try {
            // Check if we need a new page for the figure
            if (yPos > pageHeight - 80) {
              doc.addPage();
              yPos = 20;
            } else {
              yPos += 10;
            }

            // Load and add image
            const {
              dataURL: imageData,
              width: imgWidth_px,
              height: imgHeight_px,
            } = await loadImageAsBase64(figure.image_url);

            // Calculate image dimensions (max width 180mm, maintain aspect ratio)
            const maxImageWidth = 180;
            const maxImageHeight = 100;

            const aspectRatio = imgWidth_px / imgHeight_px;
            let imgWidth = maxImageWidth;
            let imgHeight = maxImageHeight;
            if (aspectRatio > 1.8) {
              // Wide image
              imgHeight = maxImageWidth / aspectRatio;
            } else {
              // Tall image
              imgWidth = maxImageHeight * aspectRatio;
              if (imgWidth > maxImageWidth) {
                imgWidth = maxImageWidth;
                imgHeight = maxImageWidth / aspectRatio;
              }
            }

            // Check if image fits on current page
            if (yPos + imgHeight > pageHeight - 20) {
              doc.addPage();
              yPos = 20;
            }

            // Center the image
            const xPos = (doc.internal.pageSize.width - imgWidth) / 2;
            doc.addImage(imageData, "JPEG", xPos, yPos, imgWidth, imgHeight);
            yPos += imgHeight + 5;

            // Add caption
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.setTextColor(80, 80, 80);
            const caption = doc.splitTextToSize(figure.image_caption, maxWidth);
            doc.text(caption, doc.internal.pageSize.width / 2, yPos, {
              align: "center",
              maxWidth: maxWidth,
            });
            yPos += caption.length * 4 + 5;
          } catch (error) {
            console.error("Failed to add figure:", figure.image_url, error);
            // Continue without the image
          }
        }
      }

      // Add citations if they exist
      if (content.citations && content.citations.length > 0) {
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = 20;
        } else {
          yPos += 10;
        }

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        doc.text("Citations", margin, yPos);
        yPos += 10;

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(60, 60, 60);
        content.citations.forEach((citation) => {
          if (yPos > pageHeight - 30) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(citation.citation, margin, yPos);
          yPos += 6;
        });
        yPos += 5;
      }

      // Add non-citations if they exist
      if (content.non_citations && content.non_citations.length > 0) {
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = 20;
        } else {
          yPos += 10;
        }

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        doc.text("Unused Citations", margin, yPos);
        yPos += 10;

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(60, 60, 60);
        content.non_citations.forEach((noncitation) => {
          if (yPos > pageHeight - 30) {
            doc.addPage();
            yPos = 20;
          }
          const justification = doc.splitTextToSize(
            `${noncitation.citation}: ${noncitation.justification}`,
            maxWidth
          );
          doc.text(justification, margin, yPos);
          yPos += justification.length * 5 + 5;
        });
      }

      // Save the PDF
      const filename = `${content.report_title.replace(
        /[^a-z0-9]/gi,
        "_"
      )}.pdf`;
      doc.save(filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <button className="action-button" onClick={handleExport}>
      <Download size={16} />
      Export
    </button>
  );
};
