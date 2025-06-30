import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;
export const FadeInOut = ({ children, id }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut"}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
