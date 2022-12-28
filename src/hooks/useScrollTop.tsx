import {useState, useEffect} from 'react';

function useScrollTop() {
  const [height, setHeight] = useState(document.documentElement.scrollTop || document.body.scrollTop);
  useEffect(() => {
    const handleScroll = () => {
      setHeight(document.documentElement.scrollTop || document.body.scrollTop);
    }
    window.addEventListener('scroll', handleScroll);
  }, [height]);
  return height;
}

export default useScrollTop;