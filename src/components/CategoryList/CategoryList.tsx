import {FC} from "react";
import CategoryListItem from "@/components/CategoryList/CategoryListItem";
import {textButton} from "@/utils/NoSelect";

interface CategoryListType {
  options: Array<CategoryListItemType>
}

export interface CategoryListItemType {
  value: number,
  label: number | string,
  children?: Array<CategoryListItemType>
}

const CategoryList: FC<CategoryListType> = ({options}) => {
  return (
    <ul css={textButton} style={{width: '80%', position: 'sticky', top: 50}}>
      {options.map(row => {
        return <li key={row.value}>
          <h3 style={{
            cursor: 'default',
            margin: '12px 8px',
            fontSize: 14,
            fontWeight: 600,
            color: '#1D1D1F'
          }}>{row.label}</h3>
          {row.children ? <CategoryListItem children={row.children}></CategoryListItem> : ""}
        </li>
      })}
    </ul>
  )
}


export default CategoryList;