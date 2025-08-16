import React from 'react';
// import qrCode from '../assets/qr-code.png';

const QRCodeSection = () => {
  const menuUrl = "https://krabby-pattypod-menu.com";
  
  return (
    <div className="qr-section">
      <h3>Scan to view menu</h3>
      {/* <img src={qrCode} alt="QR Code" className="qr-code" /> */}
      <a href={menuUrl} className="qr-link">{menuUrl}</a>
    </div>
  );
};

export default QRCodeSection;