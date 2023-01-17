import {FC} from "react";
import PageTitle from "@/components/PageTitle";
import FluidWrapper from "@/Framework/FluidWrapper";

const About: FC = ()=>{
  return (
    <>
      <PageTitle title="关于我" subtitle="欢迎来到前端妙妙屋！"/>
      <FluidWrapper>
        {/*携剑去 辞别楼外青山 终换得一骑白玉骢过洛阳*/}
        <span style={{fontSize: 24, fontWeight: 600}}>搬迁中...</span>
      </FluidWrapper>
    </>
  )
}
export default About;