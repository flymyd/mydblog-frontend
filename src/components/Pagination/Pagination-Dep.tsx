import {FC} from "react";
import {css} from "@emotion/react";
import {Icon} from "@iconify/react";

interface PaginationType {
  total: number,  //总条目数
  pageSize?: number,  //每页条目数，默认5
  pagerCount?: number,  //页码按钮数，默认5
}

const pagerButtonType = css(`
  
`)

const PaginationDep: FC<PaginationType> = ({total, pagerCount = 5, pageSize = 5}) => {
  const getPager = () => {
    const pagerCountNum = Math.ceil(total / pageSize);
    const pagerNum = Math.min(pagerCountNum, pagerCount);
    const pageCounterRender = new Array(pagerNum).fill('').map((v, i) =>
      <button>{i + 1}</button>)
    const isShowMore = pagerCountNum > pagerCount;
    const gridColsStyle = css(`grid-template-columns: repeat(${isShowMore ? pagerNum + 1 : pagerNum}, minmax(0, 1fr));`)
    return (
      <div style={{flex: 1}}>
        <div className="grid grid-rows-1" css={gridColsStyle}>
          {pageCounterRender}
          {isShowMore ? <button>...</button> : ""}
        </div>

      </div>
    )
  }
  return (
    <div className="flex flex-row items-center content-center">
      {/*上一页按钮*/}
      <Icon icon="akar-icons:chevron-left"/>
      {/*页码按钮*/}
      {getPager()}
      {/*下一页按钮*/}
      <Icon icon="akar-icons:chevron-right"/>
      <div className="flex flex-row items-center content-center justify-between">

      </div>
    </div>
  )
}
export default PaginationDep;