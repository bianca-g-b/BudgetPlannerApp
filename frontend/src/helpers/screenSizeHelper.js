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


export function useHandleFontSize({screenWidth, setLabelFontSize, setInputFontClass }) {
    useEffect(() => {
      let labelSize;
      let inputSize;
      if (screenWidth < 768 && screenWidth > 622) {
        labelSize = "0.9rem";
        inputSize = "form-control-sm";
    } 
    else if (screenWidth < 622 && screenWidth > 555) {
        labelSize = "0.8rem";
        inputSize = "form-control-sm";   
    } else if (screenWidth < 555) {
        labelSize = "0.9rem";
        inputSize = "form-control-sm"; 
    }
    else {
        labelSize = "1rem";
    }
    setLabelFontSize(labelSize);
    setInputFontClass(inputSize);
    }, [screenWidth, setLabelFontSize, setInputFontClass])
}

export function useHandleFormListFontSize({screenWidth, setListItemFontSize}) {
    useEffect(() => {
      let listItemSize;
      if (screenWidth < 768 ) {
        listItemSize = "form-control-sm";
    } 
    else {
        listItemSize = "";
    }
    setListItemFontSize(listItemSize);
    }, [screenWidth, setListItemFontSize])
}

// modal screen width hook
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

// budget label font size hook
export function useHandleItemFontSize({screenWidth, setItemFontSize}) {
    useEffect(() => {
      let labelSize;
      if (screenWidth < 768 && screenWidth > 622) {
        labelSize = "0.9rem";
      } 
      else if (screenWidth < 622 && screenWidth > 555) {
          labelSize = "0.8rem";   
      } else if (screenWidth < 555) {
          labelSize = "0.9rem"; 
      }
      else {
          labelSize = "1rem";
      }
      setItemFontSize(labelSize);
    }, [screenWidth, setItemFontSize])
}