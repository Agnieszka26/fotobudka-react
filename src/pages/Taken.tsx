import { FadeInOut } from "@/atoms/animate/FadeInOut";
import SlideInDown from "@/atoms/animate/SlideInDown";
import { RoundBtn } from "@/atoms/button/variants/RoundBtn";
import { PhotoTaken } from "@/components/PhotoTaken";
import FilterSwitcher from "@/components/SticerSwitcher/FilterSwitcher";
import { PhotoContext } from "@/contexts/PhotoContext";
import { useContext } from "react";

const Taken = () => {
  const { handleStep, mergeImages, download } = useContext(PhotoContext);
  const handleDownload = async () => {
    await mergeImages();
    download();
    handleStep("saving");
    setTimeout(() => {
      handleStep("saved");
    }, 5000);
  };
  return (
    <>
      <PhotoTaken isAnimatedFrame={true} />
      <FadeInOut>
        <div className="absolute flex bottom-10 left-1/2 -translate-1/2 justify-center">
          <RoundBtn
            onClick={() => {
              handleStep("preview");
            }}
            variant={"retake"}
          />

          <RoundBtn variant="ok" onClick={handleDownload} className="-ml-5" />
        </div>
      </FadeInOut>
      <SlideInDown>
        <FilterSwitcher />
      </SlideInDown>
    </>
  );
};

export default Taken;
