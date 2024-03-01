/*BUDGET PAGE HELPER FUNCTIONS*/

// Budget by id function
export async function handleBudgetById(id, {dispatch, setId, getBudgetById, setBudgetById, setClicked}) {
    dispatch(setId(id))
    dispatch(getBudgetById(id))
        .then((action)=> {
            if (getBudgetById.fulfilled.match(action)) {
                dispatch(setBudgetById(action.payload))
                dispatch(setClicked(id));
            }
        })
}

// Delete budget function
export async function handleDeleteBudget(id, {dispatch, deleteBudget, csrfToken, setOpenSuccess, setOpenFail, budgetList, currentPage, setCurrentPage, navigate}) {
    try {
        dispatch(deleteBudget(id, csrfToken))
            .then((action) => {
                if (deleteBudget.fulfilled.match(action)) {
                    setOpenSuccess(true);
                    if (budgetList.length % 10 === 1 && currentPage > 1) {
                        dispatch(setCurrentPage(currentPage-1));
                    }
                    // reload dashboard after 1.5 seconds
                    setTimeout(() => {
                        navigate(`/dashboard`);
                        window.location.reload();
                    }, 2000);
                } else {
                    setOpenFail(true);
                }
            })
    } catch (error) {
        console.log(error);
    }
}

// Handle page change function
export function handlePageChange(value, {dispatch, setCurrentBudgets, budgetList, setCurrentPage}) {
    const firstIndex = (value-1) * 10;
    const lastIndex = firstIndex + 10;
    dispatch(setCurrentBudgets(budgetList.slice(firstIndex, lastIndex)));
    dispatch(setCurrentPage(value));
}