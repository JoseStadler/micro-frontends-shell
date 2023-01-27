export const openPdf = (pdf: any) => {
  const file = new Blob([pdf], {
    type: 'application/pdf',
  });
  const linkPDF = URL.createObjectURL(file);
  window.open(linkPDF);
};
