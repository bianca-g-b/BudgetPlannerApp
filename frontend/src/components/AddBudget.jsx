import { useSelector, useDispatch } from 'react-redux';
import { addBudget } from '../actions/budgetActions.js';
import { useState } from 'react';
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";


function AddBudget() {
    const [budgetItems, setBudgetItems] = useState({
        dateFrom: "",
        dateTo: "",
        income: 0.0,
        housing: 0.0,
        utilities: 0.0,
        food_drinks: 0.0,
        transport: 0.0,
        household: 0.0,
        children: 0.0,
        cleaning: 0.0,
        otherEssential: 0.0,
        luxury: 0.0,
        leisure: 0.0,
        holidays: 0.0,
        otherNonEssential: 0.0,
        unsecuredDebt: 0.0,
    });

    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user_id = useSelector((state) => state.user.user_id);

    const dispatch = useDispatch();

    async function handleCreateBudget(event) {
        event.preventDefault();
        const details = {
            user_id: user_id,
            date_from: budgetItems.itemsdateFrom,
            date_to: budgetItems.dateTo,
            total_income: budgetItems.income,
            housing: budgetItems.housing,
            utility_bills: budgetItems.utilities,
            food_drinks: budgetItems.food_drinks,
            transport: budgetItems.transport,
            household_goods_services: budgetItems.household,
            children_related_costs: budgetItems.children,
            cleaning_toiletries: budgetItems.cleaning,
            other_essential_costs: budgetItems.otherEssential,
            luxury_gifts: budgetItems.luxury,
            leisure_entertainment: budgetItems.leisure,
            holidays: budgetItems.holidays,
            other_non_essential_costs: budgetItems.otherNonEssential,
            unsecured_loans: budgetItems.unsecuredDebt,
        };
        // console.log(details);
        // console.log(csrfToken);
        console.log(user_id);

        try {
            dispatch(addBudget(details, csrfToken))
                .then((action) => {
                    if (addBudget.fulfilled.match(action)) {
                        console.log(action.payload);
                    }
                })
        } catch (error) {
        console.log(error);
        }
    }

    return(
        <MainForm
            handleForm = {handleCreateBudget}
        >
            <h3>Add Budget</h3>
            <br/>
            <DateInputs 
                handleDateFrom = {(event)=> setBudgetItems({...budgetItems, dateFrom: event.target.value})}
                handleDateTo = {(event) => setBudgetItems({...budgetItems, dateTo: event.target.value})}
            ></DateInputs>
            <BudgetFormInputs
                handleTotalIncome = {(event)=> setBudgetItems({...budgetItems, income: parseFloat(event.target.value)})}
                handleHousing = {(event)=> setBudgetItems({...budgetItems, housing: parseFloat(event.target.value)})}
                handleUtilities = {(event)=> setBudgetItems({...budgetItems, utilities: parseFloat(event.target.value)})} 
                handleFood = {(event)=> setBudgetItems({...budgetItems, food_drinks: parseFloat(event.target.value)})}
                handleTransport = {(event)=> setBudgetItems({...budgetItems, transport: parseFloat(event.target.value)})}
                handleHousehold = {(event)=> setBudgetItems({...budgetItems, household: parseFloat(event.target.value)})}
                handleChildcare = {(event)=> setBudgetItems({...budgetItems, children: parseFloat(event.target.value)})}
                handleCleaning = {(event)=> setBudgetItems({...budgetItems, cleaning: parseFloat(event.target.value)})}
                handleOtherEssential = {(event)=> setBudgetItems({...budgetItems, otherEssential: parseFloat(event.target.value)})}
                handleLuxury = {(event)=> setBudgetItems({...budgetItems, luxury: parseFloat(event.target.value)})}
                handleLeisure = {(event)=>setBudgetItems({...budgetItems, leisure: parseFloat(event.target.value)})}
                handleHolidays = {(event)=>setBudgetItems({...budgetItems, holidays: parseFloat(event.target.value)})} 
                handleOtherNonEssential = {(event)=>setBudgetItems({...budgetItems, otherNonEssential: parseFloat(event.target.value)})}
                handleUnsecured = {(event)=>setBudgetItems({...budgetItems, unsecuredDebt: parseFloat(event.target.value)})}
                placeholder={0.0}
            ></BudgetFormInputs>
            <FormButton
                buttonTitle="Add Budget"
            >
            </FormButton>

        </MainForm>
    )
}

export default AddBudget;