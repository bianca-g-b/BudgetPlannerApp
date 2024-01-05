import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
import { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood, setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, 
    setLuxury, setLeisure, setHolidays, setOtherNonEssential, setUnsecuredDebt,
    setTotalEssential, setTotalNonEssential, setTotalExpenses, setTotalSavings,
    } from '../redux/budgetFieldsSlice.js';
import { setBudgetById } from "../redux/budgetSlice.js";
import { getBudgetById,editBudget } from "../actions/budgetActions.js";

function UpdateBudget() {
    const budgetById = useSelector((state)=> state.budget.budgetById);
    const budgetFields = useSelector((state) => state.budgetFields);
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const id2 = useSelector((state)=> state.budget.id)
    console.log(id2, "id2")
    const budgetList = useSelector((state) => state.budget.budgetList);

    //extract budget by id from budget list
    const budgetById2 = budgetList.find((budget) => budget.id === id2);
    console.log(budgetById2, "budget by id 2");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(budgetById, "update task test");

    // set budget fields to budgetById2 fields
    useEffect(()=>{
        if (id2) {
            dispatch(setDateFrom(budgetById2.date_from));
            dispatch(setDateTo(budgetById2.date_to));
            dispatch(setIncome(budgetById2.total_income));
            dispatch(setHousing(budgetById2.housing));
            dispatch(setUtilities(budgetById2.utility_bills));
            dispatch(setFood(budgetById2.food_drinks));
            dispatch(setTransport(budgetById2.transport));
            dispatch(setHousehold(budgetById2.household_goods_services));
            dispatch(setChildcare(budgetById2.children_related_costs));
            dispatch(setCleaning(budgetById2.cleaning_toiletries));
            dispatch(setOtherEssential(budgetById2.other_essential_costs));
            dispatch(setLuxury(budgetById2.luxury_gifts));
            dispatch(setLeisure(budgetById2.leisure_entertainment));
            dispatch(setHolidays(budgetById2.holidays));
            dispatch(setOtherNonEssential(budgetById2.other_non_essential_costs));
            dispatch(setUnsecuredDebt(budgetById2.unsecured_loans));
            dispatch(setTotalEssential(budgetById2.total_essential));
            dispatch(setTotalNonEssential(budgetById2.total_non_essential));
            dispatch(setTotalExpenses(budgetById2.total_expenses));
            dispatch(setTotalSavings(budgetById2.total_savings));
        } 
    },[dispatch, id2, budgetById2])



    // write useEffect so budgetById is updated properly
    useEffect(()=>{
        if (budgetById.id) {
            dispatch(getBudgetById(id2))
                .then((action) => {
                    if (editBudget.fulfilled.match(action)) {
                        console.log(action.payload, "useEffect");
                        console.log(budgetFields, "budget fields")
                    }
                })
        }
    },[dispatch, budgetById, id2, budgetFields])


    async function handleUpdateBudget(event) {
        event.preventDefault();
        console.log(event, "event")
        const details = {
            id: budgetById.id,
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
            total_essential: (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential)).toFixed(2),
            total_non_essential: (parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2),
            total_expenses: (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential) +
                            parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2),
            total_savings: (parseFloat(budgetFields.income) - (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential) +
                            parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt))).toFixed(2),
        };
        console.log(details, "details update budget");

        try {
            dispatch(editBudget(details, csrfToken))
                .then((action) => {
                    if (editBudget.fulfilled.match(action)) {
                        console.log(action.payload);
                        dispatch(setBudgetById(action.payload));
                        navigate("/dashboard");
                        window.location.reload();
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
                dateFromValue={budgetById2.date_from}
                dateToValue={budgetById2.date_to}

                handleDateFrom = {(event)=> dispatch(setDateFrom(event.target.value))}
                handleDateTo = {(event) => dispatch(setDateTo(event.target.value))}
            ></DateInputs>
            <BudgetFormInputs
                incomeValue={budgetById2.total_income}
                housingValue={budgetById2.housing}
                utilitiesValue={budgetById2.utility_bills}
                foodValue={budgetById2.food_drinks}
                transportValue={budgetById2.transport}
                householdValue={budgetById2.household_goods_services}
                childcareValue={budgetById2.children_related_costs}
                cleaningValue={budgetById2.cleaning_toiletries}
                otherEssentialValue={budgetById2.other_essential_costs}
                luxuryValue={budgetById2.luxury_gifts}
                leisureValue={budgetById2.leisure_entertainment}
                holidaysValue={budgetById2.holidays}
                otherNonEssentialValue={budgetById2.other_non_essential_costs}
                unsecuredValue={budgetById2.unsecured_loans}
                
                handleTotalIncome= {(event) => dispatch(setIncome(parseFloat(event.target.value)).toFixed(2))}
                handleHousing= {(event) => dispatch(setHousing(parseFloat(event.target.value)).toFixed(2))}
                handleUtilities= {(event) => dispatch(setUtilities(parseFloat(event.target.value)).toFixed(2))}
                handleFood= {(event) => dispatch(setFood(parseFloat(event.target.value)).toFixed(2))}
                handleTransport= {(event) => dispatch(setTransport(parseFloat(event.target.value)).toFixed(2))}
                handleHousehold= {(event) => dispatch(setHousehold(parseFloat(event.target.value)).toFixed(2))}
                handleChildcare= {(event) => dispatch(setChildcare(parseFloat(event.target.value)).toFixed(2))}
                handleCleaning= {(event) => dispatch(setCleaning(parseFloat(event.target.value)).toFixed(2))}
                handleOtherEssential= {(event) => dispatch(setOtherEssential(parseFloat(event.target.value)).toFixed(2))}
                handleLuxury= {(event) => dispatch(setLuxury(parseFloat(event.target.value)).toFixed(2))}
                handleLeisure= {(event) => dispatch(setLeisure(parseFloat(event.target.value)).toFixed(2))}
                handleHolidays= {(event) => dispatch(setHolidays(parseFloat(event.target.value)).toFixed(2))}
                handleOtherNonEssential= {(event) => dispatch(setOtherNonEssential(parseFloat(event.target.value)).toFixed(2))}
                handleUnsecured= {(event) => dispatch(setUnsecuredDebt(parseFloat(event.target.value)).toFixed(2))}
                handleTotalEssential = {()=> dispatch(setTotalEssential(parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential)).toFixed(2))}
                handleTotalNonEssential = {()=> dispatch(setTotalNonEssential(parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2))}
                handleTotalExpenses = {()=> dispatch(setTotalExpenses(parseFloat(budgetFields.totalEssential) + parseFloat(budgetFields.totalNonEssential)).toFixed(2))}
                handleTotalSaving = {()=> dispatch(setTotalSavings((parseFloat(budgetFields.income) - parseFloat(budgetFields.totalExpenses)).toFixed(2)))}
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