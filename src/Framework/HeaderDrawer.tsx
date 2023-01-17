import React, {FC} from "react";
import {css} from "@emotion/react";
import {NavLink} from "react-router-dom";
import {animated, useSpring} from "react-spring";
import useWatch from "@/hooks/useWatch";
import {NavType} from "@/types/NavType";

const HeaderDrawerCSS = css(`
  position: fixed;
  top: 44px;
  width: 100vw;
  background-color: #000;
  padding-top: 10px;
  overflow: hidden;
`)
const HeadDrawerCellCSS = css(`
  font-size: 17px;
  height: 44px;
  display: flex;
  align-items: center;
`)

interface HeaderDrawerProps {
  navList: Array<NavType>,
  closeDrawer: Function,
  show: boolean
}

const HeaderDrawer: FC<HeaderDrawerProps> = ({navList, closeDrawer, show}) => {
  const showStyle = {height: '100vh', opacity: 100}
  const hiddenStyle = {height: '0vh', opacity: 0};
  const [animation, api] = useSpring(() => ({...hiddenStyle}))
  useWatch(show, (newVal: boolean, oldVal: boolean) => {
    api.stop()
    if (newVal && !oldVal) {
      api.start({...showStyle})
    } else if (!newVal && oldVal) {
      api.start({...hiddenStyle})
    }
  })
  return (
    <animated.div style={animation} css={HeaderDrawerCSS} className="flex flex-row justify-center items-start">
      <div style={{width: '90%'}} className="flex flex-col justify-center">
        {navList.map(nav => nav?.type != 'icon' ? <NavLink to={nav.route} key={nav.route}
                                                           onClick={() => {
                                                             closeDrawer()
                                                           }}
                                                           css={HeadDrawerCellCSS} style={({isActive}) =>
          isActive && nav.route !== '/' ? {color: "white"} : {color: 'rgba(245,245,247,0.8)'}
        }>{nav.name}</NavLink> : nav.icon)}
      </div>
    </animated.div>
  )
}
export default HeaderDrawer;
