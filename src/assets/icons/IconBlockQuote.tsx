import type { CommonIconProps } from "../../interfaces/commonIconProps";

import BaseIcon from "./BaseIcon";

function IconBlockQuote(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15h15" />
      <path d="M21 19h-15" />
      <path d="M15 11h6" />
      <path d="M21 7h-6" />
      <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
      <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
    </BaseIcon>
  );
}

export default IconBlockQuote;
