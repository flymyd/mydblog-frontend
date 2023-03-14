import {FC, useEffect, useRef} from "react";

const MergeCanvasBk: FC<{ avatarUrl: string, text: string }> = ({avatarUrl, text}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");
    const avatar = new Image();
    const image = new Image();
    image.src = 'cat-bg.png';
    avatar.src = avatarUrl;
    image.onload = () => {
      avatar.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 绘制图片到画布上，填充整个画布
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        // 计算头像的位置，使其居中显示
        const x = (canvas.width - avatar.naturalWidth) / 2;
        const y = (canvas.height - avatar.naturalHeight) / 2;
        // 绘制头像到画布上，保持原始尺寸
        context.drawImage(avatar, x, y);
        // 设置文字的样式，例如字体、颜色等
        context.font = "30px Arial";
        context.fillStyle = "white";
        // 计算文字的位置，使其在画布底部居中显示，并留出一定的边距
        const textX = (canvas.width - context.measureText(text).width) / 2;
        const textY = canvas.height - 30;
        // 绘制文字到画布上
        context.fillText(text, textX, textY);
      }
    };
  }, [avatarUrl]); // 如果props变化，重新执行

  return (
    <div>
      {/* 渲染一个canvas元素，并传递ref */}
      <canvas ref={canvasRef} width="500" height="500"/>
    </div>
  );
}

export default MergeCanvasBk;