import FooterStyle from "@/assets/css/Framework/Footer.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";

function Footer() {
  const width = useWindowWidth();
  return (
    <div
      className={['flex items-center justify-center', width < 768 ? 'flex-col' : 'flex-row', FooterStyle['blog-footer']].join(" ")}
      style={{fontSize: width < 768 ? 14 : 16, fontWeight: 200}}
    >
      <span>Copyleft © 2022 Flymyd. All rights not reserved.</span>
      {/*<span style={width < 768 ? {marginTop: 10} : {marginLeft: 20}}>待备案</span>*/}
    </div>
  )
}

export default Footer;