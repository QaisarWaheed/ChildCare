import type { CommonIconProps } from "../../interfaces/commonIconProps";

import BaseIcon from "./BaseIcon";

function IconBrandMasterCard(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 15l-1 -6l-2.5 6" />
      <path d="M9 15l1 -6" />
      <path d="M3 9h1v6h.5l2.5 -6" />
      <path d="M16 9.5a.5 .5 0 0 0 -.5 -.5h-.75c-.721 0 -1.337 .521 -1.455 1.233l-.09 .534a1.059 1.059 0 0 0 1.045 1.233a1.059 1.059 0 0 1 1.045 1.233l-.09 .534a1.476 1.476 0 0 1 -1.455 1.233h-.75a.5 .5 0 0 1 -.5 -.5" />
      <path d="M18 14h2.7" />
    </BaseIcon>
  );
}

export default IconBrandMasterCard;
