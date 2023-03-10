import React, {CSSProperties} from "react";
import {randomColor} from "@/utils/RandomColor";

export const dateStyle = {fontSize: "14px", fontWeight: 600, color: "#6e6e73", lineHeight: '2em'};
export const getTagStyle = (): CSSProperties => {
  const style: CSSProperties = {
    padding: '3px 8px',
    minWidth: 50,
    color: '#FFF',
    fontSize: 12,
    flexWrap: 'wrap',
    borderRadius: 6
  }
  return {
    ...style,
    background: randomColor()
  }
}
export const articleWrapperStyle: React.CSSProperties = {
  borderRadius: '16px',
  overflow: 'hidden',
  marginBottom: '36px',
  cursor: 'pointer',
  userSelect: 'none'
};

export class ArticleCardStyleConfig {
  private readonly type: string;

  constructor(type: string) {
    this.type = type;
  }

  publicTitleStyle = {
    fontWeight: 700,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
  articleCardStyleConfig = () => {
    let config = {
      root: "flex flex-col",
      img: {width: "100%", height: "266px", objectFit: 'scale-down'},
      imgCover: {background: '#D5D5D7', width: '100%'},
      title: {
        fontSize: "24px",
        ...this.publicTitleStyle
      },
      abstract: {fontSize: 16, lineHeight: '2em', color: '#6E6E73', margin: '10px 0'},
    };
    if (this.type == "large") {
      config = {
        root: "flex flex-row",
        img: {width: "100%", height: "362px", objectFit: 'contain'},
        imgCover: {background: '#D5D5D7', width: '470px'},
        title: {fontSize: "32px", ...this.publicTitleStyle},
        abstract: {fontSize: 16, lineHeight: '2em', color: '#6E6E73', margin: 'none'},
      }
    }
    // if (this.type == "small") {
    //   config.img = {width: "100%", height: "266px", objectFit: 'scale-down'}
    // }
    return config as any;
  }

  getTextWrapperHeight = () => {
    switch (this.type) {
      case "small":
        return "140px";
      case "medium":
        return "174px";
      case "large":
        return "100%";
    }
  }

  getTextWrapperStyle = () => {
    return {flex: 1, padding: this.type == "small" ? "24px" : "32px", minHeight: this.getTextWrapperHeight()}
  }
}