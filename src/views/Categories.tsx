import {FC, useEffect, useState} from "react";
import FluidWrapper from "../Framework/FluidWrapper";
import PageTitle from "@/components/PageTitle";
import CategoryList from "@/components/CategoryList/CategoryList";
import CategoryContext from "@/components/CategoryList/Context";
import FilterRow from "@/components/FilterRow/FilterRow";
import useWindowWidth from "@/hooks/useWindowWidth";
import {get} from "@/utils/request";
import {FreeObject} from "@/types/FreeObject";
import ArchivesListCard from "@/components/ArchivesListCard/ArchivesListCard";

const Categories: FC = () => {
  const screenWidth = useWindowWidth();
  const [choseId, setCategory] = useState<any>(Number());
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  let setChoseId = (id: number | string) => {
    setCategory(Number(id))
  }
  const getCategoriesList = () => {
    get("/categories").then((res: any) => {
      if (res.statusCode === 200) {
        setCategories(res.data.map((v: any) => ({
          label: v.name,
          value: v.id
        })))
      }
    })
  }
  useEffect(() => {
    getCategoriesList()
  }, [])
  useEffect(() => {
    get('/categories/' + choseId).then((res: any) => {
      if (res.statusCode === 200) {
        const resp = res?.data ?? [];
        const articlesList = resp.map((category: FreeObject) => {
          if (category.articles.length > 0) {
            return category.articles;
          }
        }).filter((v: FreeObject) => v !== undefined).flat();
        const idList: Array<number> = [];
        const resList: any = [];
        articlesList.forEach((v: FreeObject) => {
          if (!idList.includes(v.id)) {
            idList.push(v.id)
            resList.push(v)
          }
        })
        setArticles(resList.sort((a: any, b: any) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()));
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    })
  }, [choseId])
  return (
    <div style={{minHeight: 'calc(100vh - 44px)'}} className="flex flex-col">
      <PageTitle title="按分类浏览文章" subtitle="专注阅读"/>
      {
        screenWidth < 768 ? <FilterRow showIcon={false} elements={[
          {
            type: 'select',
            name: 'year',
            onChange: (e: any) => {
              const {value} = e.target;
              setCategory(value);
            },
            dataSource: [{label: '全部分类', value: ''}, ...categories]
          }
        ]}></FilterRow> : <FilterRow/>
      }
      <FluidWrapper alignStart style={{flex: 1, background: "white"}}>
        <div className="flex flex-row flex-1"
             style={{height: '100%', borderRight: screenWidth < 768 ? '' : '1px solid #d2d2d7'}}>
          {/*筛选器*/}
          {
            screenWidth < 768 ? <></> :
              <div className="categories-left flex flex-col items-start" style={categoriesLeftStyle}>
                <CategoryContext.Provider value={{choseId, setChoseId}}>
                  <CategoryList options={[{
                    value: -1,
                    label: "分类",
                    children: [...categories]
                  }]}/>
                </CategoryContext.Provider>
              </div>
          }
          {/*文章列表*/}
          <div style={{width: '100%'}}>
            {
              articles.map((article: FreeObject, index: number) => {
                return <div className="flex flex-row items-center"
                            key={article.id}
                            style={{
                              padding: screenWidth < 768 ? '' : '0 20px',
                              borderBottom: index < articles.length - 1 ? '1px solid #d2d2d7' : 'none'
                            }}>
                  <ArchivesListCard article={article} border={false}/>
                </div>
              })
            }
            <div className="flex flex-row items-center justify-center" style={{
              padding: 20,
              fontWeight: 600,
              fontSize: 12,
              color: '#6E6E73',
              borderTop: '1px dashed #d2d2d7',
            }}>没有更多了...
            </div>
          </div>
        </div>
      </FluidWrapper>
    </div>
  )
}

const categoriesLeftStyle = {width: '20%', height: '100%', borderRight: "solid 1px #DDD"}
export default Categories;