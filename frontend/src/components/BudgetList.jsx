// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getBudgetList} from "../redux/budgetSlice.js"
import { useState, useEffect } from "react";

function BudgetList() {
    const [budgetList, setBudgetList] = useState([]);
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    console.log(dispatch(getBudgetList(csrfToken)))
    console.log(budgetList)

    
    useEffect(() => {
        async function fetchData() {
            dispatch(getBudgetList(csrfToken))
                .then((action) => {
                    if (getBudgetList.fulfilled.match(action)) {
                        console.log(action.payload)
                        setBudgetList(action.payload);
                    }
                })
        }
        fetchData()
    }, [dispatch, csrfToken]);

    return (
        <div>
            {/* {BudgetList && BudgetList.map((budget) => {
                <ul>
                <li>{budget.housing}</li>
                <li>{budget.transport}</li>
                </ul>
            })} */}
        </div>

    )
}

export default BudgetList;