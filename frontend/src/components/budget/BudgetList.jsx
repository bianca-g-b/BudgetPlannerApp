import "../../styles/budget/BudgetList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getBudgetList, getBudgetById, deleteBudget} from "../../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId, setClicked, setCurrentBudgets, setCurrentPage } from "../../redux/budgetSlice.js";
import { NavLink, Outlet, useNavigate} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function BudgetList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const budgetList = useSelector((state) => state.budget.budgetList);
    const currentBudgets = useSelector((state) => state.budget.currentBudgets);
    const currentPage = useSelector((state) => state.budget.currentPage);
    const budget = useSelector((state)=> state.budget.budgetById);
    const id = useSelector((state)=> state.budget.id);
    const clicked = useSelector((state)=> state.budget.clicked);
    const theme = useSelector((state) => state.theme.theme);
    const [isClicked, setIsClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);

    console.log("budgetList", budgetList)
    console.log(currentBudgets, "currentBudgets")
    console.log("currentPage", currentPage)
    

    // fetch data
    useEffect(() => {
        async function fetchData() {
            dispatch(getBudgetList(csrfToken))
                .then((action) => {
                    if (getBudgetList.fulfilled.match(action)) {
                        dispatch(setBudgetList(action.payload));
                        const firstIndex = (currentPage-1) * 10;
                        const lastIndex = firstIndex + 10;
                        dispatch(setCurrentBudgets(action.payload.slice(firstIndex, lastIndex)));
                    }
                })
           
        }
        fetchData()
    }, [dispatch, csrfToken, currentPage]);


    // get and set budget by id, id
    async function budgetById(id) {
        dispatch(setId(id))
        dispatch(getBudgetById(id))
            .then((action)=> {
                if (getBudgetById.fulfilled.match(action)) {
                    dispatch(setBudgetById(action.payload))
                    dispatch(setClicked(id));
                }
            })
    }
        
    // write useEffect to add className to table row when button is clicked and remove className when another button is clicked
    useEffect(() => {
        if (clicked === id) {
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }
    }, [clicked, id])

    // open modal
    function openModal() {
        setIsModalOpen(true);
    }

    // close modal
    function closeModal() {
        setIsModalOpen(false);
    }

    // delete budget by id
    async function handleDeleteBudget(id) {
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
                        }, 1500);
                    } else {
                        setOpenFail(true);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    // use effect to set total number of pages in pagination
    useEffect(() => {
        setTotalPages(Math.ceil(budgetList.length/10));
    }
    ,[budgetList])

    // write function to handle page change and set currentBudgets to be the correct 10 items from the budgetList
    function handlePageChange(value) {
        const firstIndex = (value-1) * 10;
        const lastIndex = firstIndex + 10;
        dispatch(setCurrentBudgets(budgetList.slice(firstIndex, lastIndex)));
        //set clicked to the first id value in the currentBudgets array
        dispatch(setCurrentPage(value));
    }

    //write useEffect to change value of budget, id, clicked every time current budgets and current page change
    useEffect(() => {
        if (currentBudgets.length > 0 && currentPage) {
            dispatch(setClicked(currentBudgets[0].id));
            navigate(`/dashboard/page=${currentPage}/${currentBudgets[0].id}`)
            dispatch(getBudgetById(currentBudgets[0].id))
            dispatch(setBudgetById(currentBudgets[0]));
            dispatch(setId(currentBudgets[0].id));
        }
    } ,[currentBudgets,currentPage, dispatch, navigate])

    return (
        <div className="trial-first-div">
            {budgetList.length > 0 && <div className="header-div">
                 <p className="budgets-page-header">Budget List</p>
                <NavLink 
                    className={`add-budget-link ${theme === "dark" ? "dark-add-budget-link" : ""}`}
                    to="/dashboard/addbudget">Add new budget &#x21F1;</NavLink> 
            </div>}

            {budgetList.length === 0 && <div className="empty-budget-list-div">
                <p className="empty-budget-list-message">No budgets found. Add a budget to see it here.</p>
                <NavLink
                    className="add-budget-link"
                    to="/dashboard/addbudget">Add new budget &#x21F1;</NavLink>
            </div>}

            
            {currentBudgets && currentBudgets.length > 0 &&<div className="full-budgets-div">
            <div className= {`table-area-div ${theme === "dark" ? "dark-table-area-div" : ""}`}   
            >
                <table className="budgets-table">
                    <thead>
                        <tr>
                            <th className={`date-from-col table-col-title ${theme === "dark" ? "dark-col-title" : ""}`}>Date from</th>
                            <th className={`date-to-col  table-col-title ${theme === "dark" ? "dark-col-title" : ""}`}>Date to</th>
                            <th className={`see-more  table-col-title ${theme === "dark" ? "dark-col-title" : ""}`}>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBudgets && currentBudgets.length > 0 && currentBudgets.map((budgetItem, index) => {
                            return (
                                <tr key={index} 
                                    className = {`${theme === "dark" ? "dark-row" : "budget-row"} ${budgetItem.id===clicked && isClicked ? "clicked" : ""}`}
                                    >
                                    <td className="date-from-col">{budgetItem.date_from}</td>
                                    <td className="date-to-col">{budgetItem.date_to}</td>
                                    <td className="button-col see-more">
                                        <NavLink 
                                            to={`/dashboard/page=${currentPage}/${budgetItem.id}`}
                                            className="see-more-link"
                                            onClick={() => budgetById(budgetItem.id)}
                                             >&#x3e;</NavLink></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {budgetList.length > 10 && <div className="budget-pagination-div">
                    <Stack spacing={2}>
                        <Pagination 
                            page={currentPage}
                            count={totalPages}
                            onChange={(event, value) => handlePageChange(value)}
                            color="primary"
                            sx={{ 
                                "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root" : {color: theme === "dark" ? "white" : "black"}, 
                                "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected" : {color: theme === "dark" ? "white" : "white"},
                            }}
                        />
                    </Stack>
                </div>}
                </div>
                {budget && <Outlet 
                    context= {{
                        budgetbyid: budget,
                        handleDeleteBudget: () => handleDeleteBudget(budget.id),
                        isModalOpen: isModalOpen,
                        openModal: openModal,
                        closeModal: closeModal,
                    }}
                    />}
            
            </div>}

            <Snackbar open={openSuccess} autoHideDuration={1500} onClose={() => setOpenSuccess(false)}>
                <MuiAlert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Budget deleted successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={1500} onClose={() => setOpenFail(false)}>
                <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                    Budget deletion failed. Please try again.
                </MuiAlert>
            </Snackbar>

            
        </div>
    )
}

export default BudgetList;