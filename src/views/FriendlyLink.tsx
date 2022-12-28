import {FC} from "react"
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";

const FriendlyLink: FC = () => {
  return (
    <>
      <PageTitle title="友情链接" subtitle="在家靠父母，出门靠朋友"/>
      <FluidWrapper>
        <span style={{fontSize: 24, fontWeight: 600}}>广告位招租...</span>
      </FluidWrapper>
    </>
  )
}
export default FriendlyLink