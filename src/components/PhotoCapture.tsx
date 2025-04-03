import { useRef, useState, useCallback, useContext } from "react";
import Webcam from "react-webcam";
import { StickerContext } from "../contexts/StickerContext";

const PhotoCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const s  = useContext(StickerContext);
    const { sticker } = s;

  const mergeImages = useCallback(() => {
    if (!webcamRef.current) return;
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const webcamImage = new Image();
    const stickerImage = new Image();
    if (!ctx) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return; // Ensure image source is available
    webcamImage.src = imageSrc;
    stickerImage.src = sticker; // Adjust path if necessary

    webcamImage.onload = () => {
      canvas.width = webcamImage.width;
      canvas.height = webcamImage.height;

      ctx.drawImage(webcamImage, 0, 0);
      ctx.drawImage(stickerImage, 0, 0, 100, 100);
      const mergedImage = canvas.toDataURL("image/png");
      setCapturedImage(mergedImage);

    };
  }, [sticker]);
const download = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.href = canvasRef.current.toDataURL("image/png");
    link.download = "candy-image.png";
    link.click();
  
}

  return (
    <div className="flex flex-col items-center">
      <p>Your preview:</p>
      <div className="relative w-[600px] h-[500px]">

        <Webcam
          ref={webcamRef}
          screenshotFormat="image/png"
          width={800}
          height={400}
          className="absolute top-0 left-0"
        />
        <img
          src={sticker}
          alt="Sticker"
          className="absolute top-0 left-0 w-[100px] h-[100px]"
        />
      </div>
      <button
        onClick={mergeImages}
        className="bg-slate-800 text-white p-2 m-2 rounded"
      >
        Take photo
      </button>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      {capturedImage && (
        <>
        <p>Your photo:</p>
        <img
          src={capturedImage}
          alt="Captured with Sticker"
          className="mt-4 border rounded-lg"
          />
          <button onClick={download} className="bg-slate-500 text-white p-2 m-2 rounded">Download</button> 
          </>
      )}
    

      
  

    </div>
  );
};

export default PhotoCapture;
