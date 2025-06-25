
import stars from "@/assets/icons/stars.svg";
import { Colors } from "@/types";
import tailwindConfig from "@/../tailwind.config";
import { ComponentProps } from "react";
import classNames from "classnames";

const colors = tailwindConfig.theme?.extend?.colors as Colors;
type Props = ComponentProps<"button"> &{ text: string }
const FilterLabel = ({ text, className}: Props) => {
  const clsName = classNames(className, "flex items-center justify-center gap-16 mx-auto pb-[60px]")
  return (
    <div className={clsName}>
      <img src={stars} alt="stars" className="rotate-180" />
      <p
        className="font-nunito text-[36px] font-semibold"
        style={{ color: colors?.mintOcean?.DEFAULT }}
      >
        {text}
      </p>
      <img src={stars} alt="stars" />
    </div>
  );
};

export default FilterLabel;
