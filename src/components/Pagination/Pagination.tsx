import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {css} from "@emotion/react";
import PaginationButton from "@/components/Pagination/PaginationButton";

interface PaginationType {
  pageNum: number, //当前页码
  setPageNum: SetStateAction<any>,
  totalPage: number,  //总页数
  defaultPage?: number, //默认第X页
}

const PaginationStyle = css(`margin: 60px 0`)
const PaginationContentStyle = css(`
    padding: 0 22px;
    max-width: 330px;
    margin: 0 auto;
`)
const PaginationTextStyle = css(`
    font-size: 17px;
    line-height: 1.47059;
    font-weight: 400;
    text-align: center;
    flex: 1 0 1px;
    user-select: none;
`)
const Pagination: FC<PaginationType> = ({totalPage, defaultPage = 1, pageNum, setPageNum}) => {
  const onPrevPage: any = () => {
    if (pageNum <= 1) return false;
    setPageNum((state: number) => (state - 1))
  }
  const onNextPage: any = () => {
    if (pageNum >= totalPage) return false;
    setPageNum((state: number) => (state + 1))
  }
  return (
    <div css={PaginationStyle}>
      <div className="flex flex-row items-center content-center" css={PaginationContentStyle}>
        <PaginationButton type="left" onClick={onPrevPage}/>
        <div css={PaginationTextStyle}>
          <span>第 </span>
          <span className="pagination-num">{pageNum}</span>
          <span> / </span>
          <span className="pagination-num">{totalPage}</span>
          <span> 页</span>
        </div>
        <PaginationButton type="right" onClick={onNextPage}/>
      </div>
    </div>
  )
}
export default Pagination;