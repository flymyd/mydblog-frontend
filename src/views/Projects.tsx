import {FC} from "react";
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";
import ProjectsStyle from "@/assets/css/views/Projects.module.scss";
import {useNavigate} from "react-router-dom";

const projectsList = [
  {img: '', title: '前端逃生舱', route: '/Escape'}
]
const Projects: FC = () => {
  const navigate = useNavigate()
  const clickCard = (route: string) => {
    navigate(route)
  }
  return (
    <>
      <PageTitle title="有趣的Projects" subtitle="有时候也许不有趣，但可能有用"/>
      <FluidWrapper>
        <div className={ProjectsStyle.grids}>
          <ul>
            {projectsList.map(v => {
              return <div>
                <li style={{backgroundImage: v.img, cursor: 'pointer'}} onClick={() => {
                  clickCard(v.route)
                }}>
                  <span>{v.title}</span>
                </li>
              </div>
            })}
          </ul>
        </div>
      </FluidWrapper>
    </>
  )
}
export default Projects;