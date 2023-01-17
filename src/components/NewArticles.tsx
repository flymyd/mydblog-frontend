import {FC, useEffect, useState} from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import {JSX} from "@emotion/react/jsx-runtime";
import FluidWrapper from "@/Framework/FluidWrapper";
import {ArticleCardType} from "@/types/ArticleCardType";
import {get} from "@/utils/request";

const newArticleTitleStyle = {
  fontSize: 32,
  lineHeight: 1.125,
  fontWeight: 700,
  letterSpacing: '.004em',
  margin: '24px 0',
  color: 'rgb(29,29,31)'
};
const newArticleRowStyle = {
  medium: {
    gridTemplateRows: "auto",
    gridTemplateColumns: 'repeat(2, 48%)',
    justifyContent: 'space-between'
  },
  small: {
    gridTemplateRows: "auto",
    gridTemplateColumns: 'repeat(3, 31%)',
    justifyContent: 'space-between'
  }
}

const NewArticles: FC = () => {
  const [articleList, setArticleList] = useState<Array<ArticleCardType>>([]);
  useEffect(() => {
    get('/article/index').then((res: any) => {
      if (res.statusCode === 200) {
        setArticleList(res.data)
      }
    })
  }, [])
  const windowWidth: number = useWindowWidth();
  const articleListRender = () => {
    if (windowWidth < 768) return articleList.map(node => {
      const params: any = {...node, type: 'small'};
      return <ArticleCard key={params.id} {...params}></ArticleCard>
    })
    if (articleList.length < 1) {
      return <></>
    } else {
      let largeRow;
      let mediumRow: JSX.Element[] = [];
      let smallRow: JSX.Element[] = [];
      articleList.map((node, index) => {
        const params: any = {
          ...node
        }
        if (index == 0) {
          params.type = "large";
          largeRow = <ArticleCard key={params.id} {...params}></ArticleCard>
        } else if (index < 3) {
          params.type = "medium";
          mediumRow.push(<ArticleCard key={params.id} {...params}></ArticleCard>)
        } else {
          params.type = "small";
          smallRow.push(<ArticleCard key={params.id} {...params}></ArticleCard>)
        }
      })
      return (
        <>
          {largeRow}
          {mediumRow.length > 0 ?
            <div className="grid" style={newArticleRowStyle.medium}>{mediumRow.map(node => node)}</div> : <></>}
          {smallRow.length > 0 ?
            <div className="grid" style={newArticleRowStyle.small}>{smallRow.map(node => node)}</div> : <></>}
        </>
      )
    }
  }
  return (
    <FluidWrapper>
      <p style={newArticleTitleStyle}>最新文章</p>
      {articleList.length>0?articleListRender(): <div>内容加载中...</div>}
    </FluidWrapper>
  )
}
export default NewArticles;