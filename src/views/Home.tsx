import {FC, useEffect} from "react";
import NewArticles from "@/components/NewArticles";

const HomeWrapperStyle = {minHeight: 'calc(100vh - 44px)'};
const Home: FC = () => {
  useEffect(()=>{
    const imgUrl = new URL('./assets/stinger.gif', import.meta.url).href
    console.log("%c", `padding:50px 300px;line-height:120px;background:url(${imgUrl}) no-repeat;`);
    console.log("%c", `padding:50px 300px;line-height:120px;background:url('/stinger.gif') no-repeat;`);
    console.log(
      "%c ",
      `background-image: url(${imgUrl});
      background-size: contain;
      background-repeat: no-repeat;
      padding: 200px;
      `
    )
    console.log(
      "%c ",
      `background-image: url('/stinger.gif');
      background-size: contain;
      background-repeat: no-repeat;
      padding: 200px;
      `
    )
  },[])
  return (
    <div style={HomeWrapperStyle}>
      <NewArticles></NewArticles>
    </div>
  )
}
export default Home;