import {ReactNode} from "react";

export interface ArticleCardType {
  type?: "large" | "medium" | "small",
  title?: string,
  createdDate: any,
  poster?: string,
  tags?: Array<any>,
  abstract?: string,
  id: number
}