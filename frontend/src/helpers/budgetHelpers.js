import { useEffect } from 'react';

// Budget form inputs
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

// Budget form
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

// Budget label font size hook
export function useHandleItemFontSize({screenWidth, setItemFontSize, setIconSize, setIconFontSize }) {
    useEffect(() => {
      let labelSize;
      let iconSize;
      let iconFontSize;
      if (screenWidth < 768 && screenWidth > 622) {
        labelSize = "0.9rem";
        iconSize = "30px";
        iconFontSize = "18px"
      } 
      else if (screenWidth < 622 && screenWidth > 555) {
          labelSize = "0.8rem";
          iconSize = "29px";
          iconFontSize= "16px"
      } else if (screenWidth <= 555 ) {
          labelSize = "0.9rem"; 
          iconSize = "25px";
          iconFontSize = "14px"
      } else {
          labelSize = "1rem";
          iconSize = "35px";
          iconFontSize = "24px";
      }
        setItemFontSize(labelSize);
        setIconSize(iconSize);
        setIconFontSize(iconFontSize);
    }, [screenWidth, setItemFontSize, setIconSize, setIconFontSize])
}

// Padding for total items hook in BudgetList
export function useHandleTotalsPadding({screenWidth, setSidesPadding, setTotalVerticalPadding}) {
    useEffect(() => {
      let sidesPadding;
      let verticalPadding;
      if (screenWidth < 760 ) {
        sidesPadding = 0;
        verticalPadding = 0;
      } else {
        sidesPadding = "16px";
        verticalPadding= "8px";
      }
      setSidesPadding(sidesPadding);
      setTotalVerticalPadding(verticalPadding);
    }, [screenWidth, setSidesPadding, setTotalVerticalPadding])
}