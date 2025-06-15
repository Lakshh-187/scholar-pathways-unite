
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadBadgeAsImage = async (elementId: string, filename: string, format: 'png' | 'jpg') => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 3, // Higher scale for better quality
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    const link = document.createElement('a');
    link.download = `${filename}.${format}`;
    
    if (format === 'png') {
      link.href = canvas.toDataURL('image/png', 1.0);
    } else {
      link.href = canvas.toDataURL('image/jpeg', 0.95);
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

export const downloadBadgeAsPDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${filename}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
