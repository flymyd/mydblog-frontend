import {useRoutes} from 'react-router-dom';
import './App.css'
import router from './router/index';
import '@/assets/css/Framework/HideScrollBar.css'
import {useEffect} from "react";
import stingerTrigger from "@/utils/stinger";

function App() {
  let element = useRoutes(router);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [element])
  // useEffect(() => {
  //   stingerTrigger()
  // }, [])
  return <div className="App">{element}</div>;
}

export default App;
