import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <>
      <div className="bg-green-300 p-2 w-1/3 mx-auto mt-6 rounded-md h-auto">
        <div>
          <h1 className="text-2xl font-semibold text-center">
            Generate QR-Code
          </h1>
        </div>
        <div className="input-box mt-3 p-1">
          <label htmlFor="GenQr" className="text-xl font-semibold mx-1">
            Enter Text or Url
          </label>
          <input
            type="text"
            name="GenQr"
            id="GenQr"
            placeholder="Enter Url or Text"
            className="bg-white p-2 rounded-md w-full mt-1"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
          />
          <button
            onClick={handleClick}
            className="bg-green-500 w-full p-2 text-white text-xl font-semibold my-2 rounded-md button"
          >
            Generate
          </button>
        </div>
        <div className="output-box mx-auto p-3 bg-green-200">
          <img src={qrCode} alt="" className="w-75 h-75 mx-auto border-2" />
        </div>
        <div className="w-full mx-auto">
          <a href={qrCode} download="QRCode">
            <button
              type="button"
              className="bg-green-500 p-2 w-full my-3 rounded-md text-white text-xl font-semibold"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
