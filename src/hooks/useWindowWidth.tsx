import {useState, useEffect} from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, [width]); // width 没有变化则不处理
  return width;
}

export default useWindowWidth;