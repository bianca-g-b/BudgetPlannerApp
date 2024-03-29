import "../../styles/budget/Forms.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
import { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood, setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, 
    setLuxury, setLeisure, setHolidays, setCharity, setOtherNonEssential, setUnsecuredDebt,
    setTotalEssential, setTotalNonEssential, setTotalExpenses, setTotalSavings,
    } from '../../redux/budgetFieldsSlice.js';
import { successAlertStyle, errorAlertStyle } from "../../styles/budget/alertsStyles.js";
import { setBudgetById } from "../../redux/budgetSlice.js";
import { getBudgetById,editBudget } from "../../actions/budgetActions.js";
import { useResetBudget } from "../../hooks/budgetHooks.js";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function UpdateBudget() {
    const theme = useSelector((state) => state.theme.theme);
    const budgetById = useSelector((state)=> state.budget.budgetById);
    const budgetFields = useSelector((state) => state.budgetFields);
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const id2 = useSelector((state)=> state.budget.id);
    const budgetList = useSelector((state) => state.budget.budgetList);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);

    //extract budget by id from budget list
    const budgetById2 = budgetList.find((budget) => budget.id === id2);


    const dispatch = useDispatch();
    const navigate = useNavigate();


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
            dispatch(setCharity(budgetById2.charity));
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
                        // console.log(action.payload, "useEffect");
                        // console.log(budgetFields, "budget fields")
                    }
                })
        }
    },[dispatch, budgetById, id2, budgetFields])

    // Custom hook to reset budget fields when new budget has been added
    useResetBudget({openSuccess, dispatch, setDateFrom, setDateTo,
        setIncome, setHousing, setUtilities, setFood, setTransport, setHousehold,
        setChildcare, setCleaning, setOtherEssential, setLuxury, setLeisure,
        setHolidays, setCharity, setOtherNonEssential, setUnsecuredDebt, 
        setTotalEssential, setTotalNonEssential, setTotalExpenses, setTotalSavings
        });


    async function handleUpdateBudget(event) {
        event.preventDefault();
        const details = {
            id: budgetById.id,
            date_from: budgetFields.dateFrom,
            date_to: budgetFields.dateTo,
            total_income: parseFloat(budgetFields.income).toFixed(2),
            housing: parseFloat(budgetFields.housing).toFixed(2),
            utility_bills: parseFloat(budgetFields.utilities).toFixed(2),
            food_drinks: parseFloat(budgetFields.food).toFixed(2),
            transport: parseFloat(budgetFields.transport).toFixed(2),
            household_goods_services: parseFloat(budgetFields.household).toFixed(2),
            children_related_costs: parseFloat(budgetFields.childcare).toFixed(2),
            cleaning_toiletries: parseFloat(budgetFields.cleaning).toFixed(2),
            other_essential_costs: parseFloat(budgetFields.otherEssential).toFixed(2),
            luxury_gifts: parseFloat(budgetFields.luxury).toFixed(2),
            leisure_entertainment: parseFloat(budgetFields.leisure).toFixed(2),
            holidays: parseFloat(budgetFields.holidays).toFixed(2),
            charity: parseFloat(budgetFields.charity).toFixed(2),
            other_non_essential_costs: parseFloat(budgetFields.otherNonEssential).toFixed(2),
            unsecured_loans: parseFloat(budgetFields.unsecuredDebt).toFixed(2),
            total_essential: (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential)).toFixed(2),
            total_non_essential: (parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2),
            total_expenses: (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential) +
                            parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2),
            total_savings: (parseFloat(budgetFields.income) - (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential) +
                            parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt))).toFixed(2),
        };

        try {
            dispatch(editBudget(details, csrfToken))
                .then((action) => {
                    if (editBudget.fulfilled.match(action)) {
                        dispatch(setBudgetById(action.payload));
                        setOpenSuccess(true);
                        // navigate to dashboard after 1.5 seconds
                        setTimeout(() => {
                        navigate("/dashboard");
                        window.location.reload();
                        }, 2500);
                    } else {
                        setOpenFail(true);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    // write function to get date format that will display in date input
    function formatDate(date) {
        const dateFormatted = date.split("/").reverse().join("-");
        const trialDate = new Date(dateFormatted);
        const finalDate = trialDate.getFullYear() +
        '-' +
        ('0' + (trialDate.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + trialDate.getDate()).slice(-2);

        return finalDate;
    }
    

    return(
        <MainForm 
            handleForm = {handleUpdateBudget}
            formTitle = "Update Budget"
        >
            <DateInputs 
                dateFromValue={formatDate(budgetById2.date_from)}
                dateToValue = {formatDate(budgetById2.date_to)}

                handleDateFrom = {(event)=> dispatch(setDateFrom(new Date(event.target.value).toLocaleDateString()))}
                handleDateTo = {(event) => dispatch(setDateTo(new Date(event.target.value).toLocaleDateString()))}
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
                charityValue={budgetById2.charity}
                otherNonEssentialValue={budgetById2.other_non_essential_costs}
                unsecuredValue={budgetById2.unsecured_loans}
                
                handleTotalIncome= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setIncome(parseFloat(value)));
                }}
                handleHousing= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setHousing(parseFloat(value)));
                }}
                handleUtilities= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setUtilities(parseFloat(value)))
                }}
                handleFood= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setFood(parseFloat(value)))
                }}
                handleTransport= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setTransport(parseFloat(value)))
                }}
                handleHousehold= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setHousehold(parseFloat(value)))
                }}
                handleChildcare= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setChildcare(parseFloat(value)))
                }}
                handleCleaning= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setCleaning(parseFloat(value)))
                }}
                handleOtherEssential= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setOtherEssential(parseFloat(value)));
                }}      
                handleLuxury= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setLuxury(parseFloat(value)))
                }}
                handleLeisure= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setLeisure(parseFloat(value)))
                }}
                handleHolidays= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setHolidays(parseFloat(value)))
                }}
                handleCharity= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setCharity(parseFloat(value)))
                }}
                handleOtherNonEssential= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setOtherNonEssential(parseFloat(value)))
                }}
                handleUnsecured= {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value).toFixed(2) : 0.0;
                    dispatch(setUnsecuredDebt(parseFloat(value)))
                }}
                handleTotalEssential = {()=> dispatch(setTotalEssential((parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential)).toFixed(2)))}
                handleTotalNonEssential = {()=> dispatch(setTotalNonEssential((parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2)))}
                handleTotalExpenses = {()=> dispatch(setTotalExpenses((parseFloat(budgetFields.totalEssential) + parseFloat(budgetFields.totalNonEssential)).toFixed(2)))}
                handleTotalSaving = {()=> dispatch(setTotalSavings((parseFloat(budgetFields.income) - parseFloat(budgetFields.totalExpenses)).toFixed(2)))}
                >
            </BudgetFormInputs>
            <FormButton
                buttonTitle="Update Budget"
            >
            </FormButton>

            <Snackbar open={openSuccess} autoHideDuration={2500} onClose={() => setOpenSuccess(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenSuccess(false)} severity="success" sx={successAlertStyle(theme)}>
                    Budget updated successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={2500} onClose={() => setOpenFail(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenFail(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Budget failed to update. Please try again.
                </MuiAlert>
            </Snackbar>

        </MainForm>
    )
}

export default UpdateBudget;