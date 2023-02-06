import {FC} from "react";
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";
import ProjectsStyle from "@/assets/css/views/Projects.module.scss";
import {useNavigate} from "react-router-dom";
import {CONST} from "@/utils/CONST";

const projectsList = [
  {img: 'a145094a-e1e5-47cb-a85a-0ba278620e9f', route: '/Escape'},
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
                <li style={{background: `url(${CONST.obsPath + v.img})`, cursor: 'pointer'}} onClick={() => {
                  clickCard(v.route)
                }}>
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