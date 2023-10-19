// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getBudgetList} from "../redux/budgetSlice.js";

import { useState, useEffect } from "react";

function BudgetList() {
    const [budgetList, setBudgetList] = useState([]);
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(dispatch(getBudgetList(csrfToken)))
    console.log(isAuthenticated)
    console.log(budgetList)
    // console.log(budgetList[0].housing)

    
    useEffect(() => {
        async function fetchData() {
            dispatch(getBudgetList(csrfToken))
                .then((action) => {
                    if (getBudgetList.fulfilled.match(action)) {
                        console.log(action.payload);
                        console.log("test auth",isAuthenticated);
                        setBudgetList(action.payload);
                    }
                })
        }
        console.log("test auth",isAuthenticated);
        fetchData()
        console.log("test auth",isAuthenticated);
    }, [dispatch, csrfToken]);

    return (
        
        <div>
        <button>Test button</button>
        <h1>Budget List</h1>
        <p>{budgetList[0].housing}</p>
            {budgetList
            .map((budget, index) => {
                <ul key = {index}>
                <li>{budget.housing}</li>
                <li>{budget.transport}</li>
                </ul>
            })}
        </div>

    )
}

export default BudgetList;