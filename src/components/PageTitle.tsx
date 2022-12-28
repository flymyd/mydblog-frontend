import {css} from "@emotion/react";
import useWindowWidth from "@/hooks/useWindowWidth";
import FluidWrapper from "@/Framework/FluidWrapper";
import {noSelect} from "@/utils/NoSelect";

const PageTitleStyle = css(`
  font-size: 32px;
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: .004em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  `)
const PageSubtitleStyle = css(`
  font-style: italic;
  letter-spacing: .004em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #999;
`)
const PCStyle = css(`
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
`)
const MobileStyle = css(`
  flex-direction: column;
  
`)
const PageTitle = (props: { title: string, subtitle?: string }) => {
  const screenWidth = useWindowWidth();
  return (
    <div className="bg-white" css={noSelect}>
      <FluidWrapper>
        <div className="flex" style={{margin: '24px 0'}} css={screenWidth < 768 ? MobileStyle : PCStyle}>
          <h2 css={PageTitleStyle}>{props.title}</h2>
          {props.subtitle ?
            <h5 css={PageSubtitleStyle} style={{
              marginLeft: screenWidth < 768 ? 0 : '1em',
              marginTop: screenWidth < 768 ? '.5em' : 0
            }}>{props.subtitle}</h5> : <></>}
        </div>
      </FluidWrapper>
    </div>
  )
}
export default PageTitle;