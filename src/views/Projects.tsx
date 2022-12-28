import {FC} from "react";
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";

const Projects: FC = () => {
  return (
    <>
      <PageTitle title="有趣的Projects" subtitle="有时候也许不有趣，但可能有用"/>
      <FluidWrapper>
        <span style={{fontSize: 24, fontWeight: 600}}>搬迁中...</span>
      </FluidWrapper>
    </>
  )
}
export default Projects;