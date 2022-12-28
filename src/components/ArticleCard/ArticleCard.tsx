import {FC, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState} from "react";
import {
  ArticleCardStyleConfig, articleWrapperStyle,
  dateStyle, getTagStyle,
} from "@/components/ArticleCard/ArticleCardStyle";
import {useNavigate} from "react-router-dom";
import {ArticleCardType} from "@/types/ArticleCardType";
import {get} from "@/utils/request";

const ArticleCard: FC<ArticleCardType> = (props: ArticleCardType, context) => {
  const [picURL, setPicUrl] = useState('');
  const getPoster = (uuid: any): any => {
    if (uuid) {
      get('/myfiles/getPic?uuid=' + uuid).then((res: any) => {
        if (res.statusCode === 200) {
          setPicUrl(res.data)
        } else setPicUrl('')
      })
    }
  }
  useEffect(() => {
    getPoster(props.poster)
  }, [props.poster])
  const {type = "medium", title, createdDate, poster, tags, id, abstract} = props;
  const style = new ArticleCardStyleConfig(type);
  const navigate = useNavigate();
  const toDetail = (id: number) => {
    navigate('/Detail?id=' + id)
  }
  return (
    // 大号卡片使用左右布局，文字纵向两端对齐
    // 其它卡片使用上下布局
    <div style={articleWrapperStyle}
         onClick={() => toDetail(id)}
         className={style.articleCardStyleConfig().root}>
      {
        poster ? (picURL ? <img style={style.articleCardStyleConfig().img} src={picURL} alt={title}/> :
            <div style={style.articleCardStyleConfig().img}>图片加载中...</div>) :
          <div style={style.articleCardStyleConfig().img}
               className="flex flex-row items-center justify-center bg-gray-500">暂无图片</div>
      }
      <div className="flex flex-col justify-between bg-white" style={style.getTextWrapperStyle()}>
        <div className="flex flex-col">
          <span style={style.articleCardStyleConfig().title}>{title}</span>
          {/*{*/}
          {/*  tags ? <div className="flex flex-row items-center" style={{marginTop: 5, gap: 10}}>*/}
          {/*    {tags.map(v =>*/}
          {/*      <div key={v.id} className="flex flex-row items-center justify-center" style={getTagStyle()}>*/}
          {/*        <span>{v.name}</span>*/}
          {/*      </div>*/}
          {/*    )}*/}
          {/*  </div> : <></>*/}
          {/*}*/}
          {
            tags ? <span style={{
              color: '#6E6E73',
              fontSize: 12,
              fontWeight: 700,
              marginTop: 8
            }}>{tags.map(v => v.name).join(", ")}</span> : <></>
          }
        </div>
        {
          type === "large" || "medium" && abstract ?
            <span style={style.articleCardStyleConfig().abstract}>{abstract}</span> : <></>
        }
        <span style={dateStyle}>{new Date(createdDate).toLocaleString('zh-Hans-CN')}</span>
      </div>
    </div>
  )
}

export default ArticleCard;