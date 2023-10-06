// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getBudgetList} from "../redux/budgetSlice.js"
import { useEffect } from "react";

function BudgetList() {
    const dispatch = useDispatch();
    const budgetList = useSelector((state) => state.budget.budgetList);

    useEffect(() => {
        dispatch(getBudgetList());
    },[dispatch])
    
    return (
        <div>
            {budgetList && budgetList.map((budget) => {
                <ul>
                <li>{budget.housing}</li>
                <li>{budget.transport}</li>
                </ul>
            })}
        </div>

    )
}

export default BudgetList;