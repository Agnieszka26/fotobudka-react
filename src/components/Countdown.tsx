import { useContext, useEffect, useState } from "react";
import { PhotoContext } from "@/contexts/PhotoContext";
import FilterLabel from "./SticerSwitcher/FilterLabel";
import { copy } from "@/locales/pl";
import tailwindConfig from "@/../tailwind.config";
import { AnimatePresence, motion } from "framer-motion";
import { Colors } from "@/types";
import { FadeInOut } from "@/atoms/animate/FadeInOut";

function Countdown() {
  const colors = tailwindConfig.theme?.extend?.colors as Colors;
  const [count, setCount] = useState(4);
  const { takeRawPhoto, handleStep } = useContext(PhotoContext);
  useEffect(() => {
    if (count === 0) return;
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      takeRawPhoto();
      handleStep("taken");
    }
  }, [count, takeRawPhoto, handleStep]);
  return (
     <FadeInOut>
      <FilterLabel text={copy.labels.smileIn} className="pb-24 pt-12"/>
      <div className="relative h-[180px] overflow-hidden text-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={count}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 font-nunito text-[160px] font-bold"
            style={{ color: colors?.mintOcean?.DEFAULT }}
          >
            {count}
          </motion.div>
        </AnimatePresence>
      </div>
   </FadeInOut>
  );
}

export default Countdown;
