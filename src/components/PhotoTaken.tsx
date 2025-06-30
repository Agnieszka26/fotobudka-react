import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import { StickerContext } from "../contexts/FilterContext";
import Frame from "@/atoms/frame/Frame";
export const PhotoTaken = ({
  isAnimatedFrame,
}: {
  isAnimatedFrame: boolean;
}) => {
  const { rawPhoto } = useContext(PhotoContext);
  const { sticker } = useContext(StickerContext);

  return (
    rawPhoto && (
      <div className="flex flex-col items-center">
        <div className="relative w-[828px] h-[1104px] mt-[100px] mx-[40px] overflow-hidden">
          <img
            src={rawPhoto}
            alt="Captured with Sticker"
            className="absolute  inset-0 top-0 left-0  h-full w-full object-cover rounded-4xl"
          />
          {isAnimatedFrame ? (
            <Frame src={sticker} />
          ) : (
            <img
              key={sticker}
              className="absolute top-0 left-0 w-full h-full rounded-4xl"
              src={sticker}
              alt="frame"
            />
          )}
        </div>
      </div>
    )
  );
};
