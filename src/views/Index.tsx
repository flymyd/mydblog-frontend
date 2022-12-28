import {FC} from "react";
import {Header} from "@/Framework/Header";
import {MainBody} from "@/Framework/MainBody";
import '@/assets/css/Framework/HideScrollBar.css'
import Footer from "@/Framework/Footer";

export const Framework: FC = () => {
  return (
    <div className="blog-framework">
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  )
}