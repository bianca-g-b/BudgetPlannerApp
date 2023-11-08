import { useDispatch, useSelector } from "react-redux";
import {getBudgetList} from "../redux/budgetSlice.js";
import {logoutUser, fetchUser} from "./auth/authActions.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {setUser} from "../redux/userSlice.js";

function BudgetList() {
    const [budgetList, setBudgetList] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user = useSelector((state) => state.user.username);
    console.log("user in budget:", user);
    console.log(budgetList)

    useEffect(()=> {
        async function getUser() {
            const user = await fetchUser(dispatch, csrfToken);
            dispatch(setUser(user));
        }
        if (!user) {     
            getUser();
        }
    },
    [user, dispatch, csrfToken])


    const handleLogout = async () => {
        const response  = await logoutUser(csrfToken);
        if (response.status === 202) {
            console.log("logout successful");
            navigate("/login") 
        } else {
            alert("Logout failed. Please try again.");
            throw new Error("Logout failed");
        }
    }
        
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
        <div>
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