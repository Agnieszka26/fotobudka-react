import { motion } from "framer-motion";
import { ComponentProps } from "react";
type Props = ComponentProps<"div">;
const SlideInDown = ({ children, id }: Props) => {
  return (
    <motion.div
      key={id}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInDown;
