import "../../styles/BudgetList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getBudgetList, getBudgetById, deleteBudget} from "../../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId, setClicked } from "../../redux/budgetSlice.js";
import { NavLink, Outlet} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function TrialList() {
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const budgetList = useSelector((state) => state.budget.budgetList);
    const budget = useSelector((state)=> state.budget.budgetById);
    const id = useSelector((state)=> state.budget.id);
    const clicked = useSelector((state)=> state.budget.clicked);
    const [isClicked, setIsClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [currentBudgets, setCurrentBudgets] = useState(budgetList.slice(0, 10));
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);
    

    console.log(budgetList, "testing state budgetlist");

    // fetch data
    useEffect(() => {
        async function fetchData() {
            dispatch(getBudgetList(csrfToken))
                .then((action) => {
                    if (getBudgetList.fulfilled.match(action)) {
                        console.log(action.payload, "action payload");
                        dispatch(setBudgetList(action.payload));
                    }
                })               
        }
        fetchData()
    }, [dispatch, csrfToken]);

    // get and set budget by id, id
    async function budgetById(id) {
        dispatch(setId(id))
        dispatch(getBudgetById(id))
            .then((action)=> {
                if (getBudgetById.fulfilled.match(action)) {
                    console.log(action.payload, "budget by id - action");
                    dispatch(setBudgetById(action.payload))
                    console.log(budget, "testing state budgetbyid");
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
                        // reload dashboard after 1.5 seconds
                        setTimeout(() => {
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
        setCurrentBudgets(budgetList.slice(firstIndex, lastIndex));
    }


    return (
        <div className="trial-first-div">
            {budgetList.length >0 && <div className="header-div">
                 <h1>Budget List</h1>
                <NavLink 
                    className="add-budget-link"
                    to="/dashboard/addbudget">Add new budget &#x21F1;</NavLink> 
            </div>}
            <div className="full-budgets-div">
            <div className="table-area-div">
                <table>
                    <thead>
                        <tr>
                            <th className="date-from-col">Date from</th>
                            <th className="date-to-col">Date to</th>
                            <th className="see-more">See more</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBudgets.map((budgetItem, index) => {
                            return (
                                <tr key={index} 
                                    className={(budgetItem.id===clicked && isClicked) ? "clicked budget-row" : "budget-row"}>
                                    <td className="date-from-col">{budgetItem.date_from}</td>
                                    <td className="date-to-col">{budgetItem.date_to}</td>
                                    <td className="button-col see-more">
                                        <NavLink 
                                            to={`/dashboard/${budgetItem.id}`}
                                            className="see-more-link"
                                            onClick={() => budgetById(budgetItem.id)}
                                             >&#x3e;</NavLink></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {budgetList.length > 5 && <div className="budget-pagination-div">
                    <Stack spacing={2}>
                        <Pagination 
                            count={totalPages}
                            onChange={(event, value) => handlePageChange(value)}
                            color="primary"
                        />
                    </Stack>
                </div>}
                </div>
                <Outlet 
                    context= {{
                        budgetbyid: budget,
                        handleDelete: () => handleDeleteBudget(budget.id),
                        isModalOpen: isModalOpen,
                        openModal: openModal,
                        closeModal: closeModal,
                    }}
                    />
            
            </div>

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

export default TrialList;