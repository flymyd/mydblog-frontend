import React, {FC} from "react"
import {Outlet, useRoutes} from "react-router-dom"
import {css} from "@emotion/react";
import '@/assets/css/Framework/HideScrollBar.css'
export const MainBody: FC<{ children?: React.ReactNode }> = (props) => {
  const MainBodyCSS = css(`
    min-height: calc(100vh - 44px);
    scrollbar-width: none;
    -ms-overflow-style: none;
  `)
  return (
    <div css={MainBodyCSS} className="blog-main-body">
      <Outlet/>
    </div>
  )
}