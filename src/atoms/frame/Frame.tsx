import { motion, AnimatePresence } from "framer-motion";

const Frame = ({ src }: { src: string }) => {
  return (
    <AnimatePresence mode="sync">
      <motion.img
        key={src} 
        className="absolute top-0 left-0 w-full h-full rounded-4xl"
        src={src}
        alt="animated frame"
        initial={{ scale: 2.5, x: 0 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        exit={{ scale: 2.5, x: 0}}
      />
    </AnimatePresence>
  );
};

export default Frame;
