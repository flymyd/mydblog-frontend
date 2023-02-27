import {FC} from "react"
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";
import {useNavigate} from "react-router-dom";
import ProjectsStyle from "@/assets/css/views/Projects.module.scss";
import {CONST} from "@/utils/CONST";

const projectsList = [
  {img: '3bfe26be-2ac4-4dff-a28a-19c16f442e47', route: 'https://kuonnjiarisu.top/', title: '有珠珠的日记本'},
]
const FriendlyLink: FC = () => {
  const navigate = useNavigate()
  const clickCard = (route: string | Function) => {
    if (typeof route === "string") {
      window.open(route)
    } else route();
  }
  return (
    <>
      <PageTitle title="友情链接" subtitle="在家靠父母，出门靠朋友"/>
      <FluidWrapper>
        <div className={ProjectsStyle.grids}>
          <ul>
            {projectsList.map(v => {
              return <div key={v.route}>
                <li style={{
                  background: `url(${CONST.obsPath + v.img}) no-repeat`,
                  backgroundSize: '100% 100%',
                  cursor: 'pointer'
                }} onClick={() => {
                  clickCard(v.route)
                }}>
                  <div className="flex flex-row items-center justify-center" style={{height: 240, width: '100%'}}>
                    <span style={{color: '#FFF'}}>{v.title}</span>
                  </div>
                </li>
              </div>
            })}
          </ul>
        </div>
      </FluidWrapper>
    </>
  )
}
export default FriendlyLink