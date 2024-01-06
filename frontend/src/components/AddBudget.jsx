import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBudget } from '../actions/budgetActions.js';
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
import { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood,
    setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, 
    setLuxury, setLeisure, setHolidays, setOtherNonEssential, setUnsecuredDebt,
    setTotalEssential, setTotalNonEssential, setTotalExpenses, setTotalSavings,
    } from '../redux/budgetFieldsSlice.js';


function AddBudget() {
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user_id = useSelector((state) => state.user.user_id);
    const budgetFields = useSelector((state) => state.budgetFields);

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
                        navigate("/dashboard")
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
                handleDateFrom = {(event)=> dispatch(setDateFrom(event.target.value))}
                handleDateTo = {(event) => dispatch(setDateTo(event.target.value))}
            ></DateInputs>
            <BudgetFormInputs
                handleTotalIncome= {(event) => dispatch(setIncome(parseFloat(event.target.value).toFixed(2)))}
                handleHousing= {(event) => dispatch(setHousing(parseFloat(event.target.value).toFixed(2)))}
                handleUtilities= {(event) => dispatch(setUtilities(parseFloat(event.target.value).toFixed(2)))}
                handleFood= {(event) => dispatch(setFood(parseFloat(event.target.value).toFixed(2)))}
                handleTransport= {(event) => dispatch(setTransport(parseFloat(event.target.value).toFixed(2)))}
                handleHousehold= {(event) => dispatch(setHousehold(parseFloat(event.target.value).toFixed(2)))}
                handleChildcare= {(event) => dispatch(setChildcare(parseFloat(event.target.value).toFixed(2)))}
                handleCleaning= {(event) => dispatch(setCleaning(parseFloat(event.target.value).toFixed(2)))}
                handleOtherEssential= {(event) => dispatch(setOtherEssential(parseFloat(event.target.value).toFixed(2)))}
                handleLuxury= {(event) => dispatch(setLuxury(parseFloat(event.target.value).toFixed(2)))}
                handleLeisure= {(event) => dispatch(setLeisure(parseFloat(event.target.value).toFixed(2)))}
                handleHolidays= {(event) => dispatch(setHolidays(parseFloat(event.target.value).toFixed(2)))}
                handleOtherNonEssential= {(event) => dispatch(setOtherNonEssential(parseFloat(event.target.value).toFixed(2)))}
                handleUnsecured= {(event) => dispatch(setUnsecuredDebt(parseFloat(event.target.value).toFixed(2)))}
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

        </MainForm>
    )
}

export default AddBudget;