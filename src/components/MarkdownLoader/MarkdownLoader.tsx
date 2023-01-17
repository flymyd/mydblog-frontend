import 'github-markdown-css/github-markdown-light.css'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark, oneLight} from "react-syntax-highlighter/dist/esm/styles/prism";
import React, {FC} from "react";

const highlighterStyle: any = window.matchMedia('(prefers-color-scheme: dark)').matches ? oneDark : oneLight;
const MarkdownLoader: FC<{ markdown: string }> = ({markdown}) => {
  return (
    <div className="markdown-body" style={{background: "transparent"}}>
      {
        markdown ? <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={highlighterStyle}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        /> : <span>加载中...</span>
      }
      {/*oneLight*/}
      {/*base16AteliersulphurpoolLight*/}
      {/*materialLight*/}
    </div>
  )
}
export default MarkdownLoader;