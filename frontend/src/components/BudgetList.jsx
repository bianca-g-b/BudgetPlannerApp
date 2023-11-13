import { useDispatch, useSelector } from "react-redux";
import {getBudgetList} from "../redux/budgetSlice.js";
import {logoutUser, /*fetchUser*/} from "./auth/authActions.js";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {setUser} from "../redux/userSlice.js";
import { setIsAuthenticated } from "../redux/authenticatedSlice.js";
// import { setCSRFToken } from "../redux/csrfSlice.js";

function BudgetList() {
    const [budgetList, setBudgetList] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state)=> state.authenticated.isAuthenticated);
    console.log(budgetList);

    // logout user and clear states for user and isAuthenticated
    const handleLogout = async () => {
        const response  = await logoutUser(csrfToken);
        if (response.status === 202) {
            console.log("logout successful");
            dispatch(setUser(null));
            dispatch(setIsAuthenticated(false));
            // dispatch(setCSRFToken(null));
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
                        console.log(action.payload);
                        setBudgetList(action.payload);
                    }
                })
        }
        fetchData()
    }, [dispatch, csrfToken]);

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
                </ul>
            ))}
        </div>

    )
}

export default BudgetList;