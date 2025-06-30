import { ComponentProps } from "react";
import classNames from "classnames";

import tailwindConfig from "@/../tailwind.config";
import { Colors } from "@/types";
const colors = tailwindConfig.theme?.extend?.colors as Colors;
type Props = ComponentProps<"button"> & {light?: boolean}
export const Button = ({ onClick, className, children, light }: Props) => {

  const btnClass = classNames(
    className,
    "bg-teal-500",
    'border border-white border-[32px]',
    "rounded-full text-white py-10 px-4 flex items-center justify-center gap-[32px] w-3/4",
  );

  return (
    <button
      onClick={onClick}
      className={btnClass}
      style={{ backgroundColor: light ? colors.mintOcean.light : colors?.mintOcean?.DEFAULT }}
    >
      {children}
    </button>
  );
};
