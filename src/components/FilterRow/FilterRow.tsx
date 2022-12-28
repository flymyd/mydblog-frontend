import {FC} from "react";
import {Icon} from "@iconify/react";
import FluidWrapper from "@/Framework/FluidWrapper";
import {css} from "@emotion/react";
import FilterRowStyle from '@/assets/css/components/FilterRow.module.scss';
import {noSelect} from "@/utils/NoSelect";
import useWindowWidth from "@/hooks/useWindowWidth";

const dividerStyle = "solid 1px #DDD";
const filterRowStyle = css`
  padding: 20px 0;
  @media only screen and (max-width: 1023px) and (max-device-width: 736px) {
    padding: 15px 0;
  }
`

interface FilterRowType {
  showIcon?: boolean,
  showReset?: boolean,
  onReset?: any,
  elements?: Array<{
    type: 'input' | 'select',
    name: string,
    dataSource?: any,
    initialValues?: any,
    label?: string,
    onChange?: any,
    disabled?: boolean
  }>
}

const FilterRow: FC<FilterRowType> = (props) => {
  const screenWidth = useWindowWidth();
  return (
    <FluidWrapper style={{borderBottom: dividerStyle}}>
      <div className="flex flex-row items-center align-center" css={filterRowStyle}
           style={screenWidth < 768 ? {flexDirection: 'column', alignItems: 'flex-start'} : {}}>
        <div className="flex flex-row items-center align-center"
             style={screenWidth < 768 ? {marginBottom: 12} : {marginRight: 12}}>
          {props.showIcon === false ? <></> : <Icon icon="carbon:collapse-categories" style={{marginRight: 5}}/>}
          <span css={noSelect}
                style={{
                  color: props.showIcon === false ? '#6E6E73' : '#1D1D1F',
                  fontSize: 14,
                  fontWeight: 700
                }}>筛选</span>
        </div>
        <div className="flex flex-row items-center align-center flex-1" style={screenWidth < 768 ? {flexDirection: 'column', alignItems: 'flex-start'} : {}}>
          {
            props.elements ? props.elements.map((el: any) => {
              let slotElement = <></>;
              if (el.type == 'select') {
                slotElement = <div style={{paddingRight: 10, background: 'white', borderRadius: 5}}>
                  <select disabled={el.disabled} name={el.name} onChange={el.onChange}
                          className={FilterRowStyle["filter-row__select"]}>
                    {
                      el.dataSource ? el.dataSource.map((opts: any) => {
                        return <option className={FilterRowStyle["filter-row__options"]} value={opts.value}
                                       key={opts.value}>{opts.label}</option>
                      }) : <></>
                    }
                  </select>
                </div>;
              } else if (el.type == 'input') {
                slotElement = <input/>;
              }
              return <div style={screenWidth < 768 ? {marginBottom: 12} : {marginLeft: 12}} key={el.name}>
                {el.label ? <span>{el.label}</span> : <></>}
                {slotElement}
              </div>
            }) : <></>
          }
          {
            props.showReset ?
              <span style={{marginLeft: 24, fontSize: 14, fontWeight: 600, color: '#0066CC'}}
                    onClick={props.onReset}>重置</span> : <></>
          }
        </div>
      </div>
    </FluidWrapper>
  )
}
export default FilterRow;