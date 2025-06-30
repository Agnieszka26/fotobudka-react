import { PhotoTaken } from "@/components/PhotoTaken";
import tailwindConfig from "@/../tailwind.config";
import { Colors } from "@/types";
import { copy } from "@/locales/pl";
import { QRCodeSVG } from "qrcode.react";
import sweetFactoryLogo from "@/assets/logo/sweetfactory_logo.svg";
import { RoundBtn } from "@/atoms/button/variants/RoundBtn";
import { useContext } from "react";
import { PhotoContext } from "@/contexts/PhotoContext";
import SlideInDown from "@/atoms/animate/SlideInDown";
export const Saved = () => {
  const { handleStep } = useContext(PhotoContext);
  const colors = tailwindConfig.theme?.extend?.colors as Colors;
  const handleFinish = () => {
    handleStep("preview");
  };
  return (
    <>
      <PhotoTaken isAnimatedFrame={false} />
      <SlideInDown>
        <p
          className="font-nunito text-4xl font-bold pt-6 text-center"
          style={{ color: colors.mintOcean.DEFAULT }}
        >
          {copy.messages.scanYourPhoto}
        </p>
        <div className="pt-12 flex flex-col items-center justify-center">
          <QRCodeSVG
          //TODO: change value for link for downolad photo
            value="https://reactjs.org/"
            size={164}
            bgColor="#ffffff"
            fgColor={colors.pink.DEFAULT}
            level="H"
            imageSettings={{
              src: sweetFactoryLogo,
              x: undefined,
              y: undefined,
              height: 100,
              width: 100,
              excavate: false,
            }}
          />
          <RoundBtn variant="ok" onClick={handleFinish} />
        </div>
      </SlideInDown>
    </>
  );
};
