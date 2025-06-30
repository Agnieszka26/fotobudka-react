import { ComponentProps } from "react";
import classNames from "classnames";
import retake from "@/assets/icons/retake.svg";
import check from "@/assets/icons/check.svg";
import tailwindConfig from "@/../tailwind.config";
import { Colors } from "@/types";
const colors = tailwindConfig.theme?.extend?.colors as Colors;
type Props = ComponentProps<"button"> & { variant: "retake" | "ok" };
export const RoundBtn = ({ onClick, className, variant }: Props) => {
  const btnClass = classNames(
    className,
    "border border-white border-[26px]",
    "rounded-full text-white flex items-center justify-center w-[160px] h-[160px]"
  );

  return (
    <button
      onClick={onClick}
      className={btnClass}
      style={{
        backgroundColor:
          variant === "retake"
            ? colors.mintOcean.light
            : colors?.mintOcean?.DEFAULT,
      }}
    >
      <img
        src={variant === "retake" ? retake : check}
        alt={variant}
        id={variant}
        className="w-[32px] h-[32px]"
      />
    </button>
  );
};
