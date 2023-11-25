import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {getBudgetList, getBudgetById} from "../actions/budgetActions.js";
import {logoutUser} from "../actions/authActions.js";
import {setUser} from "../redux/userSlice.js";
import { setBudgetList, setBudgetById, setId } from "../redux/budgetSlice.js";
import { setIsAuthenticated } from "../redux/authenticatedSlice.js";


function BudgetList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state)=> state.authenticated.isAuthenticated);
    const budgetList = useSelector((state) => state.budget.budgetList);
    console.log(budgetList, "testBudgetList");
    const budgetByidtest = useSelector((state)=> state.budget.budgetById)
    const id1 = useSelector((state)=> state.budget.id)
    console.log(id1, "id1")

    // logout user and clear states for user and isAuthenticated
    const handleLogout = async () => {
        const response  = await logoutUser(csrfToken);
        if (response.status === 202) {
            console.log("logout successful");
            dispatch(setUser(null));
            dispatch(setIsAuthenticated(false));
            console.log(isAuthenticated, "logout");
            console.log(user, "user after logout");
            navigate("/login") 
        } else {
            alert("Logout failed. Please try again.");
            throw new Error("Logout failed");
        }
    }
    
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

    return ( 
          
        <div className = "budget-div" >
        <NavLink to="/dashboard/addbudget">Add budget</NavLink> 
        <button onClick = {handleLogout}>Logout</button>
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
                </ul>
            ))}
        </div>

    )
}

export default BudgetList;