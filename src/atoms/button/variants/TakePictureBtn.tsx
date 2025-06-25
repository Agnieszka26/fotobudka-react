import { Button } from "../Button";
import cameraIcon from "@/assets/icons/camera.svg";
import { copy } from "../../../locales/pl";
export const TakePictureButton = (
  props: React.ComponentProps<typeof Button>
) => {
  return (
    <Button {...props}>
      <img
        src={cameraIcon}
        alt="Camera Icon"
        className="inline-block h-[64px] w-[64px]"
      />
      <p className="font-nunito text-[48px] font-bold">
        {copy.buttons.takePhoto}
      </p>
    </Button>
  );
};
