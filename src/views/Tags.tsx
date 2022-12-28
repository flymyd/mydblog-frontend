import {FC} from "react";
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";

const Tags: FC = () => {
  return (
    <>
      <PageTitle title="选择你喜欢的Tag" subtitle="然后随便看点什么"/>
      <FluidWrapper>
        <span style={{fontSize: 24, fontWeight: 600}}>开发中...</span>
      </FluidWrapper>
    </>
  )
}
export default Tags;