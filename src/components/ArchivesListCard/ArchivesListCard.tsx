import {FC, useEffect, useState} from "react";
import {FreeObject} from "@/types/FreeObject";
import useWindowWidth from "@/hooks/useWindowWidth";
import {textButton} from "@/utils/NoSelect";
import {useNavigate} from "react-router-dom";
import {get} from "@/utils/request";

const ArchivesListCard: FC<{ article: FreeObject, border?: boolean }> = ({
                                                                           article,
                                                                           border: hasBorder = true
                                                                         }, context) => {
  const windowWidth = useWindowWidth();
  const navi = useNavigate();
  const goDetail = (id: number) => {
    navi('/Detail?id=' + id)
  }
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
    getPoster(article.poster)
  }, [article.poster])
  return (
    <div style={{
      borderTop: hasBorder ? '1px solid #d2d2d7' : 'none',
      minHeight: 230,
      padding: '32px 0',
      flexDirection: windowWidth < 768 ? 'column' : 'row',
      alignItems: windowWidth < 768 ? 'flex-start' : 'center'
    }} onClick={() => {
      goDetail(article.id)
    }} css={textButton} className="flex">
      <img alt="暂无图片" src={picURL} style={{borderRadius: 16, width: 295, height: 166}}/>
      <div className="flex flex-col" style={windowWidth < 768 ? {marginLeft: 16, marginTop: 16} : {marginLeft: 32}}>
        <span style={{
          color: '#6e6e73',
          fontSize: 12,
          fontWeight: 700
        }}>{article.tags.length > 0 ? article.tags.map((tag: FreeObject) => tag.name).join(", ") : '记录'}</span>
        <span style={{fontSize: 24, fontWeight: 700, lineHeight: '60px'}}>{article.title}</span>
        <span style={{
          color: '#6e6e73',
          fontSize: 14,
          fontWeight: 600
        }}>{new Date(article.createdDate).toLocaleString('zh-Hans-CN')}</span>
      </div>
    </div>
  )
}
export default ArchivesListCard;