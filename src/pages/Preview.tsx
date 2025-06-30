import { FadeInOut } from "@/atoms/animate/FadeInOut";
import { TakePictureButton } from "@/atoms/button/variants/TakePictureBtn";
import FilterSwitcher from "@/components/SticerSwitcher/FilterSwitcher";
import { PhotoContext } from "@/contexts/PhotoContext";
import { useContext } from "react";

const Preview = () => {
  const { handleStep } = useContext(PhotoContext);

  const handleTakePhoto = () => {
    handleStep("countdown");
  };
  return (
    <FadeInOut>
      <TakePictureButton
        onClick={handleTakePhoto}
        className="absolute bottom-0 left-1/2 -translate-1/2 "
      />
      <FilterSwitcher />
    </FadeInOut>
  );
};

export default Preview;
