import { useContext } from "react";
import PhotoPreview from "../components/PhotoPreview";
import { PhotoContext } from "../contexts/PhotoContext";
import Countdown from "../components/Countdown";
import { Logo } from "../components/logo/Logo";
import { FadeInOut } from "@/atoms/animate/FadeInOut";
import Preview from "./Preview";
import Taken from "./Taken";
import Saving from "./Saving";
import { Saved } from "./Saved";

const MainPage = () => {
  const { step } = useContext(PhotoContext);
  return (
    <main className="relative h-[1414px]">
      {(step === "preview" || step === "countdown") && <PhotoPreview />}
      {step === "preview" ||
        (step === "taken" && (
          <FadeInOut>
            <Logo className="absolute top-24 left-1/2 -translate-1/2" />
          </FadeInOut>
        ))}
      {step === "preview" && <Preview />}
      {step === "countdown" && <Countdown />}
      {step === "taken" && <Taken />}
      {step === "saving" && <Saving />}
      {step === "saved" && <Saved />}
    </main>
  );
};

export default MainPage;
