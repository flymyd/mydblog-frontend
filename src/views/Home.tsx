import {FC} from "react";
import NewArticles from "@/components/NewArticles";

const HomeWrapperStyle = {minHeight: 'calc(100vh - 44px)'};
const Home: FC = () => {
  return (
    <div style={HomeWrapperStyle}>
      <NewArticles></NewArticles>
    </div>
  )
}
export default Home;