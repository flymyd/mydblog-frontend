import FooterStyle from "@/assets/css/Framework/Footer.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import {useEffect, useState} from "react";
import {get} from "@/utils/request";

function Footer() {
  const width = useWindowWidth();
  const [visitors, setVisitors] = useState(0)
  useEffect(() => {
    get('/caches/getLastDayVisitors').then((res: any) => {
      if (res.statusCode === 200) {
        setVisitors(res?.data ?? 0)
      }
    })
  }, [])
  return (
    <div
      className={['flex items-center justify-center', 'flex-col', FooterStyle['blog-footer']].join(" ")}
      style={{fontSize: width < 768 ? 14 : 16, fontWeight: 200}}
    >
      <span>Copyleft © 2022 Flymyd. All rights not reserved.</span>
      <span style={width < 768 ? {marginTop: 10} : {marginLeft: 20}}>Deployed on Vercel, Accelerated & Secured by Cloudflare.</span>
      {
        visitors ?
          <span style={width < 768 ? {marginTop: 10} : {marginLeft: 20}}>24小时内独立访客数：{visitors}</span> : <></>
      }
    </div>
  )
}

export default Footer;