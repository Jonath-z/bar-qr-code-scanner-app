import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const HomePage = () => {
  const [data, setData] = useState<any>();
  const [stopStream, setStopStream] = useState(false);
  const [isScannerModal, setIsScannerModal] = useState(false);
  const [scannerSize, setscannerSize] = useState({
    height: 300,
  });

  const [isCodebar, setIscodebar] = useState(true);
  const [isQr, setIsQr] = useState(false);

  const toggleScannerModal = () => {
    setStopStream(!stopStream);
    setIsScannerModal(!isScannerModal);
  };

  const selectCodebar = () => {
    setscannerSize({ ...scannerSize, height: 300 });
    setIscodebar(true);
    setIsQr(false);
  };

  const selectQrcode = () => {
    setscannerSize({ ...scannerSize, height: 500 });
    setIscodebar(false);
    setIsQr(true);
  };

  const onSelectCodeType = (code: string) => {
    if (code === "codebar") {
      selectCodebar();
    } else if (code === "qrcode") {
      selectQrcode();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5 mx-5 font-bold">
      <div
        className={`w-full flex justify-around items-center absolute top-0 mt-10 ${
          isScannerModal && "hidden"
        }`}
      >
        <button
          className={`border border-blue-500 px-5 py-2 rounded-3xl ${
            isCodebar ? "bg-blue-500 text-white " : "bg-white"
          } transition-all`}
          onClick={() => onSelectCodeType("codebar")}
        >
          Codebar
        </button>
        <button
          className={`border border-blue-500 px-5 py-2 rounded-3xl ${
            isQr ? "bg-blue-500 text-white" : "bg-white"
          } transition-all`}
          onClick={() => onSelectCodeType("qrcode")}
        >
          QR code
        </button>
      </div>
      <p
        className={`bg-blue-500 text-white  py-2 rounded-sm w-[90%] text-center absolute top-0 mt-10 ${
          !isScannerModal && "hidden"
        }`}
      >
        {isScannerModal && isCodebar
          ? "Codebar scanning"
          : isScannerModal && isQr && "QR code scanning"}
      </p>
      <div className="w-fit h-fit border rounded-sm">
        {isScannerModal && (
          <BarcodeScannerComponent
            width={500}
            height={200}
            onUpdate={(err, result) => {
              if (result) {
                setData(result.getText());
                toggleScannerModal();
                navigator.vibrate([300, 300, 300]);
              } else setData("Not Found");
            }}
            stopStream={stopStream}
          />
        )}
      </div>

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
