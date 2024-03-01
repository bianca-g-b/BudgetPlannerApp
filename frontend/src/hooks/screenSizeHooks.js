import { useEffect } from "react";

export function useHandleScreenSize({ screenWidth, setScreenWidth}) {
    useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ setScreenWidth]);
  return screenWidth;
}

// Modal screen width hook
export function useHandleModalWidth({screenWidth, setModalWidth}) {
    useEffect(() => {
      let modalSize;
      if (screenWidth < 768 && screenWidth > 450) {
        modalSize = 350;
      } else if (screenWidth < 450 && screenWidth > 350) {
        modalSize = 300;
      } else if (screenWidth < 350 && screenWidth > 300) {
        modalSize = 280;
      } else if (screenWidth < 300) {
        modalSize = 235;
      }
      else {
        modalSize = 400;
      }
      setModalWidth(modalSize);
    }, [screenWidth, setModalWidth]);
}