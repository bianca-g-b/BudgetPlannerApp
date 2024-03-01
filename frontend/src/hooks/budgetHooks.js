import { useEffect } from 'react';

/*BUDGET PAGE HOOKS*/

// Fetch data hook
export function useFetchData({dispatch, getBudgetList, csrfToken, setBudgetList, currentPage, setCurrentBudgets }) {
    useEffect(() => {
      dispatch(getBudgetList(csrfToken))
        .then((action) => {
          if (getBudgetList.fulfilled.match(action)) {
            dispatch(setBudgetList(action.payload));
            const firstIndex = (currentPage-1) * 10;
            const lastIndex = firstIndex + 10;
            dispatch(setCurrentBudgets(action.payload.slice(firstIndex, lastIndex)));
          }
        })
    }, [dispatch, csrfToken, currentPage, getBudgetList, setBudgetList, setCurrentBudgets]);
}

// Clicked table row class name hook
export function useClickedClassName({clicked, id, setIsClicked}) {
    useEffect(() => {
        if (clicked === id) {
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }
    }, [clicked, id, setIsClicked])
}

// Set total pages in pagination hook
export function useSetTotalPages({setTotalPages, budgetList}) {
    useEffect(() => {
        setTotalPages(Math.ceil(budgetList.length/10));
    },[budgetList, setTotalPages])
}

// Hook to update value of budget, id, clicked every time current budgets and current page change
export function useUpdateValues({currentBudgets, currentPage, dispatch, navigate, setBudgetById, setId, setClicked, getBudgetById}) {
    useEffect(() => {
        if (currentBudgets.length > 0 && currentPage) {
            dispatch(setClicked(currentBudgets[0].id));
            navigate(`/dashboard/page=${currentPage}/${currentBudgets[0].id}`)
            dispatch(getBudgetById(currentBudgets[0].id))
            dispatch(setBudgetById(currentBudgets[0]));
            dispatch(setId(currentBudgets[0].id));
        }
    } ,[currentBudgets,currentPage, dispatch, navigate, getBudgetById, setBudgetById, setId, setClicked])
}

// Hook to set padding for totals items
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


  /*BUDGET FORM INPUTS HOOKS*/

// Budget form label font size hook
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

// Budget form list font size hook
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
export function useHandleItemFontSize({screenWidth, setItemFontSize, setIconSize, setIconFontSize, setListItemAvatarWidth }) {
    useEffect(() => {
      let labelSize;
      let iconSize;
      let iconFontSize;
      let avatarWidth;
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
          avatarWidth = "40px";
      } else {
          labelSize = "1rem";
          iconSize = "35px";
          iconFontSize = "24px";
          avatarWidth = "56x";
      }
        setItemFontSize(labelSize);
        setIconSize(iconSize);
        setIconFontSize(iconFontSize);
        setListItemAvatarWidth(avatarWidth);
    }, [screenWidth, setItemFontSize, setIconSize, setIconFontSize, setListItemAvatarWidth])
}