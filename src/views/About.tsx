import {FC, useEffect, useLayoutEffect, useRef, useState} from "react";
import PageTitle from "@/components/PageTitle";
import FluidWrapper from "@/Framework/FluidWrapper";
import Resume from "@/components/Resume";

const About: FC = () => {
  return (
    <>
      <PageTitle title="关于我" subtitle="欢迎来到前端妙妙屋！"/>
      <FluidWrapper>
        {/*携剑去 辞别楼外青山 终换得一骑白玉骢过洛阳*/}
        <div className="mt-3 mb-3">
          <Resume />
        </div>
      </FluidWrapper>
    </>
  )
}
export default About;