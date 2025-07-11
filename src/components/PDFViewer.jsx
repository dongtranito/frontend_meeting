const PDFViewer = () => {
  return (
    <iframe
      src="/bien_ban_dai.pdf#zoom=89"
      width="100%"
      height="1000px"
      title="Biên bản cuộc họp"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default PDFViewer;
