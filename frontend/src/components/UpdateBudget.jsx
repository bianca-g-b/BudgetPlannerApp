import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
// import { updateBudget } from "../redux/budgetSlice.js";
import { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood, setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, setLuxury, setLeisure, setHolidays, setOtherNonEssential, setUnsecuredDebt } from '../redux/budgetFieldsSlice.js';
import { getBudgetById, editBudget } from "../actions/budgetActions.js";

function UpdateBudget() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    console.log(budgetList);
    const budgetById = useSelector((state)=> state.budget.budgetById);
    console.log(budgetById, "update task test");
    const budgetFields = useSelector((state) => state.budgetFields);
    const csrfToken = useSelector((state) => state.csrf.csrfToken);

    const dispatch = useDispatch();

    // write useEffect so budgetById is updated properly
    useEffect(()=>{
        if (budgetById.id) {
            dispatch(getBudgetById(budgetById.id))
                .then((action) => {
                    if (editBudget.fulfilled.match(action)) {
                        console.log(action.payload, "useEffect");
                        console.log(budgetFields, "budget fields")
                    }
                })
        }
    },[dispatch, budgetById.id, budgetFields])


    async function handleUpdateBudget(event) {
        event.preventDefault();
        const details = {
            date_from: budgetFields.dateFrom,
            date_to: budgetFields.dateTo,
            total_income: budgetFields.income,
            housing: budgetFields.housing,
            utility_bills: budgetFields.utilities,
            food_drinks: budgetFields.food,
            transport: budgetFields.transport,
            household_goods_services: budgetFields.household,
            children_related_costs: budgetFields.childcare,
            cleaning_toiletries: budgetFields.cleaning,
            other_essential_costs: budgetFields.otherEssential,
            luxury_gifts: budgetFields.luxury,
            leisure_entertainment: budgetFields.leisure,
            holidays: budgetFields.holidays,
            other_non_essential_costs: budgetFields.otherNonEssential,
            unsecured_loans: budgetFields.unsecuredDebt,
        };
        console.log(details, "details update budget");

        try {
            dispatch(editBudget(budgetById.id, details, csrfToken))
                .then((action) => {
                    if (editBudget.fulfilled.match(action)) {
                        console.log(action.payload);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <MainForm 
            handleForm = {handleUpdateBudget}
        >
            <h3>Update Budget</h3>
            <br/>
            <DateInputs 
                dateFromValue={budgetById.date_from}
                dateToValue={budgetById.date_to}

                handleDateFrom = {(event)=> dispatch(setDateFrom(event.target.value))}
                handleDateTo = {(event) => dispatch(setDateTo(event.target.value))}
            ></DateInputs>
            <BudgetFormInputs
                incomeValue={budgetById.total_income}
                housingValue={budgetById.housing}
                utilitiesValue={budgetById.utility_bills}
                foodValue={budgetById.food_drinks}
                transportValue={budgetById.transport}
                householdValue={budgetById.household_goods_services}
                childcareValue={budgetById.children_related_costs}
                cleaningValue={budgetById.cleaning_toiletries}
                otherEssentialValue={budgetById.other_essential_costs}
                luxuryValue={budgetById.luxury_gifts}
                leisureValue={budgetById.leisure_entertainment}
                holidaysValue={budgetById.holidays}
                otherNonEssentialValue={budgetById.other_non_essential_costs}
                unsecuredValue={budgetById.unsecured_loans}
                
                handleTotalIncome= {(event) => dispatch(setIncome(parseFloat(event.target.value)))}
                handleHousing= {(event) => dispatch(setHousing(parseFloat(event.target.value)))}
                handleUtilities= {(event) => dispatch(setUtilities(parseFloat(event.target.value)))}
                handleFood= {(event) => dispatch(setFood(parseFloat(event.target.value)))}
                handleTransport= {(event) => dispatch(setTransport(parseFloat(event.target.value)))}
                handleHousehold= {(event) => dispatch(setHousehold(parseFloat(event.target.value)))}
                handleChildcare= {(event) => dispatch(setChildcare(parseFloat(event.target.value)))}
                handleCleaning= {(event) => dispatch(setCleaning(parseFloat(event.target.value)))}
                handleOtherEssential= {(event) => dispatch(setOtherEssential(parseFloat(event.target.value)))}
                handleLuxury= {(event) => dispatch(setLuxury(parseFloat(event.target.value)))}
                handleLeisure= {(event) => dispatch(setLeisure(parseFloat(event.target.value)))}
                handleHolidays= {(event) => dispatch(setHolidays(parseFloat(event.target.value)))}
                handleOtherNonEssential= {(event) => dispatch(setOtherNonEssential(parseFloat(event.target.value)))}
                handleUnsecured= {(event) => dispatch(setUnsecuredDebt(parseFloat(event.target.value)))}
                >
            </BudgetFormInputs>
            <FormButton
                buttonTitle="Update Budget"
            >
            </FormButton>

        </MainForm>
    )
}

export default UpdateBudget;