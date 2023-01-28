import axios from "axios";

const imgUrl = new URL('/stinger.gif', import.meta.url).href

function blobToBase64(blob: any, callback: any) {
  const fileReader = new FileReader();
  fileReader.onload = (e: any) => {
    callback(e.target.result);
  };
  fileReader.readAsDataURL(blob);
}

const stingerTrigger = () => {
  axios.get(imgUrl, {
    responseType: 'blob'
  }).then((response) => {
    console.clear()
    blobToBase64(response.data, (dataUri: any) => {
      const style = `font-size: 300px; background-image: url("${dataUri}"); background-size: contain; background-repeat: no-repeat;`;
      console.log("嗨哟 你打开控制台干嘛~\n\n%c     ", style);
    });
  }).catch((err) => {
    console.error(err)
  });
}
export default stingerTrigger;