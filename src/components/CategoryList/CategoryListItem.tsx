import {FC, useContext} from "react";
import CategoryContext from "@/components/CategoryList/Context";
import {CategoryListItemType} from "@/components/CategoryList/CategoryList";
import {animated} from "react-spring";
import {css} from "@emotion/react";

const liStyle = css(`
  cursor: pointer;
  color: #1D1D1F;
  font-size: 14px;
  margin: 6px 0;
  padding: 6px 8px;
`)
const CategoryListItem: FC<{ children: Array<CategoryListItemType> }> = ({children}) => {
  const context = useContext(CategoryContext)
  return (
    <animated.ul>
      {children.map(item => (
        <li css={liStyle} style={context.choseId == item.value ? {background: '#f5f5f7', color: '#06C'} : {}}
            key={item.value}
            onClick={() => {
              if (context.choseId === item.value) {
                context.setChoseId('')
              } else context.setChoseId(item.value)
            }}>{item.label}</li>
      ))}
    </animated.ul>
  )
}
export default CategoryListItem;