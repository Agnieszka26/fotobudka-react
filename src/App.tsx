import { useCallback, useRef, useState } from "react";
import { StickerContext } from "./contexts/FilterContext";
import MainPage from "./pages/MainPage";
import { PhotoContext } from "./contexts/PhotoContext";
import Webcam from "react-webcam";
import "./App.css";
import { StepType } from "./types";
import frame1 from "./assets/frames/frame1.png";
import frame2 from "./assets/frames/frame2.png";
import frame3 from "./assets/frames/frame3.png";
import frame4 from "./assets/frames/frame4.png";
import frame5 from "./assets/frames/frame5.png";
import frame6 from "./assets/frames/frame6.png";
import frame7 from "./assets/frames/frame7.png";
import sweetek1 from "./assets/frames/sweetek1.png";

function App() {
  const [step, setStep] = useState<StepType>("preview");

  const handleStep = (newStep: StepType) => {
    setStep(newStep);
  };
  const [activeFilterIndex, setActiveFilterIndex] = useState(2);
  const [sticker, setSticker] = useState<string>(frame3);
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [rawPhoto, setRawPhoto] = useState<string | null>(null);
  const filters = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    sweetek1,
  ];
  const takeRawPhoto = useCallback(() => {
    if (!webcamRef.current) return;
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const webcamImage = new Image();

    if (!ctx) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;
    webcamImage.src = imageSrc;

    webcamImage.onload = () => {
      canvas.width = webcamImage.width;
      canvas.height = webcamImage.height;

      ctx.drawImage(webcamImage, 0, 0);

      const photo = canvas.toDataURL("image/png");
      setRawPhoto(photo);
    };
  }, []);

  const mergeImages = useCallback(() => {
    return new Promise<void>((resolve) => {
      if (!canvasRef.current) return;
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const webcamImage = new Image();
      const stickerImage = new Image();
      if (!ctx) return;
      const imageSrc = rawPhoto;
      if (!imageSrc) return;
      webcamImage.src = imageSrc;
      stickerImage.src = sticker;

      webcamImage.onload = () => {
        canvas.width = webcamImage.width;
        canvas.height = webcamImage.height;

        ctx.drawImage(webcamImage, 0, 0);
        ctx.drawImage(stickerImage, 0, 0, canvas.width, canvas.height);
        const mergedImage = canvas.toDataURL("image/png");
        setCapturedImage(mergedImage);
        resolve();
      };
    });
  }, [sticker, rawPhoto]);

  const download = () => {
    //TODO: it should send photo(upload) to our temporary database
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.href = canvasRef.current.toDataURL("image/png");
    link.download = "candy-image.png";
    link.click();
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <PhotoContext.Provider
        value={{
          webcamRef,
          canvasRef,
          capturedImage,
          setCapturedImage,
          mergeImages,
          download,
          handleStep,
          takeRawPhoto,
          rawPhoto,
          step,
        }}
      >
        <StickerContext.Provider
          value={{
            sticker,
            setSticker,
            filters,
            activeFilterIndex,
            setActiveFilterIndex,
          }}
        >
          <MainPage />
        </StickerContext.Provider>
      </PhotoContext.Provider>
    </div>
  );
}

export default App;
