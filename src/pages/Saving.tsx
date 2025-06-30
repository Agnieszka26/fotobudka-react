import { PhotoTaken } from "@/components/PhotoTaken";
import { copy } from "@/locales/pl";
import { Colors } from "@/types";
import tailwindConfig from "@/../tailwind.config";
import SlideInDown from "@/atoms/animate/SlideInDown";
import { easeInOut, motion } from "framer-motion";

const Saving = () => {
  const colors = tailwindConfig.theme?.extend?.colors as Colors;
  return (
    <>
      <PhotoTaken isAnimatedFrame={false} />
      <SlideInDown>
        <p
          className="font-nunito text-4xl font-bold pt-36 px-48 text-center"
          style={{ color: colors.mintOcean.DEFAULT }}
        >
          {copy.messages.waitForPrepare}
          <span className="inline-flex items-center ml-2 space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: colors.mintOcean.DEFAULT }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: easeInOut,
                }}
              />
            ))}
          </span>
        </p>
      </SlideInDown>
    </>
  );
};

export default Saving;
