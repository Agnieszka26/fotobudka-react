import { ComponentProps } from "react";
import sweetFactoryLogo from "@/assets/logo/sweetfactory_logo.svg";
import classNames from "classnames";
type Props = ComponentProps<"div">;
export const Logo = ({ className }: Props) => {
  const logoClassname = classNames(
    className,
    "h-[160px] w-[160px]",
    "rounded-full bg-white",
    "z-10"
  );
  return (
    <div className={logoClassname}>
      <img src={sweetFactoryLogo} alt={"sweet factory logo"} />
    </div>
  );
};
