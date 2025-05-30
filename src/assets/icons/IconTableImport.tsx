import type { CommonIconProps } from "../../interfaces/commonIconProps";

import BaseIcon from "./BaseIcon";

function IconTableImport(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
      <path d="M3 10h18" />
      <path d="M10 3v18" />
      <path d="M19 22v-6" />
      <path d="M22 19l-3 -3l-3 3" />
    </BaseIcon>
  );
}

export default IconTableImport;
