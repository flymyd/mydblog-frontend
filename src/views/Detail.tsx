import React, {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
// import 'github-markdown-css';
import FluidWrapper from "@/Framework/FluidWrapper";
import MarkdownLoader from "@/components/MarkdownLoader/MarkdownLoader";
import {download, get} from "@/utils/request";

const Detail: FC = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [markdown, setMarkdown] = useState("");
  useEffect(() => {
    const id = searchParams.get('id')
    if (id) {
      get('/article/' + id).then((res: any) => {
        console.log(res)
        if (res.statusCode === 200) {
          const data = res.data;
          download('/myfiles/getFile', data.article).then((resp: any) => {
            const read = new FileReader();
            read.readAsText(resp, 'utf-8');
            read.onload = (data: any) => {
              setMarkdown(data.target.result)
            }
          })
        }
      })
    }
  }, [])
  return (
    <>
      <FluidWrapper>
        <div style={{margin: '16px 0'}}>
          <MarkdownLoader markdown={markdown}></MarkdownLoader>
        </div>
      </FluidWrapper>
    </>
  )
}
export default Detail;



