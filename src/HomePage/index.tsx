import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const HomePage = () => {
  const [data, setData] = useState<any>();
  const [stopStream, setStopStream] = useState(false);
  const [isScannerModal, setIsScannerModal] = useState(false);

  const toggleScannerModal = () => {
    setStopStream(!stopStream);
    setIsScannerModal(!isScannerModal);
  };

  const onError = (error: any) => {
    if (error.name === "NotAllowedError") {
      window.alert(
        "We don't have access to the camera. Allow access to the camera"
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5 mx-5 font-bold lg:mx-96">
      <p
        className={`bg-blue-500 text-white  py-2 rounded-sm w-[90%] text-center absolute top-0 mt-10`}
      >
        Scan Barcode and QR code
      </p>
      {isScannerModal && (
        <BarcodeScannerComponent
          onUpdate={(err, result) => {
            if (result) {
              setData(result.getText());
              toggleScannerModal();
              navigator.vibrate([300, 300, 300]);
            } else setData("Not Found");
          }}
          stopStream={stopStream}
          onError={onError}
        />
      )}
      <p className="text-blue-500">{data}</p>

      <button
        onClick={toggleScannerModal}
        className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-10 py-2 rounded-md"
      >
        {isScannerModal ? "Dismiss" : "Click to scan"}
      </button>
    </div>
  );
};

export default HomePage;
