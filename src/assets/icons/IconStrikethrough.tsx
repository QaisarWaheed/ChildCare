import type { CommonIconProps } from "../../interfaces/commonIconProps";

import BaseIcon from "./BaseIcon";

function IconStrikethrough(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5" />
    </BaseIcon>
  );
}

export default IconStrikethrough;
