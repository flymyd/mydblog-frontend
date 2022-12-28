import {css} from "@emotion/react";
import React, {CSSProperties, FC} from "react";

const FluidWrapperChildStyle = css`
  width: 980px;
  align-items: center;
  @media only screen and (max-width: 1023px) and (max-device-width: 736px) {
    width: 90%;
  }
`
const FluidWrapper: FC<{ children: React.ReactNode, style?: CSSProperties, alignStart?: boolean }> = (props) => {
  const FluidWrapperStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: ${props.alignStart ? 'stretch' : 'center'};
  `
  return (
    <div css={FluidWrapperStyle} style={props.style}>
      <div css={FluidWrapperChildStyle}>
        {props.children}
      </div>
    </div>
  )
}
export default FluidWrapper;
