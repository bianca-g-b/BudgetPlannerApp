import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {getBudgetList, getBudgetById, deleteBudget} from "../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId } from "../redux/budgetSlice.js";


function BudgetList() {
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const budgetList = useSelector((state) => state.budget.budgetList);
    console.log(budgetList, "testBudgetList");
    const budgetByidtest = useSelector((state)=> state.budget.budgetById)
    const id1 = useSelector((state)=> state.budget.id)
    console.log(id1, "id1")

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

    async function budgetById(id) {
        dispatch(setId(id))
        dispatch(getBudgetById(id))
            .then((action)=> {
                if (getBudgetById.fulfilled.match(action)) {
                    console.log(action.payload, "budget by id - action");
                    dispatch(setBudgetById(action.payload))
                    console.log(budgetByidtest, "testing state budgetbyid")
                }
            })
    }

    async function handleDeleteBudget(id) {
        try  {
            dispatch(deleteBudget(id))
            window.location.reload()
        } catch (error) {
                    console.log(error)
        }
    }

    return ( 
          
        <div className = "budget-div" >
        <NavLink to="/dashboard/addbudget">Add budget</NavLink> 
        <h1>Budget List</h1>
            {budgetList
            .map((budget, index) => (
                <ul key = {index}>
                <li>Housing costs: {budget.housing}</li>
                <li>Transport costs: {budget.transport}</li>
                <NavLink 
                    onClick = {()=> budgetById(budget.id)}
                    to={`/dashboard/${budget.id}`}
                    >Edit</NavLink>
                    <button 
                        onClick={()=> handleDeleteBudget(budget.id)}
                        className="delete-button">Delete</button>
                </ul>
            ))}
        </div>

    )
}

export default BudgetList;