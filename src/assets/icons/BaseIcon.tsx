import { COMMON_ICON_PROPS } from "../../constants/COMMON_ICON_PROPS";
import type { CommonIconProps } from "../../interfaces/commonIconProps";

interface BaseIconProps extends CommonIconProps {
  children: React.ReactNode;
}

function BaseIcon({ size = COMMON_ICON_PROPS.size, children }: BaseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"#cbd5e1"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default BaseIcon;
