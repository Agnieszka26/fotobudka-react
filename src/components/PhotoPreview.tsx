import { useContext } from "react";
import Webcam from "react-webcam";
import { StickerContext } from "../contexts/FilterContext";
import { PhotoContext } from "../contexts/PhotoContext";
import Frame from "../atoms/frame/Frame";

const PhotoPreview = () => {
  const { sticker } = useContext(StickerContext);
  const { webcamRef } = useContext(PhotoContext);
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[828px] h-[1104px] mt-[100px] mx-[40px] overflow-hidden">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/png"
          width={828}
          height={1104}
          className="absolute  inset-0 top-0 left-0  h-full w-full object-cover rounded-4xl"
        />
        <Frame src={sticker} />
      </div>
    </div>
  );
};

export default PhotoPreview;
