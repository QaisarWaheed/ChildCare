import type { CommonIconProps } from "../../interfaces/commonIconProps";

import BaseIcon from "./BaseIcon";

const IconChevronsLeft = (props: CommonIconProps) => {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7l-5 5l5 5" />
      <path d="M17 7l-5 5l5 5" />
    </BaseIcon>
  );
};

export default IconChevronsLeft;
