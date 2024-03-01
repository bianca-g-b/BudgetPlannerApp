import "../../styles/budget/BudgetList.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate} from "react-router-dom";
import { getBudgetList, getBudgetById, deleteBudget } from "../../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId, setClicked, setCurrentBudgets, setCurrentPage } from "../../redux/budgetSlice.js";
import { successAlertStyle, errorAlertStyle } from "../../styles/budget/alertsStyles.js";
import { getBudgetPaginationSx } from "../../styles/budget/budgetsPageStyle.js";
import { handleBudgetById, handleDeleteBudget, handlePageChange } from "../../helpers/budgetHelpers.js";
import { useFetchData,useClickedClassName, useSetTotalPages, useUpdateValues } from "../../hooks/budgetHooks.js";
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


    // Pagination sx settings
    const paginationSx = getBudgetPaginationSx(theme);

    // Fetch data hook
    useFetchData({dispatch, getBudgetList, csrfToken, setBudgetList, currentPage, setCurrentBudgets});
  
    // Custom hook to add className to table row when button is clicked and remove it when another button is clicked
    useClickedClassName({clicked, id, setIsClicked});

    // Open modal
    function openModal() {
        setIsModalOpen(true);
    }

    // Close modal
    function closeModal() {
        setIsModalOpen(false);
    }

    // Hook to set total number of pages in pagination
    useSetTotalPages({setTotalPages, budgetList});

    // Hook to change value of budget, id, clicked every time current budgets and current page change
    useUpdateValues({currentBudgets, currentPage, dispatch, navigate, setBudgetById, setId, setClicked, getBudgetById});

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

            
            {currentBudgets && currentBudgets.length > 0 && <div className={`full-budgets-div ${theme==="dark" ? "full-budgets-div-dark" : ""}`}>
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
                                            onClick={() => handleBudgetById(budgetItem.id, {dispatch, setId, getBudgetById, setBudgetById, setClicked})}
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
                            onChange={(event, value) => handlePageChange(value, {dispatch, setCurrentBudgets, budgetList, setCurrentPage})}
                            color="primary"
                            sx={paginationSx}
                        />
                    </Stack>
                </div>}
                </div>
                {budget && <Outlet 
                    context= {{
                        budgetbyid: budget,
                        handleDeleteBudget: () => handleDeleteBudget(budget.id, {dispatch, deleteBudget, csrfToken, setOpenSuccess, setOpenFail, budgetList, currentPage, setCurrentPage, navigate}),
                        isModalOpen: isModalOpen,
                        openModal: openModal,
                        closeModal: closeModal,
                    }}
                    />}
            
            </div>}

            <Snackbar open={openSuccess} autoHideDuration={2000} onClose={() => setOpenSuccess(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenSuccess(false)} severity="success" sx={successAlertStyle(theme)}>
                    Budget deleted successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={2500} onClose={() => setOpenFail(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenFail(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Budget deletion failed. Please try again.
                </MuiAlert>
            </Snackbar>

            
        </div>
    )
}

export default BudgetList;