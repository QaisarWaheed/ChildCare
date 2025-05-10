import type { CommonIconProps } from "../../interfaces/commonIconProps";

import BaseIcon from "./BaseIcon";

function IconChartSankey(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3v18h18" />
      <path d="M3 6h18" />
      <path d="M3 8c10 0 8 9 18 9" />
    </BaseIcon>
  );
}

export default IconChartSankey;
