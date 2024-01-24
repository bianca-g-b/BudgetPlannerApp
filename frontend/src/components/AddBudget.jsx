import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBudget } from '../actions/budgetActions.js';
import { useState } from 'react';
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
import { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood,
    setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, 
    setLuxury, setLeisure, setHolidays, setOtherNonEssential, setUnsecuredDebt,
    setTotalEssential, setTotalNonEssential, setTotalExpenses, setTotalSavings,
    } from '../redux/budgetFieldsSlice.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function AddBudget() {
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user_id = useSelector((state) => state.user.user_id);
    const budgetFields = useSelector((state) => state.budgetFields);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleCreateBudget(event) {
        event.preventDefault();
        const details = {
            user_id: user_id,
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
            other_non_essential_costs: parseFloat(budgetFields.otherNonEssential).toFixed(2),
            unsecured_loans: parseFloat(budgetFields.unsecuredDebt).toFixed(2),
            total_essential: (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential)).toFixed(2),
            total_non_essential: (parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2),
            total_expenses: (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential) +
                            parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt)).toFixed(2),
            total_savings: (parseFloat(budgetFields.income) - (parseFloat(budgetFields.housing) + parseFloat(budgetFields.utilities) + parseFloat(budgetFields.food) + parseFloat(budgetFields.transport) + parseFloat(budgetFields.household) + parseFloat(budgetFields.childcare) + parseFloat(budgetFields.cleaning) + parseFloat(budgetFields.otherEssential) +
                            parseFloat(budgetFields.luxury) + parseFloat(budgetFields.leisure) + parseFloat(budgetFields.holidays) + parseFloat(budgetFields.otherNonEssential) + parseFloat(budgetFields.unsecuredDebt))).toFixed(2),
        };
        console.log(details);
        try {
            dispatch(addBudget(details, csrfToken))
                .then((action) => {
                    if (addBudget.fulfilled.match(action)) {
                        console.log(action.payload);
                        setOpenSuccess(true);
                        // navigate to dashboard after 1.5 seconds
                        setTimeout(() => {
                            navigate("/dashboard");
                            window.location.reload();
                        }, 1500);
                    } else {
                        setOpenFail(true);
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
                handleDateFrom = {(event)=> dispatch(setDateFrom(new Date(event.target.value).toLocaleDateString()))}
                handleDateTo = {(event) => dispatch(setDateTo(event.target.value))}
            ></DateInputs>
            <BudgetFormInputs
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
                placeholder={0.0}
            ></BudgetFormInputs>
            <FormButton
                buttonTitle="Add Budget"
            >
            </FormButton>

            <Snackbar open={openSuccess} autoHideDuration={1500} onClose={() => setOpenSuccess(false)}>
                <MuiAlert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Budget added successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={1500} onClose={() => setOpenFail(false)}>
                <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                    Budget failed to add. Please try again.
                </MuiAlert>
            </Snackbar>

        </MainForm>
    )
}

export default AddBudget;