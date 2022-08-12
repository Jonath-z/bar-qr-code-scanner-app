import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { isCallChain } from "typescript";

const HomePage = () => {
  const [data, setData] = useState<any>();
  const [stopStream, setStopStream] = useState(false);
  const [isScannerModal, setIsScannerModal] = useState(false);

  const toggleScannerModal = () => {
    setStopStream(!stopStream);
    setIsScannerModal(!isScannerModal);
  };
  return (
    <div>
      {isScannerModal && (
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) {
              setData(result.getText());
              setStopStream(true);
              navigator.vibrate([300, 300, 300]);
              console.log(result.getText());
            } else setData("Not Found");
          }}
          stopStream={stopStream}
        />
      )}
      <p className="result">{data}</p>

      <button onClick={toggleScannerModal}>dismiss</button>
    </div>
  );
};

export default HomePage;
