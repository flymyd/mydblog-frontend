import React, {FC, useState} from "react";
import FluidWrapper from "@/Framework/FluidWrapper";
import HeaderStyle from '@/assets/css/Framework/Header.module.scss';
import {NavLink} from "react-router-dom";
import {Icon} from '@iconify/react';
import useScrollTop from "@/hooks/useScrollTop";
import {css} from "@emotion/react";
import HeaderDrawer from "@/Framework/HeaderDrawer";
import useWindowWidth from "@/hooks/useWindowWidth";
import {NavType} from "@/types/NavType";

export const Header: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const windowWidth = useWindowWidth();
  const navList: Array<NavType> = [
    {route: '/', name: "首页"},
    {route: '/Archives/1', name: "归档"},
    {route: '/Categories', name: "分类"},
    // {route: '/Tags', name: "Tags"},
    {route: '/FriendlyLink', name: "友情链接"},
    {route: '/Projects', name: "Projects"},
    {route: '/About', name: "关于我"},
    {
      route: '',
      type: 'icon',
      icon: <img key='github'
                 style={{width: 30, height: 30, cursor: 'pointer', margin: windowWidth < 768 ? '8px 0' : ''}}
                 onClick={() => {
                   window.open('https://github.com/flymyd/mydblog-frontend')
                 }}
                 src='https://mydblog.obs.cn-east-3.myhuaweicloud.com/files/c24e12a7-12e1-4bf0-b43b-e63692cfd9f2'/>
    },
  ];
  const switchDrawer = () => {
    setShowDrawer((prevState: boolean) => (!prevState))
  }
  const scrollTop = useScrollTop();
  const getHeaderBackground = (): React.CSSProperties => {
    const style: React.CSSProperties = {background: '#000'};
    if (!showDrawer) {
      scrollTop <= 44 ? style.background = `rgba(51,51,51,${1 - scrollTop * (0.3 / 44)})` : style.background = 'rgba(51,51,51,0.7)'
    }
    return style;
  };
  const filter = css(`
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
  `)

  return (
    <div className={HeaderStyle["blog-header"]}
         style={getHeaderBackground()}
         css={filter}>
      <FluidWrapper>
        <div className={HeaderStyle["blog-header-wrapper"]}>
          <div className="flex flex-row items-center">
            <span className={HeaderStyle["blog-header-nav-drawer-icon"]} onClick={() => {
              switchDrawer()
            }}><DrawerIcon showDrawer={showDrawer}/></span>
            <NavLink to="/" className={({isActive}) =>
              isActive ? HeaderStyle["blog-header-cell-active"] : HeaderStyle["blog-header-cell"]
            }
                     onClick={() => showDrawer ? setShowDrawer(false) : ""}
            >
              MYD's Blog
            </NavLink>
          </div>
          <div className={[HeaderStyle["blog-header-wrapper"], HeaderStyle["blog-header-right-wrapper"]].join(' ')}>
            {navList.map(node => node.route !== '/' ?
              node?.type != 'icon' ? <NavLink key={node.name} to={node.route} className={({isActive}) =>
                isActive && node.route !== '/' ? HeaderStyle["blog-header-cell-active"] : HeaderStyle["blog-header-cell"]
              }>
                {node.name}
              </NavLink> : node.icon : '')}
          </div>
        </div>
      </FluidWrapper>
      {
        windowWidth < 768 ? <HeaderDrawer navList={navList} show={showDrawer} closeDrawer={() => {
          setShowDrawer(false)
        }}></HeaderDrawer> : <></>
      }
    </div>
  )
}

const DrawerIcon = (props: { showDrawer: boolean }) => {
  return (
    props.showDrawer ? <Icon icon="akar-icons:cross"/> :
      <Icon icon="akar-icons:three-line-horizontal"/>
  )
}
