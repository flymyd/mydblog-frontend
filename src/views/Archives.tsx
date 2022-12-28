import {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PageTitle from "../components/PageTitle";
import FluidWrapper from "../Framework/FluidWrapper";
import Pagination from "@/components/Pagination/Pagination";
import FilterRow from "@/components/FilterRow/FilterRow";
import {FreeObject} from "@/types/FreeObject";
import {get} from "@/utils/request";
import qs from 'qs';
import ArchivesListCard from "@/components/ArchivesListCard/ArchivesListCard";
import {monthDict} from "@/utils/MonthDict";

const Archives: FC = () => {
  const navigate = useNavigate()
  const [pageNum, setPageNum] = useState(Number(useParams().page))
  const [archiveTree, setArchiveTree] = useState<FreeObject>({})
  const [monthList, setMonthList] = useState([])
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const onSelectChange = (e: any) => {
    const {name, value} = e.target;
    switch (name) {
      case "year":
        setYear(value)
        setMonth('')
        setMonthList([])
        if (value) {
          setMonthList(archiveTree[value].map((v: string) => ({
            label: v,
            value: v
          })))
        }
        break;
      case "month":
        setMonth(value)
        break;
    }
  }
  useEffect(() => {
    get('/article/archives/count').then((res: any) => {
      if (res.statusCode === 200) {
        const archivesTree: FreeObject = {}
        res.data.forEach((obj: FreeObject) => {
          if (!Object.hasOwn(archivesTree, obj.year)) {
            archivesTree[obj.year] = [];
          }
          archivesTree[obj.year].push(obj.month)
        })
        setArchiveTree(archivesTree)
      }
    })
  }, [])
  useEffect(() => {
    if (pageNum === 1) {
      doSearch()
    } else {
      setPageNum(1)
    }
  }, [year, month])
  useEffect(() => {
    navigate(`/Archives/${pageNum}`)
    doSearch()
  }, [pageNum])
  const [totalPages, setTotalPages] = useState(1);
  const [articles, setArticles] = useState<FreeObject>({});
  const doSearch = () => {
    const searchParams: FreeObject = {year, month, pageNum, pageSize: 5};
    Object.keys(searchParams).forEach(k => {
      if (!searchParams[k]) {
        delete searchParams[k]
      }
    })
    get(`/article/archives?${qs.stringify(searchParams)}`).then((res: any) => {
      if (res.statusCode === 200) {
        const articleRes = res?.data?.items ?? [];
        const articleList: FreeObject = {};
        articleRes.forEach((article: FreeObject) => {
          const createdDate = new Date(article.createdDate);
          const month = monthDict[createdDate.getMonth() + 1]
          const key = month + ' ' + createdDate.getFullYear();
          if (Object.hasOwn(articleList, key)) {
            articleList[key].push(article)
          } else articleList[key] = [article]
        })
        setArticles(articleList)
        setTotalPages(res?.data?.meta?.totalPages ?? 1)
      }
    })
  }
  return (
    <>
      <div style={{minHeight: 'calc(100vh - 44px)'}} className="flex flex-col">
        <PageTitle title="归档，现以时间排序" subtitle="How time flies"/>
        <FilterRow showIcon={false} elements={[
          {
            type: 'select',
            name: 'year',
            onChange: onSelectChange,
            dataSource: [{label: '全部年份', value: ''}, ...Object.keys(archiveTree).map(v => ({
              label: String(v),
              value: v
            }))]
          }, {
            type: 'select',
            name: 'month',
            disabled: !year,
            onChange: onSelectChange,
            dataSource: [{label: '全部月份', value: ''}, ...monthList]
          }
        ]}></FilterRow>
        <div className="bg-white">
          <FluidWrapper alignStart style={{flex: 1}}>
            <div>
              {Object.keys(articles).map((k: string) => {
                return <div key={k}>
                  <div style={{marginTop: 52, marginBottom: 16}}>
                    <span style={{fontSize: 28, fontWeight: 600}}>{k}</span>
                  </div>
                  {
                    articles[k].map((article: FreeObject) => {
                      return <ArchivesListCard key={article.id} article={article}/>
                    })
                  }
                </div>
              })}
              <Pagination totalPage={totalPages} pageNum={pageNum} setPageNum={setPageNum}></Pagination>
            </div>
          </FluidWrapper>
        </div>
      </div>
    </>
  )
}
export default Archives;