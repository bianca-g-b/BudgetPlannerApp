// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getBudgetList} from "../redux/budgetSlice.js"
import { useState, useEffect } from "react";

function BudgetList() {
    // const [budgetList, setBudgetList] = useState([]);
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    console.log(csrfToken);
    console.log(getBudgetList);
    console.log(dispatch(getBudgetList(csrfToken)))

    
    useEffect(() => {
        async function fetchData() {
            const response = await dispatch(getBudgetList(csrfToken));
            console.log(response);
        }
        fetchData(); 
    }, [dispatch, csrfToken]);

    return (
        <div>
            {/* {getBudgetList && getBudgetList.map((budget) => {
                <ul>
                <li>{budget.housing}</li>
                <li>{budget.transport}</li>
                </ul>
            })} */}
        </div>

    )
}

export default BudgetList;