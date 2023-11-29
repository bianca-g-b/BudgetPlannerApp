import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBudget } from '../actions/budgetActions.js';
import MainForm from "./form/MainForm.jsx";
import DateInputs from './form/DateInputs.jsx';
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
import { setDateFrom, setDateTo, setIncome, setHousing, setUtilities, setFood, setTransport, setHousehold, setChildcare, setCleaning, setOtherEssential, setLuxury, setLeisure, setHolidays, setOtherNonEssential, setUnsecuredDebt } from '../redux/budgetFieldsSlice.js';


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
        // console.log(details);
        // console.log(csrfToken);
        console.log(user_id);

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
                handleTotalIncome = {(event)=> dispatch(setIncome(parseFloat(event.target.value)))}
                handleHousing = {(event)=> dispatch(setHousing(parseFloat(event.target.value)))}
                handleUtilities = {(event)=> dispatch(setUtilities(parseFloat(event.target.value)))} 
                handleFood = {(event)=> dispatch(setFood(parseFloat(event.target.value)))}
                handleTransport = {(event)=> dispatch(setTransport(parseFloat(event.target.value)))}
                handleHousehold = {(event)=> dispatch(setHousehold(parseFloat(event.target.value)))}
                handleChildcare = {(event)=> dispatch(setChildcare(parseFloat(event.target.value)))}
                handleCleaning = {(event)=> dispatch(setCleaning(parseFloat(event.target.value)))}
                handleOtherEssential = {(event)=> dispatch(setOtherEssential(parseFloat(event.target.value)))}
                handleLuxury = {(event)=> dispatch(setLuxury(parseFloat(event.target.value)))}
                handleLeisure = {(event)=> dispatch(setLeisure(parseFloat(event.target.value)))}
                handleHolidays = {(event)=> dispatch(setHolidays(parseFloat(event.target.value)))} 
                handleOtherNonEssential = {(event)=> dispatch(setOtherNonEssential(parseFloat(event.target.value)))}
                handleUnsecured = {(event)=> dispatch(setUnsecuredDebt(parseFloat(event.target.value)))}
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