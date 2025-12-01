import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  const generateClick = () => setWord(temp);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-green-200 to-green-100 ">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-6 rounded-3xl"
      >
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center mb-2 text-green-900 drop-shadow-sm"
        >
          QR Code Generator
        </motion.h1>

        <p className="text-center text-gray-700 mb-5">
          Create instant QR codes in one click.
        </p>

        {/* Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className="w-full p-4 bg-white/40 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-800 transition-all"
          />
          <span className="absolute top-[-10px] left-3 bg-green-200 text-gray-800 px-2 text-sm rounded-md shadow-sm">
            Enter URL or Text
          </span>
        </div>

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateClick}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
        >
          Generate QR
        </motion.button>

        {/* QR Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 flex justify-center"
        >
          <motion.img
            key={qrCode}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={qrCode}
            alt="QR Code"
            className="w-64 h-64 rounded-2xl border-4 border-white shadow-xl"
          />
        </motion.div>

        {/* Download */}
        <motion.a
          href={qrCode}
          download="QRCode"
          whileHover={{ scale: 1.02 }}
          className="block mt-6"
        >
          <button className="w-full py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-bold rounded-xl shadow-md">
            Download QR
          </button>
        </motion.a>
      </motion.div>
    </div>
  );
}
